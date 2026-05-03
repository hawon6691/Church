import { HomeHero } from "@widgets/home-hero/HomeHero";
import { HomeNoticePortal } from "@widgets/home-notice-portal/HomeNoticePortal";
import { HomeQuickLinks } from "@widgets/home-quick-links/HomeQuickLinks";
import { HomeSearchSection } from "@widgets/home-search-section/HomeSearchSection";
import { SermonPreviewSection } from "@widgets/sermon-preview-section/SermonPreviewSection";
import { TrainingPreviewSection } from "@widgets/training-preview-section/TrainingPreviewSection";
import { WordPrayerSection } from "@widgets/word-prayer-section/WordPrayerSection";

export function HomePage() {
  return (
    <>
      <HomeHero />
      <main className="bg-white">
        <SermonPreviewSection />
        <HomeQuickLinks />
        <HomeNoticePortal />
        <TrainingPreviewSection />
        <WordPrayerSection />
        <HomeSearchSection />
      </main>
    </>
  );
}
