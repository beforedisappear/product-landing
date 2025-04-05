"use client";

import { Button } from "@/ui/Button/Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/ui/Dialog/Dialog";

import { use, type ReactNode } from "react";
import { ContactUsForm } from "./ContactUsForm";
import { ContactUsModalDict } from "./ContactUsModal.types";
import { Context } from "@/providers/ContextProvider";

interface IProps {
  children: ReactNode;
  dict: ContactUsModalDict;
}

export function ContactUsModal({ children, dict }: IProps) {
  const context = use(Context);

  if (!context) throw new Error("CONTEXT UNDEFINED");

  const { setShowContactUsModal, showContactUsModal } = context;

  const onCloseModal = () => {
    setShowContactUsModal(false);
  };

  return (
    <Dialog open={showContactUsModal} onOpenChange={setShowContactUsModal}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        className="max-w-[800px] h-[695px] rounded-xl border-2
        md:max-w-[425px] md:h-auto"
      >
        <DialogHeader>
          <DialogTitle
            className="text-left text-2xl font-medium 
            md:text-xl"
          >
            {dict.title}
          </DialogTitle>
          <DialogDescription
            className="text-left text-base 
            md:text-sm"
          >
            {dict.description}
          </DialogDescription>
        </DialogHeader>

        <ContactUsForm dict={dict} onCloseModal={onCloseModal} />
      </DialogContent>
    </Dialog>
  );
}
