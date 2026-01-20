import Image from "next/image";
import Link from "next/link";
import { ArrowRight, GitMerge, Layers, CheckCircle2, BarChart3, Users, Code2 } from 'lucide-react';
import Button from '@/components/Button';
import ProjectCard from '@/components/ProjectCard';
import ContactCTA from '@/components/ContactCTA';
import FadeIn from '@/components/FadeIn';
import { PROJECTS, PROFILE, SERVICES, INSIGHTS } from '@/constants';

export const metadata = {
  title: `${PROFILE.name} | 聽得懂需求的獨立全端開發者`,
  description: PROFILE.introShort,
  openGraph: {
    title: `${PROFILE.name} | 聽得懂需求的獨立全端開發者`,
    description: PROFILE.introShort,
    url: PROFILE.website,
    type: 'website',
    siteName: PROFILE.name,
  },
};

const Home = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": PROFILE.name,
    "url": PROFILE.website,
    "description": PROFILE.introShort,
    "author": {
      "@type": "Person",
      "name": PROFILE.name
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${PROFILE.website}/?q={search_term_string}`,
      "query-input": "所需名稱=search_term_string"
    }
  };

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section - Left Align */}
      <section className="min-h-[95vh] flex items-center px-6 pt-24 pb-12 bg-beige relative overflow-hidden" aria-label="Hero Introduction">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] bg-taupe/40 rounded-full blur-3xl opacity-60 pointer-events-none z-0"></div>
        <div className="absolute bottom-0 left-0 z-0 rounded-full pointer-events-none translate-y-1/3 -translate-x-1/4 w-96 h-96 bg-sunfire/5 blur-3xl"></div>
        <div className="relative z-10 grid items-center w-full grid-cols-1 gap-16 mx-auto max-w-7xl lg:grid-cols-2">
          {/* LEFT COLUMN: Text Content */}
          <div className="flex flex-col items-center order-2 text-center lg:order-1 lg:items-start lg:text-left">
            <FadeIn delay={100} variant="up">
              {/* Structure: H1 + Sub + Bar */}
              <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold text-charcoal mb-6 leading-[1.1] tracking-tight">
                專案缺
                <span className="relative z-10 inline-block mt-2">
                   決策
                   <span className="absolute left-0 w-full h-4 transform skew-x-12 rounded-sm bottom-2 bg-sunfire/20 -z-10 -rotate-1" aria-hidden="true"></span>
                </span>
                ，<br />再多技術也無法落地<br />
              </h1>
              
              <p className="max-w-xl mb-6 text-lg leading-relaxed md:text-xl text-umber">
                每個專案都值得有清晰的架構與可落地方案。<br />透過穩定流程與邏輯決策，讓專案順暢進行，專注於真正的商業目標。
              </p>
            </FadeIn>

            <FadeIn delay={300} variant="fade">
              <div className="flex flex-col items-center w-full gap-4 sm:flex-row sm:w-auto">
                <a 
                  href={PROFILE.contactFormLink} 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="聯絡我"
                  className="w-full sm:w-auto"
                >
                  <Button variant="primary" fullWidth className="px-8 text-lg h-14">
                    確認專案可行性 →
                  </Button>
                </a>
                <Link href="/portfolio" className="w-full sm:w-auto" aria-label="View Portfolio">
                  <Button variant="outline" fullWidth className="px-8 text-lg h-14">
                    瀏覽精選作品
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* RIGHT COLUMN: Tilted Image */}
          <div className="relative flex justify-center order-1 py-10 lg:order-2 lg:justify-end lg:py-0">
            <FadeIn delay={200} variant="scale" className="relative w-full max-w-xl">
              {/* Rotated Background Block */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] bg-taupe/40 rounded-[2.5rem] transform rotate-3 z-0 blur-sm" aria-hidden="true"></div>
              {/* System UI Container */}
              <div className="relative bg-beige rounded-[2rem] shadow-2xl shadow-taupe/20 border border-taupe/60 aspect-[4/3] overflow-hidden transform transition-transform duration-700 hover:rotate-0 rotate-2 flex flex-col">
                {/* Window Header */}
                <div className="flex items-center h-12 gap-2 px-6 border-b border-taupe/30 bg-slate-50/50">
                  <div className="w-3 h-3 bg-red-300 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-300 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-300 rounded-full"></div>
                  <div className="w-24 h-2 ml-auto rounded-full bg-taupe/30"></div>
                </div>

                {/* Main Content Area */}
                <div className="flex flex-1 gap-6 p-6 bg-beige/80 backdrop-blur-sm">
                    {/* Sidebar Mockup */}
                    <div className="flex-col hidden w-16 gap-4 pt-2 md:flex">
                      <div className="flex items-center justify-center w-10 h-10 bg-sunfire/10 rounded-xl text-sunfire/60">
                        <Layers size={20} />
                      </div>
                      <div className="flex items-center justify-center w-10 h-10 hover:bg-sand rounded-xl text-navy/40">
                        <BarChart3 size={20} />
                      </div>
                      <div className="flex items-center justify-center w-10 h-10 hover:bg-sand rounded-xl text-navy/40">
                        <Users size={20} />
                      </div>
                    </div>

                    {/* Dashboard Content Mockup */}
                    <div className="flex flex-col flex-1 gap-6">
                      {/* Stats Row */}
                      <div className="flex gap-4">
                          <div className="flex-1 p-4 border bg-beige rounded-2xl border-taupe/30">
                            <div className="w-8 h-8 mb-2 bg-white rounded-lg shadow-sm"></div>
                            <div className="w-12 h-2 mb-2 rounded-full bg-navy/10"></div>
                            <div className="w-20 h-4 rounded-full bg-navy/50"></div>
                          </div>
                          <div className="flex-1 p-4 border bg-beige rounded-2xl border-taupe/30">
                            <div className="w-8 h-8 mb-2 bg-white rounded-lg shadow-sm"></div>
                            <div className="w-12 h-2 mb-2 rounded-full bg-navy/10"></div>
                            <div className="w-20 h-4 rounded-full bg-sunfire/40"></div>
                          </div>
                      </div>

                      {/* Chart Area Mockup */}
                      <div className="flex items-end justify-between flex-1 gap-2 p-4 px-6 pb-2 border bg-sand rounded-2xl border-taupe/30">
                          <div className="w-full bg-navy/10 h-[40%] rounded-t-md"></div>
                          <div className="w-full bg-navy/20 h-[60%] rounded-t-md"></div>
                          <div className="w-full bg-sunfire/40 h-[80%] rounded-t-md relative group">
                              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-navy text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                Optimization
                              </div>
                          </div>
                          <div className="w-full bg-navy/10 h-[50%] rounded-t-md"></div>
                          <div className="w-full bg-navy/20 h-[70%] rounded-t-md"></div>
                      </div>
                    </div>
                </div>

                {/* Subtle Alert Notification */}
                <div className="absolute top-16 right-6 bg-beige/90 backdrop-blur-md border border-taupe/40 shadow-lg rounded-xl p-3 flex items-center gap-3 animate-floatDelayed max-w-[200px]">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-leaf/10 shrink-0">
                      <CheckCircle2 size={14} className="text-leaf" />
                    </div>
                    <div>
                      <div className="h-1.5 w-16 bg-navy/50 rounded-full mb-1.5"></div>
                      <div className="w-24 h-1 rounded-full bg-navy/20"></div>
                    </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Featured Portfolio */}
      <section className="px-6 py-24 bg-white" aria-labelledby="featured-portfolio-heading">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <FadeIn variant="up">
              <h2 id="featured-portfolio-heading" className="mb-2 text-3xl font-bold md:text-4xl text-charcoal">精選案例</h2>
              <span className="block mb-6 text-lg font-medium text-charcoal/90">從內部工具到商業平台的實戰成果</span>
              <div className="w-16 h-1 mx-auto rounded-full bg-taupe" aria-hidden="true"></div>
            </FadeIn>
          </div>

          <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.slice(0, 3).map((project, index) => (
              <li key={project.id}>
                <FadeIn delay={index * 150} variant="fade" className="h-full">
                  <ProjectCard project={project} />
                </FadeIn>
              </li>
            ))}
          </ul>

          <div className="mt-16 text-center">
            <Link href="/portfolio" aria-label="View All Portfolio">
              <Button variant="outline" className="px-8">
                瀏覽所有作品 <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Insights Preview */}
      <section className="px-6 py-32 bg-sand/30 border-y border-taupe/20" aria-labelledby="insights-preview-heading">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <FadeIn variant="up">
              <h2 id="insights-preview-heading" className="mb-3 text-3xl font-bold md:text-4xl text-navy">實務分享</h2>
              <span className="block mb-8 text-lg font-medium text-charcoal/80">分享需求收斂與系統落地的實戰觀點</span>
              <div className="w-16 h-1 mx-auto rounded-full bg-taupe" aria-hidden="true"></div>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
            {INSIGHTS.slice(0, 2).map((insight, idx) => (
              <FadeIn key={insight.id} delay={idx * 150} variant="fade">
                <Link href={`/insights/${insight.id}`} className="block h-full group">
                  <article className="bg-white rounded-[1.5rem] p-6 md:p-8 border border-taupe/30 hover:border-navy/10 hover:shadow-xl transition-all duration-500 h-full flex flex-col relative">
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-bold text-navy/50 uppercase tracking-widest bg-beige px-3 py-1 rounded-full border border-taupe/20">
                        {insight.category}
                      </span>
                      <span className="text-[10px] text-stone-400 font-bold uppercase tracking-widest">
                        {insight.publishDate}
                      </span>
                    </div>

                    <h3 className="mb-4 text-xl font-bold leading-tight transition-colors text-charcoal group-hover:text-navy">
                      {insight.title}
                    </h3>

                    <p className="flex-grow mb-8 text-sm font-medium leading-relaxed text-stone-600 line-clamp-3">
                      {insight.summary}
                    </p>

                    <div className="flex items-center justify-between pt-6 mt-auto border-t border-taupe/20">
                      <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">{insight.readTime}</span>
                      <div className="flex items-center gap-2 text-xs font-bold transition-all text-navy group-hover:gap-4">
                        <span>閱讀全文</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </article>
                </Link>
              </FadeIn>
            ))}
          </div>

          <div className="mt-20 text-center">
            <FadeIn variant="fade" delay={200}>
              <Link href="/insights">
                <Button variant="outline" className="px-10">
                  瀏覽所有觀點 <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                </Button>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="relative px-6 py-24 overflow-hidden bg-beige" aria-labelledby="about-me-preview-heading">
        <div className="grid items-center grid-cols-1 gap-16 mx-auto max-w-7xl lg:grid-cols-2">
          {/* Left Image */}
          <FadeIn variant="fade" className="relative flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-md group">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] bg-taupe/50 rounded-[2.5rem] transform -rotate-3 z-0 blur-xs" aria-hidden="true"></div>
              <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-lg bg-taupe relative z-10 transform transition-transform duration-700 hover:scale-[1.02]">
                <Image 
                  src="/hero-about.jpg"
                  alt="魚也是貓 Profile - Full Stack Developer" 
                  loading="lazy"
                  width={1000}   
                  height={800}   
                  className="object-cover w-full h-full"
                />
              </div>
              {/* Floating Badge: Top Left */}
              <div className="absolute z-20 flex items-center gap-3 p-4 border shadow-xl -top-8 -left-4 md:-left-12 animate-float bg-beige rounded-2xl border-sand">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-navy/5 text-navy">
                  <Code2 size={20} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-bold tracking-wider uppercase text-umber/60">Experience</p>
                  <p className="font-bold text-navy">10+ Years</p>
                </div>
              </div>

              {/* Floating Badge: Bottom Right */}
              <div className="absolute z-20 flex items-center gap-3 p-4 border shadow-xl -bottom-8 -right-4 md:-right-8 animate-floatDelayed bg-taupe/20 backdrop-blur-md rounded-2xl border-beige/60">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-leaf/5 text-leaf">
                  <Layers size={20} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-[10px] md:text-xs text-umber/60 font-semibold uppercase tracking-wider">Architecture</p>
                  <p className="font-bold text-navy">Solid & Scalable</p>
                </div>
              </div>

              {/* Background Blob */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-taupe/30 rounded-full blur-3xl -z-10 opacity-60" aria-hidden="true"></div>
            </div>
          </FadeIn>

          {/* Right Text */}
          <div className="order-1 lg:order-2">
            <FadeIn variant="up">
              <h2 id="about-me-preview-heading" className="mb-2 text-3xl font-bold leading-tight md:text-4xl text-charcoal">
                不被技術名詞綁架，<br />專注解決你的真實問題
              </h2>
              <span className="block mb-6 text-lg font-medium text-charcoal/90">
                讓溝通回歸邏輯，讓開發回歸商業價值
              </span>
              <div className="w-16 h-1 mb-10 rounded-full bg-taupe" aria-hidden="true"></div>
            </FadeIn>

            <FadeIn variant="fade" delay={150}>
              <p className="text-lg text-smoke/90 mb-8 leading-relaxed font-semibold border-l-[2px] border-taupe/60 pl-6 py-1">
                我們不需要一堆聽不懂的術語。我擅長扮演「翻譯者」，將你的商業痛點，轉譯為工程師能執行的邏輯架構。
              </p>
            </FadeIn>

            <FadeIn variant="fade" delay={300}>
              <p className="mb-8 text-lg leading-relaxed text-umber">
                我相信好系統的核心是穩定、好用，並真正幫助專案達成商業目標。<br />透過清晰架構與邏輯流程，讓複雜想法變成可落地方案。
              </p>
            </FadeIn>

            <FadeIn variant="scale" delay={450}>
              <div className="inline-flex items-center w-full gap-4 p-5 transition-all duration-300 border shadow-sm rounded-xl bg-sand border-taupe/60 hover:shadow-md sm:w-auto group">
                <div className="flex items-center justify-center w-12 h-12 transition-transform duration-300 bg-white border rounded-full shadow-sm text-navy border-taupe/20 shrink-0 group-hover:scale-110">
                  <GitMerge size={20} aria-hidden="true" />
                </div>
                <div>
                  <span className="block mb-1 text-xs font-bold tracking-wide uppercase text-charcoal">Methodology</span>
                  <span className="block font-semibold leading-tight text-smoke/90">
                    堅持「先架構，後開發」<br className="hidden sm:block"/>確保系統邏輯穩健且易於維護
                  </span>
                </div>
              </div>
            </FadeIn>

            <FadeIn variant="fade" delay={500}>
              <div className="mt-8">
                <Link href="/about" aria-label="More About Me">
                  <Button variant="outline" className="px-8">
                    更多關於我 <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="relative z-20 px-6 py-24 bg-white" aria-labelledby="core-services-heading">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <FadeIn variant="up">
              <h2 id="core-services-heading" className="mb-2 text-3xl font-bold md:text-4xl text-charcoal">專注於解決真實問題</h2>
              <span className="block mb-6 text-lg font-medium text-charcoal/90">不只是開發功能，更在乎系統能否為您帶來價值</span>
              <div className="w-16 h-1 mx-auto rounded-full bg-taupe" aria-hidden="true"></div>
            </FadeIn>
          </div>

          <ul className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {SERVICES.slice(0, 3).map((service, index) => {
              const Icon = service.icon;
              return (
                <li key={service.id}>
                  <FadeIn className="h-full" delay={index * 150} variant="fade">
                    <div className="flex flex-col items-center h-full p-10 text-center transition-all duration-300 border shadow-sm rounded-3xl bg-sand border-taupe hover:shadow-lg group">
                      <FadeIn variant="scale" delay={index * 150 + 100}>
                        <div className="flex items-center justify-center w-16 h-16 mb-8 transition-all duration-300 bg-white border shadow-sm rounded-2xl text-navy border-taupe/10">
                          <Icon className="w-7 h-7" aria-hidden="true" />
                        </div>
                      </FadeIn>
                      <FadeIn variant="up" delay={index * 150 + 150}>
                        <h3 className="mb-4 text-xl font-bold transition-transform duration-300 origin-center text-navy group-hover:scale-105">{service.title}</h3>
                      </FadeIn>
                      <p className="leading-relaxed text-umber">{service.shortDescription || service.description}</p>
                    </div>
                  </FadeIn>
                </li>
              );
            })}
          </ul>

          <div className="mt-16 text-center">
            <FadeIn variant="fade" delay={400}>
              <Link href="/services" aria-label="See All Services">
                <Button variant="outline" className="px-8">
                  查看完整服務內容
                  <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                </Button>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      <FadeIn delay={200} variant="fade">
        <div className="px-6 pb-24">
          <ContactCTA variant="home" />
        </div>
      </FadeIn>
    </div>
  );
};

export default Home;
