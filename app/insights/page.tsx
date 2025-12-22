
'use client';

import Link from "next/link";
import FadeIn from '@/components/FadeIn';
import { INSIGHTS, PROFILE } from '@/constants';
import { FileText, ArrowRight, ShieldAlert, Target, Zap, Activity } from 'lucide-react';
import { useEffect } from 'react';

const Insights = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const parseDate = (dateStr: string) => {
    const [year, month, day] = dateStr.split('.').map(Number);
    return new Date(year, month - 1, day);
  };

  const visibleInsights = INSIGHTS.filter(insight => {
    const pubDate = parseDate(insight.publishDate);
    return pubDate <= today;
  }).sort((a, b) => {
    return parseDate(b.publishDate).getTime() - parseDate(a.publishDate).getTime();
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": `${PROFILE.name} - 實務分享與需求邏輯收斂筆記`,
    "description": "收錄關於需求收斂、風險評估與全端架構落地的實戰筆記。從專業工程師視角剖析商業邏輯轉化過程中的決策基準。",
    "url": `${PROFILE.website}/insights`,
    "author": {
      "@type": "Person",
      "name": PROFILE.name
    }
  };

  useEffect(() => {
    document.title = `實務分享與開發觀點 | ${PROFILE.name} - 全端系統開發`;
  }, []);

  return (
    <div className="pt-32 min-h-screen bg-beige">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Hero: Systematic & Benchmarked */}
      <section className="px-6 mb-12" aria-label="Insights Header">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn variant="up">
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 tracking-tight leading-tight">
              系統化思維與邏輯收斂：<br />
              <span className="text-sunfire">開發實務中的風險與落地指標</span>
            </h1>
            <p className="text-lg text-smoke max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
              在商業邏輯轉化為技術架構的過程中，決策的準確度決定了專案的長期健康。<br className="hidden md:block" />
              此處彙整需求對焦、風險識別與架構演進的觀測紀錄，作為專案落地的技術基準。
            </p>

            {/* Value Section */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-[10px] font-bold text-stone-500 uppercase tracking-widest" aria-label="Core Methodology">
               <div className="flex items-center gap-2 px-4 py-2 bg-white/60 rounded-full border border-taupe/40 shadow-sm">
                  < ShieldAlert className="w-3 h-3 text-sunfire/60" />
                  <span>預見潛在風險</span>
               </div>
               <div className="flex items-center gap-2 px-4 py-2 bg-white/60 rounded-full border border-taupe/40 shadow-sm">
                  <Target className="w-3 h-3 text-leaf/60" />
                  <span>釐清核心需求</span>
               </div>
               <div className="flex items-center gap-2 px-4 py-2 bg-white/60 rounded-full border border-taupe/40 shadow-sm">
                  <Zap className="w-3 h-3 text-navy/40" />
                  <span>共築長遠架構</span>
               </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. Main Article Grid */}
      <section className="px-6 pb-24" aria-label="Articles List">
        <div className="max-w-7xl mx-auto">
          
          {/* Transition Sub-header */}
          <div className="flex flex-col mb-10">
             <FadeIn variant="fade" delay={200}>
                <p className="text-xs md:text-sm text-stone-400 font-medium italic mb-6">
                   紀錄專案開發中的邏輯路徑，分析如何將商業願景收斂為可執行的技術細節。
                </p>
             </FadeIn>
             
             {/* Main Header Bar */}
             <div className="flex items-center gap-6 border-b border-taupe/30 pb-6">
               <div className="flex items-center gap-3">
                  <Activity className="w-5 h-5 text-navy/50" />
                  <h2 className="text-xl font-bold text-navy">實務開發紀錄</h2>
               </div>
               <div className="flex-grow" aria-hidden="true"></div>
               <div className="hidden md:block text-[10px] font-bold text-stone-400 tracking-[0.2em] uppercase text-right">
                  Empirical Analysis <br className="lg:hidden" /> & Logic Framework
               </div>
             </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleInsights.map((insight, index) => (
              <FadeIn key={insight.id} delay={index * 50} variant="fade">
                <Link href={`/insights/${insight.id}`} className="group block h-full">
                  <article className="h-full bg-white rounded-[1.5rem] border border-taupe/30 hover:border-navy/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col shadow-sm relative overflow-hidden">
                    
                    <div className="p-6 pb-2 flex justify-between items-center">
                       <span className="text-[10px] font-bold text-navy/50 uppercase tracking-widest">
                          {insight.category}
                       </span>
                       <span className="text-[10px] font-medium text-stone-400">
                          {insight.readTime}
                       </span>
                    </div>

                    <div className="p-6 pt-4 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-sunfire transition-colors leading-tight line-clamp-2">
                        {insight.title}
                      </h3>
                      
                      <p className="text-stone-500 text-sm italic mb-4 line-clamp-1 opacity-70">
                         {insight.painPoint}
                      </p>

                      <p className="text-stone-600 text-sm leading-relaxed mb-8 line-clamp-3">
                        {insight.summary}
                      </p>
                      
                      <div className="mt-auto pt-5 border-t border-taupe/20 flex items-center justify-between">
                         <span className="text-[10px] text-stone-400 font-bold">{insight.publishDate}</span>
                         <div className="flex items-center gap-1.5 text-navy text-xs font-bold group-hover:gap-3 transition-all">
                            <span>剖析邏輯架構</span>
                            <ArrowRight size={14} />
                         </div>
                      </div>
                    </div>
                  </article>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Consultative CTA */}
      <section className="px-6 pb-24">
         <div className="max-w-4xl mx-auto">
            <FadeIn variant="fade">
               <div className="bg-sand/30 border border-taupe/60 rounded-[3rem] p-10 md:p-16 text-center shadow-sm">
                  <h3 className="text-2xl md:text-3xl font-bold text-navy mb-6 tracking-tight">專案開始前，先把關鍵邏輯對齊</h3>
                  <p className="text-smoke text-lg mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
                     文章只能呈現開發歷程的一部分思考脈絡。<br />
                     在資源進一步投入之前，針對仍不夠清楚的需求進行結構化梳理，<br className="hidden md:block" />
                     往往有助於提早發現潛在風險，並讓後續的技術決策更貼近實際的商業目標。
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                       <a href={PROFILE.contactFormLink} target="_blank" rel="noopener noreferrer">
                          <button className="bg-sunfire hover:bg-sunfire/90 text-white px-10 py-4 rounded-full font-bold transition-all shadow-md shadow-sunfire/10 hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-3">
                             <FileText className="w-5 h-5" /> 預約 15min 邏輯對焦對話
                          </button>
                       </a>
                       <Link href="/portfolio" className="text-navy font-bold text-sm group flex items-center gap-2 border-b border-navy/20 hover:border-navy transition-all">
                          <span>查看實務應用成果</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                       </Link>
                  </div>
               </div>
            </FadeIn>
         </div>
      </section>

    </div>
  );
};

export default Insights;
