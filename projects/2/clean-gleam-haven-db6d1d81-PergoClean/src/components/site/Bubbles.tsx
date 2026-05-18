const bubbles = Array.from({ length: 22 }).map((_, i) => {
  // Varied size buckets: small, medium, large, hero
  const bucket = Math.random();
  const s =
    bucket < 0.35 ? 8 + Math.random() * 10 :
    bucket < 0.7  ? 20 + Math.random() * 18 :
    bucket < 0.92 ? 40 + Math.random() * 22 :
                    65 + Math.random() * 25;
  return {
    x: 1 + Math.random() * 22,
    s,
    d: 10 + Math.random() * 12,
    delay: Math.random() * 12,
    sway: 8 + Math.random() * 18,
    key: i,
  };
});

export function Bubbles() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      {bubbles.map((b) => (
        <span
          key={b.key}
          className="bubble"
          style={
            {
              ["--x" as string]: `${b.x}%`,
              ["--s" as string]: `${b.s}px`,
              ["--d" as string]: `${b.d}s`,
              ["--delay" as string]: `${b.delay}s`,
              ["--sway" as string]: `${b.sway}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
