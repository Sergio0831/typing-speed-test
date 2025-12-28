export type TestPhase =
  | "idle"
  | "running"
  | "finished"
  | "high-score"
  | "baseline";

export type Char = {
  char: string;
  status: "correct" | "incorrect" | "pending";
};
