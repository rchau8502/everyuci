'use client';

import Link from 'next/link';
import { CATEGORIES } from '@/data/categories';
import { ShieldAlert, Route, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-slate-200 bg-white pt-14 pb-12 text-slate-600">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Important Independent Disclaimer Box (Multilingual) */}
        <div className="rounded-2xl border border-amber-200/90 bg-amber-50/70 p-4 sm:p-5 mb-12 flex items-start gap-3.5">
          <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-amber-900/90 leading-relaxed">
            <span className="font-bold">{t.disclaimer.title} </span>
            {t.disclaimer.text}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 pb-12 border-b border-slate-100">
          {/* Col 1 & 2: Brand & Mission */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#0064a4] to-[#0c2340] text-white shadow-xs">
                <span className="font-extrabold text-base tracking-tighter">eU</span>
              </div>
              <span className="text-xl font-extrabold tracking-tight text-slate-900">
                every<span className="text-[#0064a4]">UCI</span>
                <span className="inline-block w-2 h-2 rounded-full bg-[#ffd200] ml-0.5" />
              </span>
            </Link>

            <p className="mt-3 text-sm text-slate-600 leading-relaxed max-w-sm">
              The all-in-one student guide for UC Irvine. Organizing scattered campus departments, confusing portals, and hidden deadlines into simple, actionable answers.
            </p>

            <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-slate-500">
              <span>Zot zot zot! Built by Anteaters for Anteaters.</span>
            </div>

            {/* AntTrail Banner Link in Footer */}
            <div className="mt-6 p-4 rounded-xl border border-sky-100 bg-sky-50/60 max-w-sm">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0064a4]">
                <Route className="w-4 h-4 text-[#0064a4]" />
                <span>Partner Project: AntTrail</span>
              </div>
              <p className="text-xs text-slate-600 mt-1 leading-snug">
                {t.antTrail.subtitle}
              </p>
              <Link
                href="/degree-planning"
                className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-[#0064a4] hover:underline"
              >
                <span>{t.antTrail.button}</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Col 3: Browse Categories */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3.5">
              {t.sections.majorCategories}
            </h4>
            <ul className="space-y-2 text-xs">
              {CATEGORIES.slice(0, 5).map(cat => (
                <li key={cat.id}>
                  <Link href={`/categories/${cat.id}`} className="hover:text-[#0064a4] transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: More Categories */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3.5">
              {t.nav.categories}
            </h4>
            <ul className="space-y-2 text-xs">
              {CATEGORIES.slice(5).map(cat => (
                <li key={cat.id}>
                  <Link href={`/categories/${cat.id}`} className="hover:text-[#0064a4] transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link href="/i-need-to" className="font-semibold text-[#0064a4] hover:underline">
                  {t.sections.iNeedToHub} →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Official UCI Systems */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3.5">
              Official UCI Systems
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://www.reg.uci.edu/registrar/soc/webreg.html"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#0064a4] transition-colors inline-flex items-center gap-1"
                >
                  <span>WebReg</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://zotaccount.uci.edu/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#0064a4] transition-colors inline-flex items-center gap-1"
                >
                  <span>ZotAccount</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://zotaid.uci.edu/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#0064a4] transition-colors inline-flex items-center gap-1"
                >
                  <span>ZotAid</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://canvas.eee.uci.edu/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#0064a4] transition-colors inline-flex items-center gap-1"
                >
                  <span>Canvas LMS</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://parking.uci.edu/mycommute/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#0064a4] transition-colors inline-flex items-center gap-1"
                >
                  <span>myCommute Parking</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li className="pt-1">
                <Link href="/tools" className="font-semibold text-[#0064a4] hover:underline">
                  {t.sections.exploreAllTools} →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} everyUCI. Independent student reference guide.
          </div>
          <div className="flex items-center gap-4">
            <Link href="/guides" className="hover:text-slate-600">{t.nav.exploreGuides}</Link>
            <Link href="/deadlines" className="hover:text-slate-600">{t.nav.deadlines}</Link>
            <Link href="/i-need-to" className="hover:text-slate-600">{t.nav.iNeedTo}</Link>
            <Link href="/tools" className="hover:text-slate-600">{t.nav.uciTools}</Link>
            <Link href="/degree-planning" className="hover:text-slate-600">{t.nav.degreePlanning}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
