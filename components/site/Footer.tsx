import { A, SITE } from '@/lib/theme';

const COLS: Record<string, { label: string; href: string }[]> = {
  Protocol: [
    { label: 'Overview', href: '/docs/protocol' },
    { label: 'Agent Shell', href: '/docs/protocol/agent-shell' },
    { label: 'Service Registry', href: '/docs/protocol/service-registry' },
    { label: 'Verifier Registry', href: '/docs/protocol/verifier-registry' },
    { label: 'EIP-712 Signatures', href: '/docs/protocol/eip-712' },
    { label: 'Events', href: '/docs/protocol/events' },
    { label: 'Contract Addresses', href: '/docs/protocol/contracts' },
  ],
  Builders: [
    { label: 'SDK Quickstart', href: '/docs/builders/quickstart' },
    { label: 'API Reference', href: '/docs/builders/api' },
    { label: 'Examples', href: '/docs/builders/examples' },
    { label: 'Best Practices', href: '/docs/builders/best-practices' },
    { label: 'Common Mistakes', href: '/docs/builders/common-mistakes' },
    { label: 'Activity API Spec', href: '/docs/builders/activity-api' },
  ],
  Ecosystem: [
    { label: 'Services Directory', href: '/docs/ecosystem/services' },
    { label: 'Verifiers Directory', href: '/docs/ecosystem/verifiers' },
    { label: 'Portals', href: '/docs/ecosystem/portals' },
    { label: 'Partners', href: '/docs/ecosystem/partners' },
    { label: 'Showcase', href: '/docs/ecosystem/showcase' },
    { label: 'Brand & Media Kit', href: '/docs/ecosystem/brand' },
  ],
  Community: [
    { label: 'GitHub', href: SITE.repo },
    { label: 'Discord', href: 'https://discord.gg/agentshell' },
    { label: 'X / Twitter', href: 'https://x.com/agentshell' },
    { label: 'Forum', href: 'https://forum.agentshell.network' },
    { label: 'Security Disclosure', href: '/docs/security' },
    { label: 'Research Papers', href: '/docs/research' },
  ],
};

export function Footer() {
  return (
    <footer
      style={{
        position: 'relative',
        zIndex: 2,
        padding: '80px 56px 56px',
        borderTop: `1px solid ${A.line2}`,
        background: 'linear-gradient(180deg,transparent,rgba(139,92,246,0.04))',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr repeat(4,1fr)',
          gap: 40,
          marginBottom: 64,
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
            <div
              aria-hidden
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                background: A.gradAccent,
                boxShadow: `0 0 24px ${A.violet}66, inset 0 0 0 1px rgba(255,255,255,0.2)`,
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 14,
                letterSpacing: '0.18em',
                color: A.ink,
              }}
            >
              AGENT&nbsp;SHELL
            </span>
          </div>
          <p style={{ fontSize: 13, color: A.ink2, lineHeight: 1.6, maxWidth: 280 }}>
            A neutral protocol stewarded by an open foundation. All code MIT,
            all standards published openly, all decisions transparent.
          </p>
          <div
            style={{
              marginTop: 22,
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              color: A.ink3,
              letterSpacing: '0.14em',
            }}
          >
            ↳ docs.agentshell.network
          </div>
        </div>
        {Object.entries(COLS).map(([k, v]) => (
          <div key={k}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                color: A.violet,
                letterSpacing: '0.18em',
                marginBottom: 18,
              }}
            >
              {k.toUpperCase()}
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {v.map((i) => (
                <li key={i.href}>
                  <a
                    href={i.href}
                    style={{ fontSize: 13, color: A.ink2, textDecoration: 'none' }}
                  >
                    {i.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: 32,
          borderTop: `1px solid ${A.line}`,
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          color: A.ink3,
          letterSpacing: '0.14em',
        }}
      >
        <div>© 2026 AGENT SHELL FOUNDATION · MIT</div>
        <div>BLOCK 19,427,182 · 142 SERVICES · 17 VERIFIERS · 38,419 SHELLS</div>
      </div>
    </footer>
  );
}
