import { getDict } from "@/lib/getDict";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/ui/Accordion/Accordion";

interface Props {}

export async function Faq({}: Props) {
  const { faq } = await getDict();

  return (
    <section
      id="faq"
      className="container flex flex-col gap-6 py-12 scroll-m-14"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-6">
          <h2 className="text-2xl font-semibold scroll-m-14 text-center">
            {faq.title}
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            {faq.subtitle}
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faq.items.map((faq, i) => (
              <div key={i}>
                <AccordionItem
                  value={`item-${i}`}
                  className="border-b border-border/40 py-2"
                >
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
