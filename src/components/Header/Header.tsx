import { Phone } from "lucide-react";
import logoImg from "@/assets/logo.webp";

import { Button } from "@/ui/Button/Button";
import Image from "next/image";
import Link from "next/link";

interface Props {}

export function Header({}: Props) {
  return (
    <header className="container flex items-center justify-between h-[100px] py-6 px-8">
      <Link href="/">
        <Image src={logoImg} alt="" height={46} width={46} />
      </Link>

      <Button variant="secondary" className="h-[50px] px-5 rounded-xl">
        <Phone />
        <span>Задать вопрос</span>
      </Button>
    </header>
  );
}
