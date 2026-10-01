export type MajorDivision =
  | 'all'
  | 'gpa-booster'
  | 'ics-cs'
  | 'engineering'
  | 'biosci'
  | 'business-econ'
  | 'social-sci'
  | 'humanities-arts';

export type GECategory =
  | 'GE Ia' // Lower-Division Writing
  | 'GE Ib' // Upper-Division Writing
  | 'GE II' // Science and Technology
  | 'GE III' // Social and Behavioral Sciences
  | 'GE IV' // Arts and Humanities
  | 'GE Va' // Quantitative Literacy
  | 'GE Vb' // Formal Reasoning
  | 'GE VI' // Language Other Than English
  | 'GE VII' // Multicultural Studies
  | 'GE VIII'; // International/Global Issues

export interface RecommendedProfessor {
  name: string;
  rmpRating: number; // e.g. 4.8 / 5.0
  rmpDifficulty: number; // e.g. 1.4 / 5.0
  totalReviews: number; // e.g. 350
  rmpUrl: string; // RateMyProfessors direct search or profile link
  tags: string[]; // e.g. ["Clear grading", "Amazing lectures", "Caring"]
}

export interface RecommendedCourse {
  id: string;
  code: string; // e.g. "ANTHRO 2A"
  title: string; // e.g. "Introduction to Sociocultural Anthropology"
  units: number; // e.g. 4
  division: MajorDivision;
  geCategories: GECategory[];
  difficultyLevel: 'Very Easy' | 'Easy' | 'Moderate';
  difficultyScore: number; // 1.0 - 5.0 scale (1 = easiest)
  isGpaBooster: boolean; // Legendary "水课" (GPA Booster)
  isOnlineAvailable: boolean; // Offers online or asynchronous sections
  isNoMidtermFinal: boolean; // No traditional stressful exams (e.g. project / quiz / participation based)
  recommendedProfessors: RecommendedProfessor[];
  zotisticsStats: {
    avgGpa: number; // e.g. 3.82
    percentA: number; // e.g. 88 (meaning 88% A/A-)
    sampleQuarters?: string; // e.g. "Historical Zotistics Avg"
  };
  whyTakeIt: string; // Student-written rationale / "水课理由"
  tipsForSuccess: string[]; // Student insider tips
  tags: string[];
  webregSearchUrl?: string;
  zotisticsUrl?: string;
}
