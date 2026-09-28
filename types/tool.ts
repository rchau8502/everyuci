export interface UciTool {
  id: string;
  name: string;
  tagline: string;
  category: 'Academics & Registration' | 'Finances & Billing' | 'Campus Life & Housing' | 'Career & Health';
  whatItIs: string;
  whatUsedFor: string[];
  whenNeeded: string;
  officialUrl: string;
  loginRequirement?: string;
  guideSlug?: string;
  badge?: string;
  aliases: string[];
  iconName: string;
}
