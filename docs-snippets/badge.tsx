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
export type BadgeVariant = 
  | "default" 
  | "primary" 
  | "secondary" 
  | "success" 
  | "warning" 
  | "danger" 
  | "outline"

export type BadgeStyle = "solid" | "subtle" | "soft" | "pill"

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
  badgeStyle?: BadgeStyle
  size?: "sm" | "md" | "lg"
  icon?: React.ReactNode
}

/**
 * Component Implementation
 */
const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (props, ref) => {
    const {
      children,
      className = "",
      variant = "default",
      badgeStyle = "subtle",
      size = "md",
      icon,
      ...otherProps
    } = props

    const baseStyles = "inline-flex items-center justify-center font-medium transition-colors"
    
    const sizes = {
      sm: "text-[10px] px-1.5 py-0.5 gap-1",
      md: "text-xs px-2.5 py-0.5 gap-1.5",
      lg: "text-sm px-3 py-1 gap-2",
    }

    const getVariantStyles = (v: BadgeVariant, s: BadgeStyle) => {
      switch (s) {
        case "solid":
          switch (v) {
            case "primary": return "bg-indigo-600 text-white"
            case "secondary": return "bg-slate-600 text-white"
            case "success": return "bg-emerald-600 text-white"
            case "warning": return "bg-amber-500 text-white"
            case "danger": return "bg-red-600 text-white"
            case "outline": return "bg-transparent border border-slate-300 text-slate-700 dark:text-slate-300"
            default: return "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900"
          }
        
        case "pill":
        case "subtle":
          switch (v) {
            case "primary": return "bg-indigo-50 text-indigo-700 dark:bg-indigo-950/30 dark:text-indigo-300"
            case "secondary": return "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300"
            case "success": return "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300"
            case "warning": return "bg-amber-50 text-amber-700 dark:bg-amber-950/30 dark:text-amber-300"
            case "danger": return "bg-red-50 text-red-700 dark:bg-red-950/30 dark:text-red-300"
            case "outline": return "bg-slate-50 text-slate-600 border border-slate-200 dark:bg-slate-900 dark:text-slate-400 dark:border-slate-800"
            default: return "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300"
          }

        case "soft":
          switch (v) {
            case "primary": return "bg-indigo-50/50 text-indigo-600 dark:bg-indigo-900/20"
            case "success": return "bg-emerald-50/50 text-emerald-600 dark:bg-emerald-900/20"
            case "warning": return "bg-amber-50/50 text-amber-600 dark:bg-amber-900/20"
            case "danger": return "bg-red-50/50 text-red-600 dark:bg-red-900/20"
            default: return "bg-slate-50/50 text-slate-600 dark:bg-slate-800/50"
          }
        
        default:
          return ""
      }
    }

    const styleClasses = getVariantStyles(variant as BadgeVariant, badgeStyle as BadgeStyle)
    const roundedClass = badgeStyle === "pill" ? "rounded-full" : "rounded"

    return (
      <span 
        ref={ref}
        className={cn(baseStyles, sizes[size], styleClasses, roundedClass, className)}
        {...otherProps}
      >
        {icon && <span className="opacity-70 flex items-center">{icon}</span>}
        {children}
      </span>
    )
  }
)

Badge.displayName = "Badge"

export { Badge }

/**
 * Example Usage:
 * 
 * <Badge variant="success" badgeStyle="pill">
 *   Active
 * </Badge>
 * 
 * <Badge variant="primary" badgeStyle="solid" size="lg">
 *   New Feature
 * </Badge>
 */
