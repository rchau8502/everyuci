import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { GUIDES } from '@/data/guides';
import { CATEGORIES } from '@/data/categories';
import GuideView from '@/components/GuideView';

interface GuidePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return GUIDES.map(guide => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = GUIDES.find(g => g.slug === slug);
  if (!guide) return { title: 'Guide Not Found — everyUCI' };

  return {
    title: `${guide.title} — everyUCI`,
    description: guide.shortDescription,
  };
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = GUIDES.find(g => g.slug === slug);

  if (!guide) {
    notFound();
  }

  const category = CATEGORIES.find(c => c.id === guide.category);
  const relatedGuides = GUIDES.filter(g => guide.relatedGuides.includes(g.slug));

  return (
    <GuideView
      guide={guide}
      category={category}
      relatedGuides={relatedGuides}
    />
  );
}
