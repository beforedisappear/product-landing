import { socialNetworkList } from "./FooterSocialNetworkList.data";
import Link from "next/link";

interface Props {}

export function FooterSocialNetworkList({}: Props) {
  return (
    <div className="flex gap-2 h-9">
      {socialNetworkList.map((item, i) => (
        <Link
          key={i}
          href={item.url}
          className="grid place-content-center h-9 w-9"
        >
          <i className="">{item.icon}</i>
        </Link>
      ))}
    </div>
  );
}
