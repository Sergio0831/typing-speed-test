import { cn } from "@/lib/utils";

type StatItemProps = {
  label: string;
  value: string | number;
  className?: string;
};

export default function StatItem({ label, value, className }: StatItemProps) {
  return (
    <div
      className={cn(
        "flex flex-col xs:flex-row items-center gap-x-3 gap-y-2",
        className
      )}
    >
      <span className="text-preset-3 text-muted">{label}</span>
      <span className="text-preset-2">{value}</span>
    </div>
  );
}
