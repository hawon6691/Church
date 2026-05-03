import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function ScrollProgressButton() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = scrollable > 0 ? Math.min(100, Math.max(0, (scrollTop / scrollable) * 100)) : 0;

      setProgress(nextProgress);
      setIsVisible(scrollTop > 160);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      aria-label="맨 위로 이동"
      className="fixed bottom-24 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-white text-primary shadow-soft transition hover:-translate-y-0.5 hover:shadow-lifted lg:bottom-9 lg:right-9"
      onClick={scrollToTop}
      style={{
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? "auto" : "none",
        background: `conic-gradient(#0b469f ${progress * 3.6}deg, #d9e1ec 0deg)`
      }}
      type="button"
    >
      <span className="grid h-11 w-11 place-items-center rounded-full bg-white">
        <ArrowUp size={24} />
      </span>
    </button>
  );
}
