import { CalendarDays, Search } from "lucide-react";
import { notices } from "@entities/notice/model/mock";
import { PageHeader } from "@shared/ui/PageHeader";
import { Section } from "@shared/ui/Section";

export function NoticePage() {
  const sortedNotices = [...notices].sort((a, b) => Number(b.isPinned) - Number(a.isPinned));

  return (
    <>
      <PageHeader title="공지사항" />
      <Section tone="soft">
        <div className="mb-10 rounded-md border bg-white p-6 shadow-soft">
          <div className="grid gap-4 lg:grid-cols-[1fr_180px_160px]">
            <label className="relative block">
              <span className="sr-only">공지 검색</span>
              <input className="h-14 w-full rounded-md border px-5 pr-12 text-lg outline-none focus:ring-2 focus:ring-primary/20" placeholder="검색어를 입력하세요" />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={22} />
            </label>
            <select className="h-14 rounded-md border px-4 text-lg outline-none">
              <option>전체</option>
              <option>중요</option>
              <option>일반</option>
            </select>
            <button className="h-14 rounded-md bg-primary text-lg font-extrabold text-white" type="button">
              검색
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-md border bg-white shadow-soft">
          <div className="grid grid-cols-[110px_minmax(0,1fr)_180px] border-b bg-[#eef3fb] px-6 py-5 text-center text-lg font-extrabold text-primary">
            <span>구분</span>
            <span>제목</span>
            <span>등록일</span>
          </div>
          <div className="divide-y">
            {sortedNotices.map((notice) => (
              <article key={notice.id} className="grid grid-cols-[110px_minmax(0,1fr)_180px] items-center px-6 py-7">
                <span className={notice.isPinned ? "text-center font-extrabold text-secondary" : "text-center font-bold text-muted-foreground"}>
                  {notice.isPinned ? "중요" : "공지"}
                </span>
                <div>
                  <h2 className="mb-2 text-2xl font-extrabold">{notice.title}</h2>
                  <p className="m-0 line-clamp-2 text-lg leading-7 text-muted-foreground">{notice.content}</p>
                </div>
                <span className="inline-flex items-center justify-center gap-2 text-muted-foreground">
                  <CalendarDays size={18} />
                  {notice.createdAt}
                </span>
              </article>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
