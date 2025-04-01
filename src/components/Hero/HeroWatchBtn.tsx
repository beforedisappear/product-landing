import { cn } from "@/lib/utils";
import { Button } from "@/ui/Button/Button";
import { Play } from "lucide-react";

interface Props {
  className?: string;
}

export function HeroWatchBtn({ className }: Props) {
  return (
    <Button
      variant={null}
      className={cn(
        "h-14 w-14 rounded-full bg-[#ffffff1a] opacity-60",
        className
      )}
    >
      <Play />
    </Button>
  );
}
