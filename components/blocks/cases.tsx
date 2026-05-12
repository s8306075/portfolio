"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * [SEC-05] 案例數據對位
 * 採「代號-識別」雙軌制，排除商業黑話，強調物理結果。
 */
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
      className="relative py-24 lg:py-48 cs-03-depth-fault lg:overflow-visible overflow-hidden bg-bg-01" 
      id="cases"
    >
      {/* 背景能量場與網格 */}
      <GridField scrollProgress={scrollProgress} />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <h2 className="sr-only">解決真實問題</h2>
        <DecryptorHeader />

        {/* 桌面端佈局 (Lg+) - 終端診斷系統 */}
        <div className="hidden lg:grid grid-cols-12 gap-16 items-start">
          
          {/* 左側：專案選單 */}
          <div className="lg:col-span-4 grid grid-cols-1 gap-4">
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
                     CASE.{item.id}
                   </span>
                </div>
                
                <h4 className={cn(
                  "font-serif text-[22px] font-medium tracking-tight mb-1 transition-colors duration-500",
                  activeCase === i ? "text-primary-01-bright" : "text-txt-01"
                )}>
                  {item.title}
                </h4>

                <AnimatePresence>
                  {activeCase === i && (
                    <motion.div 
                      key="scan"
                      initial={{ left: "-100%" }}
                      animate={{ left: "200%" }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                      className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-primary-01/5 to-transparent skew-x-[-30deg] pointer-events-none"
                    />
                  )}
                </AnimatePresence>
              </motion.button>
            ))}
          </div>

          {/* 右側：診斷報告主控台 */}
          <div className="lg:col-span-8 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCase}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "relative bg-bg-02/80 mat-02-mica border border-white/10 p-14 overflow-hidden min-h-[500px]",
                  "shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]"
                )}
              >
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/30" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/30" />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Header: ID + Title */}
                  <div className="flex items-center gap-3 mb-10 pb-6 border-b border-white/5">
                    <div className="w-8 h-[1px] bg-primary-01/30" />
                    <span className="font-mono text-accent-02 text-[10px] tracking-[0.4em] font-bold uppercase">
                      DIAGNOSIS_CASE.{CASES[activeCase].id}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-12 mb-12">
                    {/* The Chaos (Left) */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-2">
                         <div className="w-1.5 h-4 bg-white/20" />
                         <span className="font-mono text-txt-04 text-[10px] tracking-[0.2em] font-bold uppercase">原本的混亂</span>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-6 top-0 bottom-0 w-[1px] bg-white/10" />
                        <p className="font-sans text-txt-03 text-[16px] italic leading-relaxed pl-6 py-6 pr-8">
                          &ldquo;{CASES[activeCase].friction}&rdquo;
                        </p>
                      </div>
                    </div>

                    {/* The Breakthrough (Right) */}
                    <div className="flex flex-col items-end justify-center shrink-0 relative">
                      <div className="absolute inset-0 bg-primary-01/[0.02] blur-[40px] -z-10" />
                      <span className="font-mono text-txt-04 text-[11px] font-black tracking-[0.4em] mb-4 uppercase border-b border-primary-01/20 pb-1">
                        {CASES[activeCase].breakthroughLabel}
                      </span>
                      <span className="text-txt-01 text-[84px] font-black leading-none italic">
                        {CASES[activeCase].breakthroughValue}
                      </span>
                    </div>
                  </div>

                  {/* The Description (Bottom) */}
                  <div className="space-y-6 pt-10 border-t border-white/5">
                    <div className="flex items-center gap-2">
                       <div className="w-1.5 h-4 bg-primary-01" />
                       <span className="font-mono text-txt-04 text-[10px] tracking-[0.2em] font-bold uppercase">重塑後的秩序</span>
                    </div>
                    <div className="relative group/desc">
                      <div className="absolute -left-10 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary-01/40 via-primary-01/5 to-transparent group-hover:from-primary-01 transition-all duration-500" />
                      <p className="font-sans text-txt-01 text-[20px] leading-[1.8] font-light max-w-2xl">
                        {CASES[activeCase].description}
                      </p>
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
        <div className="lg:hidden relative">
          {/* 上方：標籤導航 */}
          <div className="flex border-b border-white/10 mb-8 overflow-x-auto no-scrollbar -mx-6 px-6">
            {CASES.map((item, i) => (
              <button
                key={item.id}
                onClick={() => setActiveCase(i)}
                className={cn(
                  "flex-shrink-0 px-6 py-4 transition-all relative border-r border-white/5",
                  activeCase === i ? "bg-primary-01/5" : "opacity-40"
                )}
              >
                <div className="flex flex-col items-start gap-1">
                  <span className={cn(
                    "font-mono text-[9px] tracking-[0.34em] font-black uppercase",
                    activeCase === i ? "text-primary-01-bright" : "text-txt-04"
                  )}>
                    ID.{item.id}
                  </span>
                  <span className={cn(
                    "text-[12px] font-medium transition-colors whitespace-nowrap",
                    activeCase === i ? "text-txt-01" : "text-txt-03"
                  )}>
                    {item.category}
                  </span>
                </div>
                {activeCase === i && (
                  <motion.div 
                    layoutId="activeTabMobile"
                    className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-primary-01-bright shadow-[0_0_8px_theme(colors.primary-01-bright)]"
                  />
                )}
              </button>
            ))}
          </div>

          {/* 內容顯示區 */}
          <div className="relative bg-bg-02/60 border border-white/10 p-8 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCase}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-10"
              >
                {/* 標題 */}
                <div className="space-y-3 pb-6 border-b border-white/5">
                   <h3 className="text-txt-01 font-serif text-[26px] leading-[1.2] tracking-tighter font-medium italic">
                     {CASES[activeCase].title}
                   </h3>
                </div>

                <div className="space-y-10">
                  {/* 最初混亂 */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-3 bg-white/20" />
                      <span className="text-txt-04 font-mono text-[9px] tracking-widest uppercase">原本的混亂</span>
                    </div>
                    <div className="text-txt-03 text-[15px] italic leading-relaxed border-l border-white/10 p-5">
                      &ldquo;{CASES[activeCase].friction}&rdquo;
                    </div>
                  </div>

                  {/* 突破指標 */}
                  <div className="flex flex-col items-center py-8 bg-primary-01/[0.03] border-y border-primary-01/5 relative overflow-hidden">
                    <motion.div
                      animate={{ opacity: [0.03, 0.08, 0.03] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute inset-0 bg-primary-01/10 blur-xl"
                    />
                    <span className="text-txt-04 font-mono text-[10px] tracking-[0.4em] uppercase mb-4 relative z-10">
                      {CASES[activeCase].breakthroughLabel}
                    </span>
                    <span className="text-primary-01-bright text-[64px] font-black italic tracking-tighter leading-none relative z-10 drop-shadow-[0_0_10px_rgba(208,220,232,0.1)]">
                      {CASES[activeCase].breakthroughValue}
                    </span>
                  </div>

                  {/* 重塑秩序 */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                       <div className="w-1 h-3 bg-primary-01" />
                       <span className="text-txt-04 font-mono text-[9px] tracking-widest uppercase block">重塑後的秩序</span>
                    </div>
                    <p className="text-txt-01 text-[15px] leading-relaxed font-light border-l border-primary-01/30 pl-5 pr-2">
                      {CASES[activeCase].description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* 底部導航指示器 */}
          <div className="mt-8 flex items-center justify-between">
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
  const [statusText, setStatusText] = useState("INITIALIZING");
  const targetText = "解決真實問題";

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let startTime: number | null = null;
    const chars = "0123456789ABCDEF!@#$%^&*()_+<>?:{}|";
    const duration = 400; 
    
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const draw = (progress: number, time: number) => {
       ctx.clearRect(0, 0, rect.width, rect.height);
       
       const isMobile = window.innerWidth < 768;
       const fontSize = isMobile ? 36 : (window.innerWidth < 1024 ? 54 : 72);
       
       ctx.font = `600 ${fontSize}px 'Noto Serif TC', serif`;
       ctx.textBaseline = "middle";
       ctx.fillStyle = "#D0DCE8";
       
       // Handle multiline for mobile
       const maxWidth = rect.width - 20;
       
       let x = 0;
       let y = rect.height / 2;
       
       if (isMobile) {
         // simplified wrap for mobile
         y = 40;
       }

       const fixedCount = Math.floor(progress * targetText.length);
       
       for(let i=0; i<targetText.length; i++) {
         const char = targetText[i];
         const isFixed = i < fixedCount;
         const renderChar = isFixed ? char : chars[Math.floor(Math.random() * chars.length)];
         
         ctx.globalAlpha = isFixed ? 1 : 0.3;
         if(!isFixed && Math.random() > 0.8) ctx.globalAlpha = 0.8;
         
         const metrics = ctx.measureText(renderChar);
         
         if (x + metrics.width > maxWidth) {
           x = 0;
           y += fontSize * 1.2;
         }
         
         ctx.fillText(renderChar, x, y);
         x += metrics.width + (isFixed ? 0 : 2); 
       }
    };

        const animate = (time: number) => {
          if (!startTime) startTime = time;
          const elapsed = time - startTime;
          
          if (elapsed < 800) {
            // 第一階段：快速亂碼 0-800ms
            if (Math.floor(elapsed / 50) % 2 === 0) {
               draw(0, time);
               setStatusText(Math.floor(elapsed / 100) % 2 === 0 ? "解碼中 / DECRYPTING..." : "分析中 / ANALYZING...");
            }
            animationFrameId = requestAnimationFrame(animate);
          } else {
            // 第二階段：定格 400ms
            const lockProgress = Math.min((elapsed - 800) / duration, 1);
            setStatusText("來源已驗證 / VERIFIED_SOURCE");
            draw(lockProgress, time);
            if (lockProgress < 1) {
               animationFrameId = requestAnimationFrame(animate);
            }
          }
        };
    
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

      <div className="w-full h-[160px] md:h-[140px] lg:h-[180px] mb-4 relative overflow-visible">
        <canvas 
          ref={canvasRef} 
          className="w-full h-full block" 
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
function GridField({ scrollProgress }: { scrollProgress: any }) {
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




