'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useSpring, useTransform, MotionValue } from 'framer-motion';
import { cn } from '@/lib/utils';

/**
 * [區塊 03] 服務項目 (Services)
 * 核心協議：金火水質感知實作
 */

interface ServiceCardProps {
  id: string;
  category: string;
  title: string;
  specs: string[];
  index: number;
  springX: MotionValue<number>;
  containerRect: DOMRect | null;
}

const ServiceCard = ({ 
  id, 
  category, 
  title, 
  specs, 
  springX,
  containerRect
}: Omit<ServiceCardProps, 'index'>) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // 使用 useRef 存儲 rect 避免在渲染/動畫循環中調用 getBoundingClientRect
  const rectRef = useRef<DOMRect | null>(null);

  useEffect(() => {
    if (cardRef.current) {
      rectRef.current = cardRef.current.getBoundingClientRect();
    }
  }, [containerRect]);

  // 計算相對於卡片的線性折射位移
  const linearShift = useTransform(springX, (x: number) => {
    if (!containerRect || !rectRef.current) return "-100%";
    const rect = rectRef.current;
    const relativeX = x - (rect.left - containerRect.left);
    const percentage = (relativeX / rect.width) * 100;
    return `${percentage - 50}%`;
  });

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        "relative flex-1 group min-h-[420px] md:min-h-[520px] lg:min-h-[640px] p-8 md:p-10 lg:p-14",
        "border-b border-white/10 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0",
        "transition-all duration-500 ease-out flex flex-col overflow-hidden",
        "z-10 hover:z-20"
      )}
    >
      {/* 材質：Mat-02 輕量折射玻璃 */}
      <div className={cn(
        "absolute inset-0 bg-bg-01/40 backdrop-blur-[2px] transition-colors duration-500",
        "group-hover:bg-bg-01/60"
      )} />
      
      {/* 表面紋理：垂直 1px 剛性掃描線 (0.04 Opacity) */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay" 
        style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 1px, var(--color-primary-01) 1px, var(--color-primary-01) 2px)' }}
      />

      {/* 全域線性折射遮罩 (Global Refraction) */}
      <motion.div 
        className="absolute inset-0 hidden transition-opacity duration-300 opacity-0 pointer-events-none group-hover:opacity-100 mix-blend-plus-lighter lg:block"
        style={{
          background: `linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%)`,
          backgroundSize: '200% 100%',
          backgroundPositionX: linearShift
        }}
      />

      {/* 頂部剛性光跡 */}
      <div className={cn(
        "absolute top-0 left-0 right-0 h-[1px] transition-all duration-700",
        "bg-primary-01-bright/10 opacity-50 group-hover:bg-accent-01 group-hover:shadow-[0_0_20px_theme(colors.accent-01)] group-hover:opacity-100"
      )} />

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex flex-col gap-2 mb-12">
          <div className="flex items-center gap-3">
            <span className="font-mono text-txt-04 text-[11px] tracking-tighter opacity-60">ID</span>
            <div className="h-[1px] w-4 bg-primary-01/10 group-hover:w-8 transition-all duration-500" />
            <span className="font-mono text-txt-01 text-[13px] tracking-[0.2em]">{id}</span>
          </div>
        </div>

        <div className="mb-10">
          <h4 className="font-serif text-txt-01 text-[28px] lg:text-[36px] font-normal tracking-tight leading-[1.1]">
            {title}
          </h4>
        </div>

        <div className="relative mb-auto">
          <ul className="flex flex-col gap-6">
            {specs.map((spec, i) => (
              <li key={i} className="flex gap-4 group/item">
                <div className="w-1 h-1 mt-2 transition-colors rotate-45 bg-txt-01/20 group-hover/item:bg-txt-01" />
                <span className="font-sans text-txt-02 text-[15px] leading-relaxed font-light group-hover/item:text-txt-01 transition-colors">
                  {spec}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-8 mt-12 border-t border-white/5">
          <div className="flex flex-col gap-2">
            <span className="font-sans text-txt-02 text-[14px] tracking-widest font-black uppercase">
              {category}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export function Services() {
  const containerRef = useRef<HTMLElement>(null);
  const [containerRect, setContainerRect] = useState<DOMRect | null>(null);
  
  const springX = useSpring(0, { stiffness: 60, damping: 25 });
  const springY = useSpring(0, { stiffness: 60, damping: 25 });

  useEffect(() => {
    if (containerRef.current) {
      setContainerRect(containerRef.current.getBoundingClientRect());
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    springX.set(x);
    springY.set(y);
  };

  const servicesData = [
    {
      id: "01",
      category: "形象包裝",
      title: "幫你把門面做對",
      specs: [
        "把你的想法變成看得到的網頁",
        "文字、顏色、排版全部是你的個人氣質"
      ]
    },
    {
      id: "02",
      category: "系統整理",
      title: "幫你把瑣事變自動",
      specs: [
        "把麻煩的表格手工填寫交給程式自動跑",
        "串接現有的工具節省多個視窗切換",
        "實現只有想法的後台"
      ]
    },
    {
      id: "03",
      category: "現況掌控",
      title: "幫你看清楚帳目",
      specs: [
        "用直覺的圖表一秒看清現狀",
        "自動計算關鍵數據，不再手動按計算機"
      ]
    }
  ];

  return (
    <section 
      id="services"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full py-24 overflow-hidden lg:py-40 cs-02-section-cut"
      style={{ background: 'radial-gradient(circle at 50% -20%, #1A2635 0%, #0A0C0F 60%)' }}
    >
      <div className="absolute top-0 left-0 right-0 z-50 flex justify-center">
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-[1px] bg-primary-01/10"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-01-bright/30 to-transparent" />
        </motion.div>
      </div>

      <div className="container relative z-10 w-full px-4 mx-auto md:px-16 lg:px-24">
        <div className="flex flex-col mb-16 lg:mb-24">
          <motion.div
            initial={{ scaleY: 0.1, filter: 'blur(15px)', opacity: 0 }}
            whileInView={{ scaleY: 1, filter: 'blur(0px)', opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6"
          >
            <h2 className="font-serif text-txt-01 text-[32px] md:text-[42px] lg:text-[64px] font-normal leading-tight tracking-tight break-all">
              把你的想法理順，做成能動、好用的系統
            </h2>
          </motion.div>
        </div>

        <div className="relative flex flex-col md:flex-row border border-white/10 rounded-none overflow-hidden group/grid bg-[#0A0C0F]">
          {servicesData.map((service) => (
            <ServiceCard 
              key={service.id} 
              {...service} 
              springX={springX}
              containerRect={containerRect}
            />
          ))}
        </div>
      </div>
    </section>
  );
}