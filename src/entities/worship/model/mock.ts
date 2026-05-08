export type WorshipSection = "sermon" | "praise" | "live" | "newsroom" | "events";

export type SermonItem = {
  id: string;
  flag: string;
  category: string;
  title: string;
  englishTitle: string;
  scripture: string;
  speaker: string;
  date: string;
  image: string;
  tone: string;
};

export type PraiseItem = {
  title: string;
  category: string;
  date: string;
};

export type PraiseCategory = {
  flag: "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H";
  label: string;
};

export type MediaCard = {
  eyebrow: string;
  title: string;
  speaker: string;
  date: string;
  image: string;
  tone: string;
};

export type EventSection = {
  title: string;
  items: MediaCard[];
};

export const worshipRoutes: Record<WorshipSection, { title: string; to: string }> = {
  sermon: { title: "주일예배", to: "/worship/sermon" },
  praise: { title: "찬양", to: "/worship/praise" },
  live: { title: "인터넷 생방송", to: "/worship/live" },
  newsroom: { title: "SRC NEWSROOM", to: "/worship/newsroom" },
  events: { title: "행사ㆍ집회ㆍ공연", to: "/worship/events" }
};

export const worshipSchedule = [
  { label: "여는 찬양", time: "오전 10시 45분" },
  { label: "예배 시작", time: "오전 11시" },
  { label: "예배 종료", time: "오후 12시" }
];

export const regularWorshipRows = [
  { name: "주일예배", time: "11:00 am", place: "본당" },
  { name: "수요기도회", time: "07:30 pm", place: "본당" },
  { name: "새벽기도회", time: "05:30 am", place: "본당 / 월~금" },
  { name: "청소년-청년부", time: "01:00 pm", place: "목양실" },
  { name: "어린이부", time: "11:00 am", place: "교육실" }
];

export const nextGenerationRows = [
  { name: "영아ㆍ유아부", time: "11:00 am", place: "교육실 / 0~5세" },
  { name: "어린이부", time: "11:00 am", place: "교육실 / 초등" },
  { name: "청소년부", time: "01:00 pm", place: "목양실 / 중고등" },
  { name: "청년부", time: "01:00 pm", place: "목양실 / 청년" }
];

export const liveScheduleRows = [
  { group: "주일예배", order: "1부", time: "08:00 am", stream: true },
  { group: "주일예배", order: "2부", time: "10:00 am", stream: true },
  { group: "주일예배", order: "3부", time: "12:00 pm", stream: true },
  { group: "주일예배", order: "4부", time: "02:30 pm", stream: true },
  { group: "새벽 기도회", order: "", time: "매일 05:20 am", stream: true },
  { group: "수요저녁기도회", order: "", time: "수요일 07:30 pm", stream: true },
  { group: "쥬빌리통일구국기도회", order: "", time: "목요일 07:40 pm", stream: false },
  { group: "토요비전새벽예배", order: "", time: "토요일 06:30 am", stream: true }
];

export const sermons: SermonItem[] = [
  {
    id: "sun-20260419",
    flag: "sun",
    category: "주일예배",
    title: "참 사랑의 신비에 반응하는 효자 효녀들",
    englishTitle: "Devoted Children Responding to the Mystery of True Love",
    scripture: "로마서 5:5~11",
    speaker: "서유웅 담임목사",
    date: "주후 2026.04.19",
    image: "/20251207_103253.jpg",
    tone: "from-[#21133f] via-primary to-[#426b9e]"
  },
  {
    id: "sun-20260412",
    flag: "sun",
    category: "주일예배",
    title: "복음을 깊이 깨달으면 기도가 됩니다",
    englishTitle: "Joy Follows a Deep Gospel",
    scripture: "로마서 5:1~4",
    speaker: "서유웅 담임목사",
    date: "주후 2026.04.12",
    image: "/20251207_103249.jpg",
    tone: "from-[#17324f] via-[#0f6cb5] to-[#68a6d7]"
  },
  {
    id: "sun-20260405",
    flag: "sun",
    category: "주일예배",
    title: "어둠 속의 도약",
    englishTitle: "A Leap in the Darkness",
    scripture: "로마서 4:13~25",
    speaker: "서유웅 담임목사",
    date: "주후 2026.04.05",
    image: "/image/church-introduce/confession-hero.png",
    tone: "from-[#1f3b76] via-primary to-[#86b6d8]"
  },
  {
    id: "sun-20260329",
    flag: "sun",
    category: "주일예배",
    title: "성경은 무엇을 말하는가?",
    englishTitle: "What Does the Scripture Say?",
    scripture: "로마서 4:1~8",
    speaker: "서유웅 담임목사",
    date: "주후 2026.03.29",
    image: "/image/church-introduce/vision-bg.png",
    tone: "from-[#12233f] via-primary to-[#2f8bd8]"
  },
  {
    id: "sun-20260322",
    flag: "sun",
    category: "주일예배",
    title: "칭의의 은혜 안에 서다",
    englishTitle: "Standing in Grace",
    scripture: "로마서 3:21~31",
    speaker: "서유웅 담임목사",
    date: "주후 2026.03.22",
    image: "/image/church-introduce/facility-bg.png",
    tone: "from-[#3b2f62] via-[#0f6cb5] to-[#25385f]"
  },
  {
    id: "chocung-20260420",
    flag: "chocung",
    category: "주일예배(초청)",
    title: "전국행 티켓 있는가? 중생",
    englishTitle: "Do You Have a Ticket to the Kingdom?",
    scripture: "요한복음 3:1~8",
    speaker: "권성수 목사",
    date: "주후 2026.04.20",
    image: "/image/church-introduce/facility-bg.png",
    tone: "from-[#063b7a] via-primary to-[#1d75d1]"
  },
  {
    id: "chung-20260413",
    flag: "chung",
    category: "청년부",
    title: "믿음의 세대가 서는 자리",
    englishTitle: "The Place Where a Faithful Generation Stands",
    scripture: "디모데후서 2:1~7",
    speaker: "청년부 담당목사",
    date: "주후 2026.04.13",
    image: "/image/profile2.png",
    tone: "from-[#074ca8] via-[#126bd8] to-[#35a3ff]"
  },
  {
    id: "wed-20260415",
    flag: "wed",
    category: "수요저녁기도회",
    title: "기도가 깊어지는 밤",
    englishTitle: "A Night of Deepening Prayer",
    scripture: "시편 63:1~8",
    speaker: "서유웅 담임목사",
    date: "주후 2026.04.15",
    image: "/image/church-introduce/vision-bg.png",
    tone: "from-[#24315f] via-[#4557a8] to-[#82b3de]"
  }
];

export const scripturePassages = [
  {
    verse: "5",
    korean: "소망이 우리를 부끄럽게 하지 아니함은 우리에게 주신 성령으로 말미암아 하나님의 사랑이 우리 마음에 부은 바 됨이니",
    english: "And hope does not disappoint us, because God has poured out his love into our hearts by the Holy Spirit."
  },
  {
    verse: "6",
    korean: "우리가 아직 연약할 때에 기약대로 그리스도께서 경건하지 않은 자를 위하여 죽으셨도다",
    english: "You see, at just the right time, when we were still powerless, Christ died for the ungodly."
  },
  {
    verse: "7",
    korean: "의인을 위하여 죽는 자가 쉽지 않고 선인을 위하여 용감히 죽는 자가 혹 있거니와",
    english: "Very rarely will anyone die for a righteous man, though for a good man someone might possibly dare to die."
  },
  {
    verse: "8",
    korean: "우리가 아직 죄인 되었을 때에 그리스도께서 우리를 위하여 죽으심으로 하나님께서 우리에 대한 자기의 사랑을 확증하셨느니라",
    english: "But God demonstrates his own love for us in this: While we were still sinners, Christ died for us."
  },
  {
    verse: "9",
    korean: "그러면 이제 우리가 그의 피로 말미암아 의롭다 하심을 받았으니 더욱 그로 말미암아 진노하심에서 구원을 받을 것이니",
    english: "Since we have now been justified by his blood, how much more shall we be saved from God's wrath through him!"
  },
  {
    verse: "10",
    korean: "우리가 원수 되었을 때에 그의 아들의 죽으심으로 말미암아 하나님과 화목하게 되었은즉 화목하게 된 자로서는 더욱 그의 살아나심으로 말미암아 구원을 받을 것이니라",
    english: "For if, when we were God's enemies, we were reconciled to him through the death of his Son, how much more shall we be saved through his life!"
  },
  {
    verse: "11",
    korean: "그뿐 아니라 이제 우리로 화목하게 하신 우리 주 예수 그리스도로 말미암아 하나님 안에서 또한 즐거워하느니라",
    english: "Not only is this so, but we also rejoice in God through our Lord Jesus Christ."
  }
];

export const praiseCategories: PraiseCategory[] = [
  { flag: "A", label: "은혜를 담은 찬양" },
  { flag: "B", label: "찬양대 찬양" },
  { flag: "C", label: "예배헌금 특송" },
  { flag: "D", label: "마음을 여는 찬양" },
  { flag: "E", label: "수요저녁기도회" },
  { flag: "F", label: "쥬빌리통일구국기도회" },
  { flag: "G", label: "토비새" },
  { flag: "H", label: "특새" }
];

export const praiseItems: PraiseItem[] = [
  { title: "주의 말씀 받은 그 날 / 주 내 맘에 오신 후에", category: "은혜를 담은 찬양", date: "주후 2026.04.19" },
  { title: "내가 매일 기쁘게 / 주 나에게 주시는", category: "은혜를 담은 찬양", date: "주후 2026.04.12" },
  { title: "무덤에 머물러 / 주 예수 나의 산 소망", category: "은혜를 담은 찬양", date: "주후 2026.04.05" },
  { title: "주의 확실한 약속의 말씀 듣고 / 시선", category: "찬양대 찬양", date: "주후 2026.03.29" },
  { title: "나의 죄를 씻기는 / 주 보좌로부터 물이 흘러", category: "찬양대 찬양", date: "주후 2026.03.22" },
  { title: "샘물과 같은 보혈은 / 주 예수 나의 산 소망", category: "예배헌금 특송", date: "주후 2026.03.15" },
  { title: "웬말인가 날 위하여 / 나의 힘이 되신 여호와여", category: "마음을 여는 찬양", date: "주후 2026.03.08" },
  { title: "구주를 생각만 해도 / 이 땅 위에 오신", category: "수요저녁기도회", date: "주후 2026.03.01" },
  { title: "주 예수님 내 맘에 오사 / 시선", category: "쥬빌리통일구국기도회", date: "주후 2026.02.22" },
  { title: "나의 영원하신 기업 / 내 하나님은", category: "토비새", date: "주후 2026.02.15" },
  { title: "사모합니다", category: "특새", date: "주후 2026.04.11" },
  { title: "강물같이 흐르는 기쁨", category: "특새", date: "주후 2026.04.11" },
  { title: "찬송과 존귀 (Blessing and Honor)", category: "특새", date: "주후 2026.04.11" },
  { title: "살아계신 주 성령", category: "특새", date: "주후 2026.04.10" }
];

const baseMedia: MediaCard[] = [
  {
    eyebrow: "동서울열방교회 소식",
    title: "사랑으로 시대를 섬기는 복음 공동체",
    speaker: "미디어 사역팀",
    date: "주후 2026.05.03",
    image: "/20251207_103249.jpg",
    tone: "from-primary/90 to-[#2f8bd8]/75"
  },
  {
    eyebrow: "다음세대",
    title: "말씀 안에서 자라나는 다음세대 예배",
    speaker: "교육 사역팀",
    date: "주후 2026.04.26",
    image: "/image/profile2.png",
    tone: "from-[#12233f]/90 to-primary/70"
  },
  {
    eyebrow: "특별예배",
    title: "복음을 붙드는 가정과 교회의 기도",
    speaker: "서유웅 담임목사",
    date: "주후 2026.04.12",
    image: "/image/church-introduce/confession-hero.png",
    tone: "from-[#1f3b76]/90 to-[#68a6d7]/70"
  },
  {
    eyebrow: "간증",
    title: "은혜를 나누는 성도의 이야기",
    speaker: "새가족부",
    date: "주후 2026.04.05",
    image: "/image/church-introduce/vision-bg.png",
    tone: "from-[#17324f]/90 to-[#86b6d8]/70"
  }
];

export const newsroomItems: MediaCard[] = [
  ...baseMedia,
  {
    eyebrow: "현장 스케치",
    title: "함께 예배하고 함께 세워지는 교회",
    speaker: "홍보팀",
    date: "주후 2026.03.29",
    image: "/20251207_103253.jpg",
    tone: "from-[#3b2f62]/90 to-[#0f6cb5]/70"
  }
];

export const eventSections: EventSection[] = [
  { title: "새생명 축제", items: baseMedia },
  { title: "세례 간증", items: [...baseMedia].reverse() },
  {
    title: "특별예배",
    items: [
      {
        eyebrow: "특별예배",
        title: "사랑, 나눔은 온전한 행복입니다",
        speaker: "서유웅 담임목사",
        date: "주후 2026.04.29",
        image: "/image/church-introduce/facility-bg.png",
        tone: "from-[#5a315f]/90 to-secondary/70"
      },
      ...baseMedia.slice(1)
    ]
  },
  { title: "전도ㆍ영성", items: newsroomItems.slice(1) },
  { title: "공연", items: baseMedia },
  { title: "수련회", items: [...baseMedia].reverse() },
  { title: "행사ㆍ세미나", items: newsroomItems }
];

export const relatedPraise = [
  "주의 말씀 받은 그 날 / 주 내 맘에 오신 후에",
  "시선 - 시온찬양대",
  "여호와 위대하신 나의 주여",
  "예수 이름 높이세",
  "주 예수 나의 산 소망",
  "하나님의 사랑"
];

export const broadcastRows = [
  { channel: "CTS", sun: "22:30\n(본방)", mon: "", tue: "", wed: "17:00\n(재방)", thu: "", fri: "", sat: "" },
  { channel: "CBS", sun: "20:00~20:50\n(본방)", mon: "", tue: "", wed: "", thu: "", fri: "", sat: "01:40\n(재방)" },
  { channel: "C채널", sun: "16:00\n(본방)", mon: "", tue: "", wed: "03:00\n(재방)", thu: "", fri: "", sat: "20:00\n(재방)" },
  { channel: "GOOD TV", sun: "12:00\n(본방)", mon: "", tue: "05:00\n(재방)", wed: "", thu: "", fri: "", sat: "" }
];
