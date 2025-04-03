"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props {
  className?: string;
  onClickOnLink?: () => void;
}

const navList = [
  { title: "Services", url: "#services" },
  { title: "Our Approach", url: "#2" },
  { title: "Pricing", url: "#3" },
  { title: "Case Studies", url: "#4" },
  { title: "Blog", url: "#5" },
];

export function HeaderNav({ className, onClickOnLink }: Props) {
  return (
    <div className={cn("flex gap-x-4 lg:flex-col lg:gap-y-8", className)}>
      {navList.map(({ title, url }) => (
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
