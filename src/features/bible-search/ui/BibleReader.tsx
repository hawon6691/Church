import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { bibleBooks, bibleVerses } from "@entities/bible/model/mock";
import { Card, CardContent, CardHeader, CardTitle } from "@shared/ui/card";
import { Input } from "@shared/ui/input";
import { Label } from "@shared/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@shared/ui/select";

export function BibleReader() {
  const [book, setBook] = useState("요한복음");
  const [chapter, setChapter] = useState("");
  const [keyword, setKeyword] = useState("");

  const verses = useMemo(() => {
    const normalizedKeyword = keyword.trim();
    const chapterNumber = Number(chapter);

    return bibleVerses.filter((verse) => {
      const matchesBook = verse.book === book;
      const matchesChapter = !chapter || verse.chapter === chapterNumber;
      const matchesKeyword = !normalizedKeyword || verse.text.includes(normalizedKeyword);

      return matchesBook && matchesChapter && matchesKeyword;
    });
  }, [book, chapter, keyword]);

  return (
    <div className="grid gap-6">
      <Card className="border bg-white shadow-soft">
        <CardContent className="grid gap-4 p-7 md:grid-cols-[minmax(180px,0.7fr)_minmax(120px,0.35fr)_minmax(0,1fr)] md:items-end">
          <div className="grid gap-2">
            <Label>성경책</Label>
            <Select value={book} onValueChange={setBook}>
              <SelectTrigger>
                <SelectValue placeholder="성경책 선택" />
              </SelectTrigger>
              <SelectContent>
            {bibleBooks.map((item) => (
              <SelectItem key={item.id} value={item.name}>
                {item.name}
              </SelectItem>
            ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="bible-chapter">장</Label>
            <Input
              id="bible-chapter"
              inputMode="numeric"
              value={chapter}
              onChange={(event) => setChapter(event.target.value)}
              placeholder="예: 5"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="bible-keyword">본문 검색</Label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
              id="bible-keyword"
              className="pl-10"
              value={keyword}
              onChange={(event) => setKeyword(event.target.value)}
              placeholder="사랑, 복음, 믿음"
            />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="overflow-hidden border bg-white shadow-soft">
        <CardHeader className="bg-primary text-primary-foreground">
          <CardTitle>{book}</CardTitle>
          <p className="text-sm text-primary-foreground/85">성경 데이터 API 연결 전까지 대표 구절로 동작합니다.</p>
        </CardHeader>
        {verses.length > 0 ? (
          <CardContent className="grid max-h-[620px] min-h-72 gap-5 overflow-auto p-7">
            {verses.map((verse) => (
              <p className="m-0 grid gap-2 leading-8" key={`${verse.book}-${verse.chapter}-${verse.verse}`}>
                <strong className="text-primary">
                  {verse.book} {verse.chapter}:{verse.verse}
                </strong>
                <span>{verse.text}</span>
              </p>
            ))}
          </CardContent>
        ) : (
          <CardContent className="p-7">
            <div className="rounded-lg border border-dashed p-10 text-center text-muted-foreground">
              조건에 맞는 성경 본문이 없습니다.
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
}
