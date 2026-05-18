"use client";

import { useRef, useState, useEffect, useMemo, useCallback, createElement, memo } from "react";

export enum Tag {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  P = "p",
}

type VaporizeTextCycleProps = {
  texts: string[];
  font?: { fontFamily?: string; fontSize?: string; fontWeight?: number };
  color?: string;
  spread?: number;
  density?: number;
  animation?: { vaporizeDuration?: number; fadeInDuration?: number; waitDuration?: number };
  direction?: "left-to-right" | "right-to-left";
  alignment?: "left" | "center" | "right";
  tag?: Tag;
};

type Particle = {
  x: number; y: number; originalX: number; originalY: number;
  color: string; opacity: number; originalAlpha: number;
  velocityX: number; velocityY: number; angle: number; speed: number; shouldFadeQuickly?: boolean;
};

type TextBoundaries = { left: number; right: number; width: number };

declare global { interface HTMLCanvasElement { textBoundaries?: TextBoundaries; } }

function transformValue(input: number, inputRange: number[], outputRange: number[], clamp = false): number {
  const [inputMin, inputMax] = inputRange;
  const [outputMin, outputMax] = outputRange;
  const progress = (input - inputMin) / (inputMax - inputMin);
  let result = outputMin + progress * (outputMax - outputMin);
  if (clamp) result = Math.max(Math.min(result, outputMax), outputMin);
  return result;
}

function useIsInView(ref: React.RefObject<HTMLElement | null>) {
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) => setIsInView(entry.isIntersecting), { threshold: 0, rootMargin: "50px" });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return isInView;
}

function parseColor(color: string): string {
  const rgbMatch = color.match(/rgb\((\d+),\s*(\d+),\s*(\d+)/);
  if (rgbMatch) return `rgba(${rgbMatch[1]},${rgbMatch[2]},${rgbMatch[3]},1)`;
  return "rgba(0,0,0,1)";
}

function calculateVaporizeSpread(fontSize: number): number {
  const points = [{ size: 20, spread: 0.2 }, { size: 50, spread: 0.5 }, { size: 100, spread: 1.5 }];
  if (fontSize <= points[0].size) return points[0].spread;
  if (fontSize >= points[points.length - 1].size) return points[points.length - 1].spread;
  let i = 0;
  while (i < points.length - 1 && points[i + 1].size < fontSize) i++;
  const p1 = points[i], p2 = points[i + 1];
  return p1.spread + (fontSize - p1.size) * (p2.spread - p1.spread) / (p2.size - p1.size);
}

function createParticles(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, text: string, textX: number, textY: number, font: string, color: string, alignment: "left" | "center" | "right") {
  const particles: Particle[] = [];
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = color;
  ctx.font = font;
  ctx.textAlign = alignment;
  ctx.textBaseline = "middle";
  ctx.imageSmoothingQuality = "high";
  ctx.imageSmoothingEnabled = true;

  const metrics = ctx.measureText(text);
  let textLeft: number;
  const textWidth = metrics.width;
  if (alignment === "center") textLeft = textX - textWidth / 2;
  else if (alignment === "left") textLeft = textX;
  else textLeft = textX - textWidth;

  const textBoundaries = { left: textLeft, right: textLeft + textWidth, width: textWidth };
  ctx.fillText(text, textX, textY);

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  const sampleRate = 3;

  for (let y = 0; y < canvas.height; y += sampleRate) {
    for (let x = 0; x < canvas.width; x += sampleRate) {
      const index = (y * canvas.width + x) * 4;
      const alpha = data[index + 3];
      if (alpha > 0) {
        const originalAlpha = alpha / 255;
        particles.push({ x, y, originalX: x, originalY: y, color: `rgba(${data[index]},${data[index+1]},${data[index+2]},${originalAlpha})`, opacity: originalAlpha, originalAlpha, velocityX: 0, velocityY: 0, angle: 0, speed: 0 });
      }
    }
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  return { particles, textBoundaries };
}

function renderParticles(ctx: CanvasRenderingContext2D, particles: Particle[], dpr: number) {
  ctx.save();
  ctx.scale(dpr, dpr);
  particles.forEach((p) => {
    if (p.opacity > 0) {
      ctx.fillStyle = p.color.replace(/[\d.]+\)$/, `${p.opacity})`);
      ctx.fillRect(p.x / dpr, p.y / dpr, 1, 1);
    }
  });
  ctx.restore();
}

function resetParticles(particles: Particle[]) {
  particles.forEach((p) => {
    p.x = p.originalX; p.y = p.originalY; p.opacity = p.originalAlpha; p.speed = 0; p.velocityX = 0; p.velocityY = 0;
  });
}

export default function VaporizeTextCycle({
  texts = ["Next.js", "React"],
  font = { fontFamily: "sans-serif", fontSize: "50px", fontWeight: 400 },
  color = "rgb(255, 255, 255)",
  spread = 5,
  density = 5,
  animation = { vaporizeDuration: 2, fadeInDuration: 1, waitDuration: 0.5 },
  direction = "left-to-right",
  alignment = "center",
  tag = Tag.P,
}: VaporizeTextCycleProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isInView = useIsInView(wrapperRef);
  const lastFontRef = useRef<string | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [animationState, setAnimationState] = useState<"static" | "vaporizing" | "fadingIn" | "waiting">("static");
  const vaporizeProgressRef = useRef(0);
  const fadeOpacityRef = useRef(0);
  const [wrapperSize, setWrapperSize] = useState({ width: 0, height: 0 });
  const transformedDensity = transformValue(density, [0, 10], [0.3, 1], true);

  const globalDpr = useMemo(() => typeof window !== "undefined" ? window.devicePixelRatio * 1.5 || 1 : 1, []);

  const fontConfig = useMemo(() => {
    const fontSize = parseInt(font.fontSize?.replace("px", "") || "50");
    const VAPORIZE_SPREAD = calculateVaporizeSpread(fontSize);
    return { fontSize, VAPORIZE_SPREAD, MULTIPLIED_VAPORIZE_SPREAD: VAPORIZE_SPREAD * spread, font: `${font.fontWeight ?? 400} ${fontSize * globalDpr}px ${font.fontFamily}` };
  }, [font.fontSize, font.fontWeight, font.fontFamily, spread, globalDpr]);

  const animationDurations = useMemo(() => ({
    VAPORIZE_DURATION: (animation.vaporizeDuration ?? 2) * 1000,
    FADE_IN_DURATION: (animation.fadeInDuration ?? 1) * 1000,
    WAIT_DURATION: (animation.waitDuration ?? 0.5) * 1000,
  }), [animation.vaporizeDuration, animation.fadeInDuration, animation.waitDuration]);

  useEffect(() => {
    if (isInView) { setAnimationState("vaporizing"); }
    else { setAnimationState("static"); particlesRef.current = []; }
  }, [isInView]);

  useEffect(() => {
    if (!isInView) return;
    let lastTime = performance.now(); let frameId: number;
    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 1000; lastTime = currentTime;
      const canvas = canvasRef.current; const ctx = canvas?.getContext("2d");
      if (!canvas || !ctx || !particlesRef.current.length) { frameId = requestAnimationFrame(animate); return; }
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      switch (animationState) {
        case "vaporizing": {
          vaporizeProgressRef.current += deltaTime * 100 / (animationDurations.VAPORIZE_DURATION / 1000);
          const textBoundaries = canvas.textBoundaries;
          if (!textBoundaries) { frameId = requestAnimationFrame(animate); return; }
          const progress = Math.min(100, vaporizeProgressRef.current);
          const vaporizeX = direction === "left-to-right"
            ? textBoundaries.left + textBoundaries.width * progress / 100
            : textBoundaries.right - textBoundaries.width * progress / 100;

          let allVaporized = true;
          particlesRef.current.forEach((particle) => {
            const shouldVaporize = direction === "left-to-right" ? particle.originalX <= vaporizeX : particle.originalX >= vaporizeX;
            if (shouldVaporize) {
              if (particle.speed === 0) {
                particle.angle = Math.random() * Math.PI * 2;
                particle.speed = (Math.random() * 1 + 0.5) * fontConfig.MULTIPLIED_VAPORIZE_SPREAD;
                particle.velocityX = Math.cos(particle.angle) * particle.speed;
                particle.velocityY = Math.sin(particle.angle) * particle.speed;
                particle.shouldFadeQuickly = Math.random() > transformedDensity;
              }
              if (particle.shouldFadeQuickly) particle.opacity = Math.max(0, particle.opacity - deltaTime);
              else {
                const dx = particle.originalX - particle.x, dy = particle.originalY - particle.y;
                const distanceFromOrigin = Math.sqrt(dx * dx + dy * dy);
                const dampingFactor = Math.max(0.95, 1 - distanceFromOrigin / (100 * fontConfig.MULTIPLIED_VAPORIZE_SPREAD));
                const spreadX = (Math.random() - 0.5) * fontConfig.MULTIPLIED_VAPORIZE_SPREAD * 3;
                const spreadY = (Math.random() - 0.5) * fontConfig.MULTIPLIED_VAPORIZE_SPREAD * 3;
                particle.velocityX = (particle.velocityX + spreadX + dx * 0.002) * dampingFactor;
                particle.velocityY = (particle.velocityY + spreadY + dy * 0.002) * dampingFactor;
                const maxVelocity = fontConfig.MULTIPLIED_VAPORIZE_SPREAD * 2;
                const currentVelocity = Math.sqrt(particle.velocityX ** 2 + particle.velocityY ** 2);
                if (currentVelocity > maxVelocity) { const scale = maxVelocity / currentVelocity; particle.velocityX *= scale; particle.velocityY *= scale; }
                particle.x += particle.velocityX * deltaTime * 20;
                particle.y += particle.velocityY * deltaTime * 10;
                particle.opacity = Math.max(0, particle.opacity - deltaTime * 0.25);
              }
              if (particle.opacity > 0.01) allVaporized = false;
            } else allVaporized = false;
          });
          renderParticles(ctx, particlesRef.current, globalDpr);
          if (vaporizeProgressRef.current >= 100 && allVaporized) {
            setCurrentTextIndex((prev) => (prev + 1) % texts.length);
            setAnimationState("fadingIn"); fadeOpacityRef.current = 0;
          }
          break;
        }
        case "fadingIn": {
          fadeOpacityRef.current += deltaTime * 1000 / animationDurations.FADE_IN_DURATION;
          particlesRef.current.forEach((p) => { p.x = p.originalX; p.y = p.originalY; p.opacity = Math.min(fadeOpacityRef.current, 1) * p.originalAlpha; });
          renderParticles(ctx, particlesRef.current, globalDpr);
          if (fadeOpacityRef.current >= 1) {
            setAnimationState("waiting");
            setTimeout(() => { setAnimationState("vaporizing"); vaporizeProgressRef.current = 0; resetParticles(particlesRef.current); }, animationDurations.WAIT_DURATION);
          }
          break;
        }
        default: renderParticles(ctx, particlesRef.current, globalDpr);
      }
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);
    return () => { if (frameId) cancelAnimationFrame(frameId); };
  }, [animationState, isInView, texts.length, direction, globalDpr, fontConfig, animationDurations, transformedDensity]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper || !wrapperSize.width || !wrapperSize.height) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const { width, height } = wrapperSize;
    canvas.style.width = `${width}px`; canvas.style.height = `${height}px`;
    canvas.width = Math.floor(width * globalDpr); canvas.height = Math.floor(height * globalDpr);
    const fontSize = parseInt(font.fontSize?.replace("px", "") || "50");
    const fontStr = `${font.fontWeight ?? 400} ${fontSize * globalDpr}px ${font.fontFamily}`;
    const parsedColor = parseColor(color);
    let textX: number;
    if (alignment === "center") textX = canvas.width / 2;
    else if (alignment === "left") textX = 0;
    else textX = canvas.width;
    const { particles, textBoundaries } = createParticles(ctx, canvas, texts[currentTextIndex] || "Next.js", textX, canvas.height / 2, fontStr, parsedColor, alignment as "left" | "center" | "right");
    particlesRef.current = particles;
    canvas.textBoundaries = textBoundaries;
  }, [texts, font, color, alignment, wrapperSize, currentTextIndex, globalDpr]);

  useEffect(() => {
    const container = wrapperRef.current;
    if (!container) return;
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        setWrapperSize({ width, height });
      }
    });
    ro.observe(container);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (wrapperRef.current) {
      const rect = wrapperRef.current.getBoundingClientRect();
      setWrapperSize({ width: rect.width, height: rect.height });
    }
  }, []);

  const safeTag = Object.values(Tag).includes(tag) ? tag : "p";

  return (
    <div ref={wrapperRef} className="relative w-full h-full">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ minWidth: "30px", minHeight: "20px" }} />
      <div style={{ position: "absolute", width: "0", height: "0", overflow: "hidden", userSelect: "none", pointerEvents: "none" }}>
        {createElement(safeTag, {}, texts.join(" "))}
      </div>
    </div>
  );
}