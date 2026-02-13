// Metadata
import type { Metadata } from "next";
// Fonts
import { Lora, Source_Sans_3 } from "next/font/google";
// Styling
import "./globals.css";
// Components
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export const metadata: Metadata = {
  title: "NÖ Nämdö Samfällighetsförening",
  description: "Information och uppdateringar gällande aktuella förehavanden",
};

// Fonts
const sourceSans = Source_Sans_3({
  variable: "--font-primary",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-heading",
  subsets: ["latin"],
});

// Layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv-SE">
      <body className={`${sourceSans.variable} ${lora.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
