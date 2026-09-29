'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X, ArrowRight, CornerDownLeft, Sparkles, BookOpen } from 'lucide-react';
import { searchGuides, SearchResult } from '@/lib/search';
import { StudentType } from '@/types/guide';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { LanguageCode } from '@/types/language';
import Link from 'next/link';

interface SearchBarProps {
  studentType?: StudentType;
  autoFocus?: boolean;
  placeholder?: string;
  size?: 'default' | 'large';
  onSearchSubmitted?: (query: string) => void;
  showExamplePills?: boolean;
}

const MULTILINGUAL_EXAMPLES: Record<LanguageCode, string[]> = {
  en: [
    'How do I drop a class?',
    'Where do I see my financial aid?',
    'How does parking work?',
    'How do I change my major?',
    'What is SAP?',
    'Where can I study late?',
    'How do I get an on-campus job?',
    'What is ZotAccount?',
    'What should I do before my first quarter?',
  ],
  'zh-CN': [
    '怎么退课？ (Drop a class)',
    '在哪里看我的助学金 (ZotAid)？',
    'UCI 停车位怎么买？ (Parking)',
    '如何转专业？ (Change major)',
    '什么是 ZotAccount？',
    '新生开学前要准备什么？',
    '怎么找校内兼职？',
    '如何加入教授科研 (UROP)？',
  ],
  es: [
    '¿Cómo dar de baja una clase? (Drop class)',
    '¿Dónde veo mi ayuda financiera (ZotAid)?',
    '¿Cómo funciona el estacionamiento? (Parking)',
    '¿Cómo cambio de carrera/major?',
    '¿Qué es ZotAccount?',
    '¿Cómo conseguir trabajo en el campus?',
  ],
  vi: [
    'Làm thế nào để hủy lớp? (Drop a class)',
    'Xem hỗ trợ tài chính (ZotAid) ở đâu?',
    'Bãi đậu xe UCI hoạt động thế nào? (Parking)',
    'Làm thế nào để đổi ngành? (Change major)',
    'ZotAccount là gì?',
    'Tìm việc làm trong trường thế nào?',
  ],
  ko: [
    '수업 드랍은 어떻게 하나요? (Drop class)',
    '재정보조(ZotAid)는 어디서 확인하나요?',
    '주차권은 어떻게 구매하나요? (Parking)',
    '전공 변경은 어떻게 하나요? (Change major)',
    'ZotAccount가 무엇인가요?',
    '교내 아르바이트 구하는 법',
  ],
  'zh-TW': [
    '如何退選課程？ (Drop a class)',
    '哪裡查詢助學金 (ZotAid)？',
    'UCI 停車許可證怎麼購買？',
    '如何轉專業？ (Change major)',
    '什麼是 ZotAccount？',
    '開學第一週必做事項',
  ],
  tl: [
    'Paano mag-drop ng klase? (Drop class)',
    'Saan makikita ang financial aid (ZotAid)?',
    'Paano gumagana ang parking sa UCI?',
    'Paano magpalit ng major?',
    'Ano ang ZotAccount?',
  ],
  ja: [
    'クラスのドロップ方法は？ (Drop class)',
    '奨学金・ファイナンシャルエイドの確認場所',
    '駐車場パーミットの仕組み (Parking)',
    '専攻（メジャー）の変更方法',
    'ZotAccount とは？',
  ],
};

export default function SearchBar({
  studentType = 'all',
  autoFocus = false,
  placeholder,
  size = 'large',
  onSearchSubmitted,
  showExamplePills = true,
}: SearchBarProps) {
  const router = useRouter();
  const { language, t } = useLanguage();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const displayPlaceholder = placeholder || t.hero.placeholder;
  const exampleSearches = MULTILINGUAL_EXAMPLES[language] || MULTILINGUAL_EXAMPLES.en;

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const matched = searchGuides(query, { studentType, limit: 5 });
    setResults(matched);
    setIsOpen(true);
  }, [query, studentType]);

  // Click outside listener
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!query.trim()) return;

    setIsOpen(false);
    if (onSearchSubmitted) {
      onSearchSubmitted(query);
    } else {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleSelectPill = (text: string) => {
    // Strip trailing english helper note in parentheses if any for search
    const cleanQuery = text.replace(/\s*\([^)]*\)$/, '');
    setQuery(cleanQuery);
    router.push(`/search?q=${encodeURIComponent(cleanQuery)}`);
  };

  return (
    <div ref={containerRef} className="w-full relative">
      <form onSubmit={handleSubmit} className="relative w-full">
        <div
          className={`relative flex items-center w-full rounded-2xl bg-white border border-slate-300/80 shadow-md shadow-slate-900/5 transition-all duration-200 focus-within:border-[#0064a4] focus-within:ring-4 focus-within:ring-[#0064a4]/15 ${
            size === 'large' ? 'h-14 sm:h-16 px-4 sm:px-5' : 'h-11 sm:h-12 px-3.5'
          }`}
        >
          <Search className={`${size === 'large' ? 'w-5 h-5 sm:w-6 sm:h-6' : 'w-4 h-4'} text-slate-400 shrink-0 mr-3`} />

          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            onFocus={() => query.trim() && setIsOpen(true)}
            placeholder={displayPlaceholder}
            autoFocus={autoFocus}
            className="w-full bg-transparent text-sm sm:text-base text-slate-900 placeholder-slate-400 focus:outline-none"
          />

          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery('');
                setResults([]);
                setIsOpen(false);
                inputRef.current?.focus();
              }}
              className="p-1 text-slate-400 hover:text-slate-600 rounded-full mr-2"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}

          <button
            type="submit"
            className="shrink-0 flex items-center gap-1.5 rounded-xl bg-[#0064a4] text-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold hover:bg-[#0c2340] transition-colors"
          >
            <span>Search</span>
            <ArrowRight className="w-3.5 h-3.5 hidden sm:inline" />
          </button>
        </div>
      </form>

      {/* Autocomplete Dropdown */}
      {isOpen && results.length > 0 && (
        <div className="absolute left-0 right-0 z-50 mt-2 rounded-2xl bg-white p-2.5 shadow-2xl border border-slate-200 ring-1 ring-slate-900/5 divide-y divide-slate-100 animate-in fade-in zoom-in-95 duration-100">
          <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between">
            <span>Direct Guide Matches</span>
            <span className="text-[10px] text-slate-400 font-normal">Press Enter to search all</span>
          </div>

          <div className="py-1">
            {results.map(({ guide, matchReason }) => (
              <Link
                key={guide.id}
                href={`/guides/${guide.slug}`}
                onClick={() => setIsOpen(false)}
                className="group flex items-start justify-between gap-3 px-3 py-2.5 rounded-xl hover:bg-sky-50 transition-colors"
              >
                <div className="flex items-start gap-2.5">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-sky-100/70 text-[#0064a4]">
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

                <div className="shrink-0 text-right">
                  <span className="inline-block rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600">
                    {matchReason || 'Match'}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="pt-2 px-3 pb-1">
            <button
              onClick={() => handleSubmit()}
              className="w-full flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-semibold text-[#0064a4] hover:bg-sky-50/70 transition-colors"
            >
              <span>View all results for &ldquo;{query}&rdquo;</span>
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Example Query Pills */}
      {showExamplePills && (
        <div className="mt-4">
          <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>{t.hero.popularQuestions}</span>
          </div>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {exampleSearches.map((example, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSelectPill(example)}
                className="rounded-full bg-white border border-slate-200/90 px-3 py-1 text-xs text-slate-700 hover:border-[#0064a4]/40 hover:text-[#0064a4] hover:bg-sky-50/50 shadow-2xs transition-all text-left"
              >
                {example}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
