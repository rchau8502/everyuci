import Link from 'next/link';
import { Route, Sparkles, CheckCircle2, ArrowRight, GitFork, Calendar, BookOpen, Layers, ExternalLink } from 'lucide-react';
import AntTrailBanner from '@/components/AntTrailBanner';

export const metadata = {
  title: 'Course & Degree Planning Basics — everyUCI',
  description:
    'Learn how UCI degree units, prerequisites, GE categories, and quarter sequences work, and plan your schedules with AntTrail.',
};

export default function DegreePlanningPage() {
  return (
    <div className="py-10 sm:py-14 space-y-12 sm:space-y-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 text-amber-900 border border-amber-200 px-3 py-1 text-xs font-bold uppercase tracking-wider mb-3">
            <Route className="w-3.5 h-3.5 text-amber-600" />
            <span>Academic Architecture</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Course & Degree Planning at UCI
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Planning your classes on a 10-week quarter system requires understanding unit thresholds, prerequisite trees, and course offering patterns.
          </p>
        </div>

        {/* AntTrail Integration Spotlight */}
        <AntTrailBanner variant="full" />

        {/* Comparison: everyUCI vs AntTrail */}
        <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">
            How everyUCI and AntTrail Work Together
          </h2>
          <p className="text-sm text-slate-600 mb-6">
            Two specialized tools built with distinct focus areas so you never get overwhelmed.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* everyUCI Card */}
            <div className="rounded-2xl border border-sky-100 bg-sky-50/40 p-6 space-y-3">
              <div className="flex items-center gap-2 text-base font-bold text-[#0064a4]">
                <BookOpen className="w-5 h-5" />
                <span>everyUCI: Knowledge & Navigation</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Answers all your questions regarding university policies, procedures, and systems:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0064a4] shrink-0 mt-0.5" />
                  <span>How WebReg windows, unit caps, and waitlists function</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0064a4] shrink-0 mt-0.5" />
                  <span>Deadlines to add, drop with a W, or change grading options</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0064a4] shrink-0 mt-0.5" />
                  <span>Financial aid rules, SAP standards, and billing deadlines</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0064a4] shrink-0 mt-0.5" />
                  <span>How to petition for major changes or file for graduation</span>
                </li>
              </ul>
            </div>

            {/* AntTrail Card */}
            <div className="rounded-2xl border border-amber-200 bg-amber-50/40 p-6 space-y-3">
              <div className="flex items-center gap-2 text-base font-bold text-amber-900">
                <Route className="w-5 h-5 text-amber-600" />
                <span>AntTrail: Academic Degree Planner</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Calculates your exact roadmap, quarterly course loads, and prerequisite pathways:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Prerequisite tree visualization (ensures you never take a course out of order)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Historical course offering patterns (e.g., &ldquo;CS 161 is only offered in Winter & Spring&rdquo;)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Balanced 4-year (freshman) or 2-year (transfer) roadmaps</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Real-time graduation timeline estimates toward your 180-unit target</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Core Rules of UCI Degree Planning */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900">
              The 5 Golden Rules of UCI Course Planning
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Every undergraduate Anteater degree rests upon these foundational requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-[#0064a4] font-bold text-sm mb-3">
                1
              </div>
              <h3 className="text-base font-bold text-slate-900">The 180-Unit Minimum</h3>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                To receive a Bachelor&apos;s degree from UCI, you must earn at least 180.0 quarter units. Completing all major courses alone is not enough if your overall unit tally is only 172.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-[#0064a4] font-bold text-sm mb-3">
                2
              </div>
              <h3 className="text-base font-bold text-slate-900">60 Upper-Division Units</h3>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                At least 60.0 units must come from upper-division coursework (courses numbered 100 through 199). Lower-division courses (1–99) do not count toward this 60-unit threshold.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-[#0064a4] font-bold text-sm mb-3">
                3
              </div>
              <h3 className="text-base font-bold text-slate-900">8 General Education Categories</h3>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Every student completes GE Categories I through VIII (Writing, Science & Tech, Social Sciences, Arts/Humanities, Math/Logic, Language, Multicultural, and Global Issues).
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-[#0064a4] font-bold text-sm mb-3">
                4
              </div>
              <h3 className="text-base font-bold text-slate-900">Quarter Sequencing</h3>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                STEM sequences (like Math 2A-2B, Chem 1A-1C, or ICS 31-33) are strictly serialized. Failing or missing the Fall start can delay graduation by a full year if off-quarter sections aren&apos;t offered.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-[#0064a4] font-bold text-sm mb-3">
                5
              </div>
              <h3 className="text-base font-bold text-slate-900">12-Quarter Time Cap</h3>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                UCI enforces a maximum time-to-degree cap (typically 12 regular quarters / 216 units for freshmen; 9 quarters for transfers). Graduating past this requires an approved dean petition.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-[#0064a4] font-bold text-sm mb-3">
                6
              </div>
              <h3 className="text-base font-bold text-slate-900">DegreeWorks Audit Checks</h3>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Always verify your audit on DegreeWorks before your enrollment window opens to confirm that taken courses counted towards the GE or major category you expected.
              </p>
            </div>
          </div>
        </div>

        {/* Action Callout */}
        <div className="rounded-3xl border border-sky-200 bg-sky-50/60 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              Ready to construct your quarterly schedule?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Use AntTrail to input your completed AP/transfer units and auto-generate clean degree roadmaps.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/guides/how-degreeworks-works"
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
            >
              How DegreeWorks Works
            </Link>
            <a
              href="https://anttrail.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#0064a4] px-4 py-2 text-xs font-semibold text-white hover:bg-[#0c2340] transition-colors"
            >
              <span>Launch AntTrail</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
