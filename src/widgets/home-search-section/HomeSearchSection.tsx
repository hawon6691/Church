import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import { marqueeTags } from "@entities/home/model/content";

export function HomeSearchSection() {
  return (
    <section className="mx-auto max-w-[1610px] px-6 py-24 md:px-10">
      <h2 className="mb-6 text-[42px] font-extrabold tracking-normal md:text-[52px]">검색</h2>
      <p className="mb-5 text-xl text-slate-700">동서울열방교회 홈페이지에서 궁금하신 서비스를 검색하세요</p>
      <div className="relative max-w-[540px]">
        <Search className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-primary" />
        <input className="h-16 w-full rounded-md border px-6 pr-12 text-lg outline-none focus:ring-2 focus:ring-primary/30" placeholder="검색" />
      </div>
      <div className="relative mt-14 overflow-hidden">
        <div className="marquee-tags flex w-max gap-16 text-[34px] font-extrabold text-slate-400 md:text-[42px]">
          {[...marqueeTags, ...marqueeTags].map((tag, index) => (
            <Link
              key={`${tag}-${index}`}
              to="/notice"
              className={tag.includes("기부금") || tag.includes("비밀번호") ? "text-primary" : "hover:text-primary"}
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
