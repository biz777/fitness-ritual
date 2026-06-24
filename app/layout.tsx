import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "fitness-ritual.com — Health & Fitness for Adults 50+",
  description: "Practical, science-backed fitness and nutrition advice for adults over 50. No fads, no extreme diets — just real guidance for staying strong and healthy.",
  keywords: "fitness over 50, nutrition after 50, healthy recipes, exercise for seniors, weight loss over 50",
  verification: {
    google: "nvTfa9_ZaRKrCZXugBpMHdLaznUJYy7hz9gxTZ8xBtE",
  },
  openGraph: {
    title: "fitness-ritual.com — Health & Fitness for Adults 50+",
    description: "Practical fitness and nutrition advice for adults over 50.",
    url: "https://fitness-ritual.com",
    siteName: "fitness-ritual.com",
    locale: "en_US",
    type: "website",
  },
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
