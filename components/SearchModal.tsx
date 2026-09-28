'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X, BookOpen, ArrowRight, CornerDownLeft } from 'lucide-react';
import { searchGuides, SearchResult } from '@/lib/search';
import { CATEGORIES } from '@/data/categories';
import { CategoryId } from '@/types/guide';

export default function SearchModal() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | undefined>(undefined);
  const [results, setResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    }

    const handleCustomTrigger = () => setIsOpen(true);

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('open_search_modal', handleCustomTrigger);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('open_search_modal', handleCustomTrigger);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setQuery('');
      setResults([]);
      setSelectedCategory(undefined);
      return;
    }
  }, [isOpen]);

  useEffect(() => {
    const matched = searchGuides(query, {
      category: selectedCategory,
      limit: 8,
    });
    setResults(matched);
  }, [query, selectedCategory]);

  if (!isOpen) return null;

  const handleSelectGuide = (slug: string) => {
    setIsOpen(false);
    router.push(`/guides/${slug}`);
  };

  const handleSearchAll = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!query.trim()) return;
    setIsOpen(false);
    router.push(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 md:p-20 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl transform rounded-2xl bg-white shadow-2xl ring-1 ring-slate-900/10 overflow-hidden transition-all">
        {/* Search Input Bar */}
        <form onSubmit={handleSearchAll} className="flex items-center px-4 py-3.5 border-b border-slate-200">
          <Search className="w-5 h-5 text-slate-400 mr-3 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search guides, tools, rules, deadlines..."
            autoFocus
            className="w-full text-base bg-transparent text-slate-900 placeholder-slate-400 focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600 rounded-full mr-2"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-block rounded-md border border-slate-200 bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-500">
            ESC
          </kbd>
        </form>

        {/* Category Filter Pills */}
        <div className="px-4 py-2 bg-slate-50 border-b border-slate-100 flex items-center gap-1.5 overflow-x-auto text-xs">
          <button
            type="button"
            onClick={() => setSelectedCategory(undefined)}
            className={`rounded-full px-2.5 py-1 font-medium transition-colors shrink-0 ${
              selectedCategory === undefined
                ? 'bg-[#0064a4] text-white'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
            }`}
          >
            All Categories
          </button>
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(selectedCategory === cat.id ? undefined : cat.id)}
              className={`rounded-full px-2.5 py-1 font-medium transition-colors shrink-0 ${
                selectedCategory === cat.id
                  ? 'bg-[#0064a4] text-white'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
            >
              {cat.shortName}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-2 divide-y divide-slate-100">
          {results.length > 0 ? (
            results.map(({ guide, matchReason }) => (
              <div
                key={guide.id}
                onClick={() => handleSelectGuide(guide.slug)}
                className="group flex items-start justify-between gap-3 p-3 rounded-xl hover:bg-sky-50 cursor-pointer transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-sky-100/70 text-[#0064a4]">
                    <BookOpen className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 group-hover:text-[#0064a4]">
                      {guide.title}
                    </div>
                    <div className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                      {guide.shortDescription}
                    </div>
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-2">
                  <span className="text-[10px] font-medium text-slate-500 bg-slate-100 rounded-md px-2 py-0.5">
                    {matchReason || 'Guide'}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0064a4] transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            ))
          ) : (
            <div className="p-8 text-center text-slate-500">
              <p className="text-sm font-medium">No direct guides found for &ldquo;{query}&rdquo;</p>
              <p className="text-xs text-slate-400 mt-1">
                Try searching for broader terms like &ldquo;parking&rdquo;, &ldquo;major&rdquo;, &ldquo;aid&rdquo;, or &ldquo;drop&rdquo;.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        {query && (
          <div className="p-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
            <span className="text-slate-500">Showing top {results.length} guides</span>
            <button
              onClick={handleSearchAll}
              className="font-semibold text-[#0064a4] hover:underline flex items-center gap-1"
            >
              <span>Full search page</span>
              <CornerDownLeft className="w-3 h-3" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
