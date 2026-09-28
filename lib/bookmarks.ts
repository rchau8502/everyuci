'use client';

const BOOKMARKS_STORAGE_KEY = 'everyuci_saved_guides_v1';

export function getSavedGuideSlugs(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(BOOKMARKS_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function isGuideSaved(slug: string): boolean {
  const saved = getSavedGuideSlugs();
  return saved.includes(slug);
}

export function toggleSaveGuide(slug: string): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const saved = getSavedGuideSlugs();
    const index = saved.indexOf(slug);
    let updated: string[];
    let nowSaved = false;

    if (index >= 0) {
      updated = saved.filter(s => s !== slug);
      nowSaved = false;
    } else {
      updated = [slug, ...saved];
      nowSaved = true;
    }

    localStorage.setItem(BOOKMARKS_STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event('everyuci_bookmarks_updated'));
    return nowSaved;
  } catch {
    return false;
  }
}
