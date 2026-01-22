import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const tiktokSans = {
  fontFamily: '"TikTok Sans", sans-serif',
  variable: '--font-tiktok-sans',
};

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "racecar.cc",
  description: "Anti-Cheat Analyst @ Epic Games",
  openGraph: {
    title: "racecar.cc",
    description: "Anti-Cheat Analyst @ Epic Games",
    type: "website",
    siteName: "racecar.cc",
  },
  twitter: {
    card: "summary",
    title: "racecar.cc",
    description: "Anti-Cheat Analyst @ Epic Games",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=TikTok+Sans:opsz,slnt,wdth,wght@12..36,-2,109.5,300..900&display=swap" rel="stylesheet" />
        <style>{`
          .tiktok-sans {
            font-family: "TikTok Sans", sans-serif;
            font-optical-sizing: auto;
            font-weight: 400;
            font-style: normal;
            font-variation-settings:
              "slnt" -2,
              "wdth" 174.3;
          }
          .tiktok-sans-bold {
            font-family: "TikTok Sans", sans-serif;
            font-optical-sizing: auto;
            font-weight: 700;
            font-style: normal;
            font-variation-settings:
              "slnt" -2,
              "wdth" 174.3;
          }
        `}</style>
      </head>
      <body
        className={`${tiktokSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
