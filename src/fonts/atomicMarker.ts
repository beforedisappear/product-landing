import localFont from "next/font/local";

export const fontAtomicMarker = localFont({
  src: [
    {
      path: "./AtomicMarker-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-atomic-marker",
  display: "swap",
});
