import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hazim Al-Saqqaf",
  description: "A portfolio website for a software engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
