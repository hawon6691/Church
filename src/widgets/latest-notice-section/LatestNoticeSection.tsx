import { ArrowRight, Megaphone } from "lucide-react";
import { Link } from "react-router-dom";
import { notices } from "@entities/notice/model/mock";
import { Badge } from "@shared/ui/badge";
import { Button } from "@shared/ui/button";
import { Card, CardContent } from "@shared/ui/card";

export function LatestNoticeSection() {
  const latestNotices = [...notices].sort((a, b) => Number(b.isPinned) - Number(a.isPinned)).slice(0, 3);

  return (
    <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
      <Card className="bg-primary text-primary-foreground">
        <CardContent className="p-7">
          <Megaphone size={34} className="mb-5" />
          <h3 className="mb-3 text-2xl font-extrabold">교회소식</h3>
          <p className="mb-6 leading-7 text-primary-foreground/85">
            예배와 모임, 교회 생활에 필요한 안내를 한곳에서 확인하실 수 있습니다.
          </p>
          <Button asChild variant="light">
            <Link to="/notice">
              전체 소식 보기 <ArrowRight size={18} />
            </Link>
          </Button>
        </CardContent>
      </Card>

      <div className="grid gap-4">
        {latestNotices.map((notice) => (
          <Card key={notice.id} as="article" className="transition hover:-translate-y-0.5 hover:shadow-lifted">
            <CardContent className="p-5">
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                {notice.isPinned ? <Badge>중요</Badge> : null}
                <time>{notice.createdAt}</time>
              </div>
              <h3 className="mb-2 mt-3 text-xl font-extrabold">{notice.title}</h3>
              <p className="m-0 line-clamp-2 leading-7 text-muted-foreground">{notice.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
