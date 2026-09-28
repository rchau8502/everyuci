'use client';

import { useState } from 'react';
import Link from 'next/link';
import { QUICK_TASKS } from '@/data/tasks';
import { CATEGORIES } from '@/data/categories';
import { Search, ArrowRight, ExternalLink, Zap, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { CategoryId } from '@/types/guide';

export default function INeedToPage() {
  const [taskQuery, setTaskQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>('all');

  const filteredTasks = QUICK_TASKS.filter(task => {
    const matchesCategory = selectedCategory === 'all' || task.category === selectedCategory;
    const q = taskQuery.toLowerCase().trim();
    if (!q) return matchesCategory;

    const matchesQuery =
      task.intent.toLowerCase().includes(q) ||
      task.question.toLowerCase().includes(q) ||
      task.summary.toLowerCase().includes(q) ||
      task.tags.some(t => t.toLowerCase().includes(q));

    return matchesCategory && matchesQuery;
  });

  return (
    <div className="py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 text-amber-900 border border-amber-200 px-3 py-1 text-xs font-bold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5 text-amber-600" />
            <span>Task-Focused Action Center</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            I Need To...
          </h1>
          <p className="mt-2 text-base text-slate-600 leading-relaxed">
            Don&apos;t worry about which UCI department handles your issue. Find your current task below and jump straight to the exact steps, deadlines, and official links.
          </p>

          {/* Quick Filter Search */}
          <div className="mt-6 relative max-w-xl">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={taskQuery}
              onChange={e => setTaskQuery(e.target.value)}
              placeholder="Filter tasks (e.g. drop, parking, tuition, research)..."
              className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm text-slate-900 placeholder-slate-400 shadow-xs focus:outline-none focus:ring-2 focus:ring-[#0064a4]/20 focus:border-[#0064a4]"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 text-xs">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`rounded-full px-3.5 py-1.5 font-semibold transition-colors shrink-0 ${
              selectedCategory === 'all'
                ? 'bg-[#0064a4] text-white shadow-xs'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            All Tasks ({QUICK_TASKS.length})
          </button>
          {CATEGORIES.map(cat => {
            const count = QUICK_TASKS.filter(t => t.category === cat.id).length;
            if (count === 0) return null;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`rounded-full px-3.5 py-1.5 font-semibold transition-colors shrink-0 ${
                  selectedCategory === cat.id
                    ? 'bg-[#0064a4] text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                {cat.shortName} ({count})
              </button>
            );
          })}
        </div>

        {/* Tasks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredTasks.map(task => {
            const category = CATEGORIES.find(c => c.id === task.category);
            return (
              <div
                key={task.id}
                className="flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs hover:border-[#0064a4]/40 hover:shadow-md transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    {category && (
                      <span
                        className="rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
                        style={{ backgroundColor: category.accentBg, color: category.color }}
                      >
                        {category.name}
                      </span>
                    )}

                    {task.urgentNotice && (
                      <span className="flex items-center gap-1 text-[11px] font-bold text-rose-700 bg-rose-50 border border-rose-200/60 rounded-md px-2 py-0.5">
                        <AlertTriangle className="w-3 h-3 text-rose-600 shrink-0" />
                        Urgent
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0064a4] transition-colors">
                    {task.question}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {task.summary}
                  </p>

                  {task.urgentNotice && (
                    <div className="mt-3 p-2.5 rounded-xl bg-amber-50/70 border border-amber-200/70 text-xs text-amber-900 font-medium">
                      ⚠️ {task.urgentNotice}
                    </div>
                  )}

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-1">
                    {task.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="rounded-md bg-slate-50 border border-slate-100 px-2 py-0.5 text-[10px] text-slate-500 font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  {task.officialUrl && (
                    <a
                      href={task.officialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-slate-500 hover:text-slate-800 flex items-center gap-1"
                    >
                      <span>Official Portal</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}

                  <Link
                    href={`/guides/${task.guideSlug}`}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-[#0064a4] text-white px-3.5 py-1.5 text-xs font-semibold hover:bg-[#0c2340] transition-colors ml-auto shadow-2xs"
                  >
                    <span>Read Step-by-Step</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
