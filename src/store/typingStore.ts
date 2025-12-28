import { create } from "zustand";
import { persist } from "zustand/middleware";

import {
  type DifficultyLevel,
  type Mode,
  type TestStats,
} from "./../types/test";

interface TypingStore {
  // settings
  difficulty: DifficultyLevel;
  mode: Mode;

  // progress
  bestWpm: number;
  hasBaseline: boolean;
  history: TestStats[];

  // actions
  setDifficulty: (level: DifficultyLevel) => void;
  setMode: (mode: Mode) => void;
  updateBestWpm: (wpm: number) => void;
  setHasBaseline: (hasBaseline: boolean) => void;
  recordResult: (stats: TestStats) => void;
}

export const useTypingStore = create<TypingStore>()(
  persist(
    (set, get) => ({
      // settings
      difficulty: "easy",
      mode: "timed",

      // progress
      bestWpm: 0,
      hasBaseline: false,
      history: [],

      // actions
      setDifficulty: (level) => set({ difficulty: level }),
      setMode: (mode) => set({ mode }),
      updateBestWpm: (wpm) => set({ bestWpm: Math.max(get().bestWpm, wpm) }),
      setHasBaseline: (hasBaseline) => set({ hasBaseline }),
      recordResult: (stats) => set({ history: [...get().history, stats] }),
    }),
    {
      name: "typing-test-store",
    }
  )
);
