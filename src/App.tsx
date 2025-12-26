import { useState } from "react";
import StatItem from "./components/custom/StatItem";
import Header from "./components/layout/Header";
import Wrapper from "./components/layout/Wrapper";
import { RadioGroup, RadioGroupItem } from "./components/ui/radio-group";
import { Separator } from "./components/ui/separator";
import { motion } from "framer-motion";

const difficulty = ["Easy", "Medium", "Hard"];
const mode = ["Timed (60s)", "Passage"];

const MotionDifficultyItem = motion.create(RadioGroupItem);

function App() {
  const [selectedDifficulty, setSelectedDifficulty] = useState("Easy");
  const [selectedMode, setSelectedMode] = useState("Timed (60s)");

  return (
    <Wrapper>
      <Header className="mt-4 xs:mt-8 mb-8 xs:mb-10 md:mb-16" />
      <main className="grid gap-x-4">
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
                {difficulty.map((level) => (
                  <RadioGroupItem key={level} value={level}>
                    <span className="text-preset-5">{level}</span>
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
                {mode.map((level) => (
                  <RadioGroupItem key={level} value={level}>
                    <span className="text-preset-5">{level}</span>
                  </RadioGroupItem>
                ))}
              </RadioGroup>
            </div>
            {/* Mode selector end */}
          </div>
          {/* Controls end */}
        </div>
        {/* Stats and Controls end */}
        <div></div>
      </main>
    </Wrapper>
  );
}

export default App;
