import Image from "next/image";

import type { ServicesSlide } from "./Services.types";
import { cn } from "@/lib/utils";

interface Props extends ServicesSlide {
  selected: boolean;
  index: number;
  onClick: () => void;
}

export const ServicesCarouselThumb = (props: Props) => {
  const { title, titleColor, selected, index, onClick, thumbImg } = props;

  return (
    <div
      onClick={onClick}
      className="relative flex flex-[0_0_250px] w-[250px] h-[100px] mb-3 md:h-20 min-w-0 mr-[10px] 
      md:flex-[0_0_140px]
      last:mr-0"
    >
      <Image
        src={thumbImg}
        alt=""
        width={250}
        height={100}
        className="rounded-lg w-full h-full"
      />

      <div
        className="absolute top-0 flex justify-center items-center p-2 w-full h-full min-w-[250px]
        md:min-w-[140px]"
      >
        <span
          className="text-center text-xl font-bold
          md:text-sm"
          style={{ color: titleColor }}
        >
          {title}
        </span>
      </div>

      <span
        className={cn(
          "absolute -bottom-3 h-0.5 w-full bg-gray-500 rounded-full",
          { ["bg-white"]: selected }
        )}
      ></span>
    </div>
  );
};
