import { LanguageCode, LanguageInfo } from '@/types/language';

export const LANGUAGES: LanguageInfo[] = [
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇺🇸',
    rankPriority: 0,
    demographicNote: 'Official University of California language of instruction and administration.',
    badge: 'Default',
  },
  {
    code: 'zh-CN',
    name: 'Chinese (Simplified)',
    nativeName: '简体中文',
    flag: '🇨🇳',
    rankPriority: 1,
    demographicNote: 'Rank #1 non-English: Largest international student population at UCI (>70% of international students) & massive Mandarin-speaking community.',
    badge: 'Top International',
  },
  {
    code: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    flag: '🇲🇽',
    rankPriority: 2,
    demographicNote: 'Rank #2: UCI is a federally designated Hispanic-Serving Institution (HSI) with ~27% Hispanic/Latino undergraduate enrollment.',
    badge: 'HSI Community (~27%)',
  },
  {
    code: 'vi',
    name: 'Vietnamese',
    nativeName: 'Tiếng Việt',
    flag: '🇻🇳',
    rankPriority: 3,
    demographicNote: 'Rank #3: UCI borders Orange County’s Little Saigon (largest Vietnamese population outside Vietnam); Vietnamese Anteaters represent a huge cultural presence.',
    badge: 'OC Community',
  },
  {
    code: 'ko',
    name: 'Korean',
    nativeName: '한국어',
    flag: '🇰🇷',
    rankPriority: 4,
    demographicNote: 'Rank #4: Significant Irvine Korean American community and large Korean international student body at UCI.',
    badge: 'Irvine Community',
  },
  {
    code: 'zh-TW',
    name: 'Chinese (Traditional)',
    nativeName: '繁體中文',
    flag: '🇹🇼',
    rankPriority: 5,
    demographicNote: 'Rank #5: Serving students from Taiwan, Hong Kong, and Cantonese/Traditional script readers.',
    badge: 'Taiwan & HK',
  },
  {
    code: 'tl',
    name: 'Tagalog / Filipino',
    nativeName: 'Tagalog',
    flag: '🇵🇭',
    rankPriority: 6,
    demographicNote: 'Rank #6: Significant Southern California Filipino American community and active Anteater Filipino student organizations (Kababaen).',
    badge: 'SoCal Community',
  },
  {
    code: 'ja',
    name: 'Japanese',
    nativeName: '日本語',
    flag: '🇯🇵',
    rankPriority: 7,
    demographicNote: 'Rank #7: International exchange students, Japanese language scholars, and Japanese American Anteaters (Tomo No Kai).',
    badge: 'Exchange & Heritage',
  },
];

export const DEFAULT_LANGUAGE: LanguageCode = 'en';

export const LANGUAGE_STORAGE_KEY = 'everyuci_user_language_v1';
