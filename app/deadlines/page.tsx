'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { CAMPUS_DEADLINES } from '@/data/deadlines';
import { CATEGORIES } from '@/data/categories';
import { QuarterTerm } from '@/types/deadline';
import { CategoryId, StudentType } from '@/types/guide';
import {
  Calendar,
  AlertTriangle,
  Clock,
  Search,
  ExternalLink,
  ArrowRight,
  ShieldAlert,
  Filter,
  CheckCircle2,
} from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function DeadlinesPage() {
  const { t } = useLanguage();
  const [selectedTerm, setSelectedTerm] = useState<QuarterTerm | 'all'>('all');
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>('all');
  const [selectedPersona, setSelectedPersona] = useState<StudentType | 'all'>('all');
  const [strictOnly, setStrictOnly] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const terms: (QuarterTerm | 'all')[] = ['all', 'Fall 2026', 'Winter 2027', 'Spring 2027'];

  const filteredDeadlines = useMemo(() => {
    return CAMPUS_DEADLINES.filter(item => {
      // Term filter
      if (selectedTerm !== 'all' && item.term !== selectedTerm) return false;

      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) return false;

      // Strict only filter
      if (strictOnly && !item.isStrict) return false;

      // Persona filter
      if (
        selectedPersona !== 'all' &&
        !item.relevantPersonas.includes('all') &&
        !item.relevantPersonas.includes(selectedPersona)
      ) {
        return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesTitle = item.title.toLowerCase().includes(q);
        const matchesDesc = item.description.toLowerCase().includes(q);
        const matchesConsequence = item.consequence.toLowerCase().includes(q);
        const matchesTerm = item.term.toLowerCase().includes(q);
        const matchesDate = item.dateString.toLowerCase().includes(q);
        if (!matchesTitle && !matchesDesc && !matchesConsequence && !matchesTerm && !matchesDate) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => a.targetDate.localeCompare(b.targetDate));
  }, [selectedTerm, selectedCategory, selectedPersona, strictOnly, searchQuery]);

  const strictCount = CAMPUS_DEADLINES.filter(d => d.isStrict).length;

  return (
    <div className="py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200 px-3 py-1 text-xs font-bold uppercase tracking-wider mb-3">
            <Clock className="w-3.5 h-3.5 text-rose-600" />
            <span>Academic Year 2026–27 Schedule</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            {t.sections.deadlinesTitle}
          </h1>
          <p className="mt-2 text-base text-slate-600 leading-relaxed">
            {t.sections.deadlinesSub}
          </p>

          {/* Quick Notice Banner */}
          <div className="mt-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 p-4 text-xs sm:text-sm text-amber-900 flex items-start gap-3">
            <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">UCI Golden Rule: </span>
              Fee deadlines always cut off at <strong>4:00 PM PST</strong>, and enrollment add/drop deadlines cut off at <strong>5:00 PM PST</strong> on Fridays. Missing a fee deadline automatically drops every enrolled class on WebReg.
            </div>
          </div>

          {/* Search Box */}
          <div className="mt-6 relative max-w-xl">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search deadlines (e.g., fee payment, add/drop, FAFSA, commencement)..."
              className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm text-slate-900 placeholder-slate-400 shadow-xs focus:outline-none focus:ring-2 focus:ring-[#0064a4]/20 focus:border-[#0064a4]"
            />
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 sm:p-5 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Term Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
              <span className="text-slate-500 font-bold uppercase tracking-wider text-[11px] mr-1 shrink-0">
                Term:
              </span>
              {terms.map(term => (
                <button
                  key={term}
                  onClick={() => setSelectedTerm(term)}
                  className={`rounded-xl px-3.5 py-1.5 font-semibold transition-colors shrink-0 ${
                    selectedTerm === term
                      ? 'bg-[#0064a4] text-white shadow-xs'
                      : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {term === 'all' ? 'All Quarters' : term}
                </button>
              ))}
            </div>

            {/* Strict Toggle */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setStrictOnly(!strictOnly)}
                className={`flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-bold transition-all border ${
                  strictOnly
                    ? 'bg-rose-600 text-white border-rose-600 shadow-xs'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-rose-300 hover:text-rose-700'
                }`}
              >
                <AlertTriangle className={`w-3.5 h-3.5 ${strictOnly ? 'text-white' : 'text-rose-500'}`} />
                <span>Strict Cutoffs Only ({strictCount})</span>
              </button>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pt-2 border-t border-slate-200/60 text-xs">
            <span className="text-slate-500 font-bold uppercase tracking-wider text-[11px] mr-1 shrink-0">
              Topic:
            </span>
            <button
              onClick={() => setSelectedCategory('all')}
              className={`rounded-full px-3 py-1 font-semibold transition-colors shrink-0 ${
                selectedCategory === 'all'
                  ? 'bg-slate-800 text-white'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
            >
              All Topics
            </button>
            {CATEGORIES.map(cat => {
              const count = CAMPUS_DEADLINES.filter(d => d.category === cat.id).length;
              if (count === 0) return null;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`rounded-full px-3 py-1 font-semibold transition-colors shrink-0 ${
                    selectedCategory === cat.id
                      ? 'bg-slate-800 text-white'
                      : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {cat.shortName} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-slate-500 px-1">
          <span>
            Showing <strong>{filteredDeadlines.length}</strong> verified UCI deadlines
          </span>
          {(selectedTerm !== 'all' || selectedCategory !== 'all' || strictOnly || searchQuery) && (
            <button
              onClick={() => {
                setSelectedTerm('all');
                setSelectedCategory('all');
                setSelectedPersona('all');
                setStrictOnly(false);
                setSearchQuery('');
              }}
              className="text-[#0064a4] font-semibold hover:underline"
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Deadlines Timeline / Cards */}
        {filteredDeadlines.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 p-12 text-center bg-white">
            <Calendar className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800">No deadlines match your current filters</h3>
            <p className="mt-1 text-xs text-slate-500">
              Try switching quarters, turning off "Strict Cutoffs Only", or clearing the search box.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredDeadlines.map(item => {
              const category = CATEGORIES.find(c => c.id === item.category);

              return (
                <div
                  key={item.id}
                  className={`rounded-2xl border bg-white p-5 sm:p-6 shadow-xs hover:shadow-md transition-all ${
                    item.isStrict
                      ? 'border-rose-200/90 hover:border-rose-400'
                      : 'border-slate-200/80 hover:border-[#0064a4]/40'
                  }`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    {/* Left: Term, Date, Badges */}
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-md bg-slate-100 text-slate-700 font-bold px-2 py-0.5 text-xs">
                          {item.term}
                        </span>

                        {category && (
                          <span
                            className="rounded-md px-2 py-0.5 text-xs font-semibold"
                            style={{ backgroundColor: category.accentBg, color: category.color }}
                          >
                            {category.name}
                          </span>
                        )}

                        {item.isStrict ? (
                          <span className="flex items-center gap-1 rounded-md bg-rose-50 border border-rose-200 text-rose-700 px-2 py-0.5 text-xs font-bold">
                            <AlertTriangle className="w-3 h-3 text-rose-600" />
                            Strict Cutoff
                          </span>
                        ) : (
                          <span className="rounded-md bg-emerald-50 border border-emerald-200 text-emerald-700 px-2 py-0.5 text-xs font-medium">
                            Recommended Target
                          </span>
                        )}

                        {item.timeCutoff && (
                          <span className="flex items-center gap-1 text-slate-500 text-xs font-medium bg-slate-50 border border-slate-200 px-2 py-0.5 rounded-md">
                            <Clock className="w-3 h-3" />
                            {item.timeCutoff}
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                        {item.title}
                      </h3>

                      <div className="flex items-center gap-2 text-sm font-semibold text-[#0064a4]">
                        <Calendar className="w-4 h-4 text-[#0064a4]" />
                        <span>{item.dateString}</span>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
                        {item.description}
                      </p>

                      {/* Consequence Alert */}
                      <div
                        className={`mt-2 p-3 rounded-xl text-xs font-medium flex items-start gap-2 max-w-3xl ${
                          item.isStrict
                            ? 'bg-rose-50/70 border border-rose-200 text-rose-900'
                            : 'bg-amber-50/70 border border-amber-200 text-amber-900'
                        }`}
                      >
                        <AlertTriangle
                          className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                            item.isStrict ? 'text-rose-600' : 'text-amber-600'
                          }`}
                        />
                        <div>
                          <strong>Consequence if missed: </strong>
                          {item.consequence}
                        </div>
                      </div>
                    </div>

                    {/* Right: Action Buttons */}
                    <div className="flex sm:flex-col items-center sm:items-end justify-end gap-2.5 shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-slate-100">
                      {item.guideSlug && (
                        <Link
                          href={`/guides/${item.guideSlug}`}
                          className="inline-flex items-center gap-1.5 rounded-xl bg-[#0064a4] text-white px-4 py-2 text-xs font-bold hover:bg-[#0c2340] transition-colors shadow-2xs"
                        >
                          <span>{item.actionLabel}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      )}

                      {item.actionUrl && (
                        <a
                          href={item.actionUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-slate-900 px-3 py-1.5 rounded-xl hover:bg-slate-100 transition-colors"
                        >
                          <span>Official Portal</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
