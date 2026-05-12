"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const NAV_ITEMS = [
  { name: "專業服務", href: "#services", code: "01" },
  { name: "合作流程", href: "#workflow", code: "02" },
  { name: "案例展示", href: "#cases", code: "03" },
  // { name: "診斷", href: "#anchor", code: "04" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    // 確保偽單頁架構下的初始座標純淨：進入頁面強制回歸頂部且清空 Hash
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname);
      }
    }

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
          ? "bg-bg-02 border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.8)]" 
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

      <div className="container mx-auto px-6 lg:px-12 h-full flex items-center justify-between relative">
        {/* 背景微觀質地 */}
        {isScrolled && (
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
        )}
        <Logo />

        {/* 桌面端選單 */}
        <nav className="hidden lg:flex items-center gap-12">
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
             >
                啟動診斷
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
      className="flex items-center gap-5 cursor-pointer group relative"
    >
      <div className="relative w-4 h-6">
        <motion.div 
          animate={{ 
            y: isHovered ? -2 : 0, 
            backgroundColor: isHovered ? "var(--color-primary-01-bright)" : "var(--color-primary-01)" 
          }}
          transition={{ ease: [0.34, 1.56, 0.64, 1], duration: 0.4 }}
          className="absolute top-0 left-0 w-[1px] h-[24px]"
        />
        <motion.div 
          animate={{ 
            y: isHovered ? -15 : 0, 
            backgroundColor: isHovered ? "var(--color-primary-01-bright)" : "var(--color-primary-01)"
          }}
          style={{ top: "13px", left: "6px" }}
          transition={{ ease: [0.34, 1.56, 0.64, 1], duration: 0.4 }}
          className="absolute w-[1px] h-[12px]"
        />
        <motion.div 
          animate={{ 
            y: isHovered ? -11 : 0, 
            backgroundColor: isHovered ? "var(--color-primary-01-bright)" : "var(--color-primary-01)",
            opacity: isHovered ? [1, 0.2, 1] : 1
          }}
          style={{ top: "9px", left: "6.5px" }}
          transition={{
            y: { ease: [0.34, 1.56, 0.64, 1], duration: 0.4 },
            opacity: isHovered ? { duration: 0.8, repeat: Infinity } : { duration: 0.2 }
          }}
          className="absolute w-[2px] h-[2px] rotate-0"
        />
      </div>

      <div className="flex items-center relative gap-3">
        <span className="font-sans font-black text-[18px] text-txt-01 tracking-widest leading-none">
          魚也是貓
        </span>
        <div className="w-[3px] h-[3px] bg-txt-01 rotate-45" />
      </div>
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
      className="relative text-txt-01 font-sans font-medium text-[15px] tracking-widest flex items-center group/item px-2"
    >
      <span className={cn("relative z-10 transition-all duration-300", isHovered ? "text-txt-01" : "opacity-60")}>
        {item.name}
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
        
        <div className="flex-1 flex flex-col p-8 pt-20 relative z-10">
          <div className="flex flex-col gap-0.5 relative z-10 mb-8">
            {NAV_ITEMS.map((item, idx) => (
              <MobileNavItem key={item.name} item={item} index={idx} onClose={onClose} />
            ))}
          </div>

          <div className="mt-auto pb-10">
            <div className="mb-6 h-[1px] bg-primary-01/10 w-full" />
            <MobileCTA />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-gradient-to-t from-state-04/10 to-transparent pointer-events-none" />
      </motion.div>
    </div>
  );
}

function MobileNavItem({ item, index, onClose }: { item: any; index: number; onClose: () => void }) {
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
      className="group relative flex items-center justify-between py-4 border-b border-white/5 active:bg-white/5 px-4 transition-colors"
    >
      <div className="flex items-center gap-6">
        <span className="font-mono text-[9px] text-txt-04 tracking-tighter mt-1">{item.code}</span>
        <span className="text-txt-02 font-sans font-black text-[15px] tracking-[0.3em] transition-colors duration-400 group-hover:text-txt-01 group-active:text-txt-01">
          {item.name}
        </span>
      </div>
    </motion.a>
  );
}

function MobileCTA() {
  return (
    <div className="relative group w-full flex justify-center px-4">
      <Button 
        variant="primary" 
        size="large"
        className="w-full tracking-[0.2em] text-[15px] font-black"
      >
        啟動諮詢
      </Button>
    </div>
  );
}
