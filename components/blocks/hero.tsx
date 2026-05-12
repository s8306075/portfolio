"use client";

import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const LIFT_CURVE = [0.16, 1, 0.3, 1];

export function Hero() {
  const [stage, setStage] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isIdle, setIsIdle] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const resetIdle = () => {
      setIsIdle(false);
      clearTimeout(timer);
      timer = setTimeout(() => setIsIdle(true), 3000);
    };
    window.addEventListener("mousemove", resetIdle);
    resetIdle();
    return () => {
      window.removeEventListener("mousemove", resetIdle);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const sequence = [
      { s: 1, d: 600 },  // S1: 骨架繪製
      { s: 2, d: 700 },  // S2: 算力充填
      { s: 3, d: 400 },  // S3: 臨界脈衝
      { s: 4, d: 150 },  // S4: 屏息真空
      { s: 5, d: 300 },  // S5: 核心炸裂 (Scan Line & Normalization)
      { s: 6, d: 600 },  // S6: 拓撲重組
      { s: 7, d: 0 },    // S7: 最終定影
    ];
    let timeout: NodeJS.Timeout;
    const run = (idx: number) => {
      if (idx < sequence.length) {
        setStage(sequence[idx].s);
        timeout = setTimeout(() => run(idx + 1), sequence[idx].d);
      }
    };
    run(0);
    return () => clearTimeout(timeout);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full bg-bg-01 overflow-hidden flex items-center cs-01-void"
    >
      <div className="absolute inset-0 mat-05-satin opacity-[0.02] pointer-events-none z-0" />
      
      {/* [Int-01] Cold Nuclear Vibration (物質微粒跳動) */}
      <motion.div 
        animate={{ opacity: [0.03, 0.07, 0.03] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay pointer-events-none"
      />

      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      >
        <AnimatePresence>
          {isIdle && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 4, ease: "easeInOut" }}
              className="absolute inset-0"
              style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)',
                backgroundSize: '40px 40px',
                filter: 'blur(0.5px)'
              }}
            />
          )}
        </AnimatePresence>
      </div>

      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-12 gap-12 lg:gap-0 relative z-20 h-full">
        <div className="col-span-12 lg:col-span-5 flex flex-col justify-center min-h-[500px] lg:min-h-[650px] relative w-full lg:w-auto">
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col relative z-20"
          >
            <div className="relative mb-6 lg:mb-10 w-full max-w-full sm:max-w-[550px]">
              <h1 
                className="font-serif text-txt-01 text-[36px] sm:text-[44px] md:text-[52px] lg:text-[60px] xl:text-[72px] leading-[1.05] font-normal tracking-tighter break-words"
              >
                把那些你聽不懂的降到零門檻
              </h1>
            </div>

            <h3 className="font-sans text-txt-02 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px] xl:text-[20px] font-light w-full max-w-full sm:max-w-[460px] mb-6 lg:mb-10 leading-[1.7] lg:leading-[1.8] border-l border-white/30 pl-4 lg:pl-8 break-words text-txt-02/90">
              想法很多思緒卻很亂<br className="hidden sm:block" />
              十年全端經驗幫你實作
            </h3>

            <p className="font-editorial text-txt-02 text-[18px] md:text-[24px] lg:text-[26px] italic mb-8 lg:mb-12 opacity-80 flex items-center gap-4">
              <span className="w-8 h-[0.5px] bg-white/10" />
              全端獨立開發，拒絕模板
            </p>

            <div className="flex flex-col sm:flex-row gap-4 lg:gap-8 w-full max-w-[280px] sm:max-w-none">
              <Button variant="primary" className="w-full sm:w-[160px] lg:w-[180px] h-12 text-[15px] tracking-widest font-normal bg-[#E8702A] hover:bg-[#ff7d2d] transition-colors">
                丟出你的問題
              </Button>
              <Button 
                variant="secondary" 
                onClick={() => {
                  const targetId = 'cases';
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
                }}
                className="w-full sm:w-[160px] lg:w-[180px] h-12 text-[15px] tracking-widest border-white/20 hover:bg-white/5 font-normal"
              >
                看我怎麼處理
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="hidden lg:flex lg:col-span-7 relative min-h-[400px] lg:min-h-[500px] items-center justify-center lg:justify-end">
          <VisualEvolution stage={stage} />
        </div>
      </div>
    </section>
  );
}

function VisualEvolution({ stage }: { stage: number }) {
  return (
    <div className="relative w-full aspect-square max-w-[540px] flex items-center justify-center lg:justify-end">
      <AnimatePresence mode="wait">
        {stage >= 7 ? (
          <ServiceModules key="modules" />
        ) : stage >= 6 ? (
          <Reconstruction key="reconstruction" stage={stage} />
        ) : (
          <div className="relative w-full h-full flex items-center justify-center lg:justify-end pr-[10%] overflow-visible">
      <motion.div 
        animate={{ 
          rotate: stage >= 5 ? 0 : 15,
          skewX: stage === 5 ? [0, -6, 2, 0] : 0, // High-rigidity snap inertia
          filter: stage === 4 ? "contrast(1.2) brightness(1.2)" : "none",
          scale: stage === 5 ? [1, 1.02, 1] : 1
        }}
        transition={{
          rotate: { 
            duration: stage === 5 ? 0.2 : 0.4, 
            ease: [0.16, 1, 0.3, 1] 
          },
          skewX: { duration: 0.35, ease: "easeOut" },
          scale: { duration: 0.3 }
        }}
        className="relative will-change-transform"
      >
        {/* Performant Strobe Layer (Replacement for heavy filters) */}
        {stage === 5 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.8, 0] }}
            transition={{ duration: 0.2, times: [0, 0.1, 1] }}
            className="absolute inset-0 bg-white mix-blend-screen z-50 pointer-events-none blur-sm"
          />
        )}

        <div className="relative flex flex-col gap-10 items-end">
          {[480, 240, 360].map((width, i) => (
            <motion.div
              key={i}
              initial={{ width: 0, opacity: 0 }}
              animate={{ 
                width: stage >= 1 ? width : 0, 
                opacity: stage >= 5 ? 0 : 1,
                x: stage >= 5 ? (30 + i * 15) : 0, // Enhanced staggered drift
                scaleX: stage === 3 ? [1, 1.015, 1] : 1,
                height: 1,
                backgroundColor: stage >= 3 ? "var(--color-txt-01)" : "var(--color-primary-01)"
              }}
              transition={{ 
                width: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
                opacity: { 
                  duration: 0.25, 
                  delay: stage >= 5 ? i * 0.05 : 0, // 50ms Chained Dissolution
                  ease: "easeOut" 
                },
                x: { duration: 0.4, ease: "easeOut" },
                scaleX: { duration: 0.8, ease: "easeInOut" },
                backgroundColor: { duration: 0.4 }
              }}
              className="relative mat-01-rhodium shadow-[0_0_1px_rgba(255,255,255,0.1)]"
              style={{ transformOrigin: "right center" }}
            >
                    {/* Anchor Points - 鋼性節點 */}
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: stage >= 1 ? 1 : 0 }}
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-[2.5px] h-[2.5px] bg-txt-01 shadow-[0_0_10px_theme(colors.txt.01)] rotate-45"
                    />
                    
                    {/* [Opt-05] 結構應力點：Along path movement */}
                    {stage >= 1 && stage < 5 && (
                      <motion.div 
                        animate={{ left: ["0%", "100%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
                        className="absolute top-1/2 -translate-y-1/2 w-1 h-1 bg-txt-01 blur-[0.5px] opacity-40 z-20"
                      />
                    )}
                    
                    {/* Trailing Light - 消融前奏 */}
                    {stage < 4 && (
                      <motion.div 
                        initial={{ left: "0%" }}
                        animate={{ left: "100%" }}
                        transition={{ duration: 2, ease: "linear", repeat: Infinity }}
                        className="absolute top-0 bottom-0 w-[60px] bg-gradient-to-r from-transparent via-txt-01/20 to-transparent blur-[1px]"
                      />
                    )}

                    {/* Photorealistic Afterimage - 視網膜殘留虛影 (灰階偏移) */}
                    {stage === 2 && (
                      <motion.div 
                        initial={{ opacity: 0, x: -2 }}
                        animate={{ opacity: [0, 0.1, 0], x: [-2, -6] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 bg-txt-04/20 blur-[0.5px]"
                      />
                    )}
                  </motion.div>
                ))}
              </div>
              
              {stage === 5 && (
                <div className="absolute inset-0 z-50 pointer-events-none flex items-center justify-center">
                  <motion.div 
                    initial={{ height: 0, opacity: 1 }}
                    animate={{ height: "250%", opacity: [1, 1, 0] }}
                    transition={{ 
                      height: { duration: 0.3, ease: [0.15, 1, 0.3, 1] },
                      opacity: { duration: 0.3, times: [0, 0.8, 1] }
                    }}
                    className="absolute w-[2000px] flex items-center justify-center overflow-visible"
                    style={{ top: "50%", transform: "translateY(-50%)" }}
                  >
                    <div className="w-full h-[2px] bg-primary-01-bright shadow-[0_0_60px_theme(colors.primary-01-bright)] relative">
                      <div className="absolute left-1/2 -translate-x-1/2 w-full h-full bg-primary-01-bright" />
                      <div className="absolute inset-x-0 bottom-full bg-gradient-to-t from-primary-01-bright to-transparent blur-[30px] h-[60px] opacity-80" />
                      <div className="absolute inset-x-0 top-full bg-gradient-to-b from-primary-01-bright to-transparent blur-[30px] h-[60px] opacity-80" />
                    </div>
                  </motion.div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Reconstruction({ stage }: { stage: number }) {
  const [mounted, setMounted] = useState(false);
  const [fragments, setFragments] = useState<{ id: number; x: number; y: number; scaleX: number; rotate: number; delay: number }[]>([]);

  useEffect(() => {
    const data = Array.from({ length: 24 }).map((_, i) => ({
      id: i,
      x: Math.random() * 800 - 400,
      y: Math.random() * 600 - 300,
      scaleX: Math.random() * 2 + 1,
      rotate: Math.random() * 180,
      delay: Math.random() * 0.2
    }));
    const timer = setTimeout(() => {
      setMounted(true);
      setFragments(data);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      {fragments.map((f) => (
        <motion.div
          key={f.id}
          initial={{ 
            x: f.x, 
            y: f.y, 
            opacity: 0,
            scaleX: f.scaleX,
            rotate: f.rotate 
          }}
          animate={{ 
            x: 0,
            y: 0,
            opacity: [0, 1, 0],
            scale: 1,
            rotate: 0
          }}
          transition={{ 
            duration: 0.5, 
            delay: f.delay,
            ease: [0.16, 1, 0.3, 1] 
          }}
          className="absolute left-1/2 top-1/2 w-16 h-[0.5px] bg-primary-01-bright shadow-[0_0_8px_theme(colors.primary-01-bright)]"
        />
      ))}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: [0, 1, 0], scale: [0.8, 1.1, 1.2] }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute inset-0 bg-white/5 blur-3xl rounded-full"
      />
    </div>
  );
}

function ServiceModules() {
  const modules = [
    { id: "01", title: "介面手作感", sub: "介面", desc: "拒絕套用模板，我用代碼製作出你的靈魂。" },
    { id: "02", title: "自動化的自由", sub: "自動", desc: "把重複性工作變成後台，把你的時間還給自己。" },
    { id: "03", title: "數據不騙人", sub: "清晰", desc: "清理混亂紀錄，用圖表讓你看清下一步怎麼走" },
  ];

  return (
    <div className="flex flex-col gap-4 w-full max-w-[520px] relative">
      {/* Re-imaging Glow Bloom */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.4, 0] }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute inset-0 bg-white/5 blur-[100px] pointer-events-none"
      />

      {modules.map((m, i) => (
        <motion.div
          key={m.id}
          initial={{ y: -60, opacity: 0, scaleY: 1.1 }}
          animate={{ 
            y: 0, 
            opacity: 1, 
            scaleY: [1.1, 0.995, 1],
            filter: ["brightness(1)", "brightness(1.5)", "brightness(1)"]
          }}
          whileHover={{ scale: 1.01, x: -8 }}
          transition={{ 
            delay: i * 0.12,
            y: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
            scaleY: { duration: 0.4, times: [0, 0.8, 1] },
            filter: { duration: 0.3, times: [0, 0.2, 1] },
            opacity: { duration: 0.5 }
          }}
          className={cn(
            "relative group p-6 lg:p-7 mat-02-mica border border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden",
            // Asymmetric displacement based on index
            i === 0 ? "lg:mr-12" : i === 1 ? "lg:ml-12" : "lg:mr-6 lg:ml-6"
          )}
          style={{ transform: "translateZ(0px)" }}
        >
          {/* Reconstruction Fragments */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0, 0.2, 0], scale: [0.8, 1.2] }}
            transition={{ duration: 0.6, delay: i * 0.12 + 0.4 }}
            className="absolute inset-0 bg-primary-01/10 blur-xl pointer-events-none"
          />

          {/* Subtle Scanline on Module Appearance */}
          <motion.div 
            initial={{ left: "-100%" }}
            animate={{ left: "200%" }}
            transition={{ duration: 1.2, delay: i * 0.12 + 0.3, ease: "linear" }}
            className="absolute top-0 bottom-0 w-[40%] bg-gradient-to-r from-transparent via-primary-01/10 to-transparent skew-x-[-20deg] pointer-events-none"
          />
          <div className="absolute inset-0 bg-noise-texture opacity-[0.02] pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary-01-bright/30 to-transparent" />
          
          <div className="relative z-10 flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-[11px] text-txt-04 group-hover:text-txt-02 transition-colors tracking-[0.3em]">{m.id}</span>
              <span className="font-editorial text-[15px] text-accent-02 italic opacity-80 group-hover:opacity-100 transition-opacity">
                {m.sub}
              </span>
            </div>
            
            <h4 className="font-serif text-[21px] text-txt-01 font-semibold tracking-tight mb-2 group-hover:text-txt-01 transition-colors">
              {m.title}
            </h4>
            
            <p className="font-sans text-[14px] text-txt-02 font-light leading-[1.6] group-hover:text-txt-02 transition-colors">
              {m.desc}
            </p>
          </div>
          
          <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-white/0 group-hover:bg-primary-01-bright/80 transition-all duration-300" />
        </motion.div>
      ))}
    </div>
  );
}
