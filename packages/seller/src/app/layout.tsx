import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthContextWrapper from "./context/AuthContextWrapper";
import AppLayout from "./AppLayout";

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
      <AuthContextWrapper>
        <body className={inter.className}>
          <div className="relative">
            <AppLayout>{children}</AppLayout>
          </div>
        </body>
      </AuthContextWrapper>
    </html>
  );
}
