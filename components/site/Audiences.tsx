import { A } from '@/lib/theme';
import { AUDIENCES } from '@/lib/content';
import { SectionHead } from './SectionHead';

export function Audiences() {
  return (
    <section
      style={{ padding: '40px 56px 120px', position: 'relative', zIndex: 2 }}
      aria-labelledby="audiences-title"
    >
      <SectionHead id="audiences-title" title="Three doors into the protocol." />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3,1fr)',
          gap: 20,
          marginTop: 56,
        }}
      >
        {AUDIENCES.map((a, i) => (
          <article
            key={a.tag}
            style={{
              position: 'relative',
              padding: '32px 28px 28px',
              borderRadius: 14,
              background:
                'linear-gradient(180deg,rgba(139,92,246,0.08),rgba(139,92,246,0.02))',
              border: `1px solid ${A.cardEdge}`,
              backdropFilter: 'blur(8px)',
              overflow: 'hidden',
              minHeight: 340,
            }}
          >
            <div
              aria-hidden
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: 140,
                height: 140,
                backgroundImage: `radial-gradient(circle at top right, ${
                  i === 0 ? A.violet : i === 1 ? A.cyan : A.pink
                }33, transparent 70%)`,
              }}
            />
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                letterSpacing: '0.2em',
                color: A.ink3,
              }}
            >
              0{i + 1} · {a.tag}
            </div>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 32,
                letterSpacing: '-0.02em',
                color: A.ink,
                margin: '14px 0 14px',
                fontWeight: 500,
              }}
            >
              {a.title}
            </h3>
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.55,
                color: A.ink2,
                margin: 0,
              }}
            >
              {a.body}
            </p>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: '24px 0',
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
              }}
            >
              {a.points.map((p) => (
                <li
                  key={p}
                  style={{
                    fontSize: 13,
                    color: A.ink2,
                    display: 'flex',
                    gap: 10,
                    alignItems: 'flex-start',
                  }}
                >
                  <span
                    aria-hidden
                    style={{
                      color: A.violet,
                      fontFamily: 'var(--font-mono)',
                      fontSize: 11,
                      marginTop: 2,
                    }}
                  >
                    ▸
                  </span>
                  {p}
                </li>
              ))}
            </ul>
            <a
              href={a.href}
              style={{
                position: 'absolute',
                bottom: 24,
                left: 28,
                right: 28,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: 18,
                borderTop: `1px solid ${A.line}`,
                color: A.ink,
                textDecoration: 'none',
                fontSize: 13,
              }}
            >
              <span>{a.cta}</span>
              <span aria-hidden style={{ color: A.violet }}>
                →
              </span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
