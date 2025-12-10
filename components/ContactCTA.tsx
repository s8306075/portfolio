import Button from './Button';
import { Mail, ArrowRight, MessageSquare, Briefcase, Code, Heart, Wrench, Settings } from 'lucide-react';
import { PROFILE } from '../constants';
import Link from "next/link";
import FadeIn from './FadeIn';

// Helper for internal linking with button style
const LinkButton = ({ to, children, variant, ...props }: any) => (
  <Link href={to}>
    <Button variant={variant} {...props}>{children}</Button>
  </Link>
);

interface ContactCTAProps {
  variant?: 'home' | 'portfolio' | 'services' | 'about';
}

const ContactCTA = ({ variant = 'home' }: ContactCTAProps) => {
  
  // Configuration for each variant
  const config = {
    home: {
      containerStyle: "bg-gradient-to-br from-taupe/20 to-white border border-taupe/20 shadow-sm",
      icon: MessageSquare,
      iconColor: "text-navy",
      iconBg: "bg-white",
      title: "準備好梳理你的需求了嗎？",
      desc: "專案常常卡在「不知道從何下手」。讓我協助你將複雜的想法收斂為明確的執行步驟，打造穩定好用的系統。",
      primaryBtnText: "聯絡我",
      secondaryBtnText: "瀏覽作品集",
      secondaryBtnLink: "/portfolio",
      decor: "warm-glow"
    },
    portfolio: {
      containerStyle: "bg-sand border border-navy/20 shadow-sm",
      icon: Code,
      iconColor: "text-navy",
      iconBg: "bg-white",
      title: "想打造同樣穩健的數位資產？",
      desc: "好的系統不只功能強大，更要穩定好維護。讓我協助你建立可靠的系統架構，為長遠發展打好地基。",
      primaryBtnText: "聯絡我",
      secondaryBtnText: "查看更多服務",
      secondaryBtnLink: "/services",
      decor: "clean"
    },
    services: {
      containerStyle: "bg-beige border border-taupe/20 shadow-sm relative overflow-hidden",
      icon: Settings,
      iconColor: "text-sunfire",
      iconBg: "bg-sunfire-50",
      title: "從「想法」到「落地」",
      desc: "每個偉大的系統都始於一次深度的對談。告訴我你的商業目標，我們一起規劃出最適合的技術路徑。",
      primaryBtnText: "聯絡我討論需求",
      secondaryBtnText: "查看作品案例",
      secondaryBtnLink: "/portfolio",
      decor: "texture"
    },
    about: {
      containerStyle: "bg-taupe/15 shadow-inner border border-transparent",
      icon: Heart,
      iconColor: "text-sunfire",
      iconBg: "bg-white",
      title: "找一位能聽懂人話的合作夥伴",
      desc: "無論是全新構想或系統優化，我都願意先聆聽你的困擾，再提供專業的建議。讓我們聊聊吧！",
      primaryBtnText: "聯絡我",
      secondaryBtnText: "瀏覽作品",
      secondaryBtnLink: "/portfolio",
      decor: "vignette"
    }
  };

  const currentConfig = config[variant];
  const Icon = currentConfig.icon;

  return (
    <section className="w-full" aria-label="Contact Call to Action">
      <div className={`max-w-7xl mx-auto rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden ${currentConfig.containerStyle}`}>
        
        {/* Decorative Elements based on variant */}
        {currentConfig.decor === 'warm-glow' && (
           <div className="absolute top-0 right-0 w-96 h-96 bg-taupe/30 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
        )}
        {currentConfig.decor === 'texture' && (
           <div className="absolute inset-0 bg-taupe/5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#E8E4DC 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        )}
        {currentConfig.decor === 'vignette' && (
           <div className="absolute inset-0 bg-gradient-to-b from-transparent to-taupe/10 pointer-events-none"></div>
        )}

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeIn variant="up">
            <div className={`w-16 h-16 ${currentConfig.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm`}>
               <Icon className={`w-8 h-8 ${currentConfig.iconColor}`} aria-hidden="true" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 leading-tight">
              {currentConfig.title}
            </h2>
            <p className="text-lg text-charcoal/80 font-medium mb-8 block max-w-2xl mx-auto leading-relaxed">
              {currentConfig.desc}
            </p>
            <div className="w-16 h-1 bg-sunfire mx-auto rounded-full mb-10 opacity-80"></div>
          </FadeIn>
          
          <FadeIn variant="fade" delay={150}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={`mailto:${PROFILE.email}`} aria-label={currentConfig.primaryBtnText}>
                <Button variant="primary">
                  <Mail className="w-4 h-4 mr-2" />
                  {currentConfig.primaryBtnText}
                </Button>
              </a>
              <LinkButton to={currentConfig.secondaryBtnLink} variant="outline" aria-label={currentConfig.secondaryBtnText}>
                {currentConfig.secondaryBtnText}
                <ArrowRight className="w-4 h-4 ml-2" />
              </LinkButton>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;