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
export type CheckboxVariant = "square" | "squircle" | "circle"

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  variant?: CheckboxVariant
  /** Optional visual scale on hover */
  hoverScale?: number
  /** Optional visual scale on active/tap */
  tapScale?: number
}

/**
 * Component Implementation
 */
const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      className = "",
      variant = "square",
      disabled = false,
      id,
      checked,
      defaultChecked,
      onChange,
      hoverScale = 1.05,
      tapScale = 0.95,
      ...props
    },
    ref
  ) => {
    const inputId = id || React.useId()
    const [isChecked, setIsChecked] = React.useState(checked || defaultChecked || false)

    React.useEffect(() => {
      if (checked !== undefined) {
        setIsChecked(checked)
      }
    }, [checked])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (checked === undefined) {
        setIsChecked(e.target.checked)
      }
      onChange?.(e)
    }

    const getBorderRadius = () => {
      switch (variant) {
        case "circle": return "rounded-full"
        case "squircle": return "rounded-[35%]"
        default: return "rounded-md"
      }
    }

    return (
      <div className={cn(
        "flex items-center space-x-2.5 group",
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      )}>
        <div className="relative flex items-center justify-center h-5 w-5">
          <input
            ref={ref}
            type="checkbox"
            id={inputId}
            disabled={disabled}
            checked={isChecked}
            onChange={handleChange}
            className="peer absolute inset-0 w-full h-full opacity-0 z-10 cursor-pointer disabled:cursor-not-allowed"
            {...props}
          />
          
          <div
            className={cn(
              "w-full h-full flex items-center justify-center border-2 transition-all duration-200",
              isChecked 
                ? "bg-indigo-600 border-indigo-600" 
                : "bg-transparent border-slate-300 dark:border-slate-700",
              getBorderRadius(),
              "peer-focus-visible:ring-2 peer-focus-visible:ring-indigo-500/20 peer-focus-visible:border-indigo-500",
              !disabled && "group-hover:border-indigo-500",
              "group-active:scale-95",
              className
            )}
            style={{
              transitionDelay: isChecked ? "0s" : "0.1s"
            }}
          >
            <svg
              className={cn(
                "w-3.5 h-3.5 text-white transition-opacity duration-200",
                isChecked ? "opacity-100" : "opacity-0"
              )}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path 
                d="M20 6L9 17L4 12" 
                style={{
                  strokeDasharray: 30,
                  strokeDashoffset: isChecked ? 0 : 30,
                  transition: "stroke-dashoffset 0.3s ease-out"
                }}
              />
            </svg>
          </div>
        </div>
        
        {label && (
          <label 
            htmlFor={inputId} 
            className="text-sm font-medium text-slate-700 dark:text-slate-300 cursor-pointer select-none group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
          >
            {label}
          </label>
        )}
      </div>
    )
  }
)

Checkbox.displayName = "Checkbox"

export { Checkbox }

/**
 * Example Usage:
 * 
 * <Checkbox label="Accept Terms" variant="squircle" defaultChecked />
 * 
 * <Checkbox label="Subscribe" variant="circle" />
 */
