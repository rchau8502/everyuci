'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Guide } from '@/types/guide';
import { CATEGORIES } from '@/data/categories';
import { Bookmark, ShieldCheck, ChevronRight, Sparkles } from 'lucide-react';
import { isGuideSaved, toggleSaveGuide } from '@/lib/bookmarks';

interface GuideCardProps {
  guide: Guide;
  highlightQuery?: string;
  showCategoryBadge?: boolean;
}

export default function GuideCard({ guide, showCategoryBadge = true }: GuideCardProps) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setSaved(isGuideSaved(guide.slug));

    const handleUpdate = () => {
      setSaved(isGuideSaved(guide.slug));
    };

    window.addEventListener('everyuci_bookmarks_updated', handleUpdate);
    return () => window.removeEventListener('everyuci_bookmarks_updated', handleUpdate);
  }, [guide.slug]);

  const category = CATEGORIES.find(c => c.id === guide.category);

  const handleToggleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const nowSaved = toggleSaveGuide(guide.slug);
    setSaved(nowSaved);
  };

  return (
    <div className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs hover:border-[#0064a4]/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
      <div>
        <div className="flex items-center justify-between gap-2 mb-2.5">
          {showCategoryBadge && category && (
            <Link
              href={`/categories/${category.id}`}
              className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-semibold transition-opacity hover:opacity-80"
              style={{ backgroundColor: category.accentBg, color: category.color }}
            >
              <span>{category.name}</span>
            </Link>
          )}

          <div className="flex items-center gap-1.5 ml-auto">
            {guide.popular && (
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-700 bg-amber-50 border border-amber-200/60 rounded-md px-2 py-0.5">
                <Sparkles className="w-3 h-3 text-amber-500 fill-amber-500" />
                Popular
              </span>
            )}

            <button
              onClick={handleToggleSave}
              type="button"
              className="p-1.5 text-slate-400 hover:text-[#0064a4] hover:bg-sky-50 rounded-lg transition-colors"
              title={saved ? 'Remove from saved' : 'Save guide'}
              aria-label={saved ? 'Remove from saved' : 'Save guide'}
            >
              <Bookmark className={`w-4 h-4 ${saved ? 'text-[#0064a4] fill-[#0064a4]' : ''}`} />
            </button>
          </div>
        </div>

        <Link href={`/guides/${guide.slug}`} className="block">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#0064a4] transition-colors leading-snug">
            {guide.title}
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
            {guide.shortDescription}
          </p>
        </Link>

        {/* Short Answer Callout */}
        <div className="mt-3.5 rounded-xl bg-slate-50 border border-slate-100 p-2.5">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-0.5">
            Quick Answer
          </p>
          <p className="text-xs text-slate-700 line-clamp-2 leading-relaxed">
            {guide.shortAnswer}
          </p>
        </div>

        {/* Audience tags */}
        <div className="mt-3.5 flex flex-wrap gap-1.5">
          {guide.freshmanRelevant && (
            <span className="rounded-md bg-emerald-50 text-emerald-700 border border-emerald-100 px-2 py-0.5 text-[10px] font-medium">
              Freshman
            </span>
          )}
          {guide.transferRelevant && (
            <span className="rounded-md bg-blue-50 text-blue-700 border border-blue-100 px-2 py-0.5 text-[10px] font-medium">
              Transfer
            </span>
          )}
          {guide.commuterRelevant && (
            <span className="rounded-md bg-purple-50 text-purple-700 border border-purple-100 px-2 py-0.5 text-[10px] font-medium">
              Commuter
            </span>
          )}
          {guide.residentRelevant && (
            <span className="rounded-md bg-amber-50 text-amber-700 border border-amber-100 px-2 py-0.5 text-[10px] font-medium">
              Resident
            </span>
          )}
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
        <div className="flex items-center gap-1.5 truncate">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span className="truncate font-medium text-slate-600">{guide.sourceDepartment}</span>
          <span className="text-slate-300">•</span>
          <span className="shrink-0">{guide.lastVerified}</span>
        </div>

        <Link
          href={`/guides/${guide.slug}`}
          className="inline-flex items-center gap-0.5 text-xs font-semibold text-[#0064a4] hover:underline shrink-0 ml-2"
        >
          Read guide
          <ChevronRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
