import { A, SITE } from '@/lib/theme';
import { Backdrop } from '@/components/site/Backdrop';
import { Nav } from '@/components/site/Nav';
import { HeroBanner } from '@/components/site/HeroBanner';
import { Hero } from '@/components/site/Hero';
import { Audiences } from '@/components/site/Audiences';
import { Architecture } from '@/components/site/Architecture';
import { Pipeline } from '@/components/site/Pipeline';
import { Code } from '@/components/site/Code';
import { Ecosystem } from '@/components/site/Ecosystem';
import { Footer } from '@/components/site/Footer';
import { JsonLd } from '@/components/JsonLd';

const homeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE.name,
  alternateName: SITE.short,
  url: SITE.url,
  description: SITE.description,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE.url}/docs?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

export default function HomePage() {
  // Hero banner variant is picked via env (NEXT_PUBLIC_HERO_BANNER=c1|c4|"" off).
  const variant = process.env.NEXT_PUBLIC_HERO_BANNER ?? '';

  return (
    <main
      style={{
        position: 'relative',
        background: A.bg,
        color: A.ink,
        minHeight: '100%',
        fontFamily: 'var(--font-sans)',
        width: '100%',
        isolation: 'isolate',
      }}
    >
      <Backdrop />
      <Nav />
      <HeroBanner variant={variant} />
      <Hero />
      <Audiences />
      <Architecture />
      <Pipeline />
      <Code />
      <Ecosystem />
      <Footer />
      <JsonLd data={homeJsonLd} />
    </main>
  );
}
