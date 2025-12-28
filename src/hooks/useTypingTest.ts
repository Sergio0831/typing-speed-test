import { handleBackspace, handleInput, initChars } from "@/lib/typing";
import type { CharStatus } from "@/types/test";
import { useCallback, useEffect, useState } from "react";

type Char = {
  char: string;
  status: CharStatus;
};

export function useTypingTest(text: string) {
  const [chars, setChars] = useState<Char[]>(() => initChars(text));
  const [cursor, setCursor] = useState(0);

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (cursor >= chars.length) return;

      const currentChar = chars[cursor].char;

      setChars((prevChar) => {
        const nextChar = [...prevChar];
        nextChar[cursor] = {
          ...nextChar[cursor],
          status: e.key === currentChar ? "correct" : "incorrect",
        };
        return nextChar;
      });

      setCursor((prevCursor) => prevCursor + 1);
    },
    [cursor, chars]
  );

  function onKeyDown(e: KeyboardEvent) {
    if (e.key === "Backspace") {
      if (cursor === 0) {
        setChars((prevChars) => handleBackspace(prevChars, cursor - 1));
        setCursor((prevCursor) => Math.max(0, prevCursor - 1));
        return;
      }

      if (e.key.length === 1) {
        setChars((prevChars) => handleInput(prevChars, cursor, e.key));
        setCursor((prevCursor) => prevCursor + 1);
      }
    }
  }

  function reset(newText: string) {
    setChars(initChars(newText));
    setCursor(0);
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [handleKey]);

  return {
    chars,
    cursor,
    onKeyDown,
    reset,
  };
}
