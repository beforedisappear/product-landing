import { getDict } from "@/lib/getDict";

interface Props {}

export async function Metrics({}: Props) {
  const { metrics } = await getDict();

  return (
    <section className="container flex flex-col p-8 gap-8">
      <h2
        className="text-2xl font-semibold
        lg:text-center"
      >
        {metrics.title}
      </h2>

      <div
        className="flex justify-around gap-8
        xl:flex-wrap
        lg:grid lg:grid-cols-2 lg:gap-4"
      >
        {metrics.items.map((el, i) => (
          <StatItem key={i} value={el.count} label={el.text} />
        ))}
      </div>
    </section>
  );
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center mb-2">
      <span className="text-4xl font-bold">{value}</span>
      <span className="text-sm text-gray-400 text-center">{label}</span>
    </div>
  );
}
