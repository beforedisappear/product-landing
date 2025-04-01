import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { fontAtypDisplay } from "@/fonts/atyp";
import { Geist, Geist_Mono } from "next/font/google";

import type { PropsWithChildren } from "react";

export function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={`${fontAtypDisplay.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
