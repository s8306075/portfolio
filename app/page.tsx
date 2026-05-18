"use client";

import React from 'react';
import { Header } from '@/components/blocks/header';
import { Hero } from '@/components/blocks/hero';
import { Services } from '@/components/blocks/services';
import { Workflow } from '@/components/blocks/workflow';
import { Cases } from '@/components/blocks/cases';
import { CTA } from '@/components/blocks/cta';
import { ScrollProgress } from '@/components/ui/scroll-progress';

export default function Page() {
  return (
    <main className="min-h-screen text-txt-01 font-sans selection:bg-accent-01 selection:text-white relative bg-[#0A0C0F]">
      <ScrollProgress />
      <Header />
      <Hero />
      <Services />
      <Workflow />
      <Cases />
      <CTA />
    </main>
  );
}
