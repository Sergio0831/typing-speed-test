import { cn } from "@/lib/utils";
import LogoLarge from "@/assets/images/logo-large.svg?react";
import LogoSmall from "@/assets/images/logo-small.svg?react";
import Trophy from "@/assets/images/icon-personal-best.svg?react";
import { useTypingStore } from "@/store/typingStore";

export default function Header({ className }: { className?: string }) {
  const bestWpm = useTypingStore((state) => state.bestWpm);

  return (
    <header className={cn("flex-space-between", className)}>
      <LogoSmall className="size-8 xs:hidden" />
      <LogoLarge className="h-10 w-66.75 hidden xs:block" />
      <div className="flex-space-between gap-x-2.5">
        <Trophy className="size-5" />
        <div className="flex-center gap-x-2">
          <span className="text-preset-3 text-muted">Personal best:</span>
          <span className="text-preset-2">{bestWpm} WPM</span>
        </div>
      </div>
    </header>
  );
}
