import Link from "next/link";
import type { SuccessStory } from "./SuccessStories.types";
import { Avatar, AvatarFallback } from "@/ui/Avatar/Avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

import s from "./SuccessStories.module.css";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/ui/Button/Button";

interface Props extends SuccessStory {
  index: number;
  storyButton: string;
}

export function SuccessStoriesStory(props: Props) {
  const { index, name, date, text, url, storyButton } = props;

  return (
    <li className="flex flex-col p-6 gap-y-4 rounded-xl border">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10">
            <AvatarImage
              src={`/memojis/memoji-${index}.webp`}
              alt={`participant №${index}`}
              className="w-10 h-10"
            />
            <AvatarFallback>{index + 1}</AvatarFallback>
          </Avatar>

          <span>{name}</span>
        </div>

        <span>{date}</span>
      </div>

      <p className={cn(s.text, "text-gray-500 text-base")}>{text}</p>

      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(buttonVariants({ variant: "link" }), "w-fit p-0")}
      >
        {storyButton}
      </Link>
    </li>
  );
}
