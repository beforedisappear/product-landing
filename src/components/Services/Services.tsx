import { getDict } from "@/lib/getDict";
import { ServicesCarouselWithThumbs } from "./ServicesCarousel";

interface Props {}

export async function Services({}: Props) {
  const { services } = await getDict();

  return (
    <div
      id="services"
      className="container flex flex-col gap-8 p-8 scroll-m-16
      md:px-0"
    >
      <h2
        className="text-2xl font-semibold
        lg:text-center"
      >
        {services.title}
      </h2>

      <ServicesCarouselWithThumbs
        slides={services.slides}
        slideBtn={services.slideBtn}
      />
    </div>
  );
}
