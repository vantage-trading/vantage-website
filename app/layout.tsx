import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vantage Trading",
  description:
    "Professional Trading Education, Market Structure Research, and Process-Driven Analysis.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}