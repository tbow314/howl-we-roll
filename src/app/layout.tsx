import type { Metadata } from "next";
import { Playfair_Display, Inter, Lato } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://howlweroll.com"),
  title: {
    default: "Howl We Roll | Mobile Dog & Cat Grooming Canonsburg PA",
    template: "%s | Howl We Roll Mobile Pet Grooming",
  },
  description:
    "Professional mobile dog and cat grooming in Canonsburg, Cecil Township & Pittsburgh suburbs. 20+ years experience. Christine comes to you! Book your stress-free grooming appointment today. 724-898-1988",
  keywords: [
    "mobile dog grooming Canonsburg PA",
    "mobile pet grooming Cecil Township",
    "mobile dog groomer Pittsburgh",
    "mobile cat grooming near me",
    "cat grooming Canonsburg PA",
    "pet grooming van near me",
    "dog grooming at home Pittsburgh",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Howl We Roll Mobile Pet Grooming",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://howlweroll.com",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "PetGroomingService"],
  name: "Howl We Roll",
  description:
    "Professional mobile dog and cat grooming service with 20+ years experience in Canonsburg, Cecil Township, and Pittsburgh suburbs. We come to you — stress-free grooming in our fully equipped van.",
  url: "https://howlweroll.com",
  telephone: "724-898-1988",
  email: "christine@howlweroll.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "33 Vertical Dr",
    addressLocality: "Canonsburg",
    addressRegion: "PA",
    postalCode: "15317",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.2626,
    longitude: -80.1865,
  },
  areaServed: [
    { "@type": "City", name: "Canonsburg, PA" },
    { "@type": "City", name: "Cecil Township, PA" },
    { "@type": "City", name: "Washington, PA" },
    { "@type": "City", name: "McMurray, PA" },
    { "@type": "City", name: "Southpointe, PA" },
    { "@type": "City", name: "Peters Township, PA" },
    { "@type": "City", name: "Bridgeville, PA" },
    { "@type": "City", name: "Upper St. Clair, PA" },
  ],
  serviceType: [
    "Mobile Dog Grooming",
    "Mobile Cat Grooming",
    "Mobile Pet Grooming",
    "Dog Bathing",
    "Cat Bathing",
    "Pet Haircut",
    "Nail Trimming",
  ],
  priceRange: "$$",
  image: "https://howlweroll.com/og-image.jpg",
  sameAs: [
    "https://facebook.com/howlweroll",
    "https://instagram.com/howlweroll",
  ],
  founder: {
    "@type": "Person",
    name: "Christine Dunn",
    jobTitle: "Certified Pet Groomer",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "15:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${lato.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
