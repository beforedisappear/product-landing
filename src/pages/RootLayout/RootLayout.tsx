import { ContextProvider } from "@/providers/ContextProvider";
import { ToastProvider } from "@/providers/ToastProvider";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";

import { fontAtypDisplay } from "@/fonts/atyp";

import type { PropsWithChildren } from "react";

export function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={`${fontAtypDisplay.variable} antialiased`}>
        <ToastProvider />
        <ContextProvider>
          <Header />
          {children}
          <Footer />
        </ContextProvider>
      </body>
    </html>
  );
}
