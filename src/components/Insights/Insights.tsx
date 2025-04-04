import { getDict } from "@/lib/getDict";
import { InsightsContent } from "./InsightsContent";

interface Props {}

export async function Insights({}: Props) {
  const {
    insights: { title, items },
  } = await getDict();

  return (
    <section
      className="container flex flex-col gap-6 py-12
      sm:py-4"
    >
      <h2
        className="text-2xl font-semibold
          lg:text-center"
      >
        {title}
      </h2>

      <InsightsContent items={items} />
    </section>
  );
}
