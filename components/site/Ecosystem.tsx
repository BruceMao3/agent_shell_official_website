import { Fragment, type ReactNode } from 'react';
import { A } from '@/lib/theme';
import { ECOSYSTEM_LOGOS } from '@/lib/content';
import { SectionHead } from './SectionHead';

function Marquee({
  children,
  speed = 40,
  reverse = false,
}: {
  children: ReactNode;
  speed?: number;
  reverse?: boolean;
}) {
  return (
    <div
      aria-hidden
      style={{
        position: 'relative',
        overflow: 'hidden',
        maskImage:
          'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
        WebkitMaskImage:
          'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
      }}
    >
      <div
        style={{
          display: 'inline-flex',
          gap: 48,
          animation: `asp-marquee ${speed}s linear infinite${reverse ? ' reverse' : ''}`,
          whiteSpace: 'nowrap',
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}

function Logo({ n }: { n: string }) {
  return (
    <div
      style={{
        padding: '18px 24px',
        borderRadius: 10,
        minWidth: 180,
        border: `1px solid ${A.cardEdge}`,
        background: 'rgba(139,92,246,0.04)',
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        color: A.ink2,
        letterSpacing: '0.06em',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
      }}
    >
      <span
        aria-hidden
        style={{
          width: 7,
          height: 7,
          borderRadius: '50%',
          background: A.violet,
          boxShadow: `0 0 8px ${A.violet}`,
        }}
      />
      {n}
    </div>
  );
}

export function Ecosystem() {
  const services = ECOSYSTEM_LOGOS.filter((l) => l.cat === 'Service');
  const verifiers = ECOSYSTEM_LOGOS.filter((l) => l.cat === 'Verifier');
  const portals = ECOSYSTEM_LOGOS.filter((l) => l.cat === 'Portal');
  return (
    <section
      style={{ padding: '40px 0 120px', position: 'relative', zIndex: 2 }}
      aria-labelledby="ecosystem-title"
    >
      <div style={{ padding: '0 56px' }}>
        <SectionHead
          id="ecosystem-title"
          title="An open economy of AI agent services."
          sub="Anyone can register a service. Anyone can run a verifier. Anyone can host a portal. The protocol stays neutral."
        />
        <noscript>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: '32px 0 0',
              display: 'flex',
              flexWrap: 'wrap',
              gap: 12,
            }}
          >
            {ECOSYSTEM_LOGOS.map((l) => (
              <li
                key={l.name}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 13,
                  color: A.ink2,
                  border: `1px solid ${A.cardEdge}`,
                  borderRadius: 8,
                  padding: '10px 14px',
                }}
              >
                {l.name} <span style={{ color: A.ink3 }}>· {l.cat}</span>
              </li>
            ))}
          </ul>
        </noscript>
      </div>
      <div style={{ marginTop: 48, display: 'flex', flexDirection: 'column', gap: 18 }}>
        <Marquee speed={50}>
          {[...services, ...services].map((l, i) => (
            <Fragment key={i}>
              <Logo n={l.name} />
            </Fragment>
          ))}
        </Marquee>
        <Marquee speed={60} reverse>
          {[...verifiers, ...portals, ...verifiers, ...portals].map((l, i) => (
            <Fragment key={i}>
              <Logo n={l.name} />
            </Fragment>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
