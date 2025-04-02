import { Button } from "@/ui/Button/Button";
import { ArrowUpRight } from "lucide-react";
import { HeroParticipants } from "./HeroParticipants";

import { getDict } from "@/lib/getDict";
import { HeroWatchBtn } from "./HeroWatchBtn";
import { VideoModal } from "../VideoModal/VideoModal";

interface Props {}

export async function HeroInfo({}: Props) {
  const { hero } = await getDict();

  return (
    <div
      className="flex flex-col w-2/3
      lg:w-full 
      md:mb-24"
    >
      <h1
        className="text-5xl font-medium whitespace-pre-line
        lg:whitespace-normal
        md:text-3xl"
      >
        {hero.title}
      </h1>
      <span
        className="text-2xl mb-20
        md:mb-10 md:text-lg"
      >
        {hero.subtitle}
      </span>

      <div
        className="flex items-center gap-4
        md:flex-col md:items-start"
      >
        <div className="flex  flex-wrap items-center gap-4">
          <Button
            size="lg"
            className="w-fit h-12 py-[13px] px-[22px] rounded-xl"
          >
            <span className="font-light">{hero.button}</span>
            <ArrowUpRight />
          </Button>

          <VideoModal>
            <HeroWatchBtn className="hidden rounded-2xl w-11 h-11 md:flex" />
          </VideoModal>
        </div>

        <HeroParticipants />
      </div>
    </div>
  );
}
