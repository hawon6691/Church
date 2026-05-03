import type { LucideIcon } from "lucide-react";
import { BookOpen, CalendarDays, CreditCard, FileText, MapPin, Megaphone } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "@shared/ui/card";

type QuickLink = {
  to: string;
  label: string;
  description: string;
  Icon: LucideIcon;
};

const quickLinks: QuickLink[] = [
  { to: "/worship", label: "예배", description: "설교와 예배 안내", Icon: CalendarDays },
  { to: "/bible", label: "성경", description: "말씀 읽기와 검색", Icon: BookOpen },
  { to: "/archive", label: "자료실", description: "원고와 문서 자료", Icon: FileText },
  { to: "/notice", label: "교회소식", description: "공지와 안내", Icon: Megaphone },
  { to: "/donation", label: "헌금", description: "온라인 헌금 안내", Icon: CreditCard },
  { to: "/about/location", label: "오시는 길", description: "주소와 연락처", Icon: MapPin }
];

export function QuickLinkSection() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
      {quickLinks.map(({ to, label, description, Icon }) => (
        <Card key={to} as="article" className="overflow-hidden transition hover:-translate-y-0.5 hover:shadow-lifted">
          <Link className="grid min-h-36 content-between gap-4 p-5" to={to}>
            <span className="grid h-11 w-11 place-items-center rounded-md bg-accent text-primary">
              <Icon size={23} />
            </span>
            <span>
              <strong className="block text-lg">{label}</strong>
              <span className="mt-1 block text-sm leading-5 text-muted-foreground">{description}</span>
            </span>
          </Link>
        </Card>
      ))}
    </div>
  );
}
