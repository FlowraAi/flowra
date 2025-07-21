import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";

import { defaultMetadata } from "@/constants/metadata";

import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} bg-gradient-to-br from-[#110820] via-[#160c2c] to-[#160c2c] text-white antialiased`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
