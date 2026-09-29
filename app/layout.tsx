import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SearchModal from '@/components/SearchModal';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'everyUCI — Everything you need to navigate UC Irvine',
  description:
    'An all-in-one independent student guide for UC Irvine. Simple, fast, searchable answers for classes, financial aid, housing, parking, graduation, and campus tools. Available in English, 简体中文, Español, Tiếng Việt, 한국어, 繁體中文, Tagalog, and 日本語.',
  keywords: [
    'UCI',
    'UC Irvine',
    'everyUCI',
    'ZotAccount',
    'ZotAid',
    'WebReg',
    'StudentAccess',
    'UCI parking',
    'UCI drop class',
    'UCI degree planning',
    'AntTrail',
    'UCI Chinese student guide',
    'UCI Spanish student guide',
    'UCI Vietnamese student guide',
    'UCI Korean student guide',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-full flex flex-col bg-slate-50/50 text-slate-900 antialiased font-sans`}
      >
        <LanguageProvider>
          <Navbar />
          <SearchModal />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
