"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

const WORKFLOW_STEPS = [
  {
    sequence: "01",
    title: "聽懂你的需求",
    description: "我們不急著談技術。聽懂你的痛點與目標，確保後續的開發都投入在正確的地方。",
    tag: "需求分析" 
  },
  {
    sequence: "02",
    title: "看見雛形",
    description: "快速看到雛形網站。我們透過分析需求轉化的網站，讓你迅速就能看到且實際操作並給予反饋，確保成品就是你要的。",
    tag: "開發迭代"
  },
  {
    sequence: "03",
    title: "透明化的推進步調",
    description: "用簡單的方式匯報進度。我們不追求一步到位，但追求每一步都實現。",
    tag: "方案規劃"
  },
  {
    sequence: "04",
    title: "彈性又穩定的交付",
    description: "過程彈性不僵化，隨時微調且回饋。確保交到你手中的系統與你的需求對齊",
    tag: "交付上線"
  }
];

export function Workflow() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end 80%"] 
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.001
  });

  const pathHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <section 
      ref={containerRef} 
      className="relative cs-01-void !py-[120px] lg:!py-[240px] overflow-hidden bg-bg-01" 
      id="workflow"
    >
      {/* 頂部銜接：能量滲透 (Energy Seepage) - 背景光壓差 */}
      <div className="absolute inset-x-0 top-0 h-[100px] bg-gradient-to-b from-bg-02 to-bg-01 z-10" />

      {/* [SEC-04] 幾何折線從上一區塊延伸 */}
      <div className="absolute left-[50%] top-0 h-[120px] w-[1px] bg-white/10 z-[5] lg:left-[calc(50%+190px)]" />

      {/* 基礎層級：底層網格 */}
      <div className="absolute inset-0 z-0 opacity-[0.03] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]">
        <div className="absolute inset-0 opt-03-grid" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-24 lg:gap-40">
          
          {/* 左側：戰略價值中心 */}
          <div className="lg:w-[30%]">
            <div className="sticky top-48">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center gap-4 mb-12">
                  <div className="w-12 h-[1px] bg-white/20" />
                  <span className="font-mono text-txt-04 text-[11px] tracking-[0.5em] uppercase font-bold opacity-90">
                    合作流程
                  </span>
                </div>
                
                <h2 className="font-serif text-txt-01 text-[52px] md:text-[68px] leading-[0.85] font-normal mb-12 tracking-tighter">
                  我是如何幫你把<br />
                  <span className="text-state-04 select-none drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">混亂釐清？</span>
                </h2>
                
                <div className="space-y-12">
                  <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-12">
                            <div className="space-y-3">
                              <div className="font-mono text-txt-03 text-[13px] tracking-[0.15em] uppercase font-bold">這對你意味著什麼？</div>
                              <div className="text-txt-02 text-[15px] leading-relaxed font-semibold">更低的溝通成本，<br />更高的交付品質。</div>
                            </div>
                            <div className="space-y-3">
                              <div className="font-mono text-txt-03 text-[13px] tracking-[0.15em] uppercase font-bold">如何確保結果？</div>
                              <div className="text-txt-02 text-[14px] leading-relaxed font-semibold">每一處細節都經過<br />我們誠實的審視。</div>
                            </div>
                          </div>
                          
                          <p className="font-sans text-txt-02 text-[15px] leading-[1.9] font-normal max-w-[320px]">
                            我們相信好的作品源於對細節的絕對誠實。透過結構化的執行路徑，我們消滅任何可能導致「差不多就好」的技術僥倖。
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  </div>
        
                  {/* 右側：動態能量軌道 */}
                  <div className="flex-1 relative">
                    
                    {/* 底層靜態軌道 */}
                    <div className="absolute left-[12px] top-0 bottom-0 w-[1px] bg-white/[0.03] z-0" />
                    
                    {/* 能量脈絡 (Pure Logic Sweep) - 水氣與木氣混合 */}
                    <motion.div 
                      style={{ height: pathHeight }}
                      className="absolute left-[12px] top-0 w-[1px] bg-gradient-to-b from-transparent via-state-04/80 to-state-01 z-10 shadow-[0_0_15px_rgba(94,206,160,0.4)]"
                    />
        
          {/* 傳遞 scroll 進度供子組件計算物理連動 */}
          <div className="flex flex-col gap-12 lg:gap-16 py-8 relative z-20">
            {WORKFLOW_STEPS.map((step, index) => (
              <WorkflowStep 
                key={step.sequence} 
                data={step} 
                index={index} 
                progress={smoothProgress}
              />
            ))}
          </div>
          {/* 底部出口：路徑延伸 (Tail Trailing) - 木氣延伸 */}
          <div className="absolute bottom-0 left-[12px] h-[100px] w-[1px] bg-gradient-to-b from-state-01/60 to-transparent opacity-50 z-20" />
              </div>
            </div>
          </div>
      
      {/* 底部邊界平滑 */}
      <div className="absolute bottom-0 left-0 right-0 h-[400px] bg-gradient-to-t from-bg-01 to-transparent pointer-events-none z-[5]" />
    </section>
  );
}

function WorkflowStep({ 
  data, 
  index,
  progress
}: { 
  data: typeof WORKFLOW_STEPS[0], 
  index: number,
  progress: any
}) {
  const stepRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(stepRef, { once: false, margin: "-30% 0px -30% 0px" });
  const [isHovered, setIsHovered] = useState(false);

  // [鈦金諧振] 點擊/觸發狀態
  const [isTapped, setIsTapped] = useState(false);

  // 計算每個節點的物理激活點
  const threshold = index / (WORKFLOW_STEPS.length - 0.5);
  const isActiveValue = useTransform(progress, (v: number) => v >= threshold);
  const [isSparked, setIsSparked] = useState(false);

  useEffect(() => {
    if (isActiveValue.get()) {
      setTimeout(() => setIsSparked(true), 0);
    }
    const unsubscribe = isActiveValue.on("change", (v) => {
      if (v) setIsSparked(true);
    });
    return () => unsubscribe();
  }, [isActiveValue]);

  return (
    <div 
      ref={stepRef}
      className="relative pl-12 lg:pl-28 group mb-8 last:mb-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsTapped(true)}
      onMouseUp={() => setIsTapped(false)}
    >
      {/* 物理連動鎖定節點 */}
      <div className="absolute left-[12px] top-[24px] -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
        <div className="relative flex items-center justify-center w-[32px] h-[32px]">
          {/* [金] 銠金屬核心點 */}
          <motion.div 
             animate={{ 
               backgroundColor: isSparked ? "var(--color-primary-01-bright)" : "rgba(255,255,255,0.1)",
               scale: isSparked ? 1.0 : 0.4,
               rotate: isSparked ? 45 : 0,
               boxShadow: isSparked ? "0 0 20px theme(colors.primary-01-bright)" : "none"
             }}
             transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
             className="w-2 h-2 absolute z-10"
          />

          {/* [鈦金諧振] 回彈震盪效果 */}
          <motion.div
            animate={isTapped ? { scale: 0.8 } : { scale: 1 }}
            className="absolute inset-0 border border-white/10 rotate-45"
          />
        </div>
      </div>

      {/* [木] 導航根系：折線引導 */}
      <div className="absolute left-[12px] top-[24px] w-full pointer-events-none z-10 hidden lg:block">
        <svg className="w-full h-12 overflow-visible">
          <motion.path
            d="M 0 0 L 30 0 L 45 15 L 100 15"
            fill="none"
            strokeWidth="0.5"
            stroke="white"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: isSparked ? 1 : 0, 
              opacity: isSparked ? 0.2 : 0,
              stroke: isHovered ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.2)"
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </svg>
      </div>

      {/* [高剛性切入]：利刃鎖定進場 */}
      <motion.div
        initial={{ x: 60, opacity: 0, scaleX: 0.8 }}
        whileInView={{ x: 0, opacity: 1, scaleX: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ 
          duration: 0.21, 
          ease: [0.16, 1, 0.3, 1], 
          delay: index * 0.05
        }}
        className="relative"
      >
        {/* [水] 雲母磨砂資訊載體 */}
        <div className={cn(
          "relative p-8 lg:p-10 rounded-none border-l border-white/[0.05] transition-all duration-500 overflow-hidden",
          isHovered ? "bg-white/[0.02] border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)]" : "bg-transparent"
        )}>
          {/* [銠金屬] 邊緣高光導引 */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="flex flex-col gap-6">
            <div className="flex items-center gap-6">
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] text-txt-03 tracking-[0.4em] uppercase font-bold">
                  進程.{data.sequence}
                </span>
                <span className="font-sans text-[11px] text-txt-02 tracking-[0.2em] font-black uppercase">
                  {data.tag}
                </span>
              </div>
              <div className="flex-1 h-[0.5px] bg-primary-01/10" />
            </div>

            <div className="max-w-[540px]">
              <h3 className="font-serif text-txt-01 text-[28px] md:text-[36px] font-normal leading-tight mb-4 tracking-tighter">
                {data.title}
              </h3>
              <p className="font-sans text-txt-02 text-[15px] md:text-[16px] leading-[1.8] font-normal text-balance group-hover:text-txt-01 transition-colors">
                {data.description}
              </p>
            </div>
          </div>

          {/* [視網膜殘留] 消失/轉場虛影模擬 */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, scale: 1.02 }}
                exit={{ opacity: 0, scale: 1.05 }}
                className="absolute inset-0 bg-white/[0.01] pointer-events-none"
              />
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}



