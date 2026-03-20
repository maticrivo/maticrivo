import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Matias Crivolotti — Engineering Leader",
  description:
    "Engineering Leader with 15+ years building scalable systems at PayPal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
