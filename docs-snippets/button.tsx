"use client"

import React from "react"

/**
 * Utility: cn
 * Merges class names into a single string.
 */
function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ")
}

/**
 * Type Definitions
 */
export type ButtonVariant = 
  | "primary" 
  | "secondary" 
  | "outline" 
  | "ghost" 
  | "danger" 
  | "success" 
  | "warning" 
  | "link"

export type ButtonSize = "sm" | "md" | "lg"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  isLoading?: boolean
  fullWidth?: boolean
  icon?: React.ReactNode
  rightIcon?: React.ReactNode
  isIconButton?: boolean
  isActive?: boolean
  isRound?: boolean
}

/**
 * Component Implementation
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      children,
      className = "",
      variant = "primary",
      size = "md",
      disabled = false,
      type = "button",
      fullWidth = false,
      icon,
      rightIcon,
      isIconButton = false,
      isActive = false,
      isRound = false,
      isLoading = false,
      ...otherProps
    } = props

    // Base styles
    const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none"
    
    // Variant styles
    const variants: Record<ButtonVariant, string> = {
      primary: cn(
        isActive ? "bg-slate-900 ring-2 ring-slate-800" : "bg-slate-900",
        "text-white hover:bg-slate-800 focus:ring-slate-950 shadow-sm dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
      ),
      secondary: cn(
        isActive ? "bg-slate-100 border-slate-900 dark:bg-slate-800" : "bg-white dark:bg-slate-950",
        "text-slate-700 border border-slate-200 hover:bg-slate-50 dark:text-slate-200 dark:border-slate-800 dark:hover:bg-slate-900 focus:ring-slate-200 shadow-sm"
      ),
      outline: cn(
        isActive ? "bg-slate-50 border-slate-900" : "bg-transparent",
        "border border-slate-200 text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-900 focus:ring-slate-200"
      ),
      ghost: cn(
        isActive ? "bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-100" : "bg-transparent",
        "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 focus:ring-slate-100"
      ),
      danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 shadow-sm",
      success: "bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-emerald-500 shadow-sm",
      warning: "bg-amber-500 text-white hover:bg-amber-600 focus:ring-amber-400 shadow-sm",
      link: "bg-transparent text-slate-900 dark:text-slate-100 hover:underline px-0 py-0 focus:ring-0",
    }

    // Size styles
    const sizes: Record<ButtonSize, string> = {
      sm: isIconButton ? "p-1.5" : "px-3 py-1.5 text-sm",
      md: isIconButton ? "p-2" : "px-4 py-2 text-sm",
      lg: isIconButton ? "p-3" : "px-6 py-3 text-base",
    }

    const roundedStyle = isRound ? "rounded-full" : "rounded-md"
    const widthStyle = fullWidth ? "w-full" : ""

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variants[variant], sizes[size], roundedStyle, widthStyle, className)}
        {...otherProps}
      >
        {isLoading && (
          <svg 
            className="animate-spin -ml-1 mr-3 h-4 w-4 text-current" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        )}
        
        {!isLoading && icon && (
          <span className={cn(children ? "mr-2" : "", "flex items-center")}>
            {icon}
          </span>
        )}
        
        {children && (
          <span className="truncate">
            {children}
          </span>
        )}

        {!isLoading && rightIcon && (
          <span className={cn(children ? "ml-2" : "", "flex items-center")}>
            {rightIcon}
          </span>
        )}
      </button>
    )
  }
)

Button.displayName = "Button"

export { Button }

/**
 * Example Usage:
 * 
 * <Button variant="primary" onClick={() => console.log("Clicked")}>
 *   Click Me
 * </Button>
 * 
 * <Button variant="outline" icon={<SearchIcon />} isLoading>
 *   Searching...
 * </Button>
 * 
 * <Button isRound isIconButton variant="ghost">
 *   <UserIcon />
 * </Button>
 */
