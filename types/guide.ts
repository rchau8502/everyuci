export type StudentType =
  | 'all'
  | 'freshman'
  | 'transfer'
  | 'continuing'
  | 'international'
  | 'commuter'
  | 'resident';

export type CategoryId =
  | 'new-student'
  | 'academics'
  | 'money'
  | 'housing'
  | 'food'
  | 'transportation'
  | 'student-life'
  | 'health-support'
  | 'career-jobs'
  | 'graduation';

export interface GuideStep {
  step: number;
  title: string;
  instruction: string;
  tip?: string;
  link?: {
    label: string;
    url: string;
    isExternal?: boolean;
  };
}

export interface GuideDeadline {
  title: string;
  dateOrRule: string;
  note?: string;
  isCritical?: boolean;
  verifyWithUci?: boolean;
}

export interface GuideMisunderstanding {
  myth: string;
  reality: string;
}

export interface OfficialSource {
  name: string;
  department: string;
  url: string;
  phone?: string;
  email?: string;
  location?: string;
}

export interface Guide {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  category: CategoryId;
  subCategory?: string;
  tags: string[];
  keywords: string[];
  aliases: string[];
  
  // Student audience relevance
  audiences: StudentType[];
  freshmanRelevant: boolean;
  transferRelevant: boolean;
  continuingRelevant: boolean;
  internationalRelevant: boolean;
  commuterRelevant: boolean;
  residentRelevant: boolean;
  
  // Core guide content sections
  shortAnswer: string;
  whatYouNeedToKnow: string[];
  whatToDo: GuideStep[];
  deadlines: GuideDeadline[];
  misunderstandings: GuideMisunderstanding[];
  
  // Metadata & reliability
  officialSource: OfficialSource;
  sourceDepartment: string;
  lastVerified: string;
  academicYear: string;
  
  // Related content
  relatedGuides: string[]; // slugs
  popular?: boolean;
  featured?: boolean;
}
