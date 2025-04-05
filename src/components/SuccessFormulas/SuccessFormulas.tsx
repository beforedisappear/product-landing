import { getDict } from "@/lib/getDict";
import Image from "next/image";

interface Props {}

export async function SuccessFormulas({}: Props) {
  const { successFormulas } = await getDict();

  return (
    <section
      id="formulas"
      className="container grid grid-cols-2 gap-4 p-8 scroll-m-16
      md:grid-cols-1
      sm:p-4"
    >
      <h2
        className="text-2xl font-semibold col-span-full mb-4
        lg:text-center"
      >
        {successFormulas.title}
      </h2>

      {successFormulas.items.map(({ title, description, img }, i) => (
        <div
          key={i}
          className="flex flex-col relative
          md:border md:rounded-xl overflow-hidden"
        >
          <div className="flex items-center justify-center w-full h-full">
            <Image
              src={img}
              width={635}
              height={326}
              className="w-full"
              alt={title}
              quality={100}
            />
          </div>

          <div
            className="absolute left-0 bottom-0 flex flex-col p-6 justify-end w-full h-full gap-3
            md:static md:p-3"
          >
            <span
              className="text-lg
              md:text-sm"
            >
              {title}
            </span>

            <span
              className="text-base text-gray-300 
              md:text-xs"
            >
              {description}
            </span>
          </div>
        </div>
      ))}
    </section>
  );
}
