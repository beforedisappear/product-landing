"use client";

import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/ui/Sheet/Sheet";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderNav } from "./HeaderNav";
import { ContactUsModal } from "../ContactUsModal/ContactUsModal";
import { HeaderConsultationBtn } from "./HeaderConsultationBtn";
import { Button } from "@/ui/Button/Button";

import type { ContactUsModalDict } from "../ContactUsModal/ContactUsModal.types";
import type { HeaderDict } from "./Header.types";
import { useState } from "react";

interface Props {
  dict: { contactUsModal: ContactUsModalDict; header: HeaderDict };
}

export function HeaderSheet({ dict }: Props) {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const onClickOnLink = () => {
    setIsSheetOpen(false);
  };

  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetTrigger asChild>
        <Button
          size="icon"
          variant={null}
          className="hidden
              lg:flex"
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-4 sm:w-full sm:max-w-full">
        <SheetHeader>
          <HeaderLogo />
          <SheetTitle className="hidden">Header Sheet</SheetTitle>
        </SheetHeader>

        <HeaderNav onClickOnLink={onClickOnLink} />

        <ContactUsModal dict={dict.contactUsModal}>
          <HeaderConsultationBtn text={dict.header.button} />
        </ContactUsModal>
      </SheetContent>
    </Sheet>
  );
}
