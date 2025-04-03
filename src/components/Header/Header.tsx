import { getDict } from "@/lib/getDict";
import { HeaderConsultationBtn } from "./HeaderConsultationBtn";
import { ContactUsModal } from "../ContactUsModal/ContactUsModal";
import { HeaderSheet } from "./HeaderSheet";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderNav } from "./HeaderNav";
import { use } from "react";
import { Context } from "@/providers/ContextProvider";

interface Props {}

export async function Header({}: Props) {
  const { header, contactUsModal } = await getDict();

  return (
    <div
      className="sticky top-0 z-30 bg-background w-full
      md:bg-transparent md:backdrop-blur-md md:fixed"
    >
      <header
        className="container flex items-center justify-between h-[100px] py-6 px-8
        md:h-14 md:py-2 md:px-6"
      >
        <div className="flex items-center gap-x-10">
          <HeaderLogo />

          <HeaderNav className="lg:hidden" />
        </div>

        <ContactUsModal dict={contactUsModal}>
          <HeaderConsultationBtn text={header.button} className="lg:hidden" />
        </ContactUsModal>

        <HeaderSheet dict={{ header, contactUsModal }} />
      </header>
    </div>
  );
}
