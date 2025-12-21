import ProjectCard from '@/components/ProjectCard';
import ContactCTA from '@/components/ContactCTA';
import FadeIn from '@/components/FadeIn';
import { PROJECTS, PROFILE } from '@/constants';

export const metadata = {
  title: '精選作品集 | Alex Chen - 全端開發實戰案例',
  description: '瀏覽我如何運用技術解決真實問題。收錄了行政自動化系統、投資數據儀表板與CRM整合平台的開發實戰案例。',
  openGraph: {
    title: '精選作品集 | Alex Chen',
    description: '瀏覽我如何運用技術解決真實問題。',
    url: `${PROFILE.website}/portfolio`,
    type: 'website',
  },
};
const Portfolio = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "魚也是貓的作品集 - 全端系統開發案例",
    "description": "瀏覽魚也是貓的精選作品，包含自動化工具、商業數據儀表板與CRM系統開發案例。",
    "url": `${PROFILE.website}/#/portfolio`,
    "hasPart": PROJECTS.map((p) => ({
      "@type": "CreativeWork",
      "name": p.title,
      "description": p.shortDesc
    }))
  };

  return (
    <div className="pt-24 min-h-screen bg-bgMain">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="px-6 mb-16" aria-label="Portfolio Header">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn variant="up">
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-2">
              精選實戰案例
            </h1>
            <p className="text-lg text-charcoal/90 font-medium mb-6">
              展示從需求到完成的真實專案，記錄每個過程中的決策與思路。
            </p>
            <div className="w-16 h-1 bg-taupe mx-auto rounded-full mb-8"></div>
          </FadeIn>
          <FadeIn variant="fade" delay={150}>
            <p className="text-lg text-charcoal/90 max-w-2xl mx-auto leading-relaxed">
              每個專案都記錄了解決問題的過程，從釐清需求到建立穩定可維護的系統。<br />
              透過案例可以看到如何將想法整理成清晰、可執行的數位工具，幫助專案順利落地。
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="px-6 pb-24 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <FadeIn key={project.id} delay={index * 100} variant="fade" className="h-full">
            <ProjectCard project={project} />
          </FadeIn>
        ))}
      </section>

      {/* CTA */}
      <FadeIn variant="fade">
        <div className="px-6 pb-24">
           <ContactCTA variant="portfolio" />
        </div>
      </FadeIn>
    </div>
  );
};

export default Portfolio;
