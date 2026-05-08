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
  { to: "/worship/sermon", label: "설교ㆍ찬양" },
  { to: "/ministry/new-family-guide", label: "목양ㆍ사역" },
  { to: "/archive", label: "교육ㆍ훈련" },
  { to: "/bible", label: "성경" },
  { to: "/donation", label: "온라인 헌금" }
];

type MegaSection = {
  heading: string;
  links: AboutMenuLink[];
  columns?: AboutMenuLink[][];
};

type MegaMenu = {
  label: string;
  highlight?: boolean;
  aboutGroups?: AboutMenuGroup[];
  left?: MegaSection[];
  right?: MegaSection[];
};

const makeLinks = (labels: string[], to = "/about"): AboutMenuLink[] => labels.map((label) => ({ label, to }));

const makeMappedLinks = (items: Array<[string, string]>): AboutMenuLink[] =>
  items.map(([label, to]) => ({ label, to }));

const sermonLinks = makeMappedLinks([
  ["주일예배", "/worship/sermon?flag=sun"],
  ["주일예배(초청)", "/worship/sermon?flag=chocung"],
  ["수요저녁기도회", "/worship/sermon?flag=wed"],
  ["쥬빌리통일구국기도회", "/worship/sermon?flag=jubilee"],
  ["사랑글로벌기도회", "/worship/sermon?flag=global"],
  ["새벽기도회", "/worship/sermon?flag=dawn"],
  ["토요비전새벽예배", "/worship/sermon?flag=tovision"],
  ["특별새벽부흥회", "/worship/sermon?flag=special-dawn"],
  ["포에버", "/worship/sermon?flag=forever"],
  ["기드온", "/worship/sermon?flag=gideon"],
  ["청년부", "/worship/sermon?flag=chung"],
  ["대학부", "/worship/sermon?flag=college"],
  ["고등3부", "/worship/sermon?flag=high3"]
]);

const nextGenSermonLinks = makeMappedLinks([
  ["고등1ㆍ2부", "/worship/sermon?flag=high12"],
  ["다니엘 중등부", "/worship/sermon?flag=daniel"],
  ["다윗 중등부", "/worship/sermon?flag=david"],
  ["소년부", "/worship/sermon?flag=boys"],
  ["초등부", "/worship/sermon?flag=elementary"],
  ["유년부", "/worship/sermon?flag=lower-elementary"],
  ["유치부", "/worship/sermon?flag=kindergarten"],
  ["유아부", "/worship/sermon?flag=toddler"],
  ["영아부", "/worship/sermon?flag=infant"],
  ["사랑1부", "/worship/sermon?flag=sarang1"],
  ["사랑2부", "/worship/sermon?flag=sarang2"],
  ["사랑3부", "/worship/sermon?flag=sarang3"],
  ["사랑4부", "/worship/sermon?flag=sarang4"]
]);

const ministryNewFamilyLinks = makeMappedLinks([
  ["새가족 등록 안내", "/ministry/new-family-guide"],
  ["새가족 등록", "/ministry/new-family-register"],
  ["새가족 등록자", "/ministry/new-family-list"],
  ["새가족 모임 안내", "/ministry/new-family-meeting"],
  ["새가족 모임 수료자", "/ministry/new-family-graduates"],
  ["학습ㆍ세례 안내", "/ministry/baptism"]
]);

const ministryNurtureLinks = makeMappedLinks([
  ["목양편성도ㆍ교역자", "/ministry/pastoral-map"],
  ["다락방 소개ㆍ신청", "/ministry/small-group"],
  ["순장 모임 소개", "/ministry/leader-meeting"],
  ["교회 양육과정", "/ministry/training-course"]
]);

const ministryDepartmentLinks = makeMappedLinks([
  ["부서 홈페이지", "/ministry/department-home"],
  ["사역소개", "/ministry/ministry-intro"],
  ["간행물", "/ministry/publications"]
]);

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
        links: [],
        columns: [sermonLinks, nextGenSermonLinks]
      }
    ],
    right: [
      {
        heading: "찬양",
        links: [],
        columns: [
          makeMappedLinks([
            ["은혜를 담은 찬양", "/worship/praise?flag=A"],
            ["찬양대 찬양", "/worship/praise?flag=B"],
            ["예배헌금 특송", "/worship/praise?flag=C"],
            ["마음을 여는 찬양", "/worship/praise?flag=D"]
          ]),
          makeMappedLinks([
            ["수요저녁기도회", "/worship/praise?flag=E"],
            ["쥬빌리통일구국기도회", "/worship/praise?flag=F"],
            ["토요비전새벽예배", "/worship/praise?flag=G"],
            ["특별새벽부흥회", "/worship/praise?flag=H"]
          ])
        ]
      },
      {
        heading: "뉴스ㆍ행사",
        links: [],
        columns: [
          makeMappedLinks([
            ["SRC NEWSROOM", "/worship/newsroom"],
            ["행사ㆍ집회ㆍ공연", "/worship/events"]
          ]),
          makeMappedLinks([["예배 생방송", "/worship/live"]])
        ]
      }
    ]
  },
  {
    label: "목양ㆍ사역",
    highlight: true,
    left: [
      {
        heading: "새가족",
        links: [],
        columns: [ministryNewFamilyLinks.slice(0, 3), ministryNewFamilyLinks.slice(3)]
      },
      {
        heading: "양육",
        links: [],
        columns: [ministryNurtureLinks.slice(0, 2), ministryNurtureLinks.slice(2)]
      }
    ],
    right: [
      {
        heading: "부서안내",
        links: [],
        columns: [ministryDepartmentLinks.slice(0, 2), ministryDepartmentLinks.slice(2)]
      }
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
  const hasMultiColumnSection = sections.some((section) => section.columns);

  return (
    <div className={cn("grid gap-14", !hasMultiColumnSection && "md:grid-cols-2")}>
      {sections.map((section, index) => (
        <div key={`${section.heading}-${index}`}>
          {section.heading ? <h3 className="mb-7 text-[24px] font-extrabold tracking-normal text-blue-500">{section.heading}</h3> : null}
          <div className={cn("grid gap-x-24 gap-y-3", section.columns && "sm:grid-cols-2")}>
            {(section.columns ?? [section.links]).map((column, columnIndex) => (
              <ul className="m-0 grid list-none content-start gap-4 p-0" key={`${section.heading}-${columnIndex}`}>
                {column.map((link) => (
                  <li key={link.label}>
                    <Link className="whitespace-nowrap text-[18px] font-bold leading-tight text-slate-700 hover:text-primary" to={link.to}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function AboutMegaGroup({ group }: { group: AboutMenuGroup }) {
  const columns = group.columns ?? (group.links ? [group.links] : []);

  return (
    <section>
      <h3 className="mb-8 text-[25px] font-extrabold tracking-normal text-blue-500">{group.heading}</h3>
      <div className="grid gap-x-28 gap-y-2 sm:grid-cols-2">
        {columns.map((column, index) => (
          <ul className="m-0 grid list-none content-start gap-5 p-0" key={`${group.heading}-${index}`}>
            {column.map((link) => (
              <li key={link.label}>
                <Link
                  className="whitespace-nowrap text-[20px] font-bold leading-tight text-slate-700 transition hover:text-primary"
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
    <div className="pointer-events-auto mx-auto grid max-w-[1510px] gap-12 rounded-b-md border-t bg-white px-20 py-14 shadow-[0_24px_60px_rgb(15_23_42/12%)] xl:grid-cols-2">
      <div className="grid gap-14">
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
      <div className="mx-auto flex h-[92px] w-full max-w-[1610px] items-center justify-between gap-5 px-6 md:px-10">
        <NavLink className="inline-flex min-w-0 items-center gap-2 whitespace-nowrap text-primary md:gap-3" to="/">
          <img
            className="h-9 w-9 shrink-0 rounded-full object-cover md:h-11 md:w-11"
            src={siteConfig.logoUrl}
            alt="동서울열방교회 로고"
          />
          <span className="text-[21px] font-extrabold tracking-normal sm:text-[25px] md:text-[28px]">{siteConfig.name}</span>
        </NavLink>

        <nav className="hidden items-center gap-12 xl:flex" aria-label="주요 메뉴">
          {megaMenus.map((menu, index) => (
            <button
              className={cn(
                "inline-flex min-h-10 items-center gap-2 text-[23px] font-extrabold tracking-normal text-slate-700 transition hover:text-primary",
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
            <div className="pointer-events-auto mx-auto grid max-w-[1610px] gap-12 rounded-md border-t bg-white px-24 py-16 shadow-[0_24px_60px_rgb(15_23_42/12%)] lg:grid-cols-[1.08fr_0.92fr] xl:px-44">
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
