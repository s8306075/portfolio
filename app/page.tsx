import Image from "next/image";
import Link from "next/link";
import { ArrowRight, GitMerge, Layers, CheckCircle2, BarChart3, Users, Code2 } from 'lucide-react';
import Button from '@/components/Button';
import ProjectCard from '@/components/ProjectCard';
import ContactCTA from '@/components/ContactCTA';
import FadeIn from '@/components/FadeIn';
import { PROJECTS, PROFILE, SERVICES } from '@/constants';

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
      "query-input": "required name=search_term_string"
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
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-96 h-96 bg-sunfire/5 rounded-full blur-3xl pointer-events-none z-0"></div>
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* LEFT COLUMN: Text Content */}
          <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <FadeIn delay={100} variant="up">
              {/* Structure: H1 + Sub + Bar */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-charcoal mb-6 leading-[1.1] tracking-tight">
                將模糊想法，<br />轉化為穩健運行的<br />
                <span className="relative inline-block mt-2 z-10">
                  數位資產
                  <span className="absolute left-0 bottom-2 w-full h-4 bg-sunfire/20 -z-10 rounded-sm transform -rotate-1 skew-x-12" aria-hidden="true"></span>
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-umber max-w-xl mb-6 leading-relaxed">
                你不需要懂技術，只要告訴我你的困擾。我協助你將模糊的想法，收斂成邏輯清晰的執行藍圖，打造真正能解決問題的系統。
              </p>

              {/* Accent Bar */}
              <div className="w-20 h-1.5 bg-sunfire rounded-full mb-10" aria-hidden="true"></div>
            </FadeIn>

            <FadeIn delay={300} variant="fade">
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <Link href="/portfolio" className="w-full sm:w-auto" aria-label="View Portfolio">
                  <Button variant="primary" fullWidth className="h-14 px-8 text-lg">
                    瀏覽精選作品
                  </Button>
                </Link>
                <Link href="/services" className="w-full sm:w-auto" aria-label="View Services">
                  <Button variant="outline" fullWidth className="h-14 px-8 text-lg">
                    了解服務內容
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* RIGHT COLUMN: Tilted Image */}
          <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end py-10 lg:py-0">
            <FadeIn delay={200} variant="scale" className="relative w-full max-w-xl">
              {/* Rotated Background Block */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] bg-taupe/40 rounded-[2.5rem] transform rotate-3 z-0 blur-sm" aria-hidden="true"></div>
              {/* System UI Container */}
              <div className="relative bg-beige rounded-[2rem] shadow-2xl shadow-taupe/20 border border-taupe/60 aspect-[4/3] overflow-hidden transform transition-transform duration-700 hover:rotate-0 rotate-2 flex flex-col">
                {/* Window Header */}
                <div className="h-12 border-b border-taupe/30 flex items-center px-6 gap-2 bg-slate-50/50">
                  <div className="w-3 h-3 rounded-full bg-red-300"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-300"></div>
                  <div className="w-3 h-3 rounded-full bg-green-300"></div>
                  <div className="ml-auto w-24 h-2 bg-taupe/30 rounded-full"></div>
                </div>

                {/* Main Content Area */}
                <div className="flex flex-1 p-6 gap-6 bg-beige/80 backdrop-blur-sm">
                    {/* Sidebar Mockup */}
                    <div className="w-16 hidden md:flex flex-col gap-4 pt-2">
                      <div className="w-10 h-10 bg-sunfire/10 rounded-xl flex items-center justify-center text-sunfire">
                        <Layers size={20} />
                      </div>
                      <div className="w-10 h-10 hover:bg-sand rounded-xl flex items-center justify-center text-navy/40">
                        <BarChart3 size={20} />
                      </div>
                      <div className="w-10 h-10 hover:bg-sand rounded-xl flex items-center justify-center text-navy/40">
                        <Users size={20} />
                      </div>
                    </div>

                    {/* Dashboard Content Mockup */}
                    <div className="flex-1 flex flex-col gap-6">
                      {/* Stats Row */}
                      <div className="flex gap-4">
                          <div className="flex-1 bg-beige rounded-2xl p-4 border border-taupe/30">
                            <div className="w-8 h-8 bg-white rounded-lg mb-2 shadow-sm"></div>
                            <div className="w-12 h-2 bg-navy/10 rounded-full mb-2"></div>
                            <div className="w-20 h-4 bg-navy/80 rounded-full"></div>
                          </div>
                          <div className="flex-1 bg-beige rounded-2xl p-4 border border-taupe/30">
                            <div className="w-8 h-8 bg-white rounded-lg mb-2 shadow-sm"></div>
                            <div className="w-12 h-2 bg-navy/10 rounded-full mb-2"></div>
                            <div className="w-20 h-4 bg-sunfire/60 rounded-full"></div>
                          </div>
                      </div>

                      {/* Chart Area Mockup */}
                      <div className="flex-1 bg-sand rounded-2xl border border-taupe/30 p-4 flex items-end justify-between gap-2 px-6 pb-2">
                          <div className="w-full bg-navy/10 h-[40%] rounded-t-md"></div>
                          <div className="w-full bg-navy/20 h-[60%] rounded-t-md"></div>
                          <div className="w-full bg-sunfire/60 h-[80%] rounded-t-md relative group">
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
                    <div className="w-8 h-8 rounded-full bg-leaf/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 size={14} className="text-leaf" />
                    </div>
                    <div>
                      <div className="h-1.5 w-16 bg-navy/60 rounded-full mb-1.5"></div>
                      <div className="h-1 w-24 bg-navy/20 rounded-full"></div>
                    </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-6 bg-white relative z-20" aria-labelledby="core-services-heading">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <FadeIn variant="up">
              <h2 id="core-services-heading" className="text-3xl md:text-4xl font-bold text-charcoal mb-2">核心服務項目</h2>
              <span className="block text-lg font-medium text-charcoal/90 mb-6">專注於架構與體驗的全端開發</span>
              <div className="w-16 h-1 bg-sunfire mx-auto rounded-full" aria-hidden="true"></div>
            </FadeIn>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service, index) => {
              const Icon = service.icon;
              return (
                <li key={service.id}>
                  <FadeIn className="h-full" delay={index * 150} variant="fade">
                    <div className="p-8 rounded-3xl bg-sand border border-taupe shadow-sm hover:shadow-xl transition-all duration-300 h-full group flex flex-col items-center text-center">
                      <FadeIn variant="scale" delay={index * 150 + 100}>
                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm text-navy mb-6 group-hover:bg-sunfire group-hover:text-white group-hover:scale-110 transition-all duration-300 border border-transparent group-hover:border-white/20">
                          <Icon className="w-6 h-6 transition-colors" aria-hidden="true" />
                        </div>
                      </FadeIn>
                      <FadeIn variant="up" delay={index * 150 + 150}>
                        <h3 className="text-xl font-bold text-charcoal mb-3 transition-colors">{service.title}</h3>
                      </FadeIn>
                      <p className="text-umber leading-relaxed">{service.shortDescription || service.description}</p>
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

      {/* Featured Portfolio */}
      <section className="py-24 px-6 bg-beige" aria-labelledby="featured-portfolio-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <FadeIn variant="up">
              <h2 id="featured-portfolio-heading" className="text-3xl md:text-4xl font-bold text-charcoal mb-2">精選案例</h2>
              <span className="block text-lg font-medium text-charcoal/90 mb-6">從內部工具到商業平台的實戰成果</span>
              <div className="w-16 h-1 bg-sunfire mx-auto rounded-full" aria-hidden="true"></div>
            </FadeIn>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                瀏覽所有作品 <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-24 px-6 bg-white overflow-hidden relative" aria-labelledby="about-me-preview-heading">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <FadeIn variant="fade" className="relative order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative group w-full max-w-md">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] bg-taupe/50 rounded-[2.5rem] transform -rotate-3 z-0 blur-xs" aria-hidden="true"></div>
              <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-lg bg-taupe relative z-10 transform transition-transform duration-700 hover:scale-[1.02]">
                <Image 
                  src="/hero-about.jpg"
                  alt="魚也是貓 Profile - Full Stack Developer" 
                  loading="lazy"
                  width={1000}   
                  height={800}   
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Badge: Top Left */}
              <div className="absolute -top-8 -left-4 md:-left-12 z-20 animate-float bg-beige p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-sand">
                <div className="w-10 h-10 bg-sunfire-50 rounded-full flex items-center justify-center text-sunfire">
                  <Code2 size={20} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-smoke font-bold uppercase tracking-wider">Experience</p>
                  <p className="text-navy font-bold">10+ Years</p>
                </div>
              </div>

              {/* Floating Badge: Bottom Right */}
              <div className="absolute -bottom-8 -right-4 md:-right-8 z-20 animate-floatDelayed bg-taupe/20 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-beige/60">
                <div className="w-10 h-10 bg-sand/40 rounded-full flex items-center justify-center text-leaf">
                  <Layers size={20} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-[10px] md:text-xs text-navy/90 font-semibold uppercase tracking-wider">Architecture</p>
                  <p className="text-navy font-bold">Solid & Scalable</p>
                </div>
              </div>

              {/* Background Blob */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-taupe/30 rounded-full blur-3xl -z-10 opacity-60" aria-hidden="true"></div>
            </div>
          </FadeIn>

          {/* Right Text */}
          <div className="order-1 lg:order-2">
            <FadeIn variant="up">
              <h2 id="about-me-preview-heading" className="text-3xl md:text-4xl font-bold text-charcoal mb-2 leading-tight">
                不被技術名詞綁架，<br />專注解決你的真實問題
              </h2>
              <span className="block text-lg font-medium text-charcoal/90 mb-6">
                一位「聽得懂人話」的技術合作夥伴
              </span>
              <div className="w-16 h-1 bg-sunfire mb-10 rounded-full" aria-hidden="true"></div>
            </FadeIn>

            <FadeIn variant="fade" delay={150}>
              <p className="text-lg text-smoke/90 mb-8 leading-relaxed font-semibold border-l-[2px] border-taupe/60 pl-6 py-1">
                你不需要懂程式碼，只要專注於你的商業目標。我擅長扮演「翻譯者」，將你腦中的構想與流程，轉譯為邏輯縝密的系統架構。
              </p>
            </FadeIn>

            <FadeIn variant="fade" delay={300}>
              <p className="text-lg text-umber leading-relaxed mb-8">
                我不追求堆砌最新的技術名詞，而是選擇最適合、最穩健的方案。對我來說，一個好系統的定義很簡單：邏輯清晰、運作穩定，並且真正解決了團隊的痛點。
              </p>
            </FadeIn>

            <FadeIn variant="scale" delay={450}>
              <div className="inline-flex items-center gap-4 p-5 rounded-xl bg-sand border border-taupe/60 shadow-sm hover:shadow-md transition-all duration-300 w-full sm:w-auto group">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm text-navy border border-taupe/20 shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <GitMerge size={20} aria-hidden="true" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-charcoal tracking-wide uppercase mb-1">Methodology</span>
                  <span className="text-smoke/90 font-semibold leading-tight block">
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

      <FadeIn delay={200} variant="fade">
        <div className="px-6 pb-24">
          <ContactCTA variant="home" />
        </div>
      </FadeIn>
    </div>
  );
};

export default Home;
