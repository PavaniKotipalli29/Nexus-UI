import React from "react";
import { Button, ButtonProps } from "./Button";

export interface SplitButtonProps extends ButtonProps {
  onActionClick?: () => void;
  onMenuClick?: () => void;
}

export const SplitButton: React.FC<SplitButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  onActionClick,
  onMenuClick,
  disabled = false,
  className = '',
  icon,
}) => {
  return (
    <div className={`inline-flex shadow-sm rounded-md overflow-hidden ${className}`}>
      <Button
        variant={variant as any}
        size={size as any}
        disabled={disabled}
        onClick={onActionClick || onClick}
        className="rounded-r-none border-r-0"
        icon={icon}
      >
        {children}
      </Button>
      <Button
        variant={variant as any}
        size={size as any}
        disabled={disabled}
        onClick={onMenuClick}
        className="rounded-l-none px-2 border-l border-white/20"
        isIconButton
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </Button>
    </div>
  );
};
