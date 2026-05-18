"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence, MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

const WORKFLOW_STEPS = [
  {
    sequence: "01",
    title: "聊聊想法，定出要做的事",
    description: "把你想做的、想解決的問題告訴我，我負責整理出一份大綱、時程與費用估算。這一步我們不對技術細節，只抓核心骨架，先把方向走對。",
    tag: "需求大綱" 
  },
  {
    sequence: "02",
    title: "簽約付定，把規格講明白",
    description: "雙方確認功能大綱與報價後，簽署正式合約並支付訂金。合約生效後，我會與你展開深度討論，將大綱細化為一份功能清單。明確的驗收日期、每個操作背後的運作邏輯，都在動工前白紙黑字寫明白，絕不留灰色地帶。",
    tag: "簽約細化"
  },
  {
    sequence: "03",
    title: "依序推進，分階段點收成果",
    description: "開發期間依照定好的時程表推進，且定期跟你同步最新狀況。無論案件規模大小，我們都依據動工前講好的階段來展示並點收成果，讓開發進度完全透明。",
    tag: "進度推進"
  },
  {
    sequence: "04",
    title: "規格清點，乾淨結案",
    description: "完工後進入測試期間，在約定的驗收期內，若合約規格內發現的 Bug 我負責修到好。當系統運作無誤、付清尾款後，我會移交所有程式碼。本次合作清爽結案，清清楚楚，保障你我的時間與資產。",
    tag: "結案點收"
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
      className="relative cs-02-section-cut-rev !py-[120px] lg:!py-[240px] overflow-hidden" 
      style={{ background: 'radial-gradient(circle at 50% -20%, #1A2635 0%, #0A0C0F 60%)' }}
      id="workflow"
    >
      {/* 基礎層級：底層網格 */}
      <div className="absolute inset-0 z-0 opacity-[0.03] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]">
        <div className="absolute inset-0 opt-03-grid" />
      </div>

      <div className="container relative z-10 w-full px-4 mx-auto lg:px-12">
        <div className="flex flex-col gap-24 lg:flex-row lg:gap-40">
          
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
                
                <h2 className="font-serif text-txt-01 text-[42px] md:text-[52px] lg:text-[68px] leading-[0.85] font-normal mb-8 lg:mb-12 tracking-tighter break-all">
                  我是如何幫你把<br />
                  <span className="text-state-04 select-none drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]">混亂釐清？</span>
                </h2>
                
                <div className="space-y-12">
                  <div className="grid grid-cols-2 gap-8 pt-12 border-t border-white/10">
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
                  <div className="relative flex-1">
                    
                    {/* 底層靜態軌道 */}
                    <div className="absolute left-[12px] top-0 bottom-0 w-[1px] bg-white/[0.03] z-0" />
                    
                    {/* 能量脈絡 (Pure Logic Sweep) - 水氣與木氣混合 */}
                    <motion.div 
                      style={{ height: pathHeight }}
                      className="absolute left-[12px] top-0 w-[1px] bg-gradient-to-b from-transparent via-state-04/80 to-state-01 z-10 shadow-[0_0_15px_rgba(94,206,160,0.4)]"
                    />
        
          {/* 傳遞 scroll 進度供子組件計算物理連動 */}
          <div className="relative z-20 flex flex-col gap-12 py-8 lg:gap-16">
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
      <div className="absolute bottom-0 left-0 right-0 h-[400px] pointer-events-none z-[5]" />
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
  progress: MotionValue<number>
}) {
  const stepRef = useRef<HTMLDivElement>(null);
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
      className="relative pl-12 mb-8 lg:pl-28 group last:mb-0"
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
             className="absolute z-10 w-2 h-2"
          />

          {/* [鈦金諧振] 回彈震盪效果 */}
          <motion.div
            animate={isTapped ? { scale: 0.8 } : { scale: 1 }}
            className="absolute inset-0 rotate-45 border border-white/10"
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