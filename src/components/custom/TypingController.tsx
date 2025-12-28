import Passage from "./Passage";
import { useEffect } from "react";
import type { Char, TestPhase } from "@/types/ui";

type TypingControllerProps = {
  chars: Char[];
  phase: TestPhase;
  cursor: number;
  onKeyDown: (e: KeyboardEvent) => void;
};

export default function TypingController({
  chars,
  phase,
  cursor,
  onKeyDown,
}: TypingControllerProps) {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (phase !== "running") return;
      if (e.ctrlKey || e.altKey || e.metaKey) return;

      onKeyDown(e);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onKeyDown, phase]);

  return <Passage chars={chars} cursor={cursor} />;
}
