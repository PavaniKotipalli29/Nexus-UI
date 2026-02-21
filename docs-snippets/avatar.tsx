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
export type AvatarSize = "sm" | "md" | "lg" | "xl" | "2xl"
export type AvatarVariant = "circle" | "rounded" | "square"
export type AvatarStatus = "online" | "offline" | "busy" | "away"

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string
  alt?: string
  fallback?: string
  size?: AvatarSize
  variant?: AvatarVariant
  status?: AvatarStatus
}

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: AvatarSize
  limit?: number
  spacing?: number
}

/**
 * Component Implementation: Avatar
 */
const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      src,
      alt = "Avatar",
      fallback,
      size = "md",
      variant = "circle",
      status,
      className = "",
      ...props
    },
    ref
  ) => {
    const sizes: Record<AvatarSize, string> = {
      sm: "w-8 h-8 text-xs",
      md: "w-10 h-10 text-sm",
      lg: "w-12 h-12 text-base",
      xl: "w-16 h-16 text-lg",
      "2xl": "w-24 h-24 text-2xl",
    }

    const variants: Record<AvatarVariant, string> = {
      circle: "rounded-full",
      rounded: "rounded-lg",
      square: "rounded-none",
    }

    const statusColors: Record<AvatarStatus, string> = {
      online: "bg-emerald-500",
      offline: "bg-slate-500",
      busy: "bg-red-500",
      away: "bg-amber-500",
    }

    const statusSizes: Record<AvatarSize, string> = {
      sm: "w-2 h-2",
      md: "w-2.5 h-2.5",
      lg: "w-3 h-3",
      xl: "w-3.5 h-3.5",
      "2xl": "w-4 h-4",
    }

    return (
      <div 
        ref={ref}
        className={cn("relative inline-block flex-shrink-0", className)}
        {...props}
      >
        <div 
          className={cn(
            "flex items-center justify-center overflow-hidden bg-slate-100 dark:bg-slate-800",
            "border-2 border-white dark:border-slate-950",
            "font-medium text-slate-600 dark:text-slate-400",
            sizes[size],
            variants[variant]
          )}
        >
          {src ? (
            <img 
              src={src} 
              alt={alt} 
              className="w-full h-full object-cover" 
              onError={(e) => {
                e.currentTarget.style.display = "none"
                e.currentTarget.parentElement?.querySelector(".avatar-fallback")?.classList.remove("hidden")
              }}
            />
          ) : null}
          
          <span className={cn("avatar-fallback leading-none select-none", src ? "hidden" : "block")}>
            {fallback || (alt ? alt.charAt(0).toUpperCase() : "?")}
          </span>
        </div>
        
        {status && (
          <span 
            className={cn(
              "absolute bottom-0 right-0 block rounded-full ring-2 ring-white dark:ring-slate-950",
              statusColors[status],
              statusSizes[size],
              variant === "circle" ? "translate-x-[5%] translate-y-[5%]" : "translate-x-1/2 translate-y-1/2"
            )} 
          />
        )}
      </div>
    )
  }
)

Avatar.displayName = "Avatar"

/**
 * Component Implementation: AvatarGroup
 */
const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  (
    {
      children,
      size = "md",
      limit,
      spacing = -12,
      className = "",
      ...props
    },
    ref
  ) => {
    const childrenArray = React.Children.toArray(children)
    const excess = limit ? childrenArray.length - limit : 0
    const displayChildren = limit ? childrenArray.slice(0, limit) : childrenArray

    return (
      <div 
        ref={ref}
        className={cn("flex items-center", className)} 
        style={{ gap: `${spacing}px` }}
        {...props}
      >
        {displayChildren.map((child, index) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child as React.ReactElement<any>, { 
              key: index,
              size,
              className: cn(
                "ring-2 ring-white dark:ring-slate-950",
                (child as React.ReactElement<any>).props.className
              )
            })
          }
          return child
        })}
        {excess > 0 && (
          <div 
            className={cn(
              "relative inline-flex items-center justify-center font-medium bg-slate-100",
              "dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-2",
              "border-white dark:border-slate-950 rounded-full",
              size === "sm" ? "w-8 h-8 text-[10px]" : 
              size === "md" ? "w-10 h-10 text-xs" : 
              size === "lg" ? "w-12 h-12 text-sm" : 
              "w-16 h-16 text-base"
            )}
          >
            <span>+{excess}</span>
          </div>
        )}
      </div>
    )
  }
)

AvatarGroup.displayName = "AvatarGroup"

export { Avatar, AvatarGroup }

/**
 * Example Usage:
 * 
 * <Avatar 
 *   src="user.jpg" 
 *   status="online" 
 *   variant="rounded" 
 * />
 * 
 * <AvatarGroup limit={3}>
 *   <Avatar src="1.jpg" />
 *   <Avatar src="2.jpg" />
 *   <Avatar src="3.jpg" />
 *   <Avatar src="4.jpg" />
 * </AvatarGroup>
 */
