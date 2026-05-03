import { Download, FileText, Search } from "lucide-react";
import { archiveItems } from "@entities/archive/model/mock";
import { ArchiveSearch } from "@features/archive-search/ui/ArchiveSearch";
import { PageHeader } from "@shared/ui/PageHeader";
import { Section } from "@shared/ui/Section";

const bulletinDates = ["2026.05.03", "2026.04.26", "2026.04.19", "2026.04.12"];

export function ArchivePage() {
  return (
    <>
      <PageHeader title="주보" />
      <Section tone="soft">
        <div className="grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)]">
          <aside className="rounded-md border bg-white p-7 shadow-soft">
            <h2 className="mb-6 text-2xl font-extrabold">날짜 선택</h2>
            <div className="grid gap-3">
              <select className="h-12 rounded-md border px-4">
                <option>2026년</option>
                <option>2025년</option>
              </select>
              <select className="h-12 rounded-md border px-4">
                <option>05월</option>
                <option>04월</option>
              </select>
              <button className="h-12 rounded-md bg-primary font-extrabold text-white" type="button">조회</button>
            </div>
          </aside>
          <div className="grid gap-5">
            {bulletinDates.map((date, index) => (
              <article key={date} className="grid gap-5 rounded-md border bg-white p-6 shadow-soft md:grid-cols-[180px_minmax(0,1fr)_auto] md:items-center">
                <div className="grid aspect-[4/3] place-items-center rounded-md bg-primary text-center text-white">
                  <FileText size={38} />
                  <strong className="mt-2 block">주보</strong>
                </div>
                <div>
                  <p className="mb-2 text-lg font-extrabold text-primary">주후 {date}</p>
                  <h2 className="mb-2 text-2xl font-extrabold">{index === 0 ? "동서울열방교회 주일 주보" : "주일예배 주보"}</h2>
                  <p className="m-0 text-lg text-muted-foreground">예배 순서, 교회 소식, 기도 제목을 확인하실 수 있습니다.</p>
                </div>
                <button className="inline-flex h-12 items-center justify-center gap-2 rounded-md border px-5 font-extrabold text-primary" type="button">
                  <Download size={18} />
                  보기
                </button>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section title="자료 검색" className="bg-white" lead="설교 원고, PPT, 문서 자료를 확인하세요.">
        <div className="mb-7 flex items-center gap-3 text-muted-foreground">
          <Search size={22} className="text-primary" />
          <span>기존 자료 검색 기능은 유지하고 화면만 reference 스타일에 맞췄습니다.</span>
        </div>
        <ArchiveSearch items={archiveItems} />
      </Section>
    </>
  );
}
