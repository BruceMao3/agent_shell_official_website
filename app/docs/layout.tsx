import { RootProvider } from 'fumadocs-ui/provider/next';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { source } from '@/lib/docs-source';
import { SITE } from '@/lib/theme';
import 'fumadocs-ui/style.css';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <RootProvider>
      <DocsLayout
        tree={source.pageTree}
        nav={{
          title: (
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 18,
                letterSpacing: '-0.015em',
                backgroundImage:
                  'linear-gradient(96deg,#fff 0%,#c4b5fd 38%,#7dd3fc 70%,#fff 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            >
              {SITE.name}
            </span>
          ),
          url: '/',
        }}
        githubUrl={SITE.repo}
      >
        {children}
      </DocsLayout>
    </RootProvider>
  );
}
