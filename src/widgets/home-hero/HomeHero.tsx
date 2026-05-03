import { Link } from "react-router-dom";
import { heroLinks } from "@entities/home/model/content";
import { Button } from "@shared/ui/button";

export function HomeHero() {
  return (
    <section className="hero-sketch-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(103deg,rgb(0_96_115/90%),rgb(201_151_96/62%)_52%,rgb(185_91_34/88%))]" />
      <div className="sketch-cross absolute inset-0 opacity-70" />
      <div className="absolute -left-20 bottom-0 h-[72%] w-[42%] rounded-[50%] border-[28px] border-black/18 opacity-60" />
      <div className="absolute right-[-6%] top-[-4%] h-[74%] w-[38%] rotate-[-10deg] border-y-[28px] border-black/22 opacity-70" />
      <div className="absolute bottom-0 right-0 h-[32%] w-[34%] border-t-[22px] border-black/16 opacity-70" />
      <div className="relative mx-auto flex min-h-[760px] max-w-[1610px] flex-col items-center justify-center px-6 py-20 text-center text-white md:px-10 lg:min-h-[858px]">
        <div className="w-full max-w-[342px] rounded-md border border-white/75 bg-white/12 shadow-[0_18px_48px_rgb(0_0_0/18%)] backdrop-blur-[2px] md:max-w-[530px]">
          <div className="px-5 py-8 md:px-10 md:py-9">
            <p className="mb-3 text-base font-extrabold tracking-[0.28em] md:text-lg">로/마/서/강/해</p>
            <p className="mb-2 text-sm font-bold text-amber-100">롬 1:14, 15:16</p>
            <h1 className="mb-5 text-[31px] font-extrabold leading-tight tracking-normal drop-shadow md:text-[54px]">
            <span className="block md:whitespace-nowrap">복음을 영화롭게,</span>
            <span className="block md:whitespace-nowrap">진리가 결론되게</span>
          </h1>
          </div>
          <div className="grid grid-cols-2 overflow-hidden rounded-b-md bg-[#9f492f] text-[11px] font-extrabold text-white md:text-[13px]">
            <span className="border-r border-white/30 px-2 py-3 md:px-5">Gospel Glorified</span>
            <span className="px-2 py-3 md:px-5">Truth Concluded</span>
          </div>
        </div>
        <div className="mt-14 grid w-full max-w-[342px] grid-cols-2 justify-center gap-3 md:flex md:max-w-none md:gap-4">
            <Button asChild size="lg" className="min-w-0 px-2 text-sm bg-secondary text-white hover:bg-secondary/95 md:min-w-40 md:px-6 md:text-sm">
              <Link to="/worship">생방송</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="min-w-0 px-2 text-sm border-white/80 bg-white/10 text-white hover:bg-white hover:text-primary md:min-w-40 md:px-6 md:text-sm">
              <Link to="/notice">은혜게시판</Link>
            </Button>
          </div>
        <div className="mt-12 grid w-full max-w-[342px] gap-7 sm:grid-cols-2 md:max-w-[1060px] lg:grid-cols-4">
          {heroLinks.map((item) => (
            <Link
              key={item}
              to="/worship"
              className="grid min-h-[78px] place-items-center rounded-md bg-white/88 px-4 py-4 text-base font-extrabold leading-snug text-slate-800 shadow-soft backdrop-blur transition hover:-translate-y-0.5 hover:bg-white hover:shadow-lifted md:min-h-[86px] md:px-5 md:text-lg"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
