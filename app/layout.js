import { Geist, Geist_Mono, Open_Sans } from "next/font/google";

import Header from "@/ui/header/Header";
import Provider from "./storeProvider";

import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-geist-open",
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Daa app",
  description: "Simple app for DAA dev test",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${geistSans.variable} ${geistMono.variable}`}
      >
        <Header />
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
