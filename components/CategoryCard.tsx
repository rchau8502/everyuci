import Link from 'next/link';
import { Category } from '@/types/category';
import CategoryIcon from './CategoryIcon';
import { ChevronRight } from 'lucide-react';

interface CategoryCardProps {
  category: Category;
  guideCount?: number;
}

export default function CategoryCard({ category, guideCount }: CategoryCardProps) {
  return (
    <Link
      href={`/categories/${category.id}`}
      className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs hover:border-[#0064a4]/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
    >
      <div>
        <div className="flex items-center justify-between mb-3.5">
          <div
            className="flex h-11 w-11 items-center justify-center rounded-xl transition-transform group-hover:scale-105"
            style={{ backgroundColor: category.accentBg }}
          >
            <CategoryIcon name={category.iconName} className="w-5 h-5" color={category.color} />
          </div>
          {guideCount !== undefined && (
            <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 rounded-full px-2.5 py-0.5">
              {guideCount} {guideCount === 1 ? 'guide' : 'guides'}
            </span>
          )}
        </div>

        <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0064a4] transition-colors">
          {category.name}
        </h3>
        <p className="mt-1.5 text-xs leading-relaxed text-slate-600 line-clamp-2">
          {category.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {category.popularTopics.slice(0, 3).map((topic, i) => (
            <span
              key={i}
              className="inline-block rounded-md bg-slate-50 border border-slate-100 px-2 py-0.5 text-[11px] text-slate-600 font-medium"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#0064a4]">
        <span>Explore topics</span>
        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
