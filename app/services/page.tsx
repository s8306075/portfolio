import { SERVICES, PROFILE } from '@/constants';
import FadeIn from '@/components/FadeIn';
import ContactCTA from '@/components/ContactCTA';
import { Check, Briefcase, GitMerge } from 'lucide-react';

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
    title: '深度對焦與需求釐清', 
    eng: 'Discovery', 
    desc: '我不急著談技術，而是先聽懂你的商業目標。透過有邏輯的提問，幫你把模糊的想法，收斂成具體可執行的規格。' 
  },
  { 
    title: '邏輯梳理與架構規劃', 
    eng: 'Planning', 
    desc: '這是最關鍵的一步。我將你的需求轉化為清晰的開發藍圖與功能清單，確保我們對成品的想像完全一致，不走冤枉路。' 
  },
  { 
    title: '穩健開發與階段回報', 
    eng: 'Development', 
    desc: '告別黑箱作業。我採用小步驟迭代的方式開發，定期讓你看到進度與成果，確保每一個環節都穩扎穩打，符合預期。' 
  },
  { 
    title: '完整交付與技術移轉', 
    eng: 'Delivery', 
    desc: '不只給你程式碼，更給你一套好用的工具。包含完整的測試、部署與操作文件，讓你無痛接手，系統上線即刻發揮價值。' 
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

      {/* Services Header */}
      <section className="px-6 mb-20" aria-labelledby="services-list-heading">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn variant="up">
            <h2 id="services-list-heading" className="text-3xl md:text-5xl font-bold text-charcoal mb-2 flex items-center justify-center gap-3">
              <Briefcase className="w-8 h-8 text-navy opacity-90" aria-hidden="true" />
              穩定交付，流程清晰
            </h2>
            <p className="text-lg text-charcoal/90 font-medium mb-6">
              你不需要想得很完整，我會先聽，再幫你整理成能做的方向
            </p>
            <div className="w-16 h-1 bg-sunfire mx-auto rounded-full mb-8" aria-hidden="true"></div>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 mb-24" aria-label="Service Offerings">
        <ul className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <li key={service.id}>
                <FadeIn delay={index * 150} variant="fade" className="h-full">
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-transparent hover:border-taupe hover:shadow-xl transition-all duration-300 flex flex-col items-start h-full group">
                    <FadeIn variant="scale" delay={index * 150 + 100}>
                      <div className="w-14 h-14 bg-sand rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-navy">
                        <Icon className="w-6 h-6 transition-colors" aria-hidden="true" />
                      </div>
                    </FadeIn>
                    <FadeIn variant="up" delay={index * 150 + 200}>
                      <h3 className="text-xl font-bold text-charcoal mb-4">{service.title}</h3>
                    </FadeIn>
                    <p className="text-umber leading-relaxed mb-6 flex-grow">
                      {service.description}
                    </p>
                    <ul className="mt-auto space-y-2 text-sm text-slate-600" aria-label={`${service.title} capabilities`}>
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <Check className="w-4 h-4 text-leaf mr-2 flex-shrink-0" aria-hidden="true" />
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
      </section>

      {/* Process Section */}
      <section className="px-6 mb-24" aria-labelledby="process-heading">
        <div className="max-w-7xl mx-auto bg-white rounded-[2.5rem] shadow-sm hover:shadow-md transition-shadow duration-500 p-8 md:p-16 relative overflow-hidden border border-taupe/20">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-sunfire-50 rounded-full blur-3xl opacity-50 pointer-events-none" aria-hidden="true"></div>
          <div className="relative z-10">
            <div className="text-center mb-16">
              <FadeIn variant="up">
                <h2 id="process-heading" className="text-3xl md:text-4xl font-bold text-charcoal mb-2 flex items-center justify-center gap-3">
                  <GitMerge className="w-8 h-8 text-navy opacity-90" aria-hidden="true" />
                  合作流程
                </h2>
                <span className="block text-lg font-medium text-charcoal/90 mb-6">透明且高效的專案執行步驟</span>
                <div className="w-16 h-1 bg-sunfire mx-auto rounded-full" aria-hidden="true"></div>
              </FadeIn>
            </div>

            <ol className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              <div className="hidden md:block absolute top-14 left-0 w-full h-0.5 bg-taupe -z-10" aria-hidden="true"></div>
              <div className="md:hidden absolute top-14 bottom-14 left-1/2 -translate-x-1/2 w-0.5 bg-taupe -z-10" aria-hidden="true"></div>
              {PROCESS_STEPS.map((step, idx) => (
                <li key={idx} className="h-full">
                  <FadeIn delay={idx * 150} variant="fade" className="h-full">
                    <div className="flex flex-col items-center text-center group h-full p-6 rounded-2xl hover:bg-sunfire-50/30 transition-all duration-300 hover:shadow-sm bg-white md:bg-transparent">
                      <div className="relative mb-6">
                        <FadeIn variant="scale" delay={idx * 150 + 100}>
                          <div className="w-16 h-16 rounded-full bg-navy text-white flex items-center justify-center text-xl font-bold shadow-lg shadow-navy/20 group-hover:scale-110 group-hover:bg-sunfire group-hover:shadow-sunfire/30 transition-all duration-300 relative z-10">
                            {idx + 1}
                          </div>
                        </FadeIn>
                      </div>
                      <FadeIn variant="up" delay={idx * 150 + 200}>
                        <h3 className="text-xl font-bold text-charcoal mb-1">{step.title}</h3>
                        <span className="text-xs text-sunfire font-bold tracking-wide uppercase mb-4 block opacity-80">{step.eng}</span>
                        <p className="text-umber text-sm leading-relaxed">
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
