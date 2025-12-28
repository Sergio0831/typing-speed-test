import { Button } from "../ui/button";

type StartOverlayProps = {
  onStart: () => void;
};

export default function StartOverlay({ onStart }: StartOverlayProps) {
  return (
    <div
      className="absolute inset-0 backdrop-blur-sm flex-center"
      onClick={onStart}
    >
      <div className="flex-center flex-col gap-y-5 ">
        <Button onClick={onStart}>Start Typing Test</Button>
        <p className="text-preset-3-semibold">
          Or click the text and start typing
        </p>
      </div>
    </div>
  );
}
