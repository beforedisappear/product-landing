import { getDict } from "@/lib/getDict";
import { SuccessFormulasItem } from "./SuccessFormulasItem";

interface Props {}

export async function SuccessFormulas({}: Props) {
  const { successFormulas } = await getDict();

  return (
    <section
      id="formulas"
      className="container grid grid-cols-2 gap-4 p-8 scroll-m-16
      lg:grid-cols-1
      sm:p-4"
    >
      <h2
        className="text-2xl font-semibold col-span-full mb-4
        lg:text-center"
      >
        {successFormulas.title}
      </h2>

      {successFormulas.items.map((item, i) => (
        <SuccessFormulasItem key={i} item={item} />
      ))}
    </section>
  );
}
