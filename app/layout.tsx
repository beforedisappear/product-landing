import "./globals.css";
import { getDict } from "@/lib/getDict";
import { RootLayout } from "@/pages/RootLayout/RootLayout";

import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
};

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

export default RootLayout;
