import type { Notice } from "./types";

export const notices: Notice[] = [
  {
    id: "notice-1",
    title: "동서울열방교회에 오신 여러분을 환영합니다",
    content:
      "저희 동서울열방교회는 대한예수교장로회 통합교회에 소속된 교회이며 오직 예배와 복음을 자랑하고 섬기려는 교회입니다.",
    createdAt: "2026-04-28",
    isPinned: true,
    isPublished: true
  },
  {
    id: "notice-2",
    title: "제자훈련반 안내",
    content: "제자훈련반은 목요일 저녁 7시 목양실, 수요일 저녁 7시 30분에 진행됩니다.",
    createdAt: "2026-04-20",
    isPinned: false,
    isPublished: true
  },
  {
    id: "notice-3",
    title: "청소년부 모임 안내",
    content: "청소년부 모임은 매주일 오후 1시 목양실에서 진행됩니다. 담당은 조효숙 목사입니다.",
    createdAt: "2026-04-14",
    isPinned: false,
    isPublished: true
  }
];
