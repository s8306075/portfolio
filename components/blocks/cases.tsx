"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence, MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

const CASES = [
  {
    id: "001",
    category: "調度",
    title: "車輛派遣 CRM 系統",
    friction: "電話響個不停、派單全靠紙筆紀錄、司機跑錯現場、客戶資料散落在各處，當業務擴張時，整個系統就開始崩潰。",
    breakthroughValue: "+40%",
    breakthroughLabel: "派案效率",
    description: "重新定義車輛、司機與任務之間的連通邏輯。將破碎的通訊過程，封裝進一個具備強大檢索與派工能力的後台。"
  },
  {
    id: "002",
    category: "數據看板",
    title: "個人投資決策看板",
    friction: "Excel 算錯損益、手動輸入紀錄容易手殘、不知道自己的錢到底贏在哪、輸在哪，看著滿螢幕的數字卻無法做出下一個買賣決定。",
    breakthroughValue: "< 1s",
    breakthroughLabel: "結算耗時",
    description: "針對多變的市場數據進行深度清理。透過自動化腳本抓取與計算，將生硬的損益、股利與庫存轉譯為直覺的視覺指標。"
  },
  {
    id: "003",
    category: "自動化",
    title: "行政流程自動化",
    friction: "每天花三小時處理重複的表格對帳、人工登打導致的微小錯誤引發後續災難、流程在「等人簽名」或「系統不通」中耗散。",
    breakthroughValue: "0%",
    breakthroughLabel: "出錯率",
    description: "深入辦公室最底層的行政斷層。用技術手段替代人工複製貼上，確保每一筆資料都能在正確的時間出現在正確的系統裡。"
  }
];

export function Cases() {
  const [activeCase, setActiveCase] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scrollProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section 
      ref={containerRef}
      className="relative py-24 overflow-hidden lg:py-48 cs-03-depth-fault lg:overflow-visible" 
      style={{ background: 'radial-gradient(circle at 50% -20%, #1A2635 0%, #0A0C0F 60%)' }}
      id="cases"
    >
      {/* 背景能量場與網格 */}
      <GridField scrollProgress={scrollProgress} />
      
      <div className="container relative z-10 w-full px-4 mx-auto lg:px-12">
        <DecryptorHeader />

        {/* 桌面端佈局 (Lg+) - 終端診斷系統 */}
        <div className="items-start hidden grid-cols-12 gap-16 lg:grid">
          
          {/* 左側：專案選單 */}
          <div className="grid grid-cols-1 gap-4 lg:col-span-4">
            {CASES.map((item, i) => (
              <motion.button
                key={item.id}
                onClick={() => setActiveCase(i)}
                onMouseEnter={() => setActiveCase(i)}
                className={cn(
                  "relative p-6 border transition-all duration-500 overflow-hidden text-left bg-bg-02/40 backdrop-blur-xl group",
                  activeCase === i 
                    ? "border-primary-01/30 shadow-[0_0_30px_rgba(255,255,255,0.02)]" 
                    : "border-white/5 opacity-80 hover:opacity-100 hover:border-white/20"
                )}
              >
                <div className="flex items-center justify-between mb-2">
                   <div className={cn(
                     "w-1 h-1 rotate-45 transition-colors duration-500",
                     activeCase === i ? "bg-primary-01-bright shadow-[0_0_8px_theme(colors.primary-01-bright)]" : "bg-txt-04"
                   )} />
                   <span className="font-mono text-[9px] tracking-[0.3em] text-txt-04 font-black">
                     成果.{item.id}
                   </span>
                </div>
                
                <h4 className={cn(
                  "font-serif text-[22px] font-medium tracking-tight mb-1 transition-colors duration-500",
                  activeCase === i ? "text-txt-01" : "text-txt-03/60"
                )}>
                  {item.title}
                </h4>

                {/* 鋼鐵刃脊：活性指示線 */}
                {activeCase === i && (
                  <motion.div 
                    layoutId="active-blade"
                    className="absolute left-0 top-0 bottom-0 w-[2.5px] bg-accent-01 shadow-[0_0_15px_rgba(224,106,38,0.4)]"
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* 右側：診斷報告主控台 */}
          <div className="relative lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCase}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "relative bg-[#0F1115]/90 mat-02-mica border border-white/5 p-14 overflow-hidden min-h-[520px]",
                  "shadow-[0_40px_100px_-20px_rgba(0,0,0,0.9)]"
                )}
              >
                <div className="relative z-10 flex flex-col h-full text-left">
                  {/* Header: ID + Subject + Breakthrough */}
                  <div className="relative flex flex-col gap-1 pb-8 mb-12 border-b border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-3 bg-primary-01/40" />
                      <span className="font-mono text-txt-03/60 text-[10px] tracking-[0.4em] font-bold uppercase">
                        案場記錄.{CASES[activeCase].id}
                      </span>
                    </div>
                    
                    <div className="flex items-end justify-between gap-8 mt-4">
                       <h3 className="font-serif text-txt-01 text-[32px] xl:text-[48px] font-medium tracking-tight leading-[1.1] max-w-[65%]">
                         {CASES[activeCase].title}
                       </h3>

                       {/* 成果指標 (Breakthrough) - 置於右上角 */}
                       <div className="flex flex-col items-end pb-1 shrink-0">
                         <span className="font-mono text-txt-01 text-[12px] tracking-[0.3em] font-black uppercase mb-1 drop-shadow-[0_0_8px_rgba(208,220,232,0.3)]">
                           {CASES[activeCase].breakthroughLabel}
                         </span>
                         <span className="text-primary-01-bright text-[64px] xl:text-[72px] font-black leading-none drop-shadow-[0_0_15px_rgba(208,220,232,0.2)]">
                           {CASES[activeCase].breakthroughValue}
                         </span>
                       </div>
                    </div>
                  </div>

                  {/* 核心內容區：對比式佈局 */}
                  <div className="grid grid-cols-1 gap-12">
                    {/* 遭遇瓶頸 (Friction) */}
                    <div className="relative pl-8 group/friction">
                      <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/10 group-hover:bg-white/20 transition-colors" />
                      <div className="flex flex-col gap-4">
                        <span className="font-mono text-txt-03 text-[11px] tracking-[0.3em] font-bold uppercase">遭遇瓶頸</span>
                        <p className="font-sans text-txt-01 text-[20px] font-light leading-relaxed italic opacity-90">
                          &ldquo;{CASES[activeCase].friction}&rdquo;
                        </p>
                      </div>
                    </div>

                    {/* 解決方案 (Description) */}
                    <div className="relative pl-8 group/solution">
                      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary-01 shadow-[0_0_8px_rgba(208,220,232,0.1)]" />
                      <div className="flex flex-col gap-4">
                        <span className="font-mono text-primary-01 text-[11px] tracking-[0.3em] font-bold uppercase">解決方法</span>
                        <p className="font-sans text-txt-01 text-[22px] leading-[1.7] font-light max-w-3xl">
                          {CASES[activeCase].description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/5">
                  <motion.div 
                    key={`bar-${activeCase}`}
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-primary-01-bright/40 shadow-[0_0_15px_theme(colors.primary-01-bright)]"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* [MOB-07] 行動端診斷流 (Mobile Diagnosis Flow) */}
        <div className="relative lg:hidden">
          {/* 上方：標籤導航 */}
          <div className="flex px-6 mb-8 -mx-6 overflow-x-auto border-b border-white/10 no-scrollbar bg-bg-02/20 backdrop-blur-md">
            {CASES.map((item, i) => (
              <button
                key={item.id}
                onClick={() => setActiveCase(i)}
                className={cn(
                  "flex-shrink-0 px-8 py-5 transition-all relative border-r border-white/5",
                  activeCase === i ? "bg-white/[0.03]" : "opacity-40"
                )}
              >
                <div className="flex flex-col items-center gap-1.5">
                  <span className={cn(
                    "font-mono text-[8px] tracking-[0.4em] font-black",
                    activeCase === i ? "text-txt-03" : "text-txt-04"
                  )}>
                    成果_{item.id}
                  </span>
                  <span className={cn(
                    "text-[13px] font-sans font-medium tracking-wide transition-colors whitespace-nowrap",
                    activeCase === i ? "text-txt-01" : "text-txt-03"
                  )}>
                    {item.category}
                  </span>
                </div>
                {activeCase === i && (
                  <motion.div 
                    layoutId="activeTabMobile"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent-01"
                  />
                )}
              </button>
            ))}
          </div>

          {/* 內容顯示區 */}
          <div className="relative bg-[#0F1115]/90 border border-white/5 p-6 md:p-8 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-[1px] bg-white/20" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCase}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-10"
              >
                {/* 標題與ID */}
                <div className="pb-8 space-y-3 border-b border-white/5">
                   <span className="font-mono text-txt-03/60 text-[9px] tracking-widest uppercase">案場資料_{CASES[activeCase].id}</span>
                   <h3 className="text-txt-01 font-serif text-[28px] leading-tight tracking-tight font-medium">
                     {CASES[activeCase].title}
                   </h3>
                </div>

                <div className="space-y-12">
                   {/* 遭遇瓶頸 */}
                   <div className="relative pl-6">
                      <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/10" />
                      <div className="flex flex-col gap-3">
                        <span className="text-txt-03/80 font-mono text-[10px] tracking-[0.3em] font-bold uppercase">遭遇瓶頸</span>
                        <p className="text-txt-01 text-[17px] font-light leading-relaxed italic">
                          &ldquo;{CASES[activeCase].friction}&rdquo;
                        </p>
                      </div>
                   </div>

                  {/* 成果指標 (突破) */}
                  <div className="flex flex-col items-center py-10 bg-primary-01/[0.04] border-y border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-01/40 to-transparent" />
                    <span className="text-txt-01 font-mono text-[13px] tracking-[0.4em] font-black uppercase mb-3 relative z-10 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">
                      {CASES[activeCase].breakthroughLabel}
                    </span>
                    <span className="text-primary-01-bright text-[72px] font-black tracking-tighter leading-none relative z-10 drop-shadow-[0_0_20px_rgba(208,220,232,0.3)]">
                      {CASES[activeCase].breakthroughValue}
                    </span>
                    <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-l from-transparent via-primary-01/40 to-transparent" />
                  </div>

                  {/* 解決方案 */}
                  <div className="relative pl-6">
                    <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary-01 shadow-[0_0_6px_rgba(208,220,232,0.08)]" />
                    <div className="flex flex-col gap-3">
                      <span className="text-primary-01 font-mono text-[10px] tracking-[0.3em] font-bold uppercase">解決方法</span>
                      <p className="text-txt-01 text-[17px] leading-[1.8] font-light">
                        {CASES[activeCase].description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* 底部導航指示器 */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {CASES.map((_, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "h-[2px] transition-all duration-500",
                    activeCase === i ? "w-8 bg-white" : "w-2 bg-white/10"
                  )} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * 移除舊有無效組件
 */



/**
 * [The Decryptor] 標題組件
 * 實作機械式亂碼對齊動畫 (單一 Canvas 渲染)
 * 符合規格：快速滾動數位編號，400ms 定格，由左至右遞進
 */
function DecryptorHeader() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [statusText, setStatusText] = useState("INITIALIZING");
  const targetText = "解決真實問題";

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let startTime: number | null = null;
    const chars = "0123456789ABCDEF!@#$%^&*()_+<>?:{}|";
    const decryptDuration = 600; 
    
    const updateCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      return rect;
    };

    let rect = updateCanvasSize();

    const draw = (progress: number) => {
       ctx.clearRect(0, 0, rect.width, rect.height);
       
       const isMobile = window.innerWidth < 768;
       const fontSize = isMobile ? 32 : (window.innerWidth < 1024 ? 48 : 64);
       
       ctx.font = `600 ${fontSize}px 'Noto Serif TC', serif`;
       ctx.textBaseline = "middle";
       ctx.textAlign = "left";
       ctx.fillStyle = "#D0DCE8";
       
       const fixedCount = Math.floor(progress * targetText.length);
       
       let x = 0;
       const y = rect.height / 2;
       
       for(let i=0; i<targetText.length; i++) {
         const char = targetText[i];
         const isFixed = i < fixedCount;
         const renderChar = isFixed ? char : chars[Math.floor(Math.random() * chars.length)];
         
         ctx.globalAlpha = isFixed ? 1 : 0.3;
         if(!isFixed && Math.random() > 0.8) ctx.globalAlpha = 0.8;
         
         ctx.fillText(renderChar, x, y);
         x += ctx.measureText(renderChar).width + (isFixed ? 2 : 4); 
       }
    };

        const animate = (time: number) => {
          if (!startTime) startTime = time;
          const elapsed = time - startTime;
          
          if (elapsed < 800) {
            // 第一階段：快速亂碼 0-800ms
            if (Math.floor(elapsed / 50) % 2 === 0) {
               draw(0);
               setStatusText(Math.floor(elapsed / 100) % 2 === 0 ? "解碼中 / DECRYPTING..." : "分析中 / ANALYZING...");
            }
            animationFrameId = requestAnimationFrame(animate);
          } else {
            // 第二階段：定格 400ms
            const lockProgress = Math.min((elapsed - 800) / decryptDuration, 1);
            setStatusText("來源已驗證 / VERIFIED_SOURCE");
            draw(lockProgress);
            if (lockProgress < 1) {
               animationFrameId = requestAnimationFrame(animate);
            }
          }
        };
    
    const handleResize = () => {
      rect = updateCanvasSize();
      draw(1); 
    };

    window.addEventListener('resize', handleResize);

    const observer = new IntersectionObserver((entries) => {
       if(entries[0].isIntersecting) {
          startTime = null;
          animationFrameId = requestAnimationFrame(animate);
          observer.disconnect();
       }
    });
    observer.observe(canvas);

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="max-w-[1200px] mb-16 lg:mb-24">
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-6 mb-12"
      >
        <div className="flex items-center gap-3 px-3 py-1 border border-state-01/30 bg-state-01/5 backdrop-blur-sm">
          <div className="w-1.5 h-1.5 bg-state-01 animate-ping" />
          <span className="font-mono text-[10px] text-state-01 uppercase tracking-[0.3em] font-black">
            {statusText}
          </span>
        </div>
      </motion.div>

      <div ref={containerRef} className="w-full h-[80px] md:h-[100px] lg:h-[120px] mb-4 relative overflow-visible">
        <canvas 
          ref={canvasRef} 
          className="block" 
          style={{ transform: "translateZ(0)" }}
        />
      </div>
    </div>
  );
}

/**
 * [CS-04] 網格消散 (Grid Field Dissolution)
 * 實現 40px 的格柵背景，隨捲動產生位移壓強感
 */
function GridField({ scrollProgress }: { scrollProgress: MotionValue<number> }) {
  const y = useTransform(scrollProgress, [0, 1], ["0%", "-15%"]);
  // 網格密度隨捲動增加
  const gridDensity = useTransform(scrollProgress, [0, 0.4], [0.2, 0.6]);
  
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden h-[120%] -top-[10%]">
      <motion.div 
        style={{ 
          y,
          opacity: gridDensity,
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
          maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' // 底部消融預演
        }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-bg-01 via-transparent to-bg-01" />
      </motion.div>

      {/* 底部出口：回歸虛空 (Back to Void) - 數位噪點模擬 */}
      <div className="absolute bottom-[10%] left-0 right-0 h-64 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat mix-blend-overlay" />
      </div>
    </div>
  );
}