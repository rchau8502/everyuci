export interface StudentTip {
  id: string;
  title: string;
  category: string;
  description: string;
  actionLabel?: string;
  actionUrl?: string;
  tag: string;
}

export const STUDENT_TIPS: StudentTip[] = [
  {
    id: 'free-software',
    title: 'Free Software & Subscriptions for Anteaters',
    category: 'Student Perks',
    description: 'Every UCI student gets free access to Microsoft 365, MATLAB, Adobe Creative Cloud (via campus labs or discounted license), Zoom Pro, and New York Times & Wall Street Journal subscriptions through UCI Libraries.',
    actionLabel: 'UCI OIT Software Catalog',
    actionUrl: 'https://oit.uci.edu/services/software-hardware/',
    tag: 'Free Stuff',
  },
  {
    id: 'fresh-hub',
    title: 'FRESH Basic Needs Hub Free Food & Pantry',
    category: 'Basic Needs',
    description: 'Located in the Anteater Community Resource Center, the FRESH Hub provides free fresh produce, pantry staples, toiletries, and emergency meal swipes twice a week with zero stigma and no income proof required.',
    actionLabel: 'Visit FRESH Hub',
    actionUrl: 'https://basicneeds.uci.edu/',
    tag: 'Campus Resource',
  },
  {
    id: 'quiet-study-spots',
    title: 'Lesser-Known Quiet Study Spaces',
    category: 'Academics',
    description: 'Skip the crowded Gateway first floor. Check out the 5th floor of Science Library (designated silent study), the Law Library (open to all UCI students for quiet study), and the patio terraces on the 2nd/3rd floor of the Student Center.',
    actionLabel: 'UCI Study Spots Guide',
    actionUrl: 'https://www.lib.uci.edu/study-space-locator',
    tag: 'Study Secret',
  },
  {
    id: 'free-printing',
    title: 'Free Printing Credits on Campus',
    category: 'Campus Perks',
    description: 'Various campus departments provide free printing quotas: ICS students get free printing in ICS labs, BioSci students have allocations, and the Student Center Board of Directors often offers limited free print stations.',
    actionLabel: 'OIT Printing Guide',
    actionUrl: 'https://oit.uci.edu/services/printing/',
    tag: 'Money Saver',
  },
  {
    id: 'octa-bus-pass',
    title: 'Free OC Bus Rides with Student ID',
    category: 'Transportation',
    description: 'Through the University Pass program, UCI undergraduate and graduate students can ride all Orange County Transportation Authority (OCTA) countywide bus lines for free using the OC Bus mobile app.',
    actionLabel: 'UCI Transportation OCTA Pass',
    actionUrl: 'https://parking.uci.edu/sustainable/octa.cfm',
    tag: 'Transportation',
  },
  {
    id: 'larc-tutoring',
    title: 'LARC (Learning Academic Resource Center) Tutoring',
    category: 'Academics',
    description: 'Struggling with Math 2A/2B, Chem 1A-C, or Bio 93-99? LARC offers weekly small-group peer tutorials led by students who aced the course. Often subsidized or free via campus sponsorships.',
    actionLabel: 'Explore LARC Tutorials',
    actionUrl: 'https://larc.uci.edu/',
    tag: 'Academic Boost',
  },
  {
    id: 'free-counseling',
    title: 'Free Mental Health Sessions at Counseling Center',
    category: 'Wellness',
    description: 'Undergraduate student registration fees fully cover short-term individual therapy, support groups, and crisis intervention at the UCI Counseling Center with no co-pay or insurance claim needed.',
    actionLabel: 'UCI Counseling Center',
    actionUrl: 'https://counseling.uci.edu/',
    tag: 'Health & Wellness',
  },
  {
    id: 'aldrich-park-shortcuts',
    title: 'Navigating Aldrich Park Like a Pro',
    category: 'Campus Hacks',
    description: 'UCI is designed as a circular Ring Road around 19-acre Aldrich Park. Walking through the paved center paths from Social Science to ICS or BioSci cuts your travel time nearly in half compared to walking the outer circle.',
    actionLabel: 'UCI Interactive Map',
    actionUrl: 'https://map.uci.edu/',
    tag: 'Campus Hack',
  },
];
