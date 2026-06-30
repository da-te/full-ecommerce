import type { Metadata } from "next";
import clsx from "clsx";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Full-Ecommerce",
  description: "Full-Ecommerce utilizando a versão 16",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={clsx(`${geistSans.variable} ${geistMono.variable} h-full antialiased bg-slate-700 `)}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="h-screen p-16">
          {children}
        </main>
      </body>
    </html>
  );
}
