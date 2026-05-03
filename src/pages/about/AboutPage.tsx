import type { ComponentType } from "react";
import { Building2, CalendarDays, CheckCircle2, CreditCard, FileText, MapPin, Phone, ShieldCheck, UserRound } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { aboutRoutes, aboutSections, confessionStatements, staffGroups, type AboutSectionKey } from "@entities/about/model/content";
import { nextGenerationRows, regularWorshipRows } from "@entities/worship/model/mock";
import { siteConfig } from "@shared/config/site";
import { Button } from "@shared/ui/button";
import { PageHeader } from "@shared/ui/PageHeader";
import { Section } from "@shared/ui/Section";

type StaffGroupKey = keyof typeof staffGroups;
type IconType = ComponentType<{ className?: string; size?: number }>;

const secondConfessionStatements = [
  { before: "이웃의 아픔을 함께하는", highlight: "치유자", after: "가 되겠습니다." },
  { before: "온 성도가 하나되는", highlight: "화해자", after: "가 되겠습니다." },
  { before: "사회적 책임을 다하는", highlight: "소명자", after: "가 되겠습니다." },
  { before: "그리하여 주의 나라가 이땅에 임하며, 하나님을 영화롭게 하는", highlight: "사랑의 공동체", after: "가 되겠습니다." }
];

const historyRows = [
  { year: "2026", title: "온라인 사역 정비", text: "예배, 공지, 말씀 자료를 한곳에서 확인할 수 있도록 홈페이지 구조를 정리했습니다." },
  { year: "2025", title: "다음세대 양육 강화", text: "어린이부와 청소년-청년부가 말씀 중심의 예배와 교제로 세워지도록 섬겼습니다." },
  { year: "2024", title: "기도 공동체 회복", text: "수요기도회와 새벽기도회를 통해 교회가 함께 기도의 자리로 나아갔습니다." },
  { year: "2023", title: "열방을 품는 예배", text: "복음을 영화롭게 하고 진리가 결론되는 예배 공동체를 향해 걸어왔습니다." }
];

const visionRows = [
  { title: "말씀 중심", text: "성경의 진리가 삶의 결론이 되도록 배우고 순종합니다." },
  { title: "예배 회복", text: "예수 그리스도의 보혈과 은혜를 찬양하는 예배자로 섭니다." },
  { title: "열방 선교", text: "가까운 이웃과 열방을 향해 복음의 빛을 흘려보냅니다." }
];

const infoPages = [
  {
    key: "calendar",
    title: "교회 사역일정",
    Icon: CalendarDays,
    image: aboutSections.calendar.image,
    eyebrow: "Ministry Calendar",
    description: "예배와 양육, 다음세대 사역 흐름을 한눈에 볼 수 있도록 정리했습니다.",
    items: ["주일예배 오전 11시", "수요기도회 오후 7시 30분", "다음세대 모임 주일 오후"]
  },
  {
    key: "admin-service",
    title: "e교회행정",
    Icon: ShieldCheck,
    image: aboutSections["admin-service"].image,
    eyebrow: "Church Admin",
    description: "행정 요청과 자료 확인을 위한 내부 서비스 안내입니다.",
    items: ["관리자 로그인", "공지 등록", "자료 관리"],
    button: { label: "관리자 화면", to: "/admin" }
  },
  {
    key: "facilities",
    title: "교회시설",
    Icon: Building2,
    image: aboutSections.facilities.image,
    eyebrow: "Facilities",
    description: "예배실, 교육실, 목양실 등 예배와 양육을 위한 공간을 소개합니다.",
    items: ["본당", "교육실", "목양실", "미디어 공간"]
  },
  {
    key: "contact",
    title: "교회 전화번호",
    Icon: Phone,
    image: aboutSections.contact.image,
    eyebrow: "Contact",
    description: "예배 문의, 새가족 안내, 목회 상담 연락처를 확인하실 수 있습니다.",
    items: [`담임목사 ${siteConfig.pastorPhone}`, `교육목사 ${siteConfig.educationPastorPhone}`, siteConfig.email]
  },
  {
    key: "donation-receipt",
    title: "기부금영수증 발급",
    Icon: FileText,
    image: aboutSections["donation-receipt"].image,
    eyebrow: "Donation Receipt",
    description: "연말정산 기부금영수증 발급에 필요한 신청 정보를 안내합니다.",
    items: ["성명과 연락처 확인", "헌금 내역 확인", "발급 요청 후 개별 안내"]
  },
  {
    key: "location",
    title: "약도ㆍ주차",
    Icon: MapPin,
    image: aboutSections.location.image,
    eyebrow: "Location",
    description: siteConfig.address,
    items: ["주일예배 전 안내 데스크 운영", "교회 주변 주차 가능 구역 안내", "처음 방문자는 안내위원에게 문의"]
  }
] as const;

function isAboutSectionKey(value: string | undefined): value is AboutSectionKey {
  return Boolean(value && Object.prototype.hasOwnProperty.call(aboutRoutes, value));
}

function HighlightStatements({ statements }: { statements: typeof confessionStatements }) {
  return (
    <div className="grid gap-6">
      {statements.map((statement) => (
        <p className="m-0 text-[24px] font-extrabold leading-relaxed text-slate-900 md:text-[32px]" key={statement.highlight}>
          {statement.before} <span className="text-primary">{statement.highlight}</span>
          {statement.after}
        </p>
      ))}
    </div>
  );
}

function WorshipRows({ title, rows }: { title: string; rows: typeof regularWorshipRows }) {
  return (
    <div>
      <h2 className="mb-8 text-[30px] font-extrabold tracking-normal">{title}</h2>
      <table className="reference-table">
        <tbody>
          {rows.map((row) => (
            <tr key={row.name}>
              <th scope="row">{row.name}</th>
              <td className="time-cell">{row.time}</td>
              <td>{row.place}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ConfessionPage() {
  return (
    <Section tone="white">
      <div className="grid gap-24">
        <div className="grid items-center gap-12 lg:grid-cols-[0.96fr_1.04fr]">
          <div className="relative">
            <div className="absolute -left-16 -bottom-16 hidden h-52 w-52 bg-[radial-gradient(circle,rgb(6_71_165/42%)_2px,transparent_3px)] opacity-70 [background-size:18px_18px] lg:block" />
            <img className="relative aspect-[1.45/1] w-full rounded-sm object-cover shadow-lifted" src={aboutSections.confession.image} alt="동서울열방교회 공동체 고백 이미지" />
          </div>
          <div>
            <p className="mb-5 text-xl font-extrabold text-primary">동서울열방교회 공동체 고백</p>
            <h2 className="mb-9 text-[38px] font-extrabold leading-tight md:text-[56px]">
              복음을 영화롭게,
              <br />
              진리가 결론되게
            </h2>
            <HighlightStatements statements={confessionStatements} />
          </div>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.96fr]">
          <HighlightStatements statements={secondConfessionStatements} />
          <div className="relative">
            <img className="aspect-[1.45/1] w-full rounded-sm object-cover shadow-lifted" src={aboutSections.vision.image} alt="동서울열방교회 공동체 고백 보조 이미지" />
            <div className="absolute -right-20 -bottom-20 hidden h-56 w-56 rounded-full bg-accent lg:block" />
          </div>
        </div>
      </div>
    </Section>
  );
}

function VisionPage() {
  return (
    <Section tone="white">
      <div className="grid gap-16">
        <div className="grid items-center gap-12 lg:grid-cols-[0.96fr_1.04fr]">
          <img className="aspect-[1.45/1] w-full rounded-sm object-cover shadow-lifted" src={aboutSections.vision.image} alt="동서울열방교회 비전 이미지" />
          <div>
            <p className="mb-5 text-xl font-extrabold text-primary">Vision & Symbol</p>
            <h2 className="mb-7 text-[38px] font-extrabold leading-tight md:text-[56px]">예수의 보혈이 흐르는 교회</h2>
            <p className="text-xl leading-9 text-slate-700">
              동서울열방교회는 말씀과 예배, 기도와 선교를 통해 그리스도의 몸을 세우고 열방을 향해 복음을 흘려보내는 공동체입니다.
            </p>
          </div>
        </div>
        <div className="border-t-2 border-primary">
          {visionRows.map((row) => (
            <article className="grid gap-4 border-b py-8 md:grid-cols-[220px_1fr]" key={row.title}>
              <h3 className="m-0 text-2xl font-extrabold text-primary">{row.title}</h3>
              <p className="m-0 text-xl leading-9 text-slate-700">{row.text}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}

function HistoryPage() {
  return (
    <Section tone="white">
      <div className="grid gap-12 lg:grid-cols-[0.52fr_1.48fr]">
        <div>
          <p className="mb-5 text-xl font-extrabold text-primary">History</p>
          <h2 className="text-[42px] font-extrabold leading-tight md:text-[60px]">은혜로 걸어온 시간</h2>
        </div>
        <div className="border-t-2 border-primary">
          {historyRows.map((row) => (
            <article className="grid gap-5 border-b py-9 md:grid-cols-[160px_1fr]" key={row.year}>
              <strong className="text-[34px] font-extrabold text-primary">{row.year}</strong>
              <div>
                <h3 className="mb-3 text-2xl font-extrabold">{row.title}</h3>
                <p className="m-0 text-lg leading-8 text-muted-foreground">{row.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}

function SuccessionPage() {
  return (
    <Section tone="white">
      <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.92fr]">
        <img className="aspect-[1.25/1] w-full rounded-sm object-cover shadow-lifted" src={aboutSections.succession.image} alt="동서울열방교회 사역계승 이미지" />
        <div>
          <p className="mb-5 text-xl font-extrabold text-primary">Succession</p>
          <h2 className="mb-10 text-[38px] font-extrabold leading-tight md:text-[56px]">복음의 사명은 다음 세대로 계승됩니다</h2>
          <div className="border-t-2 border-primary">
            {["말씀을 맡기는 사역", "기도를 이어가는 공동체", "열방을 향한 다음세대"].map((title, index) => (
              <article className="grid gap-4 border-b py-7 md:grid-cols-[70px_1fr]" key={title}>
                <strong className="text-2xl font-extrabold text-primary">0{index + 1}</strong>
                <div>
                  <h3 className="mb-3 text-2xl font-extrabold">{title}</h3>
                  <p className="m-0 text-lg leading-8 text-muted-foreground">한 세대의 헌신이 다음 세대의 믿음으로 이어지도록 예배와 양육을 정성껏 세웁니다.</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function PastorPage() {
  return (
    <Section tone="white">
      <div className="grid items-start gap-14 lg:grid-cols-[0.68fr_1.32fr]">
        <div className="grid gap-7">
          <img className="aspect-[4/5] w-full rounded-sm object-cover object-top shadow-lifted" src={siteConfig.pastorImageUrl} alt={`${siteConfig.pastor} 담임목사`} />
          <p className="m-0 text-2xl font-extrabold text-right">담임목사 {siteConfig.pastor}</p>
        </div>
        <div>
          <p className="mb-5 text-xl font-extrabold text-primary">Senior Pastor</p>
          <h2 className="mb-9 text-[38px] font-extrabold leading-tight md:text-[56px]">
            말씀으로 교회를 세우고
            <br />
            기도로 성도를 섬기겠습니다
          </h2>
          <div className="grid gap-6 text-xl leading-10 text-slate-700">
            <p>
              동서울열방교회에 오신 모든 분들을 주님의 이름으로 환영합니다. 우리는 예수 그리스도의 복음이 삶의 결론이 되는 공동체를 꿈꿉니다.
            </p>
            <p>
              교회는 그리스도께서 피로 사신 공동체입니다. 말씀 앞에 정직하게 서고, 예배 가운데 은혜를 누리며, 삶의 자리에서 복음을 증언하는 교회가 되기를 소망합니다.
            </p>
            <p>
              처음 오신 분에게는 따뜻한 집이 되고, 오래 함께한 성도에게는 다시 복음의 처음 사랑을 회복하는 자리가 되도록 성실히 섬기겠습니다.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

function PeoplePage({ groupKey, title }: { groupKey: StaffGroupKey; title: string }) {
  const people = staffGroups[groupKey];
  const section = aboutSections[groupKey];

  return (
    <Section tone="white">
      <div className="mb-12 grid items-end gap-8 border-b pb-8 lg:grid-cols-[0.78fr_1.22fr]">
        <div>
          <p className="mb-5 text-xl font-extrabold text-primary">Serving People</p>
          <h2 className="text-[42px] font-extrabold leading-tight md:text-[60px]">{title}</h2>
        </div>
        <p className="m-0 text-xl leading-9 text-muted-foreground">맡겨진 자리에서 예배와 목양, 교육과 행정을 함께 섬기는 동서울열방교회 공동체입니다.</p>
      </div>
      <div className="border-t-2 border-primary">
        {people.map((person) => (
          <article className="grid items-center gap-6 border-b py-8 md:grid-cols-[120px_180px_1fr]" key={`${person.role}-${person.name}`}>
            <img className="h-24 w-24 rounded-full object-cover" src={section.image} alt="" />
            <div>
              <p className="mb-2 text-base font-extrabold text-primary">{person.role}</p>
              <h3 className="m-0 text-[30px] font-extrabold">{person.name}</h3>
            </div>
            <p className="m-0 text-lg leading-8 text-muted-foreground">{person.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

function WorshipTimePage() {
  return (
    <Section tone="soft">
      <div className="grid gap-12 lg:grid-cols-2">
        <WorshipRows title="정기예배" rows={regularWorshipRows} />
        <WorshipRows title="다음세대 예배" rows={nextGenerationRows} />
      </div>
      <p className="mt-10 text-xl font-extrabold text-secondary">* 처음 방문하시는 분은 예배 10분 전 안내 데스크로 오시면 됩니다.</p>
    </Section>
  );
}

function InfoSummaryPage({
  title,
  description,
  image,
  Icon,
  eyebrow,
  items,
  button
}: {
  title: string;
  description: string;
  image: string;
  Icon: IconType;
  eyebrow: string;
  items: readonly string[];
  button?: { label: string; to: string };
}) {
  return (
    <Section tone="soft">
      <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="relative min-h-[520px] rounded-md bg-white shadow-soft">
          <img className="absolute inset-0 h-full w-full rounded-md object-cover opacity-80" src={image} alt={`${title} 이미지`} />
          <div className="absolute inset-0 rounded-md bg-primary/10" />
          <div className="absolute bottom-10 left-10 grid h-20 w-20 place-items-center rounded-full bg-white text-primary shadow-soft">
            <Icon size={38} />
          </div>
        </div>
        <div className="rounded-md bg-white p-8 shadow-soft md:p-14">
          <p className="mb-5 text-xl font-extrabold text-primary">{eyebrow}</p>
          <h2 className="mb-7 text-[38px] font-extrabold leading-tight md:text-[56px]">{title}</h2>
          <p className="text-xl leading-9 text-slate-700">{description}</p>
          <ul className="mt-9 grid list-none gap-5 p-0">
            {items.map((item) => (
              <li className="flex gap-3 text-lg font-bold text-slate-700" key={item}>
                <CheckCircle2 className="mt-1 shrink-0 text-primary" size={22} />
                {item}
              </li>
            ))}
          </ul>
          {button ? (
            <Button asChild className="mt-9">
              <Link to={button.to}>{button.label}</Link>
            </Button>
          ) : null}
        </div>
      </div>
    </Section>
  );
}

function DonationPanel() {
  return (
    <Section tone="white">
      <div className="grid gap-12 lg:grid-cols-[0.5fr_1.5fr]">
        <div>
          <CreditCard className="mb-8 text-primary" size={44} />
          <h2 className="mb-5 text-[38px] font-extrabold leading-tight">온라인 헌금</h2>
          <p className="text-lg leading-8 text-muted-foreground">헌금 안내는 기존 온라인 헌금 페이지와 연결됩니다.</p>
        </div>
        <div className="border-t-2 border-primary">
          {["헌금자명과 헌금 종류를 함께 기재해주세요.", "확인이 필요한 경우 교회 연락처로 문의해주세요.", "기부금영수증은 별도 신청 후 안내에 따라 발급됩니다."].map((item) => (
            <div className="border-b py-8 text-xl font-bold text-slate-700" key={item}>{item}</div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function renderSection(sectionKey: AboutSectionKey) {
  if (sectionKey === "confession") return <ConfessionPage />;
  if (sectionKey === "vision") return <VisionPage />;
  if (sectionKey === "history") return <HistoryPage />;
  if (sectionKey === "succession") return <SuccessionPage />;
  if (sectionKey === "pastor") return <PastorPage />;
  if (sectionKey === "worship-time") return <WorshipTimePage />;
  if (sectionKey === "ministers" || sectionKey === "elders" || sectionKey === "deaconesses" || sectionKey === "deacons" || sectionKey === "staff") {
    return <PeoplePage groupKey={sectionKey} title={aboutRoutes[sectionKey].title} />;
  }

  const info = infoPages.find((card) => card.key === sectionKey);
  if (info) return <InfoSummaryPage {...info} />;
  if (sectionKey === "donation-receipt") return <DonationPanel />;

  return <ConfessionPage />;
}

export function AboutPage() {
  const { section } = useParams();
  const sectionKey = isAboutSectionKey(section) ? section : "confession";
  const route = aboutRoutes[sectionKey];

  return (
    <>
      <PageHeader title={route.title} />
      {renderSection(sectionKey)}
    </>
  );
}
