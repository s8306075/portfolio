'use client';

import Link from "next/link";
import { useParams } from 'next/navigation';
import { 
  ArrowLeft, Calendar, FileText, 
  Quote, TrendingUp, Zap, Layout,
  Target, ChevronRight,
  BarChart3, ClipboardCheck, ListChecks, Search,
  ArrowRight, CheckSquare, PencilLine, AlertCircle
} from 'lucide-react';
import { INSIGHTS, PROFILE } from '@/constants';
import FadeIn from '@/components/FadeIn';
import { useEffect } from 'react';

export default function InsightDetail() {
  const params = useParams();
  const id = params.id;
  const insight = INSIGHTS.find(p => p.id === id);

  useEffect(() => {
    if (insight) {
      document.title = `${insight.title} | 實務分享 - ${PROFILE.name}`;
    }
  }, [insight]);

  if (!insight) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col bg-beige">
        <h2 className="text-2xl font-bold text-charcoal mb-4">找不到該文章</h2>
        <Link href="/insights" className="text-navy underline">返回列表</Link>
      </div>
    );
  }

  // SEO JSON-LD for Blog Posting
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": insight.title,
    "description": insight.summary,
    "author": {
      "@type": "Person",
      "name": PROFILE.name
    },
    "datePublished": insight.publishDate.replace(/\./g, '-'),
    "articleSection": insight.category,
    "publisher": {
      "@type": "Person",
      "name": PROFILE.name
    }
  };

  const relatedInsights = INSIGHTS
    .filter(i => i.category === insight.category && i.id !== insight.id)
    .slice(0, 2);

  const problemSentences = insight.content.problem.split('。').filter(s => s.trim().length > 0);
  const analysisSentences = insight.content.analysis.split('。').filter(s => s.trim().length > 0);
  const outcomeSentences = insight.content.outcome.split('。').filter(s => s.trim().length > 0);

  const formatOutcomeSentence = (sentence: string) => {
    const parts = sentence.split(/(\d+%)|(\d+)/g);
    return parts.map((part, i) => {
      if (!part) return null;
      if (part && (part.includes('%') || !isNaN(Number(part)))) {
        return <span key={i} className="text-navy font-bold text-xl mx-0.5">{part}</span>;
      }
      return part;
    });
  };

  return (
    <article className="pt-32 min-h-screen bg-beige selection:bg-navy/10 selection:text-charcoal">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="max-w-4xl mx-auto px-6">
         
         {/* Navigation */}
         <FadeIn variant="fade">
            <Link href="/insights" className="inline-flex items-center text-stone-400 hover:text-navy transition-all duration-300 mb-8 text-sm font-medium hover:-translate-x-1">
               <ArrowLeft className="w-4 h-4 mr-2" />
               返回實務分享
            </Link>
         </FadeIn>

         {/* 1. Impact Header */}
         <header className="mb-12">
            <FadeIn variant="up">
               <h1 className="text-3xl md:text-5xl font-bold text-charcoal leading-tight mb-8 tracking-tight">
                  <span className="text-stone-400 block text-lg md:text-xl mb-4 font-medium italic">{insight.painPoint}</span>
                  {insight.title}
               </h1>
               
               {/* Impact Warning Card */}
               <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-3xl border border-taupe/40 overflow-hidden shadow-sm mb-10">
                  <div className="p-8 md:p-10 bg-stone-50 border-b md:border-b-0 md:border-r border-taupe/30">
                     <span className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.2em] mb-4 block">實務中，若忽略此現象可能損失...</span>
                     <p className="text-stone-600 font-medium leading-relaxed italic text-base">
                        {insight.content.intro}
                     </p>
                  </div>
                  <div className="p-8 md:p-10 bg-white flex flex-col justify-center">
                     <span className="text-[10px] font-bold text-navy/40 uppercase tracking-[0.2em] mb-4 block">風險修正後的預期狀態</span>
                     <p className="text-navy font-bold leading-relaxed text-lg">
                        {insight.summary}
                     </p>
                  </div>
               </div>

               <div className="flex flex-wrap items-center gap-5 text-[11px] font-bold text-stone-400 tracking-wider uppercase">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5" /> {insight.publishDate}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-taupe/60"></span>
                  <span className="text-navy/60 font-bold">{insight.category}</span>
               </div>
            </FadeIn>
         </header>

         {/* 2. Diagnostic Section */}
         <section className="mb-12">
            <FadeIn variant="fade">
               <div className="bg-sand/30 rounded-3xl p-8 md:p-10 border border-taupe/30">
                  <h2 className="text-lg font-bold text-charcoal mb-8 flex items-center gap-3">
                     <AlertCircle className="text-navy/40" size={20} />
                     若出現以下現象，代表您的專案正處於「隱形風險區」：
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
                     {insight.suitability.for.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                           <div className="w-1.5 h-1.5 rounded-full bg-navy/20 mt-2 shrink-0"></div>
                           <span className="text-stone-600 text-sm font-semibold leading-relaxed">{item}</span>
                        </div>
                     ))}
                  </div>
               </div>
            </FadeIn>
         </section>

         {/* 3. Deep Analysis */}
         <div className="max-w-3xl mx-auto">
            <section className="mb-10">
               <div className="space-y-6">
                  {problemSentences.length > 0 && (
                     <>
                        <h2 className="text-xl font-bold text-charcoal leading-snug flex items-center gap-3">
                           <span className="w-1 h-6 bg-taupe rounded-full"></span>
                           觀測現狀背後的深層邏輯
                        </h2>
                        <div className="grid grid-cols-1 gap-3">
                           {problemSentences.map((s, i) => (
                              <div key={i} className="flex gap-5 items-center p-4 hover:bg-white/60 rounded-xl transition-all group border border-transparent hover:border-taupe/20">
                                 <div className="w-10 h-10 rounded-full bg-taupe/10 flex items-center justify-center shrink-0">
                                    <Search className="w-4 h-4 text-stone-400" />
                                 </div>
                                 <p className="text-base text-stone-600 leading-relaxed font-medium">
                                    {s}。
                                 </p>
                              </div>
                           ))}
                        </div>
                     </>
                  )}
               </div>
            </section>

            {/* Methodology Reference */}
            <section className="py-4">
               <div className="bg-navy/[0.01] border-l-2 border-navy/10 pl-6 md:pl-8 py-8 rounded-r-3xl">
                  <p className="text-xl text-charcoal font-bold leading-tight mb-4">
                     {analysisSentences[0]}。
                  </p>
                  <p className="text-sm text-stone-500 leading-relaxed max-w-2xl font-medium">
                     {insight.content.trustFactor}
                  </p>
               </div>
            </section>

            {/* 4. Actionable Roadmap */}
            <section className="py-12 mb-4">
               <div className="text-center mb-14">
                  <span className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.3em] mb-4 block">Practical Framework</span>
                  <div className="flex items-center justify-center gap-4">
                     <div className="h-px w-8 bg-taupe/60"></div>
                     <h4 className="text-xl md:text-2xl font-bold text-charcoal">風險識別與收斂路徑</h4>
                     <div className="h-px w-8 bg-taupe/60"></div>
                  </div>
               </div>
               
               <div className="space-y-6">
                  {analysisSentences.map((sentence, index) => (
                     <div key={index} className="flex gap-6 items-center group relative pb-4">
                        {index !== analysisSentences.length - 1 && (
                           <div className="absolute left-4 top-10 bottom-0 w-px bg-taupe/40 -z-10"></div>
                        )}
                        
                        <div className="shrink-0">
                           <div className="w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center text-xs font-bold shadow-sm transition-transform group-hover:scale-105">
                              {index + 1}
                           </div>
                        </div>
                        
                        <div className="flex-grow">
                           <p className="text-lg text-charcoal leading-relaxed font-bold">
                              {sentence}。
                           </p>
                        </div>
                     </div>
                  ))}
               </div>

               {/* Interactive Template */}
               <FadeIn variant="up" className="mt-12 mb-8">
                  <div className="bg-white rounded-[2rem] border-2 border-dashed border-taupe p-8 md:p-12 relative overflow-hidden">
                     <div className="absolute top-0 right-0 p-8 opacity-5 text-navy">
                        <PencilLine size={80} />
                     </div>
                     <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-8">
                           <CheckSquare className="text-sunfire w-5 h-5" />
                           <h5 className="text-lg font-bold text-charcoal">低成本「決策風險」自我檢核</h5>
                        </div>
                        <div className="space-y-6">
                           <div className="p-6 bg-sand/30 rounded-xl">
                              <p className="text-xs font-bold text-stone-400 uppercase mb-2">檢核點 A：原發性動機</p>
                              <p className="text-stone-600 font-medium italic text-sm">「如果不做這件事，現有的流程會在哪個環節產生實質的金錢或時間損耗？」</p>
                              <div className="mt-4 h-8 border-b border-taupe/60 w-full opacity-40"></div>
                           </div>
                           <div className="p-6 bg-sand/30 rounded-xl">
                              <p className="text-xs font-bold text-stone-400 uppercase mb-2">檢核點 B：外部對標</p>
                              <p className="text-stone-600 font-medium italic text-sm">「目前我們在爭論的，是『技術細節』還是『解決問題的路徑共識』？」</p>
                              <div className="mt-4 h-8 border-b border-taupe/60 w-full opacity-40"></div>
                           </div>
                           <div className="flex justify-end pt-2">
                              <a href={PROFILE.contactFormLink} target="_blank" className="inline-flex items-center gap-2 text-navy font-bold text-xs hover:translate-x-1 transition-transform">
                                 對檢核結果感到不安？讓我們重新梳理架構 <ArrowRight size={12} />
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
               </FadeIn>
            </section>
         </div>
      </div>

      {/* 5. Quantifiable Outcome */}
      <section className="bg-sand/20 py-16 border-y border-taupe/20 mb-16 overflow-hidden relative">
         <div className="max-w-5xl mx-auto px-6 relative z-10">
            <FadeIn variant="up">
               <div className="text-center mb-14">
                  <span className="text-[10px] font-bold text-navy/30 uppercase tracking-[0.3em] mb-4 block">Observed Impact</span>
                  <div className="flex items-center justify-center gap-4">
                     <div className="h-px w-8 bg-navy/10"></div>
                     <h4 className="text-2xl md:text-3xl font-bold text-charcoal tracking-tight">
                        此框架在實務中的量化價值
                     </h4>
                     <div className="h-px w-8 bg-navy/10"></div>
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {outcomeSentences.map((sentence, index) => (
                     <div key={index} className="flex items-center gap-6 p-8 bg-white rounded-3xl border border-taupe/10 hover:shadow-lg transition-all group">
                        <div className="w-14 h-14 rounded-2xl bg-beige flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                           <TrendingUp className="w-6 h-6 text-leaf/70" />
                        </div>
                        <p className="text-lg text-stone-600 font-bold leading-tight">
                           {formatOutcomeSentence(sentence)}。
                        </p>
                     </div>
                  ))}
               </div>
            </FadeIn>
         </div>
      </section>

      {/* 6. Strategic CTA */}
      <div className="max-w-4xl mx-auto px-6 pb-20">
         <section>
           <FadeIn variant="up">
              <div className="bg-white rounded-[3rem] p-10 md:p-16 text-center shadow-xl border border-taupe/20 relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-sunfire/20 via-navy/20 to-sunfire/20 opacity-5"></div>
                 
                 <div className="relative z-10 max-w-2xl mx-auto">
                    <h3 className="text-3xl md:text-4xl font-bold text-charcoal mb-8 tracking-tight leading-tight">
                       別讓「模糊需求」燃燒你的預算。<br className="hidden md:block" />
                       現在就為您的專案建立穩健基石。
                    </h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 text-left">
                       <div className="p-6 bg-sand/30 rounded-2xl border border-taupe/20 hover:border-sunfire/20 transition-all cursor-pointer group">
                          <p className="text-charcoal font-bold mb-3 flex items-center gap-2 text-base">
                             <ChevronRight className="w-4 h-4 text-sunfire group-hover:translate-x-1 transition-transform" />
                             我是初創團隊
                          </p>
                          <p className="text-stone-500 text-xs leading-relaxed">協助釐清 MVP，用最低成本快速驗證核心價值，避開盲目擴張。</p>
                       </div>
                       <div className="p-6 bg-sand/30 rounded-2xl border border-taupe/20 hover:border-sunfire/20 transition-all cursor-pointer group">
                          <p className="text-charcoal font-bold mb-3 flex items-center gap-2 text-base">
                             <ChevronRight className="w-4 h-4 text-sunfire group-hover:translate-x-1 transition-transform" />
                             我是企業負責人
                          </p>
                          <p className="text-stone-500 text-xs leading-relaxed">提供專業邏輯診斷，終結無止盡的開發重工與溝通斷層，拿回進度掌控權。</p>
                       </div>
                    </div>

                    <a href={PROFILE.contactFormLink} target="_blank" rel="noopener noreferrer">
                       <button className="w-full sm:w-auto bg-sunfire text-white px-12 py-5 rounded-full font-bold shadow-lg shadow-sunfire/20 hover:bg-sunfire/90 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 mx-auto text-base">
                          <FileText className="w-5 h-5" />
                          預約 15min 邏輯對焦對話
                       </button>
                    </a>
                 </div>
              </div>
           </FadeIn>
         </section>

         {/* Principle Quote */}
         <section className="text-center py-20 border-t border-taupe/20 mt-16">
            <Quote className="w-8 h-8 text-taupe/60 mx-auto mb-8" />
            <p className="text-xl md:text-3xl font-serif text-stone-400 italic leading-relaxed px-4 max-w-3xl mx-auto">
               「{insight.content.principle}」
            </p>
         </section>
      </div>

      {/* 7. Related Articles */}
      {relatedInsights.length > 0 && (
         <section className="bg-white py-20 border-t border-taupe/30">
            <div className="max-w-5xl mx-auto px-6">
               <h2 className="text-center text-[10px] font-bold text-stone-400 uppercase tracking-[0.4em] mb-14">
                  相關邏輯與架構延伸
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {relatedInsights.map((related) => (
                     <Link key={related.id} href={`/insights/${related.id}`} className="group block h-full">
                        <article className="bg-beige/30 p-10 rounded-[2rem] border border-taupe/30 hover:border-sunfire/10 hover:shadow-lg transition-all duration-500 h-full flex flex-col">
                           <div className="mb-4 flex items-center gap-3">
                              <span className="text-[10px] font-bold text-navy/40 uppercase tracking-widest">
                                 {related.category}
                              </span>
                           </div>
                           <h3 className="text-xl font-bold text-charcoal mb-4 group-hover:text-sunfire transition-colors line-clamp-2 leading-tight">
                              {related.title}
                           </h3>
                           <p className="text-sm text-stone-500 line-clamp-2 mt-auto leading-relaxed">
                              {related.summary}
                           </p>
                        </article>
                     </Link>
                  ))}
               </div>
            </div>
         </section>
      )}

    </article>
  );
}
