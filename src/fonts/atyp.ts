import localFont from "next/font/local";

export const fontAtypDisplay = localFont({
  src: [
    {
      path: "./AtypDisplay-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./AtypDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./AtypDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./AtypDisplay-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./AtypDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-atyp-display",
  display: "swap",
});
