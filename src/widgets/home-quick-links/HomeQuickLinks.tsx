import { CalendarClock, Church, MapPin, Newspaper } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { quickLinks, type QuickLinkIcon } from "@entities/home/model/content";

const iconByName: Record<QuickLinkIcon, LucideIcon> = {
  church: Church,
  map: MapPin,
  notice: Newspaper,
  calendar: CalendarClock
};

export function HomeQuickLinks() {
  return (
    <section className="bg-muted py-20">
      <div className="mx-auto grid max-w-[1610px] gap-8 px-6 md:px-10 sm:grid-cols-2 lg:grid-cols-4">
        {quickLinks.map(({ to, label, icon }) => {
          const Icon = iconByName[icon];

          return (
            <Link
              key={label}
              to={to}
              className="grid min-h-[245px] place-items-center content-center gap-8 rounded-md bg-white p-8 text-center text-[26px] font-extrabold shadow-[0_20px_44px_rgb(15_23_42/7%)] transition hover:-translate-y-0.5 hover:shadow-lifted"
            >
              <span className="grid h-16 w-16 place-items-center rounded-2xl bg-primary text-white">
                <Icon size={30} />
              </span>
              {label}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
