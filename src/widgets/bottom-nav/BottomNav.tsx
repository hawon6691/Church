import { BookOpen, Home, Megaphone, MoreHorizontal, Radio } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@shared/lib/utils";

const bottomNavItems = [
  { to: "/", label: "홈", Icon: Home },
  { to: "/worship", label: "예배", Icon: Radio },
  { to: "/bible", label: "성경", Icon: BookOpen },
  { to: "/notice", label: "소식", Icon: Megaphone },
  { to: "/about", label: "더보기", Icon: MoreHorizontal }
];

export function BottomNav() {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-30 border-t bg-white/96 shadow-[0_-10px_30px_rgb(15_23_42/10%)] backdrop-blur lg:hidden"
      aria-label="모바일 하단 메뉴"
    >
      <div className="mx-auto grid max-w-xl grid-cols-5 px-1 pb-[env(safe-area-inset-bottom)]">
        {bottomNavItems.map(({ to, label, Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            className={({ isActive }) =>
              cn(
                "grid min-h-16 justify-items-center gap-1 px-1 py-2 text-xs font-bold text-muted-foreground transition",
                isActive && "text-primary"
              )
            }
          >
            <Icon size={21} />
            <span>{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
