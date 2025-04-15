import { Assessment } from "@/components/Assessment/Assessment";
import { Hero } from "@/components/Hero/Hero";
import { Media } from "@/components/Media/Media";
import { Metrics } from "@/components/Metrics/Metrics";
import { Insights } from "@/components/Insights/Insights";
import { Services } from "@/components/Services/Services";
import { SuccessFormulas } from "@/components/SuccessFormulas/SuccessFormulas";
import { SuccessStories } from "@/components/SuccessStories/SuccessStories";
import { Pricing } from "@/components/Pricing/Pricing";
import { Contacts } from "@/components/Contacts/Contacts";
import { Faq } from "@/components/Faq/Faq";

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
      <Insights />
      <Media />
      <Pricing />
      <Faq />
      <Contacts />
    </>
  );
}
