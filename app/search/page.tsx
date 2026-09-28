'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Search, X, Filter, BookOpen, Sparkles } from 'lucide-react';
import { searchGuides, SearchResult } from '@/lib/search';
import { CATEGORIES } from '@/data/categories';
import { StudentType, CategoryId } from '@/types/guide';
import GuideCard from '@/components/GuideCard';
import PersonaSelector from '@/components/PersonaSelector';

const EXAMPLE_SEARCHES = [
  'How do I drop a class?',
  'Where do I see my financial aid?',
  'How does parking work?',
  'How do I change my major?',
  'What is SAP?',
  'What is ZotAccount?',
  'Where can I study late?',
  'How do I get an on-campus job?',
  'What should I do before my first quarter?',
];

function SearchContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const initialCat = (searchParams.get('cat') as CategoryId) || undefined;

  const [query, setQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | undefined>(initialCat);
  const [studentType, setStudentType] = useState<StudentType>('all');
  const [results, setResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    const saved = (localStorage.getItem('everyuci_student_type') as StudentType) || 'all';
    setStudentType(saved);
  }, []);

  useEffect(() => {
    const q = searchParams.get('q') || '';
    setQuery(q);
  }, [searchParams]);

  useEffect(() => {
    const matched = searchGuides(query, {
      studentType,
      category: selectedCategory,
      limit: 50,
    });
    setResults(matched);
  }, [query, selectedCategory, studentType]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query.trim()) params.set('q', query.trim());
    if (selectedCategory) params.set('cat', selectedCategory);
    router.push(`/search?${params.toString()}`);
  };

  const handlePillClick = (example: string) => {
    setQuery(example);
    router.push(`/search?q=${encodeURIComponent(example)}`);
  };

  return (
    <div className="py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Search everyUCI
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Ask any question in plain language. Matches aliases, systems, rules, and requirements.
          </p>

          {/* Search Input Bar */}
          <form onSubmit={handleSearchSubmit} className="mt-6 relative">
            <div className="relative flex items-center h-14 sm:h-16 w-full rounded-2xl bg-white border border-slate-300 shadow-md px-4 sm:px-5 focus-within:border-[#0064a4] focus-within:ring-4 focus-within:ring-[#0064a4]/15">
              <Search className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400 mr-3 shrink-0" />
              <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="What do you need help with at UCI? (e.g. drop class, zotaid, parking)"
                autoFocus
                className="w-full bg-transparent text-sm sm:text-base text-slate-900 placeholder-slate-400 focus:outline-none"
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
              <button
                type="submit"
                className="rounded-xl bg-[#0064a4] text-white px-4 py-2 text-xs sm:text-sm font-semibold hover:bg-[#0c2340] transition-colors shrink-0"
              >
                Search
              </button>
            </div>
          </form>

          {/* Example Pills */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-1.5 text-xs">
            <span className="text-slate-400 font-medium">Try:</span>
            {EXAMPLE_SEARCHES.slice(0, 5).map((ex, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handlePillClick(ex)}
                className="rounded-full bg-white border border-slate-200 px-2.5 py-0.5 text-slate-600 hover:border-[#0064a4] hover:text-[#0064a4] transition-colors"
              >
                {ex}
              </button>
            ))}
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-200">
          {/* Category Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            <button
              onClick={() => setSelectedCategory(undefined)}
              className={`rounded-full px-3 py-1.5 font-semibold transition-colors shrink-0 ${
                selectedCategory === undefined
                  ? 'bg-[#0064a4] text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              All Categories
            </button>
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(selectedCategory === cat.id ? undefined : cat.id)}
                className={`rounded-full px-3 py-1.5 font-semibold transition-colors shrink-0 ${
                  selectedCategory === cat.id
                    ? 'bg-[#0064a4] text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                {cat.shortName}
              </button>
            ))}
          </div>

          {/* Persona selector on search page */}
          <div className="shrink-0 flex items-center gap-2">
            <PersonaSelector current={studentType} onChange={setStudentType} compact />
          </div>
        </div>

        {/* Search Results Summary */}
        <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
          <span>
            {query.trim()
              ? `Found ${results.length} ${results.length === 1 ? 'guide' : 'guides'} matching "${query}"`
              : `Showing ${results.length} guides`}
          </span>
          {studentType !== 'all' && (
            <span className="text-[#0064a4] font-semibold">
              Prioritizing {studentType} relevant guides
            </span>
          )}
        </div>

        {/* Results Grid */}
        {results.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {results.map(({ guide }) => (
              <GuideCard key={guide.id} guide={guide} />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center max-w-lg mx-auto space-y-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-[#0064a4] mx-auto">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              No matching guides found
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              We couldn&apos;t find any guides matching &ldquo;{query}&rdquo;. Try using simple keywords like &ldquo;parking&rdquo;, &ldquo;tuition&rdquo;, &ldquo;drop&rdquo;, or &ldquo;dorm&rdquo;.
            </p>
            <div className="pt-2">
              <button
                onClick={() => {
                  setQuery('');
                  setSelectedCategory(undefined);
                }}
                className="rounded-xl bg-[#0064a4] text-white px-4 py-2 text-xs font-semibold hover:bg-[#0c2340]"
              >
                Clear all filters
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="py-20 text-center text-sm text-slate-500">
          Loading everyUCI search engine...
        </div>
      }
    >
      <SearchContent />
    </Suspense>
  );
}
