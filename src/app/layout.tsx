import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stacklin | Premium Software Design & Development Agency",
  description: "We design and engineer world-class websites, SaaS platforms, custom software, and digital experiences for ambitious brands.",
  keywords: "software agency, web design, web development, custom software, SaaS products, Next.js, React, UI/UX design, premium digital agency",
  openGraph: {
    title: "Stacklin | Premium Software Design & Development Agency",
    description: "We craft extraordinary digital products and platforms that move businesses forward.",
    type: "website",
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
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="bg-background text-white min-h-full font-sans antialiased overflow-x-hidden selection:bg-primary/20 selection:text-primary">
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
