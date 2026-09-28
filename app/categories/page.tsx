import { CATEGORIES } from '@/data/categories';
import { GUIDES } from '@/data/guides';
import CategoryCard from '@/components/CategoryCard';
import { Layers } from 'lucide-react';

export const metadata = {
  title: 'Explore Categories — everyUCI',
  description: 'Browse all 10 major everyUCI guide categories covering academics, finances, housing, dining, and student life.',
};

export default function CategoriesPage() {
  return (
    <div className="py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-sky-100 text-[#0064a4] border border-sky-200 px-3 py-1 text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Structured Knowledge</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Browse Categories
          </h1>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            UCI information organized by domain so you never need to guess which administrative building or office manages your question.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {CATEGORIES.map(category => {
            const count = GUIDES.filter(g => g.category === category.id).length;
            return <CategoryCard key={category.id} category={category} guideCount={count} />;
          })}
        </div>
      </div>
    </div>
  );
}
