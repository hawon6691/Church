import { Download, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { archiveCategoryLabels, type ArchiveCategory, type ArchiveItem } from "@entities/archive/model/types";
import { Badge } from "@shared/ui/badge";
import { Button } from "@shared/ui/button";
import { Card, CardContent } from "@shared/ui/card";
import { Input } from "@shared/ui/input";
import { Label } from "@shared/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@shared/ui/select";

type ArchiveSearchProps = {
  items: ArchiveItem[];
};

export function ArchiveSearch({ items }: ArchiveSearchProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<ArchiveCategory | "all">("all");
  const [year, setYear] = useState("all");

  const years = useMemo(
    () => Array.from(new Set(items.map((item) => item.worshipDate.slice(0, 4)))).sort((a, b) => b.localeCompare(a)),
    [items]
  );

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return items.filter((item) => {
      const matchesQuery =
        !normalizedQuery ||
        item.title.toLowerCase().includes(normalizedQuery) ||
        item.description.toLowerCase().includes(normalizedQuery) ||
        item.preacher.toLowerCase().includes(normalizedQuery);
      const matchesCategory = category === "all" || item.category === category;
      const matchesYear = year === "all" || item.worshipDate.startsWith(year);

      return item.isPublished && matchesQuery && matchesCategory && matchesYear;
    });
  }, [category, items, query, year]);

  return (
    <div className="grid gap-6">
      <Card>
        <CardContent className="grid gap-4 p-6 md:grid-cols-[minmax(0,1.4fr)_minmax(180px,0.6fr)_minmax(140px,0.4fr)] md:items-end">
          <div className="grid gap-2">
            <Label htmlFor="archive-query">검색</Label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="archive-query"
                className="pl-10"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="제목, 설명, 설교자 검색"
              />
            </div>
          </div>
          <div className="grid gap-2">
            <Label>자료 유형</Label>
            <Select value={category} onValueChange={(value) => setCategory(value as ArchiveCategory | "all")}>
              <SelectTrigger>
                <SelectValue placeholder="자료 유형" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">전체</SelectItem>
                {Object.entries(archiveCategoryLabels).map(([value, label]) => (
                  <SelectItem key={value} value={value}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label>연도</Label>
            <Select value={year} onValueChange={setYear}>
              <SelectTrigger>
                <SelectValue placeholder="연도" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">전체</SelectItem>
                {years.map((itemYear) => (
                  <SelectItem key={itemYear} value={itemYear}>
                    {itemYear}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <Card key={item.id} as="article" className="grid gap-5 p-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
              <div>
                <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                  <Badge>{archiveCategoryLabels[item.category]}</Badge>
                  <span>{item.worshipDate}</span>
                </div>
                <h3 className="mb-2 mt-3 text-2xl font-extrabold">{item.title}</h3>
                <p className="mb-5 leading-7 text-muted-foreground">{item.description}</p>
                <dl className="grid gap-2">
                  <div className="grid grid-cols-[56px_minmax(0,1fr)] gap-3">
                    <dt className="font-bold text-muted-foreground">담당</dt>
                    <dd className="m-0">{item.preacher}</dd>
                  </div>
                  <div className="grid grid-cols-[56px_minmax(0,1fr)] gap-3">
                    <dt className="font-bold text-muted-foreground">파일</dt>
                    <dd className="m-0">
                      {item.fileName} · {item.fileSize}
                    </dd>
                  </div>
                </dl>
              </div>
              <Button asChild>
                <a href={item.downloadUrl} download>
                  <Download size={18} />
                  다운로드
                </a>
              </Button>
            </Card>
          ))
        ) : (
          <div className="rounded-lg border border-dashed bg-card p-10 text-center text-muted-foreground">
            조건에 맞는 자료가 없습니다.
          </div>
        )}
      </div>
    </div>
  );
}
