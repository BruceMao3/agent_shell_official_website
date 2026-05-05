// Walks built static HTML in `.next` (or `out/`) and reports the density of
// the "AI agent" keyphrase across visible body text. Target: 2.5%–3.5%.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = process.argv[2] ?? '.next/server/app';
const KEYWORDS = ['ai agent', 'ai agents'];

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const s = statSync(p);
    if (s.isDirectory()) out.push(...walk(p));
    else if (name.endsWith('.html')) out.push(p);
  }
  return out;
}

function stripHtml(html) {
  return html
    .replace(/<script\b[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&[a-z]+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function tokenize(text) {
  return text.toLowerCase().match(/[a-z0-9]+/g) ?? [];
}

function countPhrase(tokens, phrase) {
  const parts = phrase.toLowerCase().split(/\s+/);
  let n = 0;
  for (let i = 0; i <= tokens.length - parts.length; i++) {
    let ok = true;
    for (let j = 0; j < parts.length; j++) {
      if (tokens[i + j] !== parts[j]) {
        ok = false;
        break;
      }
    }
    if (ok) n += parts.length;
  }
  return n;
}

const files = walk(ROOT);
let grandTotal = 0;
let grandHits = 0;

for (const f of files) {
  const html = readFileSync(f, 'utf8');
  const text = stripHtml(html);
  const tokens = tokenize(text);
  if (tokens.length < 50) continue;
  let hits = 0;
  for (const k of KEYWORDS) hits += countPhrase(tokens, k);
  const density = (hits / tokens.length) * 100;
  grandTotal += tokens.length;
  grandHits += hits;
  console.log(
    `${f.padEnd(60)}  tokens=${String(tokens.length).padStart(5)}  hits=${String(hits).padStart(3)}  density=${density.toFixed(2)}%`,
  );
}

const overall = (grandHits / grandTotal) * 100;
console.log('---');
console.log(
  `OVERALL  tokens=${grandTotal}  hits=${grandHits}  density=${overall.toFixed(2)}% (target 2.5–3.5%)`,
);
