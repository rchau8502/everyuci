import { LanguageCode } from '@/types/language';

export interface TranslationDictionary {
  // Navigation
  nav: {
    home: string;
    exploreGuides: string;
    iNeedTo: string;
    uciTools: string;
    degreePlanning: string;
    categories: string;
    savedGuides: string;
    search: string;
    searchShortcut: string;
    studentGuide: string;
  };

  // Hero Section
  hero: {
    badge: string;
    updatedYear: string;
    headline1: string;
    headline2: string;
    subheadline: string;
    placeholder: string;
    popularQuestions: string;
    tailorPrompt: string;
  };

  // Sections on Homepage
  sections: {
    majorCategories: string;
    majorCategoriesSub: string;
    viewAllCategories: string;
    iNeedToHub: string;
    iNeedToHubSub: string;
    browseAllTasks: string;
    mostUsefulGuides: string;
    mostUsefulGuidesSub: string;
    viewAllGuides: string;
    toolsExplained: string;
    toolsExplainedSub: string;
    exploreAllTools: string;
    secretsAndTips: string;
    secretsAndTipsSub: string;
  };

  // Guide Page Layout Elements
  guide: {
    quickAnswer: string;
    whatYouNeedToKnow: string;
    whatToDo: string;
    whatToDoSub: string;
    importantDeadlines: string;
    commonMisunderstandings: string;
    officialSource: string;
    verifyWithUci: string;
    strictDeadline: string;
    relatedGuides: string;
    sourceDepartment: string;
    lastVerified: string;
    academicYear: string;
    officialLink: string;
    shareGuide: string;
    linkCopied: string;
    saveGuide: string;
    saved: string;
    reportOutdated: string;
    readStepByStep: string;
    browseAllGuides: string;
    myth: string;
    reality: string;
  };

  // AntTrail
  antTrail: {
    badge: string;
    title: string;
    subtitle: string;
    button: string;
    prereqs: string;
    schedules: string;
    offerings: string;
  };

  // Checklist
  checklist: {
    badge: string;
    title: string;
    subtitle: string;
    progress: string;
    reset: string;
  };

  // Disclaimer
  disclaimer: {
    title: string;
    text: string;
  };
}

export const TRANSLATIONS: Record<LanguageCode, TranslationDictionary> = {
  // 1. ENGLISH (Default)
  en: {
    nav: {
      home: 'Home',
      exploreGuides: 'Explore Guides',
      iNeedTo: 'I Need To...',
      uciTools: 'UCI Tools',
      degreePlanning: 'Degree Planning',
      categories: 'Categories',
      savedGuides: 'Saved Guides',
      search: 'Search...',
      searchShortcut: '⌘K',
      studentGuide: 'Student Guide',
    },
    hero: {
      badge: 'The Independent All-in-One UC Irvine Guide',
      updatedYear: 'Updated for 2026–27',
      headline1: 'Everything you need to',
      headline2: 'navigate UCI.',
      subheadline:
        'UCI information is scattered across dozens of departments and portals. everyUCI organizes academic rules, fee deadlines, housing, and campus life into one clean, student-friendly interface.',
      placeholder: 'What do you need help with at UCI?',
      popularQuestions: 'Popular Anteater Questions:',
      tailorPrompt: 'Tailor information for your student status:',
    },
    sections: {
      majorCategories: 'Major Categories',
      majorCategoriesSub: 'Browse student guides organized by topic. No administrative jargon required.',
      viewAllCategories: 'View all 10 categories',
      iNeedToHub: 'I Need To...',
      iNeedToHubSub: 'Have a specific task or problem right now? Jump straight to direct step-by-step guides.',
      browseAllTasks: 'Browse all tasks',
      mostUsefulGuides: 'Most Useful Student Guides',
      mostUsefulGuidesSub: 'Practical guides explaining policies, deadlines, and step-by-step procedures.',
      viewAllGuides: 'View all guides',
      toolsExplained: 'UCI Tools Explained',
      toolsExplainedSub: 'Demystifying the separate websites and logins you need throughout the quarter.',
      exploreAllTools: 'Explore all UCI tools',
      secretsAndTips: "Things Students Often Don't Know",
      secretsAndTipsSub: 'Valuable campus resources, free subscriptions, quiet study havens, and money-saving hacks included in your student fees.',
    },
    guide: {
      quickAnswer: 'Quick Answer',
      whatYouNeedToKnow: 'What you need to know',
      whatToDo: 'What to do',
      whatToDoSub: 'Follow these sequential steps to resolve this task properly.',
      importantDeadlines: 'Important deadlines',
      commonMisunderstandings: 'Things students commonly misunderstand',
      officialSource: 'Official University Source',
      verifyWithUci: 'Verify with UCI',
      strictDeadline: 'Strict Deadline',
      relatedGuides: 'Related everyUCI Guides',
      sourceDepartment: 'Source Department',
      lastVerified: 'Last Verified',
      academicYear: 'Academic Year',
      officialLink: 'UCI Source',
      shareGuide: 'Share Guide',
      linkCopied: 'Link Copied!',
      saveGuide: 'Save guide',
      saved: 'Saved',
      reportOutdated: 'Report outdated policy or suggest tip',
      readStepByStep: 'Read Step-by-Step',
      browseAllGuides: 'Browse all student guides',
      myth: '❌ Myth:',
      reality: '✓ Reality:',
    },
    antTrail: {
      badge: 'Dedicated Course & Degree Planning Engine',
      title: 'Planning Your Degree? Meet AntTrail.',
      subtitle: 'everyUCI explains the rules and portals. AntTrail calculates your quarter-by-quarter schedules, prerequisite graphs, and graduation roadmap.',
      button: 'Plan My Degree with AntTrail',
      prereqs: 'Interactive Prerequisite Trees',
      schedules: 'Quarter-by-Quarter Schedules',
      offerings: 'Offerings History (F/W/Sp/Su)',
    },
    checklist: {
      badge: 'New to UCI?',
      title: 'Anteater First-Week Starter Checklist',
      subtitle: 'Check off essentials to set up your tech, cards, accounts, and health waiver. Progress is saved on your device.',
      progress: 'completed',
      reset: 'Reset checklist',
    },
    disclaimer: {
      title: 'Official Disclaimer:',
      text: 'everyUCI is an independent student resource and is not affiliated with, sponsored by, or endorsed by the University of California, Irvine. Academic policies, deadlines, tuition figures, and campus regulations are subject to administrative changes. Always verify important academic, financial, and administrative information with official UCI sources and academic counselors.',
    },
  },

  // 2. SIMPLIFIED CHINESE (Rank #1 non-English: Largest international student body & Mandarin community)
  'zh-CN': {
    nav: {
      home: '首页',
      exploreGuides: '浏览指南',
      iNeedTo: '我想办理...',
      uciTools: 'UCI 系统工具',
      degreePlanning: '选课排课规划',
      categories: '分类导航',
      savedGuides: '我的收藏',
      search: '搜索...',
      searchShortcut: '⌘K',
      studentGuide: '尔湾学生指南',
    },
    hero: {
      badge: '加州大学尔湾分校 (UCI) 独立学生综合指南',
      updatedYear: '已更新至 2026–27 学年',
      headline1: '玩转 UCI 所需的',
      headline2: '一切全在这里。',
      subheadline:
        'UCI 的信息分散在几十个部门和独立系统中。everyUCI 将繁杂的选课退课规则、学费截止日、宿舍公寓和校园资源整理成清晰、简单且对学生友好的中文界面。',
      placeholder: '你在 UCI 遇到了什么问题？（例如：退课、学费、停车）',
      popularQuestions: 'UCI 常见高频搜索：',
      tailorPrompt: '根据你的学生身份定制专属内容：',
    },
    sections: {
      majorCategories: '各大主题分类',
      majorCategoriesSub: '按生活与学业分类浏览指南，告别生僻晦涩的高校行政术语。',
      viewAllCategories: '查看全部 10 个分类',
      iNeedToHub: '我要办理... 快捷通道',
      iNeedToHubSub: '遇到棘手问题？直接跳转到一步一步的详细图文操作指南。',
      browseAllTasks: '查看所有高频任务',
      mostUsefulGuides: '尔湾学生最常用指南',
      mostUsefulGuidesSub: '详尽解释选课政策、关键截止日期和操作步骤的实用攻略。',
      viewAllGuides: '查看全部指南',
      toolsExplained: 'UCI 常用核心系统详解',
      toolsExplainedSub: '一次性搞懂 WebReg、ZotAccount、ZotAid 等各个系统的用途与登录要求。',
      exploreAllTools: '探索全部 14 个系统',
      secretsAndTips: '许多学生不知道的校园福利与技巧',
      secretsAndTipsSub: '学费已包含的免费正版软件、生鲜食物救济站 (FRESH Hub)、安静自习室与隐藏优惠。',
    },
    guide: {
      quickAnswer: '一句话速览',
      whatYouNeedToKnow: '你需要了解的规则',
      whatToDo: '具体操作步骤',
      whatToDoSub: '按照以下编号步骤依次操作以顺利完成。',
      importantDeadlines: '重要截止日期',
      commonMisunderstandings: '学生最常误解的误区',
      officialSource: 'UCI 官方负责部门',
      verifyWithUci: '以 UCI 官方为准',
      strictDeadline: '严格截止时间',
      relatedGuides: '相关推荐指南',
      sourceDepartment: '官方来源部门',
      lastVerified: '最后核对日期',
      academicYear: '适用学年',
      officialLink: 'UCI 官方页面',
      shareGuide: '分享指南',
      linkCopied: '链接已复制！',
      saveGuide: '收藏指南',
      saved: '已收藏',
      reportOutdated: '反馈过时政策或提供建议',
      readStepByStep: '阅读步骤指南',
      browseAllGuides: '浏览所有指南',
      myth: '❌ 常见误区：',
      reality: '✓ 真实情况：',
    },
    antTrail: {
      badge: '专属先修课排课与毕业规划引擎',
      title: '正在规划毕业与选课？试试 AntTrail。',
      subtitle: 'everyUCI 负责解释政策规则与系统；AntTrail 负责精准计算你每学期的排课日程、先修课依赖关系图及 4 年毕业路径。',
      button: '使用 AntTrail 规划我的学位',
      prereqs: '交互式先修课依赖图',
      schedules: '每季度课表排期计算',
      offerings: '历史开课规律统计 (秋冬春夏)',
    },
    checklist: {
      badge: '刚到 UCI？',
      title: '新生开学第一周生存清单',
      subtitle: '逐项核对校园 Wi-Fi、学生卡、账单直邮与保险豁免，进度会自动保存在当前浏览器中。',
      progress: '已完成',
      reset: '重置清单',
    },
    disclaimer: {
      title: '官方免责声明：',
      text: 'everyUCI 是一项由学生独立创建的互助资源平台，不隶属于加州大学尔湾分校 (UCI)，亦未获得官方背书。学业政策、截止时间、学费数额和学校规定可能随时调整。请务必前往 UCI 官网及学院学术顾问处核对最权威的官方信息。',
    },
  },

  // 3. SPANISH (Rank #2: UCI is a designated Hispanic-Serving Institution, ~27% of students)
  es: {
    nav: {
      home: 'Inicio',
      exploreGuides: 'Explorar Guías',
      iNeedTo: 'Necesito...',
      uciTools: 'Herramientas UCI',
      degreePlanning: 'Planificación de Grado',
      categories: 'Categorías',
      savedGuides: 'Guardados',
      search: 'Buscar...',
      searchShortcut: '⌘K',
      studentGuide: 'Guía Estudiantil',
    },
    hero: {
      badge: 'La Guía Independiente Integral de UC Irvine',
      updatedYear: 'Actualizado para 2026–27',
      headline1: 'Todo lo que necesitas para',
      headline2: 'navegar en UCI.',
      subheadline:
        'La información de UCI está dispersa en decenas de departamentos y portales. everyUCI organiza las normas académicas, fechas límites de pago, vivienda y vida estudiantil en una interfaz clara y accesible.',
      placeholder: '¿Con qué necesitas ayuda en UCI? (ej. dar de baja, ayuda financiera)',
      popularQuestions: 'Preguntas Frecuentes de Anteaters:',
      tailorPrompt: 'Personaliza la información según tu condición de estudiante:',
    },
    sections: {
      majorCategories: 'Categorías Principales',
      majorCategoriesSub: 'Explora guías organizadas por tema sin jerga burocrática innecesaria.',
      viewAllCategories: 'Ver las 10 categorías',
      iNeedToHub: 'Centro de Tareas: Necesito...',
      iNeedToHubSub: '¿Tienes un trámite o problema urgente? Ve directo a la guía paso a paso.',
      browseAllTasks: 'Ver todas las tareas',
      mostUsefulGuides: 'Guías Más Útiles para Estudiantes',
      mostUsefulGuidesSub: 'Guías prácticas que explican reglamentos, fechas límites y procedimientos oficiales.',
      viewAllGuides: 'Ver todas las guías',
      toolsExplained: 'Portales de UCI Explicados',
      toolsExplainedSub: 'Conoce los diferentes portales y accesos que usarás cada trimestre (WebReg, ZotAccount, ZotAid).',
      exploreAllTools: 'Explorar las 14 herramientas',
      secretsAndTips: 'Cosas Que Los Estudiantes Suelen Desconocer',
      secretsAndTipsSub: 'Recursos gratuitos, despensa de alimentos FRESH Hub, suscripciones y lugares tranquilos de estudio.',
    },
    guide: {
      quickAnswer: 'Respuesta Breve',
      whatYouNeedToKnow: 'Lo que necesitas saber',
      whatToDo: 'Qué hacer',
      whatToDoSub: 'Sigue estos pasos ordenados para resolver tu trámite con éxito.',
      importantDeadlines: 'Fechas límites importantes',
      commonMisunderstandings: 'Malentendidos frecuentes entre estudiantes',
      officialSource: 'Fuente Oficial de la Universidad',
      verifyWithUci: 'Verificar con UCI',
      strictDeadline: 'Fecha Límite Estricta',
      relatedGuides: 'Guías Relacionadas de everyUCI',
      sourceDepartment: 'Departamento Emisor',
      lastVerified: 'Última Verificación',
      academicYear: 'Año Académico',
      officialLink: 'Página Oficial de UCI',
      shareGuide: 'Compartir Guía',
      linkCopied: '¡Enlace copiado!',
      saveGuide: 'Guardar guía',
      saved: 'Guardado',
      reportOutdated: 'Reportar información desactualizada',
      readStepByStep: 'Leer Paso a Paso',
      browseAllGuides: 'Explorar todas las guías',
      myth: '❌ Mito:',
      reality: '✓ Realidad:',
    },
    antTrail: {
      badge: 'Motor Dedicado a la Planificación de Cursos y Grados',
      title: '¿Planeando tus cursos? Conoce AntTrail.',
      subtitle: 'everyUCI te explica las normas y portales. AntTrail calcula tus horarios trimestre a trimestre y tu árbol de prerrequisitos hacia la graduación.',
      button: 'Planear Mi Grado con AntTrail',
      prereqs: 'Árboles Interactivos de Prerrequisitos',
      schedules: 'Horarios Trimestre a Trimestre',
      offerings: 'Patrones Históricos de Oferta de Cursos',
    },
    checklist: {
      badge: '¿Nuevo en UCI?',
      title: 'Lista de Control para la Primera Semana',
      subtitle: 'Completa la configuración de Wi-Fi, tarjeta ZotCard, depósito directo y exención del seguro médico. Tu progreso se guarda localmente.',
      progress: 'completado',
      reset: 'Reiniciar lista',
    },
    disclaimer: {
      title: 'Aviso Legal Oficial:',
      text: 'everyUCI es un recurso estudiantil independiente y no está afiliado, respaldado ni patrocinado por la Universidad de California, Irvine (UCI). Las políticas académicas, plazos y costos están sujetos a cambios institucionales. Siempre confirma información crítica con las fuentes oficiales y asesores de UCI.',
    },
  },

  // 4. VIETNAMESE (Rank #3: Orange County Little Saigon & large Vietnamese American Anteater community)
  vi: {
    nav: {
      home: 'Trang Chủ',
      exploreGuides: 'Xem Hướng Dẫn',
      iNeedTo: 'Tôi Cần...',
      uciTools: 'Hệ Thống UCI',
      degreePlanning: 'Kế Hoạch Tốt Nghiệp',
      categories: 'Danh Mục',
      savedGuides: 'Đã Lưu',
      search: 'Tìm kiếm...',
      searchShortcut: '⌘K',
      studentGuide: 'Cẩm Nang Sinh Viên',
    },
    hero: {
      badge: 'Cẩm Nang Sinh Viên Toàn Diện & Độc Lập cho UC Irvine',
      updatedYear: 'Cập nhật năm học 2026–27',
      headline1: 'Mọi thông tin bạn cần để',
      headline2: 'làm chủ môi trường UCI.',
      subheadline:
        'Thông tin tại UCI thường bị phân tán ở nhiều phòng ban và trang web riêng biệt. everyUCI tổng hợp các quy định học vụ, hạn đóng tiền, ký túc xá và đời sống sinh viên vào một giao diện trực quan, rõ ràng.',
      placeholder: 'Bạn cần giúp đỡ việc gì tại UCI? (ví dụ: hủy lớp, đóng học phí, bãi đậu xe)',
      popularQuestions: 'Câu Hỏi Sinh Viên Thường Tìm:',
      tailorPrompt: 'Lọc thông tin theo đối tượng sinh viên của bạn:',
    },
    sections: {
      majorCategories: 'Các Danh Mục Chính',
      majorCategoriesSub: 'Khám phá các cẩm nang được sắp xếp theo chủ đề, không dùng thuật ngữ hành chính khó hiểu.',
      viewAllCategories: 'Xem tất cả 10 danh mục',
      iNeedToHub: 'Trung Tâm Thao Tác: Tôi Cần...',
      iNeedToHubSub: 'Đang gặp rắc rối cụ thể? Chuyển ngay đến các bước hướng dẫn giải quyết trực tiếp.',
      browseAllTasks: 'Xem tất cả nhiệm vụ',
      mostUsefulGuides: 'Cẩm Nang Cần Thiết Nhất',
      mostUsefulGuidesSub: 'Giải thích chi tiết các chính sách, mốc thời gian quan trọng và quy trình từng bước.',
      viewAllGuides: 'Xem tất cả hướng dẫn',
      toolsExplained: 'Giải Thích Các Cổng Thông Tin UCI',
      toolsExplainedSub: 'Hiểu rõ công dụng và cách đăng nhập vào WebReg, ZotAccount, ZotAid trong suốt các học kỳ.',
      exploreAllTools: 'Khám phá 14 hệ thống',
      secretsAndTips: 'Những Quyền Lợi Sinh Viên Thường Bỏ Lỡ',
      secretsAndTipsSub: 'Phần mềm bản quyền miễn phí, hỗ trợ thực phẩm FRESH Hub, phòng tự học yên tĩnh và xe buýt OCTA.',
    },
    guide: {
      quickAnswer: 'Trả Lời Nhanh',
      whatYouNeedToKnow: 'Những điều bạn cần biết',
      whatToDo: 'Các bước cần làm',
      whatToDoSub: 'Làm theo các bước tuần tự dưới đây để xử lý công việc chính xác.',
      importantDeadlines: 'Các mốc thời gian quan trọng',
      commonMisunderstandings: 'Những hiểu lầm phổ biến của sinh viên',
      officialSource: 'Nguồn Thông Tin Chính Thức UCI',
      verifyWithUci: 'Cần xác nhận lại với UCI',
      strictDeadline: 'Thời Hạn Bắt Buộc',
      relatedGuides: 'Các Hướng Dẫn Liên Quan',
      sourceDepartment: 'Phòng Ban Chịu Trách Nhiệm',
      lastVerified: 'Kiểm Tra Gần Nhất',
      academicYear: 'Năm Học',
      officialLink: 'Trang Web Chính Thức UCI',
      shareGuide: 'Chia Sẻ',
      linkCopied: 'Đã sao chép liên kết!',
      saveGuide: 'Lưu bài viết',
      saved: 'Đã lưu',
      reportOutdated: 'Báo lỗi thông tin hoặc đóng góp ý kiến',
      readStepByStep: 'Xem Hướng Dẫn Từng Bước',
      browseAllGuides: 'Xem toàn bộ hướng dẫn',
      myth: '❌ Hiểu lầm:',
      reality: '✓ Thực tế:',
    },
    antTrail: {
      badge: 'Công Cụ Chuyên Sâu Lên Lịch Học & Lộ Trình Tốt Nghiệp',
      title: 'Đang Lên Lịch Học? Khám Phá AntTrail.',
      subtitle: 'everyUCI giải thích quy chế và cổng thông tin; AntTrail tính toán chính xác lịch học từng quarter, sơ đồ môn tiên quyết và lộ trình tốt nghiệp.',
      button: 'Lên Kế Hoạch Với AntTrail',
      prereqs: 'Sơ Đồ Môn Tiên Quyết Tương Tác',
      schedules: 'Sắp Xếp Lịch Học Theo Quarter',
      offerings: 'Thống Kê Lịch Mở Lớp Lịch Sử',
    },
    checklist: {
      badge: 'Tân Sinh Viên?',
      title: 'Danh Sách Kiểm Tra Tuần Đầu Tiên',
      subtitle: 'Hoàn tất kết nối Wi-Fi, thẻ sinh viên ZotCard, thanh toán tự động và miễn trừ bảo hiểm. Tiến độ được lưu trên thiết bị của bạn.',
      progress: 'hoàn thành',
      reset: 'Đặt lại danh sách',
    },
    disclaimer: {
      title: 'Tuyên Bố Miễn Trừ Trách Nhiệm:',
      text: 'everyUCI là tài nguyên độc lập do sinh viên phát triển và không thuộc quyền quản lý hay đại diện cho University of California, Irvine (UCI). Các quy định và hạn chót có thể thay đổi. Luôn kiểm tra lại với cố vấn học vụ và nguồn tin chính thức của UCI.',
    },
  },

  // 5. KOREAN (Rank #4: Irvine Korean American community & prominent international student presence)
  ko: {
    nav: {
      home: '홈',
      exploreGuides: '가이드 탐색',
      iNeedTo: '필요한 작업...',
      uciTools: 'UCI 포털 도구',
      degreePlanning: '졸업 & 수강 계획',
      categories: '카테고리',
      savedGuides: '저장된 가이드',
      search: '검색...',
      searchShortcut: '⌘K',
      studentGuide: '학생 안내서',
    },
    hero: {
      badge: 'UC 어바인 (UCI) 독립 학생 종합 가이드',
      updatedYear: '2026–27 학년도 최신 업데이트',
      headline1: 'UCI 캠퍼스 생활을 위한',
      headline2: '모든 정보가 여기에.',
      subheadline:
        'UCI의 규정과 시스템은 여러 부서에 흩어져 있습니다. everyUCI는 수강 신청/취소, 학비 납부 마감일, 기숙사, 장학금 정보를 명확하고 알기 쉬운 학생 중심 인터페이스로 정리했습니다.',
      placeholder: 'UCI에서 어떤 도움이 필요하신가요? (예: 수업 드랍, 학비, 주차권)',
      popularQuestions: '자주 묻는 질문:',
      tailorPrompt: '학생 신분에 맞게 맞춤형 정보 보기:',
    },
    sections: {
      majorCategories: '주요 분야별 카테고리',
      majorCategoriesSub: '복잡한 행정 용어 없이 주제별로 정리된 학생 가이드를 확인하세요.',
      viewAllCategories: '10개 전체 카테고리 보기',
      iNeedToHub: '즉시 해결 작업 허브',
      iNeedToHubSub: '당장 처리해야 할 일이 있으신가요? 단계별 가이드로 바로 이동하세요.',
      browseAllTasks: '모든 작업 보기',
      mostUsefulGuides: '가장 많이 찾는 핵심 가이드',
      mostUsefulGuidesSub: '중요 정책, 제출 마감일 및 상세 처리 절차를 안내합니다.',
      viewAllGuides: '전체 가이드 보기',
      toolsExplained: 'UCI 주요 시스템 및 포털 완벽 정리',
      toolsExplainedSub: 'WebReg, ZotAccount, ZotAid 등 매 쿼터 사용하는 시스템의 역할과 로그인 안내.',
      exploreAllTools: '14개 포털 모두 확인하기',
      secretsAndTips: '학생들이 잘 모르는 알짜배기 캠퍼스 혜택',
      secretsAndTipsSub: '등록금에 포함된 무료 정품 소프트웨어, FRESH 푸드 뱅크, 조용한 도서관 스팟.',
    },
    guide: {
      quickAnswer: '핵심 요약',
      whatYouNeedToKnow: '알아두어야 할 핵심 규정',
      whatToDo: '단계별 실행 방법',
      whatToDoSub: '성공적인 처리를 위해 다음 단계를 순서대로 진행하세요.',
      importantDeadlines: '중요 마감 기한',
      commonMisunderstandings: '학생들이 자주 오해하는 사항',
      officialSource: '공식 대학 주관 부서',
      verifyWithUci: 'UCI 공식 확인 필요',
      strictDeadline: '엄격한 마감 기한',
      relatedGuides: '관련 everyUCI 가이드',
      sourceDepartment: '담당 부서',
      lastVerified: '최종 검증 일자',
      academicYear: '적용 학년도',
      officialLink: 'UCI 공식 웹사이트',
      shareGuide: '가이드 공유',
      linkCopied: '링크가 복사되었습니다!',
      saveGuide: '가이드 저장',
      saved: '저장됨',
      reportOutdated: '수정 제안 및 업데이트 요청',
      readStepByStep: '단계별 가이드 읽기',
      browseAllGuides: '모든 학생 가이드 둘러보기',
      myth: '❌ 오해:',
      reality: '✓ 실제 사실:',
    },
    antTrail: {
      badge: '선수과목 및 졸업 플랜 전용 엔진',
      title: '수강 계획과 학위를 준비 중이신가요? AntTrail을 만나보세요.',
      subtitle: 'everyUCI가 학교 규정과 시스템을 안내한다면, AntTrail은 쿼터별 시간표, 선수과목 트리 및 4년/2년 졸업 로드맵을 자동으로 계산합니다.',
      button: 'AntTrail로 학위 계획하기',
      prereqs: '인터랙티브 선수과목 트리',
      schedules: '쿼터별 최적 시간표 구성',
      offerings: '과거 과목 개설 패턴 통계',
    },
    checklist: {
      badge: 'UCI 신입생이신가요?',
      title: '신입생 첫 주 체크리스트',
      subtitle: '캠퍼스 와이파이, 학생증, 환불 계좌 연결, 보험 면제 신청을 완료하세요. 진행 상황은 브라우저에 안전하게 저장됩니다.',
      progress: '완료됨',
      reset: '체크리스트 초기화',
    },
    disclaimer: {
      title: '공식 면책 고지:',
      text: 'everyUCI는 학생들이 운영하는 독립적인 정보 리소스이며, UC Irvine(UCI) 공식 기관이 아니며 대학의 보증을 받지 않습니다. 학교 규정과 마감 기한은 변경될 수 있으므로 중요 사항은 항상 UCI 공식 포털 및 학과 상담사를 통해 재확인하시기 바랍니다.',
    },
  },

  // 6. TRADITIONAL CHINESE (Rank #5: Taiwan, HK, and Cantonese/Traditional readers)
  'zh-TW': {
    nav: {
      home: '首頁',
      exploreGuides: '瀏覽指南',
      iNeedTo: '我想辦理...',
      uciTools: 'UCI 系統工具',
      degreePlanning: '排課與畢業規劃',
      categories: '分類導航',
      savedGuides: '我的收藏',
      search: '搜尋...',
      searchShortcut: '⌘K',
      studentGuide: '爾灣學生指南',
    },
    hero: {
      badge: '加州大學爾灣分校 (UCI) 獨立學生全方位指南',
      updatedYear: '已更新至 2026–27 學年',
      headline1: '暢行 UCI 所需的',
      headline2: '一切都在這裡。',
      subheadline:
        'UCI 的資訊分散在數十個行政部門與獨立系統中。everyUCI 將選課退課規則、學費截止日、宿舍申請與校園生活整理成清晰、簡潔的中文學生專屬介面。',
      placeholder: '你在 UCI 遇到了什麼問題？（例如：退課、學費、停車位）',
      popularQuestions: 'UCI 常見高頻搜尋：',
      tailorPrompt: '依據你的學生身份自訂專屬內容：',
    },
    sections: {
      majorCategories: '各大主題分類',
      majorCategoriesSub: '按學業與生活主題分類瀏覽，告別艱澀的高校行政術語。',
      viewAllCategories: '查看全部 10 個分類',
      iNeedToHub: '我要辦理... 快速通道',
      iNeedToHubSub: '遇到急迫手續？直接跳轉到一步一步的詳細操作圖文說明。',
      browseAllTasks: '查看所有高頻任務',
      mostUsefulGuides: '爾灣學生最常用指南',
      mostUsefulGuidesSub: '詳盡解釋選課政策、關鍵截止日期與辦理流程的實用指南。',
      viewAllGuides: '查看全部指南',
      toolsExplained: 'UCI 核心校園系統詳解',
      toolsExplainedSub: '一次搞懂 WebReg、ZotAccount、ZotAid 等各系統的功能與登入方式。',
      exploreAllTools: '探索全部 14 個系統',
      secretsAndTips: '許多學生不知道的校園福利與實用技巧',
      secretsAndTipsSub: '學費已包含的免費正版軟體、FRESH 食物銀行、安靜自習室與隱藏優惠。',
    },
    guide: {
      quickAnswer: '重點速覽',
      whatYouNeedToKnow: '你需要瞭解的規則',
      whatToDo: '具體操作步驟',
      whatToDoSub: '依照以下編號順序逐步操作即可順利完成。',
      importantDeadlines: '重要截止日期',
      commonMisunderstandings: '學生最常發生的誤解',
      officialSource: 'UCI 官方主管部門',
      verifyWithUci: '以 UCI 官方公告為準',
      strictDeadline: '嚴格截止時間',
      relatedGuides: '相關推薦指南',
      sourceDepartment: '官方來源部門',
      lastVerified: '最後核對日期',
      academicYear: '適用學年',
      officialLink: 'UCI 官方頁面',
      shareGuide: '分享指南',
      linkCopied: '連結已複製！',
      saveGuide: '收藏指南',
      saved: '已收藏',
      reportOutdated: '回報過時資訊或提供建議',
      readStepByStep: '閱讀步驟指南',
      browseAllGuides: '瀏覽所有指南',
      myth: '❌ 常見迷思：',
      reality: '✓ 真實情況：',
    },
    antTrail: {
      badge: '專屬先修課排課與學位規劃引擎',
      title: '正在規劃畢業與選課？認識 AntTrail。',
      subtitle: 'everyUCI 負責說明政策規則與系統；AntTrail 負責精確計算你每學期的排課日程、先修課相依圖表及 4 年畢業路徑。',
      button: '使用 AntTrail 規劃我的學位',
      prereqs: '互動式先修課相依樹',
      schedules: '每學季課表最佳化安排',
      offerings: '歷史開課規律統計 (秋冬春夏)',
    },
    checklist: {
      badge: '剛來到 UCI？',
      title: '新生開學首週必備檢核清單',
      subtitle: '逐項確認校園 Wi-Fi、學生證 ZotCard、退稅帳戶連結與學生保險豁免，進度會自動儲存在目前瀏覽器中。',
      progress: '已完成',
      reset: '重置清單',
    },
    disclaimer: {
      title: '官方免責聲明：',
      text: 'everyUCI 為學生獨立建置之互助平台，非加州大學爾灣分校 (UCI) 附屬單位，亦未獲得校方背書。各項學業政策、截止時間、學雜費用與校規可能隨時變更。請務必前往 UCI 官網及各學院學術顧問處確認最新官方資訊。',
    },
  },

  // 7. TAGALOG (Rank #6: SoCal & Filipino Anteater community)
  tl: {
    nav: {
      home: 'Home',
      exploreGuides: 'Tingnan ang Guides',
      iNeedTo: 'Kailangan Kong...',
      uciTools: 'UCI Tools',
      degreePlanning: 'Plano sa Kurso',
      categories: 'Kategorya',
      savedGuides: 'Nai-save',
      search: 'Maghanap...',
      searchShortcut: '⌘K',
      studentGuide: 'Gabay ng Mag-aaral',
    },
    hero: {
      badge: 'Ang Malaya at Kumpletong Gabay para sa UC Irvine',
      updatedYear: 'Nai-update para sa 2026–27',
      headline1: 'Lahat ng kailangan mo para',
      headline2: 'mag-navigate sa UCI.',
      subheadline:
        'Kinalat ang impormasyon ng UCI sa iba’t ibang departamento at website. Isinaayos ng everyUCI ang mga patakaran sa pag-aaral, matrikula, pabahay, at buhay-estudyante sa isang malinaw at madaling gamiting interface.',
      placeholder: 'Ano ang kailangan mo sa UCI? (hal. mag-drop ng klase, bayad sa tuition)',
      popularQuestions: 'Mga Karaniwang Tanong ng Anteater:',
      tailorPrompt: 'I-filter ayon sa iyong katayuan bilang estudyante:',
    },
    sections: {
      majorCategories: 'Pangunahing Kategorya',
      majorCategoriesSub: 'Galugarin ang mga gabay nang walang nakakalitong mga salitang pampamahalaan.',
      viewAllCategories: 'Tingnan ang 10 kategorya',
      iNeedToHub: 'Kailangan Kong... Sentro ng Gawain',
      iNeedToHubSub: 'May kailangang asikasuhin ngayon? Dumiretso sa mga hakbang na gabay.',
      browseAllTasks: 'Tingnan ang lahat ng gawain',
      mostUsefulGuides: 'Pinakamahalagang Gabay para sa Estudyante',
      mostUsefulGuidesSub: 'Praktikal na gabay na nagpapaliwanag ng mga patakaran at deadline.',
      viewAllGuides: 'Tingnan ang lahat ng gabay',
      toolsExplained: 'Paliwanag sa mga Portal ng UCI',
      toolsExplainedSub: 'Unawain ang WebReg, ZotAccount, ZotAid, at iba pang kailangang gamitin bawat quarter.',
      exploreAllTools: 'Tingnan ang 14 na tools',
      secretsAndTips: 'Mga Bagay na Madalas Hindi Alam ng Estudyante',
      secretsAndTipsSub: 'Libreng software, pagkain sa FRESH Hub, tahimik na study spots, at diskwento sa pamasahe.',
    },
    guide: {
      quickAnswer: 'Mabilisang Sagot',
      whatYouNeedToKnow: 'Mga kailangan mong malaman',
      whatToDo: 'Mga dapat gawin',
      whatToDoSub: 'Sundin ang mga numerong hakbang na ito para maayos ang iyong kailangan.',
      importantDeadlines: 'Mahahalagang Deadline',
      commonMisunderstandings: 'Karaniwang maling akala ng mga estudyante',
      officialSource: 'Opisyal na Tanggapan sa UCI',
      verifyWithUci: 'Kumpirmahin sa UCI',
      strictDeadline: 'Mahigpit na Deadline',
      relatedGuides: 'Kaugnay na mga Gabay sa everyUCI',
      sourceDepartment: 'Kagawaran ng Pinagmulan',
      lastVerified: 'Huling Na-verify',
      academicYear: 'Taon ng Pag-aaral',
      officialLink: 'Opisyal na Link sa UCI',
      shareGuide: 'Ibahagi ang Gabay',
      linkCopied: 'Nakopya ang Link!',
      saveGuide: 'I-save ang gabay',
      saved: 'Nai-save',
      reportOutdated: 'Mag-ulat ng lumang patakaran',
      readStepByStep: 'Basahin ang Hakbang-hakbang',
      browseAllGuides: 'Tingnan ang lahat ng gabay',
      myth: '❌ Maling Akala:',
      reality: '✓ Katotohanan:',
    },
    antTrail: {
      badge: 'Engine para sa Pagpaplano ng Kurso at Degree',
      title: 'Nagpaplano ng Degree? Subukan ang AntTrail.',
      subtitle: 'Ipinapaliwanag ng everyUCI ang mga patakaran; kinakalkula naman ng AntTrail ang iyong iskedyul bawat quarter at prerequisite trees para sa graduation.',
      button: 'Planuhin ang Degree sa AntTrail',
      prereqs: 'Interactive Prerequisite Trees',
      schedules: 'Iskedyul Bawat Quarter',
      offerings: 'Kasaysayan ng Pag-alok ng Kurso',
    },
    checklist: {
      badge: 'Bago sa UCI?',
      title: 'Checklist para sa Unang Linggo',
      subtitle: 'I-set up ang Wi-Fi, ZotCard ID, direktang deposito, at waiver sa insurance. Nai-save ang progreso sa iyong device.',
      progress: 'nakumpleto',
      reset: 'I-reset ang checklist',
    },
    disclaimer: {
      title: 'Opisyal na Paunawa:',
      text: 'Ang everyUCI ay isang malayang mapagkukunan ng impormasyon na ginawa ng mga mag-aaral at hindi kaanib o ineendorso ng University of California, Irvine (UCI). Maaaring magbago ang mga patakaran. Palaging suriin ang opisyal na website ng UCI.',
    },
  },

  // 8. JAPANESE (Rank #7: International exchange & Japanese community)
  ja: {
    nav: {
      home: 'ホーム',
      exploreGuides: 'ガイド一覧',
      iNeedTo: '手続き・用事...',
      uciTools: 'UCI ツール一覧',
      degreePlanning: '履修・学位計画',
      categories: 'カテゴリー',
      savedGuides: '保存済み',
      search: '検索...',
      searchShortcut: '⌘K',
      studentGuide: '学生ガイド',
    },
    hero: {
      badge: 'カリフォルニア大学アーバイン校 (UCI) 総合学生ガイド',
      updatedYear: '2026–27 年度対応',
      headline1: 'UCI 生活に必要な',
      headline2: 'すべての情報がここに。',
      subheadline:
        'UCI の各種手続きや情報は多数の部署やウェブサイトに分散しています。everyUCI は履修登録・ドロップ規定、学費納入期限、寮・アパート情報をシンプルで分かりやすいインターフェースに整理しました。',
      placeholder: 'UCI で何かお困りですか？（例：クラスのドロップ、学費、駐車場）',
      popularQuestions: 'よく検索される質問：',
      tailorPrompt: 'あなたの学生ステータスに合わせて情報を最適化：',
    },
    sections: {
      majorCategories: '主要カテゴリー',
      majorCategoriesSub: '分かりにくい行政用語を省き、テーマ別に整理された学生ガイドを閲覧できます。',
      viewAllCategories: '全 10 カテゴリーを見る',
      iNeedToHub: 'クイック手続きハブ',
      iNeedToHubSub: '今すぐ解決したい課題がありますか？分かりやすいステップ別ガイドへ直行。',
      browseAllTasks: 'すべてのタスクを見る',
      mostUsefulGuides: '最も役立つ学生ガイド',
      mostUsefulGuidesSub: '履修ポリシー、重要締め切り、具体的な手続き方法を詳しく解説。',
      viewAllGuides: '全ガイドを見る',
      toolsExplained: 'UCI 主要ポータル解説',
      toolsExplainedSub: 'WebReg、ZotAccount、ZotAid など毎クォーター利用するシステムの役割とアクセス方法。',
      exploreAllTools: '全 14 システムを確認する',
      secretsAndTips: '学生があまり知らない便利な特典と裏技',
      secretsAndTipsSub: '学費に含まれる無料ソフトウェア、FRESH フードパントリー、静かな自習スポット。',
    },
    guide: {
      quickAnswer: 'クイックアンサー（要約）',
      whatYouNeedToKnow: '知っておくべき重要ルール',
      whatToDo: '具体的な手順',
      whatToDoSub: '以下のステップに沿って順番に手続きを進めてください。',
      importantDeadlines: '重要締め切り',
      commonMisunderstandings: '学生が誤解しやすいポイント',
      officialSource: 'UCI 公式担当部署',
      verifyWithUci: 'UCI 公式情報で要確認',
      strictDeadline: '厳格な締め切り',
      relatedGuides: '関連ガイド',
      sourceDepartment: '情報元部署',
      lastVerified: '最終確認日',
      academicYear: '対象年度',
      officialLink: 'UCI 公式ウェブサイト',
      shareGuide: 'ガイドを共有',
      linkCopied: 'リンクをコピーしました！',
      saveGuide: '保存する',
      saved: '保存済み',
      reportOutdated: '情報の修正や提案を送信',
      readStepByStep: '手順ガイドを読む',
      browseAllGuides: 'すべてのガイドを一覧表示',
      myth: '❌ よくある誤解：',
      reality: '✓ 実際のルール：',
    },
    antTrail: {
      badge: '履修計画・卒業要件専用エンジン',
      title: '卒業と履修の計画をお考えですか？ AntTrail を活用しましょう。',
      subtitle: 'everyUCI は制度やルールを解説し、AntTrail はクォーターごとの履修スケジュール、前提科目ツリー、卒業ロードマップを自動計算します。',
      button: 'AntTrail で学位を計画する',
      prereqs: 'インタラクティブ前提科目ツリー',
      schedules: 'クォーター別時間割シミュレーション',
      offerings: '開講実績パターンの統計分析',
    },
    checklist: {
      badge: 'UCI 新入生の方へ',
      title: '第 1 週サバイバルチェックリスト',
      subtitle: 'Wi-Fi 設定、ZotCard 学生証、還付金振込口座、保険免除手続きをチェック。進捗はお使いのブラウザに保存されます。',
      progress: '完了',
      reset: 'リストをリセット',
    },
    disclaimer: {
      title: '公式免責事項：',
      text: 'everyUCI は学生によって運営される独立した情報リソースであり、カリフォルニア大学アーバイン校 (UCI) との提携や承認を受けたものではありません。規則や締め切りは変更される場合があります。重要な情報は必ず UCI 公式サイトおよび担当アドバイザーにご確認ください。',
    },
  },
};

export function getTranslation(lang: LanguageCode): TranslationDictionary {
  return TRANSLATIONS[lang] || TRANSLATIONS['en'];
}
