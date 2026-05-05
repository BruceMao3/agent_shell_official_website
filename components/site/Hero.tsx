import { A } from '@/lib/theme';
import { Globe } from './Globe';
import { CTA } from './Button';

export function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        padding: '80px 56px 120px',
        display: 'grid',
        gridTemplateColumns: '1.05fr 0.95fr',
        gap: 40,
        alignItems: 'center',
        zIndex: 2,
      }}
      aria-labelledby="hero-headline"
    >
      <div>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            padding: '7px 14px',
            borderRadius: 99,
            border: `1px solid ${A.line2}`,
            background: 'rgba(139,92,246,0.06)',
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '0.16em',
            color: A.ink2,
            marginBottom: 32,
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: A.violet,
              boxShadow: `0 0 12px ${A.violet}`,
            }}
          />
          AGENT SHELL PROTOCOL · MAINNET LIVE
        </div>
        <h1
          id="hero-headline"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 88,
            lineHeight: 0.96,
            letterSpacing: '-0.035em',
            margin: 0,
            fontWeight: 500,
            color: A.ink,
          }}
        >
          Identity System for
          <br />
          <span
            style={{
              backgroundImage: A.gradTxt,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            AI Agent
          </span>
        </h1>
        <p
          style={{
            fontSize: 18,
            lineHeight: 1.55,
            color: A.ink2,
            maxWidth: 540,
            marginTop: 28,
          }}
        >
          Agent Shell Protocol is a neutral primitive for AI agent identity —
          ownable, transferable, replay-safe by construction, surrounded by an
          open ecosystem of services, verifiers and portals.
        </p>
        <div style={{ display: 'flex', gap: 14, marginTop: 40 }}>
          <CTA href="/docs" primary style={{ padding: '14px 22px', fontSize: 14 }}>
            Get started →
          </CTA>
          <CTA href="/docs/protocol" style={{ padding: '14px 22px', fontSize: 14 }}>
            Read the spec
          </CTA>
        </div>
        <dl
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2,1fr)',
            gap: 32,
            marginTop: 64,
            paddingTop: 32,
            borderTop: `1px solid ${A.line}`,
            maxWidth: 460,
          }}
        >
          {[
            { v: '142', l: 'Registered services' },
            { v: '38,419', l: 'Shells minted' },
          ].map((s) => (
            <div key={s.l}>
              <dd
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 38,
                  letterSpacing: '-0.02em',
                  color: A.ink,
                  margin: 0,
                }}
              >
                {s.v}
              </dd>
              <dt
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  color: A.ink3,
                  letterSpacing: '0.14em',
                  marginTop: 6,
                }}
              >
                {s.l.toUpperCase()}
              </dt>
            </div>
          ))}
        </dl>
      </div>
      <div style={{ position: 'relative', aspectRatio: '1/1' }}>
        <Globe />
      </div>
    </section>
  );
}
