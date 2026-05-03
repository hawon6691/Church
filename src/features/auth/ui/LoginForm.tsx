import { Lock, UserRound } from "lucide-react";
import { FormEvent, useState } from "react";
import { Button } from "@shared/ui/button";
import { Card, CardContent } from "@shared/ui/card";
import { Input } from "@shared/ui/input";
import { Label } from "@shared/ui/label";

type LoginFormProps = {
  onLogin: () => void;
};

export function LoginForm({ onLogin }: LoginFormProps) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (id.trim() && password.trim()) {
      onLogin();
    }
  }

  return (
    <Card className="mx-auto w-full max-w-[520px] border-0 shadow-[0_20px_60px_rgb(15_23_42/10%)]">
      <CardContent className="p-10">
        <form className="grid gap-5" onSubmit={handleSubmit}>
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-primary text-white">
            <Lock size={28} />
          </span>
          <div className="text-center">
            <h2 className="m-0 text-[32px] font-extrabold">로그인</h2>
            <p className="mt-2 text-muted-foreground">동서울열방교회 관리자 페이지</p>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="admin-id">아이디</Label>
            <div className="relative">
              <UserRound className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <Input id="admin-id" className="h-14 pl-11" value={id} onChange={(event) => setId(event.target.value)} placeholder="admin" />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="admin-password">비밀번호</Label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <Input
                id="admin-password"
                className="h-14 pl-11"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="비밀번호"
              />
            </div>
          </div>
          <Button className="mt-2 h-14 text-base" type="submit">로그인</Button>
        </form>
      </CardContent>
    </Card>
  );
}
