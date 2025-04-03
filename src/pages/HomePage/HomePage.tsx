import { Hero } from "@/components/Hero/Hero";
import { Metrics } from "@/components/Metrics/Metrics";
import { Services } from "@/components/Services/Services";
import { SuccessFormulas } from "@/components/SuccessFormulas/SuccessFormulas";

interface Props {}

export function HomePage({}: Props) {
  return (
    <>
      <Hero />
      <Metrics />
      {/* <Services /> */}
      <SuccessFormulas />
    </>
  );
}
