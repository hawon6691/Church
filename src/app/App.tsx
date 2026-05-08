import { Route, Routes } from "react-router-dom";
import { Layout } from "@widgets/layout/Layout";
import { HomePage } from "@pages/home/HomePage";
import { AboutPage } from "@pages/about/AboutPage";
import { WorshipPage } from "@pages/worship/WorshipPage";
import { MinistryPage } from "@pages/ministry/MinistryPage";
import { ArchivePage } from "@pages/archive/ArchivePage";
import { NoticePage } from "@pages/notice/NoticePage";
import { BiblePage } from "@pages/bible/BiblePage";
import { DonationPage } from "@pages/donation/DonationPage";
import { AdminPage } from "@pages/admin/AdminPage";
import { NotFoundPage } from "@pages/not-found/NotFoundPage";

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="about/:section" element={<AboutPage />} />
        <Route path="worship" element={<WorshipPage />} />
        <Route path="worship/:section" element={<WorshipPage />} />
        <Route path="ministry" element={<MinistryPage />} />
        <Route path="ministry/:section" element={<MinistryPage />} />
        <Route path="archive" element={<ArchivePage />} />
        <Route path="notice" element={<NoticePage />} />
        <Route path="bible" element={<BiblePage />} />
        <Route path="donation" element={<DonationPage />} />
        <Route path="admin" element={<AdminPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
