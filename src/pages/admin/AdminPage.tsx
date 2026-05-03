import { FileText, Megaphone, Save, Upload } from "lucide-react";
import { FormEvent, useState } from "react";
import { archiveItems } from "@entities/archive/model/mock";
import { notices } from "@entities/notice/model/mock";
import { LoginForm } from "@features/auth/ui/LoginForm";
import { Button } from "@shared/ui/button";
import { Input } from "@shared/ui/input";
import { Label } from "@shared/ui/label";
import { PageHeader } from "@shared/ui/PageHeader";
import { Section } from "@shared/ui/Section";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@shared/ui/select";
import { Textarea } from "@shared/ui/textarea";

export function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleMockSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <>
      <PageHeader title={isLoggedIn ? "관리자" : "로그인"} />
      {!isLoggedIn ? (
        <Section tone="soft" className="min-h-[640px]">
          <LoginForm onLogin={() => setIsLoggedIn(true)} />
        </Section>
      ) : (
        <>
          <Section tone="soft" title="관리 대시보드">
            <div className="grid gap-6 md:grid-cols-2">
              {[
                { label: "등록 자료", value: archiveItems.length, Icon: FileText },
                { label: "공지사항", value: notices.length, Icon: Megaphone }
              ].map(({ label, value, Icon }) => (
                <article key={label} className="rounded-md border bg-white p-8 shadow-soft">
                  <Icon className="mb-5 text-primary" size={34} />
                  <strong className="block text-[56px] leading-none">{value}</strong>
                  <span className="mt-3 block text-lg font-bold text-muted-foreground">{label}</span>
                </article>
              ))}
            </div>
          </Section>

          <Section title="자료 등록" className="bg-white">
            <form className="grid gap-6 rounded-md border bg-white p-8 shadow-soft" onSubmit={handleMockSubmit}>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="archive-title">제목</Label>
                  <Input id="archive-title" className="h-14" placeholder="자료 제목" />
                </div>
                <div className="grid gap-2">
                  <Label>자료 유형</Label>
                  <Select defaultValue="manuscript">
                    <SelectTrigger className="h-14">
                      <SelectValue placeholder="자료 유형" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="manuscript">설교 원고</SelectItem>
                      <SelectItem value="ppt">PPT</SelectItem>
                      <SelectItem value="audio">음원</SelectItem>
                      <SelectItem value="document">문서</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="archive-description">설명</Label>
                <Textarea id="archive-description" placeholder="자료 설명" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="archive-file">파일</Label>
                <Input id="archive-file" type="file" />
              </div>
              <Button className="justify-self-start" type="submit">
                <Upload size={18} />
                자료 저장
              </Button>
            </form>
          </Section>

          <Section title="공지 등록" tone="soft">
            <form className="grid gap-6 rounded-md border bg-white p-8 shadow-soft" onSubmit={handleMockSubmit}>
              <div className="grid gap-2">
                <Label htmlFor="notice-title">제목</Label>
                <Input id="notice-title" placeholder="공지 제목" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="notice-content">내용</Label>
                <Textarea id="notice-content" placeholder="공지 내용" />
              </div>
              <label className="inline-flex items-center gap-2 font-bold">
                <input className="h-4 w-4 accent-primary" type="checkbox" />
                중요 공지로 표시
              </label>
              <Button className="justify-self-start" type="submit">
                <Save size={18} />
                공지 저장
              </Button>
            </form>
          </Section>
        </>
      )}
    </>
  );
}
