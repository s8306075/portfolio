"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * [分子組件: 按鈕]
 * 嚴格遵循 MOLECULAR_SPECS.md 之定義。
 * 涵蓋 Primary, Secondary, Ghost 三大類及 Large, Medium, Small 三種尺寸。
 * 整合物質狀態系統 (Material), 光學細節 (Optics) 與動能邏輯 (Motion)。
 */

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "large" | "medium" | "small";
  isLoading?: boolean;
  icon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "medium", isLoading, disabled, children, icon, ...props }, ref) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    // 根據規範映射物理參數
    const spec = useMemo(() => {
      // Primary 變體
      if (variant === "primary") {
        const base = {
          bg: "#68C4D1", // Secondary-01
          hoverBg: "#7BD1DD", // 僅提升約 8% 亮度
          textColor: "#0A0C0F", // Bg-01
          clipPath: "polygon(2px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 2px), calc(100% - 2px) 100%, 8px 100%, 0 calc(100% - 8px), 0 2px)",
          borderRadius: undefined,
          border: "none",
          shadow: "rgba(104, 196, 209, 0.20)",
          font: "font-sans" as string,
        };
        if (size === "large") {
          return { ...base, padding: "14px 40px", minWidth: "220px", height: "56px", fontSize: "16px", iconSize: "20px", gap: "12px", shadowBlur: "16px", shadowAlpha: 0.35 };
        } else if (size === "medium") {
          return { ...base, padding: "10px 24px", minWidth: "auto", height: "42px", fontSize: "14px", iconSize: "16px", gap: "8px", shadowBlur: "8px", shadowAlpha: 0.25 };
        } else {
          return { ...base, padding: "6px 16px", minWidth: "auto", height: "34px", fontSize: "12px", iconSize: "14px", gap: "6px", shadowBlur: "6px", shadowAlpha: 0.2, font: "font-mono" };
        }
      } 
      // Secondary 變體
      else if (variant === "secondary") {
        const base = {
          bg: "transparent",
          textColor: "#E8EBF0", // Txt-01
          clipPath: "polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)", // 4px symmetric cut
          borderRadius: undefined,
          border: "1px solid rgba(255, 255, 255, 0.12)", // 強化邊緣可讀性
          hoverBorder: "1px solid rgba(255, 255, 255, 0.3)", // Hover 時亮度補償
          font: "font-sans" as string,
          shadowAlpha: 0,
          shadowBlur: "0px",
        };
        if (size === "large") {
          return { ...base, padding: "14px 40px", minWidth: "220px", height: "56px", fontSize: "16px", iconSize: "20px", gap: "12px" };
        } else if (size === "medium") {
          return { ...base, padding: "10px 24px", minWidth: "auto", height: "42px", fontSize: "14px", iconSize: "16px", gap: "8px" };
        } else {
          return { ...base, padding: "6px 16px", minWidth: "auto", height: "34px", fontSize: "12px", iconSize: "14px", gap: "6px", textColor: "#A8ADB8", font: "font-mono" };
        }
      } 
      // Ghost 變體
      else {
        const base = {
          bg: "transparent",
          textColor: "#787E8C", // Txt-03
          clipPath: "none",
          borderRadius: "0",
          border: "none",
          font: (size === "small" ? "font-mono" : "font-sans") as string,
          shadowAlpha: 0,
          shadowBlur: "0px",
        };
        if (size === "large") {
          return { ...base, padding: "14px 0", minWidth: "auto", height: "auto", fontSize: "14px", iconSize: "16px", gap: "8px" };
        } else if (size === "medium") {
          return { ...base, padding: "10px 0", minWidth: "auto", height: "auto", fontSize: "14px", iconSize: "14px", gap: "6px" };
        } else {
          return { ...base, padding: "6px 0", minWidth: "auto", height: "auto", fontSize: "12px", iconSize: "12px", gap: "4px", textColor: "#4A5158" };
        }
      }
    }, [variant, size]);

    // 動能曲線定義：高剛性切入 (High-Rigidity Snap-in)
    const springTransition: unknown = {
      type: "spring",
      stiffness: 500, 
      damping: 30,
      mass: 0.8,
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled || isLoading) return;
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 150);
      if (props.onClick) props.onClick(e);
    };

    // 直接使用 props，motion.button 會處理相關屬性
    const nativeProps = props as Record<string, unknown>;

    return (
      <motion.button
        ref={ref}
        disabled={disabled || isLoading}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={cn(
          "relative inline-flex items-center justify-center cursor-pointer select-none outline-none group",
          spec.font || "font-sans",
          className
        )}
        style={{
          padding: spec.padding,
          minWidth: spec.minWidth,
          height: spec.height,
          borderRadius: spec.borderRadius || "0",
          clipPath: spec.clipPath,
          backgroundColor: isHovered && (spec as { hoverBg?: string }).hoverBg ? (spec as { hoverBg?: string }).hoverBg : spec.bg,
          border: isHovered && (spec as { hoverBorder?: string }).hoverBorder ? (spec as { hoverBorder?: string }).hoverBorder : spec.border,
          filter: variant === "primary" ? `drop-shadow(0 0 ${spec.shadowBlur} rgba(104, 196, 209, ${spec.shadowAlpha}))` : "none",
          transition: "border-color 0.2s ease-out, background-color 0.2s ease-out",
        }}
        animate={{
          scale: isClicked ? (size === "small" ? 0.85 : 0.96) : 1,
          y: isClicked ? (variant === "ghost" ? 0 : 1) : (isHovered && variant === "secondary" ? -4 : isHovered && variant === "ghost" ? -2 : 0),
        }}
        transition={springTransition as Record<string, unknown>}
        {...nativeProps}
      >
        {/* ---- 層級 0: 物質材質 (Materials) ---- */}
        
        {/* [Mat-01] & [Mat-05] (Primary) */}
        {variant === "primary" && (
          <>
            {/* 拉絲底質 */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-[0.08]"
              style={{
                background: `repeating-linear-gradient(${size === "large" ? "-5deg" : "0deg"}, transparent, transparent 1px, rgba(0,0,0,0.15) 1px, rgba(0,0,0,0.15) 2px)`,
              }}
            />
            {/* 噪點消光 (Mat-05) */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                maskImage: size === "large" ? 'radial-gradient(circle at center, black 60%, rgba(0,0,0,0.8) 100%)' : 'none'
              }}
            />
          </>
        )}

        {/* [Mat-02] & [Opt-03] (Secondary) */}
        {variant === "secondary" && (
          <>
            <div className="absolute inset-0 bg-bg-01/90 backdrop-blur-[12px] pointer-events-none" />
            {/* 精密格柵 (Opt-03) */}
            <div 
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)`,
                backgroundSize: '4px 4px'
              }}
            />
            {/* 頂部冷光微稜線 (Opt-05) */}
            <div className="absolute top-0 left-0 right-0 h-[0.5px] bg-white/10 pointer-events-none" />
          </>
        )}

        {/* ---- 層級 1: 光學與動能 (Optics & Motion) ---- */}

        {/* [Opt-02] 熔接感應 (Hover) & [An-02] 頻閃 */}
        <AnimatePresence>
          {isHovered && variant === "primary" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.4, 0.2, 0.6, 0.1, 0.5, 0] }}
              exit={{ opacity: 0 }}
              transition={{ 
                opacity: { 
                  repeat: Infinity, 
                  duration: 2, 
                  times: [0, 0.1, 0.25, 0.4, 0.6, 0.85, 1],
                  ease: "linear"
                } 
              }}
              className="absolute inset-0 pointer-events-none bg-white/[0.12] mix-blend-screen"
            />
          )}
        </AnimatePresence>

        {/* [Int-03] 刀刃焦點框 (Focus-Visible logic via class) */}
        <div 
          className={cn(
            "absolute inset-[-2px] pointer-events-none opacity-0 transition-opacity duration-200 z-10 border",
            "group-focus-visible:opacity-100",
            variant === "primary" ? "border-accent-01/60" : "border-white/30",
            variant === "ghost" ? "rounded-none" : "rounded-[6px]"
          )}
        />

        {/* ---- 層級 2: 內容 (Content) ---- */}
        <motion.div 
          className={cn(
            "relative z-20 flex items-center justify-center h-full w-full",
            variant !== "primary" && "group-focus-visible:text-[#E8EBF0]"
          )}
          animate={{
            color: variant === "primary" 
              ? spec.textColor 
              : (isHovered ? "#E8EBF0" : spec.textColor)
          }}
          transition={{ duration: 0.2 }}
          style={{ gap: spec.gap }}
        >
          {isLoading ? (
            <div className="flex items-center space-x-1.5">
              {[0, 1, 2].map((i) => (
                <motion.div 
                  key={i}
                  animate={{ opacity: [0.2, 1, 0.2] }} 
                  transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }} 
                  className="w-1.5 h-1.5 bg-current rounded-full" 
                />
              ))}
            </div>
          ) : (
            <>
              {icon && (
                <span 
                  style={{ width: spec.iconSize, height: spec.iconSize }} 
                  className="flex items-center justify-center flex-shrink-0"
                >
                  {React.isValidElement(icon) ? React.cloneElement(icon as React.ReactElement<{ size: string }>, { size: spec.iconSize }) : icon}
                </span>
              )}
              <span 
                style={{ fontSize: spec.fontSize }} 
                className="flex items-center font-normal leading-none tracking-tight whitespace-nowrap"
              >
                {children}
              </span>
            </>
          )}
        </motion.div>

        {/* [Mo-01] / [Mo-04] 閃擊與殘影 (Click) */}
        <AnimatePresence>
          {isClicked && (
            <motion.div
              initial={{ opacity: 0.4, scale: 0.95 }}
              animate={{ opacity: 0, scale: 1.2 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-30 bg-white pointer-events-none"
              transition={{ duration: 0.15 }}
            />
          )}
        </AnimatePresence>
      </motion.button>
    );
  }
);

Button.displayName = "Button";