import { getDict } from "@/lib/getDict";
import { HeroWatchBtn } from "./HeroWatchBtn";
import { VideoModal } from "../VideoModal/VideoModal";

interface Props {}

export async function HeroWatchVideo({}: Props) {
  const {
    hero: { watch },
  } = await getDict();

  return (
    <div
      className="flex flex-col items-center justify-center w-1/3 gap-y-3
      md:hidden"
    >
      <VideoModal>
        <HeroWatchBtn />
      </VideoModal>

      <span className="text-lg">{watch}</span>
    </div>
  );
}
