import { useState } from "react";
import StatItem from "./components/custom/StatItem";
import Header from "./components/layout/Header";
import Wrapper from "./components/layout/Wrapper";
import { RadioGroup, RadioGroupItem } from "./components/ui/radio-group";
import { Separator } from "./components/ui/separator";
import { DIFFICULTY_LABELS, MODE_LABELS } from "./types/test";
import { useTypingStore } from "./store/typingStore";
import TypingController from "./components/custom/TypingController";
import type { TestPhase } from "./types/ui";
import StartOverlay from "./components/custom/StartOverlay";
import Footer from "./components/layout/Footer";
import { useTypingTest } from "./hooks/useTypingTest";

const text =
  "Quantum entanglement—Einstein's spooky action at a distance continues to perplex physicists and philosophers alike. When two particles become entangled, measuring one instantaneously affects the other, regardless of the distance separating them. This phenomenon doesn't violate relativity (no information travels faster than light), yet it challenges our intuitions about locality, causality, and the nature of reality itself.";

function App() {
  const selectedDifficulty = useTypingStore((state) => state.difficulty);
  const setSelectedDifficulty = useTypingStore((state) => state.setDifficulty);
  const selectedMode = useTypingStore((state) => state.mode);
  const setSelectedMode = useTypingStore((state) => state.setMode);
  const typing = useTypingTest(text);

  const [phase, setPhase] = useState<TestPhase>("idle");

  const handleReset = () => {
    typing.reset(text);
    setPhase("idle");
  };

  return (
    <Wrapper>
      <Header className="mt-4 xs:mt-8 mb-8 xs:mb-10 md:mb-16" />
      <main className="grid gap-x-4 gap-y-6">
        {/* Stats and Controls start */}
        <div className="pb-4 border-b border-b-border flex justify-between lg:items-center lg:flex-row flex-col gap-y-4">
          {/* Stats start */}
          <div className="flex xs:h-8 h-12">
            <StatItem label="WPM:" value={0} />
            <Separator orientation="vertical" className="mx-5 xs:mx-6" />
            <StatItem label="Accuracy:" value={"100%"} />
            <Separator orientation="vertical" className="mx-5 xs:mx-6" />
            <StatItem label="Time:" value={"0:60"} />
          </div>
          {/* Stats end */}
          {/* Controls start */}
          <div className="flex items-center h-8">
            {/* Difficulty selector start */}
            <div className="flex-center gap-x-3.5">
              <span className="text-preset-3 text-muted">Difficulty:</span>
              <RadioGroup
                name="difficulty"
                onValueChange={setSelectedDifficulty}
                value={selectedDifficulty}
              >
                {DIFFICULTY_LABELS.map((value) => (
                  <RadioGroupItem key={value.level} value={value.level}>
                    <span className="text-preset-5">{value.label}</span>
                  </RadioGroupItem>
                ))}
              </RadioGroup>
            </div>
            {/* Difficulty selector end */}
            <Separator orientation="vertical" className="mx-4" />
            {/* Mode selector start */}
            <div className="flex-center gap-x-3.5">
              <span className="text-preset-3 text-muted">Mode:</span>
              <RadioGroup
                name="mode"
                onValueChange={setSelectedMode}
                value={selectedMode}
              >
                {MODE_LABELS.map((value) => (
                  <RadioGroupItem key={value.mode} value={value.mode}>
                    <span className="text-preset-5">{value.label}</span>
                  </RadioGroupItem>
                ))}
              </RadioGroup>
            </div>
            {/* Mode selector end */}
          </div>
          {/* Controls end */}
        </div>
        {/* Stats and Controls end */}
        <div className="relative">
          <TypingController
            chars={typing.chars}
            cursor={typing.cursor}
            onKeyDown={typing.onKeyDown}
            phase={phase}
          />
          {phase === "idle" && (
            <StartOverlay onStart={() => setPhase("running")} />
          )}
        </div>
      </main>
      {phase === "running" && <Footer onReset={handleReset} />}
    </Wrapper>
  );
}

export default App;
