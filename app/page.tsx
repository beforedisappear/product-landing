import { getDict } from "@/lib/getDict";
import { HomePage } from "@/pages/HomePage/HomePage";

import type { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  const {
    hero: { title, subtitle },
  } = await getDict();

  return {
    title: {
      default: title,
      template: `%s | ${title}`,
    },
    description: subtitle,
  };
};

export default HomePage;
