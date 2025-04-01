import { HeroInfo } from "./HeroInfo";
import { HeroVideo } from "./HeroVideo";
import { HeroWatchVideo } from "./HeroWatchVideo";

interface Props {}

export function Hero({}: Props) {
  return (
    <section
      className="flex items-center w-full min-h-screen relative
      md:items-end"
    >
      <HeroVideo />

      <div
        className="container flex z-10
        lg:flex-col"
      >
        <HeroInfo />
        <HeroWatchVideo />
      </div>
    </section>
  );
}
