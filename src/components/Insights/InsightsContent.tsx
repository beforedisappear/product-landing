"use client";

import s from "./Insights.module.css";
import cn from "clsx";
import { ArrowLeft, ArrowRight, CalendarDays } from "lucide-react";

import Link from "next/link";
import type { InsightItem } from "./Insights.types";
import Image from "next/image";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

import { sizes } from "@/tailwind/screens";

interface Props {
  items: InsightItem[];
}

export function InsightsContent({ items }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    active: false,
    breakpoints: { [`(max-width: ${sizes["sm"]})`]: { active: true } },
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div ref={emblaRef} className="overflow-hidden relative">
      <div
        className="grid grid-cols-6 gap-3
        lg:grid-cols-2
        sm:flex"
      >
        {items.map(({ title, url, img, tag, date }, index) => {
          return (
            <Link
              key={index}
              href={url}
              className={cn(
                `relative w-full h-full 
                sm:flex-[0_0_100%] sm:min-w-0 sm:rounded-none`,
                {
                  ["col-start-1 col-end-4 lg:col-auto"]: index === 0,
                  ["col-start-4 col-end-7 lg:col-auto"]: index === 1,
                  ["col-start-1 col-end-3 lg:col-auto"]: index === 2,
                  ["col-start-3 col-end-5 lg:col-auto"]: index === 3,
                  ["col-start-5 col-end-7 lg:col-auto"]: index === 4,
                }
              )}
            >
              <Image
                src={img}
                alt={title}
                width={637}
                height={395}
                className={cn(
                  `w-full h-full object-cover 
                  md:h-[313px]`,
                  {
                    ["max-h-[220px] lg:max-h-[unset]"]:
                      index !== 0 && index !== 1,
                  }
                )}
              />

              <div className="absolute top-0 left-0 flex flex-col justify-end w-full h-full p-6 gap-1">
                <div
                  className="flex items-center gap-2
                  md:justify-between"
                >
                  <span
                    style={{ color: tag.color, background: tag.bgColor }}
                    className="p-2 rounded-lg text-sm font-medium"
                  >
                    {tag.title}
                  </span>
                  <div className="flex gap-2">
                    <CalendarDays />
                    <span>{date}</span>
                  </div>
                </div>

                <span className={cn(s.title, "text-lg")}>{title}</span>
              </div>
            </Link>
          );
        })}
      </div>

      <button
        style={{ transform: "translate(0%, -50%)" }}
        className="hidden absolute top-1/2 left-3 items-center justify-center h-12 w-12 rounded-full bg-[#ffffff1a]
        sm:flex"
        onClick={scrollPrev}
      >
        {<ArrowLeft />}
      </button>
      <button
        style={{ transform: "translate(0%, -50%)" }}
        className="hidden absolute top-1/2 right-3 items-center justify-center h-12 w-12 rounded-full bg-[#ffffff1a]
        sm:flex"
        onClick={scrollNext}
      >
        <ArrowRight />
      </button>
    </div>
  );
}
