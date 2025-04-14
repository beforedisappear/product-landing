import Image from "next/image";
import { SuccessFormulaItem } from "./SuccessFormulas.types";

import { cn } from "@/lib/utils";

interface Props {
  item: SuccessFormulaItem;
}

export function SuccessFormulasItem({ item }: Props) {
  return (
    <div
      className="flex flex-col relative
      md:border md:rounded-xl overflow-hidden"
    >
      <div className="flex items-center justify-center w-full h-full">
        <Image
          src={item.img}
          width={635}
          height={326}
          className="w-full"
          alt={item.title}
          quality={100}
        />
      </div>

      <div
        className="absolute left-0 bottom-0 flex flex-col p-6 justify-end w-full h-full gap-2
        md:static md:p-3"
      >
        <span
          className="text-lg
               md:text-sm"
        >
          {item.title}
        </span>

        <span
          className={cn(
            `text-base text-gray-600 bg-gray-300 opacity-80 px-1
            md:text-xs md:bg-transparent md:text-gray-300`
          )}
        >
          {item.description}
        </span>
      </div>
    </div>
  );
}
