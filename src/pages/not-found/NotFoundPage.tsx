import { Link } from "react-router-dom";
import { Button } from "@shared/ui/button";
import { Section } from "@shared/ui/Section";

export function NotFoundPage() {
  return (
    <Section>
      <div className="rounded-lg border border-dashed bg-card p-10 text-center text-muted-foreground">
        <h1 className="mb-3 text-3xl font-extrabold text-foreground">페이지를 찾을 수 없습니다</h1>
        <p className="mb-6">주소를 확인하시거나 메인으로 이동해주세요.</p>
        <Button asChild>
          <Link to="/">메인으로</Link>
        </Button>
      </div>
    </Section>
  );
}
