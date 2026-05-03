import { Link } from "react-router-dom";
import { notices } from "@entities/notice/model/mock";

export function HomeNoticePortal() {
  const sortedNotices = [...notices].sort((a, b) => Number(b.isPinned) - Number(a.isPinned));
  const formatDate = (date: string) => {
    const [year, month, day] = date.split("-");
    return `주후 ${year}년 ${month}월 ${day}일`;
  };

  return (
    <section className="mx-auto grid max-w-[1610px] gap-8 px-6 py-24 md:px-10 lg:grid-cols-[1.1fr_0.9fr]">
      <div>
        <div className="mb-9 flex items-center justify-between">
          <h2 className="text-[42px] font-extrabold tracking-normal md:text-[52px]">공지사항</h2>
          <span className="h-3 w-10 rounded-full bg-primary" />
        </div>
        <div className="divide-y border-y border-t-primary">
          {sortedNotices.slice(0, 4).map((notice) => (
            <Link key={notice.id} to="/notice" className="block py-7 hover:text-primary">
              <h3 className="mb-2 text-2xl font-extrabold">{notice.title}</h3>
              <p className="m-0 text-lg text-muted-foreground">{formatDate(notice.createdAt)}</p>
            </Link>
          ))}
        </div>
      </div>
      <div className="grid gap-3">
        <Link to="/about" className="grid min-h-[120px] place-items-center rounded-md bg-primary px-6 text-center text-[28px] font-extrabold text-white">
          담임목사 인사말
        </Link>
        <Link to="/about" className="grid min-h-[120px] place-items-center rounded-md bg-primary px-6 text-center text-[28px] font-extrabold text-white">
          동서울열방교회 소개
        </Link>
        <div className="grid grid-cols-2 gap-0 overflow-hidden rounded-md bg-slate-900 text-white">
          <Link to="/notice" className="grid min-h-[110px] place-items-center border-r border-white/15 text-2xl font-extrabold">
            NEWSROOM
          </Link>
          <Link to="/notice" className="grid min-h-[110px] place-items-center text-2xl font-extrabold">
            PRESS ROOM
          </Link>
        </div>
      </div>
    </section>
  );
}
