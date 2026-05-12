'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { cn } from '@/lib/utils';

/**
 * [區塊 02] 定位錨點 (Navigation Anchor)
 * 完整實作：空間構架 (Layer 1) + 內容細節 (Layer 2) + 精密動能演算法 (Layer 3)
 */

const DiagnosticCard = ({ 
  index, 
  title, 
  desc, 
  warning,
  delay = 0,
  mobileOffset = "0px"
}: { 
  index: string; 
  title: string; 
  desc: string; 
  warning: string;
  delay?: number;
  mobileOffset?: string;
}) => {
  const cardRef = useRef(null);
  
  // 移動端滾動偵測 (Scroll-Trigger) - 40% 進入視窗時啟動移動端亮起
  const isCenterInView = useInView(cardRef, { 
    once: false, 
    amount: 0.4 
  });
  
  // 載入時的視差進入 (Parallax Entry)
  const isInitialInView = useInView(cardRef, { once: true });

  return (
    <motion.div 
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInitialInView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.8, 
        delay, 
        type: "spring",
        stiffness: 120,
        damping: 25,
        mass: 1.2
      }}
      className="relative group w-full will-change-transform"
      style={{ x: mobileOffset }}
    >
      {/* 地殼震顫 (Micro-shiver) 物理回彈回饋 */}
      <motion.div 
        whileHover={{ scale: 1.002 }}
        transition={{ 
          type: "spring", 
          stiffness: 800, 
          damping: 40, 
          mass: 0.8 
        }}
        className={cn(
          "relative p-8 lg:p-10 mat-02-mica border border-white/5 transition-all duration-700 overflow-hidden",
          "group-hover:border-white/20 group-hover:bg-white/[0.03]",
          isCenterInView ? "border-white/10 lg:border-white/5" : ""
        )}
      >
        {/* [An-03 精密掃描] 格柵線 - Hover 時顯現 */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.04] transition-opacity duration-700 pointer-events-none opt-03-grid" />
        
        {/* [Int-01 熔接色散] 邊緣高光發絲線模擬 */}
        <div className="absolute top-0 left-0 right-0 h-[0.5px] bg-transparent group-hover:bg-white/40 transition-all duration-1000" />
        <div className="absolute top-0 bottom-0 left-0 w-[0.5px] bg-transparent group-hover:bg-white/40 transition-all duration-1000" />

        <div className="flex flex-col gap-6 relative z-10">
          {/* 1. 編號 (Index) - DM Mono, Txt-04 -> White on Hover */}
          <span className="font-mono text-txt-04 group-hover:text-white transition-colors duration-500 text-[14px] tracking-[0.2em]">
            {index}
          </span>

          {/* 2. 核心痛點 (Pain Point) - 確保高對比度 */}
          <motion.h3 
            className="font-serif text-[24px] lg:text-[28px] font-medium leading-[1.2] tracking-tight transition-colors duration-700 text-white"
            animate={isCenterInView ? { 
              opacity: [0.95, 1, 0.95],
              scale: [1, 1.005, 1] 
            } : { opacity: 1, scale: 1 }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            {title}
          </motion.h3>

          {/* 3. 診斷描述 (Diagnosis) - Txt-02, 冷靜描述 */}
          <p className="font-sans text-txt-02 text-[15px] lg:text-[16px] leading-[1.8] font-light max-w-[85%]">
            {desc}
          </p>

          {/* 4. 後果預測 (Consequence) - 1px 斷續點陣線 */}
          <div className="mt-4">
            <div 
              className="w-full h-[1px] mb-4 opacity-30"
              style={{
                backgroundImage: 'repeating-linear-gradient(90deg, var(--color-txt-04), var(--color-txt-04) 1px, transparent 1px, transparent 4px)',
                backgroundSize: '4px 1px'
              }}
            />
            <span className="font-mono text-[11px] text-txt-02 tracking-[0.2em] uppercase">
              {warning}
            </span>
          </div>
        </div>

        {/* 交互脈衝擴散光 */}
        <div className="absolute inset-0 bg-state-04/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
      </motion.div>
    </motion.div>
  );
};

export const NavigationAnchor = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // 視差背景偏移演算法
  const bgX = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);
  const bgSkew = useTransform(scrollYProgress, [0, 1], [-15, -13]);

  const diagnosisData = [
    {
      index: "01",
      title: "邏輯碎片化導致之效能流失",
      desc: "過度依賴非結構化指令集，使系統在臨界點產生不可預測的延遲漂移。核心價值被掩埋於技術債務堆積而成的虛無空間。",
      warning: "長期維護成本將呈指數級增長，最終導致結構性坍塌。",
      delay: 0.1,
      mobileOffset: "calc(-1 * clamp(8px, 5vw, 24px))"
    },
    {
      index: "02",
      title: "品牌立場在視覺熱噪聲中消解",
      desc: "平庸的市場範本稀釋了專業權威感。當視覺語言失去「鋒利度」，受眾將無法在毫秒級的注意力競爭中識別商業座標。",
      warning: "高價值客戶因信任閾值未達標而自動流失。",
      delay: 0.3,
      mobileOffset: "clamp(8px, 5vw, 24px)"
    },
    {
      index: "03",
      title: "決議路徑缺乏精確物理導引",
      desc: "模糊的 CTA 與空洞的行銷黑話阻斷了轉化流向。使用者在缺乏重力牽連的介面中迷失，導致最終交付物與商業目標脫節。",
      warning: "投入產出比持續低迷，商業轉化效能降至冰點。",
      delay: 0.2,
      mobileOffset: "0px"
    }
  ];

  return (
    <section 
      ref={containerRef}
      id="anchor"
      className={cn(
        "relative w-full min-h-screen py-24 lg:py-32 overflow-x-clip bg-bg-02",
        "flex flex-col justify-center"
      )}
    >
      {/* ---- CS-03 深度斷層背景層 (動態視差與光學邊界) ---- */}
      <motion.div 
        style={{ x: bgX }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        {/* A 軌越變層 (亮度補償 ±0.05 Opacity) */}
        <div 
          className="absolute inset-0 bg-bg-01 opacity-[0.35]"
          style={{ clipPath: "polygon(0 0, 45% 0, 35% 100%, 0 100%)" }}
        />
        
        {/* B 軌斷層斜面 (核心支撐) */}
        <motion.div 
          className="absolute inset-y-0 left-[40%] w-full bg-bg-02 origin-top-left"
          style={{ transform: useTransform(bgSkew, (s) => `skewX(${s}deg)`) }}
        >
          {/* 光學邊界亮度差模擬 */}
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute inset-0" style={{ boxShadow: "inset 60px 0 120px -30px rgba(0,0,0,1)" }} />
          {/* 0.5px 高光發絲線 (Metal 薄片邊緣反射) */}
          <div className="absolute inset-y-0 left-0 w-[0.5px] bg-white/20" />
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black/80 via-transparent to-transparent" />
        </motion.div>
      </motion.div>

      <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10">
        <div className="flex flex-col mb-16 lg:mb-20 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6"
          >
            <h2 className="font-serif text-[38px] lg:text-[60px] text-txt-01 font-semibold leading-[1.1] tracking-tighter">
              定位商業錨點：<br/>
              <span className="text-txt-05">診斷</span> 潛在的效能坍塌。
            </h2>
            <div className="w-full max-w-[540px] mt-2 border-l border-white/10 pl-6">
              <p className="font-sans text-txt-02 text-[16px] lg:text-[18px] leading-[1.7] font-light">
                在不確定性中建立精確的幾何座標。我們透過深度斷層掃描，識別並鎖定那些正在侵蝕系統價值的「技術熱噪聲」。
              </p>
            </div>
          </motion.div>
        </div>

        {/* 診斷卡片 Grid：修正平板與桌面端的縱向差 (Layer 2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          <div className="lg:mt-0">
            <DiagnosticCard {...diagnosisData[0]} />
          </div>
          <div className="md:mt-16 lg:mt-24">
            <DiagnosticCard {...diagnosisData[1]} />
          </div>
          <div className="md:mt-8 lg:mt-[-40px]">
            <DiagnosticCard {...diagnosisData[2]} />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent z-20" />
    </section>
  );
};
