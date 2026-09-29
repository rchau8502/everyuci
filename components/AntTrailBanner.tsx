'use client';

import Link from 'next/link';
import { Route, Sparkles, ArrowRight, CheckCircle2, Calendar, GitFork } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface AntTrailBannerProps {
  variant?: 'full' | 'compact';
}

export default function AntTrailBanner({ variant = 'full' }: AntTrailBannerProps) {
  const { t } = useLanguage();

  if (variant === 'compact') {
    return (
      <div className="rounded-2xl border border-sky-100 bg-gradient-to-r from-sky-50 via-white to-amber-50/40 p-5 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0064a4] text-[#ffd200]">
            <Route className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-bold text-slate-900">{t.antTrail.title}</h4>
              <span className="rounded-full bg-amber-100 px-2 py-0.2 text-[10px] font-bold text-amber-800">
                Partner Project
              </span>
            </div>
            <p className="text-xs text-slate-600 mt-0.5">
              {t.antTrail.subtitle}
            </p>
          </div>
        </div>

        <Link
          href="/degree-planning"
          className="inline-flex items-center gap-1.5 rounded-xl bg-[#0064a4] px-4 py-2 text-xs font-semibold text-white shadow-xs hover:bg-[#0c2340] transition-colors shrink-0"
        >
          <span>{t.antTrail.button}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-3xl border border-sky-200/70 bg-gradient-to-br from-[#0c2340] via-[#0064a4] to-[#034d7d] p-6 sm:p-8 text-white shadow-lg">
      {/* Background ambient accents */}
      <div className="absolute -right-12 -bottom-12 w-64 h-64 rounded-full bg-[#ffd200]/10 blur-3xl pointer-events-none" />
      <div className="absolute left-1/3 -top-12 w-48 h-48 rounded-full bg-sky-400/10 blur-2xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur-xs border border-white/20 px-3 py-1 text-xs font-semibold text-[#ffd200] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#ffd200]" />
            <span>{t.antTrail.badge}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
            Planning Your Degree? Meet <span className="text-[#ffd200]">AntTrail</span>.
          </h3>

          <p className="mt-3 text-sm sm:text-base text-sky-100 leading-relaxed max-w-xl">
            {t.antTrail.subtitle}
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="flex items-center gap-2 text-xs text-sky-100 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#ffd200] shrink-0" />
              <span>{t.antTrail.prereqs}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-sky-100 font-medium">
              <Calendar className="w-4 h-4 text-[#ffd200] shrink-0" />
              <span>{t.antTrail.schedules}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-sky-100 font-medium">
              <GitFork className="w-4 h-4 text-[#ffd200] shrink-0" />
              <span>{t.antTrail.offerings}</span>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              href="/degree-planning"
              className="inline-flex items-center gap-2 rounded-xl bg-[#ffd200] px-5 py-2.5 text-sm font-bold text-slate-900 shadow-md hover:bg-yellow-400 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>{t.antTrail.button}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/guides/how-degreeworks-works"
              className="inline-flex items-center gap-1.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 px-4 py-2.5 text-sm font-medium text-white transition-colors"
            >
              <span>How DegreeWorks Works</span>
            </Link>
          </div>
        </div>

        {/* Visual preview card */}
        <div className="lg:col-span-5">
          <div className="rounded-2xl border border-white/20 bg-slate-900/60 backdrop-blur-md p-5 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
              <span className="font-mono text-sky-300">AntTrail Planner v2.4</span>
              <span className="flex items-center gap-1.5 text-emerald-400 font-mono text-[11px]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Live Degree Model
              </span>
            </div>

            <div className="mt-4 space-y-2.5 font-mono text-xs">
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/10">
                <div>
                  <span className="text-white font-semibold">ICS 31 → ICS 32 → ICS 33</span>
                  <div className="text-[10px] text-sky-200 mt-0.5">Strict Python sequence prereq tree</div>
                </div>
                <span className="text-emerald-400 text-[11px]">Valid 3Q</span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/10">
                <div>
                  <span className="text-white font-semibold">MATH 2A → MATH 2B</span>
                  <div className="text-[10px] text-sky-200 mt-0.5">Calculus core required for GE V</div>
                </div>
                <span className="text-emerald-400 text-[11px]">Satisfied</span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/10">
                <div>
                  <span className="text-white font-semibold">Writing 39B / 39C</span>
                  <div className="text-[10px] text-sky-200 mt-0.5">Lower-division Writing GE I</div>
                </div>
                <span className="text-amber-300 text-[11px]">Enrolled</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-300">
              <span>Total Planned: 184.0 / 180.0 Units</span>
              <span className="text-[#ffd200] font-bold">On track: June 2028</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
