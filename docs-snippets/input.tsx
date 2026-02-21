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
export type InputVariant = "default" | "filled" | "ghost" | "underline"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  success?: string
  helperText?: string
  variant?: InputVariant
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  clearable?: boolean
  onClear?: () => void
}

/**
 * Component Implementation
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const {
      label,
      error,
      success,
      helperText,
      variant = "default",
      isLoading = false,
      leftIcon,
      rightIcon,
      clearable = false,
      onClear,
      className = "",
      id,
      disabled,
      value,
      onChange,
      ...otherProps
    } = props

    const inputId = id || React.useId()
    
    // Base styles
    const baseInputStyles = "block w-full transition-all duration-200 outline-none focus:ring-2 disabled:cursor-not-allowed disabled:opacity-50 text-sm py-2"
    
    // Variant styles
    const variants: Record<InputVariant, string> = {
      default: "bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-md focus:border-indigo-500 focus:ring-indigo-500/10 shadow-sm",
      filled: "bg-slate-100 dark:bg-slate-900 border border-transparent rounded-md focus:bg-white dark:focus:bg-slate-950 focus:border-indigo-500 focus:ring-indigo-500/10",
      ghost: "bg-transparent border border-transparent rounded-md hover:bg-slate-50 dark:hover:bg-slate-900 focus:bg-white dark:focus:bg-slate-950 focus:border-indigo-500 focus:ring-indigo-500/10",
      underline: "bg-transparent border-b border-slate-200 dark:border-slate-800 rounded-none px-0 focus:border-indigo-500 focus:ring-0 shadow-none",
    }

    // Status styles
    const statusStyles = cn(
      error && "border-red-500 focus:border-red-500 focus:ring-red-500/10",
      success && "border-emerald-500 focus:border-emerald-500 focus:ring-emerald-500/10"
    )

    return (
      <div className={cn("w-full space-y-1.5", className)}>
        {label && (
          <label 
            htmlFor={inputId} 
            className="block text-sm font-medium text-slate-700 dark:text-slate-300"
          >
            {label}
          </label>
        )}
        
        <div className="relative group">
          {leftIcon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-indigo-500 transition-colors">
              <span className="w-4 h-4 flex items-center justify-center">{leftIcon}</span>
            </div>
          )}
          
          <input
            ref={ref}
            id={inputId}
            disabled={disabled || isLoading}
            value={value}
            onChange={onChange}
            className={cn(
              baseInputStyles,
              variants[variant],
              statusStyles,
              leftIcon ? "pl-10" : "pl-3",
              (rightIcon || isLoading || clearable) ? "pr-10" : "pr-3"
            )}
            {...otherProps}
          />

          <div className="absolute inset-y-0 right-0 flex items-center pr-3 space-x-1">
            {isLoading ? (
              <svg 
                className="animate-spin h-4 w-4 text-indigo-500" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : clearable && value && (
              <button 
                type="button" 
                onClick={onClear}
                className="p-0.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 transition-colors"
                aria-label="Clear input"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
            
            {!isLoading && rightIcon && (
              <div className="flex items-center text-slate-400 group-focus-within:text-indigo-500 transition-colors">
                <span className="w-4 h-4 flex items-center justify-center">{rightIcon}</span>
              </div>
            )}
          </div>
        </div>

        {error && (
          <p className="text-xs text-red-600 mt-1 flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {error}
          </p>
        )}
        
        {success && (
          <p className="text-xs text-emerald-600 mt-1 flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 13l4 4L19 7" />
            </svg>
            {success}
          </p>
        )}
        
        {helperText && !error && !success && (
          <p className="text-xs text-slate-500 mt-1">{helperText}</p>
        )}
      </div>
    )
  }
)

Input.displayName = "Input"

export { Input }

/**
 * Example Usage:
 * 
 * <Input 
 *   label="Email Address"
 *   placeholder="you@example.com"
 *   variant="filled"
 * />
 * 
 * <Input 
 *   error="Password must be at least 8 characters"
 *   type="password"
 *   placeholder="Enter password"
 * />
 */
