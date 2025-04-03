import Image from "next/image";

import { ServicesSlide } from "./Services.types";
import { Button } from "@/ui/Button/Button";
import { fontAtomicMarker } from "@/fonts/atomicMarker";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface Props extends ServicesSlide {
  slideBtn: string;
  onBtnClick: VoidFunction;
}

export function ServicesCarouselSlide(props: Props) {
  const {
    title,
    titleColor,
    subtitle,
    img,
    thumbImg,
    description,
    slideBtn,
    onBtnClick,
  } = props;

  return (
    <div
      className="flex flex-[0_0_100%] gap-8 relative w-full h-[400px] min-w-0 mr-[15px] 
      lg:gap-4 
      last:mr-0"
    >
      <div
        className="rounded-xl overflow-hidden w-1/2
        lg:w-full lg:max-w-[300px]
        md:max-w-full md:rounded-none"
      >
        <Image
          src={thumbImg}
          alt={title}
          width={635}
          height={400}
          quality={100}
          className="w-full h-full"
        />
      </div>

      <div
        className="flex flex-col justify-center gap-8 w-1/2
        md:absolute md:p-3 md:w-full md:justify-end md:h-full"
      >
        <h3
          className="text-4-5xl font-semibold
          md:text-3xl"
          style={{ color: titleColor }}
        >
          {title}
        </h3>
        <span
          className={cn(
            fontAtomicMarker.className,
            "text-4xl -mt-[46px] md:text-2xl md:-mt-[48px]"
          )}
        >
          {subtitle}
        </span>

        <p>{description}</p>

        <Button
          className="h-[50px] w-fit rounded-xl md:w-full"
          onClick={onBtnClick}
        >
          <span className="text-sm">{slideBtn}</span>
          <ArrowUpRight />
        </Button>
      </div>
    </div>
  );
}
