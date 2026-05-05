import { A } from '@/lib/theme';
import { SectionHead } from './SectionHead';

interface NodeProps {
  x: number;
  y: number;
  w?: number;
  h?: number;
  label: string;
  sub: string;
  accent: string;
  glyph: string;
}

function ArchNode({ x, y, w = 170, h = 84, label, sub, accent, glyph }: NodeProps) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={10} fill="rgba(10,5,24,0.85)" stroke={accent} strokeWidth={1.2} />
      <rect x={x} y={y} width={w} height={2} fill={accent} opacity={0.8} />
      <text x={x + 16} y={y + 32} fill={A.ink} fontFamily="var(--font-display)" fontSize={18} letterSpacing="-0.01em">
        {label}
      </text>
      <text x={x + 16} y={y + 56} fill={A.ink3} fontFamily="var(--font-mono)" fontSize={9} letterSpacing="0.12em">
        {sub.toUpperCase()}
      </text>
      <text
        x={x + w - 18}
        y={y + 32}
        fill={accent}
        fontFamily="var(--font-mono)"
        fontSize={14}
        textAnchor="end"
        opacity={0.7}
      >
        {glyph}
      </text>
    </g>
  );
}

interface FlowProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  label?: string;
  dashed?: boolean;
  accent?: string;
}

function Flow({ x1, y1, x2, y2, label, dashed, accent = '#8B5CF6' }: FlowProps) {
  const mx = (x1 + x2) / 2;
  const path = `M ${x1} ${y1} C ${mx} ${y1}, ${mx} ${y2}, ${x2} ${y2}`;
  return (
    <g>
      <path
        d={path}
        fill="none"
        stroke={accent}
        strokeWidth={1}
        strokeDasharray={dashed ? '4 4' : 'none'}
        opacity={0.7}
      />
      {label ? (
        <text
          x={(x1 + x2) / 2}
          y={(y1 + y2) / 2 - 6}
          fill={A.ink3}
          fontFamily="var(--font-mono)"
          fontSize={10}
          letterSpacing="0.12em"
          textAnchor="middle"
        >
          {label}
        </text>
      ) : null}
    </g>
  );
}

function ArchDiagram() {
  return (
    <svg
      viewBox="0 0 1280 500"
      role="img"
      aria-label="Protocol topology — owner, agent shell, services, verifiers, portal"
      style={{ width: '100%', display: 'block', position: 'relative' }}
    >
      <defs>
        <marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill={A.violet} />
        </marker>
      </defs>
      <ArchNode x={30} y={208} label="Owner" sub="EOA / Multisig" accent={A.electric} glyph="◌" />
      <ArchNode x={290} y={208} w={200} label="Agent Shell" sub="On-chain identity" accent={A.violet} glyph="◆" />
      <text
        x={390}
        y={186}
        fill={A.ink2}
        fontFamily="var(--font-mono)"
        fontSize={9}
        textAnchor="middle"
        letterSpacing="0.14em"
      >
        SIGNERS · DELEGATES · META
      </text>
      <ArchNode x={620} y={88} label="Service" sub="Forum / Market" accent={A.cyan} glyph="▣" />
      <ArchNode x={620} y={208} label="Service" sub="Chat / Search" accent={A.cyan} glyph="▣" />
      <ArchNode x={620} y={328} label="Service" sub="Trade / Vault" accent={A.cyan} glyph="▣" />
      <ArchNode x={870} y={148} label="Verifier" sub="Attestation set" accent={A.pink} glyph="✦" />
      <ArchNode x={870} y={268} label="Verifier" sub="Attestation set" accent={A.pink} glyph="✦" />
      <ArchNode x={1100} y={208} w={150} label="Portal" sub="Index & UX" accent={A.ink} glyph="◷" />
      <Flow x1={200} y1={250} x2={290} y2={250} label="OWNS" />
      <Flow x1={490} y1={250} x2={620} y2={130} label="SIGNS" dashed />
      <Flow x1={490} y1={250} x2={620} y2={250} label="ACTS" />
      <Flow x1={490} y1={250} x2={620} y2={370} dashed />
      <Flow x1={790} y1={130} x2={870} y2={190} label="ATTESTS" accent={A.pink} />
      <Flow x1={790} y1={250} x2={870} y2={310} accent={A.pink} />
      <Flow x1={790} y1={370} x2={870} y2={310} accent={A.pink} />
      <Flow x1={1040} y1={190} x2={1100} y2={240} label="INDEXES" />
      <Flow x1={1040} y1={310} x2={1100} y2={260} />
      {['IDENTITY', 'APPLICATION', 'ATTESTATION', 'PRESENTATION'].map((t, i) => (
        <text
          key={t}
          x={[160, 580, 850, 1175][i]}
          y={470}
          textAnchor="middle"
          fill={A.ink3}
          fontFamily="var(--font-mono)"
          fontSize={10}
          letterSpacing="0.18em"
        >
          {t}
        </text>
      ))}
      <line x1={510} y1={440} x2={510} y2={478} stroke={A.line2} />
      <line x1={800} y1={440} x2={800} y2={478} stroke={A.line2} />
      <line x1={1075} y1={440} x2={1075} y2={478} stroke={A.line2} />
    </svg>
  );
}

export function Architecture() {
  return (
    <section
      style={{ padding: '40px 56px 120px', position: 'relative', zIndex: 2 }}
      aria-labelledby="architecture-title"
    >
      <SectionHead id="architecture-title" title="Architecture" />
      <div
        style={{
          marginTop: 64,
          padding: '40px 32px',
          borderRadius: 18,
          background:
            'linear-gradient(180deg,rgba(139,92,246,0.05),rgba(139,92,246,0.01))',
          border: `1px solid ${A.cardEdge}`,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `linear-gradient(${A.line} 1px,transparent 1px),linear-gradient(90deg,${A.line} 1px,transparent 1px)`,
            backgroundSize: '56px 56px',
            opacity: 0.4,
            pointerEvents: 'none',
          }}
        />
        <ArchDiagram />
      </div>
    </section>
  );
}
