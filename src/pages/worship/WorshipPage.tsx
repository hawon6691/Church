import { BookOpen, CalendarDays, ChevronDown, FileText, Heart, List, MessageCircle, PlayCircle, Share2, Volume2 } from "lucide-react";
import { Link } from "react-router-dom";
import { sermonCards } from "@entities/home/model/content";
import { nextGenerationRows, regularWorshipRows } from "@entities/worship/model/mock";
import { siteConfig } from "@shared/config/site";
import { Button } from "@shared/ui/button";
import { PageHeader } from "@shared/ui/PageHeader";
import { Section } from "@shared/ui/Section";

const toolbarItems = [
  { label: "목록", Icon: List },
  { label: "일정", Icon: CalendarDays },
  { label: "상담", Icon: MessageCircle },
  { label: "좋아요", Icon: Heart },
  { label: "공유", Icon: Share2 },
  { label: "음량", Icon: Volume2 },
  { label: "영상", Icon: PlayCircle }
];

const sermonSlides = [
  "복음을 영화롭게, 진리가 결론되게",
  "복음을 깊이 깨달으면 기도가 됩니다",
  "어둠 속의 도약",
  "성경은 무엇을 말하는가?"
];

function ScheduleTable({ rows }: { rows: typeof regularWorshipRows }) {
  return (
    <table className="reference-table">
      <tbody>
        {rows.map((row) => (
          <tr key={row.name}>
            <th scope="row">{row.name}</th>
            <td className="time-cell whitespace-pre-line">{row.time}</td>
            <td className="whitespace-pre-line">{row.place}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function WorshipPage() {
  const featured = sermonCards[0];

  return (
    <>
      <PageHeader title="주일예배" />
      <aside className="fixed right-0 top-[190px] z-20 hidden w-20 overflow-hidden rounded-l-md bg-[#b9c8ec] py-8 text-white xl:block">
        <div className="grid gap-9">
          {toolbarItems.map(({ label, Icon }) => (
            <button key={label} className="grid place-items-center" type="button" aria-label={label} title={label}>
              <Icon size={22} />
            </button>
          ))}
        </div>
      </aside>

      <Section className="bg-white pt-10" contentClassName="max-w-[1610px]">
        <div className="mx-auto max-w-[1470px]">
          <div className="relative aspect-video overflow-hidden bg-slate-950">
            <iframe
              className="absolute inset-0 h-full w-full"
              src={siteConfig.youtubePlaylist}
              title="주일 예배 설교 재생목록"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="mt-12">
            <h2 className="mb-3 text-[30px] font-extrabold">{featured.title}</h2>
            <p className="mb-5 text-xl font-bold text-muted-foreground">{featured.subtitle}</p>
            <p className="text-xl text-slate-700">{featured.meta}</p>
          </div>
        </div>

        <div className="mt-14 overflow-hidden">
          <div className="grid gap-7 md:grid-cols-4">
            {sermonSlides.map((title, index) => (
              <Link
                key={title}
                to="/worship"
                className={index === 0 ? "rounded-md bg-primary p-8 text-white shadow-soft" : "rounded-md border bg-white p-8 shadow-soft"}
              >
                <h3 className={index === 0 ? "mb-5 line-clamp-2 text-2xl font-extrabold text-secondary" : "mb-5 line-clamp-2 text-2xl font-extrabold"}>
                  {title}
                </h3>
                <p className={index === 0 ? "mb-9 text-lg font-bold text-white/85" : "mb-9 text-lg font-bold text-muted-foreground"}>
                  로마서 5:5~11
                  <br />
                  서유웅 담임목사 · 주후 2026.04.19
                </p>
                <span className={index === 0 ? "block h-2 rounded-full bg-white" : "block h-2 rounded-full bg-muted"} />
              </Link>
            ))}
          </div>
          <div className="mt-9 flex justify-center gap-4">
            <Button variant="outline" size="icon" aria-label="이전 설교">←</Button>
            <Button size="icon" aria-label="다음 설교">→</Button>
          </div>
        </div>
      </Section>

      <Section className="bg-white pt-2" contentClassName="max-w-[1610px]">
        <div className="grid gap-8">
          {[
            { title: "설교 본문", Icon: BookOpen },
            { title: "관련 찬양", Icon: PlayCircle },
            { title: "대외방송 안내", Icon: Volume2 },
            { title: "설교 노트", Icon: FileText }
          ].map(({ title, Icon }) => (
            <button
              key={title}
              className="flex min-h-24 items-center gap-6 rounded-md border bg-white px-10 text-left text-[30px] font-extrabold shadow-soft"
              type="button"
            >
              <ChevronDown className="text-primary" size={30} />
              <Icon className="text-primary" size={28} />
              {title}
            </button>
          ))}
        </div>
      </Section>

      <Section title="예배시간" tone="soft" contentClassName="max-w-[1610px]">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="mb-8 text-[32px] font-extrabold">정기예배</h3>
            <ScheduleTable rows={regularWorshipRows} />
          </div>
          <div>
            <h3 className="mb-8 text-[32px] font-extrabold">다음세대 예배</h3>
            <ScheduleTable rows={nextGenerationRows} />
          </div>
        </div>
      </Section>
    </>
  );
}
