'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { RECOMMENDED_COURSES } from '@/data/courses';
import CourseCard from '@/components/CourseCard';
import { MajorDivision, GECategory } from '@/types/course';
import {
  Search,
  Flame,
  Star,
  BarChart3,
  Sparkles,
  BookOpen,
  Filter,
  CheckCircle2,
  ExternalLink,
  GraduationCap,
  Globe,
  SlidersHorizontal,
} from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function CoursesPage() {
  const { language, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDivision, setSelectedDivision] = useState<MajorDivision>('gpa-booster');
  const [selectedGe, setSelectedGe] = useState<string>('all');
  const [onlineOnly, setOnlineOnly] = useState(false);
  const [noExamsOnly, setNoExamsOnly] = useState(false);
  const [highARateOnly, setHighARateOnly] = useState(false);
  const [sortBy, setSortBy] = useState<'easiest' | 'highest-rmp' | 'highest-a' | 'code'>('easiest');

  const divisions: { id: MajorDivision; label: string }[] = [
    { id: 'gpa-booster', label: t.coursesHub.divisionGpaBooster },
    { id: 'all', label: t.coursesHub.divisionAll },
    { id: 'ics-cs', label: t.coursesHub.divisionIcs },
    { id: 'social-sci', label: t.coursesHub.divisionSocSci },
    { id: 'business-econ', label: t.coursesHub.divisionBusiness },
    { id: 'biosci', label: t.coursesHub.divisionBioSci },
    { id: 'engineering', label: t.coursesHub.divisionEngineering },
    { id: 'humanities-arts', label: t.coursesHub.divisionHumanities },
  ];

  const geOptions: { id: string; label: string }[] = [
    { id: 'all', label: t.coursesHub.geAll },
    { id: 'GE Ia', label: t.coursesHub.geIa },
    { id: 'GE Ib', label: t.coursesHub.geIb },
    { id: 'GE II', label: t.coursesHub.geII },
    { id: 'GE III', label: t.coursesHub.geIII },
    { id: 'GE IV', label: t.coursesHub.geIV },
    { id: 'GE Va', label: t.coursesHub.geVa },
    { id: 'GE VII', label: t.coursesHub.geVII },
    { id: 'GE VIII', label: t.coursesHub.geVIII },
  ];

  const filteredCourses = useMemo(() => {
    let result = RECOMMENDED_COURSES.filter(course => {
      // Division filter
      if (selectedDivision === 'gpa-booster' && !course.isGpaBooster) return false;
      if (selectedDivision !== 'all' && selectedDivision !== 'gpa-booster' && course.division !== selectedDivision) {
        return false;
      }

      // GE filter
      if (selectedGe !== 'all' && !course.geCategories.includes(selectedGe as GECategory)) {
        return false;
      }

      // Quick toggles
      if (onlineOnly && !course.isOnlineAvailable) return false;
      if (noExamsOnly && !course.isNoMidtermFinal) return false;
      if (highARateOnly && course.zotisticsStats.percentA < 80) return false;

      // Text search
      const q = searchQuery.toLowerCase().trim();
      if (!q) return true;

      const loc = course.translations?.[language];
      const matchesCode = course.code.toLowerCase().includes(q);
      const matchesTitle =
        course.title.toLowerCase().includes(q) ||
        (loc?.title ? loc.title.toLowerCase().includes(q) : false);
      const matchesWhy =
        course.whyTakeIt.toLowerCase().includes(q) ||
        (loc?.whyTakeIt ? loc.whyTakeIt.toLowerCase().includes(q) : false);
      const matchesTags = course.tags.some(tag => tag.toLowerCase().includes(q));
      const matchesProfs = course.recommendedProfessors.some(p =>
        p.name.toLowerCase().includes(q) || p.tags.some(t => t.toLowerCase().includes(q))
      );

      // Support multi-language slang for easy classes / boosters
      const matchesSlang =
        (q.includes('水课') ||
          q.includes('水') ||
          q.includes('简单') ||
          q.includes('easy') ||
          q.includes('꿀강') ||
          q.includes('楽単') ||
          q.includes('facil') ||
          q.includes('fácil') ||
          q.includes('甜課') ||
          q.includes('madali')) &&
        course.isGpaBooster;

      return matchesCode || matchesTitle || matchesWhy || matchesTags || matchesProfs || matchesSlang;
    });

    // Sorting
    result.sort((a, b) => {
      if (sortBy === 'easiest') {
        return a.difficultyScore - b.difficultyScore;
      }
      if (sortBy === 'highest-rmp') {
        const aMaxRmp = Math.max(...a.recommendedProfessors.map(p => p.rmpRating));
        const bMaxRmp = Math.max(...b.recommendedProfessors.map(p => p.rmpRating));
        return bMaxRmp - aMaxRmp;
      }
      if (sortBy === 'highest-a') {
        return b.zotisticsStats.percentA - a.zotisticsStats.percentA;
      }
      if (sortBy === 'code') {
        return a.code.localeCompare(b.code);
      }
      return 0;
    });

    return result;
  }, [
    selectedDivision,
    selectedGe,
    onlineOnly,
    noExamsOnly,
    highARateOnly,
    searchQuery,
    sortBy,
    language,
  ]);

  return (
    <div className="py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header & Hero */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200/80 px-3 py-1 text-xs font-bold uppercase tracking-wider mb-3">
            <Flame className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
            <span>{t.coursesHub.badge}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            {t.coursesHub.title}
          </h1>
          <p className="mt-2 text-base text-slate-600 leading-relaxed">
            {t.coursesHub.subtitle}
          </p>

          {/* Verification Tools Banner */}
          <div className="mt-4 rounded-2xl bg-sky-50/80 border border-sky-200/80 p-4 text-xs sm:text-sm text-sky-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-start gap-2.5">
              <BarChart3 className="w-4 h-4 text-[#0064a4] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold">{t.coursesHub.bannerTitle} </span>
                <span>{t.coursesHub.bannerText}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <a
                href="https://www.ratemyprofessors.com/school/1074"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#0064a4] bg-white border border-sky-200 px-2.5 py-1 rounded-xl shadow-2xs hover:bg-sky-100/60 transition-colors"
              >
                <span>{t.coursesHub.rmpBtn}</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
              <a
                href="https://zotistics.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#0064a4] bg-white border border-sky-200 px-2.5 py-1 rounded-xl shadow-2xs hover:bg-sky-100/60 transition-colors"
              >
                <span>{t.coursesHub.zotisticsBtn}</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          </div>

          {/* Search Input */}
          <div className="mt-6 relative max-w-xl">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder={t.coursesHub.searchPlaceholder}
              className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm text-slate-900 placeholder-slate-400 shadow-xs focus:outline-none focus:ring-2 focus:ring-[#0064a4]/20 focus:border-[#0064a4]"
            />
          </div>
        </div>

        {/* Filter Controls Box */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-4 sm:p-5 space-y-4">
          {/* Major / Category Tabs */}
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
              {t.coursesHub.majorCategoryLabel}
            </div>
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
              {divisions.map(div => (
                <button
                  key={div.id}
                  onClick={() => setSelectedDivision(div.id)}
                  className={`rounded-xl px-3.5 py-2 font-bold transition-all shrink-0 ${
                    selectedDivision === div.id
                      ? 'bg-[#0064a4] text-white shadow-xs'
                      : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {div.label}
                </button>
              ))}
            </div>
          </div>

          {/* GE Category Dropdown & Quick Toggles */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-200/60 text-xs">
            {/* GE Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
              <span className="text-slate-400 font-bold text-[11px] uppercase mr-1 shrink-0">
                {t.coursesHub.geFilterLabel}
              </span>
              {geOptions.map(ge => (
                <button
                  key={ge.id}
                  onClick={() => setSelectedGe(ge.id)}
                  className={`rounded-lg px-2.5 py-1 font-semibold transition-colors shrink-0 ${
                    selectedGe === ge.id
                      ? 'bg-slate-900 text-white'
                      : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {ge.label}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 shrink-0 ml-auto">
              <span className="text-slate-400 font-bold text-[11px] uppercase">{t.coursesHub.sortLabel}</span>
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value as any)}
                className="rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-2xs focus:outline-none focus:ring-2 focus:ring-[#0064a4]/20"
              >
                <option value="easiest">{t.coursesHub.sortEasiest}</option>
                <option value="highest-rmp">{t.coursesHub.sortHighestRmp}</option>
                <option value="highest-a">{t.coursesHub.sortHighestA}</option>
                <option value="code">{t.coursesHub.sortCode}</option>
              </select>
            </div>
          </div>

          {/* Quick Toggle Badges */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-200/60 text-xs">
            <button
              type="button"
              onClick={() => setOnlineOnly(!onlineOnly)}
              className={`rounded-xl px-3 py-1.5 font-bold transition-colors inline-flex items-center gap-1.5 ${
                onlineOnly
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{t.coursesHub.toggleOnline}</span>
            </button>

            <button
              type="button"
              onClick={() => setNoExamsOnly(!noExamsOnly)}
              className={`rounded-xl px-3 py-1.5 font-bold transition-colors inline-flex items-center gap-1.5 ${
                noExamsOnly
                  ? 'bg-teal-600 text-white'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{t.coursesHub.toggleNoExams}</span>
            </button>

            <button
              type="button"
              onClick={() => setHighARateOnly(!highARateOnly)}
              className={`rounded-xl px-3 py-1.5 font-bold transition-colors inline-flex items-center gap-1.5 ${
                highARateOnly
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>{t.coursesHub.toggleHighA}</span>
            </button>
          </div>
        </div>

        {/* Results Count Banner */}
        <div className="flex items-center justify-between text-xs text-slate-500 font-semibold px-1">
          <div>
            {t.coursesHub.showingCount}{' '}
            <span className="text-slate-900 font-bold">{filteredCourses.length}</span>{' '}
            {t.coursesHub.showingRecommended}
            {selectedDivision === 'gpa-booster' && ` ${t.coursesHub.showingBoosterSuffix}`}
          </div>
          <div className="text-[11px] text-slate-400">
            {t.coursesHub.verifiedRecordsNotice}
          </div>
        </div>

        {/* Courses Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-slate-200 bg-slate-50/50 p-12 text-center space-y-3">
            <BookOpen className="w-8 h-8 text-slate-400 mx-auto" />
            <h3 className="text-base font-bold text-slate-900">{t.coursesHub.noResultsTitle}</h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto">
              {t.coursesHub.noResultsText}
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedDivision('all');
                setSelectedGe('all');
                setOnlineOnly(false);
                setNoExamsOnly(false);
                setHighARateOnly(false);
              }}
              className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-[#0064a4] hover:underline"
            >
              {t.coursesHub.resetFilters}
            </button>
          </div>
        )}

        {/* AntTrail Integration Callout Banner */}
        <div className="rounded-3xl bg-gradient-to-br from-[#0c2340] to-[#0064a4] p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-bold tracking-wide uppercase text-amber-300">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>{t.coursesHub.antTrailBadge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              {t.coursesHub.antTrailTitle}
            </h2>
            <p className="text-slate-200 text-sm max-w-xl leading-relaxed">
              {t.coursesHub.antTrailText}
            </p>
          </div>

          <a
            href="https://anttrail.app"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-[#ffd200] hover:bg-[#ffc000] text-slate-900 font-extrabold px-6 py-3.5 text-sm shadow-md transition-all hover:scale-105 shrink-0 inline-flex items-center gap-2"
          >
            <span>{t.coursesHub.antTrailButton}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
