import { A, SITE } from '@/lib/theme';
import { CTA } from './Button';

const links = [
  { label: 'Protocol', href: '/docs/protocol' },
  { label: 'Service Providers', href: '/docs/builders' },
  { label: 'Operators', href: '/docs/operators' },
  { label: 'Docs', href: '/docs' },
];

export function Nav() {
  return (
    <nav
      style={{
        position: 'relative',
        zIndex: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px 56px',
        borderBottom: `1px solid ${A.line}`,
        gap: 40,
      }}
    >
      <a
        href="/"
        aria-label={`${SITE.name} home`}
        style={{
          position: 'relative',
          fontFamily: 'var(--font-display)',
          fontSize: 22,
          fontWeight: 500,
          letterSpacing: '-0.015em',
          lineHeight: 1,
          whiteSpace: 'nowrap',
          flexShrink: 0,
          color: 'transparent',
          backgroundImage: A.gradTxt,
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          textDecoration: 'none',
        }}
      >
        Agent Shell Protocol
      </a>
      <div style={{ display: 'flex', gap: 32, fontSize: 13, color: A.ink2 }}>
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            {l.label}
          </a>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
        <CTA href="/docs/protocol/whitepaper" style={{ padding: '9px 16px' }}>
          Whitepaper
        </CTA>
        <CTA href="https://portal.agentshell.network" primary style={{ padding: '9px 16px' }}>
          Launch portal →
        </CTA>
      </div>
    </nav>
  );
}
