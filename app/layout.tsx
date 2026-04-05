import type { Metadata } from "next";
import Header from "@/components/header";
import "./globals.css";

import { Lato } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Vincera",
  description: "", // TODO
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        "font-sans",
        "dark",
        "scroll-smooth",
        lato.variable,
      )}
    >
      <body className="flex flex-col min-h-full">
        <Header />
        {children}
      </body>
    </html>
  );
}
