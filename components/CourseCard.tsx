'use client';

import { useState } from 'react';
import { RecommendedCourse } from '@/types/course';
import {
  Star,
  Flame,
  CheckCircle2,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  BarChart3,
  Globe,
  FileText,
  UserCheck,
  BookOpen,
} from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface CourseCardProps {
  course: RecommendedCourse;
}

export default function CourseCard({ course }: CourseCardProps) {
  const { language, t } = useLanguage();
  const [tipsExpanded, setTipsExpanded] = useState(false);

  const localized = course.translations?.[language];
  const displayTitle = localized?.title || course.title;
  const displayWhy = localized?.whyTakeIt || course.whyTakeIt;
  const displayTips = localized?.tipsForSuccess || course.tipsForSuccess;

  const getDifficultyColor = (score: number) => {
    if (score <= 1.5) return 'bg-emerald-50 text-emerald-700 border-emerald-200';
    if (score <= 2.2) return 'bg-sky-50 text-sky-700 border-sky-200';
    return 'bg-amber-50 text-amber-700 border-amber-200';
  };

  return (
    <div className="flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs hover:shadow-md hover:border-[#0064a4]/40 transition-all duration-200">
      <div className="space-y-4">
        {/* Top Badges & Course Code */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
              {course.isGpaBooster && (
                <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 text-amber-700 border border-amber-500/20 px-2.5 py-0.5 text-xs font-black tracking-wide">
                  <Flame className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
                  <span>{t.coursesHub.cardGpaBoosterBadge}</span>
                </span>
              )}
              {course.geCategories.map(ge => (
                <span
                  key={ge}
                  className="rounded-full bg-slate-100 text-slate-700 border border-slate-200 px-2 py-0.5 text-[11px] font-bold"
                >
                  {ge}
                </span>
              ))}
              {course.isOnlineAvailable && (
                <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 px-2 py-0.5 text-[11px] font-bold">
                  <Globe className="w-3 h-3 text-indigo-600" />
                  <span>{t.coursesHub.cardOnlineBadge}</span>
                </span>
              )}
              {course.isNoMidtermFinal && (
                <span className="inline-flex items-center gap-1 rounded-full bg-teal-50 text-teal-700 border border-teal-200 px-2 py-0.5 text-[11px] font-bold">
                  <FileText className="w-3 h-3 text-teal-600" />
                  <span>{t.coursesHub.cardNoExamsBadge}</span>
                </span>
              )}
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-baseline gap-2">
              <span>{course.code}</span>
              <span className="text-xs font-semibold text-slate-400">
                ({course.units} {t.coursesHub.cardUnits})
              </span>
            </h3>
            <p className="text-sm font-semibold text-slate-600 mt-0.5">{displayTitle}</p>
          </div>

          {/* Difficulty Score Badge */}
          <div
            className={`rounded-2xl border px-3 py-1.5 text-right shrink-0 ${getDifficultyColor(
              course.difficultyScore
            )}`}
          >
            <div className="text-[10px] font-bold uppercase tracking-wider">{t.coursesHub.cardDifficulty}</div>
            <div className="text-base font-extrabold leading-none mt-0.5">
              {course.difficultyScore.toFixed(1)}
              <span className="text-[11px] font-semibold opacity-70"> / 5.0</span>
            </div>
          </div>
        </div>

        {/* Historical Zotistics Grade Distribution Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-sky-50 to-blue-50/60 border border-sky-100 p-3 sm:p-3.5 flex items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-[#0064a4] shrink-0" />
            <div>
              <span className="font-bold text-slate-900">{t.coursesHub.cardZotisticsGrades} </span>
              <span className="text-slate-600 font-medium">
                {course.zotisticsStats.sampleQuarters || t.coursesHub.cardCampusAverage}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 font-black shrink-0">
            <span className="rounded-lg bg-white px-2 py-1 text-[#0064a4] border border-sky-200/80 shadow-2xs">
              {course.zotisticsStats.percentA}{t.coursesHub.cardPercentA}
            </span>
            <span className="rounded-lg bg-[#0064a4] text-white px-2 py-1 shadow-2xs">
              {course.zotisticsStats.avgGpa.toFixed(2)} GPA
            </span>
          </div>
        </div>

        {/* Recommended Professors & RateMyProfessors Ratings */}
        <div className="space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
            <UserCheck className="w-3.5 h-3.5 text-slate-400" />
            <span>{t.coursesHub.cardRecommendedFaculty}</span>
          </div>
          <div className="grid grid-cols-1 gap-2">
            {course.recommendedProfessors.map(prof => (
              <div
                key={prof.name}
                className="rounded-xl border border-slate-100 bg-slate-50/70 p-2.5 flex items-center justify-between gap-2 text-xs hover:bg-slate-50 transition-colors"
              >
                <div>
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <span>{prof.name}</span>
                    <span className="rounded-full bg-amber-100 text-amber-900 border border-amber-200/60 px-1.5 py-0.2 text-[10px] font-black inline-flex items-center gap-0.5">
                      <Star className="w-2.5 h-2.5 fill-amber-500 text-amber-500" />
                      {prof.rmpRating.toFixed(1)}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {prof.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="text-[10px] text-slate-500 bg-white border border-slate-200/60 px-1.5 py-0.2 rounded-md font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={prof.rmpUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-[#0064a4] hover:text-[#0c2340] shrink-0 bg-white border border-slate-200 px-2.5 py-1 rounded-xl shadow-2xs hover:bg-sky-50 transition-colors"
                >
                  <span>RMP</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Why Take It (Anteater Rationale) */}
        <div className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50/50 rounded-2xl p-3 border border-slate-100">
          <span className="font-bold text-slate-900">{t.coursesHub.cardWhyLove} </span>
          {displayWhy}
        </div>

        {/* Tips for Success (Collapsible) */}
        <div>
          <button
            type="button"
            onClick={() => setTipsExpanded(!tipsExpanded)}
            className="flex items-center justify-between w-full text-xs font-bold text-slate-700 hover:text-[#0064a4] py-1 transition-colors"
          >
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>{t.coursesHub.cardTips} ({displayTips.length})</span>
            </span>
            {tipsExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          {tipsExpanded && (
            <ul className="mt-2 space-y-1.5 pl-2 text-xs text-slate-600 border-l-2 border-emerald-400">
              {displayTips.map((tip, i) => (
                <li key={i} className="leading-relaxed">
                  • {tip}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Footer Action Links */}
      <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2">
          {course.zotisticsUrl && (
            <a
              href={course.zotisticsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-slate-600 hover:text-[#0064a4] font-semibold transition-colors"
            >
              <BarChart3 className="w-3.5 h-3.5 text-slate-400" />
              <span>Zotistics</span>
              <ExternalLink className="w-2.5 h-2.5 opacity-60" />
            </a>
          )}
          {course.webregSearchUrl && (
            <a
              href={course.webregSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-slate-600 hover:text-[#0064a4] font-semibold transition-colors"
            >
              <BookOpen className="w-3.5 h-3.5 text-slate-400" />
              <span>{t.coursesHub.cardWebSoc}</span>
              <ExternalLink className="w-2.5 h-2.5 opacity-60" />
            </a>
          )}
        </div>

        <span className="text-[11px] font-semibold text-slate-400">
          {t.coursesHub.cardGuideFooter}
        </span>
      </div>
    </div>
  );
}
