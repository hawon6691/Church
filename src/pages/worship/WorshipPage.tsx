import {
  ChevronDown,
  CreditCard,
  FileText,
  Heart,
  List,
  Play,
  Plus,
  Radio,
  Search,
  Share2,
  Video
} from "lucide-react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import {
  broadcastRows,
  eventSections,
  liveScheduleRows,
  newsroomItems,
  praiseCategories,
  praiseItems,
  relatedPraise,
  scripturePassages,
  sermons,
  worshipRoutes,
  type MediaCard,
  type SermonItem,
  type WorshipSection
} from "@entities/worship/model/mock";
import { siteConfig } from "@shared/config/site";
import { cn } from "@shared/lib/utils";
import { Button } from "@shared/ui/button";
import { PageHeader } from "@shared/ui/PageHeader";

const toolbarItems = [
  { label: "설교목록", Icon: List },
  { label: "설교노트", Icon: FileText },
  { label: "온라인 헌금", Icon: CreditCard },
  { label: "은혜 게시판", Icon: Heart },
  { label: "공유", Icon: Share2 },
  { label: "비디오", Icon: Video },
  { label: "실황", Icon: Radio }
];

const validSections = new Set<WorshipSection>(["sermon", "praise", "live", "newsroom", "events"]);

function resolveSection(section?: string): WorshipSection {
  return section && validSections.has(section as WorshipSection) ? (section as WorshipSection) : "sermon";
}

function DetailShell({ title, children, showTitle = true }: { title: string; children: React.ReactNode; showTitle?: boolean }) {
  return (
    <>
      {showTitle ? <PageHeader title={title} /> : null}
      <main className="bg-white">{children}</main>
    </>
  );
}

function FloatingToolbar({ compact = false, activeLabel = "비디오" }: { compact?: boolean; activeLabel?: string }) {
  const items = compact
    ? [
        { label: "온라인 헌금", Icon: CreditCard },
        { label: "공유", Icon: Share2 },
        { label: "실황", Icon: Radio }
      ]
    : toolbarItems;

  return (
    <aside className="group fixed right-0 top-[118px] z-20 hidden w-[242px] translate-x-[174px] overflow-hidden rounded-l-md bg-[#b9c8ec] py-5 text-white shadow-lifted transition-transform duration-500 ease-out hover:translate-x-0 xl:block">
      <div className="grid">
        {items.map(({ label, Icon }) => (
          <button
            key={label}
            className={cn(
              "flex h-[74px] items-center gap-7 rounded-md px-8 text-left text-[22px] font-bold tracking-normal transition duration-200 hover:bg-[#6b86d1] hover:text-white",
              activeLabel === label && "group-hover:bg-[#6b86d1]"
            )}
            type="button"
          >
            <Icon className="shrink-0" size={21} />
            <span className="translate-x-2 whitespace-nowrap opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
              {label}
            </span>
          </button>
        ))}
      </div>
    </aside>
  );
}

function VideoFrame({ title, variant = "sermon", sermon }: { title: string; variant?: "sermon" | "newsroom"; sermon?: SermonItem }) {
  const imageSrc = sermon?.image ?? (variant === "newsroom" ? "/20251207_103249.jpg" : "/20251207_103253.jpg");

  return (
    <a
      className={cn(
        "group relative block aspect-video overflow-hidden bg-gradient-to-br text-white shadow-lifted",
        sermon?.tone ?? (variant === "newsroom" ? "from-primary via-[#0f6cb5] to-[#25385f]" : "from-[#21133f] via-primary to-[#426b9e]")
      )}
      href={siteConfig.youtubePlaylist}
      rel="noreferrer"
      target="_blank"
    >
      <img className="h-full w-full object-cover opacity-62 mix-blend-screen transition duration-500 group-hover:scale-105" src={imageSrc} alt="" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-slate-950/10 to-primary/10" />
      <div className="absolute left-7 top-7 rounded-full bg-white/18 px-4 py-2 text-sm font-extrabold md:left-9 md:top-9">
        {variant === "newsroom" ? "DSRC NEWSROOM" : "동서울열방교회"}
      </div>
      <div className="absolute left-7 top-20 max-w-[62%] md:left-9 md:top-24">
        <p className="mb-4 text-base font-extrabold text-white/90 md:text-xl">{sermon?.scripture ?? title}</p>
        <p className="max-w-[660px] text-[30px] font-extrabold leading-tight tracking-normal md:text-[52px]">
          {sermon?.title ?? (
            <>
              복음을 영화롭게
              <br />
              진리가 결론되게
            </>
          )}
        </p>
      </div>
      <span className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-red-600 shadow-lifted transition group-hover:scale-105">
        <span className="sr-only">{title} 열기</span>
        <Play className="ml-1 fill-white" size={26} />
      </span>
      <span className="absolute bottom-7 right-7 rounded-full bg-black/35 px-4 py-2 text-sm font-bold">
        YouTube
      </span>
    </a>
  );
}

function SermonCarousel({ activeSermonId, items }: { activeSermonId: string; items: SermonItem[] }) {
  return (
    <div className="mt-12 overflow-hidden">
      <div className="flex gap-6 overflow-x-auto pb-2">
        {items.map((sermon) => {
          const isActive = sermon.id === activeSermonId;

          return (
          <Link
            key={sermon.id}
            to={`/worship/sermon?flag=${sermon.flag}&sermon=${sermon.id}`}
            className={cn(
              "min-h-[190px] w-[260px] shrink-0 rounded-md border p-7 shadow-soft transition hover:-translate-y-1",
              isActive ? "border-primary bg-primary text-white" : "bg-white"
            )}
          >
            <h3 className={cn("mb-4 line-clamp-2 text-lg font-extrabold leading-tight", isActive && "text-secondary")}>
              {sermon.title}
            </h3>
            <p className={cn("mb-7 text-sm font-bold leading-6", isActive ? "text-white/90" : "text-muted-foreground")}>
              {sermon.englishTitle}
              <br />
              {sermon.scripture}
              <br />
              {sermon.speaker} · {sermon.date}
            </p>
            <span className={cn("block h-2 rounded-full", isActive ? "bg-white" : "bg-muted")} />
          </Link>
          );
        })}
      </div>
      <div className="mt-8 flex justify-center gap-4">
        <Button className="h-9 w-9" variant="outline" size="icon" aria-label="이전 설교">
          ←
        </Button>
        <Button className="h-9 w-9" size="icon" aria-label="다음 설교">
          →
        </Button>
      </div>
    </div>
  );
}

function AccordionPanel({ title, children, defaultOpen = false }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  return (
    <details className="group rounded-md border bg-white shadow-soft" {...(defaultOpen ? { open: true } : {})}>
      <summary className="flex min-h-[64px] cursor-pointer list-none items-center gap-3 px-7 text-[22px] font-extrabold tracking-normal text-slate-700 marker:content-none md:px-8 md:text-[26px] [&::-webkit-details-marker]:hidden">
        <ChevronDown className="text-blue-500 transition group-open:rotate-180" size={24} />
        {title}
      </summary>
      <div className="border-t px-7 py-7 md:px-8">{children}</div>
    </details>
  );
}

function SermonPage() {
  const [searchParams] = useSearchParams();
  const requestedSermonId = searchParams.get("sermon");
  const requestedFlag = searchParams.get("flag");
  const matchedBySermon = sermons.find((sermon) => sermon.id === requestedSermonId);
  const matchedByFlag = requestedFlag ? sermons.filter((sermon) => sermon.flag === requestedFlag) : [];
  const featured = matchedBySermon ?? matchedByFlag[0] ?? sermons[0];
  const carouselItems = sermons.filter((sermon) => sermon.flag === featured.flag);
  const visibleSermons = carouselItems.length > 0 ? carouselItems : sermons;

  return (
    <DetailShell title={featured.category} showTitle={false}>
      <FloatingToolbar activeLabel="비디오" />
      <section className="mx-auto w-full max-w-[1280px] px-6 py-10 md:px-10 md:py-14">
        <h1 className="mb-10 text-[34px] font-extrabold leading-tight tracking-normal md:text-[42px]">{featured.category}</h1>
        <div className="mx-auto max-w-[1175px]">
          <VideoFrame title={`${featured.category} 설교 재생목록`} sermon={featured} />
          <div className="mt-8">
            <h2 className="mb-2 text-[22px] font-extrabold tracking-normal md:text-[26px]">{featured.title}</h2>
            <p className="mb-4 text-base font-bold text-muted-foreground md:text-lg">{featured.englishTitle}</p>
            <p className="text-base text-slate-700 md:text-lg">
              {featured.scripture} · {featured.speaker} · {featured.date}
            </p>
          </div>
        </div>
        <SermonCarousel activeSermonId={featured.id} items={visibleSermons} />
      </section>

      <section className="mx-auto grid w-full max-w-[1280px] gap-6 px-6 pb-24 md:px-10">
        <AccordionPanel title="설교 본문" defaultOpen>
          <div className="grid gap-4 text-base leading-8 md:text-lg">
            <p className="font-bold">[{featured.scripture}]</p>
            {scripturePassages.map((passage) => (
              <div key={passage.verse}>
                <p>
                  <span className="mr-2 font-extrabold">{passage.verse}</span>
                  {passage.korean}
                </p>
                <p className="mt-1 text-sm leading-7 text-muted-foreground md:text-base">{passage.english}</p>
              </div>
            ))}
          </div>
        </AccordionPanel>

        <AccordionPanel title="관련 찬양">
          <ul className="grid gap-4 text-base leading-8 md:text-lg">
            {relatedPraise.map((item, index) => (
              <li key={item} className="flex gap-3">
                <span className="mt-3 h-2 w-2 rounded-full bg-primary" />
                <span>
                  <mark className="rounded-md bg-[#fff2db] px-2 py-1 text-slate-800">관련 찬양 {index + 1}</mark>
                  <span className="ml-3">{item}</span>
                </span>
              </li>
            ))}
          </ul>
        </AccordionPanel>

        <AccordionPanel title="대외방송 안내">
          <div className="overflow-x-auto">
            <table className="reference-table min-w-[900px]">
              <thead>
                <tr>
                  {["구분", "주일 sun", "월 mon", "화 tue", "수 wed", "목 thu", "금 fri", "토 sat"].map((heading) => (
                    <th key={heading}>{heading}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {broadcastRows.map((row) => (
                  <tr key={row.channel}>
                    <th scope="row">{row.channel}</th>
                    <td className="whitespace-pre-line">{row.sun}</td>
                    <td className="whitespace-pre-line">{row.mon}</td>
                    <td className="whitespace-pre-line">{row.tue}</td>
                    <td className="whitespace-pre-line">{row.wed}</td>
                    <td className="whitespace-pre-line">{row.thu}</td>
                    <td className="whitespace-pre-line">{row.fri}</td>
                    <td className="whitespace-pre-line">{row.sat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AccordionPanel>

        <AccordionPanel title="설교 노트">
          <div className="min-h-[360px] rounded-sm border bg-[#fafafa] p-6">
            <div className="mb-6 flex flex-wrap gap-2 border-b pb-3 text-sm text-slate-600">
              <span className="rounded-sm border bg-white px-2 py-1">Noto Sans</span>
              <span className="rounded-sm border bg-white px-2 py-1">11pt</span>
              <span className="rounded-sm border bg-white px-2 py-1 font-bold">가</span>
              <span className="rounded-sm border bg-white px-2 py-1 underline">가</span>
            </div>
            <div className="grid h-64 place-items-end">
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Button variant="outline">은혜게시판 공유</Button>
                <Button>저장하기</Button>
              </div>
            </div>
          </div>
        </AccordionPanel>
      </section>
    </DetailShell>
  );
}

function PraisePage() {
  const [searchParams] = useSearchParams();
  const requestedFlag = searchParams.get("flag")?.toUpperCase();
  const activeCategory =
    praiseCategories.find((category) => category.flag === requestedFlag);
  const visiblePraiseItems = activeCategory
    ? praiseItems.filter((item) => item.category === activeCategory.label)
    : praiseItems;

  return (
    <DetailShell title="찬양">
      <section className="mx-auto w-full max-w-[1510px] px-6 py-8 md:px-10 md:py-14">
        <nav className="mb-12 flex gap-6 overflow-x-auto whitespace-nowrap" aria-label="찬양 분류">
          {praiseCategories.map((category) => (
            <Link
              key={category.flag}
              to={`/worship/praise?flag=${category.flag}`}
              className={cn(
                "border-b-2 pb-4 text-lg font-extrabold tracking-normal md:text-[22px]",
                activeCategory?.flag === category.flag ? "border-primary text-primary" : "border-border text-slate-700"
              )}
            >
              {category.label}
            </Link>
          ))}
          <Link
            to="/worship/praise"
            className={cn(
              "border-b-2 pb-4 text-lg font-extrabold tracking-normal md:text-[22px]",
              activeCategory ? "border-border text-slate-700" : "border-primary text-primary"
            )}
          >
            전체
          </Link>
        </nav>

        <div className="mb-14 flex flex-col items-stretch justify-center gap-2 md:flex-row">
          <Button className="h-14 rounded-md px-8 text-base">전체담기</Button>
          <label className="flex h-14 w-full max-w-[670px] items-center gap-4 rounded-md border border-primary/40 px-6 text-lg text-muted-foreground shadow-soft">
            <span className="sr-only">찬양 검색</span>
            <input
              className="min-w-0 flex-1 border-0 bg-transparent outline-none"
              placeholder="찬양 검색 (예 : 곡 제목, 날짜, 분류)"
              type="search"
            />
            <Search size={26} />
          </label>
        </div>

        <div className="grid gap-x-16 gap-y-12 lg:grid-cols-2">
          {visiblePraiseItems.map((item) => (
            <article key={`${item.title}-${item.date}`} className="grid gap-4 border-l border-border pl-7 sm:grid-cols-[1fr_auto] sm:items-center">
              <div>
                <h2 className="mb-4 text-lg font-extrabold tracking-normal md:text-xl">{item.title}</h2>
                <p className="text-base text-slate-700 md:text-lg">
                  {item.category} <span className="mx-2">ㆍ</span> {item.date}
                </p>
              </div>
              <div className="flex justify-start gap-3 sm:justify-end">
                <Button size="icon" aria-label={`${item.title} 담기`} className="h-12 w-12 rounded-full">
                  <Plus size={20} />
                </Button>
                <Button size="icon" aria-label={`${item.title} 재생`} className="h-12 w-12 rounded-full">
                  <Play className="ml-0.5 fill-white" size={18} />
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 overflow-x-auto pb-2">
          <div className="mx-auto flex w-max overflow-hidden rounded-md border bg-white">
            {["«", "‹", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "›", "»"].map((page) => (
              <button
                key={page}
                className={cn(
                  "grid h-16 w-16 place-items-center border-r text-lg font-extrabold last:border-r-0",
                  page === "1" ? "bg-primary text-white" : "text-slate-700"
                )}
                type="button"
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </section>
    </DetailShell>
  );
}

function LivePage() {
  return (
    <DetailShell title="인터넷 생방송">
      <FloatingToolbar compact />
      <section className="relative min-h-[660px] overflow-hidden bg-gradient-to-br from-[#56309a] via-primary to-[#167cc4] text-white">
        <div className="absolute inset-x-0 bottom-0 h-28 bg-white [clip-path:polygon(0_65%,30%_72%,58%_100%,84%_70%,100%_62%,100%_100%,0_100%)]" />
        <div className="mx-auto flex min-h-[660px] w-full max-w-[1610px] items-center justify-center px-6 text-center md:px-10">
          <div>
            <p className="mx-auto mb-6 w-fit rounded-full bg-white/18 px-5 py-2 text-xl font-bold">다음 인터넷 생방송</p>
            <h2 className="mb-16 text-[42px] font-extrabold tracking-normal md:text-[58px]">수요저녁기도회</h2>
            <p className="text-[28px] font-extrabold tracking-normal md:text-[42px]">
              주후 <span className="text-[#35c8ff]">2026년 05월 06일</span> ㆍ 오후 <span className="text-[#35c8ff]">07시 30분</span>
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-[1610px] gap-10 px-6 py-20 md:px-10 lg:grid-cols-2">
        <LiveTable rows={liveScheduleRows.slice(0, 4)} title="주일예배" />
        <LiveTable rows={liveScheduleRows.slice(4)} />
      </section>
    </DetailShell>
  );
}

function LiveTable({ rows, title }: { rows: typeof liveScheduleRows; title?: string }) {
  return (
    <table className="reference-table">
      <tbody>
        {rows.map((row, index) => (
          <tr key={`${row.group}-${row.order}-${row.time}`}>
            {title && index === 0 ? (
              <th rowSpan={rows.length} scope="row" className="w-[32%] text-[26px]">
                {title}
              </th>
            ) : null}
            <th scope="row" className="w-[28%]">
              {row.order || row.group}
            </th>
            <td>
              {row.time}
              {row.stream ? <span className="ml-4 text-sm text-primary">생방송</span> : null}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function MediaThumbnail({ item }: { item: MediaCard }) {
  return (
    <div className={cn("relative aspect-video overflow-hidden rounded-t-md bg-gradient-to-br", item.tone)}>
      <img className="h-full w-full object-cover opacity-45 mix-blend-screen" src={item.image} alt="" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/45 to-transparent" />
      <p className="absolute left-6 top-5 text-base font-extrabold text-white">{item.eyebrow}</p>
      <span className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-red-600 text-white shadow-lifted">
        <Play className="ml-1 fill-white" size={26} />
      </span>
    </div>
  );
}

function MediaRail({ items, compact = false }: { items: MediaCard[]; compact?: boolean }) {
  return (
    <div className="flex gap-7 overflow-x-auto pb-4">
      {items.map((item, index) => (
        <article key={`${item.title}-${index}`} className="w-[330px] shrink-0 overflow-hidden rounded-md bg-white shadow-soft">
          <MediaThumbnail item={item} />
          <div className="p-7">
            <p className="mb-4 text-base font-extrabold text-primary">{item.eyebrow}</p>
            <h3 className={cn("mb-5 line-clamp-2 font-extrabold tracking-normal", compact ? "text-xl" : "text-2xl")}>{item.title}</h3>
            <p className="text-lg leading-8 text-muted-foreground">
              {item.speaker}
              <br />
              {item.date}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}

function NewsroomPage() {
  const featured = newsroomItems[0];

  return (
    <DetailShell title="SRC NEWSROOM">
      <FloatingToolbar compact />
      <section className="mx-auto w-full max-w-[1610px] px-6 py-10 md:px-10 md:py-16">
        <div className="mx-auto max-w-[1470px]">
          <VideoFrame title="SRC NEWSROOM 재생목록" variant="newsroom" />
          <div className="mt-10">
            <h2 className="mb-5 text-[26px] font-extrabold leading-tight tracking-normal md:text-[32px]">{featured.title}</h2>
            <p className="text-xl text-slate-700">{featured.date}</p>
          </div>
        </div>
        <div className="mt-16">
          <MediaRail items={newsroomItems} compact />
        </div>
      </section>
    </DetailShell>
  );
}

function EventsPage() {
  return (
    <DetailShell title="행사ㆍ집회ㆍ공연">
      <div className="grid">
        {eventSections.map((section, index) => (
          <section key={section.title} className={cn("py-16", index % 2 === 0 ? "bg-muted" : "bg-white")}>
            <div className="mx-auto w-full max-w-[1610px] px-6 md:px-10">
              <div className="mb-10 flex items-center justify-between gap-6">
                <h2 className="text-[28px] font-extrabold tracking-normal md:text-[36px]">{section.title}</h2>
                <Button variant="outline" className="rounded-full px-8">
                  목록
                </Button>
              </div>
              <MediaRail items={section.items} />
            </div>
          </section>
        ))}
      </div>
    </DetailShell>
  );
}

export function WorshipPage() {
  const { section } = useParams();
  const currentSection = resolveSection(section);

  if (currentSection === "praise") return <PraisePage />;
  if (currentSection === "live") return <LivePage />;
  if (currentSection === "newsroom") return <NewsroomPage />;
  if (currentSection === "events") return <EventsPage />;

  return <SermonPage />;
}

export { worshipRoutes };
