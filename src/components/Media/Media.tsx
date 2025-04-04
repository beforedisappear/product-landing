import { getDict } from "@/lib/getDict";
import Image from "next/image";
import Link from "next/link";

import useEmblaCarousel from "embla-carousel-react";
import { MediaContent } from "./MediaContent";

interface Props {}

export async function Media({}: Props) {
  const { media } = await getDict();

  return (
    <div
      className="container flex flex-col gap-6 py-12
      sm:py-4"
    >
      <h2
        className="text-2xl font-semibold
        lg:text-center"
      >
        {media.title}
      </h2>

      <MediaContent items={media.items} />
    </div>
  );
}
