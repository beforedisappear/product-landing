import { getDict } from "@/lib/getDict";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/ui/Card/Card";
import { PricingBtn } from "./PricingBtn";
import { Badge } from "@/ui/Badge/Badge";

import { packageIcons } from "./Pricing.data";

interface PricingProps {
  title: string;
  price: number;
  popular: 0 | 1;
  description: string;
  buttonText: string;
  benefitList: string[];
}

export const Pricing = async () => {
  const {
    pricing: { title, items },
  } = await getDict();

  return (
    <section
      id="pricing"
      className="container flex flex-col gap-6 py-12 scroll-m-14
      sm:py-4"
    >
      <h2 className="text-2xl font-semibold text-center">{title}</h2>
      {/* <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
        reiciendis.
      </h3> */}

      <div className="grid grid-cols-3 gap-8 lg:grid-cols-2 sm:grid-cols-1">
        {items.map((pricing, packageIndex) => (
          <Card
            key={pricing.title}
            className={cn("shadow-black/10 bg-transparent ", {
              ["shadow-amber-500 shadow-[0_5px_60px_-5px_rgba(0,0,0,0.3)]"]:
                pricing.popular === 1,
            })}
          >
            <CardHeader>
              <CardTitle className="flex item-center justify-between">
                {pricing.title}
                {pricing.popular === 1 ? (
                  <Badge variant="secondary" className="text-sm text-primary">
                    Popular
                  </Badge>
                ) : null}
              </CardTitle>
              <div>
                <span className="text-3xl font-bold">${pricing.price}</span>
                <span className="text-muted-foreground"> /month</span>
              </div>

              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <PricingBtn>{pricing.buttonText}</PricingBtn>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string, index) => (
                  <span key={benefit} className="flex">
                    {packageIcons[packageIndex]?.[index]}{" "}
                    <h3 className="ml-2">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
