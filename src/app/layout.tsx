import type { Metadata } from "next";
import { Lora, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";

export const metadata: Metadata = {
  title: "NÖ Nämdö Samfällighetsförening",
  description: "Information och uppdateringar gällande aktuella förehavanden",
};

const sourceSans = Source_Sans_3({
  variable: "--font-primary",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-heading",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body className={`${sourceSans.variable} ${lora.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
