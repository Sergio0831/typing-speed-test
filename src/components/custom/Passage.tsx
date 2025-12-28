import { cn } from "@/lib/utils";
import type { Char } from "@/types/ui";

type PassageProps = {
  chars: Char[];
  cursor: number;
};

export default function Passage({ chars, cursor }: PassageProps) {
  return (
    <div className="relative text-preset-1 text-muted select-none">
      {chars.map((item, index) => (
        <span
          key={index}
          className={cn(
            "relative",
            item.status === "pending" && "text-muted",
            item.status === "correct" && "text-success",
            item.status === "incorrect" && "text-destructive"
          )}
        >
          {item.char}
          {index === cursor && (
            <span className="absolute inset-0 w-full h-full bg-muted opacity-25 rounded-sm animate-pulse" />
          )}
        </span>
      ))}
    </div>
  );
}
