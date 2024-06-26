import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import { cn } from "@/lib/utils"

import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "Binmaster",
  description: "Type shit",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({children, }: Readonly<{ children: React.ReactNode;}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
          <head />
          <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
           <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          ><main>{children}</main></ThemeProvider>
          </body>
        </html>
      </>
  );
}
