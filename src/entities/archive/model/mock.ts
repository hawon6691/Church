import type { ArchiveItem } from "./types";

export const archiveItems: ArchiveItem[] = [
  {
    id: "archive-1",
    title: "주일 예배 설교 원고",
    description: "복음을 영화롭게 하는 삶에 대한 주일 설교 원고입니다.",
    category: "manuscript",
    preacher: "서유웅 목사",
    worshipDate: "2026-04-26",
    fileName: "sunday-sermon-20260426.pdf",
    fileSize: "1.2MB",
    downloadUrl: "#",
    isPublished: true
  },
  {
    id: "archive-2",
    title: "예배 찬양 PPT",
    description: "주일 예배 찬양과 공동기도 순서 자료입니다.",
    category: "ppt",
    preacher: "동서울열방교회",
    worshipDate: "2026-04-19",
    fileName: "worship-praise-20260419.pptx",
    fileSize: "8.4MB",
    downloadUrl: "#",
    isPublished: true
  },
  {
    id: "archive-3",
    title: "수요 제자훈련 자료",
    description: "제자훈련반에서 사용하는 말씀 묵상 자료입니다.",
    category: "document",
    preacher: "조효숙 목사",
    worshipDate: "2026-04-15",
    fileName: "discipleship-note.pdf",
    fileSize: "940KB",
    downloadUrl: "#",
    isPublished: true
  },
  {
    id: "archive-4",
    title: "주일 설교 음원",
    description: "주일 예배 설교 음성 파일입니다.",
    category: "audio",
    preacher: "서유웅 목사",
    worshipDate: "2026-04-12",
    fileName: "sermon-20260412.mp3",
    fileSize: "32MB",
    downloadUrl: "#",
    isPublished: true
  }
];
