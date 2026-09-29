'use client';

import { useState } from 'react';
import { Globe, ChevronDown, Check, Info } from 'lucide-react';
import { LANGUAGES } from '@/lib/i18n/languages';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { LanguageCode } from '@/types/language';

interface LanguageSelectorProps {
  compact?: boolean;
}

export default function LanguageSelector({ compact = false }: LanguageSelectorProps) {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const currentLang = LANGUAGES.find(l => l.code === language) || LANGUAGES[0];

  const handleSelect = (code: LanguageCode) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2.5 sm:px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-2xs hover:bg-slate-50 hover:border-slate-300 transition-all focus:outline-none focus:ring-2 focus:ring-[#0064a4]/20"
        aria-expanded={isOpen}
        aria-haspopup="true"
        title="Change Language (Prioritized by UCI Student Demographics)"
      >
        <Globe className="w-3.5 h-3.5 text-[#0064a4]" />
        <span className="text-sm">{currentLang.flag}</span>
        <span className="hidden sm:inline font-bold text-slate-800">
          {compact ? currentLang.code.toUpperCase() : currentLang.nativeName}
        </span>
        <ChevronDown className="w-3 h-3 text-slate-400" />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 z-50 mt-2 w-80 origin-top-right rounded-2xl bg-white p-2 shadow-2xl ring-1 ring-slate-900/10 focus:outline-none animate-in fade-in zoom-in-95 duration-100">
            {/* Demographic header */}
            <div className="px-3 py-2 border-b border-slate-100">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                <Globe className="w-3.5 h-3.5 text-[#0064a4]" />
                <span>Select Language</span>
              </div>
              <div className="mt-1 flex items-start gap-1 text-[11px] text-slate-500 leading-tight">
                <Info className="w-3 h-3 text-slate-400 shrink-0 mt-0.5" />
                <span>Ranked by UC Irvine student population & international demographics.</span>
              </div>
            </div>

            {/* Language list */}
            <div className="py-1 max-h-96 overflow-y-auto divide-y divide-slate-50">
              {LANGUAGES.map(lang => {
                const isSelected = lang.code === language;
                return (
                  <button
                    key={lang.code}
                    onClick={() => handleSelect(lang.code)}
                    className={`w-full flex items-start justify-between gap-3 px-3 py-2.5 text-left rounded-xl transition-colors ${
                      isSelected
                        ? 'bg-sky-50 text-[#0064a4]'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-start gap-2.5">
                      <span className="text-lg mt-0.5">{lang.flag}</span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-slate-900">
                            {lang.nativeName}
                          </span>
                          <span className="text-[11px] text-slate-400">({lang.name})</span>
                          {lang.badge && (
                            <span className={`text-[10px] font-semibold px-1.5 py-0.2 rounded-md ${
                              lang.code === 'en'
                                ? 'bg-slate-100 text-slate-600'
                                : lang.code === 'zh-CN'
                                ? 'bg-rose-50 text-rose-700 border border-rose-200/60'
                                : lang.code === 'es'
                                ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/60'
                                : 'bg-amber-50 text-amber-700 border border-amber-200/60'
                            }`}>
                              {lang.badge}
                            </span>
                          )}
                        </div>
                        <div className="text-[10px] text-slate-500 mt-0.5 leading-snug">
                          {lang.demographicNote}
                        </div>
                      </div>
                    </div>

                    {isSelected && (
                      <Check className="w-4 h-4 text-[#0064a4] shrink-0 mt-1" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
