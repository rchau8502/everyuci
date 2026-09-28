import Link from 'next/link';
import { UciTool } from '@/types/tool';
import { ExternalLink, BookOpen, Clock, KeyRound } from 'lucide-react';
import CategoryIcon from './CategoryIcon';

interface ToolCardProps {
  tool: UciTool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs hover:border-[#0064a4]/40 hover:shadow-md transition-all duration-200">
      <div>
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-[#0064a4] border border-sky-100">
              <CategoryIcon name={tool.iconName} className="w-5 h-5 text-[#0064a4]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-slate-900 leading-tight">
                  {tool.name}
                </h3>
                {tool.badge && (
                  <span className="rounded-full bg-sky-100/70 text-[#0064a4] px-2 py-0.5 text-[10px] font-bold">
                    {tool.badge}
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-500 font-medium">{tool.tagline}</p>
            </div>
          </div>
        </div>

        {/* What it is */}
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
          {tool.whatItIs}
        </p>

        {/* What students use it for */}
        <div className="mt-4">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
            What you use it for:
          </p>
          <ul className="space-y-1.5">
            {tool.whatUsedFor.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                <span className="text-[#0064a4] font-bold leading-none mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* When needed */}
        <div className="mt-4 pt-3 border-t border-slate-100 space-y-2">
          <div className="flex items-start gap-2 text-xs text-slate-600">
            <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-slate-800">When needed: </span>
              <span>{tool.whenNeeded}</span>
            </div>
          </div>

          {tool.loginRequirement && (
            <div className="flex items-start gap-2 text-xs text-slate-500">
              <KeyRound className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-medium text-slate-700">Login: </span>
                <span>{tool.loginRequirement}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Action links */}
      <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
        {tool.guideSlug ? (
          <Link
            href={`/guides/${tool.guideSlug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0064a4] hover:underline"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Read guide</span>
          </Link>
        ) : (
          <span className="text-xs text-slate-400">System Tool</span>
        )}

        <a
          href={tool.officialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-xl bg-slate-900 px-3.5 py-1.5 text-xs font-semibold text-white shadow-xs hover:bg-[#0064a4] transition-colors"
        >
          <span>Open {tool.name}</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}
