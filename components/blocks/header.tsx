"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const NAV_ITEMS = [
  { name: "專業服務", href: "#services", code: "01" },
  { name: "合作流程", href: "#workflow", code: "02" },
  { name: "案例展示", href: "#cases", code: "03" }
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsub = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
    return () => unsub();
  }, [scrollY]);

  return (
    <>
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-[150] h-20 flex items-center transition-all duration-700",
        isScrolled 
          ? "bg-bg-02/95 backdrop-blur-md border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.8)]" 
          : "bg-transparent"
      )}
    >
      {/* 底部自主能量線 */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/5 overflow-hidden pointer-events-none">
        <motion.div
           animate={{ x: ["-100%", "100%"] }}
           transition={{ duration: 15, ease: "linear", repeat: Infinity }}
           className="w-[30%] h-full opacity-40"
           style={{
             background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.6) 50%, transparent 100%)",
           }}
        />
      </div>

      <div className="container relative flex items-center justify-between h-full px-6 mx-auto lg:px-12">
        {/* 背景微觀質地：冷核聚變 (Nuclear Vibration) */}
        {isScrolled && (
          <motion.div 
            animate={{ opacity: [0.03, 0.05, 0.03] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 pointer-events-none" 
          />
        )}
        <Logo />

        {/* 桌面端選單 */}
        <nav className="items-center hidden gap-12 lg:flex">
          <div className="flex items-center gap-10">
            {NAV_ITEMS.map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
          </div>
          
          <div className="h-4 w-[1px] bg-white/10 mx-2" />

          {/* 導覽按鈕 */}
          <div className="relative group">
             <Button 
                variant="primary" 
                size="small" 
                className="h-10 px-8"
                onClick={() => {
                  const el = document.getElementById('footer-cta');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  else window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                }}
                icon={<ArrowRight className="w-3.5 h-3.5" />}
             >
                開始諮詢
             </Button>
          </div>
        </nav>

        {/* 行動端選單觸發器 */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={cn(
            "lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-[6px] group transition-all duration-300",
            isMobileMenuOpen ? "z-[210]" : "z-[110]"
          )}
          aria-label="Toggle Menu"
        >
          <motion.span 
            animate={{ 
              width: "24px",
              rotate: isMobileMenuOpen ? 45 : 0,
              y: isMobileMenuOpen ? 4 : 0,
              backgroundColor: "var(--color-primary-01-bright)",
              opacity: isMobileMenuOpen ? 1 : (isScrolled ? 0.4 : 1),
            }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="h-[1.5px] bg-primary-01-bright transform-gpu origin-center" 
          />
          <motion.span 
            animate={{ 
              width: "24px",
              rotate: isMobileMenuOpen ? -45 : 0,
              y: isMobileMenuOpen ? -4 : 0,
              backgroundColor: "var(--color-primary-01-bright)",
            }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="h-[1.5px] bg-primary-01-bright transform-gpu origin-center" 
          />
        </button>
      </div>

    </motion.header>

    <AnimatePresence>
      {isMobileMenuOpen && (
        <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />
      )}
    </AnimatePresence>
  </>
  );
}

function Logo() {
  const [isHovered, setIsHovered] = useState(false);

  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.div 
      initial={{ y: 12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={handleLogoClick}
      className="relative flex items-center gap-5 cursor-pointer group"
    >
      <div className="relative flex items-center gap-4">
        {/* 精確定義：品牌主文字（銠金屬質地模擬） */}
        <span className="relative font-sans font-black text-[18px] lg:text-[20px] tracking-[0.2em] leading-none uppercase overflow-hidden">
          <span className="transition-colors duration-500 text-txt-01 group-hover:text-white">
            魚也是貓
          </span>
          {/* 金屬反光位移：靜止時極細微，Hover 時掃過一次 */}
          <motion.div 
            animate={{ 
              x: isHovered ? ["-100%", "200%"] : "-100%" 
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 -skew-x-12 pointer-events-none bg-gradient-to-r from-transparent via-white/30 to-transparent"
          />
        </span>

        {/* 機械節點：精密旋轉鑽石 (碳素陶瓷質感) */}
        <div className="relative flex items-center justify-center w-4 h-4">
            {/* 外框：結構應力追蹤 (Structural Stress Tracking) */}
            <svg className="absolute inset-0 w-full h-full -rotate-45" viewBox="0 0 16 16">
              <motion.rect
                x="1" y="1" width="14" height="14"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-primary-01/30"
                animate={{ 
                  rotate: isHovered ? 90 : 0,
                }}
                transition={{ type: "spring", damping: 20, stiffness: 100 }}
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
            
            {/* 核心點：鈦金諧振 (Harmonic Titanium Resonance) */}
            <motion.div 
                animate={{ 
                    rotate: isHovered ? -45 : 45,
                    scale: isHovered ? [1, 1.3, 1.2] : 1,
                    backgroundColor: isHovered ? "var(--color-primary-01-bright)" : "var(--color-primary-01)"
                }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="w-[3px] h-[3px] bg-primary-01 z-10"
            />
        </div>
      </div>

      {/* 結構應力線 (物理性邊緣亮點) */}
      <motion.div 
        animate={{ 
            scaleX: isHovered ? 1 : 0,
            opacity: isHovered ? 0.8 : 0
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -bottom-1 left-0 right-0 h-[0.5px] bg-primary-01 origin-left"
      />
    </motion.div>
  );
}

function NavItem({ item }: { item: { name: string; href: string; code: string } }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const targetId = item.href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const offset = 80; // Header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.a
      href={item.href}
      onClick={handleClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative flex items-center px-3 py-1 cursor-pointer group/nav-item"
    >
      {/* 序列編號：提升靜態對比度，加強引導作用 */}
      <span className={cn(
        "font-mono text-[10px] mr-2 transition-all duration-500",
        isHovered ? "text-primary-01" : "text-primary-01/80"
      )}>
        {item.code}
      </span>

      {/* 主文字：優化靜態可讀性，移除過度弱化 */}
      <span className={cn(
        "relative z-10 font-sans font-medium text-[14px] lg:text-[15px] tracking-[0.2em] transition-all duration-500",
        isHovered ? "text-white translate-y-[-1px]" : "text-txt-01"
      )}>
        {item.name}
        
        {/* 高剛性切入線 (利刃鎖定) */}
        <motion.div 
          animate={{ 
            scaleX: isHovered ? 1 : 0,
            opacity: isHovered ? 1 : 0 
          }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="absolute -bottom-1 inset-x-0 h-[0.5px] bg-primary-01 origin-left"
        />
      </span>
    </motion.a>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[200] lg:hidden overflow-hidden">
      {/* 全屏暗色遮罩 (不位移，作為底色) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-bg-01/20 backdrop-blur-[2px] cursor-pointer"
      />

      {/* 獨立位移遮罩 (1/3 淺色遮罩 + 格柵) */}
      <motion.div 
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: -10 }}
        exit={{ opacity: 0, x: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        onClick={onClose}
        className="absolute inset-y-0 left-0 right-[280px] sm:right-[320px] pointer-events-none"
      >
        <div className="absolute inset-0 bg-white/[0.02] border-r border-white/5" />
        <div className="absolute inset-0 opt-03-grid opacity-[0.05]" />
      </motion.div>

      {/* 右側滑出選單 */}
      <motion.div 
        initial={{ x: "100%" }}
        animate={{ x: "0%" }}
        exit={{ x: "100%" }}
        transition={{ 
          type: "spring",
          damping: 40,
          stiffness: 300,
          mass: 1
        }}
        className="absolute top-0 right-0 bottom-0 w-[280px] sm:w-[320px] bg-bg-02 flex flex-col border-l border-white/10 shadow-[-40px_0_80px_rgba(0,0,0,0.95)]"
      >
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none mat-05-satin" />
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        
        <div className="relative z-10 flex flex-col flex-1 p-8 pt-20">
          <div className="flex flex-col gap-0.5 relative z-10 mb-8">
            {NAV_ITEMS.map((item, idx) => (
              <MobileNavItem key={item.name} item={item} index={idx} onClose={onClose} />
            ))}
          </div>

          <div className="pb-10 mt-auto">
            <div className="mb-6 h-[1px] bg-primary-01/10 w-full" />
            <MobileCTA />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-gradient-to-t from-state-04/10 to-transparent pointer-events-none" />
      </motion.div>
    </div>
  );
}

function MobileNavItem({ item, index, onClose }: { item: { name: string; href: string; code: string }; index: number; onClose: () => void }) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClose();
    
    // Delay to let the menu close animation start or complete
    setTimeout(() => {
      const targetId = item.href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 300);
  };

  return (
    <motion.a
      href={item.href}
      onClick={handleClick}
      initial={{ x: 10, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: index * 0.05, duration: 0.4, ease: "easeOut" }}
      className="relative flex items-center justify-between px-4 py-5 transition-colors border-b group border-white/5 active:bg-white/5"
    >
      <div className="flex items-center gap-8">
        <span className="font-mono text-[10px] text-txt-04 tracking-tighter mt-1">{item.code}</span>
        <span className="text-txt-01 font-sans font-black text-[18px] tracking-[0.3em] transition-colors duration-400 group-active:text-secondary-01">
          {item.name}
        </span>
      </div>
    </motion.a>
  );
}

function MobileCTA() {
  return (
    <div className="relative flex justify-center w-full px-4 group">
      <Button 
        variant="primary" 
        size="large"
        className="w-full tracking-[0.2em] text-[15px] font-black"
        onClick={() => {
          const el = document.getElementById('footer-cta');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
          else window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        }}
      >
        開始諮詢
      </Button>
    </div>
  );
}