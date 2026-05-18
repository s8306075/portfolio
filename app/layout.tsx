import type { Metadata } from 'next';
import './globals.css';
import { SITE_CONFIG } from '@/lib/config';

import { Noto_Serif_TC, DM_Mono, Kaisei_Decol, Cormorant_Garamond } from 'next/font/google';

const notoSerifTC = Noto_Serif_TC({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-noto-serif-raw',
});

const dmMono = DM_Mono({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-dm-mono-raw',
});

const kaiseiDecol = Kaisei_Decol({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-kaisei-raw',
});

const editorialItalic = Cormorant_Garamond({
  weight: ['400'],
  style: ['italic'],
  subsets: ['latin'],
  variable: '--font-editorial-raw',
});

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.title,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords,
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(SITE_CONFIG.url),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: SITE_CONFIG.locale,
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.siteName,
    images: [
      {
        url: SITE_CONFIG.ogImage.url,
        width: SITE_CONFIG.ogImage.width,
        height: SITE_CONFIG.ogImage.height,
        alt: SITE_CONFIG.ogImage.alt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
  },
  verification: {
    google: 'uyeJrHM3E1cRy7-l0MDIQKTSo5l6yU9LhQXaiAYo4SM',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_CONFIG.url}/#service`,
        "name": SITE_CONFIG.name,
        "image": `${SITE_CONFIG.url}${SITE_CONFIG.ogImage.url}`,
        "description": SITE_CONFIG.description,
        "url": SITE_CONFIG.url,
        "telephone": "",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Taipei",
          "addressCountry": "TW"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 25.0330,
          "longitude": 121.5654
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "10:00",
          "closes": "19:00"
        },
        "sameAs": [
          SITE_CONFIG.social.instagram,
          SITE_CONFIG.social.facebook,
          SITE_CONFIG.social.threads
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "技術服務清單",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "形象包裝・個人品牌網站設計",
                "description": "將品牌想法轉化為具備個人氣質的高質感形象網頁。"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "系統整理・流程自動化實施",
                "description": "將繁瑣的行政流程自動化，節省重複工時，串接現有工具並客製化 CRM 或管理後台。"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "數據掌控・管理看板設計",
                "description": "透過直覺的圖表與自動計算關鍵數據，一秒掌握營運現狀。"
              }
            }
          ]
        }
      },
      {
        "@type": "Person",
        "@id": `${SITE_CONFIG.url}/#person`,
        "name": SITE_CONFIG.name,
        "url": SITE_CONFIG.url,
        "image": `${SITE_CONFIG.url}${SITE_CONFIG.ogImage.url}`,
        "description": SITE_CONFIG.description,
        "jobTitle": "Tech Strategist",
        "workLocation": {
          "@type": "Place",
          "name": "Taipei, Taiwan"
        }
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_CONFIG.url}/#website`,
        "url": SITE_CONFIG.url,
        "name": SITE_CONFIG.name,
        "description": SITE_CONFIG.description,
        "publisher": {
          "@id": `${SITE_CONFIG.url}/#person`
        },
        "inLanguage": "zh-TW"
      }
    ]
  };

  return (
    <html lang="zh-TW" className={`dark ${notoSerifTC.variable} ${dmMono.variable} ${editorialItalic.variable} ${kaiseiDecol.variable}`}>
       <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased text-white bg-black" suppressHydrationWarning>
        <div style={{ display: 'none' }} aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="fractal-master" x="-20%" y="-20%" width="140%" height="140%">
                <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" />
                <feDisplacementMap in="SourceGraphic" scale="4" />
              </filter>
            </defs>
          </svg>
        </div>
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 mat-05-satin" />
        </div>
        <div className="relative z-10 w-full min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
