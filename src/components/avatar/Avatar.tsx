import React, { ReactNode } from "react";
import { BaseProps } from "../../types/shared";

export interface AvatarProps extends BaseProps {
  name?: string;
  src?: string;
  alt?: string;
  fallback?: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  variant?: "circle" | "rounded" | "square";
  status?: "online" | "offline" | "busy" | "away";
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = 'Avatar',
  fallback,
  size = 'md',
  className = '',
  status,
  variant = 'circle'
}) => {
  const sizes = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
    xl: 'w-16 h-16 text-lg',
    '2xl': 'w-24 h-24 text-2xl',
  };

  const variants = {
    circle: 'rounded-full',
    rounded: 'rounded-lg',
    square: 'rounded-none'
  };

  const statusColors = {
    online: 'bg-green-500',
    offline: 'bg-neutral-500',
    busy: 'bg-red-500',
    away: 'bg-yellow-500'
  };

  const statusSizes = {
    sm: 'w-2 h-2',
    md: 'w-2.5 h-2.5',
    lg: 'w-3 h-3',
    xl: 'w-3.5 h-3.5',
    '2xl': 'w-4 h-4'
  };

  return (
    <div className={`relative inline-block ${className}`}>
      <div 
        className={`
          flex items-center justify-center 
          overflow-hidden bg-neutral-100 dark:bg-neutral-800 
          border-2 border-white dark:border-neutral-900 
          font-medium text-neutral-600 dark:text-neutral-400 
          ${sizes[size as keyof typeof sizes]} 
          ${variants[variant as keyof typeof variants]}
        `}
      >
        {src ? (
          <img src={src} alt={alt} className="w-full h-full object-cover" />
        ) : (
          <span className="leading-none select-none">
            {fallback || (alt ? alt.charAt(0).toUpperCase() : '?')}
          </span>
        )}
      </div>
      {status && (
        <span 
          className={`
            absolute bottom-0 right-0 block 
            rounded-full ring-2 ring-white dark:ring-neutral-900 
            ${statusColors[status as keyof typeof statusColors]}
            ${statusSizes[size as keyof typeof statusSizes]}
            ${variant === 'circle' ? 'translate-x-[5%] translate-y-[5%]' : 'translate-x-1/2 translate-y-1/2'}
          `} 
        />
      )}
    </div>
  );
};
