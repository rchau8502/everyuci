'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import SearchBar from '@/components/SearchBar';
import CategoryCard from '@/components/CategoryCard';
import GuideCard from '@/components/GuideCard';
import AntTrailBanner from '@/components/AntTrailBanner';
import ChecklistWidget from '@/components/ChecklistWidget';
import PersonaSelector from '@/components/PersonaSelector';
import ToolCard from '@/components/ToolCard';
import { CATEGORIES } from '@/data/categories';
import { GUIDES } from '@/data/guides';
import { UCI_TOOLS } from '@/data/tools';
import { QUICK_TASKS } from '@/data/tasks';
import { STUDENT_TIPS } from '@/data/tips';
import { StudentType } from '@/types/guide';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import {
  Sparkles,
  ArrowRight,
  Zap,
  HelpCircle,
  Lightbulb,
  ExternalLink,
  ChevronRight,
  Search,
  CheckCircle2,
} from 'lucide-react';

export default function HomePage() {
  const { t } = useLanguage();
  const [studentType, setStudentType] = useState<StudentType>('all');

  useEffect(() => {
    const saved = (localStorage.getItem('everyuci_student_type') as StudentType) || 'all';
    setStudentType(saved);

    const handlePersonaChange = (e: Event) => {
      const customEvent = e as CustomEvent<StudentType>;
      if (customEvent.detail) {
        setStudentType(customEvent.detail);
      }
    };

    window.addEventListener('everyuci_persona_changed', handlePersonaChange);
    return () => window.removeEventListener('everyuci_persona_changed', handlePersonaChange);
  }, []);

  const handleStudentTypeChange = (type: StudentType) => {
    setStudentType(type);
    localStorage.setItem('everyuci_student_type', type);
  };

  // Filter or prioritize guides based on student persona
  const popularGuides = GUIDES.filter(g => {
    if (studentType === 'freshman') return g.freshmanRelevant;
    if (studentType === 'transfer') return g.transferRelevant;
    if (studentType === 'continuing') return g.continuingRelevant;
    if (studentType === 'international') return g.internationalRelevant;
    if (studentType === 'commuter') return g.commuterRelevant;
    if (studentType === 'resident') return g.residentRelevant;
    return g.popular || g.featured;
  }).slice(0, 6);

  // Tools preview (top 4 critical tools)
  const previewTools = UCI_TOOLS.slice(0, 4);

  // Quick tasks preview
  const previewTasks = QUICK_TASKS.slice(0, 6);

  return (
    <div className="flex flex-col space-y-16 sm:space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-20 border-b border-slate-200/70 bg-gradient-to-b from-sky-50/50 via-white to-slate-50/30">
        {/* Subtle decorative Anteater blue/gold ambient glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 left-1/4 w-96 h-96 bg-[#0064a4]/5 rounded-full blur-3xl" />
          <div className="absolute top-8 right-1/4 w-80 h-80 bg-[#ffd200]/10 rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          {/* Top Pill / Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-white px-3.5 py-1 text-xs font-semibold text-[#0064a4] shadow-xs mb-6">
            <span className="flex h-2 w-2 rounded-full bg-[#0064a4]" />
            <span>{t.hero.badge}</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-600">{t.hero.updatedYear}</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
            {t.hero.headline1} <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#0064a4] via-[#0c2340] to-[#0064a4] bg-clip-text text-transparent">
              {t.hero.headline2}
            </span>
          </h1>

          {/* Subheading */}
          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.hero.subheadline}
          </p>

          {/* Large Hero Search Bar */}
          <div className="mx-auto mt-8 max-w-3xl text-left">
            <SearchBar
              studentType={studentType}
              placeholder={t.hero.placeholder}
              size="large"
              showExamplePills={true}
            />
          </div>

          {/* Persona quick switch inline prompt */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-500">
            <span>{t.hero.tailorPrompt}</span>
            <PersonaSelector current={studentType} onChange={handleStudentTypeChange} compact />
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        {/* Section 1: Major Categories */}
        <section id="categories">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0064a4]">
                <Zap className="w-3.5 h-3.5" />
                <span>{t.sections.majorCategories}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                {t.sections.majorCategories}
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                {t.sections.majorCategoriesSub}
              </p>
            </div>

            <Link
              href="/categories"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0064a4] hover:underline shrink-0"
            >
              <span>{t.sections.viewAllCategories}</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
            {CATEGORIES.map(category => {
              const count = GUIDES.filter(g => g.category === category.id).length;
              return <CategoryCard key={category.id} category={category} guideCount={count} />;
            })}
          </div>
        </section>

        {/* Section 2: "I Need To..." Action Hub */}
        <section className="rounded-3xl border border-slate-200/90 bg-gradient-to-br from-slate-900 via-[#0c2340] to-slate-900 text-white p-6 sm:p-10 shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <span className="inline-block rounded-full bg-[#ffd200]/20 text-[#ffd200] border border-[#ffd200]/30 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                Action-Oriented Hub
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                {t.sections.iNeedToHub}
              </h2>
              <p className="text-sm text-slate-300 mt-1 max-w-xl">
                {t.sections.iNeedToHubSub}
              </p>
            </div>

            <Link
              href="/i-need-to"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2 text-xs sm:text-sm font-semibold text-white transition-colors shrink-0"
            >
              <span>{t.sections.browseAllTasks}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {previewTasks.map(task => (
              <Link
                key={task.id}
                href={`/guides/${task.guideSlug}`}
                className="group flex flex-col justify-between rounded-2xl bg-white/5 border border-white/10 p-5 hover:bg-white/10 hover:border-[#ffd200]/50 transition-all"
              >
                <div>
                  <div className="text-base font-bold text-white group-hover:text-[#ffd200] transition-colors flex items-center justify-between">
                    <span>{task.question}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform shrink-0" />
                  </div>
                  <p className="mt-2 text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {task.summary}
                  </p>
                </div>

                {task.urgentNotice && (
                  <div className="mt-3 pt-2 border-t border-white/10 text-[11px] font-medium text-amber-300 flex items-center gap-1">
                    <span>⚠️ {task.urgentNotice}</span>
                  </div>
                )}
              </Link>
            ))}
          </div>
        </section>

        {/* Section 3: New to UCI? Starter Checklist */}
        <section id="new-student-checklist">
          <ChecklistWidget />
        </section>

        {/* Section 4: Most Useful Guides */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0064a4]">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Essential Knowledge</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                {studentType === 'all'
                  ? t.sections.mostUsefulGuides
                  : `Recommended for ${studentType.charAt(0).toUpperCase() + studentType.slice(1)} Students`}
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                {t.sections.mostUsefulGuidesSub}
              </p>
            </div>

            <Link
              href="/guides"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0064a4] hover:underline shrink-0"
            >
              <span>{t.sections.viewAllGuides}</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {popularGuides.map(guide => (
              <GuideCard key={guide.id} guide={guide} />
            ))}
          </div>
        </section>

        {/* Section 5: UCI Tools Directory Preview */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0064a4]">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Campus Portals Explained</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                {t.sections.toolsExplained}
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                {t.sections.toolsExplainedSub}
              </p>
            </div>

            <Link
              href="/tools"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0064a4] hover:underline shrink-0"
            >
              <span>{t.sections.exploreAllTools}</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {previewTools.map(tool => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </section>

        {/* Section 6: AntTrail Course Planning Integration Banner */}
        <section id="anttrail">
          <AntTrailBanner variant="full" />
        </section>

        {/* Section 7: Things Students Often Don't Know */}
        <section className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-10 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 mb-1">
            <Lightbulb className="w-4 h-4 text-amber-500" />
            <span>Anteater Secrets & Perks</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {t.sections.secretsAndTips}
          </h2>
          <p className="text-sm text-slate-600 mt-1 max-w-2xl">
            {t.sections.secretsAndTipsSub}
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {STUDENT_TIPS.map(tip => (
              <div
                key={tip.id}
                className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-slate-50/50 p-4 hover:bg-sky-50/40 hover:border-sky-200 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-white border border-slate-200/80 rounded-md px-2 py-0.5">
                      {tip.tag}
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">{tip.category}</span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 leading-snug">
                    {tip.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {tip.description}
                  </p>
                </div>

                {tip.actionUrl && (
                  <div className="mt-4 pt-2 border-t border-slate-200/60">
                    <a
                      href={tip.actionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#0064a4] hover:underline"
                    >
                      <span>{tip.actionLabel || 'Visit official page'}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
