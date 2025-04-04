import { getDict } from "@/lib/getDict";
import { Button } from "@/ui/Button/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/ui/Card/Card";
import { Check } from "lucide-react";
import { PricingBtn } from "./PricingBtn";

interface PricingProps {
  title: string;
  price: number;
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
      className="container flex flex-col gap-6 py-12
      sm:py-4"
    >
      <h2 className="text-2xl font-semibold text-center">{title}</h2>
      {/* <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
        reiciendis.
      </h3> */}

      <div className="grid grid-cols-3 gap-8 lg:grid-cols-1">
        {items.map((pricing) => (
          <Card
            key={pricing.title}
            className="drop-shadow-xl shadow-black/10 dark:shadow-white/10 bg-transparent"
          >
            <CardHeader>
              <CardTitle className="flex item-center justify-between">
                {pricing.title}
                {/* {pricing.popular === PopularPlanType.YES ? (
                  <Badge variant="secondary" className="text-sm text-primary">
                    Most popular
                  </Badge>
                ) : null} */}
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
                {pricing.benefitList.map((benefit: string) => (
                  <span key={benefit} className="flex">
                    <Check className="text-green-500" />{" "}
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
