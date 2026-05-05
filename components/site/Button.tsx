import type { CSSProperties, ReactNode } from 'react';
import { A } from '@/lib/theme';

export function btnStyle(primary = false, override?: CSSProperties): CSSProperties {
  const base: CSSProperties = primary
    ? {
        background: A.gradAccent,
        color: '#fff',
        border: 'none',
        borderRadius: 8,
        fontSize: 13,
        fontWeight: 500,
        cursor: 'pointer',
        boxShadow: `0 8px 24px -8px ${A.violet}aa, inset 0 1px 0 rgba(255,255,255,0.25)`,
        fontFamily: 'var(--font-sans)',
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
      }
    : {
        background: 'transparent',
        color: A.ink,
        border: `1px solid ${A.line2}`,
        borderRadius: 8,
        fontSize: 13,
        fontWeight: 500,
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)',
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
      };
  return { ...base, ...override };
}

export function CTA({
  href,
  primary,
  style,
  children,
}: {
  href: string;
  primary?: boolean;
  style?: CSSProperties;
  children: ReactNode;
}) {
  return (
    <a href={href} style={btnStyle(primary, style)}>
      {children}
    </a>
  );
}
