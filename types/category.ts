import { CategoryId } from './guide';

export interface Category {
  id: CategoryId;
  name: string;
  shortName: string;
  description: string;
  iconName: string; // Lucide icon identifier
  color: string;
  accentBg: string;
  popularTopics: string[];
}
