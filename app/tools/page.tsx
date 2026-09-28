'use client';

import { useState } from 'react';
import { UCI_TOOLS } from '@/data/tools';
import ToolCard from '@/components/ToolCard';
import { Search, LayoutGrid, HelpCircle } from 'lucide-react';

export default function ToolsPage() {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    'all',
    'Academics & Registration',
    'Finances & Billing',
    'Campus Life & Housing',
    'Career & Health',
  ];

  const filteredTools = UCI_TOOLS.filter(tool => {
    const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
    const q = query.toLowerCase().trim();
    if (!q) return matchesCategory;

    const matchesQuery =
      tool.name.toLowerCase().includes(q) ||
      tool.tagline.toLowerCase().includes(q) ||
      tool.whatItIs.toLowerCase().includes(q) ||
      tool.aliases.some(a => a.toLowerCase().includes(q));

    return matchesCategory && matchesQuery;
  });

  return (
    <div className="py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-sky-100 text-[#0064a4] border border-sky-200 px-3 py-1 text-xs font-bold uppercase tracking-wider mb-3">
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>Campus Portals Directory</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Important UCI Tools Directory
          </h1>
          <p className="mt-2 text-base text-slate-600 leading-relaxed">
            UC Irvine uses different websites for enrollment, tuition, financial aid, housing, and health. Here is a clear directory of all 14 official student systems, what they do, when you need them, and direct login links.
          </p>

          {/* Search Tools */}
          <div className="mt-6 relative max-w-xl">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search tools by name or task (e.g. WebReg, billing, transcripts, bus)..."
              className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm text-slate-900 placeholder-slate-400 shadow-xs focus:outline-none focus:ring-2 focus:ring-[#0064a4]/20 focus:border-[#0064a4]"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 text-xs">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-3.5 py-1.5 font-semibold transition-colors shrink-0 ${
                selectedCategory === cat
                  ? 'bg-[#0064a4] text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              {cat === 'all' ? `All Systems (${UCI_TOOLS.length})` : cat}
            </button>
          ))}
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTools.map(tool => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </div>
    </div>
  );
}
