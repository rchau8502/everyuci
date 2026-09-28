'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { GUIDES } from '@/data/guides';
import GuideCard from '@/components/GuideCard';
import { getSavedGuideSlugs } from '@/lib/bookmarks';
import { Bookmark, ArrowRight, Trash2 } from 'lucide-react';

export default function SavedGuidesPage() {
  const [savedSlugs, setSavedSlugs] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setSavedSlugs(getSavedGuideSlugs());

    const handleUpdate = () => {
      setSavedSlugs(getSavedGuideSlugs());
    };

    window.addEventListener('everyuci_bookmarks_updated', handleUpdate);
    return () => window.removeEventListener('everyuci_bookmarks_updated', handleUpdate);
  }, []);

  const handleClearAll = () => {
    localStorage.removeItem('everyuci_saved_guides_v1');
    setSavedSlugs([]);
    window.dispatchEvent(new Event('everyuci_bookmarks_updated'));
  };

  const savedGuides = GUIDES.filter(g => savedSlugs.includes(g.slug));

  if (!mounted) {
    return (
      <div className="py-20 text-center text-sm text-slate-500">
        Loading saved guides...
      </div>
    );
  }

  return (
    <div className="py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-sky-100 text-[#0064a4] border border-sky-200 px-3 py-1 text-xs font-bold uppercase tracking-wider mb-3">
              <Bookmark className="w-3.5 h-3.5" />
              <span>Saved on Device</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Saved Guides
            </h1>
            <p className="mt-2 text-base text-slate-600">
              Quick access to your bookmarked articles. Saved privately in your browser without requiring an account.
            </p>
          </div>

          {savedGuides.length > 0 && (
            <button
              onClick={handleClearAll}
              type="button"
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 px-3.5 py-2 text-xs font-semibold text-slate-600 hover:text-rose-600 hover:border-rose-200 hover:bg-rose-50 transition-colors shrink-0"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear all bookmarks</span>
            </button>
          )}
        </div>

        {savedGuides.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {savedGuides.map(guide => (
              <GuideCard key={guide.id} guide={guide} />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center max-w-lg mx-auto space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-[#0064a4] mx-auto">
              <Bookmark className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              No saved guides yet
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              When viewing any guide, click the bookmark icon to save it here for quick reference during your quarter.
            </p>
            <div className="pt-2">
              <Link
                href="/guides"
                className="inline-flex items-center gap-2 rounded-xl bg-[#0064a4] text-white px-4 py-2 text-xs font-semibold hover:bg-[#0c2340] transition-colors"
              >
                <span>Browse Student Guides</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
