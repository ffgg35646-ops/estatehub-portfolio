import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EstateHub | Find Your Dream Property",
  description:
    "EstateHub is a modern real estate platform for buying, selling and renting properties worldwide.",
  keywords: [
    "Real Estate",
    "Properties",
    "Apartments",
    "Villas",
    "Luxury Homes",
    "EstateHub",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
