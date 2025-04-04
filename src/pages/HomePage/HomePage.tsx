import { Assessment } from "@/components/Assessment/Assessment";
import { Hero } from "@/components/Hero/Hero";
import { Media } from "@/components/Media/Media";
import { Metrics } from "@/components/Metrics/Metrics";
import { Services } from "@/components/Services/Services";
import { SuccessFormulas } from "@/components/SuccessFormulas/SuccessFormulas";
import { SuccessStories } from "@/components/SuccessStories/SuccessStories";

interface Props {}

export function HomePage({}: Props) {
  return (
    <>
      <Hero />
      <Metrics />
      <Services />
      <Assessment />
      <SuccessFormulas />
      <SuccessStories />
      <Media />
    </>
  );
}
