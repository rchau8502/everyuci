'use client';

import { useState, useEffect } from 'react';
import { Bookmark } from 'lucide-react';
import { isGuideSaved, toggleSaveGuide } from '@/lib/bookmarks';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface BookmarkButtonProps {
  slug: string;
  variant?: 'button' | 'icon';
  className?: string;
}

export default function BookmarkButton({
  slug,
  variant = 'button',
  className = '',
}: BookmarkButtonProps) {
  const { t } = useLanguage();
  const [saved, setSaved] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setSaved(isGuideSaved(slug));

    const handleUpdate = () => {
      setSaved(isGuideSaved(slug));
    };

    window.addEventListener('everyuci_bookmarks_updated', handleUpdate);
    return () => window.removeEventListener('everyuci_bookmarks_updated', handleUpdate);
  }, [slug]);

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const nowSaved = toggleSaveGuide(slug);
    setSaved(nowSaved);
  };

  if (!mounted) {
    return null;
  }

  if (variant === 'icon') {
    return (
      <button
        type="button"
        onClick={handleToggle}
        title={saved ? (t.guide.saved || 'Saved') : (t.guide.saveGuide || 'Save Guide')}
        aria-label={saved ? (t.guide.saved || 'Saved') : (t.guide.saveGuide || 'Save Guide')}
        className={`p-2 rounded-xl border transition-all cursor-pointer ${
          saved
            ? 'bg-sky-50 border-sky-300 text-[#0064a4]'
            : 'bg-white/80 border-slate-200/90 text-slate-400 hover:text-slate-700 hover:bg-slate-50'
        } ${className}`}
      >
        <Bookmark className={`w-4 h-4 ${saved ? 'fill-current' : ''}`} />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      className={`inline-flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-semibold transition-all cursor-pointer shadow-2xs ${
        saved
          ? 'bg-sky-50 border-sky-300 text-[#0064a4]'
          : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300'
      } ${className}`}
    >
      <Bookmark className={`w-3.5 h-3.5 ${saved ? 'fill-current' : ''}`} />
      <span>{saved ? (t.guide.saved || 'Saved') : (t.guide.saveGuide || 'Save Guide')}</span>
    </button>
  );
}
