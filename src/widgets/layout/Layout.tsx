import { Outlet } from "react-router-dom";
import { BottomNav } from "@widgets/bottom-nav/BottomNav";
import { Header } from "@widgets/header/Header";
import { Footer } from "@widgets/footer/Footer";
import { ScrollProgressButton } from "@widgets/scroll-progress/ScrollProgressButton";

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pb-16 lg:pb-0">
        <Outlet />
      </main>
      <Footer />
      <BottomNav />
      <ScrollProgressButton />
    </div>
  );
}
