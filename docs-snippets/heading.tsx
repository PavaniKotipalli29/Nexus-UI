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
export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingLevel
  weight?: "medium" | "semibold" | "bold"
  underlined?: boolean
  gradient?: boolean | string
  align?: "left" | "center" | "right"
  interactive?: boolean
}

/**
 * Component Implementation
 */
const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      children,
      level = 1,
      weight = "bold",
      underlined = false,
      gradient = false,
      align = "left",
      interactive = false,
      className = "",
      style,
      ...props
    },
    ref
  ) => {
    const Component = `h${level}` as unknown as React.ElementType

    const levels: Record<HeadingLevel, string> = {
      1: "text-4xl md:text-5xl font-bold tracking-tight",
      2: "text-3xl md:text-4xl font-bold tracking-tight",
      3: "text-2xl md:text-3xl font-semibold tracking-tight",
      4: "text-xl md:text-2xl font-semibold",
      5: "text-lg md:text-xl font-medium",
      6: "text-base font-medium",
    }

    const weights = {
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    }

    const alignments = {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    }

    const getGradientStyles = () => {
      if (!gradient) return ""
      const gradientValue = typeof gradient === "string" 
        ? gradient 
        : "from-slate-900 to-slate-500 dark:from-white dark:to-slate-400"
      return cn(
        "bg-clip-text text-transparent bg-gradient-to-r",
        gradientValue
      )
    }

    const classes = cn(
      "text-slate-900 dark:text-slate-100 leading-tight transition-all duration-200",
      levels[level],
      weights[weight as keyof typeof weights],
      alignments[align],
      getGradientStyles(),
      interactive && "cursor-pointer hover:opacity-80 active:scale-[0.98]",
      className
    )

    return (
      <div className={cn("inline-block relative group", align === "center" ? "w-full" : "")}>
        <Component
          ref={ref}
          className={classes}
          style={style}
          {...props}
        >
          {children}
        </Component>
        {underlined && (
          <div 
            className={cn(
              "h-1 bg-indigo-600 dark:bg-indigo-500 rounded-full mt-1.5 transition-all duration-700 ease-out",
              "w-full origin-left"
            )}
            style={{ 
              animation: "heading-grow 0.8s ease-out forwards",
              animationDelay: "0.2s"
            }}
          />
        )}
        {/* Inline CSS for the grow animation */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes heading-grow {
            from { width: 0; }
            to { width: 100%; }
          }
        `.replace(/\s+/g, ' ') }} />
      </div>
    )
  }
)

Heading.displayName = "Heading"

export { Heading }

/**
 * Example Usage:
 * 
 * <Heading level={1} underlined gradient>
 *   The Future of Web Design
 * </Heading>
 * 
 * <Heading level={3} align="center">
 *   Section Title
 * </Heading>
 */
