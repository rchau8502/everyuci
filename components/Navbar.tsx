'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Menu, X, Bookmark, Route, ChevronDown, Sparkles, ExternalLink } from 'lucide-react';
import PersonaSelector from './PersonaSelector';
import { StudentType } from '@/types/guide';
import { CATEGORIES } from '@/data/categories';
import { getSavedGuideSlugs } from '@/lib/bookmarks';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesDropdownOpen, setCategoriesDropdownOpen] = useState(false);
  const [studentType, setStudentType] = useState<StudentType>('all');
  const [savedCount, setSavedCount] = useState(0);

  useEffect(() => {
    const saved = (localStorage.getItem('everyuci_student_type') as StudentType) || 'all';
    setStudentType(saved);
    setSavedCount(getSavedGuideSlugs().length);

    const handleBookmarksUpdate = () => {
      setSavedCount(getSavedGuideSlugs().length);
    };

    window.addEventListener('everyuci_bookmarks_updated', handleBookmarksUpdate);
    return () => window.removeEventListener('everyuci_bookmarks_updated', handleBookmarksUpdate);
  }, []);

  const handleStudentTypeChange = (type: StudentType) => {
    setStudentType(type);
    localStorage.setItem('everyuci_student_type', type);
    window.dispatchEvent(new CustomEvent('everyuci_persona_changed', { detail: type }));
  };

  const openSearchModal = () => {
    window.dispatchEvent(new Event('open_search_modal'));
  };

  const navLinks = [
    { label: 'Explore Guides', href: '/guides' },
    { label: 'I Need To...', href: '/i-need-to' },
    { label: 'UCI Tools', href: '/tools' },
    { label: 'Degree Planning', href: '/degree-planning', badge: 'AntTrail' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Brand Logo */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#0064a4] to-[#0c2340] text-white shadow-xs group-hover:scale-105 transition-transform">
              <span className="font-extrabold text-base tracking-tighter">eU</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center">
                <span className="text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-[#0064a4] transition-colors">
                  every<span className="text-[#0064a4]">UCI</span>
                </span>
                <span className="w-2 h-2 rounded-full bg-[#ffd200] ml-0.5 mt-0.5" />
              </div>
              <span className="text-[10px] font-semibold text-slate-400 tracking-wider uppercase -mt-1">
                Student Guide
              </span>
            </div>
          </Link>

          {/* Persona selector badge */}
          <div className="hidden lg:block">
            <PersonaSelector current={studentType} onChange={handleStudentTypeChange} compact />
          </div>
        </div>

        {/* Center: Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map(link => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3 py-1.5 rounded-xl text-sm font-semibold transition-colors flex items-center gap-1.5 ${
                  isActive
                    ? 'text-[#0064a4] bg-sky-50'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold px-1.5 py-0.2">
                    {link.badge}
                  </span>
                )}
              </Link>
            );
          })}

          {/* Categories dropdown */}
          <div className="relative">
            <button
              onClick={() => setCategoriesDropdownOpen(!categoriesDropdownOpen)}
              type="button"
              className="px-3 py-1.5 rounded-xl text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors flex items-center gap-1"
            >
              <span>Categories</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {categoriesDropdownOpen && (
              <>
                <div
                  className="fixed inset-0 z-20"
                  onClick={() => setCategoriesDropdownOpen(false)}
                />
                <div className="absolute right-0 mt-2 w-64 rounded-2xl bg-white p-2 shadow-xl ring-1 ring-slate-900/10 z-30 divide-y divide-slate-100 animate-in fade-in zoom-in-95 duration-100">
                  <div className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                    Browse by Category
                  </div>
                  <div className="py-1 max-h-72 overflow-y-auto">
                    {CATEGORIES.map(cat => (
                      <Link
                        key={cat.id}
                        href={`/categories/${cat.id}`}
                        onClick={() => setCategoriesDropdownOpen(false)}
                        className="flex items-center justify-between px-3 py-2 text-xs rounded-xl hover:bg-sky-50 text-slate-700 hover:text-[#0064a4] transition-colors"
                      >
                        <span className="font-medium">{cat.name}</span>
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: cat.color }}
                        />
                      </Link>
                    ))}
                  </div>
                  <div className="pt-2 px-2 pb-1">
                    <Link
                      href="/categories"
                      onClick={() => setCategoriesDropdownOpen(false)}
                      className="block text-center py-1.5 rounded-lg text-xs font-semibold text-[#0064a4] bg-sky-50/70 hover:bg-sky-100/70"
                    >
                      All 10 Categories
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </nav>

        {/* Right Actions: Search trigger, Saved items, Mobile menu */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Search Trigger */}
          <button
            onClick={openSearchModal}
            type="button"
            className="hidden sm:flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50/80 px-3.5 py-1.5 text-xs text-slate-500 hover:border-slate-300 hover:bg-slate-100 transition-colors"
            title="Search guides (⌘K)"
          >
            <Search className="w-3.5 h-3.5 text-slate-400" />
            <span>Search...</span>
            <kbd className="rounded border border-slate-200 bg-white px-1.5 py-0.5 text-[10px] font-semibold text-slate-400 shadow-2xs">
              ⌘K
            </kbd>
          </button>

          {/* Mobile search icon */}
          <button
            onClick={openSearchModal}
            type="button"
            className="sm:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100"
            aria-label="Open search"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Bookmarks link */}
          <Link
            href="/saved"
            className="relative p-2 text-slate-600 hover:text-[#0064a4] rounded-lg hover:bg-sky-50 transition-colors"
            title="Saved Guides"
            aria-label="Saved Guides"
          >
            <Bookmark className="w-5 h-5" />
            {savedCount > 0 && (
              <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#0064a4] text-[10px] font-bold text-white">
                {savedCount}
              </span>
            )}
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100"
            aria-label="Toggle navigation drawer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-4 animate-in slide-in-from-top-2 duration-150 shadow-xl">
          {/* Mobile Persona Selector */}
          <div className="pb-3 border-b border-slate-100">
            <p className="text-xs font-semibold text-slate-500 mb-1.5">Student Persona</p>
            <PersonaSelector current={studentType} onChange={handleStudentTypeChange} />
          </div>

          <div className="space-y-1">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3 py-2 rounded-xl text-sm font-semibold ${
                  pathname === link.href
                    ? 'text-[#0064a4] bg-sky-50'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-0.5">
                    {link.badge}
                  </span>
                )}
              </Link>
            ))}
            <Link
              href="/categories"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              <span>All 10 Categories</span>
            </Link>
            <Link
              href="/saved"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              <span>Saved Guides ({savedCount})</span>
            </Link>
          </div>

          {/* Quick External Links for Mobile */}
          <div className="pt-3 border-t border-slate-100">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Official UCI Shortcuts
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a
                href="https://www.reg.uci.edu/registrar/soc/webreg.html"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-2 rounded-lg bg-slate-50 text-slate-700 font-medium"
              >
                <span>WebReg</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
              <a
                href="https://zotaccount.uci.edu/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-2 rounded-lg bg-slate-50 text-slate-700 font-medium"
              >
                <span>ZotAccount</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
              <a
                href="https://zotaid.uci.edu/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-2 rounded-lg bg-slate-50 text-slate-700 font-medium"
              >
                <span>ZotAid</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
              <a
                href="https://canvas.eee.uci.edu/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-2 rounded-lg bg-slate-50 text-slate-700 font-medium"
              >
                <span>Canvas</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
