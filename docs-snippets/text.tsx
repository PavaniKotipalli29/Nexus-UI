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
export type TypographyWeight = "light" | "regular" | "medium" | "semibold" | "bold"
export type TypographyAlign = "left" | "center" | "right" | "justify"
export type TypographyTone = 
  | "default" 
  | "muted" 
  | "subtle" 
  | "primary" 
  | "success" 
  | "warning" 
  | "danger" 
  | "disabled" 
  | "inverse"

export type TextVariant = 
  | "display-xl" | "display-lg" 
  | "heading-xl" | "heading-lg" | "heading-md" 
  | "body-lg" | "body-md" | "body-sm" 
  | "label-sm" | "caption" | "code"

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType
  variant?: TextVariant
  weight?: TypographyWeight
  tone?: TypographyTone
  align?: TypographyAlign
  truncate?: boolean
  gradient?: boolean | string
  balanced?: boolean
  decoration?: "underline" | "line-through" | "none"
  /** Enables hover/tap effects without framer-motion */
  interactive?: boolean
}

/**
 * Component Implementation
 */
const Text = React.forwardRef<HTMLElement, TextProps>(
  (props, ref) => {
    const {
      children,
      as,
      className = "",
      variant = "body-md",
      weight = "regular",
      tone = "default",
      align = "left",
      truncate = false,
      gradient,
      balanced,
      decoration = "none",
      interactive = false,
      style,
      ...otherProps
    } = props

    // Determine the HTML tag
    const Component = as || (
      variant.startsWith("display") || variant.startsWith("heading") 
        ? "h2" 
        : variant === "code" 
          ? "code" 
          : "p"
    )

    const variantStyles: Record<TextVariant, string> = {
      "display-xl": "text-5xl md:text-6xl tracking-tight leading-tight",
      "display-lg": "text-4xl md:text-5xl tracking-tight leading-tight",
      "heading-xl": "text-3xl md:text-4xl tracking-tight leading-snug",
      "heading-lg": "text-2xl md:text-3xl tracking-tight leading-snug",
      "heading-md": "text-xl md:text-2xl tracking-tight leading-snug",
      "body-lg": "text-lg leading-relaxed",
      "body-md": "text-base leading-relaxed",
      "body-sm": "text-sm leading-relaxed",
      "label-sm": "text-sm font-medium leading-none",
      "caption": "text-xs leading-normal font-normal",
      "code": "font-mono text-sm bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded",
    }

    const weights: Record<TypographyWeight, string> = {
      light: "font-light",
      regular: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    }

    const tones: Record<TypographyTone, string> = {
      default: "text-slate-900 dark:text-slate-100",
      muted: "text-slate-500 dark:text-slate-400",
      subtle: "text-slate-400 dark:text-slate-500",
      primary: "text-indigo-600 dark:text-indigo-400",
      success: "text-emerald-600 dark:text-emerald-400",
      warning: "text-amber-600 dark:text-amber-400",
      danger: "text-red-600 dark:text-red-400",
      disabled: "text-slate-300 dark:text-slate-600",
      inverse: "text-white dark:text-slate-900",
    }

    const getGradientStyles = () => {
      if (!gradient) return ""
      const gradientValue = typeof gradient === "string" 
        ? gradient 
        : "from-indigo-600 via-purple-500 to-pink-600"
      return cn(
        "bg-clip-text text-transparent bg-gradient-to-r",
        gradientValue
      )
    }

    const decorations = {
      underline: "underline underline-offset-4 decoration-current",
      "line-through": "line-through decoration-current",
      none: "",
    }

    const alignments = {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify",
    }

    const classes = cn(
      variantStyles[variant],
      weights[weight],
      !gradient && tones[tone],
      getGradientStyles(),
      alignments[align],
      truncate && "truncate",
      balanced && "[text-wrap:balance]",
      decorations[decoration],
      interactive && "cursor-pointer transition-all duration-200 hover:opacity-80 active:scale-95",
      className
    )

    return (
      <Component
        ref={ref}
        className={classes}
        style={style}
        {...otherProps}
      >
        {children}
      </Component>
    )
  }
)

Text.displayName = "Text"

export { Text }

/**
 * Example Usage:
 * 
 * <Text variant="display-xl" weight="bold" gradient>
 *   Beautiful Title
 * </Text>
 * 
 * <Text tone="muted" balanced truncate>
 *   Some long text that should be balanced and truncated if it exceeds one line...
 * </Text>
 */
