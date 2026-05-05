import { A } from '@/lib/theme';

export function SectionHead({
  eyebrow,
  title,
  sub,
  align = 'left',
  level = 2,
  id,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
  align?: 'left' | 'center';
  level?: 2 | 3;
  id?: string;
}) {
  const Heading = level === 2 ? 'h2' : 'h3';
  return (
    <div
      style={{
        textAlign: align,
        maxWidth: align === 'center' ? 760 : 720,
        margin: align === 'center' ? '0 auto' : 0,
      }}
    >
      {eyebrow ? (
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '0.22em',
            color: A.violet,
          }}
        >
          {eyebrow}
        </div>
      ) : null}
      <Heading
        id={id}
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 56,
          lineHeight: 1.1,
          letterSpacing: '-0.03em',
          color: A.ink,
          margin: '14px 0 18px',
          fontWeight: 500,
        }}
      >
        {title}
      </Heading>
      {sub ? (
        <p
          style={{
            fontSize: 17,
            lineHeight: 1.55,
            color: A.ink2,
            margin: 0,
            maxWidth: 620,
          }}
        >
          {sub}
        </p>
      ) : null}
    </div>
  );
}
