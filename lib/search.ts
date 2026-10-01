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

// Multilingual Query Expansion / Synonym Mapping for UCI Student Demographics
const SYNONYMS: Record<string, string[]> = {
  // English
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
  'counselor': ['advising', 'counseling center', 'academic counselor', 'therapy', 'mental health'],
  'counseling': ['counseling center', 'mental health', 'therapy', 'timelycare', 'crisis line'],
  'bus': ['anteater express', 'shuttle', 'octa', 'transloc', 'campus transit'],
  'shuttle': ['anteater express', 'campus bus', 'transloc', 'acc shuttle'],
  'transit': ['anteater express', 'octa', 'bus pass', 'transloc'],
  'study': ['best study spots at uci', 'libraries', 'gateway study center', 'langson', 'science library'],
  'libraries': ['langson library', 'science library', 'gateway study center', 'libcal', 'study rooms'],
  'library': ['langson', 'science library', 'gateway', 'study spots', 'libcal'],
  'pantry': ['fresh basic needs hub', 'food pantry', 'free groceries', 'calfresh'],
  'groceries': ['fresh basic needs hub', 'trader joes', 'food pantry', 'calfresh'],
  'hungry': ['fresh basic needs hub', 'food pantry', 'emergency food'],
  'pass': ['pass/no pass rules uci', 'p/np', 'grading option'],
  'np': ['pass/no pass rules uci', 'grading option'],
  'waitlist': ['prerequisites and waitlists on webreg', 'waitlists', 'enrollment'],
  'prereq': ['prerequisites and waitlists on webreg', 'prerequisites', 'clearance'],
  'prerequisite': ['prerequisites and waitlists on webreg', 'clearance', 'degreeworks'],
  'transfer': ['transfer student guide uci', 'articulation', 'igetc', '9 quarters'],
  'transfers': ['transfer student guide uci', 'transfer student center'],
  'ticket': ['how to appeal parking ticket', 'how uci parking works', 'citation', 'appeal'],
  'citation': ['how to appeal parking ticket', 'how uci parking works', 'parking citation'],
  'appeal': ['how to appeal parking ticket', 'what sap means', 'parking citation'],
  'dsc': ['disability services center accommodations', 'accommodations', 'extra time'],
  'disability': ['disability services center accommodations', 'dsc', 'accommodations'],
  'accommodations': ['disability services center accommodations', 'dsc', 'testing room'],
  'transcript': ['official transcripts and diploma orders', 'transcripts', 'parchment'],
  'transcripts': ['official transcripts and diploma orders', 'parchment', 'unofficial transcript'],
  'diploma': ['official transcripts and diploma orders', 'how graduation works'],
  'email': ['uci email and tech setup', 'duo', 'gmail', 'oit'],
  'duo': ['uci email and tech setup', '2fa', 'oit'],
  'software': ['uci email and tech setup', 'office 365', 'matlab', 'adobe'],
  'writing': ['undergraduate writing requirements', 'writing 60', 'upper division writing', 'elwr'],
  'elwr': ['undergraduate writing requirements', 'entry level writing'],
  'withdraw': ['withdrawing from a quarter', 'leave of absence', 'refund schedule'],
  'withdrawing': ['withdrawing from a quarter', 'cancel quarter', 'leave of absence'],
  'cpt': ['opt cpt international student work', 'international student employment', 'f1 visa internship'],
  'opt': ['opt cpt international student work', 'international student employment', 'ead card', 'stem opt'],
  'ead': ['opt cpt international student work', 'opt', 'work authorization'],
  'visa': ['opt cpt international student work', 'international student'],
  'stem': ['opt cpt international student work', 'stem opt'],
  'laptop': ['uc irvine libraries borrowing and ill', 'laptop lending', 'uci email and tech setup'],
  'laptops': ['uc irvine libraries borrowing and ill', 'laptop lending'],
  'textbook': ['uc irvine libraries borrowing and ill', 'course reserves', 'free textbooks'],
  'textbooks': ['uc irvine libraries borrowing and ill', 'course reserves'],
  'reserves': ['uc irvine libraries borrowing and ill', 'course reserves'],
  'ill': ['uc irvine libraries borrowing and ill', 'interlibrary loan'],
  'interlibrary': ['uc irvine libraries borrowing and ill', 'interlibrary loan'],
  'libcal': ['uc irvine libraries borrowing and ill', 'study rooms'],
  'calculator': ['uc irvine libraries borrowing and ill', 'equipment checkout'],
  'calculators': ['uc irvine libraries borrowing and ill', 'equipment checkout'],
  'easy': ['uci easy ge classes and gpa boosters', 'easy classes', 'gpa boosters'],
  'booster': ['uci easy ge classes and gpa boosters', 'gpa boosters'],
  'boosters': ['uci easy ge classes and gpa boosters', 'gpa boosters'],
  'professor': ['how to check professors ratemyprofessors zotistics', 'ratemyprofessors'],
  'professors': ['how to check professors ratemyprofessors zotistics', 'ratemyprofessors'],
  'prof': ['how to check professors ratemyprofessors zotistics', 'ratemyprofessors'],
  'ratemyprofessor': ['how to check professors ratemyprofessors zotistics', 'rmp', 'uci easy ge classes and gpa boosters'],
  'ratemyprofessors': ['how to check professors ratemyprofessors zotistics', 'rmp'],
  'rmp': ['how to check professors ratemyprofessors zotistics', 'ratemyprofessors'],
  'zotistics': ['how to check professors ratemyprofessors zotistics', 'grade distribution', 'uci easy ge classes and gpa boosters'],
  'zotcourse': ['how to check professors ratemyprofessors zotistics', 'schedule builder'],
  'douglas': ['uci easy ge classes and gpa boosters', 'anthro 2a'],
  'thornton': ['how to check professors ratemyprofessors zotistics', 'compsci 45j'],

  // Chinese (Simplified & Traditional) - Rank #1 & #5
  '退课': ['how to drop a class', 'drop class', 'drop deadline', 'enrollment exceptions', 'w grade'],
  '退选': ['how to drop a class', 'drop class'],
  '加课': ['how webreg works', 'enrollment window', 'register'],
  '选课': ['how webreg works', 'webreg', 'enrollment window', 'courses'],
  '排课': ['how degreeworks works', 'anttrail', 'degree planning'],
  '学费': ['what is zotaccount', 'zotaccount', 'tuition', 'fee deadline', 'billing'],
  '交学费': ['what is zotaccount', 'zotaccount', 'pay tuition'],
  '交费': ['what is zotaccount', 'zotaccount'],
  '助学金': ['what is zotaid', 'zotaid', 'financial aid', 'grants', 'scholarships'],
  '奖学金': ['what is zotaid', 'zotaid', 'scholarships', 'financial aid'],
  '财务资助': ['what is zotaid', 'financial aid'],
  '停车': ['how uci parking works', 'parking permit', 'zone permits', 'mycommute', 'parkbyplate'],
  '车位': ['how uci parking works', 'parking'],
  '罚单': ['how to appeal parking ticket', 'how uci parking works', 'parking citation'],
  '换专业': ['how to change your major', 'change of major', 'prerequisites', 'studentaccess'],
  '转专业': ['how to change your major', 'change of major'],
  '双专业': ['how to change your major', 'double major'],
  '宿舍': ['mesa court', 'middle earth', 'arroyo vista', 'campus housing', 'how arroyo vista works'],
  '公寓': ['acc apartments overview', 'plaza verde', 'camino del sol', 'vdc'],
  '租房': ['acc apartments overview', 'subleasing', 'housing'],
  '转租': ['acc apartments overview', 'sublease acc'],
  '食堂': ['how meal plans works', 'the anteatery', 'brandywine', 'campus dining'],
  '饭卡': ['how meal plans works', 'flexdine', 'zotcard'],
  '餐饮': ['how meal plans works', 'meal plans'],
  '健身房': ['how to use the arc', 'arc', 'gym', 'fitness', 'campus recreation'],
  '兼职': ['how to find an on campus job', 'handshake', 'on campus jobs', 'student employment'],
  '校内工作': ['how to find an on campus job', 'handshake', 'student employment'],
  '勤工俭学': ['how work study works', 'work study', 'fws'],
  '科研': ['how to find undergraduate research', 'urop', 'undergraduate research', 'faculty labs', '199'],
  '实验室': ['how to find undergraduate research', 'urop', 'lab'],
  '毕业': ['how graduation works', 'commencement', 'graduation application', 'diploma'],
  '毕业典礼': ['how graduation works', 'commencement', 'cap and gown'],
  '学生卡': ['zotcard and student id', 'zotcard', 'the hill'],
  '校园卡': ['zotcard and student id', 'zotcard'],
  '保险': ['health insurance and uship', 'uc ship', 'insurance waiver', 'student health center'],
  '医保': ['health insurance and uship', 'uc ship'],
  '免除保险': ['health insurance and uship', 'waive uc ship', 'insurance waiver'],
  '看病': ['health insurance and uship', 'student health center', 'shc'],
  '校车': ['anteater express and transit', 'shuttle', 'bus'],
  '学业警告': ['what sap means', 'academic probation and disqualification', 'sap appeal'],
  '留校察看': ['academic probation and disqualification', 'academic probation', 'gpa'],
  '重修': ['academic probation and disqualification', 'repeat course gpa'],
  '学术顾问': ['how to talk to an advisor', 'academic advising', 'peer advisors'],
  '自习': ['best study spots at uci', 'libraries', 'gateway study center'],
  '图书馆': ['best study spots at uci', 'libraries', 'langson', 'science library'],
  '心理咨询': ['counseling center and mental health', 'mental health', 'therapy'],
  '心理': ['counseling center and mental health', 'mental health'],
  '免费食物': ['fresh basic needs hub', 'food pantry', 'calfresh'],
  '食品银行': ['fresh basic needs hub', 'food pantry'],
  '中土': ['mesa court vs middle earth', 'middle earth', 'housing'],
  '梅萨': ['mesa court vs middle earth', 'mesa court', 'housing'],
  '候补': ['prerequisites and waitlists on webreg', 'waitlists'],
  '先修课': ['prerequisites and waitlists on webreg', 'prerequisites'],
  '转学': ['transfer student guide uci', 'transfer credits', 'igetc'],
  '转学生': ['transfer student guide uci'],
  '及格': ['pass/no pass rules uci', 'p/np'],
  '成绩单': ['official transcripts and diploma orders', 'transcripts', 'parchment'],
  '毕业证': ['official transcripts and diploma orders', 'how graduation works', 'diploma'],
  '学位证': ['official transcripts and diploma orders', 'diploma'],
  '申诉': ['how to appeal parking ticket', 'what sap means'],
  '停车罚单': ['how to appeal parking ticket', 'parking citation'],
  '残障': ['disability services center accommodations', 'dsc', 'accommodations'],
  '无障碍': ['disability services center accommodations', 'dsc'],
  '延时': ['disability services center accommodations', 'extra time'],
  '邮箱': ['uci email and tech setup', 'email', 'duo', 'gmail'],
  '软件': ['uci email and tech setup', 'software', 'office 365', 'matlab'],
  '写作': ['undergraduate writing requirements', 'writing 60', 'upper division writing'],
  '休学': ['withdrawing from a quarter', 'leave of absence', 'withdraw'],
  '退学': ['withdrawing from a quarter', 'withdraw', 'refund schedule'],
  '实习': ['opt cpt international student work', 'cpt', 'how to find an on campus job'],
  '工作签证': ['opt cpt international student work', 'opt', 'work authorization'],
  '借电脑': ['uc irvine libraries borrowing and ill', 'laptop lending', 'uci email and tech setup'],
  '借笔记本': ['uc irvine libraries borrowing and ill', 'laptop lending'],
  '课本': ['uc irvine libraries borrowing and ill', 'course reserves'],
  '教材': ['uc irvine libraries borrowing and ill', 'course reserves'],
  '跨馆借书': ['uc irvine libraries borrowing and ill', 'interlibrary loan'],
  '预约房间': ['uc irvine libraries borrowing and ill', 'study rooms', 'libcal'],
  '水课': ['uci easy ge classes and gpa boosters', 'easy classes', 'gpa boosters', 'anthro 2a', 'drama 30a'],
  '好过的课': ['uci easy ge classes and gpa boosters', 'easy classes'],
  '简单课': ['uci easy ge classes and gpa boosters', 'easy classes'],
  '好老师': ['how to check professors ratemyprofessors zotistics', 'ratemyprofessors'],
  '好教授': ['how to check professors ratemyprofessors zotistics', 'ratemyprofessors'],
  '神仙老师': ['how to check professors ratemyprofessors zotistics', 'ratemyprofessors'],
  '选课推荐': ['uci easy ge classes and gpa boosters', 'how to check professors ratemyprofessors zotistics'],
  '给分': ['how to check professors ratemyprofessors zotistics', 'zotistics'],
  '评教': ['how to check professors ratemyprofessors zotistics', 'ratemyprofessors'],

  // Spanish - Rank #2 (HSI Community ~27%)
  'soltar': ['how to drop a class', 'drop class', 'webreg'],
  'baja': ['how to drop a class', 'drop class'],
  'matrícula': ['what is zotaccount', 'tuition', 'fees'],
  'colegiatura': ['what is zotaccount', 'tuition'],
  'ayuda': ['what is zotaid', 'financial aid'],
  'becas': ['what is zotaid', 'scholarships', 'grants'],
  'estacionamiento': ['how uci parking works', 'parking', 'permit'],
  'carrera': ['how to change your major', 'change major'],
  'especialización': ['how to change your major', 'major'],
  'vivienda': ['campus housing', 'arroyo vista', 'acc apartments overview', 'mesa court vs middle earth'],
  'apartamentos': ['acc apartments overview', 'plaza verde', 'finding off campus housing irvine'],
  'comidas': ['how meal plans works', 'meal plans', 'dining', 'fresh basic needs hub'],
  'gimnasio': ['how to use the arc', 'arc', 'fitness'],
  'trabajo': ['how to find an on campus job', 'handshake', 'student employment'],
  'investigación': ['how to find undergraduate research', 'urop', 'research'],
  'graduación': ['how graduation works', 'commencement', 'diploma'],
  'seguro': ['health insurance and uship', 'uc ship', 'insurance waiver'],
  'médico': ['health insurance and uship', 'student health center'],
  'estudiar': ['best study spots at uci', 'libraries'],
  'biblioteca': ['best study spots at uci', 'libraries'],
  'autobús': ['anteater express and transit', 'bus', 'shuttle'],
  'despensa': ['fresh basic needs hub', 'food pantry'],
  'transferencia': ['transfer student guide uci'],
  'terapia': ['counseling center and mental health', 'mental health'],
  'multa': ['how to appeal parking ticket', 'parking citation'],
  'transcripcion': ['official transcripts and diploma orders', 'transcripts'],
  'discapacidad': ['disability services center accommodations', 'dsc'],
  'correo': ['uci email and tech setup', 'email'],
  'escritura': ['undergraduate writing requirements', 'writing'],
  'pasantía': ['opt cpt international student work', 'cpt', 'internship'],
  'prácticas': ['opt cpt international student work', 'cpt'],
  'portátil': ['uc irvine libraries borrowing and ill', 'laptop lending'],
  'computadora': ['uc irvine libraries borrowing and ill', 'laptop lending'],
  'libros': ['uc irvine libraries borrowing and ill', 'course reserves'],
  'textos': ['uc irvine libraries borrowing and ill', 'course reserves'],
  'fáciles': ['uci easy ge classes and gpa boosters', 'easy classes'],
  'profesores': ['how to check professors ratemyprofessors zotistics', 'ratemyprofessors'],

  // Vietnamese - Rank #3 (OC Little Saigon Community)
  'hủy': ['how to drop a class', 'drop class'],
  'bỏ': ['how to drop a class', 'drop class'],
  'học': ['what is zotaccount', 'tuition'],
  'tiền': ['what is zotaccount', 'zotaid', 'financial aid'],
  'đậu': ['how uci parking works', 'parking'],
  'xe': ['how uci parking works', 'parking', 'bus', 'anteater express and transit'],
  'ngành': ['how to change your major', 'change major'],
  'phòng': ['acc apartments overview', 'housing'],
  'cơm': ['how meal plans works', 'meal plans'],
  'tốt': ['how graduation works', 'commencement'],
  'nghiệp': ['how graduation works', 'diploma'],
  'thẻ': ['zotcard and student id', 'zotcard'],
  'thư': ['best study spots at uci', 'libraries'],
  'viện': ['best study spots at uci', 'libraries'],
  'tâm': ['counseling center and mental health', 'mental health'],
  'chuyển': ['transfer student guide uci'],
  'bảng': ['official transcripts and diploma orders', 'transcripts'],
  'điểm': ['official transcripts and diploma orders', 'transcripts'],
  'phạt': ['how to appeal parking ticket', 'parking citation'],
  'mượn': ['uc irvine libraries borrowing and ill', 'laptop lending', 'course reserves'],
  'sách': ['uc irvine libraries borrowing and ill', 'course reserves', 'libraries'],
  'dễ': ['uci easy ge classes and gpa boosters', 'easy classes'],

  // Korean - Rank #4 (Irvine Community)
  '드랍': ['how to drop a class', 'drop class', 'webreg'],
  '취소': ['how to drop a class', 'drop class'],
  '학비': ['what is zotaccount', 'zotaccount', 'tuition', 'fees'],
  '등록금': ['what is zotaccount', 'tuition'],
  '장학금': ['what is zotaid', 'zotaid', 'financial aid', 'scholarships'],
  '재정보조': ['what is zotaid', 'financial aid'],
  '주차': ['how uci parking works', 'parking', 'permit'],
  '주차권': ['how uci parking works', 'parking permit'],
  '전공': ['how to change your major', 'change major', 'degreeworks'],
  '기숙사': ['how arroyo vista works', 'housing', 'dorm', 'mesa court vs middle earth'],
  '아파트': ['acc apartments overview', 'plaza verde', 'finding off campus housing irvine'],
  '식사': ['how meal plans works', 'meal plans'],
  '헬스장': ['how to use the arc', 'arc', 'gym'],
  '알바': ['how to find an on campus job', 'handshake', 'student employment'],
  '연구': ['how to find undergraduate research', 'urop', 'research'],
  '졸업': ['how graduation works', 'commencement', 'graduation'],
  '학생증': ['zotcard and student id', 'zotcard'],
  '보험': ['health insurance and uship', 'uc ship', 'insurance waiver'],
  '도서관': ['best study spots at uci', 'libraries'],
  '공부': ['best study spots at uci', 'libraries'],
  '상담': ['counseling center and mental health', 'mental health'],
  '셔틀': ['anteater express and transit', 'shuttle'],
  '편입': ['transfer student guide uci'],
  '패스': ['pass/no pass rules uci'],
  '성적표': ['official transcripts and diploma orders', 'transcripts'],
  '이메일': ['uci email and tech setup', 'email', 'duo'],
  '작문': ['undergraduate writing requirements', 'writing'],
  '휴학': ['withdrawing from a quarter', 'leave of absence', 'withdraw'],
  '인턴': ['opt cpt international student work', 'cpt internship'],
  '인턴십': ['opt cpt international student work', 'cpt'],
  '노트북': ['uc irvine libraries borrowing and ill', 'laptop lending'],
  '교재': ['uc irvine libraries borrowing and ill', 'course reserves'],
  '꿀강': ['uci easy ge classes and gpa boosters', 'easy classes', 'gpa boosters'],
  '교수': ['how to check professors ratemyprofessors zotistics', 'ratemyprofessors'],

  // Tagalog / Filipino - Rank #6 (SoCal & Filipino American Anteaters)
  'matrikula': ['what is zotaccount', 'tuition', 'fees'],
  'pera': ['what is zotaid', 'financial aid'],
  'tulong': ['what is zotaid', 'financial aid'],
  'iparada': ['how uci parking works', 'parking', 'permit'],
  'paradahan': ['how uci parking works', 'parking'],
  'tirahan': ['campus housing', 'arroyo vista', 'acc apartments overview'],
  'pagtatapos': ['how graduation works', 'commencement', 'diploma'],
  'pagkain': ['how meal plans works', 'meal plans'],

  // Japanese - Rank #7 (Exchange & Heritage Students)
  '履修取消': ['how to drop a class', 'drop class', 'webreg'],
  '学食': ['how meal plans works', 'meal plans', 'the anteatery'],
  '寮': ['how arroyo vista works', 'housing', 'dorm'],
  '専攻': ['how to change your major', 'change major'],
  '専攻変更': ['how to change your major', 'change major'],
  'ジム': ['how to use the arc', 'arc', 'fitness'],
  'バイト': ['how to find an on campus job', 'handshake', 'student employment'],
  'インターン': ['opt cpt international student work', 'cpt'],
  'ノートパソコン': ['uc irvine libraries borrowing and ill', 'laptop lending'],
  '教科書': ['uc irvine libraries borrowing and ill', 'course reserves'],
  '楽単': ['uci easy ge classes and gpa boosters', 'easy classes'],
  '教授': ['how to check professors ratemyprofessors zotistics', 'ratemyprofessors'],
};

export function tokenize(query: string): string[] {
  // Use Unicode property escapes (\p{L}\p{N}) to support all languages including Chinese, Korean, Vietnamese, Spanish
  const normalized = query
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .trim();

  const words = normalized.split(/\s+/).filter(w => {
    // Keep single character for Chinese, Japanese, Korean (CJK) characters which carry full word meaning
    const isCJK = /[\u4e00-\u9fa5\u3040-\u30ff\uac00-\ud7af]/.test(w);
    return isCJK ? w.length >= 1 : w.length > 1;
  });

  const meaningfulWords = words.filter(w => !STOP_WORDS.has(w));
  const baseWords = meaningfulWords.length > 0 ? meaningfulWords : words;

  // Add expanded synonym keywords (including native multilingual terms)
  const expanded = new Set<string>(baseWords);
  for (const word of baseWords) {
    if (SYNONYMS[word]) {
      for (const syn of SYNONYMS[word]) {
        expanded.add(syn.toLowerCase());
      }
    }
  }

  // Also check if any substring matches Chinese/Japanese/Korean (CJK) terms in SYNONYMS (since CJK has no spaces)
  for (const [key, synList] of Object.entries(SYNONYMS)) {
    const isCJK = /[\u4e00-\u9fa5\u3040-\u30ff\uac00-\ud7af]/.test(key);
    if (isCJK && query.includes(key)) {
      for (const syn of synList) {
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
