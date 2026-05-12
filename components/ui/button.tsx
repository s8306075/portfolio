"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
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
          bg: "#E8702A", // Accent-01
          textColor: "#0A0C0F", // Bg-01
          borderRadius: "2px 8px 2px 8px", // 非對稱切角: tl&br 2px, tr&bl 8px
          border: "none",
          shadow: "rgba(232, 112, 42, 0.20)",
          font: "font-sans" as string,
        };
        if (size === "large") {
          return { ...base, padding: "14px 32px", minWidth: "200px", height: "52px", fontSize: "14px", iconSize: "16px", gap: "8px", shadowBlur: "12px", shadowAlpha: 0.3 };
        } else if (size === "medium") {
          return { ...base, padding: "10px 24px", minWidth: "auto", height: "40px", fontSize: "14px", iconSize: "14px", gap: "6px", shadowBlur: "8px", shadowAlpha: 0.25 };
        } else {
          return { ...base, padding: "6px 16px", minWidth: "auto", height: "32px", fontSize: "12px", iconSize: "12px", gap: "4px", shadowBlur: "6px", shadowAlpha: 0.2, font: "font-mono" };
        }
      } 
      // Secondary 變體
      else if (variant === "secondary") {
        const base = {
          bg: "transparent",
          textColor: "#E8EBF0", // Txt-01
          borderRadius: "4px", // 幾何穩定性優先
          border: "1px solid #1F252C",
          font: "font-sans" as string,
          shadowAlpha: 0,
          shadowBlur: "0px",
        };
        if (size === "large") {
          return { ...base, padding: "14px 32px", minWidth: "200px", height: "52px", fontSize: "14px", iconSize: "16px", gap: "8px" };
        } else if (size === "medium") {
          return { ...base, padding: "10px 24px", minWidth: "auto", height: "40px", fontSize: "14px", iconSize: "14px", gap: "6px" };
        } else {
          return { ...base, padding: "6px 16px", minWidth: "auto", height: "32px", fontSize: "12px", iconSize: "12px", gap: "4px", textColor: "#A8ADB8", font: "font-mono" };
        }
      } 
      // Ghost 變體
      else {
        const base = {
          bg: "transparent",
          textColor: "#787E8C", // Txt-03
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

    // 動能曲線定義
    const springTransition: any = {
      type: "spring",
      stiffness: 300,
      damping: 20,
      mass: 0.8,
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled || isLoading) return;
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 150);
      if (props.onClick) props.onClick(e);
    };

    // 分離 motion props 與原生 button props
    const { 
      whileHover, 
      whileTap, 
      animate: animateProp, 
      initial: initialProp, 
      transition: transitionProp,
      ...nativeProps 
    } = props as any;

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
          borderRadius: spec.borderRadius,
          backgroundColor: spec.bg,
          border: spec.border,
          boxShadow: variant === "primary" ? `0 0 0 1.5px rgba(232, 112, 42, 0.2), 0 0 ${spec.shadowBlur} rgba(232, 112, 42, ${spec.shadowAlpha})` : "none",
        }}
        animate={{
          scale: isClicked ? (size === "small" ? 0.85 : 0.96) : 1,
          y: isClicked ? (variant === "ghost" ? 0 : 1) : (isHovered && variant === "secondary" ? -4 : isHovered && variant === "ghost" ? -2 : 0),
        }}
        transition={springTransition}
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
                <span style={{ width: spec.iconSize, height: spec.iconSize }} className="flex-shrink-0">
                  {icon}
                </span>
              )}
              <span style={{ fontSize: spec.fontSize }} className="font-normal tracking-tight whitespace-nowrap">
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
              className="absolute inset-0 bg-white pointer-events-none z-30"
              transition={{ duration: 0.15 }}
            />
          )}
        </AnimatePresence>
      </motion.button>
    );
  }
);

Button.displayName = "Button";
