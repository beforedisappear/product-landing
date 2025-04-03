import { getDict } from "@/lib/getDict";
import { Avatar, AvatarFallback, AvatarImage } from "@/ui/Avatar/Avatar";

interface Props {}

const participantList = [
  { img: "/avatars/avatar_1.svg" },
  { img: "/avatars/avatar_2.svg" },
  { img: "/avatars/avatar_3.svg" },
  { img: "/avatars/avatar_4.svg" },
];

export async function HeroParticipants({}: Props) {
  const {
    hero: { participantsCounter },
  } = await getDict();

  return (
    <div className="flex items-center gap-x-3">
      <div className="flex">
        {participantList.map(({ img }, i) => (
          <Avatar key={i} className="w-8 h-8 -mr-3 last:m-0">
            <AvatarImage
              src={img}
              alt={`participant №${i}`}
              className="w-8 h-8"
            />
            <AvatarFallback>{i + 1}</AvatarFallback>
          </Avatar>
        ))}
      </div>

      <span>{participantsCounter}</span>
    </div>
  );
}
