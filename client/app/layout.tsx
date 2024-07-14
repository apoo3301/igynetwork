import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/common/navbar";
import Sidebar from "@/components/common/sidebar";
import "./globals.css";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "igy network",
  description: "admin dasboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
        {children}
        </Providers>
        </body>
    </html>
  );
}
