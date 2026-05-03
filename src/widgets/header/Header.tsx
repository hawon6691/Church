import { ChevronDown, LockKeyhole, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { aboutMenuGroups, type AboutMenuGroup, type AboutMenuLink } from "@entities/about/model/content";
import { siteConfig } from "@shared/config/site";
import { cn } from "@shared/lib/utils";
import { Button } from "@shared/ui/button";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@shared/ui/sheet";

const mobileNavItems = [
  { to: "/about/confession", label: "교회소개" },
  { to: "/worship", label: "설교ㆍ찬양" },
  { to: "/notice", label: "목양ㆍ사역" },
  { to: "/archive", label: "교육ㆍ훈련" },
  { to: "/bible", label: "성경" },
  { to: "/donation", label: "온라인 헌금" }
];

type MegaSection = {
  heading: string;
  links: AboutMenuLink[];
};

type MegaMenu = {
  label: string;
  highlight?: boolean;
  aboutGroups?: AboutMenuGroup[];
  left?: MegaSection[];
  right?: MegaSection[];
};

const makeLinks = (labels: string[], to = "/about"): AboutMenuLink[] => labels.map((label) => ({ label, to }));

const megaMenus: MegaMenu[] = [
  {
    label: "교회소개",
    highlight: true,
    aboutGroups: aboutMenuGroups
  },
  {
    label: "설교ㆍ찬양",
    highlight: true,
    left: [
      {
        heading: "설교",
        links: makeLinks(["주일예배", "청소년-청년부", "어린이부"], "/worship")
      },
      { heading: "예배", links: makeLinks(["수요저녁기도회", "새벽기도회", "기도온"], "/worship") }
    ],
    right: [
      { heading: "찬양", links: makeLinks(["은혜를 담은 찬양", "찬양대 찬양", "예배헌금 특송", "마음을 여는 찬양", "수요저녁기도회", "쥬빌리통일구국기도회", "토요비전새벽예배", "특별새벽부흥회"], "/worship") },
      { heading: "뉴스ㆍ행사", links: makeLinks(["SRC NEWSROOM", "행사ㆍ집회ㆍ공연", "예배 생방송"], "/notice") }
    ]
  },
  {
    label: "목양ㆍ사역",
    highlight: true,
    left: [
      { heading: "새가족", links: makeLinks(["새가족 등록 안내", "새가족 등록", "새가족 등록자", "새가족 모임 안내", "새가족 모임 수료자", "학습ㆍ세례 안내"], "/notice") },
      { heading: "양육", links: makeLinks(["목양편성도ㆍ교역자", "다락방 소개ㆍ신청", "순장 모임 소개", "교회 양육과정"], "/notice") }
    ],
    right: [
      { heading: "부서안내", links: makeLinks(["부서 홈페이지", "사역소개", "간행물"], "/notice") }
    ]
  },
  {
    label: "교육ㆍ훈련",
    highlight: true,
    left: [
      { heading: "훈련", links: makeLinks(["새가족모임", "제자훈련", "사역훈련", "성경대학", "교리대학", "전도폭발훈련", "큐티세미나", "구약의 파노라마", "신약의 파노라마"], "/archive") },
      { heading: "선교ㆍ전도", links: makeLinks(["전문인선교학교 기본훈련과정(ETC)", "전문인선교학교 심화훈련과정(ITC)", "복음의 서진", "이주민을 위한 한국어교사 양성과정", "이주민을 위한 한국어 교실"], "/archive") }
    ],
    right: [
      { heading: "주일학교", links: makeLinks(["교사훈련원", "청소년 부모훈련원", "어린이 부모훈련원", "미취학 부모 세미나", "어린이 방과 후 놀이터 (TAP)"], "/archive") },
      { heading: "가정사역", links: makeLinks(["결혼준비교실", "사랑의순례", "부부태교교실", "아바러브스쿨", "가정경제스쿨", "인생광야학교"], "/archive") }
    ]
  }
];

function MegaColumn({ sections }: { sections: MegaSection[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {sections.map((section, index) => (
        <div key={`${section.heading}-${index}`}>
          {section.heading ? <h3 className="mb-3 text-lg font-extrabold tracking-normal text-blue-500">{section.heading}</h3> : null}
          <ul className="m-0 grid list-none gap-2.5 p-0">
            {section.links.map((link) => (
              <li key={link.label}>
                <Link className="text-[15px] font-bold leading-tight text-slate-700 hover:text-primary" to={link.to}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function AboutMegaGroup({ group }: { group: AboutMenuGroup }) {
  const columns = group.columns ?? (group.links ? [group.links] : []);

  return (
    <section className="grid gap-8 lg:grid-cols-[180px_1fr]">
      <h3 className="text-[24px] font-extrabold tracking-normal text-primary">{group.heading}</h3>
      <div className="grid gap-x-12 gap-y-3 sm:grid-cols-2">
        {columns.map((column, index) => (
          <ul className="m-0 grid list-none content-start gap-5 p-0" key={`${group.heading}-${index}`}>
            {column.map((link) => (
              <li key={link.label}>
                <Link
                  className="text-[20px] font-extrabold leading-tight text-slate-700 transition hover:text-primary"
                  to={link.to}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}

function AboutMegaMenu({ groups }: { groups: AboutMenuGroup[] }) {
  const [guide, people, info] = groups;

  return (
    <div className="pointer-events-auto mx-auto grid max-w-[1610px] gap-12 rounded-b-md border-t bg-white px-12 py-12 shadow-[0_24px_60px_rgb(15_23_42/12%)] xl:grid-cols-[1.18fr_0.82fr] xl:px-20 xl:py-16">
      <div className="grid gap-12">
        {guide ? <AboutMegaGroup group={guide} /> : null}
        {people ? <AboutMegaGroup group={people} /> : null}
      </div>
      <div className="border-border xl:border-l xl:pl-16">
        {info ? <AboutMegaGroup group={info} /> : null}
      </div>
    </div>
  );
}

export function Header() {
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
  const openMenu = openMenuIndex === null ? null : megaMenus[openMenuIndex];

  return (
    <header
      className="sticky top-0 z-30 border-b bg-white/98 backdrop-blur"
      onMouseLeave={() => setOpenMenuIndex(null)}
    >
      <div className="mx-auto flex h-[104px] w-full max-w-[1610px] items-center justify-between gap-5 px-6 md:px-10">
        <NavLink className="inline-flex min-w-0 items-center gap-2 whitespace-nowrap text-primary md:gap-3" to="/">
          <img
            className="h-10 w-10 shrink-0 rounded-full object-cover md:h-12 md:w-12"
            src={siteConfig.logoUrl}
            alt="동서울열방교회 로고"
          />
          <span className="text-[22px] font-extrabold tracking-normal sm:text-[26px] md:text-[30px]">{siteConfig.name}</span>
        </NavLink>

        <nav className="hidden items-center gap-12 xl:flex" aria-label="주요 메뉴">
          {megaMenus.map((menu, index) => (
            <button
              className={cn(
                "inline-flex min-h-10 items-center gap-2 text-[25px] font-extrabold tracking-normal text-slate-700 transition hover:text-primary",
                openMenuIndex === index && "text-primary"
              )}
              key={menu.label}
              onMouseEnter={() => setOpenMenuIndex(index)}
              type="button"
            >
              {menu.label}
              <ChevronDown size={18} />
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-2 xl:flex">
          <Button asChild variant="ghost" size="sm" className="text-base">
            <Link to="/admin">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-white">
                <LockKeyhole size={15} />
              </span>
              로그인
            </Link>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button className="xl:hidden" type="button" variant="outline" size="icon" aria-label="메뉴 열기">
              <Menu size={22} />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>{siteConfig.name}</SheetTitle>
            </SheetHeader>
            <nav className="mt-8 grid gap-2" aria-label="모바일 주요 메뉴">
              <SheetClose asChild>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    cn(
                      "flex min-h-12 items-center rounded-md px-3 text-base font-bold text-slate-700 transition hover:bg-accent hover:text-primary",
                      isActive && "bg-accent text-primary"
                    )
                  }
                >
                  홈
                </NavLink>
              </SheetClose>
              {mobileNavItems.map((item) => (
                <SheetClose asChild key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      cn(
                        "flex min-h-12 items-center rounded-md px-3 text-base font-bold text-slate-700 transition hover:bg-accent hover:text-primary",
                        isActive && "bg-accent text-primary"
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                </SheetClose>
              ))}
            </nav>
            <SheetClose asChild>
              <Button className="mt-8 w-full" variant="outline">
                <X size={18} />
                닫기
              </Button>
            </SheetClose>
          </SheetContent>
        </Sheet>
      </div>

      <div
        className={cn(
          "pointer-events-none absolute left-0 right-0 top-full hidden px-8 pb-8 transition duration-200 lg:block",
          openMenu ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
        )}
      >
        {openMenu ? (
          openMenu.aboutGroups ? (
            <AboutMegaMenu groups={openMenu.aboutGroups} />
          ) : (
            <div className="pointer-events-auto mx-auto grid max-w-[1610px] gap-10 rounded-b-md border-t bg-white px-24 py-9 shadow-[0_24px_60px_rgb(15_23_42/12%)] lg:grid-cols-2">
              <MegaColumn sections={openMenu.left ?? []} />
              <div className="border-l border-border pl-12">
                <MegaColumn sections={openMenu.right ?? []} />
              </div>
            </div>
          )
        ) : null}
      </div>
    </header>
  );
}
