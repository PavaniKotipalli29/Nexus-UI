"use client"

import React from "react"

/**
 * Utility: cn
 */
function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ")
}

/**
 * Type Definitions
 */
export type DividerVariant = 
  | "solid" 
  | "dashed" 
  | "dotted" 
  | "gradient" 
  | "gradient-animated" 
  | "fade" 
  | "glass" 
  | "glow" 
  | "zigzag"

export type DividerOrientation = "horizontal" | "vertical"

export type DividerLabelPosition = "left" | "center" | "right"

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: DividerVariant
  orientation?: DividerOrientation
  thickness?: number | string
  color?: string
  label?: React.ReactNode
  labelPosition?: DividerLabelPosition
  labelBackground?: string
}

/**
 * Component Implementation
 */
const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  (props, ref) => {
    const {
      className = "",
      variant = "solid",
      orientation = "horizontal",
      thickness = "1px",
      color,
      label,
      labelPosition = "center",
      labelBackground,
      style,
      ...otherProps
    } = props

    const isHorizontal = orientation === "horizontal"

    // Base classes
    const containerClasses = cn(
      "relative flex items-center transition-all duration-200 ease-in-out",
      isHorizontal ? "w-full h-auto min-h-[1px]" : "flex-col w-auto min-w-[1px] h-full min-h-[1em] px-4",
      className
    )

    // Default thickness logic
    const thicknessValue = typeof thickness === "number" ? `${thickness}px` : thickness
    
    // Zigzag and special variant adjustments
    const isSpecialVariant = variant === "zigzag" || variant === "dashed" || variant === "dotted"
    const finalThickness = (isSpecialVariant && (thickness.toString() === "1" || thickness === "1px")) 
      ? (variant === "zigzag" ? "12px" : "2px") 
      : thicknessValue

    // Line styles
    const lineStyles: React.CSSProperties = {
      backgroundColor: (variant === "solid" || variant === "fade") ? (color || "currentColor") : "transparent",
      [isHorizontal ? "height" : "width"]: finalThickness,
      [isHorizontal ? "width" : "height"]: "100%",
      ...(style || {})
    }

    // Variant logic for CSS
    const getVariantClasses = () => {
      switch (variant) {
        case "solid": return "opacity-20 dark:opacity-10"
        case "dashed": return "border-dashed border-slate-300 dark:border-slate-700"
        case "dotted": return "border-dotted border-slate-300 dark:border-slate-700"
        case "fade": return "bg-gradient-to-r from-transparent via-current to-transparent opacity-50"
        case "gradient": return "bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
        case "gradient-animated": return "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient-x"
        case "glass": return "bg-white/10 backdrop-blur-sm border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
        case "glow": return "bg-indigo-500/50 shadow-[0_0_10px_rgba(99,102,241,0.5)]"
        case "zigzag": return "opacity-60"
        default: return ""
      }
    }

    const zigzagStyles: React.CSSProperties = variant === "zigzag" ? {
      background: `linear-gradient(135deg, ${color || 'currentColor'} 25%, transparent 25%) -6px 0,
                  linear-gradient(225deg, ${color || 'currentColor'} 25%, transparent 25%) -6px 0,
                  linear-gradient(315deg, ${color || 'currentColor'} 25%, transparent 25%),
                  linear-gradient(45deg, ${color || 'currentColor'} 25%, transparent 25%)`,
      backgroundSize: "12px 12px",
      backgroundColor: "transparent",
      border: "none"
    } : {}

    return (
      <div 
        ref={ref} 
        className={containerClasses} 
        role="separator" 
        aria-orientation={orientation}
        {...otherProps}
      >
        {/* Decorative animations/styles via inline style */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes gradient-x {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 3s ease infinite;
          }
        `}} />

        {/* Start Line */}
        {(label && (labelPosition === "center" || labelPosition === "right")) && (
          <div 
            className={cn("flex-grow", getVariantClasses())} 
            style={{ ...lineStyles, ...zigzagStyles }} 
          />
        )}
        
        {/* Label */}
        {label && (
          <span 
            className={cn(
              "px-3 text-xs font-medium text-slate-500 dark:text-slate-400 whitespace-nowrap",
              labelBackground ? "" : "bg-white dark:bg-slate-950"
            )}
            style={{ backgroundColor: labelBackground }}
          >
            {label}
          </span>
        )}

        {/* End Line */}
        {(!label || labelPosition === "left" || labelPosition === "center") && (
          <div 
            className={cn("flex-grow", getVariantClasses())} 
            style={{ ...lineStyles, ...zigzagStyles }} 
          />
        )}
      </div>
    )
  }
)

Divider.displayName = "Divider"

export { Divider }

/**
 * Example Usage:
 * 
 * <Divider label="OR" variant="solid" />
 * 
 * <Divider variant="gradient-animated" thickness={2} className="my-8" />
 * 
 * <Divider variant="zigzag" color="#6366f1" />
 */
