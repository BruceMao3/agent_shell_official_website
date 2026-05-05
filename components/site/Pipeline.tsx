'use client';

import { useEffect, useState } from 'react';
import { A } from '@/lib/theme';
import { SectionHead } from './SectionHead';

const STATIONS = [
  { id: '01', name: 'COMPOSE', sub: 'PAYLOAD', glyph: '▣', color: A.ink },
  { id: '02', name: 'SIGN', sub: 'EIP-712', glyph: '✎', color: A.violet },
  { id: '03', name: 'VERIFY', sub: 'NONCE+EPOCH', glyph: '✓', color: A.cyan },
  { id: '04', name: 'SETTLE', sub: 'CHAIN', glyph: '◆', color: A.electric },
  { id: '05', name: 'ATTEST', sub: 'VERIFIER', glyph: '★', color: A.pink },
];

export function Pipeline() {
  const [t, setT] = useState(0);
  useEffect(() => {
    let raf = 0;
    let s: number | null = null;
    const tick = (ts: number) => {
      if (s === null) s = ts;
      setT((ts - s) / 1000);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const phase = (t * 0.55) % 5;
  const stationIdx = Math.floor(phase);
  const within = phase - stationIdx;
  const current = STATIONS[stationIdx];

  return (
    <section
      style={{ padding: '40px 56px 120px', position: 'relative', zIndex: 2 }}
      aria-labelledby="pipeline-title"
    >
      <SectionHead id="pipeline-title" title="Agent Shell Pipeline" />
      <div
        style={{
          marginTop: 64,
          position: 'relative',
          padding: '48px 0 36px',
          borderRadius: 18,
          border: `1px solid ${A.cardEdge}`,
          background: `linear-gradient(180deg, rgba(139,92,246,0.06), rgba(91,141,239,0.02)),
                      repeating-linear-gradient(45deg, ${A.bg}, ${A.bg} 12px, ${A.bg2} 12px, ${A.bg2} 13px)`,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '0 48px',
            marginBottom: 24,
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            color: A.ink3,
            letterSpacing: '0.2em',
          }}
        >
          <span>REQUEST</span>
          <span>
            {current.name} · {String(Math.floor(within * 100)).padStart(2, '0')}%
          </span>
        </div>
        <div style={{ position: 'relative', height: 240, margin: '0 48px' }}>
          <div
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 120,
              height: 36,
              background: `repeating-linear-gradient(90deg, ${A.bg2}, ${A.bg2} 10px, rgba(149,128,255,0.08) 10px, rgba(149,128,255,0.08) 22px)`,
              border: `1px solid ${A.line2}`,
              borderLeft: 'none',
              borderRight: 'none',
            }}
          />
          <div
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 113,
              height: 1,
              background: A.violet,
              opacity: 0.5,
            }}
          />
          <div
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 155,
              height: 1,
              background: A.electric,
              opacity: 0.4,
            }}
          />
          {STATIONS.map((st, i) => {
            const pct = ((i + 0.5) / STATIONS.length) * 100;
            const active = i === stationIdx;
            const fillPct = active ? `${within * 100}%` : i < stationIdx ? '100%' : '0%';
            return (
              <div
                key={st.id}
                style={{
                  position: 'absolute',
                  left: `${pct}%`,
                  top: 0,
                  transform: 'translateX(-50%)',
                  width: 160,
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    margin: '0 auto',
                    width: 120,
                    height: 90,
                    borderRadius: 10,
                    border: `1px solid ${active ? st.color : A.line2}`,
                    background: active ? `${st.color}1a` : 'rgba(255,255,255,0.02)',
                    position: 'relative',
                    boxShadow: active ? `0 0 36px ${st.color}66` : 'none',
                    transition: 'all 0.3s',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: -1,
                      left: -1,
                      fontFamily: 'var(--font-mono)',
                      fontSize: 9,
                      background: A.bg,
                      color: active ? st.color : A.ink3,
                      padding: '2px 6px',
                      letterSpacing: '0.2em',
                      borderTopLeftRadius: 10,
                    }}
                  >
                    {st.id}
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '100%',
                      fontSize: 34,
                      color: active ? st.color : A.ink2,
                      transform: active ? `rotate(${t * 60}deg)` : 'none',
                      transition: active ? 'none' : 'transform 0.4s',
                    }}
                  >
                    {st.glyph}
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      bottom: -8,
                      left: -4,
                      width: 14,
                      height: 14,
                      background: A.bg2,
                      border: `1px solid ${A.line2}`,
                      borderRadius: 3,
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: -8,
                      right: -4,
                      width: 14,
                      height: 14,
                      background: A.bg2,
                      border: `1px solid ${A.line2}`,
                      borderRadius: 3,
                    }}
                  />
                </div>
                <div
                  style={{
                    marginTop: 60,
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    letterSpacing: '0.2em',
                    color: A.ink,
                  }}
                >
                  {st.name}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 9,
                    letterSpacing: '0.2em',
                    color: A.ink3,
                    marginTop: 4,
                  }}
                >
                  {st.sub}
                </div>
                <div
                  style={{
                    margin: '10px auto 0',
                    width: 80,
                    height: 3,
                    background: A.line2,
                    position: 'relative',
                    borderRadius: 2,
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: fillPct,
                      background: st.color,
                      transition: 'background 0.2s',
                      borderRadius: 2,
                    }}
                  />
                </div>
              </div>
            );
          })}
          {(() => {
            const x = ((stationIdx + within) / STATIONS.length) * 100;
            return (
              <div
                style={{
                  position: 'absolute',
                  left: `${x}%`,
                  top: 104,
                  transform: 'translateX(-50%)',
                  width: 48,
                  height: 48,
                  borderRadius: 6,
                  border: `1px solid ${current.color}`,
                  background: `${current.color}33`,
                  boxShadow: `0 0 18px ${current.color}aa`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 9,
                  color: current.color,
                  letterSpacing: '0.16em',
                }}
              >
                <div style={{ textAlign: 'center', lineHeight: 1.3 }}>
                  ACT
                  <br />
                  0x{Math.floor(t * 1000).toString(16).padStart(4, '0').slice(-4)}
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    </section>
  );
}
