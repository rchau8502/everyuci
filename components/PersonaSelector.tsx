'use client';

import { useState, useEffect } from 'react';
import { StudentType } from '@/types/guide';
import { UserCheck, ChevronDown, Check } from 'lucide-react';

export const STUDENT_PERSONAS: { id: StudentType; label: string; desc: string; icon: string }[] = [
  { id: 'all', label: 'All Students', desc: 'General guides and policies', icon: '🎓' },
  { id: 'freshman', label: 'Freshman', desc: 'Dorms, first-week, orientation, GE basics', icon: '🌱' },
  { id: 'transfer', label: 'Transfer Student', desc: 'Articulation, 9-quarter limits, major classes', icon: '🔄' },
  { id: 'continuing', label: 'Continuing Student', desc: 'DegreeWorks, change of major, graduation', icon: '📚' },
  { id: 'international', label: 'International', desc: 'F-1 visa rules, 12-unit minimum, on-campus jobs', icon: '🌏' },
  { id: 'commuter', label: 'Commuter', desc: 'Zone parking permits, OCTA pass, study spots', icon: '🚗' },
  { id: 'resident', label: 'Campus Resident', desc: 'Mesa Court, Middle Earth, AV, ACC apartments', icon: '🏠' },
];

interface PersonaSelectorProps {
  current: StudentType;
  onChange: (type: StudentType) => void;
  compact?: boolean;
}

export default function PersonaSelector({ current, onChange, compact = false }: PersonaSelectorProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Sync with localStorage if available and current is default
    const saved = localStorage.getItem('everyuci_student_type') as StudentType | null;
    if (saved && saved !== current && current === 'all') {
      onChange(saved);
    }
  }, []);

  const handleSelect = (type: StudentType) => {
    onChange(type);
    localStorage.setItem('everyuci_student_type', type);
    setOpen(false);
  };

  const activePersona = STUDENT_PERSONAS.find(p => p.id === current) || STUDENT_PERSONAS[0];

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        type="button"
        className={`inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs sm:text-sm font-medium text-slate-700 shadow-xs hover:bg-slate-50 hover:border-slate-300 transition-all focus:outline-none focus:ring-2 focus:ring-[#0064a4]/20 ${
          current !== 'all' ? 'border-[#0064a4]/40 bg-sky-50/50 text-[#0064a4]' : ''
        }`}
        aria-expanded={open}
        aria-haspopup="true"
      >
        <span className="text-sm">{activePersona.icon}</span>
        <span className="font-semibold text-slate-800">
          {compact ? activePersona.label : `Viewing as: ${activePersona.label}`}
        </span>
        <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-0 sm:left-0 z-50 mt-2 w-72 origin-top-right rounded-2xl bg-white p-2 shadow-xl ring-1 ring-slate-900/10 focus:outline-none animate-in fade-in zoom-in-95 duration-100">
            <div className="px-3 py-2 border-b border-slate-100">
              <p className="text-xs font-semibold text-slate-900">Personalize Your Guides</p>
              <p className="text-[11px] text-slate-500">
                Select your student status to prioritize the most relevant requirements.
              </p>
            </div>
            <div className="py-1 max-h-80 overflow-y-auto">
              {STUDENT_PERSONAS.map(persona => {
                const isSelected = persona.id === current;
                return (
                  <button
                    key={persona.id}
                    onClick={() => handleSelect(persona.id)}
                    className={`w-full flex items-center justify-between px-3 py-2 text-left rounded-xl text-xs transition-colors ${
                      isSelected
                        ? 'bg-sky-50 text-[#0064a4] font-medium'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-start gap-2.5">
                      <span className="text-base mt-0.5">{persona.icon}</span>
                      <div>
                        <div className="font-semibold text-slate-900">{persona.label}</div>
                        <div className="text-[11px] text-slate-500">{persona.desc}</div>
                      </div>
                    </div>
                    {isSelected && <Check className="w-4 h-4 text-[#0064a4] shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
