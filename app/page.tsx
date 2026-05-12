"use client";

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from '@/components/blocks/header';
import { Hero } from '@/components/blocks/hero';
import { Services } from '@/components/blocks/services';
import { Workflow } from '@/components/blocks/workflow';
import { NavigationAnchor } from '@/components/blocks/navigation-anchor';
import { Cases } from '@/components/blocks/cases';
import { CTA } from '@/components/blocks/cta';
import { SITE_CONFIG } from '@/lib/config';

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": SITE_CONFIG.title,
    "url": SITE_CONFIG.url,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${SITE_CONFIG.url}/?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <main className="min-h-screen bg-bg-01 text-txt-01 font-sans selection:bg-accent-01 selection:text-white relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      
      <Hero />

      <div className="cs-02-section-cut">
        <Services />
      </div>

      <Workflow />
      <Cases />
      
      <div className="cs-02-section-cut">
        <CTA />
      </div>
    </main>
  );
}
