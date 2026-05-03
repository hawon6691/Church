import type { BibleBook, BibleVerse } from "./types";

export const bibleBooks: BibleBook[] = [
  { id: "genesis", name: "창세기", testament: "old", chapters: 50 },
  { id: "psalms", name: "시편", testament: "old", chapters: 150 },
  { id: "isaiah", name: "이사야", testament: "old", chapters: 66 },
  { id: "matthew", name: "마태복음", testament: "new", chapters: 28 },
  { id: "john", name: "요한복음", testament: "new", chapters: 21 },
  { id: "romans", name: "로마서", testament: "new", chapters: 16 }
];

export const bibleVerses: BibleVerse[] = [
  {
    book: "요한복음",
    chapter: 5,
    verse: 39,
    text: "너희가 성경에서 영생을 얻는 줄 생각하고 성경을 연구하거니와 이 성경이 곧 내게 대하여 증언하는 것이니라"
  },
  {
    book: "요한복음",
    chapter: 3,
    verse: 16,
    text: "하나님이 세상을 이처럼 사랑하사 독생자를 주셨으니 이는 그를 믿는 자마다 멸망하지 않고 영생을 얻게 하려 하심이라"
  },
  {
    book: "로마서",
    chapter: 1,
    verse: 16,
    text: "내가 복음을 부끄러워하지 아니하노니 이 복음은 모든 믿는 자에게 구원을 주시는 하나님의 능력이 됨이라"
  },
  {
    book: "시편",
    chapter: 23,
    verse: 1,
    text: "여호와는 나의 목자시니 내게 부족함이 없으리로다"
  }
];
