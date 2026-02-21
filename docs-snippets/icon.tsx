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
export type IconSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl"

export interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: IconSize
  color?: string
  fill?: string
  variant?: "outline" | "solid"
  path?: string
  strokeWidth?: number
}

/**
 * Component Implementation
 */
const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  (
    {
      size = "md",
      color = "currentColor",
      fill = "none",
      variant = "outline",
      path,
      children,
      strokeWidth = 2,
      viewBox = "0 0 24 24",
      className = "",
      ...props
    },
    ref
  ) => {
    const sizes: Record<IconSize, string> = {
      xs: "w-3 h-3",
      sm: "w-4 h-4",
      md: "w-6 h-6",
      lg: "w-8 h-8",
      xl: "w-12 h-12",
      "2xl": "w-16 h-16",
    }

    const isSolid = variant === "solid"

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        viewBox={viewBox}
        className={cn(sizes[size], className)}
        fill={isSolid ? (fill === "none" ? color : fill) : "none"}
        stroke={isSolid ? "none" : color}
        strokeWidth={isSolid ? 0 : strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        {path && <path d={path} />}
        {children}
      </svg>
    )
  }
)

Icon.displayName = "Icon"

export { Icon }

/**
 * Example Usage:
 * 
 * <Icon 
 *   size="md" 
 *   color="indigo-500" 
 *   path="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" 
 * />
 * 
 * <Icon size="lg" variant="solid">
 *   <circle cx="12" cy="12" r="10" />
 *   <path d="M12 8v4l3 3" />
 * </Icon>
 */
