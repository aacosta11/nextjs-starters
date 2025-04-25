import "@/styles/globals.css";
import type { Metadata } from "next";
import { geistSans, geistMono } from "@/styles/fonts";

export const metadata: Metadata = {
  title: "App",
  description: "Next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
