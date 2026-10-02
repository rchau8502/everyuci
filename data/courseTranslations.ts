import { LanguageCode } from '@/types/language';
import { LocalizedCourseContent } from '@/types/course';

export const COURSE_CONTENT_TRANSLATIONS: Record<
  string,
  Partial<Record<LanguageCode, LocalizedCourseContent>>
> = {
  // 1. ANTHRO 2A (Tom Douglas)
  'anthro-2a': {
    'zh-CN': {
      title: '社会文化人类学导论',
      whyTakeIt:
        '公认的 UCI 第一“水课”与 GPA 提分神课。Douglas 教授讲课极具幽默感，分享他在全球田野调查的奇闻趣事；小测全是开卷选择题，直接出自课件 PPT。',
      tipsForSuccess: [
        '强烈推荐抢 Douglas 教授的冬季或春季班。',
        '测验全部开卷，准备好平板或分屏打开 Lecture Slides 即可轻松拿满分。',
        '一门课同时满足 GE III（社科）和 GE VIII（国际视野），两项通识无压力到手。',
      ],
    },
    'zh-TW': {
      title: '社會文化人類學導論',
      whyTakeIt:
        '全校公認的第一「甜課」與 GPA 大補丸。Douglas 教授幽默風趣，分享他在世界各地的田野調查奇聞；小考皆為開卷選擇題，直接源自投影片。',
      tipsForSuccess: [
        '強烈建議選修 Douglas 教授開的冬季或春季班。',
        '考試完全開卷，第二螢幕打開課堂投影片即可輕鬆拿滿分。',
        '同時抵免 GE III（社會科學）與 GE VIII（國際視野），零壓力拿雙通識。',
      ],
    },
    es: {
      title: 'Introducción a la Antropología Sociocultural',
      whyTakeIt:
        'Ampliamente considerada la materia más fácil (GPA booster) de todo UC Irvine. El profesor Douglas cuenta anécdotas divertidísimas de sus investigaciones de campo y las evaluaciones son a libro abierto basadas en diapositivas.',
      tipsForSuccess: [
        'Inscríbela con el profesor Douglas en invierno o primavera si está disponible.',
        'Los exámenes son de opción múltiple a libro abierto; mantén las diapositivas abiertas en otra pantalla.',
        'Cumple dos requisitos a la vez: GE III (Ciencias Sociales) y GE VIII (Temas Globales) sin estrés.',
      ],
    },
    ko: {
      title: '사회문화인류학 개론',
      whyTakeIt:
        'UC Irvine에서 가장 유명한 전설의 꿀강(GPA 부스터). Douglas 교수님의 흥미진진한 현장 연구 썰과 오픈북 퀴즈 덕분에 수강생 만족도가 최상입니다.',
      tipsForSuccess: [
        '가능하다면 겨울이나 봄 쿼터에 Douglas 교수님 분반을 신청하세요.',
        '퀴즈는 오픈북 객관식입니다. 태블릿이나 듀얼 모니터에 강의 슬라이드를 띄워두세요.',
        'GE III(사회과학)와 GE VIII(글로벌 이슈) 두 영역을 동시에 충족합니다.',
      ],
    },
    vi: {
      title: 'Nhập Môn Nhân Học Xã Hội & Văn Hóa',
      whyTakeIt:
        'Môn gánh GPA nổi tiếng nhất toàn trường UCI. Thầy Douglas giảng bài cực kỳ lôi cuốn với nhiều câu chuyện thực địa hài hước; các bài kiểm tra đều mở tài liệu và bám sát slide.',
      tipsForSuccess: [
        'Nên đăng ký lớp thầy Douglas vào học kỳ Mùa Đông hoặc Mùa Xuân.',
        'Kiểm tra trắc nghiệm mở tài liệu; mở sẵn slide bài giảng trên màn hình phụ.',
        'Hoàn thành cùng lúc cả 2 yêu cầu GE III (Khoa học xã hội) và GE VIII (Quốc tế).',
      ],
    },
    ja: {
      title: '社会文化人類学入門',
      whyTakeIt:
        'UCI で最も有名な伝説の「楽単」（GPA ブースター）。Douglas 教授の講義はユーモアに溢れ、世界中でのフィールドワーク談が人気です。小テストはスライド持ち込み可のオープンノート形式。',
      tipsForSuccess: [
        '開講されていれば冬または春学期の Douglas 教授クラスを強く推奨。',
        'クイズはオープンノートの選択式。サブモニターやタブレットに講義スライドを開いておきましょう。',
        'GE III（社会科学）と GE VIII（国際課題）を同時に満たせます。',
      ],
    },
    tl: {
      title: 'Panimula sa Sosyokultural na Antropolohiya',
      whyTakeIt:
        'Kinikilalang pinakasikat na madaling klase (GPA booster) sa buong UC Irvine. Nakakatawa ang mga kwento ni Prof. Douglas mula sa kanyang fieldwork, at ang mga pagsusulit ay open-note.',
      tipsForSuccess: [
        'Kunin kay Prof. Douglas tuwing Winter o Spring quarter kung may slot.',
        'Open-note multiple choice ang mga pagsusulit; buksan ang lecture slides sa pangalawang screen.',
        'Pumupuno sa parehong GE III at GE VIII nang walang hirap.',
      ],
    },
  },

  // 2. DRAMA 30A (Donald Hill)
  'drama-30a': {
    'zh-CN': {
      title: '表演理论与实践 I',
      whyTakeIt:
        '完全没有期中期末笔试！上课内容是剧场游戏、即兴表演和与搭档合作的两段简短场景演出。是高压 STEM 和工程专业排解压力的首选神课。',
      tipsForSuccess: [
        '准时出勤并积极参与课堂游戏——出勤和参与分占总成绩的 80%。',
        '提前背熟与搭档合作的 2 分钟短剧台词。',
        '轻松满足 GE IV（艺术与人文）并稳拿 A 或 A+。',
      ],
    },
    'zh-TW': {
      title: '表演理論與實踐 I',
      whyTakeIt:
        '完全沒有期中或期末筆試！課堂皆為劇場遊戲、即興練習與短劇排練。對負擔沉重的理工科學生而言，是最棒的舒壓兼衝 GPA 首選。',
      tipsForSuccess: [
        '準時出席並熱情參與活動——出勤率佔總成績的 80%。',
        '提早背熟與夥伴演出的 2 分鐘短劇台詞。',
        '輕鬆抵免 GE IV（藝術與人文），穩拿 A 或 A+。',
      ],
    },
    es: {
      title: 'Teoría y Práctica de Actuación I',
      whyTakeIt:
        '¡Sin exámenes parciales ni finales escritos! Las clases consisten en juegos teatrales, ejercicios de improvisación y dos escenas cortas en pareja. Ideal para liberar el estrés de carreras STEM.',
      tipsForSuccess: [
        'Llega puntual y participa en las actividades grupales; la asistencia representa el 80% de la nota.',
        'Memoriza tus líneas breves con tu compañero con tiempo.',
        'Cumple con GE IV (Artes y Humanidades) con una A o A+ garantizada.',
      ],
    },
    ko: {
      title: '연기 이론과 실습 I',
      whyTakeIt:
        '지필 중간고사와 기말고사가 전혀 없습니다! 즉흥 연기 게임과 파트너와의 2분짜리 짧은 장면 연기로 진행되어 과중한 전공 과목 사이 최고의 힐링 과목입니다.',
      tipsForSuccess: [
        '시간 맞춰 출석하고 게임에 적극적으로 참여하세요 (출석률이 성적의 80%).',
        '파트너와 맞추는 짧은 대사를 미리 암기하세요.',
        'GE IV (인문예술) 학점을 수월하게 A/A+로 이수할 수 있습니다.',
      ],
    },
    vi: {
      title: 'Lý Thuyết & Thực Hành Diễn Xuất I',
      whyTakeIt:
        'Hoàn toàn không có thi giữa kỳ hay cuối kỳ bằng giấy! Lớp học bao gồm các trò chơi kịch vui nhộn và diễn hoạt cảnh ngắn với bạn cặp. Giúp giải tỏa căng thẳng tuyệt vời.',
      tipsForSuccess: [
        'Đi học đúng giờ và tích cực tham gia—điểm chuyên cần chiếm 80% tổng điểm.',
        'Học thuộc sớm các câu thoại ngắn cùng bạn diễn.',
        'Đạt điểm A/A+ dễ dàng cho yêu cầu GE IV (Nghệ thuật).',
      ],
    },
    ja: {
      title: '演技の理論と実践 I',
      whyTakeIt:
        '筆記の中間・期末試験が一切ありません！授業はシアターゲームや即興演技、ペアでの短い寸劇発表で構成され、理系科目のストレス解消に最適です。',
      tipsForSuccess: [
        '時間通りに出席してグループワークに参加すること（出席が成績の 80% を占めます）。',
        'ペアでの短いセリフは早めに暗記しましょう。',
        'GE IV（芸術・人文学）を確実に A/A+ で満たせます。',
      ],
    },
    tl: {
      title: 'Teorya at Praktika ng Pag-arte I',
      whyTakeIt:
        'Walang nakasulat na midterm o final exam! Puro mga laro sa teatro, improv exercises, at maikling eksena kasama ang kapareha. Pampatanggal ng stress mula sa STEM.',
      tipsForSuccess: [
        'Pumasok sa oras at makilahok—attendance ang 80% ng iyong grado.',
        'Kabisaduhin nang maaga ang 2 minutong linya kasama ang kapareha.',
        'Pumupuno sa GE IV (Sining at Humanidades) nang may A o A+.',
      ],
    },
  },

  // 3. DANCE 3 (Kelli Sharp)
  'dance-3': {
    'zh-CN': {
      title: '舞蹈健康与运动损伤预防',
      whyTakeIt:
        '非舞蹈专业的健康科学福音！全异步网课，满足 GE II（自然科技），内容教你如何拉伸、缓解久坐背痛与改善睡眠。给 A 率高达 92%。',
      tipsForSuccess: [
        '线上 Canvas 讨论板每周回复 2 位同学。',
        '每次开卷小测前快速浏览对应的简短文章。',
        '不需要任何舞蹈背景即可轻松拿 A。',
      ],
    },
    'zh-TW': {
      title: '舞蹈健康與運動傷害預防',
      whyTakeIt:
        '非舞蹈主修學生的福音！全非同步網課，抵免 GE II（自然科學），課程傳授如何伸展、舒緩久坐痠痛與改善睡眠。給 A 率高達 92%。',
      tipsForSuccess: [
        'Canvas 每週討論區按時回覆 2 位同學發言。',
        '開卷小考前快速瀏覽講義文章即可拿高分。',
        '零舞蹈基礎亦能輕鬆獲取高分。',
      ],
    },
    es: {
      title: 'Salud en la Danza y Prevención de Lesiones',
      whyTakeIt:
        '¡Un regalo para estudiantes no bailarines! 100% en línea y asincrónica, cumple con GE II (Ciencia y Tecnología). Enseña estiramientos ergonómicos y postura. 92% de A.',
      tipsForSuccess: [
        'Responde a dos compañeros en el foro de Canvas cada semana.',
        'Revisa brevemente las lecturas antes de cada cuestionario a libro abierto.',
        'No necesitas experiencia en danza para obtener una A.',
      ],
    },
    ko: {
      title: '무용 건강 및 부상 예방',
      whyTakeIt:
        '무용 전공자가 아니어도 수강 가능한 100% 비동기 온라인 강좌! GE II (과학기술)를 충족하며, 바른 자세와 스트레칭을 배웁니다. A 학점 비율 92%.',
      tipsForSuccess: [
        'Canvas 토론 게시판에 매주 학우 2명의 글에 댓글을 남기세요.',
        '오픈북 퀴즈 전 짧은 자료를 훑어보기만 해도 충분합니다.',
        '무용 경험이 전혀 없어도 쉽게 A를 받을 수 있습니다.',
      ],
    },
    vi: {
      title: 'Sức Khỏe Vũ Đạo & Phòng Tránh Chấn Thương',
      whyTakeIt:
        'Môn học tuyệt vời cho sinh viên không chuyên! Học trực tuyến 100% không đồng bộ, thỏa mãn GE II. Hướng dẫn cách giãn cơ và tư thế chuẩn. Tỷ lệ điểm A lên đến 92%.',
      tipsForSuccess: [
        'Trả lời bài viết của 2 bạn học trên diễn đàn Canvas mỗi tuần.',
        'Đọc lướt tài liệu trước bài kiểm tra mở.',
        'Không cần bất kỳ kỹ năng nhảy múa nào.',
      ],
    },
    ja: {
      title: 'ダンス医学と傷害予防',
      whyTakeIt:
        'ダンス経験不問の完全オンデマンド講義！GE II（自然科学・技術）を満たし、姿勢改善やストレッチ法を学べます。A評価率は圧巻の 92%。',
      tipsForSuccess: [
        'Canvas のディスカッションに毎週 2 名のクラスメイトへ返信すること。',
        '小テスト前に記事にざっと目を通しておくだけで満点が狙えます。',
        'ダンス経験ゼロでも安心して履修できます。',
      ],
    },
    tl: {
      title: 'Kalusugan sa Sayaw at Pag-iwas sa Pinsala',
      whyTakeIt:
        'Perpekto para sa mga hindi mananayaw! 100% online at async, pumupuno sa GE II. Nagtuturo ng stretching at ergonomics. 92% ang nakakakuha ng A.',
      tipsForSuccess: [
        'Sumagot sa dalawang kaklase sa Canvas discussion board linggu-linggo.',
        'Basahin sandali ang mga artikulo bago mag-quiz.',
        'Walang kailangang background sa sayaw para maka-A.',
      ],
    },
  },

  // 4. EARTHSS 1 (Gillian Ferguson)
  'earthss-1': {
    'zh-CN': {
      title: '物理环境概论',
      whyTakeIt:
        '文科与商科学生最爱的 GE II（自然科学）神课。Ferguson 教授给分极度宽容，考试全是多选题并提供详细的 Study Guide。',
      tipsForSuccess: [
        '期末前做完教授提供的 Review Sheet，考试 80% 题目高度相似。',
        '每周小测可尝试两次并自动取最高分。',
      ],
    },
    'zh-TW': {
      title: '物理環境概論',
      whyTakeIt:
        '文學院與商學院學生最喜愛的 GE II（自然科學）好課。Ferguson 教授給分極為寬鬆，考試皆為選擇題並提供詳盡的考前複習指南。',
      tipsForSuccess: [
        '考前務必熟做教授發佈的 Review Sheet，多數題目高度相似。',
        '每週小考可作答兩次並自動計取最高分。',
      ],
    },
    es: {
      title: 'Introducción al Medio Ambiente Físico',
      whyTakeIt:
        'La opción preferida de estudiantes de humanidades y negocios para el requisito GE II. La profesora Ferguson es muy accesible y los exámenes siguen fielmente la guía de estudio.',
      tipsForSuccess: [
        'Completa la guía de repaso antes de los exámenes; el 80% de las preguntas son muy parecidas.',
        'Los cuestionarios semanales permiten dos intentos y se toma la nota más alta.',
      ],
    },
    ko: {
      title: '물리적 환경 개론',
      whyTakeIt:
        '인문·사회·경영계열 학생들이 가장 선호하는 GE II (자연과학) 꿀강. Ferguson 교수님의 친절한 설명과 시험 전 완벽한 복습 가이드가 제공됩니다.',
      tipsForSuccess: [
        '시험 전 제공되는 Review Sheet를 꼭 풀어보세요. 시험 문제의 80%가 유사합니다.',
        '주간 퀴즈는 2회 응시 가능하며 가장 높은 점수가 반영됩니다.',
      ],
    },
    vi: {
      title: 'Nhập Môn Môi Trường Vật Lý',
      whyTakeIt:
        'Lựa chọn hàng đầu cho sinh viên ngành xã hội để lấy chứng chỉ GE II. Cô Ferguson chấm điểm rất thoáng và đề thi bám sát đề cương ôn tập.',
      tipsForSuccess: [
        'Hoàn thành bài tập ôn trước kỳ thi; 80% câu hỏi đều tương tự.',
        'Bài kiểm tra hàng tuần cho phép làm 2 lần và lấy điểm cao nhất.',
      ],
    },
    ja: {
      title: '地球物理環境論入門',
      whyTakeIt:
        '文系・ビジネス専攻生に大人気の GE II（自然科学）科目。Ferguson 教授はとても親切で、試験は配られたスタディガイドからそのまま出題されます。',
      tipsForSuccess: [
        '配布される復習シートを必ず解くこと。本番の問題と 80% 以上酷似しています。',
        '週間クイズは 2 回受験でき、高い方の点数が採用されます。',
      ],
    },
    tl: {
      title: 'Panimula sa Pisikal na Kapaligiran',
      whyTakeIt:
        'Paboritong GE II ng mga mag-aaral sa humanities at business. Napakabait ni Prof. Ferguson at sinusunod ng exam ang study guide.',
      tipsForSuccess: [
        'Gawin ang review sheet bago ang exam; halos 80% ng tanong ay kahawig.',
        'May dalawang subok ang bawat lingguhang quiz at ang pinakamataas ang kinukuha.',
      ],
    },
  },

  // 5. MUSIC 3 (Christopher Rodriguez)
  'music-3': {
    'zh-CN': {
      title: '音乐欣赏与经典导聆',
      whyTakeIt:
        '戴上耳机即可轻松拿 A！课上聆听爵士、古典与流行音乐，作业只需写几段简单的听后感，无技术性乐理负担。同时抵免 GE IV 和 GE VII。',
      tipsForSuccess: [
        '音乐会观后感只需按时提交即可拿满分。',
        'Discussion Section 讨论课参与即可轻松拿全平时分。',
      ],
    },
    'zh-TW': {
      title: '音樂欣賞與經典導聆',
      whyTakeIt:
        '戴上耳機輕鬆拿 A！課堂欣賞爵士、古典與當代流行音樂，作業僅需撰寫簡短心得，無艱澀樂理要求。同時抵免 GE IV 與 GE VII。',
      tipsForSuccess: [
        '音樂會聆賞心得只要如期繳交幾乎皆可獲滿分。',
        '小組討論課積極發言輕鬆拿滿平常分數。',
      ],
    },
    es: {
      title: 'Apreciación Musical',
      whyTakeIt:
        '¡Ponte los audífonos y asegura una A! Explora jazz, clásica y pop sin teoría musical complicada. Tareas basadas en reflexiones de escucha. Cumple GE IV y GE VII.',
      tipsForSuccess: [
        'Entrega el reporte del concierto a tiempo para asegurar puntos completos.',
        'Participa en la sección de discusión para asegurar la nota de asistencia.',
      ],
    },
    ko: {
      title: '음악의 이해와 감상',
      whyTakeIt:
        '이어폰만 끼고 음악을 들으며 A를 받을 수 있는 최고의 교양 과목! 재즈, 클래식, 팝을 감상하고 짧은 감상문을 작성합니다. GE IV와 GE VII을 동시 충족.',
      tipsForSuccess: [
        '음악회 감상문 과제를 기한 내에 제출하면 만점을 받습니다.',
        '토론 섹션(Discussion Section)에 참여해 참여 점수를 확보하세요.',
      ],
    },
    vi: {
      title: 'Thưởng Thức Âm Nhạc',
      whyTakeIt:
        'Đeo tai nghe và đạt điểm A nhẹ nhàng! Lắng nghe các thể loại jazz, cổ điển và pop mà không cần kiến thức nhạc lý phức tạp. Thỏa mãn cả GE IV và GE VII.',
      tipsForSuccess: [
        'Nộp bài cảm nhận buổi hòa nhạc đúng hạn để lấy trọn điểm.',
        'Tích cực tham gia thảo luận nhóm để lấy điểm chuyên cần.',
      ],
    },
    ja: {
      title: '音楽鑑賞と名曲入門',
      whyTakeIt:
        'イヤホンで音楽を聴くだけで A が取れる名物講義！ジャズ、クラシック、ポップスを鑑賞し、短い感想文を提出するだけで楽理の知識は不要です。GE IV と GE VII を同時に満たせます。',
      tipsForSuccess: [
        'コンサート鑑賞レポートを期日内に提出すればほぼ満点がもらえます。',
        'ディスカッションセクションに出席して平常点を確保しましょう。',
      ],
    },
    tl: {
      title: 'Pagpapahalaga sa Musika',
      whyTakeIt:
        'Makinig lang ng musika at kumuha ng A! Mag-aral ng jazz, classical, at pop nang walang kumplikadong music theory. Pumupuno sa GE IV at GE VII.',
      tipsForSuccess: [
        'Ipasa sa oras ang concert reflection para sa buong marka.',
        'Sumali sa discussion section para sa attendance points.',
      ],
    },
  },

  // 6. SOC SCI 1A (Kristen Monroe / Mark Petracca)
  'soc-sci-1a': {
    'zh-CN': {
      title: '社会科学原理与前沿导论',
      whyTakeIt:
        '大阶梯教室大通识课，涵盖心理、政治、社会学与经济学。Monroe 教授每学期邀请大咖嘉宾，考试给分曲线（Curve）极为友好。',
      tipsForSuccess: [
        '考前务必参加助教（TA）复习课，他们会直接划出核心考点。',
        '结伴制作理论家与核心概念的单词卡复习。',
      ],
    },
    'zh-TW': {
      title: '社會科學原理與前沿導論',
      whyTakeIt:
        '大型階梯教室通識課程，涵蓋心理學、政治學、社會學與經濟學。Monroe 教授每學期邀請重磅嘉賓演講，成績常有調分 (Curve)。',
      tipsForSuccess: [
        '考前務必參與助教複習講座，助教會直接點出重要命題方向。',
        '與同儕製作學者理論單字卡複習。',
      ],
    },
    es: {
      title: 'Principios de las Ciencias Sociales',
      whyTakeIt:
        'Clase magistral multitudinaria sobre psicología, política, sociología y economía. La profesora Monroe invita a ponentes destacados y las calificaciones tienen curva.',
      tipsForSuccess: [
        'Asiste a las sesiones de repaso de los asistentes de cátedra (TA) donde destacan los conceptos exactos del examen.',
        'Crea fichas de estudio con los teóricos clave mencionados en clase.',
      ],
    },
    ko: {
      title: '사회과학 원리 및 개론',
      whyTakeIt:
        '심리학, 정치학, 사회학, 경제학을 폭넓게 다루는 대형 강의. Monroe 교수님의 훌륭한 게스트 초청 강연과 넉넉한 커브(Curved grading)로 유명합니다.',
      tipsForSuccess: [
        '조교(TA)들이 진행하는 시험 대비 리뷰 세션에 꼭 참석하세요.',
        '강의에 언급된 핵심 학자들과 이론을 플래시카드로 정리해 암기하세요.',
      ],
    },
    vi: {
      title: 'Nguyên Lý Khoa Học Xã Hội',
      whyTakeIt:
        'Lớp giảng đường lớn bao quát tâm lý học, chính trị, xã hội học và kinh tế. Cô Monroe mời nhiều diễn giả uy tín và có cộng điểm curve rất tốt.',
      tipsForSuccess: [
        'Tham gia buổi ôn tập của trợ giảng (TA) để nắm chắc các câu hỏi thi.',
        'Học theo nhóm và làm flashcard các khái niệm lý thuyết cốt lõi.',
      ],
    },
    ja: {
      title: '社会科学の原理と基礎',
      whyTakeIt:
        '心理学・政治学・社会学・経済学を横断する大講義。Monroe 教授は著名なゲストスピーカーを招き、成績評価にも手厚いカーブ（調整）がかかります。',
      tipsForSuccess: [
        'TA が主催する試験直前復習セッションに出席し、出題ポイントを押さえましょう。',
        '授業で登場する主要な学者と理論をフラッシュカードで復習すると効果的です。',
      ],
    },
    tl: {
      title: 'Mga Simulain sa Agham Panlipunan',
      whyTakeIt:
        'Malaking lecture class na sumasaklaw sa sikolohiya, politika, sosyolohiya, at ekonomiks. May mga guest speakers at may curve ang grading.',
      tipsForSuccess: [
        'Pumunta sa TA review session bago ang exam para sa mahahalagang konsepto.',
        'Gumawa ng flashcards para sa mga pangunahing teorista.',
      ],
    },
  },

  // 7. BME 3 (Elizabeth Brodie)
  'bme-3': {
    'zh-CN': {
      title: '生物医学工程技术与疾病防护',
      whyTakeIt:
        '专为非工科生设立的生物医学工程通识！讲解起搏器、核磁共振与疫苗原理，完全不需要微积分或工程复杂公式。',
      tipsForSuccess: [
        '课上认真记录疾病案例研究与医疗仪器的日常应用。',
        '文科生满足 GE II（自然科技）的最轻松选择之一。',
      ],
    },
    'zh-TW': {
      title: '生物醫學工程技術與疾病防護',
      whyTakeIt:
        '專為非工學院學生設計的生物醫學工程通識！講解心律調節器、MRI 與疫苗運作原理，完全不需微積分或繁複工程算式。',
      tipsForSuccess: [
        '隨堂筆記記錄醫療儀器與臨床疾病案例即可。',
        '非理工科系抵免 GE II（自然科學）的最無負擔捷徑。',
      ],
    },
    es: {
      title: 'Tecnología y Enfermedades (BME)',
      whyTakeIt:
        '¡Un curso de ingeniería biomédica diseñado para estudiantes no ingenieros! Explica cómo funcionan los marcapasos y resonancias sin cálculo ni fórmulas pesadas.',
      tipsForSuccess: [
        'Toma notas sobre los estudios de caso de enfermedades y dispositivos médicos.',
        'Una de las formas más sencillas para estudiantes de humanidades de cumplir GE II.',
      ],
    },
    ko: {
      title: '기술과 질병 (생체의공학)',
      whyTakeIt:
        '비이공계 학생들을 위해 개설된 바이오메디컬 공학 강좌! 미적분이나 복잡한 물리 공식 없이 인공심장박동기, MRI 등의 원리를 쉽게 배웁니다.',
      tipsForSuccess: [
        '강의 중 다루는 질병 사례와 의료 기기 특징을 필기해 두세요.',
        '문과생이 GE II 과학 이수 요건을 채우기에 가장 완벽한 꿀강입니다.',
      ],
    },
    vi: {
      title: 'Công Nghệ & Bệnh Tật (Kỹ Thuật Y Sinh)',
      whyTakeIt:
        'Môn kỹ thuật y sinh thiết kế riêng cho sinh viên không chuyên! Tìm hiểu về máy trợ tim, máy MRI và vắc-xin mà không cần tính toán phức tạp.',
      tipsForSuccess: [
        'Ghi chép các ca bệnh thực tế và thiết bị y tế được trình chiếu trên lớp.',
        'Cách nhẹ nhàng nhất cho sinh viên ngành xã hội để hoàn thành GE II.',
      ],
    },
    ja: {
      title: '医用工学技術と疾病',
      whyTakeIt:
        '文系生のために特別設計された医用生体工学（BME）科目！微積分や難解な計算式を使わずにペースメーカーや MRI の仕組みを学べます。',
      tipsForSuccess: [
        '講義で紹介される疾患の事例と医療機器の用途をメモしておきましょう。',
        '非理系生が GE II（自然科学）を修得する最もおすすめのルートです。',
      ],
    },
    tl: {
      title: 'Teknolohiya at Sakit',
      whyTakeIt:
        'Biomedical engineering class na dinisenyo para sa non-engineers! Walang calculus o physics equations; pinapaliwanag ang pacemakers at MRI.',
      tipsForSuccess: [
        'Mag-take down notes sa medical devices at case studies sa lecture.',
        'Isa sa pinakamadaling paraan para sa GE II para sa non-STEM.',
      ],
    },
  },

  // 8. CHICANO 61 (Morales)
  'chicano-61': {
    'zh-CN': {
      title: '美国族裔体验与多元文化研究',
      whyTakeIt:
        '双通识提分神器！一门课同时拿到 GE IV（人文艺术）和 GE VII（多元文化）。教授热情风趣，考试开卷或为短文反思。',
      tipsForSuccess: [
        '按时提交每周的阅读反思小短文。',
        '上课积极参与讨论即可拿到满分平时分。',
      ],
    },
    'zh-TW': {
      title: '美國族裔經驗與多元文化研究',
      whyTakeIt:
        '雙通識衝分大補丸！一門課同時完成 GE IV（人文藝術）與 GE VII（多元文化）。教授風趣熱情，評分十分寬厚。',
      tipsForSuccess: [
        '準時繳交每週簡短閱讀心得筆記。',
        '課堂主動參與討論即可獲滿分出席分。',
      ],
    },
    es: {
      title: 'Estudios Étnicos y Multiculturales',
      whyTakeIt:
        '¡Doble requisito con gran calificación! Fomenta el análisis crítico mientras cumple GE IV y GE VII. Los profesores son muy cercanos y comprensivos.',
      tipsForSuccess: [
        'Entrega tus reflexiones de lectura semanales puntualmente.',
        'La participación en discusiones suma puntos esenciales para la A.',
      ],
    },
    ko: {
      title: '소수민족 문화와 미국 다문화 연구',
      whyTakeIt:
        'GE IV와 GE VII 두 영역을 한 번에 충족하는 알짜 교양! 교수님의 열정적인 강의와 에세이 피드백이 훌륭하며 학점 인심이 좋습니다.',
      tipsForSuccess: [
        '매주 짧은 리딩 감상문을 성실히 제출하세요.',
        '토론 수업에 한두 번만 적극적으로 발언해도 참여도 만점을 받습니다.',
      ],
    },
    vi: {
      title: 'Nghiên Cứu Đa Văn Hóa & Dân Tộc',
      whyTakeIt:
        'Môn học nhân đôi điểm GE! Thỏa mãn cả GE IV lẫn GE VII. Giảng viên cởi mở, đánh giá dựa trên các bài viết ngắn suy ngẫm.',
      tipsForSuccess: [
        'Nộp bài cảm nhận ngắn đúng hạn mỗi tuần.',
        'Tích cực đóng góp ý kiến trong giờ thảo luận.',
      ],
    },
    ja: {
      title: '米国の民族文化と多様性研究',
      whyTakeIt:
        'GE IV と GE VII を同時に修得できる効率抜群の科目！教授はとても親切で、成績評価は短い振り返りレポート中心です。',
      tipsForSuccess: [
        '毎週のリーディング所感レポートを期日通りに提出すること。',
        'ディスカッションで積極的に発言すると平常点が満点になります。',
      ],
    },
    tl: {
      title: 'Kulturang Etniko at Multicultural Studies',
      whyTakeIt:
        'Double GE booster! Pumupuno sa GE IV at GE VII nang sabay. Mabait ang mga propesor at maikling reflection papers lamang ang requirements.',
      tipsForSuccess: [
        'Ipasa sa oras ang lingguhang reading reflections.',
        'Makilahok sa talakayan sa klase para sa buong participation points.',
      ],
    },
  },

  // 9. PUBHLTH 1 (Bernadette Boden-Albala)
  'pubhlth-1': {
    'zh-CN': {
      title: '公共卫生科学原理导论',
      whyTakeIt:
        '医学预科与健康科学专业的启蒙好课，同时满足 GE II。涵盖流行病学与全球健康，讲义结构清晰，给 A 率达 85%。',
      tipsForSuccess: [
        '复习课件上的公共卫生术语定义与典型流行病案例。',
        '开卷在线小测验提前查阅讲义即可拿满分。',
      ],
    },
    'zh-TW': {
      title: '公共衛生科學原理導論',
      whyTakeIt:
        '醫預科與健康科學領域的極佳入門好課，同時抵免 GE II。涵蓋流行病學與全球公衛政策，投影片架構清晰，給 A 率約 85%。',
      tipsForSuccess: [
        '考前熟悉公衛專有名詞定義與經典案例。',
        '線上開卷小測驗善用投影片搜尋關鍵字即可拿滿分。',
      ],
    },
    es: {
      title: 'Principios de Salud Pública',
      whyTakeIt:
        'Excelente introducción para estudiantes de pre-medicina y ciencias de la salud que también cumple GE II. Diapositivas muy claras y 85% de notas A.',
      tipsForSuccess: [
        'Repasa las definiciones clave de epidemiología y estudios de caso.',
        'Los cuestionarios en línea a libro abierto son directos y accesibles.',
      ],
    },
    ko: {
      title: '공중보건학 원론',
      whyTakeIt:
        '프리메드 및 보건계열 지망생에게 필수 교양이자 GE II를 해결하는 명강의. 역학 조사 및 글로벌 보건 이슈를 다루며 A 학점 비율이 85%에 달합니다.',
      tipsForSuccess: [
        '강의 슬라이드에 나오는 주요 역학 용어와 공중보건 사례를 숙지하세요.',
        '온라인 오픈북 퀴즈는 슬라이드 검색을 활용하면 수월하게 만점을 받습니다.',
      ],
    },
    vi: {
      title: 'Nguyên Lý Y Tế Công Cộng',
      whyTakeIt:
        'Môn nhập môn tuyệt vời cho sinh viên định hướng ngành y tế, đồng thời đáp ứng GE II. Giáo trình rõ ràng với 85% tỷ lệ điểm A.',
      tipsForSuccess: [
        'Ôn tập các định nghĩa dịch tễ học và các ca nghiên cứu điển hình.',
        'Các bài kiểm tra trực tuyến mở tài liệu rất bám sát slide.',
      ],
    },
    ja: {
      title: '公衆衛生学の原理と基礎',
      whyTakeIt:
        '医学・保健分野を志す学生の入門に最適で、GE II を満たせます。疫学や国際保健を学び、スライドが整理されており A評価率は 85%。',
      tipsForSuccess: [
        'スライドに出てくる公衆衛生用語の定義と事例を整理しておくこと。',
        'オンラインのオープンノート小テストはスライド検索で満点が狙えます。',
      ],
    },
    tl: {
      title: 'Mga Simulain sa Public Health',
      whyTakeIt:
        'Magandang panimulang klase para sa pre-health na pumupuno rin sa GE II. Malinaw ang slides at 85% ang A rate.',
      tipsForSuccess: [
        'Alamin ang mga termino sa epidemiology at case studies.',
        'Madaling i-perfect ang online open-book quizzes gamit ang slides.',
      ],
    },
  },

  // 10. CS 45J (Alex Thornton)
  'cs-45j': {
    'zh-CN': {
      title: '面向对象编程与 Java 数据结构',
      whyTakeIt:
        'ICS 学院最值得上的核心编程课！Alex Thornton 教授是全校享誉盛名的王牌导师，代码讲义无比清晰，作业项目经过精心设计，对找软件开发实习帮助极大。',
      tipsForSuccess: [
        'Thornton 教授的作业尽早开始，务必认真阅读他的 Course Notes。',
        '即使遇到挫折，他的代码风格规范会让你的编程水平提升一个台阶。',
      ],
    },
    'zh-TW': {
      title: '物件導向程式設計與 Java 資料結構',
      whyTakeIt:
        'ICS 學院最值得修讀的核心神課！Alex Thornton 教授為全校知名的王牌名師，講義清晰透徹，專案作業設計精良，對求職與實習大有裨益。',
      tipsForSuccess: [
        '作業務必提早動工，並詳細閱讀教授精心編寫的 Course Notes。',
        '教授嚴謹的程式碼規範將大幅提升你的工程能力。',
      ],
    },
    es: {
      title: 'Programación Orientada a Objetos en Java',
      whyTakeIt:
        '¡La clase de programación imprescindible en ICS! El profesor Alex Thornton es una leyenda en el campus por sus notas impecables y proyectos que te preparan para pasantías de software.',
      tipsForSuccess: [
        'Comienza los proyectos temprano y lee a fondo sus notas del curso.',
        'Sus estándares de código te convertirán en un programador mucho más profesional.',
      ],
    },
    ko: {
      title: '객체 지향 프로그래밍 및 Java',
      whyTakeIt:
        'ICS 최고의 명강의! Alex Thornton 교수님의 강의 노트와 과제는 실무 소프트웨어 개발에 직접적인 도움이 되며, 학생들의 강의 평가가 압도적으로 높습니다.',
      tipsForSuccess: [
        '과제 분량이 있으므로 마감 최소 5일 전부터 코딩을 시작하세요.',
        '교수님의 공식 가이드라인과 엣지 케이스 테스트 코드를 반드시 정독하세요.',
      ],
    },
    vi: {
      title: 'Lập Trình Hướng Đối Tượng với Java',
      whyTakeIt:
        'Môn lập trình cốt lõi tuyệt vời nhất tại khoa ICS! Thầy Alex Thornton nổi tiếng toàn trường với giáo trình cực kỳ chi tiết và các dự án sát với thực tế đi làm.',
      tipsForSuccess: [
        'Bắt đầu bài tập lớn sớm và đọc kỹ Course Notes của thầy.',
        'Chuẩn mực viết code của thầy sẽ giúp nâng tầm kỹ năng lập trình của bạn.',
      ],
    },
    ja: {
      title: 'オブジェクト指向プログラミングと Java データ構造',
      whyTakeIt:
        'ICS 学部で最も受講価値の高いプログラミング講義！名物教授 Alex Thornton の講義ノートは非常に丁寧で、就活やインターンで即戦力となる力が身につきます。',
      tipsForSuccess: [
        '課題は締切の数日前から着手し、講義ノートを隅々まで確認すること。',
        '教授の洗練されたコーディング規約は一生の財産になります。',
      ],
    },
    tl: {
      title: 'Object-Oriented Programming sa Java',
      whyTakeIt:
        'Ang pinakamagandang klase sa ICS! Si Prof. Alex Thornton ay isang alamat sa campus dahil sa malinaw na notes at mga proyektong pang-industry.',
      tipsForSuccess: [
        'Simulan nang maaga ang mga project at basahin ang course notes.',
        'Malaki ang maitutulong ng code quality standards niya sa iyong resume.',
      ],
    },
  },

  // 11. IN4MATX 43 (Hadjimichael)
  'in4matx-43': {
    'zh-CN': {
      title: '软件工程导论与敏捷团队协作',
      whyTakeIt:
        'ICS 专业最受欢迎的基础课之一！模拟真实科技公司开发流程，学习 Git、敏捷开发与 Scrum 敏捷看板，考核主要为小组团队项目。',
      tipsForSuccess: [
        '在第一周挑选积极可靠的项目组员。',
        '每次敏捷 Sprint 迭代按时提交项目交付成果。',
      ],
    },
    'zh-TW': {
      title: '軟體工程導論與敏捷團隊協作',
      whyTakeIt:
        'ICS 領域極受好評的實作入門課程！模擬真實軟體公司團隊運作，實踐 Git、Scrum 敏捷開發，專案團隊合作評分佔比高。',
      tipsForSuccess: [
        '開學第一週主動尋找負責任的專案組員。',
        '落實每週 Sprint 成果進度回報確保高分。',
      ],
    },
    es: {
      title: 'Introducción a la Ingeniería de Software',
      whyTakeIt:
        '¡Aprende cómo trabajan los equipos de software reales! Cubre Git, metodologías ágiles (Scrum) y diseño colaborativo sin exámenes teóricos pesados.',
      tipsForSuccess: [
        'Forma un buen equipo desde la primera semana.',
        'Mantén actualizado el tablero de tareas de tu equipo para los entregables de cada sprint.',
      ],
    },
    ko: {
      title: '소프트웨어 공학 개론',
      whyTakeIt:
        '실제 IT 기업의 협업 방식을 배우는 인기 강좌! Git, 애자일(Agile), 스크럼(Scrum)을 팀 프로젝트로 직접 경험할 수 있습니다.',
      tipsForSuccess: [
        '첫 주에 성실하고 커뮤니케이션이 잘 되는 팀원을 구하세요.',
        '스프린트(Sprint) 마감 기한마다 프로젝트 진행 문서를 충실히 제출하세요.',
      ],
    },
    vi: {
      title: 'Nhập Môn Kỹ Thuật Phần Mềm',
      whyTakeIt:
        'Trải nghiệm quy trình phát triển phần mềm thực tế trong doanh nghiệp! Học về Git, Scrum và làm việc nhóm mà không lo thi cử lý thuyết nặng nề.',
      tipsForSuccess: [
        'Chọn đồng đội có tinh thần trách nhiệm ngay tuần đầu tiên.',
        'Hoàn thành đầy đủ báo cáo tiến độ theo từng sprint.',
      ],
    },
    ja: {
      title: 'ソフトウェア工学入門',
      whyTakeIt:
        '実際の IT 企業でのチーム開発手法を学ぶ人気講義！Git やアジャイル開発（Scrum）を体験し、筆記試験よりもチームプロジェクトが重視されます。',
      tipsForSuccess: [
        '第 1 週のうちに意欲的なチームメンバーを見つけましょう。',
        '各スプリントの提出物を期日通りに共有すること。',
      ],
    },
    tl: {
      title: 'Panimula sa Software Engineering',
      whyTakeIt:
        'Alamin kung paano nagtatrabaho ang mga tech company! Git, Agile, at Scrum teamwork projects nang walang nakakatakot na exams.',
      tipsForSuccess: [
        'Pumili ng maaasahang teammates sa unang linggo.',
        'Isumite ang deliverables sa bawat sprint deadline.',
      ],
    },
  },

  // 12. CS 121 (Cristina Lopes)
  'cs-121': {
    'zh-CN': {
      title: '信息检索与搜索引擎构建',
      whyTakeIt:
        '高年级 CS 最酷的实战课程之一！亲手用 Python 编写一个能够抓取全校网页的网络爬虫（Web Crawler）与搜索倒排索引引擎。',
      tipsForSuccess: [
        '与可靠搭档组队开发 Python 爬虫。',
        '测试阶段注意遵守网页的 robots.txt 抓取礼仪。',
      ],
    },
    'zh-TW': {
      title: '資訊檢索與搜尋引擎實作',
      whyTakeIt:
        '高年級資工系最熱門實戰課！親自運用 Python 開發爬蟲程式 (Crawler) 抓取校園網頁，並建構倒排索引搜尋引擎。',
      tipsForSuccess: [
        '尋找擅長 Python 的搭檔共同開發。',
        '爬蟲階段切記遵循 robots.txt 避免封鎖。',
      ],
    },
    es: {
      title: 'Recuperación de Información y Motores de Búsqueda',
      whyTakeIt:
        '¡Construye tu propio motor de búsqueda web en Python! Proyecto práctico donde creas un rastreador web (crawler) que indexa dominios de UCI.',
      tipsForSuccess: [
        'Elige un buen compañero de programación para los proyectos de rastreo.',
        'Verifica que tu rastreador respete las reglas de robots.txt durante las pruebas.',
      ],
    },
    ko: {
      title: '정보 검색 및 검색 엔진 구축',
      whyTakeIt:
        '컴퓨터과학 고학년 최고의 실전 프로젝트 과목! Python으로 웹 크롤러를 직접 개발하여 UCI 도메인을 색인화하는 포트폴리오를 만들 수 있습니다.',
      tipsForSuccess: [
        'Python 코딩에 능숙한 파트너와 2인 팀을 구성하세요.',
        '크롤링 테스트 시 robots.txt 규칙을 준수하는지 꼼꼼히 확인하세요.',
      ],
    },
    vi: {
      title: 'Truy Xuất Thông Tin & Công Cụ Tìm Kiếm',
      whyTakeIt:
        'Tự tay xây dựng công cụ tìm kiếm web bằng Python! Dự án thực chiến làm web crawler và lập chỉ mục cho các trang web trường UCI.',
      tipsForSuccess: [
        'Tìm bạn cặp lập trình Python ăn ý cho bài tập lớn.',
        'Đảm bảo crawler tuân thủ đúng quy tắc robots.txt khi thu thập dữ liệu.',
      ],
    },
    ja: {
      title: '情報検索と検索エンジン構築',
      whyTakeIt:
        'Python で自分だけの検索エンジンを作る実践的 CS 講義！UCI ドメインを巡回するクローラーとインデックス作成を体験できます。',
      tipsForSuccess: [
        '頼れるプログラミングパートナーとペアを組みましょう。',
        'クローラー実装時は robots.txt の規則遵守を徹底すること。',
      ],
    },
    tl: {
      title: 'Information Retrieval at Search Engines',
      whyTakeIt:
        'Gumawa ng sariling search engine gamit ang Python! Mag-crawl ng websites sa UCI at gumawa ng inverted index para sa portfolio.',
      tipsForSuccess: [
        'Pumili ng magaling na coding partner sa Python.',
        'Siguraduhing sumusunod ang crawler sa robots.txt.',
      ],
    },
  },

  // 13. IN4MATX 131 (Bill Tomlinson)
  'in4matx-131': {
    'zh-CN': {
      title: '人机交互界面与 UI/UX 体验设计',
      whyTakeIt:
        '无需硬核编程的高阶 CS 课程！课程核心是用 Figma 设计移动端或网页交互界面，非常适合对产品经理和产品设计感兴趣的同学。',
      tipsForSuccess: [
        '组建一个靠谱的团队共同完成 Figma 原型设计。',
        '按时参加每次小组评审（Critique）以获得满分设计反馈。',
      ],
    },
    'zh-TW': {
      title: '人機互動介面與 UI/UX 體驗設計',
      whyTakeIt:
        '無需高難度編程的高階資訊課程！核心為使用 Figma 設計現代手機 App 或網頁介面，非常適合未來想走產品經理 (PM) 與 UI/UX 設計的同學。',
      tipsForSuccess: [
        '組建認真負責的小組夥伴共同產出原型設計。',
        '積極參與課堂設計評估 (Critique) 以獲取完整分數。',
      ],
    },
    es: {
      title: 'Interacción Humano-Computadora y Diseño UI/UX',
      whyTakeIt:
        '¡Un curso avanzado de tecnología sin programación pesada! Aprende diseño de interfaces con Figma y pruebas de usabilidad, ideal para aspirantes a Product Managers y diseñadores.',
      tipsForSuccess: [
        'Elige un buen equipo para el proyecto final de Figma.',
        'Aprovecha las sesiones de retroalimentación de diseño en clase.',
      ],
    },
    ko: {
      title: '인간-컴퓨터 상호작용 및 UI/UX 디자인',
      whyTakeIt:
        '코딩 부담 없는 컴퓨터과학 고학년 추천 과목! Figma를 활용하여 모바일 앱과 웹 프로토타입을 제작하며, PM이나 디자이너 지망생에게 최적입니다.',
      tipsForSuccess: [
        '프로젝트를 함께할 성실한 팀원을 구하는 것이 중요합니다.',
        '수업 시간 디자인 피드백 세션에 적극적으로 참여하세요.',
      ],
    },
    vi: {
      title: 'Tương Tác Người - Máy & Thiết Kế UI/UX',
      whyTakeIt:
        'Môn chuyên ngành nâng cao không đòi hỏi viết code phức tạp! Học thiết kế giao diện trên Figma và kiểm thử người dùng, hoàn hảo cho định hướng Product Manager.',
      tipsForSuccess: [
        'Tìm nhóm bạn cùng làm việc ăn ý cho dự án Figma.',
        'Tận dụng các buổi nhận xét trên lớp để hoàn thiện điểm số.',
      ],
    },
    ja: {
      title: 'ヒューマンコンピュータインタラクションと UI/UX デザイン',
      whyTakeIt:
        '重いプログラミングなしで履修できる高学年向け人気科目！Figma を使って実践的なアプリ・Web 画面を設計し、プロダクトマネージャー志望に最適です。',
      tipsForSuccess: [
        'Figma プロジェクトを円滑に進めるため良いチームを組みましょう。',
        '授業内のデザイン講評（Critique）に積極的に参加すること。',
      ],
    },
    tl: {
      title: 'Human-Computer Interaction at UI/UX Design',
      whyTakeIt:
        'Upper-division tech class na walang mabigat na coding! Gumawa ng mga Figma prototype at usability tests para sa mobile apps.',
      tipsForSuccess: [
        'Pumili ng maaasahang grupo para sa final project.',
        'Makilahok sa mga critique session para sa buong puntos.',
      ],
    },
  },

  // 14. ICS 139W (Shannon Alfaro)
  'ics-139w': {
    'zh-CN': {
      title: '计算机技术专业高级学术写作 (Upper Writing)',
      whyTakeIt:
        'ICS 与数据科学专业高年级必修的高阶写作（GE Ib）毕业里程碑！Alfaro 教授评分标准极为清晰透明，手把手指导写求职简历与技术白皮书。',
      tipsForSuccess: [
        '每份草稿严格遵循教授提供的 Rubric 评分量规。',
        '同伴互评环节认真给出详实反馈以获得满分参与分。',
      ],
    },
    'zh-TW': {
      title: '資訊技術專業高階學術寫作 (Upper Writing)',
      whyTakeIt:
        'ICS 與資工系必修的高階寫作 (GE Ib) 畢業門檻！Alfaro 教授批改指引無比清晰，指導撰寫求職履歷與技術白皮書。',
      tipsForSuccess: [
        '草稿寫作嚴格對照教授頒布的評分量表 (Rubric)。',
        '同儕互評環節誠懇提出修訂意見以獲滿分參與點數。',
      ],
    },
    es: {
      title: 'Comunicación Crítica para Ciencias de la Computación (Upper Writing)',
      whyTakeIt:
        '¡El curso para cumplir la escritura avanzada (GE Ib) en carreras de tecnología! La profesora Alfaro enseña a redactar currículums técnicos y propuestas de ingeniería.',
      tipsForSuccess: [
        'Sigue al pie de la letra la rúbrica de calificación en cada borrador.',
        'Las revisiones de compañeros otorgan puntos fáciles si ofreces comentarios detallados.',
      ],
    },
    ko: {
      title: '컴퓨터 전문가를 위한 고급 작문 (Upper Writing)',
      whyTakeIt:
        'ICS 전공생의 졸업 필수 요건인 상급 작문(GE Ib)을 해결하는 최고의 강의! Alfaro 교수님의 채점 기준이 명확하며 이력서 및 기술 보고서 작성을 지도합니다.',
      tipsForSuccess: [
        '과제 제출 전 제공되는 루브릭(채점 기준표)을 반드시 항목별로 대조하세요.',
        '피어 리뷰(동료 평가)에서 성실하게 피드백을 작성해 참여 점수를 확보하세요.',
      ],
    },
    vi: {
      title: 'Giao Tiếp & Viết Chuyên Ngành Cho Khoa Học Máy Tính (Upper Writing)',
      whyTakeIt:
        'Môn viết nâng cao bắt buộc (GE Ib) cho sinh viên ngành CNTT! Cô Alfaro có barem điểm rõ ràng, hướng dẫn viết CV kỹ thuật và đề án phần mềm.',
      tipsForSuccess: [
        'Bám sát rubric chấm điểm trong từng bản nháp.',
        'Nhận xét kỹ cho bài của bạn học để lấy trọn điểm peer review.',
      ],
    },
    ja: {
      title: 'コンピュータ専門職のための上級ライティング (Upper Writing)',
      whyTakeIt:
        'ICS 学部の卒業必須要件である上級ライティング (GE Ib) をクリアするための決定版！Alfaro 教授のルーブリックは極めて明快で、技術仕様書や履歴書の書き方を学べます。',
      tipsForSuccess: [
        '下書き段階から採点基準（ルーブリック）を厳密にチェックすること。',
        'ピアレビューで建設的なフィードバックを記載し満点を目指しましょう。',
      ],
    },
    tl: {
      title: 'Teknikal na Pagsulat para sa Computer Science (Upper Writing)',
      whyTakeIt:
        'Pumupuno sa Upper-Division Writing (GE Ib) para sa ICS majors! Napakalinaw ng grading rubrics ni Prof. Alfaro para sa resume at technical proposals.',
      tipsForSuccess: [
        'Suriin ang grading rubric bago magpasa ng bawat draft.',
        'Magbigay ng detalyadong peer review feedback para sa participation points.',
      ],
    },
  },

  // 15. PSYCH 7A (John Hagedorn)
  'psych-7a': {
    'zh-CN': {
      title: '普通心理学导论',
      whyTakeIt:
        '全校规模最大也最受欢迎的通识心理学课程之一。Hagedorn 教授用海量生活实例讲解大脑、记忆与人类行为，考试有丰富加分机会（Extra Credit）。',
      tipsForSuccess: [
        '参加心理学实验（SONA 实验研究参与）拿满额外的 Extra Credit。',
        '考前集中刷 Quizlet 单词卡记忆经典心理学实验。',
      ],
    },
    'zh-TW': {
      title: '普通心理學導論',
      whyTakeIt:
        '全校規模最龐大且極受愛戴的心理學通識。Hagedorn 教授透過大量生活實例闡述大腦、記憶與社會行為，並提供豐富的加分機制 (Extra Credit)。',
      tipsForSuccess: [
        '參與心理學實驗受試 (SONA 研究) 輕鬆拿滿 Extra Credit 加分。',
        '考前利用 Quizlet 熟記經典心理學效應與實驗結論。',
      ],
    },
    es: {
      title: 'Introducción a la Psicología',
      whyTakeIt:
        'Uno de los cursos introductorios más populares del campus. El profesor Hagedorn es dinámico y ofrece créditos adicionales (extra credit) mediante estudios de investigación.',
      tipsForSuccess: [
        'Completa todas las horas de participación en experimentos SONA para obtener el crédito extra.',
        'Estudia los experimentos clásicos con tarjetas didácticas de Quizlet.',
      ],
    },
    ko: {
      title: '심리학 개론',
      whyTakeIt:
        '캠퍼스에서 가장 인기 있는 대형 교양 강좌. Hagedorn 교수님의 흥미진진한 뇌와 심리 실험 설명, 그리고 넉넉한 엑스트라 크레딧(추가 점수) 기회가 주어집니다.',
      tipsForSuccess: [
        '심리학 연구 실험 참여(SONA)를 완료하여 추가 학점을 100% 챙기세요.',
        'Quizlet 플래시카드로 유명 심리학 실험과 이론을 암기하세요.',
      ],
    },
    vi: {
      title: 'Nhập Môn Tâm Lý Học',
      whyTakeIt:
        'Một trong những môn đại cương đông vui và thú vị nhất trường. Thầy Hagedorn giảng dạy lôi cuốn và có rất nhiều cơ hội cộng điểm (extra credit) qua thí nghiệm nghiên cứu.',
      tipsForSuccess: [
        'Tham gia đủ số giờ nghiên cứu SONA để lấy trọn vẹn điểm cộng.',
        'Ôn các thí nghiệm kinh điển bằng flashcard trên Quizlet.',
      ],
    },
    ja: {
      title: '心理学概論',
      whyTakeIt:
        '学内トップクラスの人気を誇る心理学入門。Hagedorn 教授はユーモアを交えて脳や行動の不思議を解き明かし、実験参加による手厚いエクストラクレジット（加点）もあります。',
      tipsForSuccess: [
        'SONA 実験への参加枠を満たして加点を全額獲得しましょう。',
        'Quizlet で心理学の代表的実験と用語をまとめて暗記するのが近道です。',
      ],
    },
    tl: {
      title: 'Panimula sa Sikolohiya',
      whyTakeIt:
        'Isa sa pinakasikat na klase sa buong campus. Masigla si Prof. Hagedorn at nagbibigay ng extra credit sa pamamagitan ng research experiments.',
      tipsForSuccess: [
        'Kumpletuhin ang SONA research participation para sa buong extra credit.',
        'Gamitin ang Quizlet flashcards para sa mga sikat na psychology experiments.',
      ],
    },
  },

  // 16. SOC SCI 3A (Mark Petracca)
  'socsci-3a': {
    'zh-CN': {
      title: '计算机辅助社会科学研究与数据素养',
      whyTakeIt:
        '文科与社科生抵免定量分析（GE Va）的王牌神课！Petracca 教授幽默风趣，计算机实操作业指导极其详尽，给 A 率极高。',
      tipsForSuccess: [
        '在机房讨论课上当场完成实验练习。',
        '复习考前划重点讲义即可轻松通过期末考。',
      ],
    },
    'zh-TW': {
      title: '電腦輔助社會科學研究與數據素養',
      whyTakeIt:
        '文學院與社科生抵免定量分析 (GE Va) 的王牌好課！Petracca 教授風趣幽默，上機實作步驟詳盡清晰，拿 A 比率極高。',
      tipsForSuccess: [
        '在機房實驗課當場跟隨助教操作完成練習。',
        '考前詳讀複習指南即可輕鬆應付考試。',
      ],
    },
    es: {
      title: 'Computación en Ciencias Sociales',
      whyTakeIt:
        'La mejor alternativa para cumplir el requisito cuantitativo GE Va para estudiantes de ciencias sociales. El profesor Petracca es entretenido y las prácticas de laboratorio son guiadas paso a paso.',
      tipsForSuccess: [
        'Completa las tareas de laboratorio durante las sesiones guiadas.',
        'Estudia los conceptos de la guía de examen proporcionada.',
      ],
    },
    ko: {
      title: '사회과학 컴퓨터 분석 및 데이터 리터러시',
      whyTakeIt:
        '인문·사회 전공생이 수리 요건(GE Va)을 가장 편안하게 마칠 수 있는 강좌! Petracca 교수님의 유쾌한 강의와 친절한 실습 가이드 덕분에 A 취득률이 매우 높습니다.',
      tipsForSuccess: [
        '컴퓨터 실습 세션 중에 조교의 안내를 따라 그 자리에서 과제를 끝내세요.',
        '제공되는 핵심 요약본을 정독하면 시험을 쉽게 통과합니다.',
      ],
    },
    vi: {
      title: 'Ứng Dụng Máy Tính Trong Khoa Học Xã Hội',
      whyTakeIt:
        'Lựa chọn tối ưu để giải quyết yêu cầu GE Va cho khối ngành xã hội. Thầy Petracca giảng bài hóm hỉnh và các bài thực hành được hướng dẫn từng bước.',
      tipsForSuccess: [
        'Hoàn thành bài tập lab ngay trong giờ thực hành.',
        'Ôn tập theo đề cương tóm tắt trước kỳ thi.',
      ],
    },
    ja: {
      title: '社会科学のためのコンピュータデータ処理',
      whyTakeIt:
        '文系学生が定量的思考 (GE Va) を最も負担なく満たせる定番科目！Petracca 教授の語り口は軽妙で、PC 実習課題も丁寧なマニュアルがあり高評価率抜群です。',
      tipsForSuccess: [
        'PC 演習セッションの時間内に実習課題をすべて終わらせておくこと。',
        '配布される試験対策ガイドを復習すれば本番も安心です。',
      ],
    },
    tl: {
      title: 'Computer Applications sa Social Sciences',
      whyTakeIt:
        'Pinakamadaling paraan para sa GE Va para sa social science majors. Nakakatawa si Prof. Petracca at may step-by-step lab guides.',
      tipsForSuccess: [
        'Gawin ang lab assignments habang nasa discussion section.',
        'Reviewhin ang study guide bago ang exam.',
      ],
    },
  },

  // 17. CRIM 10 (Keramet Reiter / Turner)
  'crim-10': {
    'zh-CN': {
      title: '犯罪学、法学与社会正义导论',
      whyTakeIt:
        '全美排名前茅的 UCI 犯罪学王牌入门课！解析真实犯罪案件、刑罚制度与社会正义，满足 GE III，课程引人入胜如同追罪案纪录片。',
      tipsForSuccess: [
        '认真观看课上播放的纪录片案例分析。',
        '短篇反思论文提前交给写作中心润色。',
      ],
    },
    'zh-TW': {
      title: '犯罪學、法學與社會正義導論',
      whyTakeIt:
        '全美頂尖的 UCI 犯罪學名牌入門課！剖析真實刑案、矯正制度與司法正義，抵免 GE III，課堂精彩如同觀看犯罪紀錄片。',
      tipsForSuccess: [
        '課堂撥放的案例紀錄片是考試出題核心。',
        '期末論文可善用學校寫作中心 (Writing Center) 潤飾。',
      ],
    },
    es: {
      title: 'Introducción a la Criminología, Derecho y Sociedad',
      whyTakeIt:
        '¡El programa de criminología de UCI es de los mejores de EE.UU.! Analiza casos criminales reales y reforma penitenciaria. Cumple GE III de forma apasionante.',
      tipsForSuccess: [
        'Presta atención a los documentales y estudios de casos mostrados en clase.',
        'Lleva tus ensayos al Writing Center para asegurar la máxima calificación.',
      ],
    },
    ko: {
      title: '범죄학, 법과 사회 정의 개론',
      whyTakeIt:
        '미국 최고 수준을 자랑하는 UCI 범죄학과의 대표 교양 강좌! 실제 범죄 사건과 사법 제도를 다루며 다큐멘터리를 보듯 흥미롭게 GE III 학점을 취득할 수 있습니다.',
      tipsForSuccess: [
        '수업 중 다루는 다큐멘터리와 실제 사건 판례를 꼼꼼히 정리하세요.',
        '짧은 에세이는 교내 라이팅 센터(Writing Center)의 첨삭을 받으면 만점에 유리합니다.',
      ],
    },
    vi: {
      title: 'Nhập Môn Tội Phạm Học, Luật & Xã Hội',
      whyTakeIt:
        'Chương trình Criminology hàng đầu nước Mỹ tại UCI! Phân tích các vụ án có thật và hệ thống tư pháp, hoàn thành GE III với nội dung cuốn hút như xem phim tài liệu.',
      tipsForSuccess: [
        'Ghi nhớ các tình tiết trong các phim tài liệu được chiếu trên lớp.',
        'Đem bài luận ngắn đến Writing Center để được sửa bài chu đáo.',
      ],
    },
    ja: {
      title: '犯罪学・法と社会正義入門',
      whyTakeIt:
        '全米トップランクを誇る UCI 犯罪学学部の看板入門科目！実在の事件や刑事司法制度をドキュメンタリー感覚で楽しく学びながら GE III を満たせます。',
      tipsForSuccess: [
        '授業中に上映される事例ドキュメンタリーの内容をしっかり把握すること。',
        '小論文は学内のライティングセンターで添削してもらうと高得点に直結します。',
      ],
    },
    tl: {
      title: 'Panimula sa Kriminolohiya, Batas at Lipunan',
      whyTakeIt:
        'Nangungunang programa sa criminología sa buong bansa! Mag-aral ng real crime cases at justice system habang pumupuno sa GE III.',
      tipsForSuccess: [
        'Mag-take down notes sa mga documentaries na ipinapalabas sa klase.',
        'Dalhin ang maikling essay sa Writing Center bago ipasa.',
      ],
    },
  },

  // 18. MGMT 1 (Florian Ederer)
  'mgmt-1': {
    'zh-CN': {
      title: '管理学导论与商业领导力',
      whyTakeIt:
        '商学院最受好评的商业入门通识。剖析苹果、特斯拉等大厂商业模式，客座嘉宾多为硅谷高管与创业者，作业为实际商业案例分析。',
      tipsForSuccess: [
        '组建认真负责的小组完成商业计划展示。',
        '考前通读商业案例关键概念。',
      ],
    },
    'zh-TW': {
      title: '管理學導論與商業領導力',
      whyTakeIt:
        '商學院最富聲譽的入門通識課。深入探討蘋果、特斯拉等跨國企業商模，邀請業界高階主管演講，作業側重商業個案剖析。',
      tipsForSuccess: [
        '尋找積極可靠的組員一同準備商業提案簡報。',
        '考前熟讀商業個案之核心管理學概念。',
      ],
    },
    es: {
      title: 'Introducción a la Gestión y Negocios',
      whyTakeIt:
        'Excelente panorama del mundo empresarial en la escuela de negocios Merage. Analiza modelos de negocio de grandes empresas con conferencistas de la industria.',
      tipsForSuccess: [
        'Elige compañeros comprometidos para la presentación grupal de negocios.',
        'Revisa los conceptos clave de los estudios de casos antes del examen.',
      ],
    },
    ko: {
      title: '경영학 개론 및 리더십',
      whyTakeIt:
        'Merage 경영대학의 최고 인기 입문 과목. 글로벌 기업들의 비즈니스 모델을 분석하고 업계 리더들의 특강을 들으며 실무 감각을 익힙니다.',
      tipsForSuccess: [
        '팀 프로젝트 발표를 함께할 성실한 팀원을 구성하세요.',
        '시험 전 주요 기업 사례 연구의 핵심 용어를 꼼꼼히 복습하세요.',
      ],
    },
    vi: {
      title: 'Nhập Môn Quản Trị Kinh Doanh',
      whyTakeIt:
        'Tổng quan xuất sắc về thế giới kinh doanh từ trường Merage. Phân tích mô hình kinh doanh của các tập đoàn lớn với diễn giả khách mời uy tín.',
      tipsForSuccess: [
        'Lập nhóm làm việc nghiêm túc cho bài thuyết trình kế hoạch kinh doanh.',
        'Ôn kỹ các khái niệm cốt lõi qua các case study thực tế.',
      ],
    },
    ja: {
      title: 'マネジメントとビジネスリーダーシップ入門',
      whyTakeIt:
        'Merage ビジネススクール屈指の人気入門科目。Apple や Tesla などの実例を通じてビジネスモデルを学び、業界リーダーの特別講義も充実しています。',
      tipsForSuccess: [
        'ビジネスプランの発表に向けて意欲的なグループメンバーと組みましょう。',
      ],
    },
    tl: {
      title: 'Panimula sa Management at Negosyo',
      whyTakeIt:
        'Mahusay na panimula sa negosyo mula sa Merage School of Business. Sinusuri ang mga modelo ng negosyo ng malalaking kumpanya.',
      tipsForSuccess: [
        'Pumili ng masipag na grupo para sa business presentation.',
      ],
    },
  },

  // 19. ECON 20A (Vandana Aggarwal)
  'econ-20a': {
    'zh-CN': {
      title: '基础微观经济学原理',
      whyTakeIt:
        '商科与经济学前置核心课。Aggarwal 教授讲课极具条理，考试全是多选题且提供与真题极为相似的练习卷，给 A 率高达 84%。',
      tipsForSuccess: [
        '刷透教授给出的 Practice Midterm 模拟题。',
        '熟记供求曲线（Supply & Demand）平移方向。',
      ],
    },
    'zh-TW': {
      title: '基礎個體經濟學原理',
      whyTakeIt:
        '商學與經濟主修必修核心課。Aggarwal 教授條理清晰，考試全為選擇題且附帶仿真模擬練習題，給 A 率達 84%。',
      tipsForSuccess: [
        '完整刷過教授提供的 Practice Midterm 歷屆模擬題。',
        '搞懂供給與需求曲線 (Supply & Demand) 的平移法則。',
      ],
    },
    es: {
      title: 'Principios Básicos de Microeconomía',
      whyTakeIt:
        'Materia fundamental para carreras de negocios y economía. La profesora Aggarwal es muy organizada y sus exámenes de opción múltiple reflejan fielmente las prácticas.',
      tipsForSuccess: [
        'Resuelve los exámenes de práctica completos antes de cada parcial.',
        'Domina los desplazamientos de las curvas de oferta y demanda.',
      ],
    },
    ko: {
      title: '미시경제학 원론',
      whyTakeIt:
        '경영 및 경제 전공 필수 선수과목. Aggarwal 교수님의 강의는 체계적이며, 실제 시험과 거의 동일한 연습 문제를 제공하여 A 비율이 84%에 달합니다.',
      tipsForSuccess: [
        '교수님이 올려주시는 모의 중간고사(Practice Midterm)를 반드시 2회 이상 풀어보세요.',
        '수요와 공급 곡선의 이동 원리를 완벽히 숙지하세요.',
      ],
    },
    vi: {
      title: 'Nguyên Lý Kinh Tế Vi Mô',
      whyTakeIt:
        'Môn tiên quyết quan trọng cho ngành kinh doanh và kinh tế. Cô Aggarwal dạy cực kỳ bài bản và đề thi trắc nghiệm bám rất sát bài tập luyện tập.',
      tipsForSuccess: [
        'Làm kỹ toàn bộ các đề thi thử (Practice Midterms) của cô.',
        'Nắm vững quy tắc dịch chuyển đường cung và cầu.',
      ],
    },
    ja: {
      title: 'ミクロ経済学原論',
      whyTakeIt:
        'ビジネス・経済専攻の必須基礎科目。Aggarwal 教授の講義は非常に論理的で、本番そっくりの模擬試験が配布されるため A評価率は 84% を誇ります。',
      tipsForSuccess: [
        '配布される模擬中間試験（Practice Midterm）を完璧に解けるようにすること。',
        '需要と供給曲線のシフトの向きを確実に理解しましょう。',
      ],
    },
    tl: {
      title: 'Mga Simulain ng Microeconomics',
      whyTakeIt:
        'Pangunahing klase para sa business at economics. Maayos magturo si Prof. Aggarwal at kamukha ng practice exams ang totoong pagsusulit.',
      tipsForSuccess: [
        'Sagutan nang buo ang practice midterms bago mag-exam.',
        'Kabisaduhin ang shifts sa supply and demand curves.',
      ],
    },
  },

  // 20. BIO SCI 9A (Norma Aguilar-Roca)
  'biosci-9a': {
    'zh-CN': {
      title: '分子生物学与细胞生命机制',
      whyTakeIt:
        'BioSci 医预科新生的核心必修课。Aguilar-Roca 教授非常注重学生理解而非死记硬背，答疑极其耐心，提供海量辅导资源。',
      tipsForSuccess: [
        '积极参加 Peer Tutoring 免费学长同伴辅导辅导。',
        '认真完成教授课后发布的考前学习目标清单（Learning Objectives）。',
      ],
    },
    'zh-TW': {
      title: '分子生物學與細胞生命機制',
      whyTakeIt:
        '生科系與醫預科大一新生核心必修課。Aguilar-Roca 教授著重觀念理解而非死記硬背，耐心解答學生疑問，提供充沛的課業輔導資源。',
      tipsForSuccess: [
        '善用生科學院免費的 Peer Tutoring 課後輔導。',
        '對照每章節 Learning Objectives 逐一檢核重點概念。',
      ],
    },
    es: {
      title: 'Biología Celular y Molecular para Ciencias de la Salud',
      whyTakeIt:
        'Curso fundamental para estudiantes de Biología y Pre-Medicina. La profesora Aguilar-Roca se enfoca en el razonamiento conceptual y ofrece gran apoyo en tutorías.',
      tipsForSuccess: [
        'Aprovecha las sesiones gratuitas de tutoría entre pares (Peer Tutoring).',
        'Estudia basándote en los objetivos de aprendizaje de cada unidad.',
      ],
    },
    ko: {
      title: '세포 및 분자생물학 (BioSci 핵심)',
      whyTakeIt:
        '생명과학 및 프리메드 1학년 핵심 필수 과목. Aguilar-Roca 교수님은 단순 암기가 아닌 개념적 추론을 중시하며 매우 친절하게 학생들을 돕습니다.',
      tipsForSuccess: [
        '생명과학대학에서 제공하는 무료 피어 튜터링(Peer Tutoring)을 적극 활용하세요.',
        '교수님이 공지하는 학습 목표(Learning Objectives)를 가이드 삼아 복습하세요.',
      ],
    },
    vi: {
      title: 'Sinh Học Phân Tử & Tế Bào',
      whyTakeIt:
        'Môn bắt buộc nền tảng cho sinh viên khối ngành Sinh học và Y khoa. Cô Aguilar-Roca chú trọng hiểu sâu bản chất và hỗ trợ sinh viên rất tận tình.',
      tipsForSuccess: [
        'Tận dụng các buổi phụ đạo miễn phí từ sinh viên khóa trên (Peer Tutoring).',
        'Ôn tập theo đúng bảng mục tiêu học tập (Learning Objectives) của từng bài.',
      ],
    },
    ja: {
      title: '細胞・分子生物学基礎',
      whyTakeIt:
        '生物科学部・プレメド新入生の必須基礎科目。Aguilar-Roca 教授は暗記より論理的理解を重視し、オフィスアワーやチューター体制も極めて手厚いです。',
      tipsForSuccess: [
        '学部主催の無料ピアチュータリング（先輩による個別指導）を活用すること。',
        '単元ごとの学習目標（Learning Objectives）に沿って理解度を確認しましょう。',
      ],
    },
    tl: {
      title: 'Cell and Molecular Biology',
      whyTakeIt:
        'Core class para sa BioSci at Pre-Med freshmen. Nakatuon si Prof. Aguilar-Roca sa pag-unawa kaysa sa pagsasaulo lamang.',
      tipsForSuccess: [
        'Pumunta sa libreng Peer Tutoring sessions ng BioSci.',
        'Mag-aral gamit ang Learning Objectives para sa bawat unit.',
      ],
    },
  },

  // 21. BIO SCI 99 (Pavan Kadandale)
  'biosci-99': {
    'zh-CN': {
      title: '高阶分子生物学核心 (Molecular Biology)',
      whyTakeIt:
        '被誉为 UCI 最具启发性的生物学神课之一！Kadandale 教授倡导以科学推理为核心，考试注重实验设计与数据分析，全面提升科研素养。',
      tipsForSuccess: [
        '彻底放弃死记硬背，专注于练习“如果敲除某个基因会发生什么”等逻辑推断题。',
        '积极参加 Kadandale 教授的 Office Hours 交流实验逻辑。',
      ],
    },
    'zh-TW': {
      title: '高階分子生物學核心 (Molecular Biology)',
      whyTakeIt:
        '公認為 UCI 最啟發思維的生物學名課之一！Kadandale 教授強調科學邏輯推論，考題注重實驗設計與圖表數據判讀，大幅提升科研思維。',
      tipsForSuccess: [
        '揚棄死背教科書，專注於演練假設檢定與基因剔除之邏輯推論。',
        '主動參加教授 Office Hours 討論實驗設計邏輯。',
      ],
    },
    es: {
      title: 'Biología Molecular Avanzada',
      whyTakeIt:
        '¡Uno de los cursos más formativos e inspiradores de UCI! El profesor Kadandale enfatiza el razonamiento científico y el análisis de experimentos reales sobre la memorización.',
      tipsForSuccess: [
        'Enfócate en la lógica experimental: practica preguntas de "¿qué sucede si se muta este gen?".',
        'Asiste a sus horas de oficina para perfeccionar tu razonamiento científico.',
      ],
    },
    ko: {
      title: '고급 분자생물학 (Bio Sci 99)',
      whyTakeIt:
        'UCI 생명과학 최고의 명품 강의! Kadandale 교수님은 암기식 학습을 배격하고 실제 논문 데이터 분석과 실험 설계를 통해 진짜 과학적 사고력을 길러줍니다.',
      tipsForSuccess: [
        '단순 암기 대신 "특정 유전자를 억제했을 때 어떤 결과가 나오는가" 식의 실험 추론 연습에 집중하세요.',
        '교수님의 오피스 아워에서 논리 전개 과정을 직접 점검받으세요.',
      ],
    },
    vi: {
      title: 'Sinh Học Phân Tử Nâng Cao',
      whyTakeIt:
        'Một trong những môn học truyền cảm hứng nhất tại UCI! Thầy Kadandale rèn luyện tư duy phản biện khoa học và kỹ năng phân tích số liệu thực nghiệm.',
      tipsForSuccess: [
        'Tập trung vào phân tích giả thuyết và thiết kế thí nghiệm thay vì học vẹt.',
        'Gặp thầy trong giờ Office Hours để làm sáng tỏ cách lập luận khoa học.',
      ],
    },
    ja: {
      title: '上級分子生物学',
      whyTakeIt:
        'UCI で最も知的好奇心を刺激される名講義！Kadandale 教授は暗記を排し、実際の論文データ解析と実験デザインを通じて本物の科学的思考力を鍛えてくれます。',
      tipsForSuccess: [
        '暗記ではなく「特定の遺伝子を変異させた場合何が起きるか」という論理推論の演習を重ねること。',
        'オフィスアワーで教授と直接ディスカッションするのが合格への最短ルートです。',
      ],
    },
    tl: {
      title: 'Advanced Molecular Biology',
      whyTakeIt:
        'Isa sa pinakamagandang klase sa BioSci! Binibigyang-diin ni Prof. Kadandale ang scientific reasoning at data analysis kaysa sa rote memorization.',
      tipsForSuccess: [
        'Mag-focus sa experimental logic kaysa sa pagsasaulo ng mga facts.',
        'Pumunta sa Office Hours para maunawaan ang scientific reasoning.',
      ],
    },
  },

  // 22. PHYSICS 20B (Xun Bian)
  'physics-20b': {
    'zh-CN': {
      title: '宇宙学基础：从大爆炸到黑洞',
      whyTakeIt:
        '无数学公式负担的宇宙天文科普神课！讲授黑洞、引力波、多重宇宙与宇宙膨胀，满足工学院和通识 GE II 要求，给 A 率达 82%。',
      tipsForSuccess: [
        '作业全部为在线开卷多选题，认真阅读课后天文图文总结即可轻松完成。',
        '考试复习聚焦概念性天体物理现象（如红移、事件视界）。',
      ],
    },
    'zh-TW': {
      title: '宇宙學基礎：從大爆炸到黑洞',
      whyTakeIt:
        '無艱深數學算式的宇宙天文科普好課！深入淺出介紹黑洞、重力波與宇宙膨脹，輕鬆滿足 GE II 自然科學，給 A 率達 82%。',
      tipsForSuccess: [
        '線上作業皆為開卷選擇題，圖文教材淺顯易懂。',
        '考前掌握核心概念（例如：紅移、事象地平面）即可拿高分。',
      ],
    },
    es: {
      title: 'Cosmología: Del Big Bang a los Agujeros Negros',
      whyTakeIt:
        '¡Aprende sobre el universo sin matemáticas complicadas! Explora agujeros negros, ondas gravitacionales y la expansión cósmica. Cumple GE II con 82% de notas A.',
      tipsForSuccess: [
        'Las tareas en línea son a libro abierto y basadas en lecturas conceptuales.',
        'Enfócate en conceptos visuales como el horizonte de sucesos y el corrimiento al rojo.',
      ],
    },
    ko: {
      title: '우주론: 빅뱅에서 블랙홀까지',
      whyTakeIt:
        '복잡한 수식 없이 즐기는 천문학 꿀강! 블랙홀, 중력파, 우주 팽창을 흥미진진하게 배우며 GE II 과학 요건을 쉽게 해결합니다. A 학점 비율 82%.',
      tipsForSuccess: [
        '온라인 과제는 오픈북 객관식으로 교재 요약본만 봐도 쉽게 풀립니다.',
        '사건의 지평선, 적색편이 등 핵심 천문학 개념의 정의를 숙지하세요.',
      ],
    },
    vi: {
      title: 'Vũ Trụ Học: Từ Vụ Nổ Big Bang Đến Hố Đen',
      whyTakeIt:
        'Khám phá vũ trụ mà không cần tính toán phức tạp! Tìm hiểu về hố đen, sóng hấp dẫn và sự giãn nở vũ trụ. Đáp ứng GE II với 82% điểm A.',
      tipsForSuccess: [
        'Bài tập online mở tài liệu và bám sát tranh ảnh minh họa trong bài giảng.',
        'Nắm chắc các khái niệm hiện tượng thiên văn cơ bản.',
      ],
    },
    ja: {
      title: '宇宙論入門：ビッグバンからブラックホールまで',
      whyTakeIt:
        '難しい数式なしで学べる大人気天文学講義！ブラックホール、重力波、宇宙膨張のロマンを楽しみながら GE II を満たせます。A評価率 82%。',
      tipsForSuccess: [
        'オンライン課題はオープンノート形式で、資料を読めば確実に満点が取れます。',
        '事象の地平面や赤方偏移などの基本概念を整理しておきましょう。',
      ],
    },
    tl: {
      title: 'Cosmology: From Big Bang to Black Holes',
      whyTakeIt:
        'Matuto tungkol sa kalawakan nang walang math! Black holes, gravitational waves, at cosmic expansion. 82% ang nakakakuha ng A.',
      tipsForSuccess: [
        'Open-book ang online homework base sa readings.',
        'Alamin ang mga konseptong tulad ng event horizon at redshift.',
      ],
    },
  },

  // 23. ENGR 7A (James Earthman)
  'engr-7a': {
    'zh-CN': {
      title: '工程实践导论与团队创新设计',
      whyTakeIt:
        '工学院大一新生的梦幻启蒙课！四人组队动手组装智能机器人或微型自动巡线车，上课氛围欢乐，免除传统死记硬背考试。',
      tipsForSuccess: [
        '挑选动手能力强且沟通良好的团队伙伴。',
        '在学期末机器人竞赛测试中按部就班调试传感器与代码。',
      ],
    },
    'zh-TW': {
      title: '工程實踐導論與團隊創新設計',
      whyTakeIt:
        '工學院大一新生的夢幻專案課！四人一組親手組裝智慧機器人或微型循跡自走車，免除死背死記的考試壓力。',
      tipsForSuccess: [
        '尋找擅長動手組裝與溝通協作的夥伴。',
        '期末機器人競賽展示前務必充分校正感測器與控制程式。',
      ],
    },
    es: {
      title: 'Introducción a la Ingeniería y Diseño en Equipo',
      whyTakeIt:
        '¡Un curso práctico y divertido para novatos de ingeniería! Diseña y ensambla un robot autónomo en equipo de cuatro sin exámenes tradicionales aburridos.',
      tipsForSuccess: [
        'Forma un equipo equilibrado en programación y ensamblaje mecánico.',
        'Prueba tus sensores con anticipación antes de la competencia final.',
      ],
    },
    ko: {
      title: '공학 입문 및 팀 혁신 디자인',
      whyTakeIt:
        '공과대학 신입생을 위한 최고의 실습 프로젝트 강좌! 4인 1조로 자율주행 로봇을 직접 조립하고 경진대회에 참여하며 전통적인 지필고사 부담이 없습니다.',
      tipsForSuccess: [
        '성실하고 조립이나 코딩에 열정 있는 팀원을 구하세요.',
        '학기 말 로봇 경진대회 전 센서 보정(Calibration)을 미리 완료하세요.',
      ],
    },
    vi: {
      title: 'Nhập Môn Kỹ Thuật & Thiết Kế Nhóm Sáng Tạo',
      whyTakeIt:
        'Môn học thực hành thú vị cho tân sinh viên ngành kỹ thuật! Chế tạo robot tự hành theo nhóm 4 người mà không phải chịu áp lực thi cử lý thuyết.',
      tipsForSuccess: [
        'Chọn các bạn cùng nhóm có kỹ năng thực hành và giao tiếp tốt.',
        'Chạy thử và hiệu chỉnh cảm biến thật kỹ trước ngày thi đấu robot cuối kỳ.',
      ],
    },
    ja: {
      title: 'エンジニアリング入門とチーム協調デザイン',
      whyTakeIt:
        '工学部新入生のための実践型ものづくり科目！4 人チームで自律走行ロボットを組み立てて競技会に挑みます。退屈な暗記試験はありません。',
      tipsForSuccess: [
        'プログラミングや工作が得意な熱心なチームメイトを集めましょう。',
        '学期末のコンペ前にセンサーの動作確認とキャリブレーションを済ませておくこと。',
      ],
    },
    tl: {
      title: 'Panimula sa Engineering at Team Design',
      whyTakeIt:
        'Hands-on robotics project class para sa engineering freshmen! Gumawa ng autonomous robot kasama ang 4 na miyembro nang walang nakakasawang exam.',
      tipsForSuccess: [
        'Pumili ng mga masisipag na kaklase na marunong mag-coding at mag-assemble.',
        'I-test nang maaga ang sensors bago ang final robot competition.',
      ],
    },
  },

  // 24. STATS 7 (Armstrong)
  'stats-7': {
    'zh-CN': {
      title: '应用统计学导论',
      whyTakeIt:
        '满足定量分析 (GE Va) 的王牌好课。Armstrong 教授讲课极具耐心，公式卡可带入考场，作业允许无限次重试直到满分。',
      tipsForSuccess: [
        '充分利用 Canvas 作业的无限制尝试次数拿到全部平时分。',
        '制作好考试允许携带的 Cheat Sheet 公式纸。',
      ],
    },
    'zh-TW': {
      title: '應用統計學導論',
      whyTakeIt:
        '滿足定量分析 (GE Va) 的熱門好課。Armstrong 教授教學極富耐心，考試允許攜帶大抄公式紙，作業可多次重測直至滿分。',
      tipsForSuccess: [
        '善用作業的多次作答機制確保拿滿平時分數。',
        '考前精簡整理 Cheat Sheet 必備公式與題型。',
      ],
    },
    es: {
      title: 'Introducción a la Estadística Aplicada',
      whyTakeIt:
        'La mejor opción para el requisito cuantitativo GE Va. El profesor Armstrong explica con gran claridad, permite hojas de fórmulas en los exámenes y las tareas tienen intentos ilimitados.',
      tipsForSuccess: [
        'Aprovecha los intentos ilimitados en Canvas para asegurar el 100% en tareas.',
        'Prepara cuidadosamente tu hoja de fórmulas (cheat sheet) para el examen.',
      ],
    },
    ko: {
      title: '응용통계학 개론',
      whyTakeIt:
        '수리적 사고 (GE Va)를 완벽하게 해결해 주는 과목. Armstrong 교수님의 친절한 설명과 시험 때 치트시트(공식 정리 종이) 지참 허용으로 부담이 적습니다.',
      tipsForSuccess: [
        'Canvas 과제는 만점을 받을 때까지 반복 제출이 가능합니다.',
        '시험에 지참할 치트시트에 주요 공식과 풀이 과정을 꼼꼼히 적어가세요.',
      ],
    },
    vi: {
      title: 'Nhập Môn Thống Kê Ứng Dụng',
      whyTakeIt:
        'Lựa chọn hàng đầu cho yêu cầu định lượng GE Va. Thầy Armstrong dạy rất dễ hiểu, cho phép mang giấy công thức vào phòng thi và bài tập được làm lại nhiều lần.',
      tipsForSuccess: [
        'Tận dụng việc làm lại bài tập trên Canvas để đạt tối đa điểm thường kỳ.',
        'Chuẩn bị kỹ tờ công thức được phép mang vào phòng thi.',
      ],
    },
    ja: {
      title: '応用統計学入門',
      whyTakeIt:
        '定量的思考 (GE Va) をクリアするための決定版。Armstrong 教授の指導は非常に丁寧で、テストには公式チートシートの持ち込みが許可されています。',
      tipsForSuccess: [
        '課題は満点を取るまで何度でも再提出できます。',
        '持ち込み可能な公式シートに見本問題と公式を綺麗にまとめておきましょう。',
      ],
    },
    tl: {
      title: 'Panimula sa Applied Statistics',
      whyTakeIt:
        'Pinakamagandang klase para sa GE Va. Napakalinaw magpaliwanag ni Prof. Armstrong, pinapayagan ang formula cheat sheet sa exam, at unlimited attempts sa homework.',
      tipsForSuccess: [
        'Gamitin ang unlimited attempts sa Canvas para sa 100% homework grade.',
        'Ihanda nang maayos ang cheat sheet para sa exam.',
      ],
    },
  },

  // 25. WRITING 60 (Collins)
  'writing-60': {
    'zh-CN': {
      title: '低年级大学学术写作与论证 (Lower Writing)',
      whyTakeIt:
        '大一新生满足基础写作要求 (GE Ia) 的首选。Collins 教授对学生草稿给予细致批注，只要按照反馈认真修改，人人都能稳拿 A。',
      tipsForSuccess: [
        '在论文初稿阶段预约教授的 Office Hours 面对面交流提纲。',
        '根据同行评审 (Peer Review) 和教授批注认真修改第二版。',
      ],
    },
    'zh-TW': {
      title: '初階大學學術寫作與論證 (Lower Writing)',
      whyTakeIt:
        '大一新鮮人滿足初級寫作要求 (GE Ia) 的最佳指名。Collins 教授批改極為細心，只要認真依循建議修改草稿，拿 A 機率極高。',
      tipsForSuccess: [
        '論文大綱階段預約教授 Office Hours 當面確認立論方向。',
        '根據同儕互評 (Peer Review) 與教授意見認真修正每一版草稿。',
      ],
    },
    es: {
      title: 'Escritura Académica Universitaria (Lower Writing)',
      whyTakeIt:
        'La opción preferida de primer año para el requisito de escritura GE Ia. La profesora Collins ofrece comentarios constructivos y te guía para mejorar cada borrador hacia la A.',
      tipsForSuccess: [
        'Asiste a las horas de oficina con tu esquema antes de redactar el primer borrador.',
        'Implementa detalladamente la retroalimentación de las revisiones de compañeros.',
      ],
    },
    ko: {
      title: '대학 학술 작문 및 논증 (초급 작문)',
      whyTakeIt:
        '신입생 필수 작문 요건 (GE Ia) 이수를 위한 최적의 강의. Collins 교수님은 초안에 꼼꼼한 피드백을 제공하며, 피드백을 반영해 수정하면 누구나 A를 받을 수 있습니다.',
      tipsForSuccess: [
        '초안 작성 전 교수님의 오피스 아워를 방문해 논제 방향을 점검받으세요.',
        '피드백과 동료 검토 내용을 성실히 반영하여 최종본을 완성하세요.',
      ],
    },
    vi: {
      title: 'Viết Học Thuật Đại Học (Viết Cơ Bản)',
      whyTakeIt:
        'Lựa chọn tuyệt vời cho tân sinh viên để hoàn thành GE Ia. Cô Collins nhận xét bài nháp rất tận tình; chỉ cần sửa theo góp ý là có thể đạt điểm A.',
      tipsForSuccess: [
        'Đến gặp cô trong giờ Office Hours để trao đổi về dàn ý bài luận.',
        'Chỉnh sửa kỹ lưỡng theo các nhận xét phản hồi.',
      ],
    },
    ja: {
      title: '大学アカデミックライティング基礎 (初級ライティング)',
      whyTakeIt:
        '新入生の初級ライティング要件 (GE Ia) を満たすための大人気クラス。Collins 教授はドラフト添削が丁寧で、フィードバックに沿って修正すれば確実に A が狙えます。',
      tipsForSuccess: [
        'アウトライン段階で教授のオフィスアワーに行き構成を相談すること。',
        'ピアレビューと教授のコメントをしっかり最終稿に反映させましょう。',
      ],
    },
    tl: {
      title: 'Akademikong Pagsulat sa Kolehiyo (Lower Writing)',
      whyTakeIt:
        'Pinakamagandang klase para sa GE Ia. Masusing nagbibigay ng feedback si Prof. Collins sa mga draft; sundin lamang ang kanyang mga mungkahi para makakuha ng A.',
      tipsForSuccess: [
        'Pumunta sa Office Hours para talakayin ang balangkas ng iyong sanaysay.',
        'Ipatupad ang lahat ng feedback mula sa peer review.',
      ],
    },
  },
};
