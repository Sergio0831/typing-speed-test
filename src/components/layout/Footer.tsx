import RestartIcon from "@/assets/images/icon-restart.svg?react";
import { Button } from "../ui/button";

type FooterProps = {
  onReset: () => void;
};

export default function Footer({ onReset }: FooterProps) {
  return (
    <footer className="mt-32 xs:mt-10 md:mt-16 pt-6 md:8 border-t border-t-border flex-center">
      <Button variant="tertiary" size="sm" onClick={onReset}>
        Restart Test
        <RestartIcon />
      </Button>
    </footer>
  );
}
