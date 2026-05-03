export type ArchiveCategory = "manuscript" | "ppt" | "audio" | "document";

export type ArchiveItem = {
  id: string;
  title: string;
  description: string;
  category: ArchiveCategory;
  preacher: string;
  worshipDate: string;
  fileName: string;
  fileSize: string;
  downloadUrl: string;
  isPublished: boolean;
};

export const archiveCategoryLabels: Record<ArchiveCategory, string> = {
  manuscript: "설교 원고",
  ppt: "PPT",
  audio: "음원",
  document: "문서"
};
