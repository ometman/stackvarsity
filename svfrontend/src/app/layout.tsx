import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

import localFont from "next/font/local";
import "./globals.css";
import { AuthProvider } from "./context/AuthContext";

const geistSans = localFont({
  src: "assets/fonts/Geist-VariableFont_wght.ttf",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "assets/fonts/GeistMonoVF.woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "StackVarsity - Empowering Developers",
  description: "Learn coding with expert-led courses and hands-on projects.",
  keywords: "coding, development, courses, learn, certificate, react, next.js",  
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
      <AuthProvider> 
        {children} 
      </AuthProvider>
      </body>
    </html>
  );
}
