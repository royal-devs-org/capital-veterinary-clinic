import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Capital Veterinary Clinic – Rawalpindi 24/7 Pet Care | Dr. Usama Naseer",
  description: "Expert veterinary care 24/7 in Rawalpindi, Islamabad & Lahore. Led by Dr. Usama Naseer with 4+ years experience. Emergency services, vaccinations, surgeries & home visits.",
  keywords: [
    "Rawalpindi veterinary clinic",
    "24/7 emergency vet services", 
    "Pet vaccination Westridge 1",
    "At-home veterinary service Islamabad Lahore",
    "Dr Usama Naseer",
    "Capital Veterinary Clinic"
  ],
  authors: [{ name: "Dr. Usama Naseer" }],
  openGraph: {
    title: "Capital Veterinary Clinic – 24/7 Pet Care in Rawalpindi",
    description: "Expert veterinary care by Dr. Usama Naseer. Emergency services, surgeries, vaccinations & home visits in Rawalpindi, Islamabad & Lahore.",
    type: "website",
    locale: "en_US",
    siteName: "Capital Veterinary Clinic",
  },
  twitter: {
    card: "summary_large_image",
    title: "Capital Veterinary Clinic – 24/7 Pet Care",
    description: "Expert veterinary care by Dr. Usama Naseer in Rawalpindi",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "VeterinaryCare",
              "name": "Capital Veterinary Clinic",
              "description": "24/7 veterinary care services in Rawalpindi, Islamabad and Lahore",
              "url": "https://capitalvetclinic.com",
              "telephone": "+92-348-9032106",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Westridge 1, opposite Punjab Cash & Carry",
                "addressLocality": "Rawalpindi Cantt",
                "addressRegion": "Punjab",
                "addressCountry": "Pakistan"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "33.5651",
                "longitude": "73.0169"
              },
              "openingHours": "Mo-Su 11:00-23:00",
              "priceRange": "$$",
              "medicalSpecialty": "Veterinary Medicine",
              "founder": {
                "@type": "Person",
                "name": "Dr. Usama Naseer",
                "jobTitle": "Veterinary Physician and Surgeon"
              }
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} antialiased font-sans`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
