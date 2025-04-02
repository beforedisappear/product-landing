import Image from "next/image";
import Link from "next/link";

interface Props {}

export function HeaderLogo({}: Props) {
  return (
    <Link href="/">
      <Image
        src="/logo.webp"
        alt=""
        height={46}
        width={46}
        className="md:h-9 md:w-9"
      />
    </Link>
  );
}
