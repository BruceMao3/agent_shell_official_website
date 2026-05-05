import type { CSSProperties, ReactNode } from 'react';
import { A } from '@/lib/theme';

const stripeBase: CSSProperties = {
  position: 'relative',
  borderTop: `1px solid ${A.line}`,
  borderBottom: `1px solid ${A.line}`,
  overflow: 'hidden',
};

// C1 — Mega stripe: full-bleed enormous wordmark.
export function HeroBannerC1() {
  return (
    <div style={{ ...stripeBase, padding: '36px 56px 40px', background: 'linear-gradient(180deg, rgba(139,92,246,0.05), transparent)' }}>
      <div
        aria-hidden
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: '50%',
          height: 1,
          background: `linear-gradient(90deg, transparent, ${A.violet}, transparent)`,
          opacity: 0.35,
        }}
      />
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(64px, 9.5vw, 156px)',
          fontWeight: 500,
          letterSpacing: '-0.03em',
          lineHeight: 0.92,
          textAlign: 'center',
          color: 'transparent',
          backgroundImage: A.gradTxt,
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          whiteSpace: 'nowrap',
          position: 'relative',
        }}
      >
        Agent Shell Protocol
      </div>
    </div>
  );
}

// C4 — Stacked: kicker + display.
export function HeroBannerC4() {
  return (
    <div
      style={{
        ...stripeBase,
        padding: '32px 56px 36px',
        background: 'linear-gradient(180deg, rgba(139,92,246,0.04), transparent)',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          letterSpacing: '0.5em',
          color: A.ink3,
          marginBottom: 18,
        }}
      >
        ╌╌&nbsp;&nbsp;PROTOCOL · v2.1 · MAINNET&nbsp;&nbsp;╌╌
      </div>
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(64px, 9vw, 144px)',
          fontWeight: 500,
          letterSpacing: '-0.035em',
          lineHeight: 0.9,
          whiteSpace: 'nowrap',
          color: 'transparent',
          backgroundImage: A.gradTxt,
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
        }}
      >
        Agent Shell
      </div>
    </div>
  );
}

const VARIANTS: Record<string, () => ReactNode> = {
  c1: HeroBannerC1,
  c4: HeroBannerC4,
};

export function HeroBanner({ variant }: { variant?: string }) {
  const key = (variant ?? '').toLowerCase();
  if (!key || !(key in VARIANTS)) return null;
  const C = VARIANTS[key];
  return <C />;
}
