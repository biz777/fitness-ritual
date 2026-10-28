import type { Metadata, Viewport } from "next";
import Script from "next/script";
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

// AJOUTÉ : sans cet export, les navigateurs mobiles rendent la page
// en largeur "desktop" (~980px) puis la décalent/zooment — d'où le
// texte coupé sur téléphone, corrigé uniquement en forçant le mode "ordinateur".
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// AJOUTÉ (29/10/2026) : ID de mesure Google Analytics 4
const GA_MEASUREMENT_ID = "G-R952E3JEQM";

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

        {/* AJOUTÉ : Google Analytics 4 (chargé après l'affichage de la page) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
