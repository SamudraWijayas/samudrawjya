import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Samudra Wijaya",
    template: "%s - Portofolio",
  },
  description: "Portofolio Samodra Wijaya Samdoria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-gradient-to-r from-[#070417] via-[#190c34] to-[#070417]`} >{children}</body>
    </html>
  );
}
