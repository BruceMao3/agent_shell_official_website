import { A } from '@/lib/theme';

export function Backdrop() {
  return (
    <div
      aria-hidden
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(${A.line} 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
          maskImage:
            'radial-gradient(ellipse 90% 70% at 50% 30%,#000,transparent 70%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 90% 70% at 50% 30%,#000,transparent 70%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(${A.line} 1px,transparent 1px),linear-gradient(90deg,${A.line} 1px,transparent 1px)`,
          backgroundSize: '112px 112px',
          opacity: 0.6,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: -200,
          left: '15%',
          width: 760,
          height: 760,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(139,92,246,0.45), transparent 60%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 120,
          right: '8%',
          width: 640,
          height: 640,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(91,141,239,0.38), transparent 60%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: -260,
          left: '40%',
          width: 900,
          height: 900,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(34,211,238,0.16), transparent 60%)',
          filter: 'blur(60px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: '88vh',
          height: 1,
          background: `linear-gradient(90deg,transparent,${A.violet},transparent)`,
          opacity: 0.4,
        }}
      />
    </div>
  );
}
