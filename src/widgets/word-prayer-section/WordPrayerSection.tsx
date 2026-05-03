import { Link } from "react-router-dom";
import { prayerCards, wordCards } from "@entities/home/model/content";

export function WordPrayerSection() {
  return (
    <div className="relative overflow-hidden bg-[#082846]">
      <div className="pointer-events-none sticky top-16 z-0 -mb-[100vh] grid h-screen place-items-center overflow-hidden">
        <div className="text-center text-[clamp(120px,19vw,360px)] font-extrabold leading-[0.78] tracking-normal text-white/12">
          <div>NATIONS</div>
          <div>CHURCH</div>
        </div>
      </div>

      <section className="relative z-10 mx-auto grid max-w-6xl gap-5 px-4 py-14 lg:grid-cols-[1fr_0.95fr]">
        <article className="rounded-md bg-primary p-8 text-white">
          <p className="mb-5 text-lg font-extrabold">순장마당</p>
          <h2 className="mb-5 text-2xl font-extrabold text-orange-200">복음의식으로 세상 살기</h2>
          <p className="m-0 leading-7 text-white/85">
            본문: 누가복음 21:29-36
            <br />
            말씀: 오직 예수, 오직 복음
            <br />
            날짜: 주후 2026-04-21
          </p>
        </article>
        <div className="grid gap-3">
          {["다락방 소개ㆍ신청", "텔레이오스-양육대상자", "텔레이오스-양육자"].map((item) => (
            <Link key={item} to="/notice" className="grid min-h-20 content-center rounded-md bg-slate-400 px-7 text-lg font-extrabold text-white">
              {item}
            </Link>
          ))}
        </div>
      </section>

      <section className="relative z-10 py-20 text-white">
        <div className="relative mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-4xl font-extrabold tracking-normal text-blue-400">말씀</h2>
          <div className="word-card-track grid gap-6 md:grid-cols-3">
            {wordCards.map((card) => (
              <Link key={card.title} to="/bible" className="flip-card group relative min-h-72 text-center text-white">
                <span className="flip-card-inner absolute inset-0">
                  <span className="flip-card-face grid place-items-center overflow-hidden bg-primary p-8 shadow-soft">
                    <span className="pointer-events-none absolute inset-0 grid place-items-center text-[120px] font-extrabold text-white/5">
                      NATIONS
                    </span>
                    <span className="relative">
                      <strong className="block text-2xl">{card.title}</strong>
                      <span className="mt-5 block text-lg text-white/90">{card.description}</span>
                    </span>
                  </span>
                  <span className="flip-card-back grid place-items-center bg-[#ff5a1f] p-8 shadow-soft">
                    <span>
                      <strong className="block text-2xl">{card.title}</strong>
                      <span className="mt-5 block text-lg leading-8 text-white/90">
                        말씀을 붙들고 하루를 시작하며, 복음 안에서 삶의 방향을 다시 세웁니다.
                      </span>
                      <span className="mt-7 block text-lg font-extrabold text-primary">more</span>
                    </span>
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-4xl font-extrabold tracking-normal text-blue-400">기도</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {prayerCards.map((card) => (
              <Link key={card.title} to="/notice" className="flip-card group min-h-80 rounded-md">
                <span className="flip-card-inner absolute inset-0">
                  <span className="flip-card-face overflow-hidden rounded-md bg-white shadow-soft">
                    <img className="aspect-[4/3] w-full object-cover" src={card.image} alt="" />
                    <strong className="block p-6 text-xl">{card.title}</strong>
                  </span>
                  <span className="flip-card-back grid place-items-center rounded-md bg-primary p-7 text-center text-white">
                    <span>
                      <strong className="block text-2xl">{card.title}</strong>
                      <span className="mt-5 block leading-8 text-white/90">{card.description}</span>
                      <span className="mt-7 block font-extrabold text-blue-200">more</span>
                    </span>
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
