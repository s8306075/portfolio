import Image from "next/image";
import Link from "next/link";
import { EXPERIENCES, PROFILE } from "@/constants";
import ContactCTA from "@/components/ContactCTA";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";
import { 
  Users, 
  GitMerge, 
  MessageSquare, 
  Target, 
  RefreshCw,
  Zap,
  ArrowRight,
  FileText,
  LineChart,
  Heart,
  Cpu,
  History,
  Database,
  Layout,
  Server,
  Search
} from 'lucide-react';

export const metadata = {
  title: `關於我 | ${PROFILE.name} - ${PROFILE.title}`,
  description: PROFILE.introShort + ' 了解我的工作哲學、技術能力與專業經歷。',
  openGraph: {
    title: `關於我 | ${PROFILE.name}`,
    description: PROFILE.introShort,
    url: `${PROFILE.website}/about`,
    type: 'profile',
  },
};

const About = () => {
  const SKILL_GROUPS = [
    {
      category: "Backend & Architecture",
      items: ["PHP", "Laravel", "Python", "FastAPI", "MySQL", "MongoDB", "RESTful API"],
    },
    {
      category: "Frontend & Interactive",
      items: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "Tailwind CSS", "RWD", "Angular", "Nuxt.js"],
    },
    {
      category: "DevOps & Tools",
      items: ["Git", "Docker", "Linux", "Composer", "Postman"],
    },
  ];

  const BELIEFS = [
    { 
      icon: Zap, 
      title: "系統與流程", 
      desc: "我不只寫程式，更重視計畫與流程。穩健的推進方式，能確保您的專案有序落地，不再因為混亂而延期。" 
    },
    { 
      icon: Users, 
      title: "價值與影響", 
      desc: "技術只是手段，解決問題才是目的。我確保每一個功能開發，都能為您的使用者或團隊創造實際的正面影響。" 
    },
    { 
      icon: GitMerge, 
      title: "理念契合", 
      desc: "共鳴才能協作。我重視與夥伴或客戶的理念契合，因為互相信任的合作關係，才能促成最高效的成果。" 
    }
  ];

  const METHODS = [
    { 
      icon: MessageSquare, 
      title: "清晰溝通", 
      desc: "拒絕術語堆砌。我用簡單明確的方式傳達想法與需求，讓您完全理解專案狀況，讓合作更順暢。" 
    },
    { 
      icon: Target, 
      title: "專案落地", 
      desc: "再大的願景也需要落地。我會將大目標拆解為小步驟推進，確保事情從想法到完成都能順利進行，讓您看見進度。" 
    },
    { 
      icon: RefreshCw, 
      title: "彈性應變", 
      desc: "保留架構的彈性。遇到突發狀況或新想法能迅速調整，確保專案順利完成，不被僵化的規格綁架。" 
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": PROFILE.name,
    "jobTitle": PROFILE.title,
    "url": `${PROFILE.website}/about`,
    "sameAs": [
      PROFILE.social?.facebook,
      PROFILE.social?.instagram
    ],
    "description": PROFILE.introShort,
    "knowsAbout": ["網頁全端開發", "系統架構規劃", "Laravel 框架實作", "React/Vue 前端開發", "商務流程優化"]
  };

  return (
    <div className="min-h-screen pt-24 bg-beige">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Bio Section */}
      <section className="px-6 mb-24" aria-label="Biography">
        <div className="grid items-center grid-cols-1 gap-12 mx-auto max-w-7xl lg:grid-cols-12 lg:gap-20">
          {/* Left: Image */}
          <div className="relative self-start lg:col-span-5 lg:sticky lg:top-32">
            <FadeIn variant="scale" className="relative p-4">
              <div className="absolute inset-0 z-0 transform scale-105 bg-sand/80 rounded-3xl -rotate-3 blur-sm" aria-hidden="true" />
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg z-10">
                <Image
                  src="/about.jpg"
                  alt={`Portrait of ${PROFILE.name}`}
                  width={800}
                  height={1000}
                  className="object-cover w-full h-full"
                />
              </div>
            </FadeIn>
          </div>

          {/* Right: Text */}
          <div className="lg:col-span-7">
            <FadeIn variant="up">
              <h1 className="mb-4 text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl text-charcoal">
                降低專案風險的獨立開發者
              </h1>
              <span className="block mb-12 text-lg font-medium leading-relaxed tracking-wide md:text-xl text-umber/70">
                在啟動前精準對齊規格，確保技術投入能產出實質商業價值
              </span>

              <ul className="mb-10 space-y-6" aria-label="核心專業價值">
                <FadeIn delay={100} variant="fade">
                  <li className="flex items-center gap-5 group">
                    <div className="flex items-center justify-center transition-all duration-300 bg-white border shadow-sm w-11 h-11 rounded-xl border-taupe/40 shrink-0 group-hover:border-navy/20">
                      <Search className="w-5 h-5 text-navy/60" />
                    </div>
                    <p className="text-base font-semibold tracking-tight md:text-lg text-umber">
                      在寫下第一行程式碼前，先把「要做什麼」想清楚
                    </p>
                  </li>
                </FadeIn>

                <FadeIn delay={200} variant="fade">
                  <li className="flex items-center gap-5 group">
                    <div className="flex items-center justify-center transition-all duration-300 bg-white border shadow-sm w-11 h-11 rounded-xl border-taupe/40 shrink-0 group-hover:border-navy/20">
                      <FileText className="w-5 h-5 text-navy/60" />
                    </div>
                    <p className="text-base font-semibold tracking-tight md:text-lg text-umber">
                      將模糊想法轉成可執行、可估算的系統規格
                    </p>
                  </li>
                </FadeIn>

                <FadeIn delay={300} variant="fade">
                  <li className="flex items-center gap-5 group">
                    <div className="flex items-center justify-center transition-all duration-300 bg-white border shadow-sm w-11 h-11 rounded-xl border-taupe/40 shrink-0 group-hover:border-navy/20">
                      <LineChart className="w-5 h-5 text-navy/60" />
                    </div>
                    <p className="text-base font-semibold tracking-tight md:text-lg text-umber">
                      從規劃到實作，確保每一分預算都用在對的地方
                    </p>
                  </li>
                </FadeIn>
            </ul>
            </FadeIn>

            <FadeIn variant="fade" delay={400}>
              <div className="px-5 py-3 mb-12 border-l-2 bg-taupe/10 border-taupe/60 md:px-6 md:py-4 rounded-r-xl">
                <p className="text-base font-medium leading-relaxed text-umber/90">
                  專案卡關往往不是技術瓶頸，而是決策邏輯不夠透徹。我提供一套穩定、可預期的落地方案，協助您在充滿變數的過程中，重拾對進度與品質的掌控權。
                </p>
              </div>
            </FadeIn>

            <FadeIn variant="fade" delay={350}>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a 
                  href={PROFILE.contactFormLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contact via Form"
                >
                  <Button variant="primary">
                    <FileText className="w-4 h-4 mr-2" aria-hidden="true" />
                    預約技術諮詢
                  </Button>
                </a>
                <Link href="/portfolio" aria-label="View Portfolio">
                  <Button variant="outline">
                    瀏覽技術案例
                    <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. Philosophy & Methods Section */}
      <section className="px-6 py-24 mb-24 bg-white border-y border-taupe/20" aria-label="Philosophy and Workflow">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <FadeIn variant="up">
              <h2 className="flex items-center justify-center gap-3 mb-2 text-3xl font-bold md:text-4xl text-charcoal">
                <Heart className="w-8 h-8 text-navy opacity-90" aria-hidden="true" />
                我相信的事 / 我如何工作
              </h2>
              <span className="block mb-6 text-lg font-medium text-charcoal/80">與我合作，您將獲得的價值</span>
              <div className="w-16 h-1 mx-auto rounded-full bg-taupe" aria-hidden="true"></div>
            </FadeIn>
          </div>

          {/* Beliefs Grid */}
          <ul className="grid grid-cols-1 gap-8 mb-8 md:grid-cols-3">
            {BELIEFS.map((item, index) => {
              const Icon = item.icon;
              return (
                <li key={`belief-${index}`}>
                  <FadeIn className="h-full" delay={index * 100} variant="fade">
                    <article className="flex flex-col items-center h-full p-8 text-center transition-all duration-300 border shadow-sm bg-sand rounded-2xl border-taupe/60 hover:shadow-xl group">
                       <FadeIn variant="scale" delay={index * 100 + 100}>
                          <div className="flex items-center justify-center w-12 h-12 mb-4 transition-all duration-300 bg-white border rounded-full text-navy group-hover:bg-sunfire group-hover:text-white group-hover:scale-110 border-taupe/20">
                            <Icon className="w-6 h-6" aria-hidden="true" />
                          </div>
                       </FadeIn>
                       <h3 className="mb-3 text-xl font-bold transition-colors text-charcoal">{item.title}</h3>
                       <p className="text-sm leading-relaxed text-umber">
                         {item.desc}
                       </p>
                    </article>
                  </FadeIn>
                </li>
              );
            })}
          </ul>
          
          {/* Methods Grid */}
          <ul className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {METHODS.map((item, index) => {
              const Icon = item.icon;
              const delay = 300 + (index * 100);
              return (
                <li key={`method-${index}`}>
                  <FadeIn className="h-full" delay={delay} variant="fade">
                    <article className="flex flex-col items-center h-full p-8 text-center transition-all duration-300 border shadow-sm bg-sand rounded-2xl border-taupe/60 hover:shadow-xl group">
                       <FadeIn variant="scale" delay={delay + 100}>
                          <div className="flex items-center justify-center w-12 h-12 mb-4 transition-all duration-300 bg-white border rounded-full text-navy group-hover:bg-sunfire group-hover:text-white group-hover:scale-110 border-taupe/20">
                            <Icon className="w-6 h-6" aria-hidden="true" />
                          </div>
                       </FadeIn>
                       <h3 className="mb-3 text-xl font-bold transition-colors text-charcoal">{item.title}</h3>
                       <p className="text-sm leading-relaxed text-umber">
                         {item.desc}
                       </p>
                    </article>
                  </FadeIn>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* 3. Skills Section */}
      <section className="relative px-6 py-12 mb-24 overflow-hidden" aria-labelledby="skills-heading">
        {/* Background Organic Blob */}
        <div className="absolute -bottom-10 -left-10 w-[15%] sm:w-[35%] h-[80%] bg-taupe rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] blur-3xl opacity-60 -rotate-12 pointer-events-none select-none z-0" aria-hidden="true"></div>

        <div className="relative z-10 grid items-start grid-cols-1 gap-16 mx-auto max-w-7xl lg:grid-cols-2">
          
          {/* Left: Text Content */}
          <div>
            <FadeIn variant="up">
              <h2 id="skills-heading" className="flex items-center gap-3 mb-2 text-3xl font-bold md:text-4xl text-charcoal">
                <Cpu className="w-8 h-8 text-navy opacity-90" aria-hidden="true" />
                技術能力
              </h2>
              <span className="block mb-6 text-lg font-medium text-charcoal/90">打造現代化系統的工具箱</span>
              <div className="w-16 h-1 mb-10 rounded-full bg-taupe" aria-hidden="true"></div>
            </FadeIn>

            <dl className="space-y-8 leading-relaxed text-umber">
              {/* Backend */}
              <FadeIn variant="fade" delay={100}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-leaf/70 shadow-sm shrink-0 opacity-60" aria-hidden="true"></span>
                  <Database className="w-4 h-4 text-navy/60" aria-hidden="true" />
                  <dt className="font-bold text-smoke">後端核心</dt>
                </div>
                <dd className="pl-5">
                  <p>
                    以 Laravel 與 PHP 為主戰場，熟悉 RESTful API 設計與複雜的資料庫關聯 (MySQL / MongoDB)。也能運用 Python / FastAPI 進行輕量級服務開發。
                  </p>
                </dd>
              </FadeIn>

              {/* Frontend */}
              <FadeIn variant="fade" delay={200}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-leaf/70 shadow-sm shrink-0 opacity-60" aria-hidden="true"></span>
                  <Layout className="w-4 h-4 text-navy/60" aria-hidden="true" />
                  <dt className="font-bold text-smoke">前端互動</dt>
                </div>
                <dd className="pl-5">
                  <p>
                    精通 HTML, CSS 與 JavaScript (ES6+)，並熟悉 jQuery 維護舊專案。現代化開發則擅長 Vue.js (Nuxt) 與 Angular，搭配 Tailwind CSS 與 Bootstrap 快速建構 RWD 介面。
                  </p>
                </dd>
              </FadeIn>

              {/* Architecture */}
              <FadeIn variant="fade" delay={300}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-leaf/70 shadow-sm shrink-0 opacity-60" aria-hidden="true"></span>
                  <Server className="w-4 h-4 text-navy/60" aria-hidden="true" />
                  <dt className="font-bold text-smoke">DevOps 與工具</dt>
                </div>
                <dd className="pl-5">
                  <p>
                    具備 Linux 環境管理能力，使用 Docker 進行容器化部署。熟練 Git 版本控制與 Composer 套件管理，並運用 Postman 進行 API 測試與文件化。
                  </p>
                </dd>
              </FadeIn>
            </dl>
          </div>

          {/* Right: Skill Pills Grid */}
          <div className="space-y-8">
            {SKILL_GROUPS.map((group, idx) => (
              <FadeIn key={idx} variant="fade" delay={200 + (idx * 100)}>
                <div>
                  <h4 className="pl-1 mb-2 text-sm font-bold tracking-wider uppercase text-navy/70">
                    {group.category}
                  </h4>
                  <div className="flex items-center gap-1 mb-5 ml-1" aria-hidden="true">
                    <div className="h-0.5 bg-taupe/60 rounded-full w-8 sm:w-16 transition-all duration-300 group-hover:w-20"></div>
                  </div>

                  <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 sm:gap-3" aria-label={`Skills in ${group.category}`}>
                    {group.items.map((skill, i) => (
                      <li key={i} className="bg-white/50 rounded-xl border border-taupe/20 shadow-sm px-4 py-2 text-umber text-center text-sm font-medium hover:scale-[1.02] hover:border-taupe/50 hover:shadow-md transition-all duration-300 cursor-default">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Experience Section */}
      <section className="px-6 py-16 bg-white border-t border-taupe/20" aria-labelledby="experience-heading">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-16 text-center">
            <FadeIn variant="up">
              <h2 id="experience-heading" className="flex items-center justify-center gap-3 mb-2 text-3xl font-bold md:text-4xl text-charcoal">
                <History className="w-8 h-8 text-navy opacity-90" aria-hidden="true" />
                專業經歷
              </h2>
              <span className="block mb-6 text-lg font-medium text-charcoal/90">持續累積的實戰軌跡</span>
              <div className="w-16 h-1 mx-auto rounded-full bg-taupe" aria-hidden="true"></div>
            </FadeIn>
          </div>

          <div className="relative">
            {/* Center Line */}
            <div className="absolute top-0 bottom-0 hidden w-px md:block left-24 md:left-32 bg-taupe/40" aria-hidden="true"></div>

            {/* Desktop View: Timeline */}
            <ol className="hidden py-4 space-y-12 md:block">
              {EXPERIENCES.map((exp, index) => (
                <li key={index}>
                  <FadeIn delay={index * 150} variant="fade">
                    <div className="flex items-start group">
                      
                      {/* Left: Year */}
                      <div className="relative z-10 flex-shrink-0 w-24 pt-2 pr-6 text-right md:w-32 md:pr-8">
                        <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-stone-100 text-smoke">
                          {exp.year.split(' - ')[0]}
                        </span>
                      </div>

                      {/* Center: Solid Dot */}
                      <div className="w-3 h-3 rounded-full bg-navy mt-3.5 -ml-1.5 flex-shrink-0 z-20 transition-transform duration-300 group-hover:scale-150" aria-hidden="true"></div>

                      {/* Right: Card */}
                      <article className="flex-1 ml-6 md:ml-10">
                        <div className="p-6 transition-all duration-200 border shadow-sm cursor-default bg-beige/50 rounded-2xl group-hover:shadow-md group-hover:-translate-y-1 border-taupe/30">
                          <h3 className="mb-1 text-lg font-bold text-charcoal">{exp.title}</h3>
                          <div className="mb-3 text-sm font-semibold text-navy/60">{exp.company}</div>
                          <p className="text-sm leading-relaxed text-umber line-clamp-2">
                            {exp.description}
                          </p>
                        </div>
                      </article>

                    </div>
                  </FadeIn>
                </li>
              ))}
            </ol>

            {/* Mobile View: Stacked Card List */}
            <ol className="space-y-6 md:hidden">
              {EXPERIENCES.map((exp, index) => (
                <li key={index}>
                  <FadeIn delay={index * 100} variant="fade">
                    <article className="bg-beige p-6 rounded-2xl shadow-sm border border-taupe/30 hover:shadow-md active:scale-[0.98] transition-all duration-200 cursor-default group">
                      {/* Header: Dot + Year */}
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-2 h-2 transition-transform duration-300 rounded-full shadow-sm bg-leaf group-hover:scale-125" aria-hidden="true"></div>
                        <span className="text-sm font-bold text-smoke bg-beige/50 px-2 py-0.5 rounded-md">
                          {exp.year.split(' - ')[0]}
                        </span>
                      </div>
                      
                      <h3 className="mb-1 text-lg font-bold text-charcoal">{exp.title}</h3>
                      <div className="mb-3 text-sm font-semibold text-sunfire">{exp.company}</div>
                      <p className="text-sm leading-relaxed text-umber">
                        {exp.description}
                      </p>
                    </article>
                  </FadeIn>
                </li>
              ))}
            </ol>

          </div>
        </div>
      </section>

      <FadeIn variant="fade">
        <div className="px-6 pb-24">
          <ContactCTA variant="about" />
        </div>
      </FadeIn>
    </div>
  );
};

export default About;
