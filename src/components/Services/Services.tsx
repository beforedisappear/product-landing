import { getDict } from "@/lib/getDict";
import { ServicesCarousel } from "./ServicesCarousel";

interface Props {}

export async function Services({}: Props) {
  const { services } = await getDict();

  return (
    <div id="services" className="container flex flex-col gap-4 p-8">
      <h2
        className="text-2xl md:text-3xl font-semibold
        lg:text-center
        sm:text-2xl"
      >
        {services.title}
      </h2>

      <ServicesCarousel />
    </div>
  );
}
