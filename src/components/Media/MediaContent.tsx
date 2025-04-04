"use client";

import Image from "next/image";
import Link from "next/link";

import useEmblaCarousel from "embla-carousel-react";

import { sizes } from "@/tailwind/screens";

import type { MediaItem } from "./Media.types";

interface Props {
  items: MediaItem[];
}

export function MediaContent({ items }: Props) {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    active: false,
    breakpoints: { [`(max-width: ${sizes["sm"]})`]: { active: true } },
  });

  return (
    <div ref={emblaRef} className="overflow-hidden">
      <div
        className="grid grid-cols-3 gap-6 
        xl:grid-cols-2
        sm:flex"
      >
        {items.map((item, i) => (
          <Link
            key={i}
            href={item.url}
            className="relative w-full rounded-xl overflow-hidden
            sm:flex-[0_0_100%] sm:min-w-0"
          >
            <Image
              src={item.img}
              alt={item.title}
              width={418}
              height={333}
              quality={100}
              decoding="async"
              loading="lazy"
              fetchPriority="low"
              className="w-full h-full"
            />

            <div className="absolute left-0 bottom-0 flex flex-col p-6">
              <p className="text-sm">{item.title}</p>
              <p className="text-5xl font-medium">{item.count}</p>
              <p className="tex-sm">{item.unit}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
