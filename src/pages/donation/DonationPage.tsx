import { CreditCard, Info, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig } from "@shared/config/site";
import { Button } from "@shared/ui/button";
import { PageHeader } from "@shared/ui/PageHeader";
import { Section } from "@shared/ui/Section";

export function DonationPage() {
  return (
    <>
      <PageHeader title="온라인 헌금" />
      <Section tone="soft">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="rounded-md bg-primary p-10 text-white shadow-soft">
            <CreditCard className="mb-8" size={44} />
            <h2 className="mb-5 text-[34px] font-extrabold">헌금 안내</h2>
            <p className="text-xl leading-9 text-white/85">
              온라인 헌금은 교회가 안내하는 계좌로 드리며, 입금자명과 헌금 구분을 확인할 수 있도록 기재해 주세요.
            </p>
          </article>
          <article className="rounded-md border bg-white p-10 shadow-soft">
            <h2 className="mb-7 text-[32px] font-extrabold">계좌 정보</h2>
            <dl className="grid gap-0 overflow-hidden rounded-md border">
              {[
                ["은행", "교회 확인 후 입력 예정"],
                ["예금주", siteConfig.name],
                ["문의", siteConfig.pastorPhone]
              ].map(([label, value]) => (
                <div key={label} className="grid grid-cols-[160px_minmax(0,1fr)] border-b last:border-b-0">
                  <dt className="bg-[#eef3fb] p-5 text-center font-extrabold text-primary">{label}</dt>
                  <dd className="m-0 p-5 text-lg">{value}</dd>
                </div>
              ))}
            </dl>
          </article>
        </div>
      </Section>

      <Section title="확인 사항" className="bg-white">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-md border bg-white p-8 shadow-soft">
            <Info className="mb-6 text-primary" size={34} />
            <h2 className="mb-4 text-2xl font-extrabold">입금자명</h2>
            <p className="m-0 text-lg leading-8 text-muted-foreground">헌금 종류와 이름을 교회 안내 방식에 맞춰 입력합니다.</p>
          </article>
          <article className="rounded-md border bg-white p-8 shadow-soft">
            <Phone className="mb-6 text-primary" size={34} />
            <h2 className="mb-4 text-2xl font-extrabold">문의</h2>
            <p className="mb-6 text-lg leading-8 text-muted-foreground">확인이 필요하시면 교회로 문의해 주세요.</p>
            <Button asChild variant="outline">
              <Link to="/about">연락처 보기</Link>
            </Button>
          </article>
        </div>
      </Section>
    </>
  );
}
