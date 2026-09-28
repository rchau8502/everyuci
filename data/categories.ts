import { Category } from '@/types/category';

export const CATEGORIES: Category[] = [
  {
    id: 'new-student',
    name: 'New Student',
    shortName: 'New Student',
    description: 'First-week checklists, ZotPortal, ZotCard ID, move-in day, Wi-Fi, and incoming freshmen & transfer basics.',
    iconName: 'Sparkles',
    color: '#0284c7', // Sky Blue
    accentBg: '#e0f2fe',
    popularTopics: ['First-Week Checklist', 'ZotCard & ID', 'Canvas Setup', 'Dorm Move-in', 'Transfer Orientation'],
  },
  {
    id: 'academics',
    name: 'Academics',
    shortName: 'Academics',
    description: 'Quarter system pacing, WebReg windows, adding/dropping classes, DegreeWorks, changing majors, and GPA rules.',
    iconName: 'GraduationCap',
    color: '#0064a4', // UCI Blue
    accentBg: '#dbeafe',
    popularTopics: ['WebReg Windows', 'Dropping Classes', 'Change Major', 'DegreeWorks', 'Pass / No Pass'],
  },
  {
    id: 'money',
    name: 'Money & Financial Aid',
    shortName: 'Money & Aid',
    description: 'ZotAccount billing, ZotAid awards, FAFSA/CADAA, fee deadlines, disbursements, SAP rules, and work-study.',
    iconName: 'CircleDollarSign',
    color: '#059669', // Emerald
    accentBg: '#d1fae5',
    popularTopics: ['ZotAccount vs ZotAid', 'Fee Payment Deadlines', 'SAP Requirements', 'Work-Study', 'UC SHIP Waiver'],
  },
  {
    id: 'housing',
    name: 'Housing',
    shortName: 'Housing',
    description: 'Mesa Court & Middle Earth dorms, Arroyo Vista theme houses, ACC apartments, subleasing, and move-in logistics.',
    iconName: 'Home',
    color: '#d97706', // Warm Amber / Gold
    accentBg: '#fef3c7',
    popularTopics: ['ACC Apartments', 'Arroyo Vista', 'Dorm Move-In', 'Subleasing Rules', 'Housing Portal'],
  },
  {
    id: 'food',
    name: 'Food & Dining',
    shortName: 'Food',
    description: 'The Anteatery, Brandywine, meal plan choices, FlexDine, campus food court, and the FRESH Basic Needs Hub.',
    iconName: 'UtensilsCrossed',
    color: '#ea580c', // Orange
    accentBg: '#ffedd5',
    popularTopics: ['Anteatery vs Brandywine', 'Meal Plan Types', 'FlexDine vs ZotClaws', 'FRESH Food Pantry', 'Late Night Food'],
  },
  {
    id: 'transportation',
    name: 'Transportation',
    shortName: 'Transportation',
    description: 'Zone commuter permits, resident parking, Anteater Express bus routes, OCTA bus passes, and campus bike rules.',
    iconName: 'Bus',
    color: '#4f46e5', // Indigo
    accentBg: '#e0e7ff',
    popularTopics: ['Zone Parking Permits', 'Anteater Express', 'OCTA Student Pass', 'Parking Citations', 'EV Charging'],
  },
  {
    id: 'student-life',
    name: 'Student Life',
    shortName: 'Student Life',
    description: 'Campus clubs on CampusGroups, Anteater Recreation Center (ARC), library study spots, and UCI traditions.',
    iconName: 'Users',
    color: '#8b5cf6', // Violet
    accentBg: '#ede9fe',
    popularTopics: ['ARC Gym Access', 'Library Late Night Study', 'Clubs & CampusGroups', 'Aldrich Park', 'Shocktoberfest'],
  },
  {
    id: 'health-support',
    name: 'Health & Support',
    shortName: 'Health & Support',
    description: 'Student Health Center, Counseling Center (mental health), DSC accommodations, urgent care, and UC SHIP coverage.',
    iconName: 'HeartPulse',
    color: '#e11d48', // Rose
    accentBg: '#ffe4e6',
    popularTopics: ['UC SHIP & Insurance', 'Counseling Center', 'Disability Accommodations', 'Same-Day Urgent Care', 'FRESH Hub'],
  },
  {
    id: 'career-jobs',
    name: 'Career & Jobs',
    shortName: 'Career & Jobs',
    description: 'Handshake jobs, on-campus student employment, work-study earnings, UROP undergraduate research, and career fairs.',
    iconName: 'Briefcase',
    color: '#0891b2', // Cyan
    accentBg: '#cffafe',
    popularTopics: ['Handshake Campus Jobs', 'UROP Research', 'Career Pathways', 'Work-Study Limits', 'Resume Reviews'],
  },
  {
    id: 'graduation',
    name: 'Graduation',
    shortName: 'Graduation',
    description: 'Graduation application deadlines on StudentAccess, commencement ceremonies, cap & gown, and diploma distribution.',
    iconName: 'Award',
    color: '#b45309', // Deep Bronze
    accentBg: '#fef3c7',
    popularTopics: ['Graduation Application', 'Commencement Tickets', 'Cap & Gown', 'Diploma Delivery', 'Final DegreeWorks Check'],
  },
];
