export type AboutSectionKey =
  | "confession"
  | "vision"
  | "history"
  | "succession"
  | "pastor"
  | "ministers"
  | "elders"
  | "deaconesses"
  | "deacons"
  | "staff"
  | "worship-time"
  | "calendar"
  | "location"
  | "admin-service"
  | "facilities"
  | "contact"
  | "donation-receipt";

export type AboutSectionMeta = {
  key: AboutSectionKey;
  title: string;
  navLabel: string;
  to: string;
  image: string;
  description: string;
};

export type AboutMenuLink = {
  label: string;
  to: string;
  image?: string;
  description?: string;
};

export type AboutMenuGroup = {
  heading: string;
  columns?: AboutMenuLink[][];
  links?: AboutMenuLink[];
};

export const introAssets = {
  confession: "/image/church-introduce/confession-hero.png",
  pastor: "/image/church-introduce/pastor-bg.png",
  vision: "/image/church-introduce/vision-bg.png",
  facility: "/image/church-introduce/facility-bg.png"
} as const;

export const aboutSections: Record<AboutSectionKey, AboutSectionMeta> = {
  confession: {
    key: "confession",
    title: "공동체 고백",
    navLabel: "공동체고백",
    to: "/about/confession",
    image: introAssets.confession,
    description: "동서울열방교회가 함께 붙드는 믿음의 고백입니다."
  },
  vision: {
    key: "vision",
    title: "교회비전ㆍ심벌",
    navLabel: "교회비전ㆍ심벌",
    to: "/about/vision",
    image: introAssets.vision,
    description: "말씀과 예배, 선교를 향한 교회의 방향을 소개합니다."
  },
  history: {
    key: "history",
    title: "역사",
    navLabel: "역사",
    to: "/about/history",
    image: introAssets.vision,
    description: "은혜로 걸어온 교회의 시간을 정리했습니다."
  },
  succession: {
    key: "succession",
    title: "사역계승",
    navLabel: "사역계승",
    to: "/about/succession",
    image: introAssets.vision,
    description: "복음의 사명이 다음 세대로 이어지는 길을 소개합니다."
  },
  pastor: {
    key: "pastor",
    title: "담임목사",
    navLabel: "담임목사",
    to: "/about/pastor",
    image: introAssets.pastor,
    description: "말씀과 목양으로 공동체를 섬기는 담임목사 인사말입니다."
  },
  ministers: {
    key: "ministers",
    title: "교역자",
    navLabel: "교역자",
    to: "/about/ministers",
    image: introAssets.pastor,
    description: "예배와 교육, 목양을 함께 섬기는 교역자를 소개합니다."
  },
  elders: {
    key: "elders",
    title: "장로",
    navLabel: "장로",
    to: "/about/elders",
    image: introAssets.pastor,
    description: "교회를 세우고 성도를 돌보는 장로를 소개합니다."
  },
  deaconesses: {
    key: "deaconesses",
    title: "권사",
    navLabel: "권사",
    to: "/about/deaconesses",
    image: introAssets.pastor,
    description: "기도와 돌봄으로 공동체를 섬기는 권사를 소개합니다."
  },
  deacons: {
    key: "deacons",
    title: "집사",
    navLabel: "집사",
    to: "/about/deacons",
    image: introAssets.pastor,
    description: "맡겨진 자리에서 예배와 사역을 섬기는 집사를 소개합니다."
  },
  staff: {
    key: "staff",
    title: "직원",
    navLabel: "직원",
    to: "/about/staff",
    image: introAssets.pastor,
    description: "행정과 예배 현장을 돕는 직원을 소개합니다."
  },
  "worship-time": {
    key: "worship-time",
    title: "예배시간",
    navLabel: "예배시간",
    to: "/about/worship-time",
    image: introAssets.confession,
    description: "주일예배와 다음세대 예배 시간을 안내합니다."
  },
  calendar: {
    key: "calendar",
    title: "교회 사역일정",
    navLabel: "교회 사역일정",
    to: "/about/calendar",
    image: introAssets.vision,
    description: "예배, 기도회, 양육과 다음세대 사역 흐름을 정리했습니다."
  },
  location: {
    key: "location",
    title: "약도ㆍ주차",
    navLabel: "약도ㆍ주차",
    to: "/about/location",
    image: introAssets.facility,
    description: "교회 위치와 주차 안내를 확인하실 수 있습니다."
  },
  "admin-service": {
    key: "admin-service",
    title: "e교회행정",
    navLabel: "e교회행정",
    to: "/about/admin-service",
    image: introAssets.facility,
    description: "행정 요청과 자료 확인을 위한 내부 서비스 안내입니다."
  },
  facilities: {
    key: "facilities",
    title: "교회시설",
    navLabel: "교회시설",
    to: "/about/facilities",
    image: introAssets.facility,
    description: "예배실, 교육실, 목양실 등 예배와 양육 공간을 소개합니다."
  },
  contact: {
    key: "contact",
    title: "교회 전화번호",
    navLabel: "교회 전화번호",
    to: "/about/contact",
    image: introAssets.facility,
    description: "예배 문의, 새가족 안내, 목회 상담 연락처를 확인하실 수 있습니다."
  },
  "donation-receipt": {
    key: "donation-receipt",
    title: "기부금영수증 발급",
    navLabel: "기부금영수증 발급",
    to: "/about/donation-receipt",
    image: introAssets.vision,
    description: "연말정산 기부금영수증 발급에 필요한 신청 정보를 안내합니다."
  }
};

export const aboutRoutes: Record<AboutSectionKey, { title: string; navLabel: string; image: string; description: string }> = {
  confession: aboutSections.confession,
  vision: aboutSections.vision,
  history: aboutSections.history,
  succession: aboutSections.succession,
  pastor: aboutSections.pastor,
  ministers: aboutSections.ministers,
  elders: aboutSections.elders,
  deaconesses: aboutSections.deaconesses,
  deacons: aboutSections.deacons,
  staff: aboutSections.staff,
  "worship-time": aboutSections["worship-time"],
  calendar: aboutSections.calendar,
  location: aboutSections.location,
  "admin-service": aboutSections["admin-service"],
  facilities: aboutSections.facilities,
  contact: aboutSections.contact,
  "donation-receipt": aboutSections["donation-receipt"]
};

const menuLink = (key: AboutSectionKey): AboutMenuLink => {
  const section = aboutSections[key];

  return {
    label: section.navLabel,
    to: section.to,
    image: section.image,
    description: section.description
  };
};

export const aboutMenuGroups: AboutMenuGroup[] = [
  {
    heading: "교회안내",
    columns: [
      [menuLink("confession"), menuLink("vision")],
      [menuLink("history"), menuLink("succession")]
    ]
  },
  {
    heading: "섬기는 사람들",
    columns: [
      [menuLink("pastor"), menuLink("ministers"), menuLink("elders")],
      [menuLink("deaconesses"), menuLink("deacons"), menuLink("staff")]
    ]
  },
  {
    heading: "교회정보",
    columns: [
      [
        menuLink("worship-time"),
        menuLink("location"),
        menuLink("facilities"),
        menuLink("contact"),
        { ...menuLink("donation-receipt"), label: "온라인 헌금", to: "/donation" }
      ],
      [
        menuLink("calendar"),
        menuLink("admin-service"),
        { ...menuLink("calendar"), label: "공지사항", to: "/notice" },
        { ...menuLink("calendar"), label: "주보", to: "/archive" },
        menuLink("donation-receipt")
      ]
    ]
  }
];

export const confessionStatements = [
  { before: "우리는 세상으로부터 부름 받은", highlight: "하나님의 백성", after: "입니다." },
  { before: "또한 세상으로 보냄받은", highlight: "그리스도의 제자", after: "입니다." },
  { before: "보냄 받은 소명자로서 하나님을 기쁘게 찬양하는", highlight: "성령 충만한 예배자", after: "가 되겠습니다." },
  { before: "진리를 배우고 수호하는", highlight: "은혜의 빛진 자", after: "가 되겠습니다." },
  { before: "땅끝까지 복음을 전파하는", highlight: "전도자", after: "가 되겠습니다." }
];

export const staffGroups = {
  ministers: [
    { role: "담임목사", name: "서유웅", description: "말씀과 예배, 목양을 섬깁니다." },
    { role: "교육목사", name: "조효숙", description: "다음세대와 양육 사역을 섬깁니다." }
  ],
  elders: [
    { role: "사무장로", name: "조병주", description: "교회 행정과 공동체 질서를 섬깁니다." },
    { role: "장로", name: "유재민", description: "예배와 성도 돌봄을 섬깁니다." }
  ],
  deaconesses: [
    { role: "권사", name: "서계향", description: "기도와 돌봄으로 공동체를 섬깁니다." },
    { role: "권사", name: "김 복", description: "성도 교제와 환대를 섬깁니다." }
  ],
  deacons: [
    { role: "집사", name: "예배섬김팀", description: "예배 준비와 안내를 섬깁니다." },
    { role: "집사", name: "새가족섬김팀", description: "처음 오신 분들의 정착을 돕습니다." }
  ],
  staff: [
    { role: "반주", name: "나현진", description: "찬양과 예배 음악을 섬깁니다." },
    { role: "반주", name: "김혜화", description: "공동체 찬양을 섬깁니다." },
    { role: "미디어", name: "방송섬김팀", description: "예배 영상과 온라인 송출을 섬깁니다." }
  ]
};
