export type BibleBook = {
  id: string;
  name: string;
  testament: "old" | "new";
  chapters: number;
};

export type BibleVerse = {
  book: string;
  chapter: number;
  verse: number;
  text: string;
};
