import { trainingItems } from "@entities/home/model/content";

export function TrainingPreviewSection() {
  return (
    <section className="bg-muted py-24">
      <div className="mx-auto max-w-[1610px] px-6 md:px-10">
        <h2 className="mb-9 text-[42px] font-extrabold tracking-normal md:text-[52px]">교육ㆍ훈련</h2>
        <div className="grid gap-8 md:grid-cols-4">
          {trainingItems.map((item) => (
            <article key={item.title} className="min-h-[245px] rounded-md border bg-white p-8 shadow-soft">
              <p className="mb-5 text-lg font-extrabold text-primary">{item.status}</p>
              <p className="mb-3 text-lg text-slate-600">{item.group}</p>
              <h3 className="mb-7 text-[25px] font-extrabold leading-snug">{item.title}</h3>
              <p className="m-0 text-lg font-bold text-muted-foreground">신청기간: {item.date}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
