export type SermonCard = {
  to: string;
  image: string;
  category: string;
  title: string;
  subtitle: string;
  meta: string;
  tone: string;
};

export type QuickLinkIcon = "church" | "map" | "notice" | "calendar";

export type QuickLink = {
  to: string;
  label: string;
  icon: QuickLinkIcon;
};

export type TrainingItem = {
  status: string;
  group: string;
  title: string;
  date: string;
};

export type WordCard = {
  title: string;
  description: string;
};

export type PrayerCard = {
  image: string;
  title: string;
  description: string;
};

export const heroLinks = [
  "Nations ON",
  "NaGA 열방글로벌아카데미",
  "2026 열방 사역 안내",
  "21세기 모라비안 기도의 불침번"
];

export const sermonCards: SermonCard[] = [
  {
    to: "/worship",
    image: "/20251207_103253.jpg",
    category: "주일예배",
    title: "복음을 영화롭게, 진리가 결론되게",
    subtitle: "Gospel Glorified, Truth Concluded",
    meta: "서유웅 담임목사 · 주후 2026.04.19",
    tone: "from-[#2d155f]/90 to-primary/70"
  },
  {
    to: "/worship",
    image: "/20251207_103249.jpg",
    category: "청소년-청년부",
    title: "다음세대가 복음으로 일어납니다",
    subtitle: "Youth and Young Adult Worship",
    meta: "다음세대 사역팀 · 주후 2026.04.26",
    tone: "from-slate-900/80 to-primary/65"
  },
  {
    to: "/archive",
    image: "/image/profile2.png",
    category: "어린이부",
    title: "어린이가 말씀 안에서 자라갑니다",
    subtitle: "Children Worship",
    meta: "어린이부 · 주후 2026.04.19",
    tone: "from-slate-950/85 to-secondary/55"
  }
];

export const quickLinks: QuickLink[] = [
  { to: "/about/confession", label: "새가족 등록", icon: "church" },
  { to: "/about/location", label: "약도ㆍ주차", icon: "map" },
  { to: "/notice", label: "주보", icon: "notice" },
  { to: "/about/worship-time", label: "예배시간", icon: "calendar" }
];

export const trainingItems: TrainingItem[] = [
  { status: "접수중", group: "새가족", title: "새가족 안내와 등록", date: "상시 안내" },
  { status: "마감", group: "제자훈련", title: "구약의 파노라마", date: "주후 2026년 03월 30일 까지" },
  { status: "마감", group: "사역훈련", title: "복음의 일꾼 세우기", date: "주후 2026년 04월 20일 까지" },
  { status: "마감", group: "다음세대", title: "청소년 부모 세미나", date: "주후 2026년 03월 25일 까지" }
];

export const wordCards: WordCard[] = [
  { title: "오늘의 QT", description: "주후 2026년 05월 01일" },
  { title: "심비에 새기는 365구절", description: "주후 2026년 05월 01일" },
  { title: "성경암송 72구절", description: "E. 그리스도를 닮아감" }
];

export const prayerCards: PrayerCard[] = [
  {
    image: "/20251207_103253.jpg",
    title: "중보기도 요청",
    description: "성도와 가정, 교회를 위한 기도 제목을 함께 품고 기도합니다."
  },
  {
    image: "/20251207_103249.jpg",
    title: "합심기도제목",
    description: "공동체가 같은 마음으로 붙들 기도 제목을 나눕니다."
  },
  {
    image: "/image/profile2.png",
    title: "100대 기도제목",
    description: "나라와 열방, 다음세대를 위해 지속적으로 기도합니다."
  },
  {
    image: "/image/profile.jpg",
    title: "집중비전기도",
    description: "교회의 사명과 비전을 위해 정해진 기간 함께 기도합니다."
  }
];

export const searchTags = ["#기부금영수증 발급", "#문의하기", "#비밀번호", "#교회탐방신청", "#복음도시락", "#새가족등록"];
export const marqueeTags = [...searchTags, "#오늘의큐티", "#기도제목", "#예배시간", "#주보"];
