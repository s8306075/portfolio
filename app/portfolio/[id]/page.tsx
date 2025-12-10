import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft, Lightbulb, X, Maximize2, 
  Code2, Database, Layout, Wrench, Circle, Zap, Target,
  CheckCircle2, Server
} from 'lucide-react';
import { PROJECTS, PROFILE } from '@/constants';
import ContactCTA from '@/components/ContactCTA';
import FadeIn from '@/components/FadeIn';

export function generateStaticParams() {
  return PROJECTS.map((p, i) => ({
    id: p.id,
  }));
}

export default async function ProjectDetail({ params }: { params: { id: string } }) {
  const resolvedParams = await params; // unwrap Promise in dev mode
  const project = PROJECTS.find(p => p.id === resolvedParams.id);


  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col bg-beige">
        <h2 className="text-2xl font-bold text-charcoal mb-4">找不到該專案</h2>
        <Link href="/portfolio" className="text-sunfire underline">
          返回作品集
        </Link>
      </div>
    );
  }

  const jsonLd = project ? {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication", "CreativeWork"],
    "name": project.title,
    "headline": project.heroHeadline,
    "description": project.shortDesc,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "author": { "@type": "Person", "name": PROFILE.name },
    "featureList": project.coreFeatures.map(f => f.title)
  } : null;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col bg-beige">
        <h2 className="text-2xl font-bold text-charcoal mb-4">找不到該專案</h2>
        <Link href='/portfolio' className="text-sunfire underline">
          返回作品集
        </Link>
      </div>
    );
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Frontend': return <Layout className="w-3 h-3" />;
      case 'Backend': return <Code2 className="w-3 h-3" />;
      case 'Database': return <Database className="w-3 h-3" />;
      case 'DevOps': return <Server className="w-3 h-3" />;
      default: return <Wrench className="w-3 h-3" />;
    }
  };

  const techCategories = ['Frontend', 'Backend', 'Database', 'DevOps', 'Tools'];
  const groupedTech = techCategories.reduce((acc, category) => {
    const items = project.techStack.filter(t => t.category === category);
    if (items.length > 0) acc[category] = items;
    return acc;
  }, {} as Record<string, typeof project.techStack>);

  const descParts = project.shortDesc.split('。');
  const mainDesc = descParts[0] + '。';
  const subDesc = descParts[1] ? descParts[1] + '。' : '我們致力於打造穩健的系統，每個細節都以使用者的真實需求為出發。';

  return (
    <article className="bg-beige pt-24 pb-0 relative min-h-screen selection:bg-sunfire/20 selection:text-navy">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Hero Section: Warm & Human-centric */}
      <header className="px-6 mb-16 md:mb-12 relative min-h-[60vh] lg:min-h-[75vh] flex flex-col justify-center" aria-label="Project Header">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          {/* Left: Text (55%) - Vertically Centered */}
          <FadeIn variant="up" className="order-2 lg:order-1 lg:col-span-7 flex flex-col justify-center py-4 lg:py-0 relative">
            {/* Subtle background blob */}
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-taupe/20 rounded-full blur-3xl -z-10 -translate-y-1/2 opacity-60 pointer-events-none" aria-hidden="true"></div>

            <Link href="/portfolio" className="inline-flex items-center text-umber hover:text-charcoal mb-8 transition-all duration-300 group text-sm font-medium hover:-translate-x-1 w-fit">
              <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" />
              返回作品列表
            </Link>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6 leading-[1.15] tracking-tight">
              {project.heroHeadline}
            </h1>
            
            {/* Micro Green Accent Line */}
            <div className="w-8 h-1 bg-leaf rounded-full mb-8 shadow-sm" aria-hidden="true"></div>

            <div className="space-y-4 mb-8 max-w-xl">
              <p className="text-xl text-smoke font-medium leading-relaxed">
                {mainDesc}
              </p>
              <p className="text-lg text-umber leading-relaxed">
                {subDesc}
              </p>
            </div>

            {/* Value Tags */}
            <ul className="flex flex-wrap gap-3" aria-label="Project Values">
              {project.valueTags.map((tag, idx) => (
                <li key={idx}>
                  <span className="bg-taupe/40 text-navy/80 border border-taupe/60 rounded-xl px-3 py-1 text-sm font-medium hover:shadow-md hover:scale-105 transition-all duration-300 cursor-default block">
                    {tag}
                  </span>
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Right: Image (45%) */}
          <FadeIn variant="fade" className="order-1 lg:order-2 lg:col-span-5 relative flex items-center">
            <figure className="w-full relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-taupe/40 border border-white/60 aspect-[4/3] group bg-sand">
              <Image 
                src={project.thumbnail} 
                alt={`Overview of ${project.title}`} 
                width={800}
                height={600}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-sunfire/3 mix-blend-multiply pointer-events-none transition-opacity duration-300 group-hover:opacity-80" aria-hidden="true"></div>
            </figure>
          </FadeIn>
        </div>
      </header>

      {/* 2. Introduction */}
      <section className="px-6 mb-16" aria-label="Introduction">
        <div className="max-w-4xl mx-auto text-center">
           <FadeIn variant="up" delay={100}>
              <p className="text-xl md:text-2xl text-smoke leading-[1.8] font-medium tracking-wide">
                我不只交付程式碼，更協助你將模糊想法收斂為清晰邏輯。<br/>確保開發不走冤枉路，打造真正解決問題的穩健系統。
              </p>
           </FadeIn>
        </div>
      </section>

      {/* 3. Project Overview (Definition List) */}
      <section className="px-6 mb-24" aria-labelledby="overview-heading">
        <h2 id="overview-heading" className="sr-only">Project Overview</h2>
        <div className="max-w-7xl mx-auto">
          <dl className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { title: "專案角色", content: project.role },
              { title: "專案目標", content: project.goal },
              { title: "專案成果", content: project.outcome }
            ].map((item, idx) => (
              <div key={idx} className="h-full">
                <FadeIn delay={idx * 100} variant="fade" className="h-full">
                  <div className="h-full bg-sand p-8 md:p-12 rounded-3xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-start border border-transparent">
                    <dt className="text-navy font-bold text-lg mb-4 tracking-wide shrink-0">{item.title}</dt>
                    <dd className="text-stone-600 leading-relaxed text-base font-medium flex-grow">
                      {item.content}
                    </dd>
                  </div>
                </FadeIn>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 4. Project Insight */}
      <section className="px-6 mb-24" aria-labelledby="insight-heading">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left: Narrative */}
          <div className="lg:col-span-7">
              <FadeIn variant="up">
                <h2 id="insight-heading" className="text-2xl md:text-3xl font-bold text-navy mb-3">
                    專案背景
                </h2>
                <div className="w-12 h-1 bg-taupe mb-8 rounded-full" aria-hidden="true"></div>
                
                <div className="space-y-10 text-umber text-lg leading-relaxed">
                  <div>
                      <h4 className="font-bold text-smoke mb-3 text-sm uppercase tracking-wider opacity-70 border-l-2 border-taupe pl-3">The Challenge</h4>
                      <p>{project.background}</p>
                  </div>
                  <div>
                      <h4 className="font-bold text-smoke mb-3 text-sm uppercase tracking-wider opacity-70 border-l-2 border-taupe pl-3">Our Approach</h4>
                      <p>面對這樣的挑戰，我們不急於動手開發，而是先深入現場，理解使用者的真實痛點。透過多次的訪談與觀察，我們重新定義了問題的核心。</p>
                  </div>
                </div>
              </FadeIn>
          </div>

          {/* Right: Insight Card */}
          <aside className="lg:col-span-5 lg:sticky lg:top-32" aria-label="Key Insight">
            <FadeIn variant="scale" delay={200}>
              <div className="bg-[#FAF8F4] p-8 md:p-10 rounded-[2rem] shadow-sm border border-taupe/40 relative">
                <div className="flex items-center gap-3 mb-6 text-sunfire opacity-90">
                  <Lightbulb className="w-6 h-6" aria-hidden="true" />
                  <span className="text-xs font-bold uppercase tracking-wider">Key Insight</span>
                </div>
                <blockquote className="text-smoke text-lg leading-relaxed italic font-medium">
                  "{project.insight}"
                </blockquote>
              </div>
            </FadeIn>
          </aside>
        </div>
      </section>

      {/* 5. Solution Strategy */}
      <section className="px-6 mb-24 bg-white py-24 rounded-[3rem] mx-4 md:mx-6 shadow-sm border border-taupe/10" aria-labelledby="strategy-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
              <FadeIn variant="up">
                <h2 id="strategy-heading" className="text-2xl md:text-3xl font-bold text-navy mb-2">解決策略</h2>
                <div className="w-16 h-1 bg-sunfire mx-auto rounded-full mt-4" aria-hidden="true"></div>
              </FadeIn>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {project.solutionStrategy.map((item, idx) => (
              <li key={idx} className="h-full">
                <FadeIn delay={idx * 150} variant="fade" className="h-full">
                  <div className="h-full p-8 rounded-[2rem] bg-beige hover:scale-[1.02] hover:shadow-lg transition-all duration-300 border border-taupe/20 group flex flex-col">
                    <div className="w-14 h-14 bg-gradient-to-br from-sunfire-50 to-white rounded-2xl flex items-center justify-center text-sunfire mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                      <Target className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold text-smoke mb-4">{item.title}</h3>
                    <p className="text-umber leading-relaxed flex-grow">
                      {item.desc}
                    </p>
                  </div>
                </FadeIn>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6. Core Features */}
      <section className="px-6 mb-24" aria-labelledby="features-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <FadeIn variant="up">
              <h2 id="features-heading" className="text-2xl md:text-3xl font-bold text-navy mb-2">核心功能</h2>
              <div className="w-16 h-1 bg-sunfire mx-auto rounded-full mt-4" aria-hidden="true"></div>
            </FadeIn>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.coreFeatures.map((feature, idx) => (
              <li key={idx} className="h-full">
                <FadeIn delay={idx * 100} variant="fade" className="h-full">
                  <article className="bg-gradient-to-br from-white to-[#FFFBF5] p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-transparent hover:border-taupe/30 h-full flex flex-col">
                    <div className="mb-5 flex items-center gap-3">
                      <div className="text-sunfire/80">
                          <Zap className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <div className="w-8 h-0.5 bg-sunfire/40 rounded-full" aria-hidden="true"></div>
                    </div>
                    <h3 className="text-lg font-bold text-smoke mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-umber text-sm leading-relaxed flex-grow">
                      {feature.desc}
                    </p>
                  </article>
                </FadeIn>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 7. Screenshots (Zig-Zag) */}
      <section className="px-6 mb-24" aria-labelledby="screenshots-heading">
        <h2 id="screenshots-heading" className="sr-only">Project Screenshots</h2>
        <div className="max-w-7xl mx-auto space-y-16 lg:space-y-24">
          {project.screenshots.map((item, idx) => (
            <FadeIn key={idx} variant="fade">
              <article className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-stretch`}>
                {/* Image */}
                <figure 
                  className="w-full lg:w-3/5 relative rounded-[2rem] overflow-hidden shadow-lg shadow-taupe/20 cursor-zoom-in group border border-taupe/20 bg-beige aspect-[16/10] m-0"
                  role="button"
                  aria-label={`View enlarged screenshot: ${item.title}`}
                  tabIndex={0}
                >
                  <Image 
                    src={item.src} 
                    alt={item.title} 
                    width={1000}
                    height={600}
                    className="w-full h-full object-cover transform group-hover:scale-[1.02] transition-transform duration-500" 
                  />
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true">
                    <div className="bg-white/90 backdrop-blur text-umber px-6 py-3 rounded-full font-medium shadow-lg flex items-center gap-2 text-sm transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Maximize2 size={16} />
                      查看細節
                    </div>
                  </div>
                </figure>

                {/* Text */}
                <div className="w-full lg:w-2/5 flex flex-col justify-center h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-2 rounded-full bg-leaf shadow-sm" aria-hidden="true"></div>
                    <span className="text-sm font-bold text-smoke tracking-wide uppercase opacity-80">
                      {item.label}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-6">
                    {item.title}
                  </h3>
                  
                  {/* Caption Card */}
                  <div className="p-8 bg-sand rounded-[2rem] border border-taupe/20 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-6 opacity-[0.08]" aria-hidden="true">
                      <Layout size={80} />
                    </div>
                    <p className="text-smoke text-lg leading-relaxed mb-4 font-medium relative z-10">
                      {item.desc}
                    </p>
                    <div className="h-px w-full bg-taupe/30 mb-4" aria-hidden="true"></div>
                    <p className="text-sm text-umber italic relative z-10">
                      "{item.quote}"
                    </p>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 8. Key Decisions */}
      <section className="px-6 mb-24" aria-labelledby="decisions-heading">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
              <FadeIn variant="up">
                <h2 id="decisions-heading" className="text-2xl md:text-3xl font-bold text-navy mb-2">關鍵決策</h2>
                <div className="w-16 h-1 bg-sunfire mx-auto rounded-full mt-4" aria-hidden="true"></div>
              </FadeIn>
          </div>

          <div className="space-y-12">
            {project.keyDecisions.map((decision, idx) => (
              <FadeIn key={idx} variant="fade" delay={idx * 100}>
                <article className="flex flex-col items-start group">
                  {/* Pill Label */}
                  <div className="px-6 py-2 bg-sunfire rounded-full text-white font-bold text-sm tracking-wide shadow-md transform translate-y-4 relative z-10 ml-8 border border-white/20">
                      {decision.decision}
                  </div>
                  
                  {/* Description Box */}
                  <div className="w-full bg-[#FAF8F4] border border-taupe/40 rounded-[2rem] p-8 md:p-10 shadow-sm relative z-0 pt-12 hover:shadow-md hover:scale-[1.01] transition-all duration-300">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative h-full">
                      <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-taupe/30 -translate-x-1/2" aria-hidden="true"></div>
                      
                      <div className="md:pr-4">
                        <h4 className="text-xs font-bold text-smoke mb-3 uppercase tracking-wider opacity-60">替代方案</h4>
                        <p className="text-umber leading-relaxed">
                          {decision.alternatives}
                        </p>
                      </div>
                      <div className="md:pl-4">
                        <h4 className="text-xs font-bold text-smoke mb-3 uppercase tracking-wider opacity-60">最終價值</h4>
                        <p className="text-smoke leading-relaxed font-bold">
                          {decision.value}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Future & Tech Stack */}
      <section className="px-6 mb-24" aria-label="Technical Details">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Future Improvements */}
          <div className="lg:pr-8 h-full flex flex-col">
              <FadeIn variant="up">
                <h2 className="text-2xl font-bold text-navy mb-8 flex items-center gap-3">
                    <Circle className="w-3 h-3 text-leaf fill-leaf shadow-sm" aria-hidden="true" />
                    未來優化方向
                </h2>
              </FadeIn>
              
              <FadeIn variant="fade" className="flex-grow">
                <div className="bg-sand p-8 rounded-[2rem] border border-transparent hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full">
                    <ul className="space-y-8">
                      {project.future.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-4">
                            <div className="w-2 h-2 mt-2.5 rounded-full bg-leaf shrink-0 opacity-60" aria-hidden="true"></div>
                            <div>
                                <h3 className="font-bold text-navy mb-1">{item.title}</h3>
                                <p className="text-umber text-sm leading-relaxed">
                                  {item.desc}
                                </p>
                            </div>
                          </li>
                      ))}
                    </ul>
                </div>
              </FadeIn>
          </div>

          {/* Tech Stack */}
          <div className="h-full flex flex-col">
            <FadeIn variant="up">
              <h2 className="text-2xl font-bold text-navy mb-8 flex items-center gap-3">
                <Code2 className="w-5 h-5 text-navy opacity-70" aria-hidden="true" />
                技術架構
              </h2>
            </FadeIn>

            <div className="space-y-6 mb-10 flex-grow">
              {Object.entries(groupedTech).map(([category, items], idx) => (
                <FadeIn key={category} variant="fade" delay={idx * 100}>
                  <div className="mb-4">
                    <h4 className="text-sm font-bold text-smoke/60 uppercase tracking-wider mb-3 pl-1">{category}</h4>
                    <ul className="flex flex-wrap gap-2 overflow-x-auto pb-1 no-scrollbar" role="list">
                      {items.map((tech, i) => (
                        <li key={i} className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#FCFBF9] border border-taupe/40 rounded-2xl shadow-sm text-umber text-sm font-medium hover:border-taupe hover:shadow-md transition-all duration-300 cursor-default group whitespace-nowrap">
                          <span className="text-navy/70 group-hover:text-sunfire transition-colors">
                            {getCategoryIcon(tech.category)}
                          </span>
                          {tech.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              ))}
            </div>
            
            {/* Closing Note */}
            <FadeIn variant="fade" delay={300}>
              <div className="p-8 bg-sand rounded-[2rem] border border-taupe/30 shadow-sm relative mt-auto">
                <p className="text-umber leading-relaxed">
                  技術的選擇始終服務於架構的穩定性。我們選擇了成熟且生態豐富的工具，以確保長期的可維護性。
                </p>
                <div className="absolute bottom-6 right-8 opacity-[0.05] text-sunfire" aria-hidden="true">
                  <CheckCircle2 size={48} />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 10. Contact CTA */}
      <div className="px-6 pb-12 mt-24">
        <ContactCTA variant="portfolio" />
      </div>
    </article>
  );
};