import { getDict } from "@/lib/getDict";
import { NavLinks } from "@/ui/NavLinks/NavLinks";
import Image from "next/image";
import { FooterSocialNetworkList } from "./FooterSocialNetworkList";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props {}

export async function Footer({}: Props) {
  const {
    footer: { title, copyright, links },
  } = await getDict();

  return (
    <div className={cn("relative mt-16 px-8")}>
      <Image
        src="/footer-background.webp"
        alt=""
        width={1457}
        height={396}
        className="absolute -z-[1] left-0 bottom-0 max-w-full"
      />

      <footer className="container py-12 !px-12 flex flex-col gap-11 border border-b-0 rounded-t-xl bg-background">
        <div
          className="flex items-center gap-6
          lg:flex-col"
        >
          <Image
            src="/logo.webp"
            alt=""
            height={46}
            width={46}
            className="md:h-9 md:w-9"
          />

          <span className="lg:hidden">|</span>

          <span className="text-base font-semibold text-center">{title}</span>
        </div>

        <div
          className="flex items-center justify-between 
          lg:justify-center"
        >
          <NavLinks className="lg:hidden" />

          <FooterSocialNetworkList />
        </div>

        <div
          className="flex items-center justify-between
          lg:flex-col lg:gap-8"
        >
          <span
            className="text-gray-600 text-xs text-center
            lg:order-2"
          >
            {copyright}
          </span>

          <div
            className="flex gap-2
            lg:order-1 lg:flex-col lg:gap-6"
          >
            {links.map(({ url, name }, i) => (
              <Link
                key={i}
                href={url}
                className="text-gray-600 text-xs text-center"
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
