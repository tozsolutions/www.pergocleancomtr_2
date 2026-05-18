"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { logo } from "@/assets";

interface CpuArchitectureProps {
  className?: string;
}

export function CpuArchitecture({ className }: CpuArchitectureProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const rings = Array.from({ length: 4 }, (_, i) => ({
      radius: 40 + i * 35,
      speed: (0.002 + i * 0.001) * (i % 2 === 0 ? 1 : -1),
      angle: Math.random() * Math.PI * 2,
      opacity: 0.3 + i * 0.15,
      nodes: Array.from({ length: 8 + i * 2 }, () => ({
        angle: Math.random() * Math.PI * 2,
        radiusOffset: 0,
      })),
    }));

    const nodes = Array.from({ length: 24 }, (_, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 3 + 1,
      pulse: Math.random() * Math.PI * 2,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      rings.forEach((ring) => {
        ring.angle += ring.speed;

        ctx.beginPath();
        ctx.arc(cx, cy, ring.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(40, 90, 200, ${ring.opacity})`;
        ctx.lineWidth = 1;
        ctx.setLineDash([5, 5]);
        ctx.stroke();
        ctx.setLineDash([]);

        ring.nodes.forEach((node, ni) => {
          node.angle += 0.005 * (ni % 2 === 0 ? 1 : -1);
          const nx = cx + Math.cos(node.angle + ring.angle) * ring.radius;
          const ny = cy + Math.sin(node.angle + ring.angle) * ring.radius;

          ctx.beginPath();
          ctx.arc(nx, ny, 4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(201, 169, 110, ${ring.opacity})`;
          ctx.fill();
        });
      });

      nodes.forEach((node) => {
        node.pulse += 0.03;
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${0.3 + Math.sin(node.pulse) * 0.2})`;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    const ro = new ResizeObserver(() => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    });
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(animationRef.current);
      ro.disconnect();
    };
  }, []);

  return (
    <div className={`relative ${className}`}>
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ width: "100%", height: "100%" }} />
      <div className="relative z-10 flex items-center justify-center">
        <Image src={logo} alt="PergoClean" width={280} height={280} className="drop-shadow-[0_20px_40px_rgba(40,90,200,0.4)]" />
      </div>
    </div>
  );
}