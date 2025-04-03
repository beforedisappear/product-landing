"use client";

import { Context } from "@/providers/ContextProvider";
import { Button } from "@/ui/Button/Button";
import { ArrowUpRight } from "lucide-react";
import { use } from "react";

interface Props {
  text: string;
}

export function HeroBtn({ text }: Props) {
  const context = use(Context);

  if (!context) throw new Error("CONTEXT UNDEFINED");

  const { setShowContactUsModal } = context;

  return (
    <Button
      size="lg"
      className="w-fit h-12 py-[13px] px-[22px] rounded-xl"
      onClick={() => setShowContactUsModal(true)}
    >
      <span className="font-light">{text}</span>
      <ArrowUpRight />
    </Button>
  );
}
