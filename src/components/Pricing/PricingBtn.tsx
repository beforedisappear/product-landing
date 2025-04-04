"use client";

import { Context } from "@/providers/ContextProvider";
import { Button } from "@/ui/Button/Button";
import { use } from "react";

interface Props {
  children: React.ReactNode;
}

export function PricingBtn({ children }: Props) {
  const context = use(Context);

  if (!context) throw new Error("CONTEXT_UNDEFINED");

  const { setShowContactUsModal } = context;

  return (
    <Button className="w-full" onClick={() => setShowContactUsModal(true)}>
      {children}
    </Button>
  );
}
