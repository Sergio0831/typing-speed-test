export type DifficultyLevel = "easy" | "medium" | "hard";
export type DifficultyLabel = "Easy" | "Medium" | "Hard";
export type Mode = "timed" | "passage";
export type ModeLabel = "Timed (60s)" | "Passage";
export type CharStatus = "correct" | "incorrect" | "pending";

export type TestSettings = {
  difficulty: DifficultyLevel;
  mode: Mode;
};

export type TestStats = {
  wpm: number;
  accuracy: number;
  correctChars: number;
  incorrectChars: number;
  time: number; // in seconds
};

export const DIFFICULTY_LABELS = [
  { level: "easy", label: "Easy" },
  { level: "medium", label: "Medium" },
  { level: "hard", label: "Hard" },
] satisfies { level: DifficultyLevel; label: DifficultyLabel }[];

export const MODE_LABELS = [
  { mode: "timed", label: "Timed (60s)" },
  { mode: "passage", label: "Passage" },
] satisfies { mode: Mode; label: ModeLabel }[];
