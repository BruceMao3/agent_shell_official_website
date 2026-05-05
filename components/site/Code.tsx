import { Fragment } from 'react';
import { A } from '@/lib/theme';
import { CODE_SNIPPET } from '@/lib/content';
import { SectionHead } from './SectionHead';

const KEYWORDS = /\b(import|from|const|await|async|function|console|new)\b/g;
const TYPES = /\b(AgentShell)\b/g;
const STRINGS = /'[^']*'/g;
const COMMENTS = /\/\/.*$/gm;

interface Token {
  text: string;
  kind?: 'k' | 's' | 'c' | 't';
}

function tokenize(line: string): Token[] {
  const tokens: { start: number; end: number; kind: Token['kind'] }[] = [];
  for (const m of line.matchAll(COMMENTS)) {
    tokens.push({ start: m.index!, end: m.index! + m[0].length, kind: 'c' });
  }
  for (const m of line.matchAll(STRINGS)) {
    tokens.push({ start: m.index!, end: m.index! + m[0].length, kind: 's' });
  }
  for (const m of line.matchAll(KEYWORDS)) {
    tokens.push({ start: m.index!, end: m.index! + m[0].length, kind: 'k' });
  }
  for (const m of line.matchAll(TYPES)) {
    tokens.push({ start: m.index!, end: m.index! + m[0].length, kind: 't' });
  }
  tokens.sort((a, b) => a.start - b.start);
  // dedupe overlaps — earlier wins
  const filtered: typeof tokens = [];
  let lastEnd = -1;
  for (const tk of tokens) {
    if (tk.start >= lastEnd) {
      filtered.push(tk);
      lastEnd = tk.end;
    }
  }
  const out: Token[] = [];
  let cursor = 0;
  for (const tk of filtered) {
    if (tk.start > cursor) out.push({ text: line.slice(cursor, tk.start) });
    out.push({ text: line.slice(tk.start, tk.end), kind: tk.kind });
    cursor = tk.end;
  }
  if (cursor < line.length) out.push({ text: line.slice(cursor) });
  return out;
}

const COLORS: Record<NonNullable<Token['kind']>, string> = {
  k: '#c4b5fd',
  s: '#7dd3fc',
  c: '#6c628f',
  t: '#f0abfc',
};

export function Code() {
  const lines = CODE_SNIPPET.split('\n');
  return (
    <section
      style={{ padding: '40px 56px 120px', position: 'relative', zIndex: 2 }}
      aria-labelledby="sdk-title"
    >
      <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 64, alignItems: 'center' }}>
        <div>
          <SectionHead id="sdk-title" title="ASP SDK for AI Agents" />
          <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {(
              [
                ['Drop-in', 'One package, one factory, ten minutes.'],
                ['Pluggable', 'Stores: Redis, Postgres, CF KV, in-memory.'],
                ['Multi-language', 'TypeScript today. Go and Rust in beta.'],
              ] as const
            ).map(([t, d]) => (
              <div key={t} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <div
                  aria-hidden
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: '50%',
                    background: A.violet,
                    marginTop: 7,
                    boxShadow: `0 0 12px ${A.violet}`,
                  }}
                />
                <div>
                  <div style={{ color: A.ink, fontSize: 14, fontWeight: 500 }}>{t}</div>
                  <div style={{ color: A.ink2, fontSize: 13 }}>{d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            position: 'relative',
            borderRadius: 14,
            overflow: 'hidden',
            border: `1px solid ${A.cardEdge}`,
            background: 'linear-gradient(180deg,#0c0720 0%,#070318 100%)',
            boxShadow: `0 30px 80px -20px ${A.violet}55`,
          }}
        >
          <div
            style={{
              padding: '10px 14px',
              borderBottom: `1px solid ${A.line}`,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div style={{ display: 'flex', gap: 6 }}>
              <i style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57' }} />
              <i style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e' }} />
              <i style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c941' }} />
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                color: A.ink3,
                letterSpacing: '0.14em',
              }}
            >
              quickstart.ts
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: A.ink3 }}>v1.2</div>
          </div>
          <pre
            style={{
              margin: 0,
              padding: '22px 22px 26px',
              fontFamily: 'var(--font-mono)',
              fontSize: 13,
              lineHeight: 1.7,
              color: A.ink2,
              overflow: 'auto',
            }}
          >
            <code>
              {lines.map((ln, i) => {
                const toks = tokenize(ln);
                return (
                  <div key={i} style={{ display: 'flex', gap: 18 }}>
                    <span style={{ color: A.ink3, userSelect: 'none', width: 20, textAlign: 'right' }}>{i + 1}</span>
                    <span>
                      {toks.length ? (
                        toks.map((tk, j) => (
                          <Fragment key={j}>
                            <span style={tk.kind ? { color: COLORS[tk.kind] } : undefined}>{tk.text}</span>
                          </Fragment>
                        ))
                      ) : (
                        ' '
                      )}
                    </span>
                  </div>
                );
              })}
            </code>
          </pre>
          <div
            style={{
              padding: '10px 16px',
              borderTop: `1px solid ${A.line}`,
              display: 'flex',
              justifyContent: 'flex-end',
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              color: A.ink3,
              letterSpacing: '0.16em',
            }}
          >
            EIP-712 · KEYEPOCH · NONCE
          </div>
        </div>
      </div>
    </section>
  );
}
