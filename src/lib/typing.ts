import { type CharStatus } from "@/types/test";

export function initChars(text: string) {
  return text.split("").map((char) => ({
    char,
    status: "pending" as CharStatus,
  }));
}

export function handleInput(
  chars: ReturnType<typeof initChars>,
  index: number,
  inputChar: string
): ReturnType<typeof initChars> {
  const updatedChars = [...chars];

  if (!updatedChars[index]) return updatedChars;

  updatedChars[index] = {
    ...updatedChars[index],
    status: inputChar === updatedChars[index].char ? "correct" : "incorrect",
  };

  return updatedChars;
}

export function handleBackspace(
  chars: ReturnType<typeof initChars>,
  index: number
): ReturnType<typeof initChars> {
  const updatedChars = [...chars];
  if (updatedChars[index]) {
    updatedChars[index] = {
      ...updatedChars[index],
      status: "pending",
    };
  }

  return updatedChars;
}
