import type { Metadata } from "next";
import ThemeProvider from '@/components/theme-provider';
import { inter } from '@/styles/fonts';
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "App",
  description: "Nextjs app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable}`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
