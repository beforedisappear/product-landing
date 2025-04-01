import { cn } from "@/lib/utils";
import { Button } from "@/ui/Button/Button";
import { Phone } from "lucide-react";

interface Props {
  text: string;
  className?: string;
}

export function HeaderConsultationBtn({ text, className }: Props) {
  return (
    <Button
      variant="secondary"
      className={cn("h-[50px] px-5 rounded-xl", className)}
    >
      <Phone />
      <span>{text}</span>
    </Button>
  );
}
