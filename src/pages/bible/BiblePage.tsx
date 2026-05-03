import { BookOpen, Headphones, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { BibleReader } from "@features/bible-search/ui/BibleReader";
import { Button } from "@shared/ui/button";
import { PageHeader } from "@shared/ui/PageHeader";
import { Section } from "@shared/ui/Section";

export function BiblePage() {
  return (
    <>
      <PageHeader title="성경" />
      <Section tone="soft">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: "권별 읽기", description: "성경책을 선택해 본문을 확인합니다.", Icon: BookOpen },
            { title: "본문 검색", description: "사랑, 복음, 믿음 같은 단어를 찾습니다.", Icon: Search },
            { title: "예배 연결", description: "설교 영상과 함께 말씀을 묵상합니다.", Icon: Headphones }
          ].map(({ title, description, Icon }) => (
            <article key={title} className="rounded-md border bg-white p-8 shadow-soft">
              <Icon size={34} className="mb-6 text-primary" />
              <h2 className="mb-4 text-2xl font-extrabold">{title}</h2>
              <p className="m-0 text-lg leading-8 text-muted-foreground">{description}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section title="성경 조회" className="bg-white">
        <BibleReader />
      </Section>
      <Section tone="soft">
        <article className="grid gap-6 rounded-md bg-primary p-9 text-primary-foreground shadow-soft md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
          <div>
            <h2 className="mb-4 text-[34px] font-extrabold">말씀</h2>
            <blockquote className="m-0 text-xl leading-9 text-primary-foreground/90">
              너희가 성경에서 영생을 얻는 줄 생각하고 성경을 연구하거니와 이 성경이 곧 내게 대하여 증언하는
              것이니라
            </blockquote>
            <p className="mt-5 text-lg font-bold">요한복음 5:39</p>
          </div>
          <Button asChild variant="light">
            <Link to="/worship">설교 영상 보기</Link>
          </Button>
        </article>
      </Section>
    </>
  );
}
