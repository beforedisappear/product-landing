import Image from "next/image";
import Link from "next/link";

import { getDict } from "@/lib/getDict";
import { HeaderConsultationBtn } from "./HeaderConsultationBtn";
import { ConsultationModal } from "../ConsultationModal/ConsultationModal";

interface Props {}

export async function Header({}: Props) {
  const {
    header: { button },
  } = await getDict();

  return (
    <div
      className="fixed top-0 z-10 bg-background w-full
      md:bg-transparent md:backdrop-blur-md"
    >
      <header
        className="container flex items-center justify-between h-[100px] py-6 px-8
      md:h-14 md:py-2 md:px-6"
      >
        <Link href="/">
          <Image
            src="/logo.webp"
            alt=""
            height={46}
            width={46}
            className="md:h-9 md:w-9"
          />
        </Link>

        <ConsultationModal>
          <HeaderConsultationBtn text={button} className="md:hidden" />
        </ConsultationModal>
      </header>
    </div>
  );
}
