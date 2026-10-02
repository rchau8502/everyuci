import { LanguageCode } from '@/types/language';

export interface DeadlinesHubTranslations {
  badge: string;
  goldenRuleTitle: string;
  goldenRuleText: string;
  searchPlaceholder: string;
  termLabel: string;
  allQuarters: string;
  strictOnly: string;
  exportIcs: string;
  topicLabel: string;
  allTopics: string;
  showingCount: string;
  showingVerifiedDeadlines: string;
  resetFilters: string;
  noResultsTitle: string;
  noResultsText: string;
  strictBadge: string;
  recommendedBadge: string;
  consequenceLabel: string;
  officialPortal: string;
  googleCal: string;
  quarterFall: string;
  quarterWinter: string;
  quarterSpring: string;
}

export const DEADLINES_TRANSLATIONS: Record<LanguageCode, DeadlinesHubTranslations> = {
  // 1. ENGLISH (Default)
  en: {
    badge: 'Academic Year 2026–27 Schedule',
    goldenRuleTitle: 'UCI Golden Rule:',
    goldenRuleText:
      'Fee deadlines always cut off at 4:00 PM PST, and enrollment add/drop deadlines cut off at 5:00 PM PST on Fridays. Missing a fee deadline automatically drops every enrolled class on WebReg.',
    searchPlaceholder:
      'Search deadlines (e.g., fee payment, add/drop, FAFSA, commencement)...',
    termLabel: 'Term:',
    allQuarters: 'All Quarters',
    strictOnly: 'Strict Only',
    exportIcs: 'Export .ics',
    topicLabel: 'Topic:',
    allTopics: 'All Topics',
    showingCount: 'Showing',
    showingVerifiedDeadlines: 'verified UCI deadlines',
    resetFilters: 'Reset all filters',
    noResultsTitle: 'No deadlines match your current filters',
    noResultsText:
      'Try switching quarters, turning off "Strict Only", or clearing the search box.',
    strictBadge: 'Strict Cutoff',
    recommendedBadge: 'Recommended Target',
    consequenceLabel: 'Consequence if missed:',
    officialPortal: 'Official Portal',
    googleCal: 'Google Cal',
    quarterFall: 'Fall 2026',
    quarterWinter: 'Winter 2027',
    quarterSpring: 'Spring 2027',
  },

  // 2. SIMPLIFIED CHINESE (Rank #1 non-English)
  'zh-CN': {
    badge: '2026–27 学年官方校历日程',
    goldenRuleTitle: 'UCI 选课交费铁律：',
    goldenRuleText:
      '学费缴费截止严格为太平洋时间下午 4:00 (PST)；选课与退课截止严格为周五下午 5:00 (PST)。逾期未交学费系统将在 WebReg 上自动强制退掉你所有的已选课程！',
    searchPlaceholder:
      '搜索截止日期（如：学费缴费、退课、FAFSA、毕业典礼）...',
    termLabel: '学期季度：',
    allQuarters: '全部季度',
    strictOnly: '仅看严格死线',
    exportIcs: '导出日历 (.ics)',
    topicLabel: '所属主题：',
    allTopics: '全部主题',
    showingCount: '正在展示',
    showingVerifiedDeadlines: '条已核实的 UCI 关键截止日期',
    resetFilters: '重置全部筛选条件',
    noResultsTitle: '没有符合当前筛选条件的截止日期',
    noResultsText:
      '请尝试切换季度、关闭“仅看严格死线”或清空搜索框。',
    strictBadge: '严格截止死线',
    recommendedBadge: '建议完成节点',
    consequenceLabel: '逾期后果与惩罚：',
    officialPortal: '官方办事入口',
    googleCal: '加入谷歌日历',
    quarterFall: '2026 秋季学期',
    quarterWinter: '2027 冬季学期',
    quarterSpring: '2027 春季学期',
  },

  // 3. SPANISH (Rank #2: ~27% of students)
  es: {
    badge: 'Calendario Académico 2026–27',
    goldenRuleTitle: 'Regla de Oro de UCI:',
    goldenRuleText:
      'Los plazos de pago de matrícula vencen a las 4:00 PM PST, y los plazos para agregar/dar de baja clases vencen a las 5:00 PM PST los viernes. Si no pagas a tiempo, WebReg cancelará automáticamente todas tus materias.',
    searchPlaceholder:
      'Buscar fechas límites (ej. pago de matrícula, bajas, FAFSA, graduación)...',
    termLabel: 'Trimestre:',
    allQuarters: 'Todos los Trimestres',
    strictOnly: 'Solo Fechas Estrictas',
    exportIcs: 'Exportar .ics',
    topicLabel: 'Tema:',
    allTopics: 'Todos los Temas',
    showingCount: 'Mostrando',
    showingVerifiedDeadlines: 'fechas límites verificadas de UCI',
    resetFilters: 'Restablecer todos los filtros',
    noResultsTitle: 'No hay fechas que coincidan con tus filtros',
    noResultsText:
      'Intenta cambiar de trimestre, desactivar "Solo Fechas Estrictas" o borrar la búsqueda.',
    strictBadge: 'Límite Estricto',
    recommendedBadge: 'Fecha Sugerida',
    consequenceLabel: 'Consecuencia si se pasa la fecha:',
    officialPortal: 'Portal Oficial',
    googleCal: 'Google Calendar',
    quarterFall: 'Otoño 2026',
    quarterWinter: 'Invierno 2027',
    quarterSpring: 'Primavera 2027',
  },

  // 4. VIETNAMESE (Rank #3)
  vi: {
    badge: 'Lịch Học Vụ 2026–27',
    goldenRuleTitle: 'Quy Tắc Vàng Tại UCI:',
    goldenRuleText:
      'Hạn chót học phí luôn kết thúc lúc 4:00 PM PST, và hạn thêm/hủy môn học kết thúc lúc 5:00 PM PST vào thứ Sáu. Trễ hạn học phí sẽ khiến hệ thống WebReg tự động hủy toàn bộ các lớp đã đăng ký.',
    searchPlaceholder:
      'Tìm hạn chót (vd: học phí, đổi môn, FAFSA, lễ tốt nghiệp)...',
    termLabel: 'Học Kỳ:',
    allQuarters: 'Tất Cả Học Kỳ',
    strictOnly: 'Chỉ Hạn Chót Bắt Buộc',
    exportIcs: 'Xuất Lịch .ics',
    topicLabel: 'Chủ Đề:',
    allTopics: 'Tất Cả Chủ Đề',
    showingCount: 'Đang hiển thị',
    showingVerifiedDeadlines: 'hạn chót chính thức đã xác thực của UCI',
    resetFilters: 'Đặt lại tất cả bộ lọc',
    noResultsTitle: 'Không có hạn chót nào phù hợp',
    noResultsText:
      'Hãy thử đổi học kỳ, tắt "Chỉ Hạn Chót Bắt Buộc" hoặc xóa ô tìm kiếm.',
    strictBadge: 'Hạn Bắt Buộc',
    recommendedBadge: 'Mốc Khuyến Nghị',
    consequenceLabel: 'Hậu quả nếu bỏ lỡ:',
    officialPortal: 'Cổng Chính Thức',
    googleCal: 'Google Calendar',
    quarterFall: 'Mùa Thu 2026',
    quarterWinter: 'Mùa Đông 2027',
    quarterSpring: 'Mùa Xuân 2027',
  },

  // 5. KOREAN (Rank #4)
  ko: {
    badge: '2026–27 학사 일정 캘린더',
    goldenRuleTitle: 'UCI 필수 원칙:',
    goldenRuleText:
      '학비 납부 마감은 항상 태평양 표준시(PST) 오후 4:00에 마감되며, 수강 신청 및 취소 마감은 금요일 오후 5:00(PST)입니다. 등록금 납부 기한을 놓치면 WebReg에서 등록된 모든 과목이 자동 취소됩니다.',
    searchPlaceholder:
      '마감일 검색 (예: 학비 납부, 수강 취소, FAFSA, 졸업식)...',
    termLabel: '학기:',
    allQuarters: '전체 쿼터',
    strictOnly: '엄격한 마감일만',
    exportIcs: '캘린더 내보내기 (.ics)',
    topicLabel: '주제:',
    allTopics: '전체 주제',
    showingCount: '표시 중인 검증된 일정',
    showingVerifiedDeadlines: '개',
    resetFilters: '모든 필터 초기화',
    noResultsTitle: '일치하는 마감일이 없습니다',
    noResultsText:
      '학기를 변경하거나 "엄격한 마감일만"을 해제하거나 검색어를 지워보세요.',
    strictBadge: '엄격한 마감',
    recommendedBadge: '권장 마감',
    consequenceLabel: '기한 초과 시 불이익:',
    officialPortal: '공식 포털',
    googleCal: '구글 캘린더 추가',
    quarterFall: '2026 가을학기',
    quarterWinter: '2027 겨울학기',
    quarterSpring: '2027 봄학기',
  },

  // 6. TRADITIONAL CHINESE (Rank #5)
  'zh-TW': {
    badge: '2026–27 學年官方校曆時程',
    goldenRuleTitle: 'UCI 選課繳費鐵律：',
    goldenRuleText:
      '學雜費截止時間嚴格為太平洋時間下午 4:00 (PST)；加選與退選課截止時間嚴格為週五下午 5:00 (PST)。逾期未繳費者，WebReg 系統將自動強制退掉你所有的已選課程！',
    searchPlaceholder:
      '搜尋截止日期（如：學費繳費、退選、FAFSA、畢業典禮）...',
    termLabel: '學期季度：',
    allQuarters: '全部季度',
    strictOnly: '僅看嚴格截止日',
    exportIcs: '匯出日曆 (.ics)',
    topicLabel: '所屬主題：',
    allTopics: '全部主題',
    showingCount: '正在顯示',
    showingVerifiedDeadlines: '條已確認的 UCI 重要截止時程',
    resetFilters: '重設所有篩選條件',
    noResultsTitle: '沒有符合目前篩選條件的截止日期',
    noResultsText:
      '請嘗試切換學期、取消「僅看嚴格截止日」或清空搜尋框。',
    strictBadge: '嚴格截止時間',
    recommendedBadge: '建議完成時間',
    consequenceLabel: '逾期後果與處罰：',
    officialPortal: '官方服務入口',
    googleCal: '加入 Google 日曆',
    quarterFall: '2026 秋季學期',
    quarterWinter: '2027 冬季學期',
    quarterSpring: '2027 春季學期',
  },

  // 7. TAGALOG (Rank #6)
  tl: {
    badge: 'Iskedyul ng Taong Pang-akademiko 2026–27',
    goldenRuleTitle: 'Gintong Patakaran ng UCI:',
    goldenRuleText:
      'Ang mga bayarin ay palaging may takdang oras na 4:00 PM PST, at ang pagdagdag/pag-drop ng klase ay 5:00 PM PST tuwing Biyernes. Kapag hindi nakabayad sa oras, awtomatikong ida-drop ng WebReg ang lahat ng iyong klase.',
    searchPlaceholder:
      'Maghanap ng takdang araw (hal. bayad sa matrikula, add/drop, FAFSA)...',
    termLabel: 'Kuwarter:',
    allQuarters: 'Lahat ng Kuwarter',
    strictOnly: 'Mahigpit Lamang',
    exportIcs: 'I-export ang .ics',
    topicLabel: 'Paksa:',
    allTopics: 'Lahat ng Paksa',
    showingCount: 'Ipinapakita ang',
    showingVerifiedDeadlines: 'beripikadong takdang araw sa UCI',
    resetFilters: 'I-reset ang lahat ng filter',
    noResultsTitle: 'Walang takdang araw na tumutugma sa filter',
    noResultsText:
      'Subukang magpalit ng kuwarter o alisin ang "Mahigpit Lamang".',
    strictBadge: 'Mahigpit na Takda',
    recommendedBadge: 'Inirerekomendang Petsa',
    consequenceLabel: 'Kahit anong mangyayari kapag lumagpas:',
    officialPortal: 'Opisyal na Portal',
    googleCal: 'Google Calendar',
    quarterFall: 'Fall 2026',
    quarterWinter: 'Winter 2027',
    quarterSpring: 'Spring 2027',
  },

  // 8. JAPANESE (Rank #7)
  ja: {
    badge: '2026–27 年度 公式アカデミックカレンダー',
    goldenRuleTitle: 'UCI 履修・納入の鉄則：',
    goldenRuleText:
      '学費納入は米国太平洋時間午後 4:00 (PST)、履修登録・ドロップは金曜午後 5:00 (PST) に厳格に締め切られます。学費の支払期日を過ぎると、WebReg で登録した全科目が自動的に履修取消されます。',
    searchPlaceholder:
      '締切日を検索（学費納入、履修ドロップ、FAFSA、卒業式など）...',
    termLabel: '学期（クォーター）：',
    allQuarters: '全学期',
    strictOnly: '厳格な締切のみ',
    exportIcs: 'カレンダー出力 (.ics)',
    topicLabel: 'テーマ・分野：',
    allTopics: '全分野',
    showingCount: '表示中',
    showingVerifiedDeadlines: '件の確認済み UCI 重要日程',
    resetFilters: 'すべてのフィルターをリセット',
    noResultsTitle: '該当する締切が見つかりませんでした',
    noResultsText:
      'クォーターを変更するか、「厳格な締切のみ」を解除して再度お試しください。',
    strictBadge: '厳格な締切',
    recommendedBadge: '推奨目標日',
    consequenceLabel: '締切を逃した場合の影響：',
    officialPortal: '公式ポータル',
    googleCal: 'Google カレンダーに追加',
    quarterFall: '2026 年 秋学期 (Fall)',
    quarterWinter: '2027 年 冬学期 (Winter)',
    quarterSpring: '2027 年 春学期 (Spring)',
  },
};
