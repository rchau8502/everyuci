import { CategoryId, StudentType } from './guide';

export type QuarterTerm = 'Fall 2026' | 'Winter 2027' | 'Spring 2027' | 'Summer 2027';

export interface CampusDeadline {
  id: string;
  title: string;
  term: QuarterTerm;
  dateString: string;
  targetDate: string; // ISO date for sorting: 'YYYY-MM-DD'
  timeCutoff?: string; // e.g., '4:00 PM PST' or '5:00 PM PST'
  category: CategoryId;
  description: string;
  isStrict: boolean;
  consequence: string;
  actionLabel: string;
  actionUrl: string;
  guideSlug?: string;
  relevantPersonas: StudentType[];
}
