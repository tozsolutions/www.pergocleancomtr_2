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
    "image": "https://www.pergoclean.com.tr/assets/logo.png",
    "@id": "https://www.pergoclean.com.tr",
    "url": "https://www.pergoclean.com.tr",
    "telephone": "+905367731404",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ankara, Türkiye",
      "addressLocality": "Ankara",
      "postalCode": "06000",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 39.9334,
      "longitude": 32.8597
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "19:00"
    },
    "sameAs": [
      "https://www.instagram.com/pergoclean",
      "https://www.facebook.com/pergoclean"
    ]
  };
  return <StructuredData data={data} />;
};
