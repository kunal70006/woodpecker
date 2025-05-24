import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Primary Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        {/* SEO Meta Tags */}
        <meta
          name="description"
          content="Welcome to Woodpecker Cafe - Enjoy delicious food, specialty coffee, and a warm atmosphere. Perfect for breakfast, lunch, or a relaxing afternoon."
        />
        <meta
          name="keywords"
          content="cafe, coffee shop, restaurant, breakfast, lunch, brunch, specialty coffee, bakery, desserts"
        />
        <meta name="author" content="Woodpecker Cafe" />
        <link rel="canonical" href="https://woodpeckercafe.in/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Woodpecker Cafe - Cozy Cafe & Coffee Shop"
        />
        <meta
          property="og:description"
          content="Welcome to Woodpecker Cafe - Enjoy delicious food, specialty coffee, and a warm atmosphere. Perfect for breakfast, lunch, or a relaxing afternoon."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://woodpeckercafe.in/" />
        <meta property="og:site_name" content="Woodpecker Cafe" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Woodpecker Cafe - Cozy Cafe & Coffee Shop"
        />
        <meta
          name="twitter:description"
          content="Welcome to Woodpecker Cafe - Enjoy delicious food, specialty coffee, and a warm atmosphere. Perfect for breakfast, lunch, or a relaxing afternoon."
        />
        <meta name="twitter:image" content="/logo.png" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo.png" />

        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
        <meta name="generator" content="Next.js" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "Woodpecker Cafe",
              image: "/logo.png",
              description:
                "Welcome to Woodpecker Cafe - Enjoy delicious food, specialty coffee, and a warm atmosphere. Perfect for breakfast, lunch, or a relaxing afternoon.",
              servesCuisine: ["Breakfast", "Lunch", "Coffee", "Desserts"],
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "M-13, Kalkaji",
                addressLocality: "New Delhi",
                addressRegion: "Delhi",
                postalCode: "110019",
                addressCountry: "India",
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "11:30",
                closes: "21:00",
              },
            }),
          }}
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
