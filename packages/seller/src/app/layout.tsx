import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@ui/organisms/Header";
import Footer from "@ui/organisms/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marketplace: For Sellers",
  description: "Sell your items!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
