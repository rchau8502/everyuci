import { CategoryId, StudentType } from './guide';

export interface QuickTask {
  id: string;
  intent: string; // e.g. "Drop a class"
  question: string; // e.g. "I need to drop a class"
  summary: string;
  category: CategoryId;
  guideSlug: string;
  actionRoute?: string;
  officialUrl?: string;
  urgentNotice?: string;
  studentTypes?: StudentType[];
  tags: string[];
}
