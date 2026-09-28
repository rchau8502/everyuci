import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { CATEGORIES } from '@/data/categories';
import { GUIDES } from '@/data/guides';
import { UCI_TOOLS } from '@/data/tools';
import GuideCard from '@/components/GuideCard';
import ToolCard from '@/components/ToolCard';
import CategoryIcon from '@/components/CategoryIcon';
import AntTrailBanner from '@/components/AntTrailBanner';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import { CategoryId } from '@/types/guide';

interface CategoryPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return CATEGORIES.map(category => ({
    id: category.id,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { id } = await params;
  const category = CATEGORIES.find(c => c.id === id);
  if (!category) return { title: 'Category Not Found — everyUCI' };

  return {
    title: `${category.name} Guides — everyUCI`,
    description: category.description,
  };
}

export default async function CategoryDetailPage({ params }: CategoryPageProps) {
  const { id } = await params;
  const category = CATEGORIES.find(c => c.id === id);

  if (!category) {
    notFound();
  }

  const categoryGuides = GUIDES.filter(g => g.category === category.id);

  // Match tools related to this category
  const relatedTools = UCI_TOOLS.filter(t => {
    if (category.id === 'academics' && t.category === 'Academics & Registration') return true;
    if (category.id === 'money' && t.category === 'Finances & Billing') return true;
    if (category.id === 'housing' && t.category === 'Campus Life & Housing') return true;
    if (category.id === 'transportation' && t.id === 'mycommute' || t.id === 'anteater-express') return true;
    if (category.id === 'health-support' && t.id === 'health-portal') return true;
    if (category.id === 'career-jobs' && t.id === 'handshake') return true;
    return false;
  });

  return (
    <div className="py-10 sm:py-14 space-y-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs text-slate-500">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
          <Link href="/categories" className="hover:text-slate-900 transition-colors">
            Categories
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
          <span className="font-semibold text-slate-800">{category.name}</span>
        </nav>

        {/* Category Hero Header */}
        <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-10 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <div
              className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl shadow-xs"
              style={{ backgroundColor: category.accentBg }}
            >
              <CategoryIcon name={category.iconName} className="w-8 h-8" color={category.color} />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Category Guide
                </span>
                <span className="text-slate-300">•</span>
                <span className="text-xs font-semibold text-[#0064a4]">
                  {categoryGuides.length} {categoryGuides.length === 1 ? 'guide' : 'guides'} available
                </span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
                {category.name}
              </h1>
              <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                {category.description}
              </p>
            </div>
          </div>

          {/* Popular Topic Badges */}
          <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-slate-400 mr-1">Key Topics:</span>
            {category.popularTopics.map((topic, idx) => (
              <span
                key={idx}
                className="rounded-full bg-slate-50 border border-slate-200/80 px-3 py-1 text-xs font-medium text-slate-700"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

        {/* AntTrail Banner if Academics */}
        {category.id === 'academics' && (
          <AntTrailBanner variant="full" />
        )}

        {/* Guides in this category */}
        <section className="space-y-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              {category.name} Guides
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Verified step-by-step instructions and official university policies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {categoryGuides.map(guide => (
              <GuideCard key={guide.id} guide={guide} showCategoryBadge={false} />
            ))}
          </div>
        </section>

        {/* Related UCI Portals & Tools */}
        {relatedTools.length > 0 && (
          <section className="space-y-6 pt-6 border-t border-slate-200">
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Official UCI Portals for {category.shortName}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Direct links and login requirements for systems related to {category.shortName.toLowerCase()}.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {relatedTools.map(tool => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </section>
        )}

        {/* Back Link */}
        <div className="pt-4 text-center">
          <Link
            href="/categories"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0064a4] hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Browse all categories</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
