import type { Metadata } from "next";
import { Averia_Libre, Averia_Serif_Libre, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const averia = Averia_Libre({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-averia",
  display: "swap",
});

const averiaSerif = Averia_Serif_Libre({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-averia-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://enlauncher.com"),
  title: "Enlauncher - Digital Solutions Company",
  description:
    "Enlauncher helps businesses identify, design and build digital solutions that improve how they operate, serve customers and grow.",
  openGraph: {
    type: "website",
    title: "Enlauncher - Digital Solutions Company",
    description:
      "Enlauncher helps businesses identify, design and build digital solutions that improve how they operate, serve customers and grow.",
    images: ["https://framerusercontent.com/images/K5T54LOqHMkGzJs9Web7zEhL8iU.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enlauncher - Digital Solutions Company",
    description:
      "Enlauncher helps businesses identify, design and build digital solutions that improve how they operate, serve customers and grow.",
    images: ["https://framerusercontent.com/images/K5T54LOqHMkGzJs9Web7zEhL8iU.png"],
  },
  icons: {
    icon: "https://framerusercontent.com/images/fpDZfn0eGQKVhGnHttPPhNNSPVo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${averia.variable} ${averiaSerif.variable} ${inter.variable}`}
    >
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
