import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "iPhone 17 Pro - Apple (IN)",
  description:
    "iPhone 17 Pro. Forged in titanium. Featuring the groundbreaking A19 Pro chip, a customisable Action button, and a more versatile Pro camera system than ever.",
    generator: 'v0.app'
}

export const viewport = {
  themeColor: "#000000",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
