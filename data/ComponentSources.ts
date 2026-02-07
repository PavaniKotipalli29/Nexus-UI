export const SOURCES = {
  types: `import React, { ReactNode } from "react";

export type ComponentSize = "sm" | "md" | "lg";
export type ComponentVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "danger"
  | "success"
  | "warning"
  | "link";

export interface ButtonProps extends BaseProps {
  variant?: ComponentVariant;
  size?: ComponentSize;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
  icon?: ReactNode;
  rightIcon?: ReactNode;
  isIconButton?: boolean;
  isActive?: boolean;
  isRound?: boolean;
  isLoading?: boolean;
}

export interface IconButtonProps extends Omit<ButtonProps, 'leftIcon' | 'rightIcon' | 'icon' | 'children' | 'variant'> {
  icon: ReactNode;
  'aria-label': string;
  tooltip?: string;
  variant?: ComponentVariant | 'solid' | 'surface';
}

export interface BaseProps {
  children?: ReactNode;
  className?: string;
}

// Primitives
export interface TextProps extends BaseProps {
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
  weight?: "normal" | "medium" | "semibold" | "bold" | "black";
  align?: "left" | "center" | "right" | "justify";
  color?: "default" | "muted" | "primary" | "error" | "success" | "warning" | "white";
}

export interface HeadingProps extends BaseProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  align?: "left" | "center" | "right";
  weight?: "normal" | "medium" | "semibold" | "bold" | "black";
}

export interface BadgeProps extends BaseProps {
  variant?: "default" | "primary" | "secondary" | "outline" | "ghost" | "danger" | "success" | "warning" | "info";
  size?: "sm" | "md" | "lg";
  isRound?: boolean;
  icon?: ReactNode;
}

export interface AvatarProps extends BaseProps {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  shape?: "circle" | "rounded" | "square";
  status?: "online" | "offline" | "busy" | "away";
}

// Layout
export interface BoxProps extends BaseProps {
  as?: any;
  padding?: string | number;
  margin?: string | number;
  bg?: string;
  border?: string;
  rounded?: string;
  shadow?: string;
  width?: string;
  height?: string;
  position?: "relative" | "absolute" | "fixed" | "sticky";
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export interface FlexProps extends BoxProps {
  direction?: "row" | "col" | "row-reverse" | "col-reverse";
  align?: "start" | "center" | "end" | "stretch" | "baseline";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  gap?: string | number;
}
export interface ContainerProps extends BaseProps {
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

export interface CardProps extends BaseProps {
  padding?: "none" | "sm" | "md" | "lg";
  interactive?: boolean;
}

export interface StackProps extends BaseProps {
  direction?: "row" | "col";
  spacing?: 0 | 1 | 2 | 3 | 4 | 6 | 8 | 10 | 12;
  align?: "start" | "center" | "end" | "stretch";
  justify?: "start" | "center" | "end" | "between";
}

// Data Display
export interface IconProps extends BaseProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'xs';
  color?: string;
  fill?: string;
  viewBox?: string;
  path?: string;
  strokeWidth?: number;
  variant?: 'outline' | 'solid';
}

// Feedback
export interface SpinnerProps extends BaseProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'current' | 'primary' | 'white' | 'neutral';
}

export interface SkeletonProps extends BaseProps {
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
}

export interface ProgressBarProps extends BaseProps {
  value?: number;
  max?: number;
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'gradient';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showLabel?: boolean;
  indeterminate?: boolean;
  label?: string;
}

// Forms
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helperText?: string;
  options: { label: string; value: string }[];
}

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
}

export interface SliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label?: string;
  min?: number;
  max?: number;
  step?: number;
  value: number;
  onChange: (value: number) => void;
}

// Composite
export interface ModalProps extends BaseProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  footer?: ReactNode;
}

export interface DrawerProps extends BaseProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  placement?: "left" | "right" | "top" | "bottom";
  size?: "sm" | "md" | "lg" | "xl" | "full";
  footer?: ReactNode;
}

export interface TooltipProps extends BaseProps {
  content: string;
  position?: "top" | "bottom" | "left" | "right";
  delay?: number;
}

export interface PopoverProps extends BaseProps {
  trigger: ReactNode;
  content: ReactNode;
  position?: "top" | "bottom" | "left" | "right";
}

export interface TabsProps extends BaseProps {
  items: { label: string; content: ReactNode; id: string }[];
  defaultTab?: string;
  variant?: "line" | "enclosed" | "pills";
}

export interface AccordionProps extends BaseProps {
  items: { title: string; content: ReactNode; id: string }[];
  allowMultiple?: boolean;
}

export interface DropdownProps extends BaseProps {
  trigger: ReactNode;
  items: { label: string; onClick?: () => void; href?: string; icon?: ReactNode; danger?: boolean }[];
  align?: "left" | "right";
}

export interface AlertProps extends BaseProps {
  variant?: "info" | "success" | "warning" | "danger";
  title?: string;
  icon?: ReactNode;
  onClose?: () => void;
}

export interface ToastProps extends BaseProps {
  variant?: "info" | "success" | "warning" | "danger";
  title?: string;
  description?: string;
  duration?: number;
  onClose: () => void;
}

// List (Composite)
export interface ListProps extends BaseProps {
  variant?: "default" | "compact";
  orientation?: "vertical" | "horizontal";
  component?: any;
}

export interface ListItemProps extends BaseProps {
  variant?: "default" | "compact";
  onClick?: () => void;
  disabled?: boolean;
  selected?: boolean;
  href?: string;
  component?: any;
}

export interface ListItemIconProps extends BaseProps {
  position?: "start" | "end";
}

export interface ListItemTextProps extends BaseProps {
  primary: ReactNode;
  secondary?: ReactNode;
  primaryTypographyProps?: TextProps;
  secondaryTypographyProps?: TextProps;
}

export interface ListDividerProps extends BaseProps {
  component?: any;
  inset?: boolean;
}

// Navigation
export interface BreadcrumbItem {
  label: string;
  href?: string;
  isCurrent?: boolean;
}

export interface BreadcrumbsProps extends BaseProps {
  items: BreadcrumbItem[];
  separator?: ReactNode;
}

export interface Step {
  title: string;
  description?: string;
  status: "complete" | "current" | "upcoming";
}

export interface StepperProps extends BaseProps {
  steps: Step[];
  orientation?: "horizontal" | "vertical";
}

export interface PaginationProps extends BaseProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

// Utilities
export interface CodeBlockProps extends BaseProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
}

export interface PortalProps {
  children: ReactNode;
}
`,
  primitives: `import React from 'react';
import { BaseProps, ComponentVariant, ComponentSize, TextProps, HeadingProps, BadgeProps, ButtonProps, AvatarProps, BoxProps, FlexProps, IconProps } from '../../types';

export const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  type = 'button',
  fullWidth = false,
  icon,
  rightIcon,
  isIconButton = false,
  isActive = false,
  isRound = false,
  isLoading = false,
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: \`\${isActive ? 'bg-primary-700 ring-2 ring-primary-500' : 'bg-primary-600'} text-white hover:bg-primary-700 focus:ring-primary-500 shadow-sm\`,
    secondary: \`\${isActive ? 'bg-neutral-100 dark:bg-neutral-700 border-primary-500' : 'bg-white dark:bg-neutral-800'} text-neutral-700 border border-neutral-200 hover:bg-neutral-50 dark:text-neutral-200 dark:border-neutral-700 dark:hover:bg-neutral-700 focus:ring-neutral-200 shadow-sm\`,
    outline: \`\${isActive ? 'bg-primary-50 dark:bg-primary-950/30 border-primary-700' : 'bg-transparent'} border border-primary-600 text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-950/20 focus:ring-primary-500\`,
    ghost: \`\${isActive ? 'bg-neutral-100 dark:bg-neutral-800 text-primary-600' : 'bg-transparent'} text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800 focus:ring-neutral-200\`,
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 shadow-sm',
    success: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500 shadow-sm',
    warning: 'bg-yellow-50 text-white hover:bg-yellow-600 focus:ring-yellow-400 shadow-sm',
    link: 'bg-transparent text-primary-600 hover:underline px-0 py-0 focus:ring-0',
  };

  const sizes = {
    sm: isIconButton ? 'p-1.5' : 'px-3 py-1.5 text-sm',
    md: isIconButton ? 'p-2' : 'px-4 py-2 text-sm',
    lg: isIconButton ? 'p-3' : 'px-6 py-3 text-base',
  };

  const roundedStyle = isRound ? 'rounded-full' : 'rounded-md';
  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <button
      type={type}
      className={\`\${baseStyles} \${variants[variant]} \${sizes[size]} \${roundedStyle} \${widthStyle} \${className}\`}
      onClick={onClick}
      disabled={disabled || isLoading}
    >
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {!isLoading && icon && <span className={children ? 'mr-2' : ''}>{icon}</span>}
      {children}
      {!isLoading && rightIcon && <span className={children ? 'ml-2' : ''}>{rightIcon}</span>}
    </button>
  );
};

export const Text: React.FC<TextProps> = ({
  children,
  className = '',
  size = 'base',
  weight = 'normal',
  color = 'default',
  align = 'left'
}) => {
  const sizes = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
  };
  const weights = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    black: 'font-black',
  };
  const colors = {
    default: 'text-neutral-900 dark:text-neutral-100',
    muted: 'text-neutral-500 dark:text-neutral-400',
    primary: 'text-primary-600',
    error: 'text-red-600',
    success: 'text-green-600',
    warning: 'text-yellow-500',
    white: 'text-white',
  };
  return <p className={\`\${sizes[size]} \${weights[weight]} \${colors[color]} text-\${align} \${className}\`}>{children}</p>;
};`,
  layout: `import React from 'react';
import { ContainerProps, CardProps, StackProps } from '../../types';

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  size = 'lg'
}) => {
  const sizes = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    xl: 'max-w-[1400px]',
    full: 'max-w-full',
  };

  return (
    <div className={\`\${sizes[size]} mx-auto px-4 sm:px-6 lg:px-8 \${className}\`}>
      {children}
    </div>
  );
};

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  padding = 'md',
  interactive = false
}) => {
  const paddings = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div className={\`
      bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden
      \${paddings[padding]}
      \${interactive ? 'transition-all duration-200 hover:shadow-lg hover:border-primary-500/50 cursor-pointer active:scale-[0.98]' : 'shadow-sm'}
      \${className}
    \`}>
      {children}
    </div>
  );
};`,
  forms: `import React, { useState } from 'react';
import { InputProps, CheckboxProps, SwitchProps, TextareaProps, SelectProps, RadioProps, SliderProps } from '../../types';
import { Button, Heading, Text, Icon, Box } from './Primitives';
import { Stack, Card } from './Layout';

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  className = '',
  id,
  ...props
}) => {
  return (
    <div className="w-full space-y-1.5">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
          {label}
        </label>
      )}
      <input
        id={id}
        className={\`
          block w-full px-3 py-2 bg-white dark:bg-neutral-900 border rounded-md shadow-sm transition duration-200
          placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500
          disabled:bg-neutral-50 disabled:text-neutral-500 disabled:cursor-not-allowed
          \${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-neutral-200 dark:border-neutral-800'}
          \${className}
        \`}
        {...props}
      />
      {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
      {helperText && !error && <p className="text-xs text-neutral-500 mt-1">{helperText}</p>}
    </div>
  );
};`,
  feedback: `import React from 'react';
import { SpinnerProps, SkeletonProps } from '../../types';

export const Spinner: React.FC<SpinnerProps> = ({
  size = 'md',
  color = 'primary',
  className = ''
}) => {
  const sizes = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-3',
    lg: 'w-12 h-12 border-4',
    xl: 'w-16 h-16 border-4'
  };

  const colors = {
    current: 'border-current',
    primary: 'border-primary-600 text-primary-200',
    white: 'border-white text-white/30',
    neutral: 'border-neutral-600 text-neutral-200'
  };

  return (
    <div 
      className={\`animate-spin rounded-full border-t-transparent \${sizes[size]} \${colors[color]} \${className}\`} 
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};`,
  composite: `import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { 
  ModalProps, DrawerProps, TooltipProps, PopoverProps, 
  TabsProps, AccordionProps, DropdownProps, AlertProps, ToastProps 
} from '../../types';
import { Card } from './Layout';
import { Button, Heading, Text, Icon, Box } from './Primitives';

export const Modal: React.FC<ModalProps> = ({ 
  isOpen, onClose, title, size = 'md', children, footer, className = '' 
}) => {
  if (!isOpen) return null;

  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    full: 'max-w-full m-4',
  };

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className={\`relative w-full \${sizeClasses[size]} bg-white dark:bg-neutral-900 rounded-xl shadow-2xl border border-neutral-200 dark:border-neutral-800 flex flex-col max-h-[90vh] \${className}\`}>
        <div className="flex items-center justify-between p-6 border-b border-neutral-100 dark:border-neutral-800">
          <Heading level={4}>{title}</Heading>
          <button onClick={onClose} className="p-2 -mr-2 text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">
            <Icon size="sm"><path d="M6 18L18 6M6 6l12 12" /></Icon>
          </button>
        </div>
        <div className="p-6 overflow-y-auto">{children}</div>
        {footer && <div className="p-6 border-t border-neutral-100 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/50 rounded-b-xl flex justify-end gap-3">{footer}</div>}
      </div>
    </div>,
    document.body
  );
};`,
  navigation: `import React, { useState } from 'react';
import { BreadcrumbsProps, StepperProps } from '../../types';
import { Icon, Text } from './Primitives';

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, separator, className = '' }) => {
  return (
    <nav className={className}>
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <span className="mx-2 text-neutral-400 select-none">{separator || '>'}</span>}
            <a href={item.href} className={\`text-sm font-medium \${item.isCurrent ? 'text-neutral-900' : 'text-neutral-500'}\`}>{item.label}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
};`,
  patterns: `import React, { ReactNode } from 'react';
import { Heading, Text, Button, Icon, Box } from './Primitives';
import { Card, Container, Stack } from './Layout';

export const AuthLayout: React.FC<{ children: ReactNode; title?: string }> = ({ children, title }) => {
  return (
    <div className="min-h-screen flex bg-neutral-50 dark:bg-neutral-950">
      <div className="flex-1 flex flex-col justify-center py-12 px-4 bg-white dark:bg-neutral-900 lg:w-[480px]">
        <div className="mx-auto w-full max-w-sm">
          {title && <Heading level={2}>{title}</Heading>}
          <div className="mt-8">{children}</div>
        </div>
      </div>
    </div>
  );
};`,
  progressBarJSX: `import React, { forwardRef } from 'react';
import styles from './ProgressBar.module.css';
import { ProgressBarProps } from '../../../types';

export const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(({
  value = 0,
  max = 100,
  variant = 'default',
  size = 'md',
  showLabel = false,
  indeterminate = false,
  label,
  labelPosition = 'top',
  className = '',
  ...props
}, ref) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  const labelContent = (
    <div className={styles.labelContainer}>
      {label && <span className={styles.label}>{label}</span>}
      {showLabel && !indeterminate && (
        <span className={styles.value}>{Math.round(percentage)}%</span>
      )}
    </div>
  );

  return (
    <div className={\`\${styles.container} \${styles[labelPosition]} \${className}\`} ref={ref} {...props}>
      {labelPosition === 'top' && (showLabel || label) && labelContent}
      <div 
        className={\`\${styles.progressBar} \${styles[size]} \${styles[variant]} \${indeterminate ? styles.indeterminate : ''}\`}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={indeterminate ? undefined : value}
      >
        <div 
          className={styles.indicator} 
          style={{ width: indeterminate ? '50%' : \`\${percentage}%\` }}
        />
      </div>
      {labelPosition === 'right' && (showLabel || label) && labelContent}
    </div>
  );
});`,
  progressBarCSS: `/* Base Styles */
.progressBar {
  width: 100%;
  background-color: var(--neutral-200);
  border-radius: var(--radius-full);
  overflow: hidden;
  position: relative;
}

.dark .progressBar {
  background-color: var(--neutral-800);
}

.indicator {
  height: 100%;
  border-radius: var(--radius-full);
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background-color: var(--primary-600);
}`
};
