import { GUIDES } from '@/data/guides';
import { Guide, StudentType, CategoryId } from '@/types/guide';

export interface SearchResult {
  guide: Guide;
  score: number;
  matchReason?: string;
}

export interface SearchOptions {
  studentType?: StudentType;
  category?: CategoryId;
  limit?: number;
}

// Common natural language filler words to strip when tokenizing queries
const STOP_WORDS = new Set([
  'i', 'me', 'my', 'myself', 'we', 'our', 'ours', 'you', 'your', 'he', 'she', 'it', 'they',
  'what', 'which', 'who', 'whom', 'this', 'that', 'these', 'those', 'am', 'is', 'are', 'was',
  'were', 'be', 'been', 'being', 'have', 'has', 'had', 'having', 'do', 'does', 'did', 'doing',
  'a', 'an', 'the', 'and', 'but', 'if', 'or', 'because', 'as', 'until', 'while', 'of', 'at',
  'by', 'for', 'with', 'about', 'against', 'between', 'into', 'through', 'during', 'before',
  'after', 'above', 'below', 'to', 'from', 'up', 'down', 'in', 'out', 'on', 'off', 'over',
  'under', 'again', 'further', 'then', 'once', 'here', 'there', 'when', 'where', 'why', 'how',
  'all', 'any', 'both', 'each', 'few', 'more', 'most', 'other', 'some', 'such', 'no', 'nor',
  'not', 'only', 'own', 'same', 'so', 'than', 'too', 'very', 'can', 'will', 'just', 'should',
  'now', 'need', 'want', 'looking', 'find', 'get', 'help', 'know', 'tell', 'see', 'uci', 'uc'
]);

// Query expansion / synonym mapping for friendly natural matches
const SYNONYMS: Record<string, string[]> = {
  'money': ['financial aid', 'zotaccount', 'zotaid', 'tuition', 'scholarship', 'grant', 'fees', 'bill'],
  'pay': ['zotaccount', 'tuition', 'fee deadline', 'billing', 'balance', 'epay'],
  'paid': ['zotaccount', 'tuition', 'fees'],
  'financial': ['zotaid', 'finaid', 'fafsa', 'grants', 'loans', 'work-study'],
  'aid': ['zotaid', 'financial aid', 'fafsa', 'pell', 'cal grant', 'scholarships'],
  'drop': ['dropping', 'webreg', 'enrollment exception', 'late drop', 'withdraw', 'w grade'],
  'add': ['enroll', 'webreg', 'enrollment window', 'register', 'auth code'],
  'enroll': ['webreg', 'registration', 'classes', 'window', 'courses'],
  'class': ['course', 'lecture', 'webreg', 'degreeworks'],
  'classes': ['courses', 'schedule', 'webreg', 'degreeworks'],
  'park': ['parking', 'zone', 'permit', 'mycommute', 'parkbyplate', 'citation'],
  'parking': ['permit', 'zone 1', 'zone 2', 'zone 3', 'zone 4', 'mycommute', 'ticket'],
  'car': ['parking', 'commuter', 'permit', 'mycommute'],
  'major': ['change of major', 'degreeworks', 'prerequisites', 'switch major', 'double major'],
  'switch': ['change of major', 'transfer major'],
  'dorm': ['housing', 'mesa court', 'middle earth', 'arroyo vista', 'roommate'],
  'housing': ['acc', 'arroyo vista', 'dorm', 'plaza verde', 'camino', 'lease'],
  'apartment': ['acc', 'plaza verde', 'camino del sol', 'vista del campo', 'sublease'],
  'apartments': ['acc', 'plaza verde', 'camino del sol', 'vdc'],
  'food': ['dining', 'anteatery', 'brandywine', 'meal plan', 'flexdine', 'fresh hub', 'pantry'],
  'eat': ['dining hall', 'anteatery', 'brandywine', 'meal plan', 'food court'],
  'gym': ['arc', 'recreation', 'fitness', 'workout', 'weights', 'climbing wall', 'pool'],
  'workout': ['arc', 'fitness', 'gym'],
  'doctor': ['student health center', 'shc', 'medical', 'uc ship', 'urgent care'],
  'sick': ['student health center', 'shc', 'urgent care', 'counseling', 'insurance'],
  'therapy': ['counseling center', 'mental health', 'psychologist'],
  'mental': ['counseling center', 'mental health', 'therapy', 'stress'],
  'id': ['zotcard', 'student card', 'photo upload', 'the hill'],
  'card': ['zotcard', 'student id', 'keycard'],
  'zotcard': ['student id', 'the hill', 'door access', 'meal swipe'],
  'job': ['handshake', 'on campus job', 'work study', 'employment', 'career'],
  'jobs': ['handshake', 'work study', 'student jobs', 'career pathways'],
  'work': ['handshake', 'work study', 'student employment'],
  'research': ['urop', 'surp', '199', 'undergraduate research', 'faculty lab'],
  'lab': ['urop', 'research', 'faculty lab', 'independent study'],
  'graduate': ['commencement', 'graduation application', 'diploma', 'cap and gown', 'degreeworks'],
  'degrees': ['degreeworks', 'graduation', 'major requirements', 'ge'],
  'advisor': ['academic advising', 'counselor', 'peer advisor', 'student affairs', 'holds'],
  'counselor': ['advising', 'counseling center', 'academic counselor'],
  'bus': ['anteater express', 'shuttle', 'octa', 'transloc'],
  'shuttle': ['anteater express', 'campus bus', 'transloc'],
};

export function tokenize(query: string): string[] {
  const normalized = query
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .trim();

  const words = normalized.split(/\s+/).filter(w => w.length > 1);
  const meaningfulWords = words.filter(w => !STOP_WORDS.has(w));

  // If all words were stop words (e.g. "what is"), keep the original words so search doesn't return empty
  const baseWords = meaningfulWords.length > 0 ? meaningfulWords : words;

  // Add expanded synonym keywords
  const expanded = new Set<string>(baseWords);
  for (const word of baseWords) {
    if (SYNONYMS[word]) {
      for (const syn of SYNONYMS[word]) {
        expanded.add(syn.toLowerCase());
      }
    }
  }

  return Array.from(expanded);
}

export function searchGuides(
  query: string,
  options: SearchOptions = {}
): SearchResult[] {
  const { studentType = 'all', category, limit = 50 } = options;
  const rawQuery = query.trim().toLowerCase();

  let guidesToSearch = GUIDES;
  if (category) {
    guidesToSearch = guidesToSearch.filter(g => g.category === category);
  }

  // If query is empty, return guides sorted with persona relevance and popularity
  if (!rawQuery) {
    const results = guidesToSearch.map(guide => {
      let score = guide.popular ? 20 : 10;
      if (guide.featured) score += 10;
      if (studentType !== 'all') {
        if (studentType === 'freshman' && guide.freshmanRelevant) score += 25;
        if (studentType === 'transfer' && guide.transferRelevant) score += 25;
        if (studentType === 'continuing' && guide.continuingRelevant) score += 20;
        if (studentType === 'international' && guide.internationalRelevant) score += 25;
        if (studentType === 'commuter' && guide.commuterRelevant) score += 25;
        if (studentType === 'resident' && guide.residentRelevant) score += 25;
      }
      return { guide, score };
    });

    results.sort((a, b) => b.score - a.score);
    return results.slice(0, limit);
  }

  const queryTokens = tokenize(rawQuery);
  const results: SearchResult[] = [];

  for (const guide of guidesToSearch) {
    let score = 0;
    const reasons: string[] = [];

    const titleLower = guide.title.toLowerCase();
    const shortDescLower = guide.shortDescription.toLowerCase();
    const shortAnswerLower = guide.shortAnswer.toLowerCase();
    const tagsLower = guide.tags.map(t => t.toLowerCase()).join(' ');
    const keywordsLower = guide.keywords.map(k => k.toLowerCase()).join(' ');
    const aliasesLower = guide.aliases.map(a => a.toLowerCase()).join(' ');

    // 1. Exact raw query match in title
    if (titleLower.includes(rawQuery)) {
      score += 120;
      reasons.push('Title match');
    }

    // 2. Exact match in aliases (e.g. "financial aid page" -> ZotAid)
    for (const alias of guide.aliases) {
      const aLower = alias.toLowerCase();
      if (rawQuery.includes(aLower) || aLower.includes(rawQuery)) {
        score += 90;
        reasons.push(`Alias match: "${alias}"`);
        break;
      }
    }

    // 3. Exact match in keywords or tags
    for (const kw of guide.keywords) {
      if (rawQuery.includes(kw.toLowerCase())) {
        score += 50;
        break;
      }
    }

    // 4. Token matches across fields
    for (const token of queryTokens) {
      if (titleLower.includes(token)) {
        score += 40;
      }
      if (aliasesLower.includes(token)) {
        score += 30;
      }
      if (keywordsLower.includes(token)) {
        score += 20;
      }
      if (tagsLower.includes(token)) {
        score += 15;
      }
      if (shortDescLower.includes(token)) {
        score += 15;
      }
      if (shortAnswerLower.includes(token)) {
        score += 10;
      }
    }

    // 5. Student Type persona relevance booster
    if (studentType !== 'all') {
      if (studentType === 'freshman' && guide.freshmanRelevant) score += 15;
      if (studentType === 'transfer' && guide.transferRelevant) score += 15;
      if (studentType === 'continuing' && guide.continuingRelevant) score += 12;
      if (studentType === 'international' && guide.internationalRelevant) score += 15;
      if (studentType === 'commuter' && guide.commuterRelevant) score += 15;
      if (studentType === 'resident' && guide.residentRelevant) score += 15;
    }

    // 6. Popular / Featured slight boost
    if (guide.popular) score += 5;
    if (guide.featured) score += 5;

    if (score > 0) {
      results.push({
        guide,
        score,
        matchReason: reasons[0] || 'Relevant keywords',
      });
    }
  }

  // Sort by highest score first
  results.sort((a, b) => b.score - a.score);

  return results.slice(0, limit);
}
