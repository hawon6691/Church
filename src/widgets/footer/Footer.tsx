import { Facebook, Globe2, Instagram, Youtube } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { siteConfig } from "@shared/config/site";

const footerLinks = [
  { to: "/about", label: "교회소개" },
  { to: "/worship", label: "예배와 말씀" },
  { to: "/notice", label: "교회소식" },
  { to: "/archive", label: "자료실" },
  { to: "/bible", label: "성경" },
  { to: "/donation", label: "헌금 안내" }
];

export function Footer() {
  return (
    <footer className="border-t bg-white text-slate-700">
      <div className="mx-auto w-full max-w-[1610px] px-6 py-10 md:px-10">
        <div className="grid gap-8 border-t pt-8 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="mb-5 text-base">©2026 {siteConfig.name}. All Rights reserved.</p>
            <div className="flex items-center gap-5 text-primary">
              <Facebook size={21} />
              <Instagram size={21} />
              <Youtube size={23} />
              <span className="font-extrabold text-slate-500">GODpia</span>
            </div>
          </div>
          <div className="grid gap-5 lg:justify-items-end">
            <nav className="flex flex-wrap gap-x-8 gap-y-2 text-base" aria-label="푸터 주요 메뉴">
              {footerLinks.map((item) => (
                <Link key={item.to} className="hover:text-primary" to={item.to}>
                  {item.label}
                </Link>
              ))}
              <NavLink to="/admin" className="hover:text-primary">
                관리자
              </NavLink>
            </nav>
            <address className="m-0 text-sm not-italic text-muted-foreground lg:text-right">
              담임목사 {siteConfig.pastorPhone} · 교육목사 {siteConfig.educationPastorPhone}
              <br />
              {siteConfig.address}
            </address>
            <button className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-extrabold text-white" type="button">
              <Globe2 size={16} />
              Global Site
              <span aria-hidden>⌃</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
