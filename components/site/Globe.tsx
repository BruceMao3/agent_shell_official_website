'use client';

import { useEffect, useState } from 'react';
import { A } from '@/lib/theme';

// Rotating wireframe globe — preserved 1:1 from prototype.
// Client component because it uses requestAnimationFrame.
export function Globe() {
  const [t, setT] = useState(0);
  useEffect(() => {
    let raf = 0;
    let start: number | null = null;
    const tick = (ts: number) => {
      if (start === null) start = ts;
      setT((ts - start) / 1000);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const cx = 300;
  const cy = 300;
  const R = 220;

  const lons = Array.from({ length: 12 }).map((_, i) => {
    const ang = (i / 12) * Math.PI + t * 0.06;
    const rx = Math.abs(Math.cos(ang)) * R;
    return (
      <ellipse
        key={i}
        cx={cx}
        cy={cy}
        rx={rx}
        ry={R}
        fill="none"
        stroke={i % 3 === 0 ? A.violet : A.line2}
        strokeWidth={i % 3 === 0 ? 0.9 : 0.6}
        opacity={0.55 + Math.cos(ang) * 0.3}
      />
    );
  });

  const lats = Array.from({ length: 9 }).map((_, i) => {
    const k = (i - 4) / 4;
    const ry = R * Math.sqrt(1 - k * k);
    const yy = cy + k * R;
    return (
      <ellipse
        key={i}
        cx={cx}
        cy={yy}
        rx={R * Math.sqrt(1 - k * k)}
        ry={ry * 0.18}
        fill="none"
        stroke={A.line2}
        strokeWidth={0.5}
        opacity={0.7}
      />
    );
  });

  const nodes = Array.from({ length: 7 }).map((_, i) => {
    const a = t * 0.4 + i * ((Math.PI * 2) / 7);
    const tilt = Math.sin(i * 1.7);
    const x = cx + Math.cos(a) * R * 1.18;
    const y = cy + Math.sin(a) * R * 0.46 + tilt * 30;
    const z = Math.sin(a);
    return { x, y, z, i };
  });

  return (
    <svg
      viewBox="0 0 600 600"
      role="img"
      aria-label="Rotating AI agent identity network globe"
      style={{ width: '100%', height: '100%', display: 'block', overflow: 'visible' }}
    >
      <defs>
        <radialGradient id="globeCore" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1e1140" stopOpacity="0.9" />
          <stop offset="65%" stopColor="#0a0518" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#06030f" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="haze" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ringStroke" x1="0" x2="1">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0" />
          <stop offset="50%" stopColor="#8B5CF6" stopOpacity="1" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
        </linearGradient>
      </defs>
      <circle cx={cx} cy={cy} r={R * 1.6} fill="url(#haze)" />
      {[1.32, 1.48, 1.62].map((m, i) => (
        <g key={i} transform={`rotate(${-15 + i * 8} ${cx} ${cy})`}>
          <ellipse
            cx={cx}
            cy={cy}
            rx={R * m}
            ry={R * m * 0.32}
            fill="none"
            stroke="url(#ringStroke)"
            strokeWidth={i === 1 ? 1.2 : 0.7}
            strokeDasharray={i === 2 ? '4 8' : 'none'}
            opacity={0.7}
          />
        </g>
      ))}
      <circle cx={cx} cy={cy} r={R} fill="url(#globeCore)" />
      <circle cx={cx} cy={cy} r={R} fill="none" stroke={A.violet} strokeWidth={1} opacity={0.7} />
      {lats}
      {lons}
      {nodes.map((n) => (
        <g key={n.i} opacity={0.5 + n.z * 0.5}>
          <circle cx={n.x} cy={n.y} r={3 + n.z * 2} fill={n.i % 2 ? A.violet : A.cyan} />
          <circle cx={n.x} cy={n.y} r={9} fill={n.i % 2 ? A.violet : A.cyan} opacity={0.18} />
          <line
            x1={cx}
            y1={cy}
            x2={n.x}
            y2={n.y}
            stroke={A.violet}
            strokeWidth={0.4}
            opacity={0.25}
            strokeDasharray="2 4"
          />
        </g>
      ))}
      <circle cx={cx} cy={cy} r={6} fill="#fff" />
      <circle
        cx={cx}
        cy={cy}
        r={6 + Math.sin(t * 2) * 4 + 8}
        fill="none"
        stroke={A.violet}
        strokeWidth={1}
        opacity={0.5 - Math.sin(t * 2) * 0.2}
      />
    </svg>
  );
}
