import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
  image?: string;
}

export function SEO({
  title = 'Champatala High School',
  description = 'Champatala High School is a government-sponsored co-educational higher secondary institution established in 1947, dedicated to academic excellence in Purba Medinipur, West Bengal.',
  keywords = 'Champatala High School, Champatala School, High School in Contai, School in Purba Medinipur, Government Sponsored School in West Bengal, Higher Secondary School',
  url = 'https://champatalahighschool.in', // Using a placeholder domain
  image = 'https://i.ibb.co/Z1h5mv0B/unnamed.webp',
}: SEOProps) {
  const fullTitle = title === 'Champatala High School' ? title : `${title} | Champatala High School`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Canonical */}
      <link rel="canonical" href={url} />
      
      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "School",
          "name": "Champatala High School",
          "url": url,
          "logo": "https://i.ibb.co/TxDpdYX9/Screenshot-20260619-115704.png",
          "image": image,
          "description": description,
          "foundingDate": "1947",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "P.O. Champatala, Block - Deshapran, Sub-Division - Contai",
            "addressLocality": "Purba Medinipur",
            "addressRegion": "West Bengal",
            "postalCode": "721442",
            "addressCountry": "IN"
          },
          "telephone": "+91 9564069896",
          "email": "chschampatala@gmail.com",
          "sameAs": [
            "https://www.facebook.com/share/1ECp41ZPCV/",
            "https://youtube.com/@champatalahighschool5930"
          ]
        })}
      </script>
    </Helmet>
  );
}
