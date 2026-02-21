import React, { ReactNode } from "react";
import { BaseProps } from "../../types/shared";

export interface AvatarGroupProps extends BaseProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  limit?: number;
  spacing?: number;
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({ children, size = 'md', limit, spacing = -8, className = '' }) => {
  const childrenArray = React.Children.toArray(children);
  const excess = limit ? childrenArray.length - limit : 0;
  const displayChildren = limit ? childrenArray.slice(0, limit) : childrenArray;

  return (
    <div className={`flex items-center ${className}`} style={{ gap: spacing }}>
      {displayChildren.map((child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, { 
            key: index,
            size,
            className: `ring-2 ring-white dark:ring-neutral-950 ${(child as React.ReactElement<any>).props.className || ''}`
          });
        }
        return child;
      })}
      {excess > 0 && (
        <div 
          className="relative inline-flex items-center justify-center font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border-2 border-white dark:border-neutral-950 rounded-full"
          style={{ width: size === 'sm' ? 32 : size === 'md' ? 40 : size === 'lg' ? 48 : 64, height: size === 'sm' ? 32 : size === 'md' ? 40 : size === 'lg' ? 48 : 64 }}
        >
          <span className="text-xs">+{excess}</span>
        </div>
      )}
    </div>
  );
};
