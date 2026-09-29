export type LanguageCode =
  | 'en'     // English (Default campus instruction language)
  | 'zh-CN'  // Simplified Chinese (Rank #1 non-English: Largest international student body & Mandarin community)
  | 'es'     // Spanish (Rank #2: UCI is a designated Hispanic-Serving Institution, ~27% of students)
  | 'vi'     // Vietnamese (Rank #3: Orange County Little Saigon & large Vietnamese American Anteater community)
  | 'ko'     // Korean (Rank #4: Prominent Irvine & Korean international/domestic community)
  | 'zh-TW'  // Traditional Chinese (Rank #5: Taiwan, Hong Kong, & Cantonese/Traditional readers)
  | 'tl'     // Tagalog (Rank #6: Large Southern California & Filipino Anteater community)
  | 'ja';    // Japanese (Rank #7: International exchange & Japanese American community)

export interface LanguageInfo {
  code: LanguageCode;
  name: string;
  nativeName: string;
  flag: string;
  rankPriority: number;
  demographicNote: string;
  badge?: string;
}
