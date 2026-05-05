// Agent Shell Protocol — design tokens.
// Extracted verbatim from prototype `app.jsx` so the marketing site renders
// pixel-identical to the design.
export const A = {
  bg: '#06030f',
  bg2: '#0a0518',
  ink: '#f5f3ff',
  ink2: '#a59ec4',
  ink3: '#6c628f',
  line: 'rgba(149,128,255,0.12)',
  line2: 'rgba(149,128,255,0.22)',
  violet: '#8B5CF6',
  electric: '#5B8DEF',
  cyan: '#22d3ee',
  pink: '#e879f9',
  card: 'rgba(255,255,255,0.025)',
  cardEdge: 'rgba(149,128,255,0.14)',
  gradTxt:
    'linear-gradient(96deg,#fff 0%,#c4b5fd 38%,#7dd3fc 70%,#fff 100%)',
  gradAccent: 'linear-gradient(135deg,#8B5CF6,#5B8DEF)',
} as const;

export const SITE = {
  name: 'Agent Shell Protocol',
  short: 'ASP',
  tagline: 'Identity System for AI Agent',
  description:
    'Agent Shell Protocol is a neutral identity primitive for AI agents — ownable, transferable, replay-safe AI agent identity, surrounded by an open ecosystem of AI agent services, verifiers and portals.',
  url: 'https://agentshell.network',
  docsUrl: 'https://agentshell.network/docs',
  repo: 'https://github.com/BruceMao3/agent_shell_official_website',
  twitter: '@agentshell',
  ogImage: '/og.png',
} as const;
