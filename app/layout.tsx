import Cursor from "@/components/cursor/cursor";
import GrainEffect from "@/components/visualEffects/grain-effect";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Bricolage_Grotesque, Oswald } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

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


export const metadata: Metadata = {
  title: "Shivam Gupta - Java Developer | Software Engineer",
  description: "Official portfolio of Shivam Gupta, showcasing skills in Java, Spring Boot, AWS, and backend development. Includes project highlights, certifications, and work experience.",
  applicationName: "portfolio",
  keywords:
    "Shivam Gupta, Java developer, Spring Boot, backend developer, AWS, REST APIs, MySQL, HmacSHA256, Redis, Spring Security, software engineer, payment system, backend developer portfolio",
  robots: "index, follow",
  openGraph: {
    title: "Shivam Gupta | Java Developer & Software Engineer",
    description:
      "Explore Shivam Gupta's official portfolio showcasing expertise in Java, Spring Boot, AWS, backend development, and payment systems.",
    images: "https://www.shivamgupta.com/images/profile.jpg",
    url: "https://www.shivamgupta.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ShivamGupta",
    title: "Shivam Gupta | Java Developer & Software Engineer",
    description:
      "Explore Shivam Gupta's official portfolio showcasing expertise in Java, Spring Boot, AWS, backend development, and payment systems.",
    images: "https://www.shivamgupta.com/images/profile.jpg", // Replace with your actual image URL
  },
  themeColor: "#000000",
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
        <GrainEffect />
        <Cursor color="#fff" />
        {children}
      </body>
    </html>
  );
}
