'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { CheckCircle2, Circle, ArrowRight, Sparkles, RotateCcw } from 'lucide-react';

interface ChecklistItem {
  id: string;
  label: string;
  description: string;
  guideSlug?: string;
  externalUrl?: string;
}

const FIRST_WEEK_ITEMS: ChecklistItem[] = [
  {
    id: 'eduroam',
    label: 'Connect to eduroam Wi-Fi',
    description: 'Use yourUCInetID@uci.edu and password across all phones and laptops.',
    guideSlug: 'first-week-checklist',
  },
  {
    id: 'zotcard',
    label: 'Upload photo & pick up ZotCard',
    description: 'Upload your photo online and pick up your ID card at The Hill (2nd floor).',
    guideSlug: 'zotcard-and-student-id',
  },
  {
    id: 'uship',
    label: 'Waive UC SHIP (if you have private insurance)',
    description: 'Avoid ~$700/quarter insurance charge by submitting proof before the fee deadline.',
    guideSlug: 'health-insurance-and-uship',
  },
  {
    id: 'direct-deposit',
    label: 'Enroll in Electronic Refunds on ZotAccount',
    description: 'Receive financial aid disbursements directly to your US bank account in 2–3 days.',
    guideSlug: 'what-is-zotaccount',
  },
  {
    id: 'canvas',
    label: 'Review Canvas syllabi & exam schedules',
    description: 'Log into canvas.eee.uci.edu and check for required books or Week 1 assignments.',
    guideSlug: 'first-week-checklist',
  },
  {
    id: 'ring-road',
    label: 'Walk Ring Mall & locate your classrooms',
    description: 'Find your lecture halls (SSLH, DBH, BS3, Rowland Hall) before Day 1.',
    guideSlug: 'first-week-checklist',
  },
  {
    id: 'parking',
    label: 'Register your license plate for parking (if driving)',
    description: 'Commuters must buy a Zone permit on myCommute; residents register with ACC/housing.',
    guideSlug: 'how-uci-parking-works',
  },
  {
    id: 'arc',
    label: 'Download the UCI Campus Rec app for gym access',
    description: 'Get your digital barcode for free entry to the Anteater Recreation Center.',
    guideSlug: 'how-to-use-the-arc',
  },
];

const STORAGE_KEY = 'everyuci_new_student_checklist_v1';

export default function ChecklistWidget() {
  const [completed, setCompleted] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setCompleted(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  const toggleItem = (id: string) => {
    const updated = { ...completed, [id]: !completed[id] };
    setCompleted(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const resetAll = () => {
    setCompleted({});
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  const completedCount = Object.values(completed).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / FIRST_WEEK_ITEMS.length) * 100);

  return (
    <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-xs">
              <Sparkles className="w-3.5 h-3.5" />
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
              New to UCI?
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            Anteater First-Week Starter Checklist
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Check off essentials to set up your tech, cards, accounts, and health waiver. Progress is saved on your device.
          </p>
        </div>

        {/* Progress Bar & Counter */}
        <div className="sm:text-right shrink-0">
          <div className="flex items-center sm:justify-end gap-2 text-sm font-bold text-slate-900">
            <span>{completedCount} of {FIRST_WEEK_ITEMS.length} completed</span>
            <span className="text-xs text-slate-500 font-normal">({progressPercent}%)</span>
          </div>
          <div className="mt-2 w-48 h-2 rounded-full bg-slate-100 overflow-hidden">
            <div
              className="h-full bg-emerald-500 rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          {completedCount > 0 && (
            <button
              onClick={resetAll}
              className="mt-2 inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-slate-600"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset checklist</span>
            </button>
          )}
        </div>
      </div>

      {/* Grid of Checklist Items */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {FIRST_WEEK_ITEMS.map(item => {
          const isDone = !!completed[item.id];
          return (
            <div
              key={item.id}
              onClick={() => toggleItem(item.id)}
              className={`flex items-start gap-3.5 p-3.5 rounded-2xl border transition-all cursor-pointer ${
                isDone
                  ? 'bg-emerald-50/40 border-emerald-200/80 text-slate-900'
                  : 'bg-white border-slate-200/80 hover:border-slate-300 hover:bg-slate-50/50'
              }`}
            >
              <button
                type="button"
                className="mt-0.5 shrink-0 text-slate-400 hover:text-emerald-600"
                aria-label={isDone ? 'Mark uncompleted' : 'Mark completed'}
              >
                {isDone ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 fill-emerald-100" />
                ) : (
                  <Circle className="w-5 h-5 text-slate-300" />
                )}
              </button>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <span className={`text-sm font-bold ${isDone ? 'line-through text-slate-500' : 'text-slate-900'}`}>
                    {item.label}
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                  {item.description}
                </p>

                {item.guideSlug && (
                  <div className="mt-2">
                    <Link
                      href={`/guides/${item.guideSlug}`}
                      onClick={e => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#0064a4] hover:underline"
                    >
                      <span>Read guide</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
