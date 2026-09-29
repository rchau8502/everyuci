'use client';

import { useState, useEffect } from 'react';
import { GUIDES } from '@/data/guides';
import { CATEGORIES } from '@/data/categories';
import GuideCard from '@/components/GuideCard';
import PersonaSelector from '@/components/PersonaSelector';
import { CategoryId, StudentType } from '@/types/guide';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { Search, BookOpen, Layers } from 'lucide-react';

export default function AllGuidesPage() {
  const { t } = useLanguage();
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>('all');
  const [studentType, setStudentType] = useState<StudentType>('all');

  useEffect(() => {
    const saved = (localStorage.getItem('everyuci_student_type') as StudentType) || 'all';
    setStudentType(saved);
  }, []);

  const filteredGuides = GUIDES.filter(guide => {
    const matchesCategory = selectedCategory === 'all' || guide.category === selectedCategory;

    let matchesPersona = true;
    if (studentType === 'freshman') matchesPersona = guide.freshmanRelevant;
    else if (studentType === 'transfer') matchesPersona = guide.transferRelevant;
    else if (studentType === 'continuing') matchesPersona = guide.continuingRelevant;
    else if (studentType === 'international') matchesPersona = guide.internationalRelevant;
    else if (studentType === 'commuter') matchesPersona = guide.commuterRelevant;
    else if (studentType === 'resident') matchesPersona = guide.residentRelevant;

    const q = query.toLowerCase().trim();
    if (!q) return matchesCategory && matchesPersona;

    const matchesQuery =
      guide.title.toLowerCase().includes(q) ||
      guide.shortDescription.toLowerCase().includes(q) ||
      guide.tags.some(t => t.toLowerCase().includes(q)) ||
      guide.keywords.some(k => k.toLowerCase().includes(q));

    return matchesCategory && matchesPersona && matchesQuery;
  });

  return (
    <div className="py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-sky-100 text-[#0064a4] border border-sky-200 px-3 py-1 text-xs font-bold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Complete Knowledge Base</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            {t.sections.mostUsefulGuides}
          </h1>
          <p className="mt-2 text-base text-slate-600 leading-relaxed">
            {t.sections.mostUsefulGuidesSub}
          </p>

          {/* Search Box */}
          <div className="mt-6 relative max-w-xl">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Filter guides by keyword, topic, or system..."
              className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm text-slate-900 placeholder-slate-400 shadow-xs focus:outline-none focus:ring-2 focus:ring-[#0064a4]/20 focus:border-[#0064a4]"
            />
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-200">
          {/* Category Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 text-xs">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`rounded-full px-3.5 py-1.5 font-semibold transition-colors shrink-0 ${
                selectedCategory === 'all'
                  ? 'bg-[#0064a4] text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              All Topics ({GUIDES.length})
            </button>
            {CATEGORIES.map(cat => {
              const count = GUIDES.filter(g => g.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`rounded-full px-3.5 py-1.5 font-semibold transition-colors shrink-0 ${
                    selectedCategory === cat.id
                      ? 'bg-[#0064a4] text-white shadow-xs'
                      : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {cat.shortName} ({count})
                </button>
              );
            })}
          </div>

          {/* Persona selector */}
          <div className="shrink-0 flex items-center gap-2">
            <PersonaSelector current={studentType} onChange={setStudentType} compact />
          </div>
        </div>

        {/* Guides Count Status */}
        <div className="text-xs text-slate-500 font-medium flex items-center justify-between">
          <span>Showing {filteredGuides.length} of {GUIDES.length} guides</span>
          {studentType !== 'all' && (
            <span className="text-[#0064a4] font-semibold">
              Filtered for {studentType} relevance
            </span>
          )}
        </div>

        {/* Guides Grid */}
        {filteredGuides.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredGuides.map(guide => (
              <GuideCard key={guide.id} guide={guide} />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center max-w-lg mx-auto space-y-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-[#0064a4] mx-auto">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              No matching guides found
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Try adjusting your category selection, clearing search keywords, or switching your student persona filter.
            </p>
            <div className="pt-2">
              <button
                onClick={() => {
                  setQuery('');
                  setSelectedCategory('all');
                  setStudentType('all');
                }}
                className="rounded-xl bg-[#0064a4] text-white px-4 py-2 text-xs font-semibold hover:bg-[#0c2340]"
              >
                Reset all filters
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
