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

import { useState, type ReactNode } from "react";
import { ContactUsForm } from "./ContactUsForm";
import { ContactUsModalDict } from "./ContactUsModal.types";

interface IProps {
  children: ReactNode;
  dict: ContactUsModalDict;
}

export function ContactUsModal({ children, dict }: IProps) {
  const [isOpenModel, setIsOpenModal] = useState(false);

  const onCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <Dialog open={isOpenModel} onOpenChange={setIsOpenModal}>
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
