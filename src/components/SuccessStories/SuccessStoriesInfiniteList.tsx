import { cn } from "@/lib/utils";
import { SuccessStory } from "./SuccessStories.types";
import { SuccessStoriesStory } from "./SuccessStoriesStory";

import s from "./SuccessStories.module.css";

interface Props {
  storyButton: string;
  stories: SuccessStory[];
  type?: "up" | "down";
  className?: string;
}

export function SuccessStoriesInfiniteList(props: Props) {
  const { type = "up", stories, storyButton, className } = props;

  return (
    <ul
      className={cn("flex flex-col w-full gap-4", className, {
        [s.reviews_wrapper_up]: type === "up",
        [s.reviews_wrapper_down]: type === "down",
      })}
    >
      {[...stories, ...stories, ...stories].map((item, index) => (
        <SuccessStoriesStory
          key={index}
          index={index}
          storyButton={storyButton}
          {...item}
        />
      ))}
    </ul>
  );
}
