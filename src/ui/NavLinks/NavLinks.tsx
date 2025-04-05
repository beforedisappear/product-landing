"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props {
  className?: string;
  onClickOnLink?: () => void;
}

const navLinkList = [
  { title: "Services", url: "/#services" },
  { title: "Our Approach", url: "/#formulas" },
  { title: "Client Success Stories", url: "/#stories" },
  { title: "Blog", url: "/#insights" },
  { title: "Pricing", url: "/#pricing" },
];

export function NavLinks({ className, onClickOnLink }: Props) {
  return (
    <div className={cn("flex gap-x-4 lg:flex-col lg:gap-y-8", className)}>
      {navLinkList.map(({ title, url }) => (
        <Link
          key={title}
          href={url}
          className="text-gray-400 hover:text-white 
          lg:text-2xl lg:text-white"
          onClick={() => onClickOnLink?.()}
        >
          {title}
        </Link>
      ))}
    </div>
  );
}
