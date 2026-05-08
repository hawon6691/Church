export type MinistrySectionKey =
  | "new-family-guide"
  | "new-family-register"
  | "new-family-list"
  | "new-family-meeting"
  | "new-family-graduates"
  | "baptism"
  | "pastoral-map"
  | "small-group"
  | "leader-meeting"
  | "training-course"
  | "department-home"
  | "ministry-intro"
  | "publications";

export type MinistrySectionMeta = {
  key: MinistrySectionKey;
  title: string;
  to: string;
  group: "new-family" | "nurture" | "department";
};

export const ministrySections: Record<MinistrySectionKey, MinistrySectionMeta> = {
  "new-family-guide": {
    key: "new-family-guide",
    title: "새가족 등록 안내",
    to: "/ministry/new-family-guide",
    group: "new-family"
  },
  "new-family-register": {
    key: "new-family-register",
    title: "새가족 등록",
    to: "/ministry/new-family-register",
    group: "new-family"
  },
  "new-family-list": {
    key: "new-family-list",
    title: "새가족 등록자",
    to: "/ministry/new-family-list",
    group: "new-family"
  },
  "new-family-meeting": {
    key: "new-family-meeting",
    title: "새가족 모임 안내",
    to: "/ministry/new-family-meeting",
    group: "new-family"
  },
  "new-family-graduates": {
    key: "new-family-graduates",
    title: "새가족 모임 수료자",
    to: "/ministry/new-family-graduates",
    group: "new-family"
  },
  baptism: {
    key: "baptism",
    title: "학습ㆍ세례 안내",
    to: "/ministry/baptism",
    group: "new-family"
  },
  "pastoral-map": {
    key: "pastoral-map",
    title: "목양편성도ㆍ교역자",
    to: "/ministry/pastoral-map",
    group: "nurture"
  },
  "small-group": {
    key: "small-group",
    title: "다락방 소개ㆍ신청",
    to: "/ministry/small-group",
    group: "nurture"
  },
  "leader-meeting": {
    key: "leader-meeting",
    title: "순장 모임 소개",
    to: "/ministry/leader-meeting",
    group: "nurture"
  },
  "training-course": {
    key: "training-course",
    title: "교회 양육과정",
    to: "/ministry/training-course",
    group: "nurture"
  },
  "department-home": {
    key: "department-home",
    title: "부서 홈페이지",
    to: "/ministry/department-home",
    group: "department"
  },
  "ministry-intro": {
    key: "ministry-intro",
    title: "사역소개",
    to: "/ministry/ministry-intro",
    group: "department"
  },
  publications: {
    key: "publications",
    title: "간행물",
    to: "/ministry/publications",
    group: "department"
  }
};

export const newFamilyTabs = ["장년", "주일학교", "대학부", "청년부", "대청부"];

export const guideNotes = [
  "부부가 함께 등록하실 경우 남편과 아내가 각각 등록카드를 작성하되 가족사항은 한 분만 기록하시면 됩니다.",
  "33세 이상 37세 미만의 미혼자는 청년부 공동체로 원하시는 경우 새가족등록을 할 수 있습니다.",
  "신학 전공 경력자, 현재 사역자, 신학대학원 재학 중인 분은 담당 교역자 상담 후 등록을 안내합니다."
];

export const listRows = [
  { name: "김하은", department: "장년부", date: "2026.05.03", status: "등록 완료" },
  { name: "박준서", department: "청년부", date: "2026.04.26", status: "상담 예정" },
  { name: "이서연", department: "대학부", date: "2026.04.19", status: "등록 완료" },
  { name: "최민준", department: "주일학교", date: "2026.04.12", status: "등록 완료" }
];

export const smallGroups = [
  {
    title: "남자 다락방",
    image: "/20251207_103249.jpg",
    description:
      "일터와 가정, 교회에서 맡겨진 자리를 살아가는 형제들이 말씀 앞에서 삶을 나누고 서로를 위해 기도하는 모임입니다.",
    time: "금요일 저녁"
  },
  {
    title: "여자 다락방",
    image: "/image/church-introduce/confession-hero.png",
    description:
      "기도로 훈련된 순장과 순원들이 함께 모여 찬양과 기도의 따뜻한 교제를 나누는 사랑의 공동체입니다.",
    time: "금요일 오전"
  },
  {
    title: "직장인 다락방",
    image: "/image/church-introduce/facility-bg.png",
    description:
      "직장과 가정의 이중적인 부담 속에서도 말씀을 삶에 적용하며 균형 잡힌 성도의 길을 함께 걷습니다.",
    time: "평일 저녁"
  }
];

export const departmentsByLetter = [
  { letter: "가", items: ["경조부", "고3ㆍ수험생부", "고등1ㆍ2부", "교육연구소", "교통섬김부", "국내전도부", "권사회", "글로벌선교부"] },
  { letter: "다", items: ["다니엘 중등부", "다윗 중등부", "대각성 전도집회", "대학부"] },
  { letter: "마", items: ["미술인선교회"] },
  { letter: "바", items: ["방송실", "법조선교부", "북한사랑의선교부"] },
  { letter: "사", items: ["사랑메모리얼파크", "사랑의아웃리치", "사랑의전도단", "상담사역부", "새가족모임", "성경대학ㆍ교리대학", "소년부", "시온찬양대"] },
  { letter: "아", items: ["안성수양관", "어린이영어예배", "여직장인다락방", "영광찬양대", "영아부", "예배부", "유년부", "유아부", "의료선교회"] },
  { letter: "자", items: ["장로회", "장애인선교부", "전도폭발훈련부", "중보기도사역부", "지역사회선교부", "주일학교"] },
  { letter: "차", items: ["청년부", "초등부"] },
  { letter: "타", items: ["특별새벽부흥회"] },
  { letter: "파", items: ["평신도훈련부", "포에버평생교육원"] },
  { letter: "하", items: ["한중국제교류재단", "할렐루야 찬양대", "호산나 찬양대", "호스피스ㆍ전인치유"] }
];

export const trainingSteps = [
  { title: "새가족 모임", text: "복음과 교회 생활의 기초를 배우며 공동체 안에 안정적으로 정착합니다." },
  { title: "양육 과정", text: "말씀, 기도, 교제, 섬김의 기본 훈련을 통해 그리스도의 제자로 자랍니다." },
  { title: "사역 훈련", text: "은사와 부르심을 따라 교회와 이웃을 섬기는 실제 사역으로 이어집니다." }
];

export type MinistryIntroCategory = {
  id: string;
  label: string;
  items: Array<{
    title: string;
    description: string;
    contact: string;
    phone: string;
    email: string;
    location?: string;
    meeting?: string;
  }>;
};

export const ministryIntroCategories: MinistryIntroCategory[] = [
  {
    id: "worship",
    label: "살아있는 예배",
    items: [
      {
        title: "교통섬김부",
        description:
          "교통섬김부는 지역사회와 예배자를 섬기며 예배 전후의 이동과 안내가 질서 있게 이루어지도록 돕는 부서입니다. 안전한 동선, 친절한 안내, 주변 이웃과의 원활한 소통을 통해 모든 성도가 편안하게 예배의 자리로 나아가도록 섬깁니다.",
        contact: "오규현 목사",
        phone: "010-5895-0191",
        email: "guide@dongseoulchurch.org"
      },
      {
        title: "영성사역부",
        description:
          "영성사역부는 말씀과 기도 안에서 성도들이 하나님을 깊이 만나도록 돕습니다. 중보기도, 새벽기도, 말씀 묵상 모임을 통해 개인의 신앙생활이 풍성해지고 공동체가 함께 기도의 능력을 경험하도록 다양한 훈련과 모임을 준비합니다.",
        contact: "안바울 목사",
        phone: "010-8336-3011",
        email: "prayer@dongseoulchurch.org"
      },
      {
        title: "예배부",
        description:
          "예배부는 하나님께 드리는 예배가 은혜롭고 질서 있게 진행되도록 섬깁니다. 예배 안내, 헌금, 성찬, 예배 환경 준비를 통해 성도들이 온전히 하나님께 집중할 수 있도록 돕고, 다음 세대와 함께 예배 문화를 세워갑니다.",
        contact: "최요한 목사",
        phone: "02-0000-1516",
        email: "worship@dongseoulchurch.org"
      },
      {
        title: "의전부",
        description:
          "의전부는 교회를 방문하는 손님과 성도들을 따뜻하게 맞이하며 예배와 행사가 품격 있게 진행되도록 돕는 사역입니다. 환대와 배려를 통해 복음의 첫인상을 전하고 공동체의 질서를 세워갑니다.",
        contact: "최민규 목사",
        phone: "02-0000-1586",
        email: "welcome@dongseoulchurch.org",
        location: "본관 4층 안내실",
        meeting: "매월 첫째 주 목요일"
      },
      {
        title: "제천기도동산",
        description:
          "제천기도동산은 성도들이 일상의 분주함을 내려놓고 하나님 앞에 머무르며 회복을 경험하도록 돕는 기도처입니다. 개인기도, 소그룹 기도, 수련회와 영성훈련의 자리로 사용됩니다.",
        contact: "윤여승 처장",
        phone: "02-0000-1541",
        email: "retreat@dongseoulchurch.org"
      },
      {
        title: "중보기도사역부",
        description:
          "중보기도사역부는 교회와 성도, 나라와 열방을 위해 지속적으로 기도하는 공동체입니다. 기도 제목을 나누고 응답을 함께 확인하며, 성도들이 기도의 자리에서 서로를 세우도록 돕습니다.",
        contact: "강대인 목사",
        phone: "02-0000-1593",
        email: "intercession@dongseoulchurch.org"
      },
      {
        title: "특별새벽부흥회",
        description:
          "특별새벽부흥회는 온 세대가 말씀과 기도로 하루를 시작하며 영적 회복을 경험하는 대표적인 기도 사역입니다. 말씀 앞에 마음을 모으고 하나님 나라의 비전을 새롭게 붙듭니다.",
        contact: "하상범 목사",
        phone: "02-0000-1541",
        email: "dawn@dongseoulchurch.org"
      }
    ]
  },
  {
    id: "discipleship",
    label: "제자훈련의 국제화",
    items: [
      {
        title: "국내전도부",
        description:
          "국내전도부는 복음을 가까운 이웃과 지역사회에 전하며, 전도 훈련과 현장 사역을 통해 평신도 전도자를 세웁니다. 복음의 기쁨이 삶의 자리에서 흘러가도록 돕는 선교적 공동체입니다.",
        contact: "설성환 목사",
        phone: "02-0000-1564",
        email: "mission153@dongseoulchurch.org",
        location: "S1102호"
      },
      {
        title: "국제제자훈련원",
        description:
          "국제제자훈련원은 건강한 교회를 꿈꾸며 목회의 동반자로서 제자훈련 자료와 훈련 과정을 나눕니다. 말씀과 삶이 연결되는 제자도를 연구하고 교회 현장에 적용하도록 돕습니다.",
        contact: "박주성 목사",
        phone: "02-0000-1610",
        email: "training@dongseoulchurch.org"
      },
      {
        title: "글로벌선교부",
        description:
          "글로벌선교부는 열방을 향한 하나님의 마음을 품고 선교사를 지원하며, 단기선교와 중보기도를 통해 교회가 보냄 받은 공동체로 살아가도록 섬깁니다.",
        contact: "백승준 목사",
        phone: "02-0000-1710",
        email: "global@dongseoulchurch.org"
      },
      {
        title: "대각성전도집회",
        description:
          "대각성전도집회는 복음의 초청을 통해 이웃을 주께로 인도하는 전도 축제입니다. 성도들이 기도하며 초청하고, 복음의 메시지를 함께 나누는 자리입니다.",
        contact: "전승현 목사",
        phone: "02-0000-1526",
        email: "awakening@dongseoulchurch.org"
      },
      {
        title: "사랑의전도단",
        description:
          "사랑의전도단은 지원자를 중심으로 전도팀을 구성하여 복음 전도 자료와 현장 훈련을 나누는 사역입니다. 삶의 자리에서 복음을 전하는 평신도 전도자를 세웁니다.",
        contact: "윤현숙 목사",
        phone: "02-0000-1594",
        email: "evangelism@dongseoulchurch.org"
      },
      {
        title: "일본어예배부",
        description:
          "일본어예배부는 일본어권 성도와 이웃이 함께 예배하고 교제할 수 있도록 돕는 공동체입니다. 언어와 문화를 넘어 복음 안에서 하나 됨을 경험합니다.",
        contact: "일본어 사역팀",
        phone: "02-0000-1150",
        email: "japanese@dongseoulchurch.org",
        location: "S901 브라질채플"
      },
      {
        title: "전도폭발훈련부",
        description:
          "전도폭발훈련부는 성도들이 복음을 명확하게 이해하고 전할 수 있도록 체계적인 전도 훈련을 제공합니다. 관계 안에서 자연스럽게 복음을 나누는 삶을 준비합니다.",
        contact: "윤현수 목사",
        phone: "02-0000-1545",
        email: "ee@dongseoulchurch.org",
        location: "S1102호"
      },
      {
        title: "중국어예배부",
        description:
          "중국어예배부는 중국어권 성도와 이웃에게 복음을 전하고 예배와 양육을 통해 제자를 세우는 사역입니다. 언어권 공동체가 함께 성장하도록 섬깁니다.",
        contact: "유영준 목사",
        phone: "02-0000-1790",
        email: "chinese@dongseoulchurch.org",
        location: "S902호"
      }
    ]
  },
  {
    id: "peace",
    label: "복음적 평화통일",
    items: [
      {
        title: "경조부",
        description:
          "경조부는 성도의 기쁨과 슬픔을 함께 나누며 공동체적 돌봄을 실천합니다. 장례와 결혼, 위로와 격려의 순간에 교회가 가족처럼 곁에 서도록 돕습니다.",
        contact: "권진우 목사",
        phone: "02-0000-1595",
        email: "care@dongseoulchurch.org",
        location: "S1102호"
      },
      {
        title: "권사회",
        description:
          "권사회는 깊은 신앙의 연륜과 섬김으로 교회와 다음 세대를 위해 기도하며 봉사하는 공동체입니다. 각 사역 현장에서 사랑과 헌신으로 교회를 세웁니다.",
        contact: "권사회 담당 교역자",
        phone: "02-0000-1600",
        email: "kwonsa@dongseoulchurch.org",
        location: "권사회실"
      },
      {
        title: "북한사랑의선교부",
        description:
          "북한사랑의선교부는 복음적 평화통일을 바라보며 북한과 통일 한국을 위해 기도하고 준비하는 사역입니다. 탈북민 섬김과 통일 선교의 비전을 나눕니다.",
        contact: "임바울 목사",
        phone: "02-0000-1781",
        email: "north@dongseoulchurch.org"
      },
      {
        title: "사랑의복지재단",
        description:
          "사랑의복지재단은 어려운 이웃을 실제적으로 섬기며 지역사회 안에서 복음의 사랑을 실천합니다. 돌봄과 나눔을 통해 이웃 사랑의 길을 넓혀갑니다.",
        contact: "남동우 목사",
        phone: "02-0000-1720",
        email: "welfare@dongseoulchurch.org"
      },
      {
        title: "영포에버",
        description:
          "영포에버는 중장년 성도들이 예배와 교제를 통해 신앙의 활력을 회복하고, 삶의 경험을 다음 세대와 나누도록 돕는 공동체입니다.",
        contact: "김대규 목사",
        phone: "02-0000-1188",
        email: "forever@dongseoulchurch.org"
      },
      {
        title: "인터치상담사역부",
        description:
          "인터치상담사역부는 마음의 어려움을 겪는 이들이 안전하게 이야기를 나누고 회복의 길을 찾도록 돕습니다. 비밀을 존중하며 전문적인 상담과 기도를 제공합니다.",
        contact: "강명옥 전도사",
        phone: "02-0000-1060",
        email: "intouch@dongseoulchurch.org"
      },
      {
        title: "장애인선교부",
        description:
          "장애인선교부는 장애인과 가족이 예배와 공동체 안에서 존중받고 함께 성장하도록 돕는 사역입니다. 모두가 하나님의 형상으로 지음 받은 귀한 존재임을 고백합니다.",
        contact: "남동우 목사",
        phone: "02-0000-1720",
        email: "special@dongseoulchurch.org"
      },
      {
        title: "포에버평생교육원",
        description:
          "포에버평생교육원은 삶의 계절마다 배우고 성장할 수 있도록 강좌와 모임을 제공합니다. 성도들이 지혜롭게 노년을 준비하고 섬김의 자리로 나아가도록 돕습니다.",
        contact: "주연종 목사",
        phone: "02-0000-1600",
        email: "lifelong@dongseoulchurch.org"
      },
      {
        title: "호스피스ㆍ전인치유",
        description:
          "호스피스ㆍ전인치유는 병과 고통 가운데 있는 이들과 가족을 돌보며 하나님의 위로를 전합니다. 몸과 마음, 영혼의 회복을 위해 함께 기도하고 동행합니다.",
        contact: "김영인 목사",
        phone: "02-0000-1700",
        email: "healing@dongseoulchurch.org",
        location: "N503호"
      }
    ]
  },
  {
    id: "responsibility",
    label: "대사회적 책임",
    items: [
      {
        title: "문화예술사역부",
        description:
          "문화예술사역부는 기독교적 가치관을 바탕으로 다양한 예술과 문화 활동을 통해 복음의 아름다움을 나눕니다. 성도와 지역사회가 문화 안에서 하나님을 경험하도록 돕습니다.",
        contact: "유인석 목사",
        phone: "02-0000-1761",
        email: "culture@dongseoulchurch.org",
        location: "사랑아트홀"
      },
      {
        title: "법조선교부",
        description:
          "법조선교부는 법률 전문성을 가진 성도들이 상담과 봉사로 이웃을 돕고, 사회적 책임을 실천하도록 연결하는 사역입니다.",
        contact: "백요셉 목사",
        phone: "02-0000-1186",
        email: "law@dongseoulchurch.org"
      },
      {
        title: "생명윤리사역",
        description:
          "생명윤리사역은 창조 질서와 생명의 존엄성을 깊이 고민하며, 성도들이 시대의 질문 앞에서 성경적 세계관으로 응답하도록 돕습니다.",
        contact: "김영인 목사",
        phone: "02-0000-1700",
        email: "life@dongseoulchurch.org"
      },
      {
        title: "웰컴미니스트리",
        description:
          "웰컴미니스트리는 교회를 처음 방문한 이들이 따뜻한 환대를 경험하고 공동체 안으로 자연스럽게 연결되도록 돕는 사역입니다.",
        contact: "김영순 전도사",
        phone: "02-0000-1552",
        email: "welcome@dongseoulchurch.org"
      },
      {
        title: "의료선교회",
        description:
          "의료선교회는 의료 전문성을 통해 국내외 이웃을 섬기며 그리스도의 사랑을 전합니다. 진료, 교육, 협력 사역으로 복음의 손길을 확장합니다.",
        contact: "김영인 목사",
        phone: "02-0000-1700",
        email: "medical@dongseoulchurch.org",
        location: "N602호"
      },
      {
        title: "이웃사랑선교부",
        description:
          "이웃사랑선교부는 지역사회의 필요를 살피고 실제적인 도움을 제공하는 사역입니다. 물질적, 정서적, 영적 돌봄을 통해 이웃 사랑을 실천합니다.",
        contact: "이기원 목사",
        phone: "02-0000-1740",
        email: "neighbor@dongseoulchurch.org",
        location: "N602호"
      },
      {
        title: "지역사회선교부",
        description:
          "지역사회선교부는 동서울열방교회가 지역 안에서 복음의 선한 영향력을 나타내도록 다양한 공공기관, 주민, 단체와 협력하는 사역입니다.",
        contact: "전승현 목사",
        phone: "02-0000-1526",
        email: "local@dongseoulchurch.org"
      }
    ]
  },
  {
    id: "next",
    label: "글로벌 인재양성",
    items: [
      {
        title: "교육연구소",
        description:
          "교육연구소는 다음 세대를 깨우는 교육 콘텐츠와 훈련 자료를 개발하며, 교회와 가정이 함께 신앙을 전수하도록 돕습니다.",
        contact: "김혜성 목사",
        phone: "02-0000-1660",
        email: "education@dongseoulchurch.org",
        location: "S1212호"
      },
      {
        title: "대학부",
        description:
          "대학부는 오늘의 제자와 내일의 리더를 세우는 공동체입니다. 말씀과 예배, 소그룹을 통해 청년들이 복음 안에서 삶의 방향을 발견하도록 돕습니다.",
        contact: "이윤기 목사",
        phone: "02-0000-1630",
        email: "campus@dongseoulchurch.org",
        location: "N501호"
      },
      {
        title: "어린이영어예배",
        description:
          "어린이영어예배는 다음 세대가 복음과 언어를 함께 배우며 세계를 품는 신앙인으로 자라도록 돕습니다. 어린이 눈높이에 맞춘 예배와 교육을 제공합니다.",
        contact: "구한나 교육전도사",
        phone: "02-0000-1421",
        email: "veritas@dongseoulchurch.org",
        location: "S203호"
      },
      {
        title: "옥한흠장학회",
        description:
          "옥한흠장학회는 다음 세대의 배움과 헌신을 격려하며 하나님 나라를 위한 인재를 세우는 장학 사역입니다.",
        contact: "장학 담당",
        phone: "02-0000-1135",
        email: "scholarship@dongseoulchurch.org",
        location: "N602호"
      },
      {
        title: "주일학교",
        description:
          "주일학교는 어린이와 청소년이 말씀 안에서 자라며 예수 그리스도의 제자로 세워지도록 돕는 다음 세대 신앙 교육 공동체입니다.",
        contact: "이민형 목사",
        phone: "02-0000-1650",
        email: "school@dongseoulchurch.org"
      },
      {
        title: "청년부",
        description:
          "청년부는 하나님 나라의 청년제자 운동을 꿈꾸며 예배와 소그룹, 훈련과 섬김을 통해 복음적 세계관과 삶의 실천을 세워갑니다.",
        contact: "이기호 목사",
        phone: "02-0000-1610",
        email: "young@dongseoulchurch.org",
        location: "본당"
      },
      {
        title: "평신도훈련부",
        description:
          "평신도훈련부는 성도들이 말씀과 삶의 훈련을 통해 성숙한 제자로 세워지도록 돕습니다. 배움이 사역과 선교로 이어지도록 과정을 준비합니다.",
        contact: "박삼열 목사",
        phone: "02-0000-1690",
        email: "laytraining@dongseoulchurch.org"
      }
    ]
  }
];

export const publicationItems = [
  { title: "[토비새 뉴스레터] 주후 2026년 5월 2일 : 1024호", date: "주후 2026.04.30", type: "토비새 뉴스레터", hasBook: false },
  { title: "[목마르거든] 주후 2026년 5월호", date: "주후 2026.04.28", type: "목마르거든", hasBook: true },
  { title: "[토비새 뉴스레터] 주후 2026년 4월 18일 : 1023호", date: "주후 2026.04.17", type: "토비새 뉴스레터", hasBook: false },
  { title: "[토비새 뉴스레터] 주후 2026년 4월 4일 : 1022호", date: "주후 2026.04.03", type: "토비새 뉴스레터", hasBook: false },
  { title: "[목마르거든] 주후 2026년 4월호", date: "주후 2026.03.29", type: "목마르거든", hasBook: true },
  { title: "[토비새 뉴스레터] 주후 2026년 3월 28일 : 1021호", date: "주후 2026.03.27", type: "토비새 뉴스레터", hasBook: false },
  { title: "2026년 고난주간 묵상집", date: "주후 2026.03.26", type: "묵상집", hasBook: false },
  { title: "[토비새 뉴스레터] 주후 2026년 3월 21일 : 1020호", date: "주후 2026.03.20", type: "토비새 뉴스레터", hasBook: false },
  { title: "[토비새 뉴스레터] 주후 2026년 3월 14일 : 1019호", date: "주후 2026.03.13", type: "토비새 뉴스레터", hasBook: false },
  { title: "[토비새 뉴스레터] 주후 2026년 3월 7일 : 1018호", date: "주후 2026.03.06", type: "토비새 뉴스레터", hasBook: false }
];
