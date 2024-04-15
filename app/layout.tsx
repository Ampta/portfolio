import type { Metadata } from "next";
import { Bricolage_Grotesque, Oswald } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import GrainEffect from "@/components/visualEffects/grain-effect";
import Cursor from "@/components/cursor/cursor";

//Fonts
const MainFont = Bricolage_Grotesque({ subsets: ["latin"] });
const OswaldFont = Oswald({ subsets: ["latin"], variable: "--font-oswald" });
const PixelFont = localFont({
  src: "../public/assets/fonts/pixel-font7.regular.ttf",
  variable: "--font-pixel",
});

const RalewayFont = localFont({
  src: "../public/assets/fonts/Raleway-Regular.ttf",
  variable: "--font-raleway",
});


//Metadata
export const metadata: Metadata = {
  title: "Shivam Gupta",
  description: "Shivam Gupta official portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          MainFont.className,
          OswaldFont.variable,
          PixelFont.variable,
          RalewayFont.variable
        )}
      >
        <GrainEffect/>
        <Cursor color="#fff"/>
        {children}
      </body>
    </html>
  );
}
