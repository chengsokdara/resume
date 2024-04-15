import "@/app/globals.css";
import type { Metadata } from "next";
import {
  Montserrat,
  Montserrat_Alternates,
  Montserrat_Subrayada,
} from "next/font/google";

const montserrat = Montserrat({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const montserratSubrayada = Montserrat_Subrayada({
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat-subrayada",
});

export const metadata: Metadata = {
  title: "Sokdara Cheng",
  description: "Sokdara Cheng's Resume",
  metadataBase: new URL("https://chengsokdara.github.io"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`flex justify-center ${montserrat.variable} ${montserratSubrayada.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
