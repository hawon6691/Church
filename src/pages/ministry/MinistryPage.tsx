import { BookOpen, Check, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, FileText, Home, Search } from "lucide-react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import {
  departmentsByLetter,
  guideNotes,
  listRows,
  ministrySections,
  ministryIntroCategories,
  newFamilyTabs,
  publicationItems,
  smallGroups,
  trainingSteps,
  type MinistrySectionKey
} from "@entities/ministry/model/content";
import { cn } from "@shared/lib/utils";
import { Button } from "@shared/ui/button";

const validSections = new Set<MinistrySectionKey>(Object.keys(ministrySections) as MinistrySectionKey[]);

function resolveSection(section?: string): MinistrySectionKey {
  return section && validSections.has(section as MinistrySectionKey) ? (section as MinistrySectionKey) : "new-family-guide";
}

function MinistryHeader({ title }: { title: string }) {
  return (
    <section className="border-b bg-white">
      <div className="mx-auto w-full max-w-[1610px] px-6 py-16 md:px-10 md:py-20">
        <h1 className="text-[40px] font-extrabold leading-tight tracking-normal md:text-[54px]">{title}</h1>
      </div>
    </section>
  );
}

function HeroBand({ title, description, tone = "sky" }: { title: string; description: string; tone?: "sky" | "dusk" | "blue" }) {
  return (
    <section
      className={cn(
        "relative min-h-[360px] overflow-hidden bg-cover bg-center text-white",
        tone === "sky" && "bg-[linear-gradient(90deg,rgb(26_73_160/.76),rgb(26_125_188/.42)),url('/image/church-introduce/confession-hero.png')]",
        tone === "dusk" && "bg-[linear-gradient(90deg,rgb(38_45_82/.76),rgb(113_66_95/.48)),url('/image/church-introduce/vision-bg.png')]",
        tone === "blue" && "bg-[linear-gradient(90deg,rgb(19_50_102/.78),rgb(78_139_206/.42)),url('/20251207_103253.jpg')]"
      )}
    >
      <div className="mx-auto flex min-h-[360px] w-full max-w-[1100px] flex-col justify-center px-6 md:px-10">
        <h2 className="mb-8 max-w-3xl text-[32px] font-extrabold leading-tight tracking-normal md:text-[42px]">{title}</h2>
        <p className="max-w-4xl whitespace-pre-line text-xl font-bold leading-9 text-white/95">{description}</p>
      </div>
    </section>
  );
}

function Segmented({ items, active = 0 }: { items: string[]; active?: number }) {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((item, index) => (
        <button
          className={cn(
            "h-16 rounded-md border px-8 text-xl font-extrabold transition hover:border-primary hover:text-primary",
            index === active ? "border-primary bg-primary text-white hover:text-white" : "bg-white text-slate-700"
          )}
          key={item}
          type="button"
        >
          {item}
        </button>
      ))}
    </div>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-4">
      {items.map((item) => (
        <li className="flex gap-4 text-xl leading-9" key={item}>
          <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-blue-100 text-primary">
            <Check size={18} />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function GuidePage() {
  return (
    <>
      <MinistryHeader title="새가족 등록 안내" />
      <HeroBand
        title="동서울열방교회를 찾아주신 성도 여러분을 주님의 이름으로 환영합니다!"
        description={"주일에 새가족 등록처를 방문하시면 새가족 모임 및 교회 생활에 대한 자세한 안내를 받으실 수 있습니다.\n아래의 연령별 새가족 등록 안내를 참고해 주세요."}
      />
      <main className="mx-auto w-full max-w-[1610px] px-6 py-16 md:px-10">
        <Segmented items={newFamilyTabs} />
        <section className="mt-14 max-w-[1360px]">
          <h2 className="mb-8 text-[32px] font-extrabold">장년</h2>
          <span className="mb-8 inline-flex rounded-full bg-slate-800 px-4 py-2 text-lg font-extrabold text-white">37세 이상</span>
          <div className="grid gap-8 text-xl leading-9">
            <p>
              장년의 새가족등록은 기혼자 또는 미혼자 모두 등록 가능하며, 등록 후 장년부 교구에 속하게 됩니다. 주일예배 전후
              새가족 등록처를 방문하셔서 안내를 받으실 수 있습니다.
            </p>
            <CheckList items={guideNotes} />
          </div>
          <Button asChild className="mt-10 h-16 rounded-full px-10 text-lg">
            <Link to="/ministry/new-family-register">새가족 등록하기</Link>
          </Button>
        </section>
      </main>
    </>
  );
}

function Field({ placeholder, wide = false }: { placeholder: string; wide?: boolean }) {
  return <input className={cn("h-16 w-full min-w-0 rounded-md border border-primary/35 bg-white px-7 text-xl outline-none", wide && "lg:col-span-2")} placeholder={placeholder} />;
}

function ToggleGroup({ items, active = 0 }: { items: string[]; active?: number }) {
  return (
    <div className="flex max-w-full shrink-0 flex-wrap overflow-hidden rounded-md border">
      {items.map((item, index) => (
        <button className={cn("h-16 min-w-16 px-5 text-lg", index === active ? "bg-[#263d78] text-white" : "bg-white text-slate-700")} key={item} type="button">
          {item}
        </button>
      ))}
    </div>
  );
}

function RegisterPage() {
  return (
    <>
      <MinistryHeader title="새가족 등록" />
      <main className="bg-muted">
        <div className="mx-auto w-full max-w-[1610px] px-6 py-20 md:px-10">
          <p className="mb-16 text-2xl leading-9">
            동서울열방교회에 오신 것을 환영합니다.
            <br />
            장년부 이외의 성도님들은 해당 부서에서 등록해주시고, 신학생과 목회자는 교회 사정상 등록 안내를 별도로 받습니다.
          </p>

          <section className="grid gap-x-16 gap-y-12 lg:grid-cols-3">
            <div>
              <div className="flex min-w-0">
                <Field placeholder="이름(한글)" />
                <ToggleGroup items={["남자", "여자"]} />
              </div>
              <p className="mt-3 text-lg text-orange-600">※ 필수입력</p>
            </div>
            <div>
              <div className="flex min-w-0">
                <Field placeholder="생년월일 ex) 20180524" />
                <ToggleGroup items={["양력", "음력"]} />
              </div>
              <p className="mt-3 text-lg text-orange-600">※ 필수입력</p>
            </div>
            <Field placeholder="이메일" />
            <Field placeholder="직업(직장명)" />
            <div>
              <Field placeholder="휴대전화 ex)01012345678" />
              <p className="mt-3 text-lg text-orange-600">※ 필수입력</p>
            </div>
            <div>
              <Field placeholder="통화가능 시간 ex) 오전 10시30분" />
              <p className="mt-3 text-lg text-orange-600">※ 필수입력</p>
            </div>
            <Field placeholder="자택 or 직장전화 ex)0212345678" />
            <div>
              <div className="flex min-w-0">
                <Field placeholder="우편번호" />
                <button className="h-16 min-w-20 border bg-white px-6 text-lg" type="button">검색</button>
              </div>
              <p className="mt-3 text-lg text-orange-600">※ 필수입력</p>
            </div>
            <div>
              <Field placeholder="집주소" />
              <p className="mt-3 text-lg text-orange-600">※ 필수입력</p>
            </div>
            <Field placeholder="상세주소" />
            <div className="flex items-center gap-8 text-2xl">
              <span>우편발송이 가능한가요?</span>
              <ToggleGroup items={["예", "아니오"]} active={1} />
            </div>
          </section>

          <section className="mt-20">
            <h2 className="mb-8 text-2xl">등록 부서</h2>
            <ToggleGroup items={["장년부", "청년부", "대학부"]} />
          </section>

          <FormPanel title="해당사항에 표시해주세요">
            <div className="mb-12 flex flex-wrap gap-8 text-lg">
              {["동서울열방교회가 첫 교회", "이전에 타교회를 출석하였으나 쉬다가 다시 등록", "타 교회에서 왔음"].map((item, index) => (
                <label className="inline-flex items-center gap-3" key={item}>
                  <input defaultChecked={index === 0} type="radio" name="church-history" />
                  {item}
                </label>
              ))}
            </div>
            <div className="grid gap-10 lg:grid-cols-3">
              <Field placeholder="이전교회 이름" />
              <Field placeholder="이전교회 직분" />
              <Field placeholder="이전교회 봉사부서" />
              <Field placeholder="세례연도 (ex : 2020)" />
              <Field placeholder="세례교회" />
              <div>
                <h3 className="mb-4 text-xl">신급 (교회에서 시행하는 성례)</h3>
                <ToggleGroup items={["학습", "유아세례", "세례", "입교", "영세", "침례", "없음"]} />
              </div>
            </div>
          </FormPanel>

          <FormPanel title="사랑의교회로 인도하신 분이 있나요?">
            <div className="grid gap-10 lg:grid-cols-3">
              <Field placeholder="이름" />
              <Field placeholder="휴대전화 ex)01012345678" />
              <Field placeholder="관계" />
            </div>
          </FormPanel>

          <FormPanel title="가족 사항을 입력해주세요">
            <h3 className="mb-12 text-2xl">가족1</h3>
            <div className="grid gap-10 lg:grid-cols-3">
              <Field placeholder="관계" />
              <div className="flex min-w-0">
                <Field placeholder="이름(한글)" />
                <ToggleGroup items={["남자", "여자"]} />
              </div>
              <div className="flex min-w-0">
                <Field placeholder="생년월일 ex) 20180524" />
                <ToggleGroup items={["양력", "음력"]} />
              </div>
            </div>
          </FormPanel>

          <button className="mt-12 h-16 rounded-md border border-primary px-8 text-xl font-bold text-primary" type="button">+ 가족 추가 입력</button>
          <div className="mt-20 flex gap-3 rounded-md border bg-white">
            <span className="grid h-16 w-32 place-items-center bg-muted text-lg font-bold">본인 사진</span>
            <button className="h-16 border-l px-8 text-lg" type="button">찾아보기...</button>
            <span className="flex flex-1 items-center border-l px-8 text-lg text-muted-foreground">선택된 파일 없음</span>
          </div>
          <p className="mt-8 text-lg text-orange-600">※ 필수입력</p>
          <div className="mt-10 rounded-md bg-blue-50 p-10 text-xl leading-9">
            <strong>개인정보 수집 및 이용동의</strong>
            <p className="mt-5">개인정보 수집 및 이용 목적 : 동서울열방교회 교인 등록</p>
            <p>개인정보 수집 항목 : 이름, 생년월일, 이메일, 직업, 집주소, 휴대전화, 가족사항, 본인사진 등</p>
          </div>
          <label className="mt-8 flex items-center gap-4 text-xl">
            <input className="h-6 w-6" type="checkbox" />
            위의 개인정보 수집 및 이용에 대한 안내의 모든 조항을 읽었으며 이에 동의합니다.
          </label>
          <div className="mt-16 flex gap-3">
            <Button variant="outline" className="h-16 rounded-full px-10 text-lg">취소하기</Button>
            <Button className="h-16 rounded-full px-10 text-lg">접수하기</Button>
          </div>
        </div>
      </main>
    </>
  );
}

function FormPanel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-20">
      <h2 className="mb-8 text-2xl">{title}</h2>
      <div className="rounded-md bg-blue-50 p-10">{children}</div>
    </section>
  );
}

function ListPage({ title }: { title: string }) {
  return (
    <>
      <MinistryHeader title={title} />
      <main className="mx-auto w-full max-w-[1280px] px-6 py-16 md:px-10">
        <div className="mb-10 grid gap-3 rounded-md border bg-white p-6 shadow-soft md:grid-cols-[1fr_160px]">
          <label className="relative">
            <span className="sr-only">검색</span>
            <input className="h-14 w-full rounded-md border px-5 pr-12 text-lg" placeholder="이름, 부서, 등록일 검색" />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={22} />
          </label>
          <Button className="h-14">검색</Button>
        </div>
        <div className="overflow-hidden rounded-md border bg-white shadow-soft">
          <div className="grid grid-cols-[1fr_1fr_1fr_1fr] bg-[#eef3fb] px-6 py-5 text-center text-lg font-extrabold text-primary">
            <span>이름</span>
            <span>부서</span>
            <span>등록일</span>
            <span>상태</span>
          </div>
          {listRows.map((row) => (
            <div className="grid grid-cols-[1fr_1fr_1fr_1fr] border-t px-6 py-5 text-center text-lg" key={`${row.name}-${row.date}`}>
              <span className="font-bold">{row.name}</span>
              <span>{row.department}</span>
              <span>{row.date}</span>
              <span className="font-bold text-primary">{title.includes("수료") ? "수료" : row.status}</span>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

function MeetingPage() {
  return (
    <>
      <MinistryHeader title="새가족 모임 안내" />
      <HeroBand tone="blue" title="새가족 모임은 교회와 복음을 알아가는 첫 걸음입니다." description="예배, 교제, 양육, 섬김의 흐름을 배우며 동서울열방교회 공동체 안에 자연스럽게 연결됩니다." />
      <main className="mx-auto w-full max-w-[1280px] px-6 py-16 md:px-10">
        <div className="grid gap-8 md:grid-cols-3">
          {["1주차 복음과 교회", "2주차 예배와 공동체", "3주차 양육과 섬김"].map((title, index) => (
            <article className="rounded-md border bg-white p-8 shadow-soft" key={title}>
              <p className="mb-5 text-lg font-extrabold text-primary">STEP {index + 1}</p>
              <h2 className="mb-4 text-2xl font-extrabold">{title}</h2>
              <p className="text-lg leading-8 text-muted-foreground">새가족의 정착을 돕는 안내와 교제를 나눕니다.</p>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}

function BaptismPage() {
  return (
    <>
      <MinistryHeader title="학습ㆍ세례 안내" />
      <main className="mx-auto w-full max-w-[1280px] px-6 py-16 md:px-10">
        <div className="grid gap-8 md:grid-cols-3">
          {["학습", "세례", "입교"].map((title) => (
            <article className="rounded-md border bg-white p-9 shadow-soft" key={title}>
              <h2 className="mb-6 text-3xl font-extrabold text-primary">{title}</h2>
              <p className="text-xl leading-9">복음 고백과 교회 생활의 기초를 확인하며 공동체 앞에서 믿음을 고백합니다.</p>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}

function PastoralMapPage() {
  return (
    <>
      <MinistryHeader title="목양편성도ㆍ교역자" />
      <main className="mx-auto w-full max-w-[1280px] px-6 py-16 md:px-10">
        <div className="grid gap-6 md:grid-cols-2">
          {["1교구", "2교구", "청년교구", "다음세대"].map((title) => (
            <article className="rounded-md border bg-white p-8 shadow-soft" key={title}>
              <h2 className="mb-4 text-3xl font-extrabold text-primary">{title}</h2>
              <p className="text-xl leading-9">담당 교역자와 순장이 함께 성도들의 예배와 삶을 돌봅니다.</p>
              <p className="mt-6 font-bold text-muted-foreground">담당: 서유웅 목사 / 조효숙 목사</p>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}

function SmallGroupPage() {
  return (
    <>
      <MinistryHeader title="다락방 소개ㆍ신청" />
      <HeroBand
        tone="dusk"
        title="동서울열방교회에 등록된 성도들의 소그룹 모임입니다."
        description={"말씀과 삶을 나누며 성도 간의 교제를 갖는 양육모임입니다.\n마음을 열고 주님 앞에서 진솔한 이야기를 나누어 보세요."}
      />
      <main className="mx-auto w-full max-w-[1610px] px-6 py-20 md:px-10">
        <div className="mb-20 grid items-center gap-10 lg:grid-cols-[1fr_auto_auto]">
          <p className="max-w-4xl text-xl leading-9">등록교인이고 장년부 대상인 성도는 거주 지역에서 양육을 받으실 수 있습니다.</p>
          <Button className="h-16 rounded-full px-10 text-lg">다락방 신청하기</Button>
          <Button className="h-16 rounded-full px-10 text-lg">다락방 현장 소개영상</Button>
        </div>
        <div className="grid gap-24">
          {smallGroups.map((group, index) => (
            <section className={cn("grid items-center gap-14 lg:grid-cols-2", index % 2 === 1 && "lg:[&>img]:order-2")} key={group.title}>
              <img className="aspect-[1.65/1] w-full rounded-md object-cover shadow-soft" src={group.image} alt="" />
              <div>
                <h2 className="mb-7 text-[34px] font-extrabold tracking-normal text-primary">{group.title}</h2>
                <p className="mb-8 whitespace-pre-line text-xl leading-9">{group.description}</p>
                <p className="inline-flex items-center gap-3 text-2xl font-extrabold">
                  <span className="rounded-full bg-primary px-4 py-2 text-base text-white">주중 모임</span>
                  {group.time}
                </p>
              </div>
            </section>
          ))}
        </div>
      </main>
    </>
  );
}

function LeaderMeetingPage() {
  return (
    <>
      <MinistryHeader title="순장 모임 소개" />
      <HeroBand tone="blue" title="순장 모임은 말씀과 목양을 함께 준비하는 자리입니다." description="다락방을 섬기는 리더들이 함께 예배하고 기도하며 성도들을 돌보는 마음을 새롭게 합니다." />
      <main className="mx-auto w-full max-w-[1280px] px-6 py-16 md:px-10">
        <div className="grid gap-8 md:grid-cols-3">
          {["말씀 나눔", "기도와 돌봄", "사역 점검"].map((title) => (
            <article className="rounded-md border bg-white p-8 shadow-soft" key={title}>
              <h2 className="mb-4 text-2xl font-extrabold text-primary">{title}</h2>
              <p className="text-lg leading-8">순장들이 같은 방향으로 공동체를 섬기도록 준비합니다.</p>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}

function TrainingCoursePage() {
  return (
    <>
      <MinistryHeader title="교회 양육과정" />
      <main className="mx-auto w-full max-w-[1280px] px-6 py-16 md:px-10">
        <div className="grid gap-8 md:grid-cols-3">
          {trainingSteps.map((step, index) => (
            <article className="rounded-md border bg-white p-8 shadow-soft" key={step.title}>
              <p className="mb-5 text-lg font-extrabold text-primary">COURSE {index + 1}</p>
              <h2 className="mb-4 text-3xl font-extrabold">{step.title}</h2>
              <p className="text-xl leading-9 text-muted-foreground">{step.text}</p>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}

function DepartmentHomePage() {
  return (
    <>
      <MinistryHeader title="부서 홈페이지" />
      <main className="bg-[linear-gradient(135deg,#f7fbff_0%,#ffffff_45%,#edf8ff_100%)]">
        <div className="mx-auto grid w-full max-w-[1610px] gap-x-24 gap-y-16 px-6 py-20 md:grid-cols-2 md:px-10 lg:grid-cols-4">
          {departmentsByLetter.map((group) => (
            <section key={group.letter}>
              <div className="mb-8 grid h-24 w-24 place-items-center rounded-md bg-[#243b73] text-[34px] font-extrabold text-white shadow-soft">{group.letter}</div>
              <ul className="grid gap-4 text-[22px] font-bold leading-8 text-primary">
                {group.items.map((item) => (
                  <li key={item}>
                    <Link to="/ministry/ministry-intro" className="hover:underline">{item}</Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </main>
    </>
  );
}

function MinistryIntroPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedCategory = searchParams.get("category");
  const activeCategory = ministryIntroCategories.find((category) => category.id === requestedCategory) ?? ministryIntroCategories[0];

  return (
    <>
      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1280px] px-6 pb-12 pt-16 md:px-10 md:pt-20">
          <h1 className="text-[40px] font-extrabold leading-tight tracking-normal md:text-[48px]">사역소개</h1>
          <div className="mt-12 border-t-2 border-primary" />
        </div>
      </section>
      <main className="mx-auto w-full max-w-[1280px] px-6 pb-20 md:px-10">
        <div className="mb-14 flex flex-wrap gap-2">
          {ministryIntroCategories.map((category) => (
            <button
              className={cn(
                "h-14 rounded-md border bg-white px-7 text-lg font-bold shadow-soft transition hover:border-primary hover:text-primary",
                category.id === activeCategory.id && "border-primary bg-[#263d78] text-white hover:text-white"
              )}
              key={category.id}
              onClick={() => setSearchParams({ category: category.id })}
              type="button"
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid gap-x-9 gap-y-14 lg:grid-cols-2">
          {activeCategory.items.map((item) => (
            <article key={item.title}>
              <div className="mb-5 flex items-center justify-between gap-5">
                <h2 className="text-[25px] font-extrabold leading-tight tracking-normal text-primary underline decoration-primary decoration-2 underline-offset-4">
                  {item.title}
                </h2>
                <button className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-blue-100 text-primary transition hover:bg-primary hover:text-white" type="button" aria-label={`${item.title} 홈페이지`}>
                  <Home size={18} />
                </button>
              </div>
              <div className="min-h-[180px] rounded-md bg-slate-50 p-8 text-[18px] leading-8 text-slate-700">
                {item.description}
              </div>
              <div>
                <h3 className="mt-7 text-lg font-extrabold">관련정보</h3>
                <p className="mt-2 flex flex-wrap gap-x-6 gap-y-1 text-[17px] text-slate-600">
                  <span>{item.contact}</span>
                  <span className="text-slate-400">{item.phone}</span>
                  <a className="font-medium text-primary hover:underline" href={`mailto:${item.email}`}>
                    {item.email}
                  </a>
                </p>
                {item.location ? (
                  <>
                    <h3 className="mt-5 text-lg font-extrabold">위치안내</h3>
                    <p className="mt-1 text-[17px] text-slate-700">{item.location}</p>
                  </>
                ) : null}
                {item.meeting ? (
                  <>
                    <h3 className="mt-5 text-lg font-extrabold">정기모임</h3>
                    <p className="mt-1 text-[17px] text-slate-700">{item.meeting}</p>
                  </>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}

function PublicationsPage() {
  return (
    <>
      <MinistryHeader title="간행물" />
      <main className="mx-auto w-full max-w-[1510px] px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto mb-14 grid max-w-[680px] gap-2 sm:grid-cols-[220px_1fr]">
          <button className="flex h-14 items-center justify-between rounded-md border border-primary/30 bg-white px-6 text-lg font-bold text-muted-foreground" type="button">
            전체
            <ChevronRight className="rotate-90" size={18} />
          </button>
          <label className="relative block">
            <input
              className="h-14 w-full rounded-md border border-primary/30 bg-white pl-6 pr-14 text-lg outline-none placeholder:text-muted-foreground"
              placeholder="검색어 입력"
            />
            <Search className="absolute right-5 top-1/2 -translate-y-1/2 text-muted-foreground" size={24} />
          </label>
        </div>

        <section className="border-t-2 border-primary">
          {publicationItems.map((item) => (
            <article className="grid min-h-[104px] gap-5 border-b py-7 pl-6 pr-2 md:grid-cols-[1fr_auto] md:items-center" key={item.title}>
              <div>
                <h2 className="mb-2 text-[22px] font-extrabold leading-tight tracking-normal text-slate-900">{item.title}</h2>
                <p className="text-[17px] font-medium text-slate-700">{item.date}</p>
              </div>
              <div className="flex items-center gap-2 md:justify-end">
                <button className="grid h-11 w-11 place-items-center rounded-full bg-primary text-white transition hover:bg-blue-700" aria-label={`${item.title} PDF 보기`} type="button">
                  <FileText size={21} />
                </button>
                {item.hasBook ? (
                  <button className="grid h-11 w-11 place-items-center rounded-full bg-primary text-white transition hover:bg-blue-700" aria-label={`${item.title} 책자 보기`} type="button">
                    <BookOpen size={22} />
                  </button>
                ) : null}
              </div>
            </article>
          ))}
        </section>

        <nav className="mt-16 flex justify-center" aria-label="간행물 페이지">
          <div className="inline-flex overflow-hidden rounded-md border bg-white shadow-soft">
            {[
              { label: "«", icon: <ChevronsLeft size={16} /> },
              { label: "‹", icon: <ChevronLeft size={16} /> },
              ...Array.from({ length: 10 }, (_, index) => ({ label: String(index + 1), icon: null })),
              { label: "›", icon: <ChevronRight size={16} /> },
              { label: "»", icon: <ChevronsRight size={16} /> }
            ].map((page, index) => (
              <button
                className={cn(
                  "grid h-14 min-w-14 place-items-center border-r px-4 text-lg font-bold text-slate-700 last:border-r-0",
                  page.label === "1" && "bg-primary text-white"
                )}
                key={`${page.label}-${index}`}
                type="button"
              >
                {page.icon ?? page.label}
              </button>
            ))}
          </div>
        </nav>
      </main>
    </>
  );
}

export function MinistryPage() {
  const { section } = useParams();
  const sectionKey = resolveSection(section);
  const meta = ministrySections[sectionKey];

  if (sectionKey === "new-family-guide") return <GuidePage />;
  if (sectionKey === "new-family-register") return <RegisterPage />;
  if (sectionKey === "new-family-list") return <ListPage title={meta.title} />;
  if (sectionKey === "new-family-graduates") return <ListPage title={meta.title} />;
  if (sectionKey === "new-family-meeting") return <MeetingPage />;
  if (sectionKey === "baptism") return <BaptismPage />;
  if (sectionKey === "pastoral-map") return <PastoralMapPage />;
  if (sectionKey === "small-group") return <SmallGroupPage />;
  if (sectionKey === "leader-meeting") return <LeaderMeetingPage />;
  if (sectionKey === "training-course") return <TrainingCoursePage />;
  if (sectionKey === "department-home") return <DepartmentHomePage />;
  if (sectionKey === "ministry-intro") return <MinistryIntroPage />;
  if (sectionKey === "publications") return <PublicationsPage />;

  return <GuidePage />;
}
