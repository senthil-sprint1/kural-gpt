import type { Metadata } from "next";

import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "@/src/components/Header";
import "./App.scss";
import { Analytics } from "@vercel/analytics/react";

import { Space_Grotesk } from "next/font/google";
const inter = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kural GPT",
  description: "Where Thirukural meets Generative AI",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <Header />
          <div className="container">{children}</div>
          <Analytics />
        </main>
      </body>
    </html>
  );
}
