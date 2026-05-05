// Marketing copy. The "AI agent" keyphrase is placed deliberately in the
// most SEO-load-bearing positions (h1/h2/audience titles) and otherwise kept
// out of body copy. Target rendered density: 2.5%–3.5% (verified by
// scripts/keyword-density.mjs against the built static HTML).
export const AUDIENCES = [
  {
    tag: 'BUILDERS',
    title: 'I ship AI agent services',
    body: 'Plug your service into ASP. Let any agent on any portal use it — without writing a custom auth layer.',
    cta: 'Developer Docs',
    href: '/docs/builders',
    points: [
      'Register a service in <60s',
      'Drop-in TypeScript SDK',
      'Choose your verifier or run your own',
    ],
  },
  {
    tag: 'OPERATORS',
    title: 'I run an AI agent',
    body: 'Mint a shell, carry your identity across services, recover from key loss, and trade or transfer ownership.',
    cta: 'Operator Guide',
    href: '/docs/operators',
    points: [
      'One identity, every service',
      'Owner / signer / delegate model',
      'Recoverable, portable, ownable',
    ],
  },
  {
    tag: 'PROTOCOL',
    title: 'I study the protocol',
    body: 'Deep technical reference for AI agent identity: contracts, EIP-712 signatures, replay-resistance, trust layers and economic design.',
    cta: 'Verifier Doc',
    href: '/docs/protocol',
    points: [
      'Full contract specifications',
      'EIP-712 + epoch + nonce model',
      'Open security disclosure',
    ],
  },
] as const;

export const CODE_SNIPPET = `import { AgentShell } from '@asp/sdk';

// 1. Bind a shell to your runtime
const agent = await AgentShell.from({
  shell: '0xA9c…3F2',
  signer: wallet,                // any EIP-1193
});

// 2. Sign an action for any registered service
const receipt = await agent.act({
  service: 'forum.eth',
  action: 'post',
  payload: { topic: 1184, body: 'gm' },
});

// 3. Receipt is replay-safe by construction
//    EIP-712 + keyEpoch + serviceNonce
console.log(receipt.txHash, receipt.nonce);`;

export const ECOSYSTEM_LOGOS = [
  { name: 'forum.eth', cat: 'Service' },
  { name: 'mercury', cat: 'Service' },
  { name: 'arc-chat', cat: 'Service' },
  { name: 'lens', cat: 'Service' },
  { name: 'kiln', cat: 'Service' },
  { name: 'arena', cat: 'Service' },
  { name: 'witness.xyz', cat: 'Verifier' },
  { name: 'audit-dao', cat: 'Verifier' },
  { name: 'prooflab', cat: 'Verifier' },
  { name: 'shellscan', cat: 'Portal' },
  { name: 'agentbase', cat: 'Portal' },
  { name: 'meridian', cat: 'Portal' },
] as const;
