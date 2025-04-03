import cn from "clsx";

interface Props {}

export function HeroVideo({}: Props) {
  const className = "absolute top-0 left-0 -z-[1] w-full h-full object-cover";

  const videoProps = {
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    preload: "auto",
  };

  return (
    <>
      <video className={cn(className, "block lg:hidden")} {...videoProps}>
        <source src={"/home/home-desktop.mp4"} />
        <source src={"/home/home-desktop.webm"} />
      </video>
      <video className={cn(className, "hidden lg:block")} {...videoProps}>
        <source src={"/home/home-mobile.mp4"} />
        <source src={"/home/home-mobile.webm"} />
      </video>
    </>
  );
}
