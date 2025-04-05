"use client";

import { Context } from "@/providers/ContextProvider";
import { Button } from "@/ui/Button/Button";
import { use } from "react";

interface Props {
  text: string;
}

export function ContactsBtn({ text }: Props) {
  const context = use(Context);

  if (!context) throw new Error("");

  const { setShowContactUsModal } = context;

  return (
    <Button
      type="button"
      variant="secondary"
      className="text-base w-fit mx-auto py-3 px-6"
      onClick={() => setShowContactUsModal(true)}
    >
      {text}
    </Button>
  );
}
