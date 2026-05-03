import { Link } from "react-router-dom";
import { sermonCards } from "@entities/home/model/content";

export function SermonPreviewSection() {
  return (
    <section className="mx-auto max-w-[1610px] px-6 py-24 md:px-10">
      <h2 className="mb-10 text-[42px] font-extrabold tracking-normal md:text-[52px]">설교ㆍ찬양</h2>
      <div className="grid gap-9 md:grid-cols-3">
        {sermonCards.map((card) => (
          <article key={card.title}>
            <Link to={card.to} className="block">
              <div className="relative aspect-[16/9] overflow-hidden rounded-md shadow-soft">
                <img className="h-full w-full object-cover" src={card.image} alt="" />
                <div className={`absolute inset-0 bg-gradient-to-br ${card.tone} opacity-82`} />
                <div className="absolute inset-0 grid content-center p-8 text-white">
                  <p className="mb-4 text-sm font-bold text-white/80">{card.category}</p>
                  <strong className="max-w-sm text-[30px] leading-tight md:text-[38px]">{card.title}</strong>
                </div>
              </div>
              <p className="mb-3 mt-8 text-lg font-extrabold text-primary">{card.category}</p>
              <h3 className="mb-3 text-[26px] font-extrabold leading-tight">{card.title}</h3>
              <p className="mb-3 text-lg font-bold leading-7 text-muted-foreground">{card.subtitle}</p>
              <p className="m-0 text-lg text-slate-600">{card.meta}</p>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
