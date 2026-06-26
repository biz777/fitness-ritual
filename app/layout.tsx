import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fitness-ritual.com"),
  title: "fitness-ritual.com — Health & Fitness for Adults 50+",
  description: "Practical, science-backed fitness and nutrition advice for adults over 50. No fads, no extreme diets — just real guidance for staying strong and healthy.",
  keywords: "fitness over 50, nutrition after 50, healthy recipes, exercise for seniors, weight loss over 50",
  verification: {
    google: "nvTfa9_ZaRKrCZXugBpMHdLaznUJYy7hz9gxTZ8xBtE",
  },
  alternates: {
    canonical: "https://www.fitness-ritual.com",
  },
  openGraph: {
    title: "fitness-ritual.com — Health & Fitness for Adults 50+",
    description: "Practical fitness and nutrition advice for adults over 50.",
    url: "https://www.fitness-ritual.com",
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Fitness Ritual",
              legalName: "CLICKANDDEALONLINE LLC",
              url: "https://www.fitness-ritual.com",
              description:
                "Fitness Ritual is a trusted health and wellness resource for adults 50+, delivering practical fitness routines, balanced nutrition guidance, and wholesome recipes to help you age with strength and vitality.",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer support",
                url: "https://www.fitness-ritual.com/contact",
              },
              sameAs: [
                // "https://www.facebook.com/TON_PAGE",
                // "https://www.pinterest.com/TON_COMPTE",
                // "https://www.youtube.com/@TON_CHAINE",
                // "https://www.instagram.com/TON_COMPTE",
              ],
            }),
          }}
        />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
