import type {Metadata} from 'next';
import { Noto_Serif_TC, Noto_Sans_TC, DM_Mono, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import { SITE_CONFIG } from '@/lib/config';

const notoSerifTC = Noto_Serif_TC({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-noto-serif',
});

const notoSansTC = Noto_Sans_TC({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-noto-sans',
});

const dmMono = DM_Mono({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-dm-mono',
});

const editorialItalic = Cormorant_Garamond({
  weight: ['400'],
  style: ['italic'],
  subsets: ['latin'],
  variable: '--font-editorial',
});

export const metadata: Metadata = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords,
  authors: [{ name: SITE_CONFIG.name }],
  metadataBase: new URL(SITE_CONFIG.url),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
      },
    ],
    locale: 'zh_TW',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
  },
  verification: {
    google: 'GSC_VERIFICATION_PLACEHOLDER',
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
    "@type": "Service",
    "name": SITE_CONFIG.title,
    "description": SITE_CONFIG.description,
    "provider": {
      "@type": "Person",
      "name": SITE_CONFIG.name,
      "jobTitle": "Tech Strategist",
      "url": SITE_CONFIG.url
    },
    "areaServed": "Taiwan",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "技術諮詢服務",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "系統架構優化與整合",
            "description": "解決 Excel 數據混亂、串接破碎系統，建立高效運行後台。"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "自動化流程設計",
            "description": "封裝重複性行政作業，利用技術手段大幅降低人工出錯率。"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "數據監控與決策看板",
            "description": "將生硬數據轉譯為直覺視覺標，協助創作者做出理性商業決策。"
          }
        }
      ]
    },
    "url": SITE_CONFIG.url,
    "sameAs": [
      SITE_CONFIG.social.instagram,
      SITE_CONFIG.social.threads,
      SITE_CONFIG.social.facebook
    ]
  };

  return (
    <html lang="zh-TW" className={`dark font-sans ${notoSerifTC.variable} ${notoSansTC.variable} ${dmMono.variable} ${editorialItalic.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased selection:bg-accent-01 selection:text-white" suppressHydrationWarning>
        <div style={{ display: 'none' }} aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="noise-master" x="-20%" y="-20%" width="140%" height="140%">
                <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch" />
              </filter>
              <filter id="fractal-master" x="-20%" y="-20%" width="140%" height="140%">
                <feTurbulence type="turbulence" baseFrequency="0.65" numOctaves="4" result="turbulence" />
                <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="4" xChannelSelector="R" yChannelSelector="G" />
              </filter>
            </defs>
          </svg>
        </div>
        <div className="fixed inset-0 pointer-events-none z-0 layer-an-01">
          <div className="absolute inset-0 noise-layer"></div>
        </div>
        <div className="relative z-10 w-full min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
