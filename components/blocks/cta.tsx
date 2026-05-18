"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/config";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section id="footer-cta" className="relative min-h-screen py-[120px] md:py-[200px] flex flex-col items-center justify-center overflow-hidden cs-02-section-cut-rev" style={{ background: 'radial-gradient(circle at 50% -20%, #1A2635 0%, #0A0C0F 60%)' }}>
      {/* 區塊容器策略：視界線坍縮 (Event Horizon Collapse) */}
      <div className="absolute inset-x-0 top-0 h-[400px] z-20 pointer-events-none flex flex-col items-center overflow-hidden">
        {/* 承接網格消融 - 快速拉伸 */}
        <motion.div 
          initial={{ scaleY: 1, opacity: 0.2 }}
          whileInView={{ scaleY: 8, opacity: 0, y: 300 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full"
          style={{ 
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* 背景：Bg-01 純粹虛空 + An-01 場域光學呼吸 */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% -20%, #1A2635 0%, #0A0C0F 60%)' }} />
        
        {/* An-01 脈動 */}
        <motion.div 
          animate={{ opacity: [0.03, 0.08, 0.03] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,transparent_70%)]"
        />
      </div>

      <div className="container mx-auto px-10 relative z-10 text-center flex flex-col items-center justify-center pt-[11.8vh] pb-48 md:pb-0">
        
        <motion.div
           initial={{ scaleY: 0.8, opacity: 0, filter: "blur(20px)" }}
           whileInView={{ scaleY: 1, opacity: 1, filter: "blur(0px)" }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="flex flex-col items-center"
        >
          
          <h2 className="font-serif text-txt-01 text-[44px] md:text-[60px] lg:text-[68px] font-normal leading-[1.05] mb-10 tracking-tighter">
            把模糊的想法實現。<br />
            妳準備好了嗎？
          </h2>
          
          <p className="font-sans text-txt-02 text-[18px] md:text-[22px] mb-20 font-light max-w-[750px] leading-relaxed border-l border-accent-01/20 pl-8 text-left md:text-center">
            諮詢結束前，你會得到一份精確的想法執行計劃書。
          </p>

          <div className="relative group">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none blur-[60px]" />
            
            <Button variant="primary" size="large" className="h-16 px-10 md:px-16 md:h-18" icon={<ArrowRight className="w-5 h-5" />}>
               準備好了
            </Button>
          </div>
        </motion.div>
      </div>

      {/* [Footer-Minimal] 空間消隱架構 (Retina Afterimage) */}
      <div className="absolute inset-x-0 z-10 px-6 bottom-10 md:bottom-12 md:px-10">
        <div className="container flex flex-col items-start justify-between gap-10 pt-10 mx-auto border-t md:flex-row md:items-end border-white/10">
          <div className="flex flex-col gap-4 text-left group/footer-logo">
            <div className="flex items-center gap-4">
              <span className="relative font-sans text-[22px] text-txt-01 group-hover:text-white transition-colors duration-500 font-black tracking-[0.2em] uppercase overflow-hidden leading-none">
                魚也是貓
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none -skew-x-12 translate-x-[-100%] group-hover/footer-logo:translate-x-[200%] transition-transform duration-1000" />
              </span>
              
              {/* Footer 機械節點：精密旋轉鑽石 (碳素陶瓷質感) */}
              <div className="relative flex items-center justify-center w-4 h-4">
                  <svg className="absolute inset-0 w-full h-full -rotate-45" viewBox="0 0 16 16">
                    <rect
                      x="1" y="1" width="14" height="14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      className="transition-colors duration-700 text-primary-01/30 group-hover/footer-logo:text-primary-01/50"
                    />
                    {/* 單向慢速位移亮點 */}
                    <motion.rect
                      x="1" y="1" width="14" height="14"
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="1"
                      strokeDasharray="4 12"
                      animate={{ 
                        strokeDashoffset: [0, -16]
                      }}
                      transition={{ 
                        duration: 4, 
                        ease: "linear", 
                        repeat: Infinity 
                      }}
                      className="opacity-40"
                    />
                  </svg>
                  <div className="w-[3px] h-[3px] bg-primary-01/40 group-hover/footer-logo:bg-primary-01 group-hover/footer-logo:scale-125 transition-all duration-500 z-10" />
              </div>
            </div>
            
            <span className="font-sans text-[12px] tracking-widest text-txt-01 uppercase font-medium opacity-80 group-hover/footer-logo:opacity-100 transition-opacity">
               技術不該是負擔 ・ 交給妳一個乾淨、聽話的系統
            </span>
          </div>

          <div className="flex flex-wrap items-center mb-2 gap-x-8 gap-y-4 md:gap-6">
            <a href={SITE_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer" className="relative py-2 group">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-accent-01/30 rotate-45 group-hover:bg-accent-01 group-hover:shadow-[0_0_12px_theme(colors.accent-01)] transition-all duration-500" />
                <span className="font-sans text-[13px] font-black tracking-[0.5em] text-txt-02 group-hover:text-txt-01 transition-colors px-1">INSTAGRAM</span>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-accent-01/10 overflow-hidden">
                <div className="w-full h-full bg-accent-01 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-700 ease-[0.16,1,0.3,1]" />
              </div>
            </a>

            <div className="hidden md:block w-[1px] h-4 bg-primary-01/20" />

            <a href={SITE_CONFIG.social.threads} target="_blank" rel="noopener noreferrer" className="relative py-2 group">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-accent-01/30 rotate-45 group-hover:bg-accent-01 group-hover:shadow-[0_0_12px_theme(colors.accent-01)] transition-all duration-500" />
                <span className="font-sans text-[13px] font-black tracking-[0.5em] text-txt-02 group-hover:text-txt-01 transition-colors px-1">THREADS</span>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-accent-01/10 overflow-hidden">
                <div className="w-full h-full bg-accent-01 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-700 ease-[0.16,1,0.3,1]" />
              </div>
            </a>

            <div className="hidden md:block w-[1px] h-4 bg-primary-01/20" />

            <a href={SITE_CONFIG.social.facebook} target="_blank" rel="noopener noreferrer" className="relative py-2 group">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-accent-01/30 rotate-45 group-hover:bg-accent-01 group-hover:shadow-[0_0_12px_theme(colors.accent-01)] transition-all duration-500" />
                <span className="font-sans text-[13px] font-black tracking-[0.5em] text-txt-02 group-hover:text-txt-01 transition-colors px-1">FACEBOOK</span>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-accent-01/10 overflow-hidden">
                <div className="w-full h-full bg-accent-01 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-700 ease-[0.16,1,0.3,1]" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}