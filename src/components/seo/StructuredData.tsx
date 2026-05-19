import Head from 'next/head';

interface StructuredDataProps {
  data: any;
}

export const StructuredData = ({ data }: StructuredDataProps) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export const LocalBusinessSchema = () => {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "PergoClean",
    "image": "https://www.pergoclean.com.tr/logo.webp",
    "@id": "https://www.pergoclean.com.tr/#business",
    "url": "https://www.pergoclean.com.tr",
    "telephone": "+905367731404",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Timko İş Merkezi, Macun Mahallesi 177. Cadde V8 Kat 1",
      "addressLocality": "Yenimahalle",
      "addressRegion": "Ankara",
      "postalCode": "06370",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 39.9750,
      "longitude": 32.7750
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "19:00"
    },
    "sameAs": [
      "https://www.instagram.com/pergoclean.tr",
      "https://www.youtube.com/@PergoClean"
    ]
  };
  return <StructuredData data={data} />;
};

export const FAQSchema = ({ faqs }: { faqs: { q: string, a: string }[] }) => {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };
  return <StructuredData data={data} />;
};

export const ServiceSchema = ({ name, description }: { name: string, description: string }) => {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "PergoClean"
    },
    "areaServed": [
      { "@type": "City", "name": "Ankara" },
      { "@type": "City", "name": "Antalya" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "PergoClean Hizmet Katalogu",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pergola Restorasyonu"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "BioClimatic Bakimi"
          }
        }
      ]
    }
  };
  return <StructuredData data={data} />;
};
