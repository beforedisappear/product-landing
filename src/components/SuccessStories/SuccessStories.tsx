import { getDict } from "@/lib/getDict";
import { Quote } from "lucide-react";
import { SuccessStoriesInfiniteList } from "./SuccessStoriesInfiniteList";

interface Props {}

export async function SuccessStories({}: Props) {
  const {
    successStories: { items, title, storyButton },
  } = await getDict();

  const quarter = Math.floor(items.length / 4);

  const storiesPart1 = items.slice(0, quarter);
  const storiesPart2 = items.slice(quarter, quarter * 2);
  const storiesPart3 = items.slice(quarter * 2, quarter * 3);
  const storiesPart4 = items.slice(quarter * 3);

  return (
    <section
      id="stories"
      className="container py-8 flex flex-col gap-y-8 scroll-m-16
      sm:py-4"
    >
      <h2
        className="flex items-center gap-2 mx-auto text-2xl font-semibold
        text-center"
      >
        <Quote className="rotate-180" />
        <span>{title}</span>
      </h2>

      <div
        className="flex w-full p-12 border rounded-xl h-[790px]
        md:p-6"
      >
        <div className="flex gap-x-3 relative h-full w-full overflow-hidden">
          <SuccessStoriesInfiniteList
            stories={storiesPart1}
            storyButton={storyButton}
          />
          <SuccessStoriesInfiniteList
            className="md:hidden"
            stories={storiesPart2}
            storyButton={storyButton}
            type="down"
          />
          <SuccessStoriesInfiniteList
            className="lg:hidden"
            stories={storiesPart3}
            storyButton={storyButton}
          />
          <SuccessStoriesInfiniteList
            className="xxl:hidden"
            stories={storiesPart4}
            storyButton={storyButton}
            type="down"
          />
        </div>
      </div>
    </section>
  );
}
