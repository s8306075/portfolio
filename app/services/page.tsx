import { SERVICES, PROFILE } from '@/constants';
import FadeIn from '@/components/FadeIn';
import ContactCTA from '@/components/ContactCTA';
import { Check, GitMerge, Briefcase, Target, ShieldCheck, Search } from 'lucide-react';

export const metadata = {
  title: '專業服務項目 | Alex Chen - 系統整合與網站開發',
  description: '提供網站開發、API 系統整合、流程自動化與 Dashboard 資料視覺化服務。協助企業將模糊需求轉化為穩健的執行藍圖。',
  openGraph: {
    title: '專業服務項目 | Alex Chen',
    description: '提供網站開發、API 系統整合與自動化服務。',
    url: `${PROFILE.website}/services`,
    type: 'website',
  },
};

const PROCESS_STEPS = [
  { 
    title: '先聽懂你的商業目標', 
    eng: 'Discovery', 
    desc: '先理解你的痛點，把模糊想法收斂為可執行需求。' 
  },
  { 
    title: '轉化為邏輯清晰的藍圖', 
    eng: 'Planning', 
    desc: '將需求整理為完整開發規格與架構圖，確保雙方想像一致。' 
  },
  { 
    title: '透明且有節奏的開發', 
    eng: 'Development', 
    desc: '小步迭代，隨時掌握進度，降低專案風險。' 
  },
  { 
    title: '交付好用的工具', 
    eng: 'Delivery', 
    desc: '完整測試與操作說明，確保系統上線即可立即使用。' 
  }
];

const Services = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "全端系統開發服務 | 魚也是貓",
    "description": "提供客製化網站開發、API 系統整合、自動化流程與資料視覺化服務。專注於打造穩健、好維護的商業系統。",
    "url": `${PROFILE.website}/services`,
    "provider": {
      "@type": "Person",
      "name": PROFILE.name
    },
    "serviceType": SERVICES.map((s) => s.title)
  };

  return (
    <div className="pt-24 min-h-screen bg-beige">
      {/* SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header Section */}
      <section className="px-6 mb-16" aria-labelledby="services-hero-heading">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn variant="up">
            <h1 id="services-hero-heading" className="text-3xl md:text-5xl font-bold text-navy mb-3 flex items-center justify-center gap-3">
              <Briefcase className="w-8 h-8 text-navy/80" aria-hidden="true" />
              穩定交付，流程清晰
            </h1>
            <p className="text-lg text-stone-600 font-medium mb-8">
              你不需要想得很完整，我會先聽，再幫你整理成能做的方向
            </p>
            <div className="w-16 h-1 bg-taupe mx-auto rounded-full" aria-hidden="true"></div>
          </FadeIn>
        </div>
      </section>

      {/* 1. Alignment: Ideal Partners Section */}
      <section className="px-6 mb-16" aria-labelledby="alignment-heading">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Ideal for (Positive Selection) */}
            <FadeIn variant="fade" className="h-full">
              <div className="bg-white p-10 rounded-[2.5rem] border border-taupe/20 shadow-sm h-full flex flex-col">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-leaf/10 rounded-full flex items-center justify-center text-leaf">
                    <Check className="w-5 h-5" />
                  </div>
                  <h2 id="alignment-heading" className="text-xl font-bold text-navy">核心理念對齊</h2>
                </div>
                <ul className="space-y-6 flex-grow">
                  <li className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-leaf/40 mt-2.5 shrink-0"></div>
                    <p className="text-stone-600 leading-relaxed font-medium">重視系統的長期穩定性，勝過短期花哨功能。</p>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-leaf/40 mt-2.5 shrink-0"></div>
                    <p className="text-stone-600 leading-relaxed font-medium">希望技術夥伴能理解你的商業目標，而不只是完成程式指令。</p>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-leaf/40 mt-2.5 shrink-0"></div>
                    <p className="text-stone-600 leading-relaxed font-medium">需求尚模糊，需要專家協助整理、收斂與梳理邏輯的專案負責人。</p>
                  </li>
                </ul>
              </div>
            </FadeIn>

            {/* Recommended Situations (Positivized Tone) */}
            <FadeIn variant="fade" delay={150} className="h-full">
              <div className="bg-sand p-10 rounded-[2.5rem] border border-taupe/10 h-full flex flex-col opacity-90">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-stone-200 rounded-full flex items-center justify-center text-stone-500">
                    <Target className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold text-stone-600">建議合作的情境</h2>
                </div>
                <ul className="space-y-6 flex-grow">
                  <li className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2.5 shrink-0"></div>
                    <p className="text-stone-500 leading-relaxed">若專案只需要純代碼代工，且不希望開發者參與需求討論。</p>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2.5 shrink-0"></div>
                    <p className="text-stone-500 leading-relaxed">預算極低、追求「快就好」，而非長期可擴充維護的專案。</p>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2.5 shrink-0"></div>
                    <p className="text-stone-500 leading-relaxed">需求完全固定，不接受任何優化或架構建議。</p>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. How I help: Value Proposition Section */}
      <section className="px-6 mb-16 py-12 bg-white border-y border-taupe/10" aria-labelledby="how-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <FadeIn variant="up">
              <h2 id="how-heading" className="text-2xl md:text-3xl font-bold text-navy mb-4">我如何幫你把專案從混亂變有序</h2>
              <div className="w-12 h-1 bg-taupe mx-auto rounded-full"></div>
            </FadeIn>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: Search,
                title: "需求收斂",
                desc: "我會陪你把「想要的功能」轉化為「真正需要的業務邏輯」，避免過度開發與浪費。"
              },
              {
                icon: Target,
                title: "邏輯對焦",
                desc: "透過流程圖與白話說明，確認每個運作細節，確保成品與你的想像完全一致。"
              },
              {
                icon: ShieldCheck,
                title: "風險預判",
                desc: "提前發現架構擴充瓶頸與可能風險，確保專案穩定進行，讓你安心專注核心業務。"
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <FadeIn key={idx} delay={idx * 100} variant="up">
                  <div className="text-center group p-6">
                    <div className="w-16 h-16 bg-beige rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-all text-navy shadow-sm">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-charcoal mb-4">{item.title}</h3>
                    <p className="text-stone-600 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Services List */}
      <section className="px-6 mb-16" aria-labelledby="services-list-heading">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <FadeIn variant="up">
              <h2 id="services-list-heading" className="text-2xl md:text-3xl font-bold text-navy">提供的具體服務</h2>
              <div className="w-12 h-1 bg-taupe mx-auto rounded-full mt-4"></div>
            </FadeIn>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {SERVICES.map((service, index) => {
              const Icon = service.icon;
              return (
                <li key={service.id}>
                  <FadeIn delay={index * 150} variant="fade" className="h-full">
                    <div className="bg-white p-10 rounded-3xl shadow-sm border border-transparent hover:border-taupe hover:shadow-lg transition-all duration-300 flex flex-col items-start h-full group">
                      <FadeIn variant="scale" delay={index * 150 + 100}>
                        <div className="w-16 h-16 bg-sand rounded-2xl flex items-center justify-center mb-8 group-hover:scale-105 transition-transform text-navy">
                          <Icon className="w-7 h-7 transition-colors" aria-hidden="true" />
                        </div>
                      </FadeIn>
                      <FadeIn variant="up" delay={index * 150 + 200}>
                        <h3 className="text-xl font-bold text-navy mb-5">{service.title}</h3>
                      </FadeIn>
                      <p className="text-stone-600 leading-relaxed mb-8 flex-grow">
                        {service.description}
                      </p>
                      <ul className="mt-auto space-y-3 text-sm text-stone-500" aria-label={`${service.title} capabilities`}>
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <Check className="w-4 h-4 text-leaf/80 mr-3 flex-shrink-0" aria-hidden="true" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </FadeIn>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* 4. Process Section */}
      <section className="px-6 mb-16" aria-labelledby="process-heading">
        <div className="max-w-7xl mx-auto bg-white rounded-[2.5rem] shadow-sm hover:shadow-md transition-shadow duration-700 p-10 md:p-20 relative overflow-hidden border border-taupe/20">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-taupe/10 rounded-full blur-3xl opacity-50 pointer-events-none" aria-hidden="true"></div>
          <div className="relative z-10">
            <div className="text-center mb-12">
              <FadeIn variant="up">
                <h2 id="process-heading" className="text-3xl md:text-4xl font-bold text-navy mb-3 flex items-center justify-center gap-3">
                  <GitMerge className="w-8 h-8 text-navy/80" aria-hidden="true" />
                  合作流程
                </h2>
                <span className="block text-lg font-medium text-stone-600 mb-8">融入價值訴求的開發節奏</span>
                <div className="w-16 h-1 bg-taupe mx-auto rounded-full" aria-hidden="true"></div>
              </FadeIn>
            </div>
            <ol className="grid grid-cols-1 md:grid-cols-4 gap-10 relative">
              <div className="hidden md:block absolute top-14 left-0 w-full h-0.5 bg-taupe/50 -z-10" aria-hidden="true"></div>
              <div className="md:hidden absolute top-14 bottom-14 left-1/2 -translate-x-1/2 w-0.5 bg-taupe/30 -z-10" aria-hidden="true"></div>
              {PROCESS_STEPS.map((step, idx) => (
                <li key={idx} className="h-full">
                  <FadeIn delay={idx * 150} variant="fade" className="h-full">
                    <div className="flex flex-col items-center text-center group h-full p-6 rounded-2xl hover:bg-sand/30 transition-all duration-300 bg-white md:bg-transparent">
                      <div className="relative mb-8">
                         <FadeIn variant="scale" delay={idx * 150 + 100}>
                           <div className="w-16 h-16 rounded-full bg-navy text-white flex items-center justify-center text-xl font-bold shadow-md shadow-navy/20 group-hover:scale-105 transition-all duration-300 relative z-10 border-4 border-beige">
                             {idx + 1}
                           </div>
                         </FadeIn>
                      </div>
                      <FadeIn variant="up" delay={idx * 150 + 200}>
                        <h3 className="text-xl font-bold text-navy mb-2">{step.title}</h3>
                        <span className="text-xs text-stone-400 font-bold tracking-wide uppercase mb-5 block opacity-80">{step.eng}</span>
                        <p className="text-stone-600 text-sm leading-relaxed font-medium">
                          {step.desc}
                        </p>
                      </FadeIn>
                    </div>
                  </FadeIn>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Services CTA */}
      <section className="px-6 pb-24">
        <FadeIn variant="fade" delay={300}>
          <ContactCTA variant="services" />
        </FadeIn>
      </section>
    </div>
  );
};

export default Services;
