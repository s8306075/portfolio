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
  User,
  Heart,
  Cpu,
  History,
  Database,
  Layout,
  Server
} from 'lucide-react';

export const metadata = {
  title: '關於我 | Alex Chen - 協助釐清思緒的獨立開發者',
  description: '10年全端開發經驗，專注於將混亂需求轉化為清晰的系統架構。了解我的工作哲學、技術能力與過往經歷。',
  openGraph: {
    title: '關於我 | Alex Chen',
    description: '協助釐清思緒的獨立開發者。',
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
    name: PROFILE.name,
    jobTitle: "Full Stack Developer",
    url: `${PROFILE.website}/#/about`,
    sameAs: [PROFILE.social?.facebook, PROFILE.social?.instagram],
    description: PROFILE.introShort,
    knowsAbout: ["Web Development", "System Architecture", "Laravel", "React", "Process Optimization"],
  };

  return (
    <div className="pt-24 min-h-screen bg-beige">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Bio Section */}
      <section className="px-6 mb-24" aria-label="Biography">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left: Image */}
          <div className="lg:col-span-5 relative lg:sticky lg:top-32 self-start">
            <FadeIn variant="scale" className="relative p-4">
              <div className="absolute inset-0 bg-sand/80 rounded-3xl transform -rotate-3 scale-105 z-0 blur-sm" aria-hidden="true" />
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg z-10">
                <Image
                  src="/about.jpg"
                  alt={`Portrait of ${PROFILE.name}`}
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeIn>
          </div>

          {/* Right: Text */}
          <div className="lg:col-span-7">
            <FadeIn variant="up">
              <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-2 leading-tight flex items-center gap-3">
                <User className="w-8 h-8 text-navy/80 opacity-90" aria-hidden="true" />
                魚也是貓
              </h2>
              <span className="block text-lg font-medium text-charcoal/80 mb-6">協助你釐清思緒的獨立開發者</span>
              <div className="w-16 h-1 bg-taupe mb-10 rounded-full" aria-hidden="true"></div>
            </FadeIn>

             <div className="space-y-6 text-lg text-umber leading-relaxed mb-8">
              <FadeIn variant="fade" delay={100}>
                <p>
                  專案卡關，往往不是技術無法達成，而是「需求沒有想清楚」。
                  將 10 年實戰經驗，轉化為對焦商業目標的敏銳度。在寫下第一行程式碼前，先協助收斂邏輯，確保每一分預算都花在刀口上，大幅降低開發風險。
                </p>
              </FadeIn>
              <FadeIn variant="fade" delay={200}>
                <p>
                  合作過程不需要懂程式語言，只需專注於業務目標。
                  擅長以淺顯易懂的方式溝通，將模糊的想法轉化為具體的執行方案。交付的不只是功能，而是一套邏輯嚴謹、穩定好維護，能真正解決問題的商業系統。
                </p>
              </FadeIn>
              <FadeIn variant="fade" delay={250}>
                <p className="font-semibold text-charcoal/90 border-l-4 border-taupe pl-6 py-2">
                  此網站即是最佳實證——從資訊架構梳理、內容策略到全端開發實作，展示我如何協助想快速落地或需要精準規劃的專案順利完成。
                </p>
              </FadeIn>
             </div>

            <FadeIn variant="fade" delay={300}>
              <div className="w-full h-px bg-gradient-to-r from-taupe/40 to-transparent my-8" aria-hidden="true" />
            </FadeIn>

            <FadeIn variant="fade" delay={350}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={PROFILE.contactFormLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contact via Form"
                >
                  <Button variant="primary">
                    <FileText className="w-4 h-4 mr-2" aria-hidden="true" />
                    立即預約
                  </Button>
                </a>
                <Link href="/portfolio" aria-label="View Portfolio">
                  <Button variant="outline">
                    瀏覽作品
                    <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. Philosophy & Methods Section */}
      <section className="px-6 mb-24 bg-white py-24 border-y border-taupe/20" aria-label="Philosophy and Workflow">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <FadeIn variant="up">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-2 flex items-center justify-center gap-3">
                <Heart className="w-8 h-8 text-navy opacity-90" aria-hidden="true" />
                我相信的事 / 我如何工作
              </h2>
              <span className="block text-lg font-medium text-charcoal/80 mb-6">與我合作，您將獲得的價值</span>
              <div className="w-16 h-1 bg-taupe mx-auto rounded-full" aria-hidden="true"></div>
            </FadeIn>
          </div>

          {/* Beliefs Grid */}
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {BELIEFS.map((item, index) => {
              const Icon = item.icon;
              return (
                <li key={`belief-${index}`}>
                  <FadeIn className="h-full" delay={index * 100} variant="fade">
                    <article className="bg-sand p-8 rounded-2xl shadow-sm border border-taupe/60 hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center text-center group">
                       <FadeIn variant="scale" delay={index * 100 + 100}>
                          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 text-navy group-hover:bg-sunfire group-hover:text-white group-hover:scale-110 transition-all duration-300 border border-taupe/20">
                            <Icon className="w-6 h-6" aria-hidden="true" />
                          </div>
                       </FadeIn>
                       <h3 className="text-xl font-bold text-charcoal mb-3 transition-colors">{item.title}</h3>
                       <p className="text-umber leading-relaxed text-sm">
                         {item.desc}
                       </p>
                    </article>
                  </FadeIn>
                </li>
              );
            })}
          </ul>
          
          {/* Methods Grid */}
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {METHODS.map((item, index) => {
              const Icon = item.icon;
              const delay = 300 + (index * 100);
              return (
                <li key={`method-${index}`}>
                  <FadeIn className="h-full" delay={delay} variant="fade">
                    <article className="bg-sand p-8 rounded-2xl shadow-sm border border-taupe/60 hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center text-center group">
                       <FadeIn variant="scale" delay={delay + 100}>
                          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 text-navy group-hover:bg-sunfire group-hover:text-white group-hover:scale-110 transition-all duration-300 border border-taupe/20">
                            <Icon className="w-6 h-6" aria-hidden="true" />
                          </div>
                       </FadeIn>
                       <h3 className="text-xl font-bold text-charcoal mb-3 transition-colors">{item.title}</h3>
                       <p className="text-umber leading-relaxed text-sm">
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
      <section className="px-6 mb-24 relative overflow-hidden py-12" aria-labelledby="skills-heading">
        {/* Background Organic Blob */}
        <div className="absolute -bottom-10 -left-10 w-[15%] sm:w-[35%] h-[80%] bg-taupe rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] blur-3xl opacity-60 -rotate-12 pointer-events-none select-none z-0" aria-hidden="true"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10">
          
          {/* Left: Text Content */}
          <div>
            <FadeIn variant="up">
              <h2 id="skills-heading" className="text-3xl md:text-4xl font-bold text-charcoal mb-2 flex items-center gap-3">
                <Cpu className="w-8 h-8 text-navy opacity-90" aria-hidden="true" />
                技術能力
              </h2>
              <span className="block text-lg font-medium text-charcoal/90 mb-6">打造現代化系統的工具箱</span>
              <div className="w-16 h-1 bg-taupe mb-10 rounded-full" aria-hidden="true"></div>
            </FadeIn>

            <dl className="space-y-8 text-umber leading-relaxed">
              {/* Backend */}
              <FadeIn variant="fade" delay={100}>
                <div className="mb-3 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-leaf/70 shadow-sm shrink-0 opacity-60" aria-hidden="true"></span>
                  <Database className="w-4 h-4 text-navy/60" aria-hidden="true" />
                  <dt className="text-smoke font-bold">後端核心</dt>
                </div>
                <dd className="pl-5">
                  <p>
                    以 Laravel 與 PHP 為主戰場，熟悉 RESTful API 設計與複雜的資料庫關聯 (MySQL / MongoDB)。也能運用 Python / FastAPI 進行輕量級服務開發。
                  </p>
                </dd>
              </FadeIn>

              {/* Frontend */}
              <FadeIn variant="fade" delay={200}>
                <div className="mb-3 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-leaf/70 shadow-sm shrink-0 opacity-60" aria-hidden="true"></span>
                  <Layout className="w-4 h-4 text-navy/60" aria-hidden="true" />
                  <dt className="text-smoke font-bold">前端互動</dt>
                </div>
                <dd className="pl-5">
                  <p>
                    精通 HTML, CSS 與 JavaScript (ES6+)，並熟悉 jQuery 維護舊專案。現代化開發則擅長 Vue.js (Nuxt) 與 Angular，搭配 Tailwind CSS 與 Bootstrap 快速建構 RWD 介面。
                  </p>
                </dd>
              </FadeIn>

              {/* Architecture */}
              <FadeIn variant="fade" delay={300}>
                <div className="mb-3 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-leaf/70 shadow-sm shrink-0 opacity-60" aria-hidden="true"></span>
                  <Server className="w-4 h-4 text-navy/60" aria-hidden="true" />
                  <dt className="text-smoke font-bold">DevOps 與工具</dt>
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
                  <h4 className="text-sm font-bold text-navy/70 uppercase tracking-wider mb-2 pl-1">
                    {group.category}
                  </h4>
                  <div className="flex items-center gap-1 mb-5 ml-1" aria-hidden="true">
                    <div className="h-0.5 bg-taupe/60 rounded-full w-8 sm:w-16 transition-all duration-300 group-hover:w-20"></div>
                  </div>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3" aria-label={`Skills in ${group.category}`}>
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
          <div className="text-center mb-16">
            <FadeIn variant="up">
              <h2 id="experience-heading" className="text-3xl md:text-4xl font-bold text-charcoal mb-2 flex items-center justify-center gap-3">
                <History className="w-8 h-8 text-navy opacity-90" aria-hidden="true" />
                專業經歷
              </h2>
              <span className="block text-lg font-medium text-charcoal/90 mb-6">持續累積的實戰軌跡</span>
              <div className="w-16 h-1 bg-taupe mx-auto rounded-full" aria-hidden="true"></div>
            </FadeIn>
          </div>

          <div className="relative">
            {/* Center Line */}
            <div className="hidden md:block absolute left-24 md:left-32 top-0 bottom-0 w-px bg-taupe/40" aria-hidden="true"></div>

            {/* Desktop View: Timeline */}
            <ol className="hidden md:block space-y-12 py-4">
              {EXPERIENCES.map((exp, index) => (
                <li key={index}>
                  <FadeIn delay={index * 150} variant="fade">
                    <div className="flex items-start group">
                      
                      {/* Left: Year */}
                      <div className="w-24 md:w-32 flex-shrink-0 text-right pt-2 pr-6 md:pr-8 relative z-10">
                        <span className="inline-block px-3 py-1 bg-stone-100 rounded-full text-sm font-semibold text-smoke">
                          {exp.year.split(' - ')[0]}
                        </span>
                      </div>

                      {/* Center: Solid Dot */}
                      <div className="w-3 h-3 rounded-full bg-navy mt-3.5 -ml-1.5 flex-shrink-0 z-20 transition-transform duration-300 group-hover:scale-150" aria-hidden="true"></div>

                      {/* Right: Card */}
                      <article className="flex-1 ml-6 md:ml-10">
                        <div className="bg-beige/50 p-6 rounded-2xl shadow-sm transition-all duration-200 group-hover:shadow-md group-hover:-translate-y-1 cursor-default border border-taupe/30">
                          <h3 className="font-bold text-charcoal text-lg mb-1">{exp.title}</h3>
                          <div className="text-sm font-semibold text-navy/60 mb-3">{exp.company}</div>
                          <p className="text-umber text-sm leading-relaxed line-clamp-2">
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
            <ol className="md:hidden space-y-6">
              {EXPERIENCES.map((exp, index) => (
                <li key={index}>
                  <FadeIn delay={index * 100} variant="fade">
                    <article className="bg-beige p-6 rounded-2xl shadow-sm border border-taupe/30 hover:shadow-md active:scale-[0.98] transition-all duration-200 cursor-default group">
                      {/* Header: Dot + Year */}
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-2 h-2 rounded-full bg-leaf shadow-sm group-hover:scale-125 transition-transform duration-300" aria-hidden="true"></div>
                        <span className="text-sm font-bold text-smoke bg-beige/50 px-2 py-0.5 rounded-md">
                          {exp.year.split(' - ')[0]}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-charcoal mb-1">{exp.title}</h3>
                      <div className="text-sm font-semibold text-sunfire mb-3">{exp.company}</div>
                      <p className="text-umber text-sm leading-relaxed">
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
