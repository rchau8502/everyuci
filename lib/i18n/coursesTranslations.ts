import { LanguageCode } from '@/types/language';

export interface CoursesHubTranslations {
  badge: string;
  title: string;
  subtitle: string;
  bannerTitle: string;
  bannerText: string;
  rmpBtn: string;
  zotisticsBtn: string;
  searchPlaceholder: string;
  majorCategoryLabel: string;
  geFilterLabel: string;
  sortLabel: string;
  sortEasiest: string;
  sortHighestRmp: string;
  sortHighestA: string;
  sortCode: string;
  toggleOnline: string;
  toggleNoExams: string;
  toggleHighA: string;
  showingCount: string;
  showingRecommended: string;
  showingBoosterSuffix: string;
  verifiedRecordsNotice: string;
  noResultsTitle: string;
  noResultsText: string;
  resetFilters: string;
  antTrailBadge: string;
  antTrailTitle: string;
  antTrailText: string;
  antTrailButton: string;

  // Major division labels
  divisionGpaBooster: string;
  divisionAll: string;
  divisionIcs: string;
  divisionSocSci: string;
  divisionBusiness: string;
  divisionBioSci: string;
  divisionEngineering: string;
  divisionHumanities: string;

  // GE Category labels
  geAll: string;
  geIa: string;
  geIb: string;
  geII: string;
  geIII: string;
  geIV: string;
  geVa: string;
  geVII: string;
  geVIII: string;

  // Card UI Labels
  cardGpaBoosterBadge: string;
  cardOnlineBadge: string;
  cardNoExamsBadge: string;
  cardUnits: string;
  cardDifficulty: string;
  cardZotisticsGrades: string;
  cardCampusAverage: string;
  cardPercentA: string;
  cardRecommendedFaculty: string;
  cardWhyLove: string;
  cardTips: string;
  cardWebSoc: string;
  cardGuideFooter: string;
}

export const COURSES_TRANSLATIONS: Record<LanguageCode, CoursesHubTranslations> = {
  // 1. ENGLISH (Default)
  en: {
    badge: 'Course Recommender & GPA Boosters',
    title: 'UCI Easy Courses & Professor Guide',
    subtitle:
      'Discover student-vetted "水课" (GPA boosters), top-rated faculty from RateMyProfessors, and high A-rate courses verified with historical Zotistics data.',
    bannerTitle: 'How Anteaters Pick Courses:',
    bannerText:
      'Always cross-reference RateMyProfessors (teaching quality) with Zotistics (historical grade distribution) before your WebReg window opens!',
    rmpBtn: 'RMP (UCI)',
    zotisticsBtn: 'Zotistics',
    searchPlaceholder:
      'Search by course code, professor (e.g. Douglas, Thornton), or keyword (水课, music)...',
    majorCategoryLabel: 'Major Division & Category:',
    geFilterLabel: 'GE Filter:',
    sortLabel: 'Sort:',
    sortEasiest: 'Easiest First (Lowest Difficulty)',
    sortHighestRmp: 'Highest RateMyProfessors Rating',
    sortHighestA: 'Highest % A Rate (Zotistics)',
    sortCode: 'Course Code A–Z',
    toggleOnline: 'Online / Async Sections Only',
    toggleNoExams: 'No Heavy Exams / Project-Based',
    toggleHighA: '80%+ A Rate Only',
    showingCount: 'Showing',
    showingRecommended: 'recommended courses',
    showingBoosterSuffix: '(水课 · GPA Boosters)',
    verifiedRecordsNotice: 'Ratings sourced from verified RateMyProfessors & Zotistics records',
    noResultsTitle: 'No matching courses found',
    noResultsText:
      'Try adjusting your search keywords, clearing GE filters, or switching back to "All Courses".',
    resetFilters: 'Reset all filters',
    antTrailBadge: 'Full Degree Roadmap Planner',
    antTrailTitle: 'Ready to map out your full graduation schedule?',
    antTrailText:
      'everyUCI helps you discover easy GEs and top professors. When you want to map out all 180 units, prerequisite trees, and quarterly course offerings, use our companion degree planner AntTrail.',
    antTrailButton: 'Plan Degree on AntTrail',
    divisionGpaBooster: '🔥 水课 & GPA Boosters',
    divisionAll: 'All Courses',
    divisionIcs: '💻 ICS & Computer Science',
    divisionSocSci: '🧠 Social Sciences & Psych',
    divisionBusiness: '📈 Business & Economics',
    divisionBioSci: '🧬 BioSci & Pre-Health',
    divisionEngineering: '⚙️ Engineering & Physics',
    divisionHumanities: '🎭 Arts & Humanities',
    geAll: 'All GEs',
    geIa: 'GE Ia (Lower Writing)',
    geIb: 'GE Ib (Upper Writing)',
    geII: 'GE II (Science & Tech)',
    geIII: 'GE III (Social Sciences)',
    geIV: 'GE IV (Arts & Humanities)',
    geVa: 'GE Va (Quantitative)',
    geVII: 'GE VII (Multicultural)',
    geVIII: 'GE VIII (International)',
    cardGpaBoosterBadge: '水课 · GPA Booster',
    cardOnlineBadge: 'Online / Async',
    cardNoExamsBadge: 'No Heavy Exams',
    cardUnits: 'Units',
    cardDifficulty: 'Difficulty',
    cardZotisticsGrades: 'Historical Grades (Zotistics):',
    cardCampusAverage: 'Campus Average',
    cardPercentA: '% A / A-',
    cardRecommendedFaculty: 'Recommended Faculty (RateMyProfessors)',
    cardWhyLove: 'Why Students Love It:',
    cardTips: 'Insider Tips for Securing an A',
    cardWebSoc: 'WebSoc',
    cardGuideFooter: 'UCI Course Guide',
  },

  // 2. SIMPLIFIED CHINESE (Rank #1 non-English)
  'zh-CN': {
    badge: '选课助手与水课推荐',
    title: 'UCI 水课与优质教授指南',
    subtitle:
      '发现经 Anteater 学长学姐实测验证的“水课”（高分提分课）、RateMyProfessors 高分神仙老师，以及 Zotistics 官方历史给 A 率超高课程。',
    bannerTitle: 'UCI 老生选课黄金法则：',
    bannerText:
      '在 WebReg 选课窗口开放前，务必结合 RateMyProfessors（教学质量与评分）和 Zotistics（历史成绩与给分分布）交叉比对！',
    rmpBtn: 'RMP 教授评价 (UCI)',
    zotisticsBtn: 'Zotistics 成绩分布',
    searchPlaceholder:
      '搜索课程代码、教授名字（如 Douglas、Thornton）或关键词（水课、音乐、心理）...',
    majorCategoryLabel: '专业学院与课类导航：',
    geFilterLabel: '通识课 (GE) 筛选：',
    sortLabel: '排序方式：',
    sortEasiest: '难度最低优先 (最容易拿 A)',
    sortHighestRmp: '教授评分最高优先 (RMP)',
    sortHighestA: '给 A 率最高优先 (Zotistics)',
    sortCode: '课程代码 (A–Z)',
    toggleOnline: '仅看网课 / 异步网课 (Async)',
    toggleNoExams: '无重度期中期末考 / 大作业制',
    toggleHighA: '仅看 80%+ 给 A 率课程',
    showingCount: '正在展示',
    showingRecommended: '门推荐课程',
    showingBoosterSuffix: '（绩点神课 · 水课）',
    verifiedRecordsNotice:
      '数据来自 RateMyProfessors 真实评价与 Zotistics 历史官方选课记录',
    noResultsTitle: '未找到匹配的课程',
    noResultsText:
      '请尝试更换搜索关键词、清除 GE 筛选条件或切回“全部课程”。',
    resetFilters: '重置全部筛选条件',
    antTrailBadge: '完整学位与排课路线图规划器',
    antTrailTitle: '准备好规划你的完整毕业排课计划了吗？',
    antTrailText:
      'everyUCI 帮助你发现通识课水课与优质教授。如果需要规划大学四年 180 学分、先修课依赖图以及每季度开课预测，请使用我们的配套排课引擎 AntTrail。',
    antTrailButton: '在 AntTrail 上规划我的学位',
    divisionGpaBooster: '🔥 水课 · 绩点神器',
    divisionAll: '全部课程',
    divisionIcs: '💻 计算机与 ICS 学院',
    divisionSocSci: '🧠 社会科学与心理学',
    divisionBusiness: '📈 商科与经济学',
    divisionBioSci: '🧬 生物科学与医预科',
    divisionEngineering: '⚙️ 工学院与物理',
    divisionHumanities: '🎭 艺术与人文学院',
    geAll: '全部 GE 通识课',
    geIa: 'GE Ia (初级写作)',
    geIb: 'GE Ib (高级写作)',
    geII: 'GE II (自然科技)',
    geIII: 'GE III (社会行为科学)',
    geIV: 'GE IV (艺术人文)',
    geVa: 'GE Va (定量计算)',
    geVII: 'GE VII (多元文化)',
    geVIII: 'GE VIII (全球国际视野)',
    cardGpaBoosterBadge: '水课 · 绩点神课',
    cardOnlineBadge: '线上 / 异步网课',
    cardNoExamsBadge: '无沉重考试 / 轻松拿 A',
    cardUnits: '学分',
    cardDifficulty: '课程难度',
    cardZotisticsGrades: '官方历史成绩分布 (Zotistics)：',
    cardCampusAverage: '全校历史均值',
    cardPercentA: 'A / A- 获得率',
    cardRecommendedFaculty: '推荐授课教授 (RateMyProfessors)',
    cardWhyLove: '学长学姐力荐理由：',
    cardTips: '稳拿 A 避坑高分秘籍',
    cardWebSoc: 'WebSoc 实时课表',
    cardGuideFooter: 'UCI 课程与名师指南',
  },

  // 3. SPANISH (Rank #2: ~27% Anteater population)
  es: {
    badge: 'Recomendador de Cursos e Impulsores de Promedio',
    title: 'Guía de Cursos Fáciles y Profesores de UCI',
    subtitle:
      'Descubre materias fáciles verificadas por estudiantes (GPA Boosters), profesores destacados en RateMyProfessors y clases con alto porcentaje de "A" según Zotistics.',
    bannerTitle: 'Regla de Oro para Inscribir Materias:',
    bannerText:
      '¡Siempre consulta RateMyProfessors (calidad docente) junto con Zotistics (distribución histórica de calificaciones) antes de que abra tu ventana en WebReg!',
    rmpBtn: 'RMP (UCI)',
    zotisticsBtn: 'Zotistics',
    searchPlaceholder:
      'Buscar por código de curso, profesor (ej. Douglas, Thornton) o palabra clave...',
    majorCategoryLabel: 'División Académica y Categoría:',
    geFilterLabel: 'Filtro de Educación General (GE):',
    sortLabel: 'Ordenar:',
    sortEasiest: 'Más Fáciles Primero (Menor Dificultad)',
    sortHighestRmp: 'Mejor Calificación en RateMyProfessors',
    sortHighestA: 'Mayor Porcentaje de A (Zotistics)',
    sortCode: 'Código de Curso (A–Z)',
    toggleOnline: 'Solo Clases en Línea / Asincrónicas',
    toggleNoExams: 'Sin Exámenes Pesados / Proyectos',
    toggleHighA: 'Solo Cursos con 80%+ de "A"',
    showingCount: 'Mostrando',
    showingRecommended: 'cursos recomendados',
    showingBoosterSuffix: '(Impulsores de Promedio / Fáciles)',
    verifiedRecordsNotice:
      'Calificaciones obtenidas de registros verificados de RateMyProfessors y Zotistics',
    noResultsTitle: 'No se encontraron cursos coincidentes',
    noResultsText:
      'Intenta ajustar los términos de búsqueda, quitar los filtros de GE o volver a "Todos los Cursos".',
    resetFilters: 'Restablecer todos los filtros',
    antTrailBadge: 'Planificador de Trayectoria y Grado',
    antTrailTitle: '¿Listo para planificar tu horario completo de graduación?',
    antTrailText:
      'everyUCI te ayuda a descubrir materias fáciles y profesores destacados. Para planificar tus 180 unidades, prerrequisitos y ofertas trimestrales, utiliza AntTrail.',
    antTrailButton: 'Planificar Grado en AntTrail',
    divisionGpaBooster: '🔥 Materias Fáciles (GPA Boosters)',
    divisionAll: 'Todos los Cursos',
    divisionIcs: '💻 Ciencias de la Computación (ICS)',
    divisionSocSci: '🧠 Ciencias Sociales y Psicología',
    divisionBusiness: '📈 Negocios y Economía',
    divisionBioSci: '🧬 Ciencias Biológicas y Salud',
    divisionEngineering: '⚙️ Ingeniería y Física',
    divisionHumanities: '🎭 Humanidades y Artes',
    geAll: 'Todos los GE',
    geIa: 'GE Ia (Escritura Básica)',
    geIb: 'GE Ib (Escritura Avanzada)',
    geII: 'GE II (Ciencia y Tecnología)',
    geIII: 'GE III (Ciencias Sociales)',
    geIV: 'GE IV (Artes y Humanidades)',
    geVa: 'GE Va (Razonamiento Cuantitativo)',
    geVII: 'GE VII (Estudios Multiculturales)',
    geVIII: 'GE VIII (Problemas Internacionales)',
    cardGpaBoosterBadge: 'Materia Fácil · GPA Booster',
    cardOnlineBadge: 'En Línea / Asincrónico',
    cardNoExamsBadge: 'Sin Exámenes Pesados',
    cardUnits: 'Créditos',
    cardDifficulty: 'Dificultad',
    cardZotisticsGrades: 'Calificaciones Históricas (Zotistics):',
    cardCampusAverage: 'Promedio del Campus',
    cardPercentA: '% A / A-',
    cardRecommendedFaculty: 'Profesores Recomendados (RateMyProfessors)',
    cardWhyLove: 'Por qué les encanta a los estudiantes:',
    cardTips: 'Consejos clave para asegurar una A',
    cardWebSoc: 'WebSoc',
    cardGuideFooter: 'Guía de Cursos UCI',
  },

  // 4. VIETNAMESE (Rank #3: Orange County Little Saigon Anteater community)
  vi: {
    badge: 'Gợi Ý Môn Học & Môn Gánh GPA',
    title: 'Hướng Dẫn Môn Học Dễ & Giáo Viên Tốt Tại UCI',
    subtitle:
      'Khám phá các môn học dễ lấy điểm A (GPA boosters) được sinh viên Anteater kiểm chứng, giáo sư được đánh giá cao trên RateMyProfessors và phân bố điểm thực tế từ Zotistics.',
    bannerTitle: 'Quy Tắc Vàng Khi Chọn Lớp Tại UCI:',
    bannerText:
      'Luôn đối chiếu RateMyProfessors (chất lượng giảng dạy) cùng Zotistics (tỷ lệ điểm lịch sử) trước khi cổng WebReg của bạn mở!',
    rmpBtn: 'RMP (UCI)',
    zotisticsBtn: 'Zotistics',
    searchPlaceholder:
      'Tìm theo mã môn, tên giáo sư (vd: Douglas, Thornton) hoặc từ khóa...',
    majorCategoryLabel: 'Phân Khoa & Ngành Học:',
    geFilterLabel: 'Bộ Lọc Môn Đại Cương (GE):',
    sortLabel: 'Sắp xếp theo:',
    sortEasiest: 'Dễ nhất trước (Độ khó thấp nhất)',
    sortHighestRmp: 'Đánh giá giáo sư cao nhất (RMP)',
    sortHighestA: 'Tỷ lệ điểm A cao nhất (Zotistics)',
    sortCode: 'Mã môn học (A–Z)',
    toggleOnline: 'Chỉ lớp trực tuyến / Không đồng bộ',
    toggleNoExams: 'Không thi nặng / Dựa trên dự án',
    toggleHighA: 'Chỉ môn có 80%+ điểm A',
    showingCount: 'Đang hiển thị',
    showingRecommended: 'môn học đề xuất',
    showingBoosterSuffix: '(Môn Gánh GPA)',
    verifiedRecordsNotice: 'Dữ liệu được xác thực từ RateMyProfessors & Zotistics',
    noResultsTitle: 'Không tìm thấy môn học phù hợp',
    noResultsText:
      'Hãy thử đổi từ khóa tìm kiếm, bỏ bộ lọc GE hoặc chuyển về "Tất cả môn học".',
    resetFilters: 'Đặt lại tất cả bộ lọc',
    antTrailBadge: 'Lập Kế Hoạch Bằng Cấp & Lộ Trình Tốt Nghiệp',
    antTrailTitle: 'Sẵn sàng lập kế hoạch toàn diện cho các học kỳ?',
    antTrailText:
      'everyUCI giúp bạn tìm môn học nhẹ nhàng và giáo viên tận tâm. Để lên lịch chi tiết cho 180 tín chỉ và các môn tiên quyết, hãy dùng AntTrail.',
    antTrailButton: 'Lập kế hoạch trên AntTrail',
    divisionGpaBooster: '🔥 Môn Gánh GPA (Dễ Lấy Điểm)',
    divisionAll: 'Tất Cả Môn Học',
    divisionIcs: '💻 Khoa Học Máy Tính & ICS',
    divisionSocSci: '🧠 Khoa Học Xã Hội & Tâm Lý',
    divisionBusiness: '📈 Quản Trị Kinh Doanh & Kinh Tế',
    divisionBioSci: '🧬 Sinh Học & Dự Bị Y Khoa',
    divisionEngineering: '⚙️ Kỹ Thuật & Vật Lý',
    divisionHumanities: '🎭 Nghệ Thuật & Nhân Văn',
    geAll: 'Tất cả GE',
    geIa: 'GE Ia (Viết cơ bản)',
    geIb: 'GE Ib (Viết nâng cao)',
    geII: 'GE II (Khoa học tự nhiên & Công nghệ)',
    geIII: 'GE III (Khoa học xã hội & Hành vi)',
    geIV: 'GE IV (Nghệ thuật & Nhân văn)',
    geVa: 'GE Va (Tư duy định lượng)',
    geVII: 'GE VII (Nghiên cứu đa văn hóa)',
    geVIII: 'GE VIII (Vấn đề quốc tế & Toàn cầu)',
    cardGpaBoosterBadge: 'Môn Gánh GPA · Dễ Lấy A',
    cardOnlineBadge: 'Trực Tuyến / Không Đồng Bộ',
    cardNoExamsBadge: 'Không Thi Căng Thẳng',
    cardUnits: 'Tín chỉ',
    cardDifficulty: 'Độ khó',
    cardZotisticsGrades: 'Lịch Sử Điểm (Zotistics):',
    cardCampusAverage: 'Trung bình toàn trường',
    cardPercentA: '% Điểm A / A-',
    cardRecommendedFaculty: 'Giảng Viên Được Đề Xuất (RateMyProfessors)',
    cardWhyLove: 'Lý do sinh viên yêu thích:',
    cardTips: 'Bí quyết để chắc chắn đạt điểm A',
    cardWebSoc: 'WebSoc',
    cardGuideFooter: 'Cẩm Nang Môn Học UCI',
  },

  // 5. KOREAN (Rank #4: Prominent Irvine Korean Anteater community)
  ko: {
    badge: '수강 신청 추천 & 학점 부스터 (꿀강)',
    title: 'UCI 꿀강 및 인기 교수님 가이드',
    subtitle:
      '선배들이 직접 검증한 "꿀강" (GPA 부스터), RateMyProfessors 고평점 교수진, Zotistics 공식 데이터 기반 A 학점 비율이 높은 강좌를 찾아보세요.',
    bannerTitle: 'UCI 선배들의 수강 신청 필승 팁:',
    bannerText:
      'WebReg 수강신청 창이 열리기 전, 반드시 RateMyProfessors (강의력/평점)와 Zotistics (과거 학점 분포)를 함께 비교 확인하세요!',
    rmpBtn: 'RMP 교수 평가 (UCI)',
    zotisticsBtn: 'Zotistics 학점 통계',
    searchPlaceholder:
      '과목 코드, 교수님 성함(예: Douglas, Thornton), 키워드(꿀강, 음악, 심리) 검색...',
    majorCategoryLabel: '전공 계열 및 카테고리:',
    geFilterLabel: '교양(GE) 필터:',
    sortLabel: '정렬 기준:',
    sortEasiest: '난이도 낮은 순 (학점 따기 가장 쉬움)',
    sortHighestRmp: 'RateMyProfessors 평점 높은 순',
    sortHighestA: 'A 학점 비율 높은 순 (Zotistics)',
    sortCode: '과목 코드 순 (A–Z)',
    toggleOnline: '온라인 / 비동기(Async) 강의만',
    toggleNoExams: '시험 부담 적음 / 과제·프로젝트형',
    toggleHighA: 'A 학점 비율 80% 이상만',
    showingCount: '표시 중인 추천 강의',
    showingRecommended: '개',
    showingBoosterSuffix: '(꿀강 · GPA 부스터)',
    verifiedRecordsNotice: 'RateMyProfessors 및 Zotistics 검증 데이터 기준',
    noResultsTitle: '일치하는 강의를 찾을 수 없습니다',
    noResultsText:
      '검색 키워드를 변경하거나 GE 필터를 해제하여 "전체 강의"로 전환해 보세요.',
    resetFilters: '모든 필터 초기화',
    antTrailBadge: '학위 계획 및 졸업 로드맵 플래너',
    antTrailTitle: '졸업까지 전체 수강 계획을 세우고 싶으신가요?',
    antTrailText:
      'everyUCI는 꿀강과 명교수를 안내합니다. 180학점 이수 요건, 선수과목 트리, 쿼터별 개설 현황을 시뮬레이션하려면 자매 서비스 AntTrail을 활용해 보세요.',
    antTrailButton: 'AntTrail에서 학위 계획 세우기',
    divisionGpaBooster: '🔥 꿀강 & 학점 부스터',
    divisionAll: '전체 강의',
    divisionIcs: '💻 컴퓨터과학 & ICS',
    divisionSocSci: '🧠 사회과학 & 심리학',
    divisionBusiness: '📈 경영 & 경제학',
    divisionBioSci: '🧬 생명과학 & 프리메드',
    divisionEngineering: '⚙️ 공학 & 물리학',
    divisionHumanities: '🎭 인문학 & 예술',
    geAll: '전체 GE',
    geIa: 'GE Ia (초급 작문)',
    geIb: 'GE Ib (고급 작문)',
    geII: 'GE II (과학 및 기술)',
    geIII: 'GE III (사회행동과학)',
    geIV: 'GE IV (인문예술)',
    geVa: 'GE Va (수리적 사고)',
    geVII: 'GE VII (다문화 연구)',
    geVIII: 'GE VIII (국제/글로벌 이슈)',
    cardGpaBoosterBadge: '꿀강 · 학점 부스터',
    cardOnlineBadge: '온라인 / 비동기 강의',
    cardNoExamsBadge: '시험 부담 적음 / 과제 중심',
    cardUnits: '학점',
    cardDifficulty: '강의 난이도',
    cardZotisticsGrades: '과거 성적 분포 (Zotistics):',
    cardCampusAverage: '캠퍼스 전체 평균',
    cardPercentA: 'A / A- 취득률',
    cardRecommendedFaculty: '추천 교수진 (RateMyProfessors)',
    cardWhyLove: '수강생 추천 이유:',
    cardTips: 'A 학점 공략 꿀팁',
    cardWebSoc: 'WebSoc',
    cardGuideFooter: 'UCI 강의 가이드',
  },

  // 6. TRADITIONAL CHINESE (Rank #5: Taiwan, HK, and Cantonese/Traditional readers)
  'zh-TW': {
    badge: '選課助手與甜課推薦',
    title: 'UCI 甜課與優質教授指南',
    subtitle:
      '探索經 Anteater 學長姐實測認證的「甜課／水課」（GPA 大補丸）、RateMyProfessors 高分名師，以及 Zotistics 官方歷史給 A 率極高課程。',
    bannerTitle: 'UCI 老生選課黃金法則：',
    bannerText:
      '在 WebReg 選課時間開放前，務必結合 RateMyProfessors（教學品質）與 Zotistics（歷史成績給分分布）交叉比對！',
    rmpBtn: 'RMP 教授評價 (UCI)',
    zotisticsBtn: 'Zotistics 成績分布',
    searchPlaceholder:
      '搜尋課程代碼、教授姓名（如 Douglas、Thornton）或關鍵字（甜課、音樂、心理）...',
    majorCategoryLabel: '專業學院與課程導航：',
    geFilterLabel: '通識課 (GE) 篩選：',
    sortLabel: '排序方式：',
    sortEasiest: '難度最低優先 (最輕鬆拿 A)',
    sortHighestRmp: '教授評分最高優先 (RMP)',
    sortHighestA: '給 A 率最高優先 (Zotistics)',
    sortCode: '課程代碼 (A–Z)',
    toggleOnline: '僅看線上課 / 非同步網課 (Async)',
    toggleNoExams: '無沈重期中／期末考 (專題作業制)',
    toggleHighA: '僅看 80%+ 給 A 率課程',
    showingCount: '正在顯示',
    showingRecommended: '門推薦課程',
    showingBoosterSuffix: '（甜課 · GPA 大補丸）',
    verifiedRecordsNotice:
      '數據來自 RateMyProfessors 真實評價與 Zotistics 歷史官方選課紀錄',
    noResultsTitle: '未找到符合的課程',
    noResultsText:
      '請嘗試調整搜尋關鍵字、清除 GE 篩選條件或切回「全部課程」。',
    resetFilters: '重設所有篩選條件',
    antTrailBadge: '完整學位與排課藍圖規劃器',
    antTrailTitle: '準備好規劃你的完整畢業排課計畫了嗎？',
    antTrailText:
      'everyUCI 協助你發掘通識甜課與優質教授。若要規劃大學四年 180 學分、擋修先修課依賴圖與開課預測，請使用配套排課引擎 AntTrail。',
    antTrailButton: '在 AntTrail 上規劃我的學位',
    divisionGpaBooster: '🔥 甜課 · GPA 大補丸',
    divisionAll: '全部課程',
    divisionIcs: '💻 資訊與電腦科學 (ICS)',
    divisionSocSci: '🧠 社會科學與心理學',
    divisionBusiness: '📈 商學與經濟學',
    divisionBioSci: '🧬 生物科學與醫預科',
    divisionEngineering: '⚙️ 工學院與物理',
    divisionHumanities: '🎭 藝術與人文學院',
    geAll: '全部 GE 通識課',
    geIa: 'GE Ia (初階寫作)',
    geIb: 'GE Ib (進階寫作)',
    geII: 'GE II (自然科學與科技)',
    geIII: 'GE III (社會與行為科學)',
    geIV: 'GE IV (人文與藝術)',
    geVa: 'GE Va (定量計算)',
    geVII: 'GE VII (多元文化研究)',
    geVIII: 'GE VIII (國際全球議題)',
    cardGpaBoosterBadge: '甜課 · GPA 大補丸',
    cardOnlineBadge: '線上 / 非同步網課',
    cardNoExamsBadge: '無沈重考試 / 輕鬆拿 A',
    cardUnits: '學分',
    cardDifficulty: '課程難度',
    cardZotisticsGrades: '官方歷史成績分布 (Zotistics)：',
    cardCampusAverage: '全校歷史均值',
    cardPercentA: 'A / A- 獲得率',
    cardRecommendedFaculty: '推薦授課教授 (RateMyProfessors)',
    cardWhyLove: '學長姐推薦理由：',
    cardTips: '穩拿 A 避雷高分秘笈',
    cardWebSoc: 'WebSoc 即時課表',
    cardGuideFooter: 'UCI 課程與名師指南',
  },

  // 7. TAGALOG (Rank #6: Large SoCal & Filipino Anteater community)
  tl: {
    badge: 'Rekomendasyon sa Kurso & Pampataas ng GPA',
    title: 'Gabay sa Madaling Kurso at Propesor sa UCI',
    subtitle:
      'Tuklasin ang mga napatunayang madaling klase (GPA boosters), mga de-kalidad na propesor sa RateMyProfessors, at mga kursong may mataas na porsyento ng A ayon sa Zotistics.',
    bannerTitle: 'Gintong Patakaran sa Pagpili ng Klase sa UCI:',
    bannerText:
      'Palaging ihambing ang RateMyProfessors (galing sa pagtuturo) sa Zotistics (nakaraang distribusyon ng grado) bago magbukas ang iyong WebReg window!',
    rmpBtn: 'RMP (UCI)',
    zotisticsBtn: 'Zotistics',
    searchPlaceholder:
      'Maghanap ayon sa code, propesor (hal. Douglas, Thornton), o keyword...',
    majorCategoryLabel: 'Dibisyon at Kategorya ng Kurso:',
    geFilterLabel: 'Filter para sa GE:',
    sortLabel: 'Pagsunud-sunurin:',
    sortEasiest: 'Pinakamadali Muna (Pinakamababang Hirap)',
    sortHighestRmp: 'Pinakamataas na Marka sa RateMyProfessors',
    sortHighestA: 'Pinakamataas na % ng A (Zotistics)',
    sortCode: 'Code ng Kurso (A–Z)',
    toggleOnline: 'Online / Async Lamang',
    toggleNoExams: 'Walang Mabigat na Exam / Proyekto Lamang',
    toggleHighA: '80%+ na Nakakakuha ng A Lamang',
    showingCount: 'Ipinapakita ang',
    showingRecommended: 'mga inirerekomendang kurso',
    showingBoosterSuffix: '(Madaling Klase · Pampataas ng GPA)',
    verifiedRecordsNotice:
      'Batay sa beripikadong datos mula sa RateMyProfessors at Zotistics',
    noResultsTitle: 'Walang nahanap na tugmang kurso',
    noResultsText:
      'Subukang palitan ang mga salita sa paghahanap o ibalik sa "Lahat ng Kurso".',
    resetFilters: 'I-reset ang lahat ng filter',
    antTrailBadge: 'Tagaplano ng Roadmap sa Pagtatapos',
    antTrailTitle: 'Handa nang planuhin ang iyong buong iskedyul sa pagtatapos?',
    antTrailText:
      'Tinutulungan ka ng everyUCI na maghanap ng madaling GE at magagaling na propesor. Para planuhin ang 180 units at prerequisite trees, gamitin ang AntTrail.',
    antTrailButton: 'Planuhin ang Degree sa AntTrail',
    divisionGpaBooster: '🔥 Madaling Klase (GPA Boosters)',
    divisionAll: 'Lahat ng Kurso',
    divisionIcs: '💻 Computer Science & ICS',
    divisionSocSci: '🧠 Agham Panlipunan & Sikolohiya',
    divisionBusiness: '📈 Negosyo & Ekonomiks',
    divisionBioSci: '🧬 Agham Biolohikal & Pre-Health',
    divisionEngineering: '⚙️ Inhinyeriya & Pisika',
    divisionHumanities: '🎭 Sining & Humanidades',
    geAll: 'Lahat ng GE',
    geIa: 'GE Ia (Panimulang Pagsulat)',
    geIb: 'GE Ib (Mataas na Pagsulat)',
    geII: 'GE II (Agham at Teknolohiya)',
    geIII: 'GE III (Agham Panlipunan)',
    geIV: 'GE IV (Sining at Humanidades)',
    geVa: 'GE Va (Kwantitatibong Pangangatwiran)',
    geVII: 'GE VII (Kultural na Pag-aaral)',
    geVIII: 'GE VIII (Pandaigdigang Isyu)',
    cardGpaBoosterBadge: 'Madaling Klase · Pampataas ng GPA',
    cardOnlineBadge: 'Online / Asynchronous',
    cardNoExamsBadge: 'Walang Mabigat na Exam',
    cardUnits: 'Yunit',
    cardDifficulty: 'Antas ng Hirap',
    cardZotisticsGrades: 'Kasaysayan ng Grado (Zotistics):',
    cardCampusAverage: 'Karaniwang Grado sa Campus',
    cardPercentA: '% ng A / A-',
    cardRecommendedFaculty: 'Inirerekomendang Propesor (RateMyProfessors)',
    cardWhyLove: 'Bakit gusto ng mga mag-aaral:',
    cardTips: 'Mga sikretong tip para makakuha ng A',
    cardWebSoc: 'WebSoc',
    cardGuideFooter: 'Gabay sa Kurso ng UCI',
  },

  // 8. JAPANESE (Rank #7: International exchange & Japanese community)
  ja: {
    badge: '履修推薦＆楽単（GPAブースター）',
    title: 'UCI 楽単・おすすめ教授ガイド',
    subtitle:
      '学生の間で実績のある「楽単」（GPA ブースター）、RateMyProfessors で高評価の教授、Zotistics の過去成績データで A 評価率が高い科目を厳選紹介。',
    bannerTitle: '先輩アンテエイターの履修登録鉄則：',
    bannerText:
      'WebReg 履修登録ウィンドウが開く前に、必ず RateMyProfessors（授業評価）と Zotistics（過去の成績分布）をクロスチェックしましょう！',
    rmpBtn: 'RMP 教授評価 (UCI)',
    zotisticsBtn: 'Zotistics 成績データ',
    searchPlaceholder:
      '科目コード、教授名（例: Douglas, Thornton）、キーワード（楽単、音楽、心理）で検索...',
    majorCategoryLabel: '専攻・学部カテゴリ：',
    geFilterLabel: '一般教養 (GE) フィルター：',
    sortLabel: '並び順：',
    sortEasiest: '難易度が低い順 (最も A が取りやすい)',
    sortHighestRmp: '教授評価が高い順 (RateMyProfessors)',
    sortHighestA: 'A 評価率が高い順 (Zotistics)',
    sortCode: '科目コード順 (A–Z)',
    toggleOnline: 'オンライン / オンデマンド講義のみ',
    toggleNoExams: '重い試験なし / レポート・課題中心',
    toggleHighA: 'A 評価率 80% 以上のみ',
    showingCount: '表示中',
    showingRecommended: '件のおすすめ科目',
    showingBoosterSuffix: '（楽単 · GPA ブースター）',
    verifiedRecordsNotice: 'RateMyProfessors と Zotistics の検証済みデータに基づく',
    noResultsTitle: '該当する科目が見つかりませんでした',
    noResultsText:
      '検索語句を変更するか、GE フィルターを解除して「すべての科目」に戻してください。',
    resetFilters: 'すべてのフィルターをリセット',
    antTrailBadge: '学位・履修計画ロードマップ作成ツール',
    antTrailTitle: '卒業までの全履修スケジュールを設計しませんか？',
    antTrailText:
      'everyUCI は履修しやすい GE 科目と優良教授を見つけるガイドです。全 180 単位、前提科目ツリー、学期ごとの開講パターンをシミュレーションしたい場合は、提携ツールの AntTrail をご利用ください。',
    antTrailButton: 'AntTrail で学位を計画する',
    divisionGpaBooster: '🔥 楽単 · GPA ブースター',
    divisionAll: 'すべての科目',
    divisionIcs: '💻 コンピュータ科学 & ICS',
    divisionSocSci: '🧠 社会科学 & 心理学',
    divisionBusiness: '📈 ビジネス & 経済学',
    divisionBioSci: '🧬 生物科学 & プレメド',
    divisionEngineering: '⚙️ 工学 & 物理学',
    divisionHumanities: '🎭 人文学 & 芸術',
    geAll: 'すべての GE',
    geIa: 'GE Ia (初級ライティング)',
    geIb: 'GE Ib (上級ライティング)',
    geII: 'GE II (自然科学・技術)',
    geIII: 'GE III (社会・行動科学)',
    geIV: 'GE IV (芸術・人文学)',
    geVa: 'GE Va (定量的思考)',
    geVII: 'GE VII (多文化研究)',
    geVIII: 'GE VIII (国際・地球規模課題)',
    cardGpaBoosterBadge: '楽単 · GPA ブースター',
    cardOnlineBadge: 'オンライン / オンデマンド',
    cardNoExamsBadge: '重い試験なし / 課題中心',
    cardUnits: '単位',
    cardDifficulty: '難易度',
    cardZotisticsGrades: '過去の成績分布 (Zotistics)：',
    cardCampusAverage: '学内全期間平均',
    cardPercentA: 'A / A- 取得率',
    cardRecommendedFaculty: 'おすすめ教授 (RateMyProfessors)',
    cardWhyLove: '受講生に愛される理由：',
    cardTips: '確実に A を獲得するためのコツ',
    cardWebSoc: 'WebSoc',
    cardGuideFooter: 'UCI 履修科目ガイド',
  },
};
