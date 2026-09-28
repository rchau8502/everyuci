import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { GUIDES } from '@/data/guides';
import { CATEGORIES } from '@/data/categories';
import GuideCard from '@/components/GuideCard';
import ShareButton from '@/components/ShareButton';
import FeedbackModal from '@/components/FeedbackModal';
import CategoryIcon from '@/components/CategoryIcon';
import AntTrailBanner from '@/components/AntTrailBanner';
import {
  ShieldCheck,
  Calendar,
  ExternalLink,
  ChevronRight,
  AlertTriangle,
  Lightbulb,
  CheckCircle2,
  Clock,
  ArrowLeft,
  Bookmark,
  Share2,
  Building2,
  Phone,
  Mail,
  MapPin,
  Sparkles,
} from 'lucide-react';

interface GuidePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return GUIDES.map(guide => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = GUIDES.find(g => g.slug === slug);
  if (!guide) return { title: 'Guide Not Found — everyUCI' };

  return {
    title: `${guide.title} — everyUCI`,
    description: guide.shortDescription,
  };
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = GUIDES.find(g => g.slug === slug);

  if (!guide) {
    notFound();
  }

  const category = CATEGORIES.find(c => c.id === guide.category);
  const relatedGuides = GUIDES.filter(g => guide.relatedGuides.includes(g.slug));

  return (
    <div className="py-10 sm:py-14 bg-slate-50/40">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Breadcrumb & Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
          <nav className="flex items-center gap-1.5 overflow-x-auto">
            <Link href="/" className="hover:text-slate-900 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
            <Link href="/guides" className="hover:text-slate-900 transition-colors">
              Guides
            </Link>
            {category && (
              <>
                <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
                <Link
                  href={`/categories/${category.id}`}
                  className="hover:text-slate-900 transition-colors"
                >
                  {category.name}
                </Link>
              </>
            )}
          </nav>

          <div className="flex items-center gap-2">
            <ShareButton title={guide.title} />
          </div>
        </div>

        {/* Article Header Card */}
        <header className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-10 shadow-xs">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {category && (
              <Link
                href={`/categories/${category.id}`}
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
                style={{ backgroundColor: category.accentBg, color: category.color }}
              >
                <CategoryIcon name={category.iconName} className="w-3.5 h-3.5" color={category.color} />
                <span>{category.name}</span>
              </Link>
            )}

            {guide.subCategory && (
              <span className="rounded-full bg-slate-100 text-slate-700 px-3 py-1 text-xs font-medium">
                {guide.subCategory}
              </span>
            )}
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            {guide.title}
          </h1>

          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            {guide.shortDescription}
          </p>

          {/* Student Relevance Badges */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {guide.freshmanRelevant && (
              <span className="rounded-md bg-emerald-50 text-emerald-700 border border-emerald-100 px-2.5 py-0.5 text-xs font-medium">
                Relevant for Freshmen
              </span>
            )}
            {guide.transferRelevant && (
              <span className="rounded-md bg-blue-50 text-blue-700 border border-blue-100 px-2.5 py-0.5 text-xs font-medium">
                Relevant for Transfers
              </span>
            )}
            {guide.commuterRelevant && (
              <span className="rounded-md bg-purple-50 text-purple-700 border border-purple-100 px-2.5 py-0.5 text-xs font-medium">
                Commuters
              </span>
            )}
            {guide.residentRelevant && (
              <span className="rounded-md bg-amber-50 text-amber-700 border border-amber-100 px-2.5 py-0.5 text-xs font-medium">
                Residents
              </span>
            )}
          </div>

          {/* Verification & Reliability Bar */}
          <div className="mt-6 pt-5 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            <div>
              <p className="text-slate-400 font-medium">Source Department</p>
              <p className="font-bold text-slate-800 mt-0.5">{guide.sourceDepartment}</p>
            </div>
            <div>
              <p className="text-slate-400 font-medium">Last Verified</p>
              <p className="font-bold text-emerald-700 flex items-center gap-1 mt-0.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{guide.lastVerified}</span>
              </p>
            </div>
            <div>
              <p className="text-slate-400 font-medium">Academic Year</p>
              <p className="font-bold text-slate-800 mt-0.5">{guide.academicYear}</p>
            </div>
            <div>
              <p className="text-slate-400 font-medium">Official Link</p>
              <a
                href={guide.officialSource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#0064a4] hover:underline flex items-center gap-1 mt-0.5"
              >
                <span>UCI Source</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </header>

        {/* Section 1: Short Answer */}
        <section className="rounded-3xl border-2 border-[#0064a4]/20 bg-gradient-to-br from-sky-50/70 via-white to-sky-50/40 p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0064a4] mb-2">
            <Sparkles className="w-4 h-4 text-[#0064a4]" />
            <span>Short Answer</span>
          </div>
          <p className="text-base sm:text-lg font-medium text-slate-900 leading-relaxed">
            {guide.shortAnswer}
          </p>
        </section>

        {/* Section 2: What You Need to Know */}
        <section className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
            <Lightbulb className="w-4 h-4 text-amber-500" />
            <span>Rules & Context</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            What you need to know
          </h2>

          <div className="space-y-3.5 text-sm sm:text-base text-slate-700 leading-relaxed">
            {guide.whatYouNeedToKnow.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* Section 3: What to Do (Step-by-Step) */}
        <section className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs space-y-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Action Steps</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
              What to do
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Follow these sequential steps to resolve this task properly.
            </p>
          </div>

          <div className="space-y-4">
            {guide.whatToDo.map(step => (
              <div
                key={step.step}
                className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#0064a4] text-white font-extrabold text-sm shadow-xs">
                  {step.step}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {step.instruction}
                  </p>

                  {step.tip && (
                    <div className="mt-2 text-xs text-amber-800 bg-amber-50/80 border border-amber-200/60 rounded-lg p-2 font-medium">
                      💡 Tip: {step.tip}
                    </div>
                  )}

                  {step.link && (
                    <div className="mt-2.5">
                      <a
                        href={step.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg bg-white border border-slate-200 px-3 py-1 text-xs font-semibold text-[#0064a4] hover:bg-sky-50 hover:border-sky-300 transition-colors shadow-2xs"
                      >
                        <span>{step.link.label}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Important Deadlines */}
        <section className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-700">
            <Clock className="w-4 h-4 text-rose-600" />
            <span>Timeline & Cutoffs</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Important deadlines
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {guide.deadlines.map((dl, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-2xl border ${
                  dl.isCritical
                    ? 'bg-rose-50/50 border-rose-200 text-rose-950'
                    : 'bg-slate-50 border-slate-100 text-slate-800'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    {dl.title}
                  </h3>
                  {dl.isCritical && (
                    <span className="rounded-full bg-rose-100 text-rose-800 text-[10px] font-bold px-2 py-0.5">
                      Strict Deadline
                    </span>
                  )}
                  {dl.verifyWithUci && (
                    <span className="rounded-full bg-amber-100 text-amber-900 text-[10px] font-bold px-2 py-0.5">
                      Verify with UCI
                    </span>
                  )}
                </div>
                <div className="mt-1 text-sm font-extrabold text-slate-900">
                  {dl.dateOrRule}
                </div>
                {dl.note && (
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                    {dl.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Things Students Commonly Misunderstand */}
        <section className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700">
            <AlertTriangle className="w-4 h-4 text-amber-600" />
            <span>Common Pitfalls</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Things students commonly misunderstand
          </h2>

          <div className="space-y-3.5">
            {guide.misunderstandings.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-amber-50/40 border border-amber-200/70 space-y-2"
              >
                <div className="flex items-start gap-2 text-xs sm:text-sm font-bold text-amber-950">
                  <span className="text-rose-600">❌ Myth:</span>
                  <span>{item.myth}</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-800 pl-4 border-l-2 border-emerald-500">
                  <span className="font-bold text-emerald-700 shrink-0">✓ Reality:</span>
                  <span>{item.reality}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Official UCI Source & Department */}
        <section className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0064a4] mb-2">
            <Building2 className="w-4 h-4 text-[#0064a4]" />
            <span>Official University Source</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            {guide.officialSource.name}
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Department: {guide.officialSource.department}
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            {guide.officialSource.location && (
              <div className="flex items-center gap-2.5 text-slate-700">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{guide.officialSource.location}</span>
              </div>
            )}
            {guide.officialSource.phone && (
              <div className="flex items-center gap-2.5 text-slate-700">
                <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{guide.officialSource.phone}</span>
              </div>
            )}
            {guide.officialSource.email && (
              <div className="flex items-center gap-2.5 text-slate-700">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{guide.officialSource.email}</span>
              </div>
            )}
          </div>

          <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
            <FeedbackModal guideTitle={guide.title} guideSlug={guide.slug} />

            <a
              href={guide.officialSource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#0064a4] text-white px-4 py-2 text-xs font-semibold hover:bg-[#0c2340] transition-colors"
            >
              <span>Visit Official {guide.officialSource.department} Page</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>

        {/* AntTrail Integration Reminder */}
        {guide.category === 'academics' && (
          <AntTrailBanner variant="compact" />
        )}

        {/* Section 7: Related Guides */}
        {relatedGuides.length > 0 && (
          <section className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900">
              Related everyUCI Guides
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedGuides.map(rel => (
                <GuideCard key={rel.id} guide={rel} />
              ))}
            </div>
          </section>
        )}

        {/* Back Link */}
        <div className="pt-4 text-center">
          <Link
            href="/guides"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0064a4] hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Browse all student guides</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
