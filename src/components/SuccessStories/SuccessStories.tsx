import { getDict } from "@/lib/getDict";
import { Quote } from "lucide-react";

interface Props {}

export async function SuccessStories({}: Props) {
  const { successStories } = await getDict();

  return (
    <section
      className="container py-8 flex flex-col gap-y-8
      sm:py-4"
    >
      <h2
        className="flex items-center gap-2 mx-auto text-2xl md:text-3xl font-semibold
        text-center
        sm:text-2xl"
      >
        <Quote className="rotate-180" />
        <span>{successStories.title}</span>
      </h2>

      <div className="flex w-full p-12 h-96 border rounded-xl">


        
      </div>
    </section>
  );
}
