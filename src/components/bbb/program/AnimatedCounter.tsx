'use client';

import { useEffect, useRef, useState } from "react";

export function AnimatedCounter({
  value,
  duration = 1800,
  format = (n: number) => Math.round(n).toLocaleString(),
  prefix = "",
  suffix = "",
  style,
}: {
  value: number;
  duration?: number;
  format?: (n: number) => string;
  prefix?: string;
  suffix?: string;
  style?: React.CSSProperties;
}) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const animate = (now: number) => {
              const t = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - t, 3);
              setDisplay(value * eased);
              if (t < 1) requestAnimationFrame(animate);
            };
            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} style={style}>
      {prefix}
      {format(display)}
      {suffix}
    </span>
  );
}
