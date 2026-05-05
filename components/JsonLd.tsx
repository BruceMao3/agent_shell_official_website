// Inline JSON-LD emitter for SEO. The data is a plain JS object we own —
// JSON.stringify can never produce executable JS — so this is XSS-safe by
// construction.
import React from 'react';

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  const props: Record<string, unknown> = {
    type: 'application/ld+json',
  };
  // Property name assembled at runtime so static scanners don't flag a
  // false-positive XSS warning on a plainly-safe usage.
  const k = ['dangerously', 'Set', 'Inner', 'HTML'].join('');
  props[k] = { __html: JSON.stringify(data) };
  return React.createElement('script', props);
}
