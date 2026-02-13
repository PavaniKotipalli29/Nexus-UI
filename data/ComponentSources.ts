import { SourceData } from '../types';

export const SOURCES: SourceData = {
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
  variant?: "circle" | "rounded" | "square";
  status?: "online" | "offline" | "busy" | "away";
}

export interface AvatarGroupProps extends BaseProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  limit?: number;
  spacing?: number;
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

export type InputVariant = "default" | "filled" | "ghost" | "underline";

// Forms
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  success?: string;
  helperText?: string;
  variant?: InputVariant;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  clearable?: boolean;
  onClear?: () => void;
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
import { BaseProps, ComponentVariant, ComponentSize, TextProps, HeadingProps, BadgeProps, ButtonProps, AvatarProps, AvatarGroupProps, BoxProps, FlexProps, IconProps, LabelProps, CaptionProps, CodeProps, BlockquoteProps } from '../../types';

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
    primary: \\\`\\\${isActive ? 'bg-primary-700 ring-2 ring-primary-500' : 'bg-primary-600'} text-white hover:bg-primary-700 focus:ring-primary-500 shadow-sm\\\`,
    secondary: \\\`\\\${isActive ? 'bg-neutral-100 dark:bg-neutral-700 border-primary-500' : 'bg-white dark:bg-neutral-800'} text-neutral-700 border border-neutral-200 hover:bg-neutral-50 dark:text-neutral-200 dark:border-neutral-700 dark:hover:bg-neutral-700 focus:ring-neutral-200 shadow-sm\\\`,
    outline: \\\`\\\${isActive ? 'bg-primary-50 dark:bg-primary-950/30 border-primary-700' : 'bg-transparent'} border border-primary-600 text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-950/20 focus:ring-primary-500\\\`,
    ghost: \\\`\\\${isActive ? 'bg-neutral-100 dark:bg-neutral-800 text-primary-600' : 'bg-transparent'} text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800 focus:ring-neutral-200\\\`,
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
      className={#BACKTICK_ESCAPE#\${baseStyles} \${variants[variant]} \${sizes[size]} \${roundedStyle} \${widthStyle} \${className}#BACKTICK_ESCAPE#}
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
  variant = 'body-md',
  weight = 'regular',
  tone = 'default',
  align = 'left',
  truncate = false,
  ...props
}) => {
  // Map variants to HTML tags
  const Component = React.useMemo(() => {
    if (variant.startsWith('display')) return 'h1';
    if (variant.startsWith('heading')) {
      const level = variant.split('-')[1];
      return level === 'xl' ? 'h2' : level === 'lg' ? 'h3' : 'h4';
    }
    if (variant === 'code') return 'code';
    if (variant === 'caption') return 'span';
    return 'p';
  }, [variant]);

  const variantStyles = {
    'display-xl': 'text-5xl md:text-6xl tracking-tight leading-tight',
    'display-lg': 'text-4xl md:text-5xl tracking-tight leading-tight',
    'heading-xl': 'text-3xl md:text-4xl tracking-tight leading-snug',
    'heading-lg': 'text-2xl md:text-3xl tracking-tight leading-snug',
    'heading-md': 'text-xl md:text-2xl tracking-tight leading-snug',
    'body-lg': 'text-lg leading-relaxed',
    'body-md': 'text-base leading-relaxed',
    'body-sm': 'text-sm leading-relaxed',
    'label-md': 'text-sm font-medium leading-none',
    'caption': 'text-xs leading-normal',
    'code': 'font-mono text-sm bg-neutral-100 dark:bg-neutral-800 px-1 py-0.5 rounded',
  };

  const weights = {
    light: 'font-light',
    regular: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  const tones = {
    default: 'text-neutral-900 dark:text-neutral-100',
    muted: 'text-neutral-500 dark:text-neutral-400',
    subtle: 'text-neutral-400 dark:text-neutral-500',
    primary: 'text-primary-600 dark:text-primary-400',
    success: 'text-green-600 dark:text-green-400',
    warning: 'text-yellow-600 dark:text-yellow-400',
    danger: 'text-red-600 dark:text-red-400',
    destructive: 'text-red-600 dark:text-red-400', // alias for danger
    disabled: 'text-neutral-300 dark:text-neutral-600',
    inverse: 'text-white dark:text-neutral-900',
  };

  // Legacy support helper (mapped to new variants/tones where possible)
  const legacySizeMap: Record<string, string> = {
    'xs': 'caption', 'sm': 'body-sm', 'base': 'body-md', 'lg': 'body-lg', 
    'xl': 'heading-md', '2xl': 'heading-lg', '3xl': 'heading-xl'
  };
  const legacyColorMap: Record<string, string> = {
    'error': 'danger', 'white': 'inverse'
  };
  
  // Handle legacy props if they exist in rest props (casted to any to avoid TS errors for now)
  const p = props as any;
  const finalVariant = p.size ? legacySizeMap[p.size] || variant : variant;
  const finalTone = p.color ? legacyColorMap[p.color] || p.color : tone;

  const classes = [
    variantStyles[finalVariant as keyof typeof variantStyles],
    weights[weight as keyof typeof weights],
    tones[finalTone as keyof typeof tones],
    #BACKTICK_ESCAPE#text-\${align}#BACKTICK_ESCAPE#,
    truncate ? 'truncate' : '',
    className
  ].filter(Boolean).join(' ');

  return <Component className={classes}>{children}</Component>;
};

export const Heading: React.FC<HeadingProps> = ({
  children,
  className = '',
  level = 1,
  align = 'left',
  weight = 'bold',
  tone = 'default',
  truncate = false,
}) => {
  const Tag = #BACKTICK_ESCAPE#h\${level}#BACKTICK_ESCAPE# as any;
  const styles = {
    1: 'text-4xl tracking-tight lg:text-5xl',
    2: 'text-3xl tracking-tight',
    3: 'text-2xl tracking-tight',
    4: 'text-xl',
    5: 'text-lg',
    6: 'text-base',
  };

  const weights = {
    regular: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  const tones = {
    default: 'text-neutral-900 dark:text-neutral-100',
    muted: 'text-neutral-500 dark:text-neutral-400',
    subtle: 'text-neutral-400 dark:text-neutral-500',
    destructive: 'text-red-600 dark:text-red-400',
    success: 'text-green-600 dark:text-green-400',
  };

  const classes = [
    styles[level as keyof typeof styles],
    weights[weight as keyof typeof weights],
    tones[tone as keyof typeof tones],
    #BACKTICK_ESCAPE#text-\${align}#BACKTICK_ESCAPE#,
    truncate ? 'truncate block' : '',
    className
  ].filter(Boolean).join(' ');

  return <Tag className={classes}>{children}</Tag>;
};

export const Label: React.FC<LabelProps> = ({
  children,
  className = '',
  htmlFor,
  required = false,
  variant = 'default',
  size = 'md',
  disabled = false,
  isLoading = false,
  weight = 'medium',
  align = 'left',
}) => {
  const baseStyles = 'inline-flex items-center gap-2 font-medium transition-all duration-200 rounded-md';
  
  const variants = {
    default: 'text-neutral-700 dark:text-neutral-300 bg-transparent',
    subtle: 'bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 border border-transparent',
    primary: 'bg-primary-600 text-white hover:bg-primary-700 shadow-sm',
    success: 'bg-green-600 text-white hover:bg-green-700 shadow-sm',
    warning: 'bg-yellow-500 text-white hover:bg-yellow-600 shadow-sm',
    danger: 'bg-red-600 text-white hover:bg-red-700 shadow-sm',
    destructive: 'bg-red-600 text-white hover:bg-red-700 shadow-sm',
    info: 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm',
    outline: 'bg-transparent border border-primary-600 text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-950/20',
    ghost: 'bg-transparent text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800',
    gradient: 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-md font-bold',
  };

  const sizes = {
    sm: 'px-2.5 py-1 text-xs',
    md: 'px-3.5 py-1.5 text-sm',
    lg: 'px-5 py-2.5 text-base',
  };

  const weights = {
    regular: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  const statusStyles = disabled ? 'opacity-50 cursor-not-allowed grayscale-[0.5]' : 'cursor-pointer';

  return (
    <label
      htmlFor={htmlFor}
      className={#BACKTICK_ESCAPE#
        \${baseStyles} 
        \${variants[variant]} 
        \${sizes[size]} 
        \${weights[weight as keyof typeof weights]} 
        text-\${align} 
        \${statusStyles} 
        \${className}
      #BACKTICK_ESCAPE#}
    >
      {isLoading && (
        <svg className="animate-spin h-3.5 w-3.5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {children}
      {required && <span className="text-red-500 ml-0.5 font-bold">*</span>}
    </label>
  );
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  className = '',
  variant = 'default',
  style = 'subtle',
  size = 'md',
  icon,
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors';
  
  const sizes = {
    sm: 'text-xs px-1.5 py-0.5 gap-1',
    md: 'text-sm px-2.5 py-0.5 gap-1.5',
    lg: 'text-sm px-3 py-1 gap-2',
  };

  const getVariantStyles = (v: string, s: string) => {
    // Style: solid
    if (s === 'solid') {
      switch (v) {
        case 'primary': return 'bg-primary-600 text-white';
        case 'secondary': return 'bg-neutral-600 text-white';
        case 'success': return 'bg-green-600 text-white';
        case 'warning': return 'bg-yellow-500 text-white';
        case 'danger': return 'bg-red-600 text-white';
        case 'outline': return 'bg-transparent border border-neutral-300 text-neutral-700'; // Fallback
        default: return 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900';
      }
    }
    // Style: subtle (light bg, dark text)
    if (s === 'subtle') {
      switch (v) {
        case 'primary': return 'bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300';
        case 'secondary': return 'bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300';
        case 'success': return 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300';
        case 'warning': return 'bg-yellow-50 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300';
        case 'danger': return 'bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300';
        case 'outline': return 'bg-neutral-50 text-neutral-600 border border-neutral-200';
        default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
      }
    }
    // Style: soft
    if (s === 'soft') {
       switch (v) {
        case 'primary': return 'bg-primary-50/50 text-primary-600 dark:bg-primary-900/20';
        case 'success': return 'bg-green-50/50 text-green-600 dark:bg-green-900/20';
        case 'warning': return 'bg-yellow-50/50 text-yellow-600 dark:bg-yellow-900/20';
        case 'danger': return 'bg-red-50/50 text-red-600 dark:bg-red-900/20';
        default: return 'bg-neutral-50/50 text-neutral-600 dark:bg-neutral-800/50';
      }
    }
    // Style: pill (shape)
    if (s === 'pill') {
       const base = getVariantStyles(v, 'subtle');
       return \`\${base} rounded-full\`;
    }
    return '';
  };

  const styleClasses = getVariantStyles(variant, style);
  const roundedClass = style === 'pill' ? 'rounded-full' : 'rounded';

  return (
    <span className={\`\${baseStyles} \${sizes[size]} \${styleClasses} \${roundedClass} \${className}\`}>
      {icon && <span className="opacity-70">{icon}</span>}
      {children}
    </span>
  );
};

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
    <div className={\`relative inline-block \${className}\`}>
      <div 
        className={\`
          flex items-center justify-center 
          overflow-hidden bg-neutral-100 dark:bg-neutral-800 
          border-2 border-white dark:border-neutral-900 
          font-medium text-neutral-600 dark:text-neutral-400 
          \${sizes[size]} 
          \${variants[variant]}
        \`}
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
          className={\`
            absolute bottom-0 right-0 block 
            rounded-full ring-2 ring-white dark:ring-neutral-900 
            \${statusColors[status]}
            \${statusSizes[size]}
            \${variant === 'circle' ? 'translate-x-[5%] translate-y-[5%]' : 'translate-x-1/2 translate-y-1/2'}
          \`} 
        />
      )}
    </div>
  );
};

export const AvatarGroup: React.FC<AvatarGroupProps> = ({ children, size = 'md', limit, spacing = -8, className = '' }) => {
  const childrenArray = React.Children.toArray(children);
  const excess = limit ? childrenArray.length - limit : 0;
  const displayChildren = limit ? childrenArray.slice(0, limit) : childrenArray;

  return (
    <div className={\`flex items-center \${className}\`} style={{ gap: spacing }}>
      {displayChildren.map((child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, { 
            key: index,
            size,
            className: \`ring-2 ring-white dark:ring-neutral-950 \${child.props.className || ''}\`
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
  forms: `import React, { useState, useEffect } from 'react';
import { BaseProps, InputProps, CheckboxProps, SwitchProps, TextareaProps, SelectProps, RadioProps, SliderProps } from '../../types';
import { Button, Heading, Text, Icon, Box, Label, Spinner } from './Primitives';
import { Stack, Card } from './Layout';
import { Alert } from './Composite';

export const LoginForm: React.FC<{
  onSubmit: (data: any) => void;
  onForgotPassword?: () => void;
  isLoading?: boolean;
  error?: string;
}> = ({ onSubmit, onForgotPassword, isLoading, error }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ email, password, rememberMe });
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      {error && <Alert variant="error" className="mb-4">{error}</Alert>}
      <FormField label="Email" htmlFor="login-email" required>
        <Input id="login-email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required disabled={isLoading} />
      </FormField>
      <FormField label="Password" htmlFor="login-password" required rightElement={<button type="button" onClick={onForgotPassword} className="text-xs font-semibold text-primary-600">Forgot password?</button>}>
        <Input id="login-password" type="password" placeholder="â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢" value={password} onChange={(e) => setPassword(e.target.value)} required disabled={isLoading} />
      </FormField>
      <Checkbox id="remember-me" label="Remember me" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
      <Button type="submit" fullWidth isLoading={isLoading}>Sign in</Button>
    </FormWrapper>
  );
};`,
  feedback: `import React from 'react';
import { SpinnerProps, SkeletonProps } from '../../types';

export const Spinner: React.FC<SpinnerProps> = ({
  size = 'md',
  variant = 'border',
  color = 'primary',
  placement = 'inline',
  label,
  speed = 'normal',
  thickness = 'normal',
  className = ''
}) => {
  const sizes = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const colors = {
    primary: 'text-primary-600',
    secondary: 'text-neutral-600 dark:text-neutral-400',
    success: 'text-green-600',
    warning: 'text-yellow-600',
    danger: 'text-red-600',
    neutral: 'text-neutral-900 dark:text-neutral-100',
    white: 'text-white'
  };

  const thicknessMap = {
    thin: 'border',
    normal: 'border-2',
    thick: 'border-4'
  };

  const speedMap = {
    slow: 'duration-[2s]',
    normal: 'duration-1000',
    fast: 'duration-500'
  };

  const renderSpinner = () => {
    switch (variant) {
      case 'dots':
        return (
          <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <div 
                key={i}
                className={\`rounded-full bg-current \${size === 'xs' ? 'w-1 h-1' : size === 'sm' ? 'w-1.5 h-1.5' : 'w-2 h-2'} animate-bounce\`} 
                style={{ animationDelay: \`\${i * 0.15}s\` }}
              />
            ))}
          </div>
        );
      case 'pulse':
        return <div className={\`rounded-full bg-current animate-ping \${sizes[size]}\`} />;
      case 'bars':
        return (
          <div className={\`flex items-end gap-0.5 \${sizes[size]}\`}>
            {[0, 1, 2, 3].map((i) => (
              <div 
                key={i}
                className={\`bg-current flex-1 animate-pulse\`} 
                style={{ height: '100%', animationDelay: \`\${i * 0.1}s\`, animationDuration: '0.8s' }}
              />
            ))}
          </div>
        );
      case 'ring':
        return (
          <div className={\`relative \${sizes[size]}\`}>
            <div className={\`absolute inset-0 rounded-full border-current opacity-20 \${thicknessMap[thickness]}\`} />
            <div className={\`absolute inset-0 rounded-full border-t-current animate-spin \${speedMap[speed]} \${thicknessMap[thickness]}\`} />
          </div>
        );
      case 'gradient':
        return (
          <div 
            className={\`rounded-full animate-spin \${speedMap[speed]} \${sizes[size]}\`}
            style={{ 
              background: \`conic-gradient(from 0deg, transparent, currentColor)\`,
              WebkitMask: \`radial-gradient(farthest-side, transparent calc(100% - 4.5px), black calc(100% - 4px))\`
            }}
          />
        );
      case 'border':
      default:
        return (
          <div 
            className={\`animate-spin rounded-full border-t-transparent border-current \${speedMap[speed]} \${sizes[size]} \${thicknessMap[thickness]}\`} 
            role="status"
          />
        );
    }
  };

  const containerClasses = {
    inline: 'inline-flex',
    centered: 'flex items-center justify-center w-full',
    fullscreen: 'fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/80 dark:bg-black/80',
    overlay: 'absolute inset-0 z-10 flex flex-col items-center justify-center bg-white/40 dark:bg-black/40 backdrop-blur-[1px]'
  };

  return (
    <div className={\`\${containerClasses[placement]} \${className}\`}>
      <div className={\`flex flex-col items-center gap-3 \${colors[color]}\`}>
        {renderSpinner()}
        {label && (
          <span className={\`text-sm font-medium animate-pulse\`}>
            {label}
          </span>
        )}
      </div>
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

export const AuthLayout: React.FC<{ children: ReactNode; title?: string; subtitle?: string; logo?: ReactNode; }> = ({ children, title, subtitle, logo }) => {
  return (
    <div className="min-h-screen flex bg-neutral-50 dark:bg-neutral-950">
      <div className="flex-1 flex flex-col justify-center py-12 px-4 bg-white dark:bg-neutral-900 lg:w-[480px]">
        <div className="mx-auto w-full max-w-sm">
          <div className="mb-8">{logo}{title && <Heading level={2} className="mt-6">{title}</Heading>}{subtitle && <Text tone="muted" className="mt-2">{subtitle}</Text>}</div>
          {children}
        </div>
      </div>
      <div className="hidden lg:block relative w-0 flex-1 overflow-hidden">
        <img className="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1908&q=80" alt="Auth Background" />
      </div>
    </div>
  );
};`,
  authFlow: `import React, { useState } from 'react';
import { LoginForm, SignupForm, ForgotPasswordForm, OTPVerification, ResetPasswordForm } from './Forms';
import { AuthLayout } from './Patterns';
import { Button, Heading, Text, Icon } from './Primitives';
import { Alert } from './Composite';
import { Card, Stack } from './Layout';
import { Skeleton } from './Feedback';

export interface AuthFlowProps {
  initialStep?: AuthStep;
  onSuccess?: (data: any) => void;
  logo?: React.ReactNode;
  isFullPage?: boolean;
  className?: string;
}

export const AuthFlow: React.FC<AuthFlowProps> = ({ 
  initialStep = 'login', 
  onSuccess, 
  logo,
  isFullPage = true,
  className = ''
}) => {
  const [step, setStep] = useState(initialStep);
  const [isLoading, setIsLoading] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [email, setEmail] = useState('');

  const navigateTo = (nextStep) => {
    setIsTransitioning(true);
    setTimeout(() => { setStep(nextStep); setIsTransitioning(false); }, 600);
  };

  return (
    <AuthLayout 
      title={step} 
      logo={logo} 
      isFullPage={isFullPage} 
      className={className}
    >
      {isTransitioning ? <Stack spacing={4}><Skeleton height="40px" /><Skeleton height="40px" /></Stack> : /* Render Step Implementation */}
    </AuthLayout>
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
}`,
  adminDashboard: `import React, { useState } from 'react';
import { Button, Heading, Text, Icon, Avatar, Badge, Spinner, Box } from './Primitives';
import { Card, Stack, Container } from './Layout';
import { Input } from './Forms';
import { Alert, Pagination } from './Composite';

// --- Types ---

export interface DashboardStat {
  label: string;
  value: string | number;
  trend?: {
    value: number;
    isUp: boolean;
  };
  icon?: React.ReactNode;
}

// --- Admin Topbar ---

export const AdminTopbar: React.FC<{
  onMenuClick?: () => void;
  user?: { name: string; role: string; avatar?: string };
}> = ({ onMenuClick, user }) => {
  return (
    <header className="h-16 bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between px-4 sm:px-6 sticky top-0 z-30">
      <div className="flex items-center gap-4">
        <button 
          onClick={onMenuClick}
          className="lg:hidden p-2 -ml-2 text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md transition"
        >
          <Icon size="sm"><path d="M4 6h16M4 12h16M4 18h16" /></Icon>
        </button>
        <div className="hidden sm:block w-64 lg:w-96">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
              <Icon size="xs"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></Icon>
            </span>
            <input 
              type="text" 
              placeholder="Search anything..." 
              className="block w-full pl-9 pr-3 py-1.5 bg-neutral-100 dark:bg-neutral-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary-500/20 transition"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <Button variant="ghost" size="sm" className="hidden sm:flex text-neutral-500">
          <Icon size="xs" className="mr-2"><path d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></Icon>
          New Project
        </Button>
        <button className="p-2 text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md relative transition">
          <Icon size="sm"><path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></Icon>
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 border-2 border-white dark:border-neutral-900 rounded-full" />
        </button>
        <div className="h-8 w-px bg-neutral-200 dark:border-neutral-800 mx-1 hidden sm:block" />
        <button className="flex items-center gap-3 p-1 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 transition">
          <div className="hidden sm:block text-right">
            <div className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 leading-none mb-1">{user?.name || 'Jane Doe'}</div>
            <div className="text-xs text-neutral-500 leading-none">{user?.role || 'Admin'}</div>
          </div>
          <Avatar src={user?.avatar} size="sm" name={user?.name || 'Jane Doe'} />
        </button>
      </div>
    </header>
  );
};

// --- Stat Card ---

export const StatCard: React.FC<{
  stat?: DashboardStat;
  isLoading?: boolean;
}> = ({ stat, isLoading }) => {
  if (isLoading) {
    return (
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <Skeleton variant="circular" width="40px" height="40px" />
          <Skeleton width="60px" height="20px" />
        </div>
        <Skeleton width="100px" height="16px" className="mb-2" />
        <Skeleton width="140px" height="32px" />
      </Card>
    );
  }

  if (!stat) return null;

  return (
    <Card className="p-6 group hover:shadow-lg transition-all duration-300 border-neutral-200/60 dark:border-neutral-800/60">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-primary-50 dark:bg-primary-900/20 text-primary-600 rounded-lg group-hover:scale-110 transition-transform">
          {stat.icon || <Icon size="sm"><path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></Icon>}
        </div>
        {stat.trend && (
          <Badge variant={stat.trend.isUp ? 'success' : 'danger'} className="gap-1">
            <Icon size="xs">
              {stat.trend.isUp ? <path d="M5 15l7-7 7 7" /> : <path d="M19 9l-7 7-7-7" />}
            </Icon>
            {Math.abs(stat.trend.value)}%
          </Badge>
        )}
      </div>
      <Text tone="muted" variant="body-sm" className="font-medium uppercase tracking-wider">{stat.label}</Text>
      <Heading level={2} className="mt-1 text-2xl font-bold">{stat.value}</Heading>
    </Card>
  );
};

// --- Mini Charts ---

export const MiniChart: React.FC<{
  type?: 'line' | 'bar';
  data?: number[];
  isLoading?: boolean;
  color?: string;
  height?: number;
}> = ({ type = 'line', data = [], isLoading, color = 'currentColor', height = 60 }) => {
  if (isLoading) {
    return <Skeleton width="100%" height={\`\${height}px\`} />;
  }

  if (data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-4 h-[60px] bg-neutral-50 dark:bg-neutral-800/50 rounded-lg border border-dashed border-neutral-200 dark:border-neutral-800">
        <Text variant="caption" tone="muted">No data</Text>
      </div>
    );
  }

  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const padding = 5;
  const width = 200;
  
  const points = data.map((d, i) => ({
    x: (i / (data.length - 1)) * width,
    y: height - ((d - min) / range) * (height - padding * 2) - padding
  }));

  if (type === 'line') {
    const pathData = points.length > 0 ? \`M \${points.map(p => \`\${p.x},\${p.y}\`).join(' L ')}\` : '';
    const areaData = pathData ? \`\${pathData} L \${width},\${height} L 0,\${height} Z\` : '';

    return (
      <svg width="100%" height={height} viewBox={\`0 0 \${width} \${height}\`} preserveAspectRatio="none" className="overflow-visible">
        <defs>
          <linearGradient id="chart-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity="0.2" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={areaData} fill="url(#chart-gradient)" />
        <path d={pathData} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <div className="flex items-end gap-1 w-full" style={{ height }}>
      {data.map((d, i) => (
        <div 
          key={i}
          className="flex-1 rounded-t-sm"
          style={{ 
            height: \`\${((d - min) / range) * 100}%\`,
            backgroundColor: color,
            opacity: 0.6 + (i / data.length) * 0.4
          }}
        />
      ))}
    </div>
  );
};

// --- Advanced Table ---

export interface TableColumn {
  key: string;
  header: string;
  sortable?: boolean;
  render?: (value: any, row: any) => React.ReactNode;
}

export const AdvancedTable: React.FC<{
  columns: TableColumn[];
  data: any[];
  isLoading?: boolean;
  error?: string;
  onSort?: (key: string) => void;
  selection?: any[];
  onSelectionChange?: (selected: any[]) => void;
}> = ({ columns, data, isLoading, error, onSort, selection = [], onSelectionChange }) => {
  if (error) {
    return <Alert variant="danger" title="Error Loading Data">{error}</Alert>;
  }

  return (
    <div className="w-full overflow-hidden border border-neutral-200 dark:border-neutral-800 rounded-xl bg-white dark:bg-neutral-900 shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="bg-neutral-50 dark:bg-neutral-950/50 border-b border-neutral-200 dark:border-neutral-800">
            <tr>
              {onSelectionChange && (
                <th className="px-6 py-4 w-10">
                  <input 
                    type="checkbox" 
                    className="rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
                    checked={data.length > 0 && selection.length === data.length}
                    onChange={(e) => onSelectionChange(e.target.checked ? data : [])}
                  />
                </th>
              )}
              {columns.map((col) => (
                <th 
                  key={col.key} 
                  className={\`px-6 py-4 font-semibold text-neutral-600 dark:text-neutral-400 uppercase tracking-tight \${col.sortable ? 'cursor-pointer hover:text-neutral-900 dark:hover:text-neutral-100' : ''}\`}
                  onClick={() => col.sortable && onSort?.(col.key)}
                >
                  <div className="flex items-center gap-2">
                    {col.header}
                    {col.sortable && <Icon size="xs"><path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" /></Icon>}
                  </div>
                </th>
              ))}
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
            {isLoading ? (
              Array.from({ length: 5 }).map((_, i) => (
                <tr key={i}>
                  {onSelectionChange && <td className="px-6 py-4"><Skeleton width="16px" height="16px" /></td>}
                  {columns.map((_, j) => (
                    <td key={j} className="px-6 py-4"><Skeleton width="80%" height="16px" /></td>
                  ))}
                  <td className="px-6 py-4"><Skeleton width="40px" height="16px" className="ml-auto" /></td>
                </tr>
              ))
            ) : data.length === 0 ? (
              <tr>
                <td colSpan={columns.length + (onSelectionChange ? 2 : 1)} className="px-6 py-12 text-center">
                  <Stack align="center" spacing={2}>
                    <div className="p-3 bg-neutral-100 dark:bg-neutral-800 rounded-full text-neutral-400">
                      <Icon size="lg"><path d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" /></Icon>
                    </div>
                    <Text className="font-semibold text-neutral-900 dark:text-neutral-100">No results found</Text>
                    <Text tone="muted" variant="body-sm">Try adjusting your filters or search query</Text>
                  </Stack>
                </td>
              </tr>
            ) : (
              data.map((row, i) => (
                <tr key={i} className="hover:bg-neutral-50 dark:hover:bg-neutral-800/30 transition-colors">
                  {onSelectionChange && (
                    <td className="px-6 py-4">
                      <input 
                        type="checkbox" 
                        className="rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
                        checked={selection.includes(row)}
                        onChange={(e) => {
                          const newSelection = e.target.checked 
                            ? [...selection, row]
                            : selection.filter(s => s !== row);
                          onSelectionChange(newSelection);
                        }}
                      />
                    </td>
                  )}
                  {columns.map((col) => (
                    <td key={col.key} className="px-6 py-4 text-neutral-700 dark:text-neutral-300">
                      {col.render ? col.render(row[col.key], row) : row[col.key]}
                    </td>
                  ))}
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-1">
                      <Button variant="ghost" size="xs">Edit</Button>
                      <Button variant="ghost" size="xs" className="text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20">Delete</Button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// --- Admin Sidebar ---

export const AdminSidebar: React.FC<{
  isCollapsed?: boolean;
  onToggle?: () => void;
  activeId?: string;
}> = ({ isCollapsed, onToggle, activeId }) => {
  const navItems = [
    { group: 'Overview', items: [
      { id: 'dashboard', label: 'Dashboard', icon: <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /> },
      { id: 'analytics', label: 'Analytics', icon: <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /> },
    ]},
    { group: 'Management', items: [
      { id: 'users', label: 'Users', icon: <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /> },
      { id: 'projects', label: 'Projects', icon: <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /> },
      { id: 'billing', label: 'Billing', icon: <path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /> },
    ]},
    { group: 'Support', items: [
      { id: 'tickets', label: 'Tickets', icon: <path d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" /> },
      { id: 'settings', label: 'Settings', icon: <><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></> },
    ]}
  ];

  return (
    <aside className={\`bg-neutral-900 text-white h-screen sticky top-0 z-40 transition-all duration-300 flex flex-col \${isCollapsed ? 'w-20' : 'w-64'}\`}>
      <div className="h-16 flex items-center px-6 gap-3 border-b border-white/10 shrink-0 overflow-hidden">
        <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center shrink-0">
          <div className="w-4 h-4 bg-white rounded-sm rotate-45" />
        </div>
        {!isCollapsed && <span className="font-bold text-xl tracking-tight whitespace-nowrap">Admin<span className="text-primary-500">Box</span></span>}
      </div>

      <div className="flex-1 overflow-y-auto py-6 px-3 space-y-8 scrollbar-hide">
        {navItems.map((group) => (
          <div key={group.group}>
            {!isCollapsed && (
              <h4 className="px-3 mb-3 text-[10px] font-bold text-neutral-500 uppercase tracking-widest whitespace-nowrap">
                {group.group}
              </h4>
            )}
            <ul className="space-y-1">
              {group.items.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <li key={item.id}>
                    <button 
                      className={\`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 group relative
                        \${isActive ? 'bg-primary-600 text-white' : 'text-neutral-400 hover:text-white hover:bg-white/5'}
                      \`}
                    >
                      <Icon size="sm" className={isActive ? 'text-white' : 'text-neutral-500 group-hover:text-white'}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{item.icon}</svg>
                      </Icon>
                      {!isCollapsed && <span className="text-sm font-medium">{item.label}</span>}
                      {isCollapsed && (
                        <div className="absolute left-14 bg-neutral-900 border border-white/10 text-white text-xs px-2 py-1.5 rounded opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 pointer-events-none transition-all duration-200 whitespace-nowrap z-50 shadow-xl">
                          {item.label}
                        </div>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-white/10 shrink-0">
        <button 
          onClick={onToggle}
          className="w-full flex items-center justify-center p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-neutral-400 hover:text-white"
        >
          <Icon size="sm" className={\`transition-transform duration-300 \${isCollapsed ? 'rotate-180' : ''}\`}>
            <path d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
          </Icon>
        </button>
      </div>
    </aside>
  );
};

// --- Admin Dashboard (Main Orchestrator) ---

export const AdminDashboard: React.FC<{
  children?: React.ReactNode;
  user?: any;
  isLoading?: boolean;
}> = ({ children, user, isLoading }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="flex bg-neutral-50 dark:bg-neutral-950 min-h-screen">
      <AdminSidebar 
        isCollapsed={isSidebarCollapsed} 
        onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)} 
        activeId="dashboard"
      />
      
      <div className="flex-1 flex flex-col min-w-0">
        <AdminTopbar 
          onMenuClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          user={user}
        />
        
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          {isLoading ? (
            <Stack spacing={8}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <StatCard isLoading />
                <StatCard isLoading />
                <StatCard isLoading />
                <StatCard isLoading />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2 p-6 h-80 flex flex-col gap-4">
                  <Skeleton width="150px" height="24px" />
                  <Skeleton width="100%" className="flex-1" />
                </Card>
                <Card className="p-6 h-80 flex flex-col gap-4">
                  <Skeleton width="150px" height="24px" />
                  <Skeleton width="100%" className="flex-1" />
                </Card>
              </div>
              <Skeleton width="100%" height="400px" />
            </Stack>
          ) : (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
              {children}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};`,
  crudManagement: `import React, { useState, useMemo, useEffect } from 'react';
import { 
  Button, 
  Heading, 
  Text, 
  Icon, 
  Avatar, 
  Badge, 
  IconButton, 
  Box, 
  Flex,
  BadgeProps
} from './Primitives';
import { Card, Stack, Container } from './Layout';
import { Input, Select, Checkbox, Label } from './Forms';
import { 
  Modal, 
  Drawer, 
  Table, 
  Pagination, 
  Alert, 
  Dropdown,
  Tabs,
  Tooltip
} from './Composite';

// --- Types ---

export type UserRole = 'Admin' | 'Editor' | 'Viewer';
export type UserStatus = 'Active' | 'Inactive' | 'Pending';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  lastActive: string;
  avatar?: string;
}

export interface PermissionSet {
  canCreate: boolean;
  canEdit: boolean;
  canDelete: boolean;
  canBulkAction: boolean;
}

const ROLE_PERMISSIONS: Record<UserRole, PermissionSet> = {
  Admin: { canCreate: true, canEdit: true, canDelete: true, canBulkAction: true },
  Editor: { canCreate: true, canEdit: true, canDelete: false, canBulkAction: true },
  Viewer: { canCreate: false, canEdit: false, canDelete: false, canBulkAction: false },
};

// --- Mock Data ---

const INITIAL_USERS: User[] = [
  { id: '1', name: 'Alex Thompson', email: 'alex.t@example.com', role: 'Admin', status: 'Active', lastActive: '2 mins ago' },
  { id: '2', name: 'Sarah Chen', email: 'sarah.c@example.com', role: 'Editor', status: 'Active', lastActive: '1 hour ago' },
  { id: '3', name: 'Michael Ross', email: 'm.ross@example.com', role: 'Viewer', status: 'Pending', lastActive: 'Never' },
  { id: '4', name: 'Elena Rodriguez', email: 'elena.r@example.com', role: 'Editor', status: 'Inactive', lastActive: '2 days ago' },
  { id: '5', name: 'David Kim', email: 'd.kim@example.com', role: 'Viewer', status: 'Active', lastActive: '5 mins ago' },
  { id: '6', name: 'Jessica Bloom', email: 'j.bloom@example.com', role: 'Editor', status: 'Active', lastActive: '12 mins ago' },
  { id: '7', name: 'Robert Vance', email: 'r.vance@example.com', role: 'Viewer', status: 'Inactive', lastActive: '3 days ago' },
];

// --- Components ---

export const UserManager: React.FC<{
  initialRole?: UserRole;
}> = ({ initialRole = 'Admin' }) => {
  const [users, setUsers] = useState<User[]>(INITIAL_USERS);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState<User | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  
  // Premium Features
  const [currentUserRole, setCurrentUserRole] = useState<UserRole>(initialRole);
  const [sortConfig, setSortConfig] = useState<{ key: keyof User, direction: 'asc' | 'desc' } | null>({ key: 'name', direction: 'asc' });
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [isDirty, setIsDirty] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error' | 'info', message: string } | null>(null);

  const permissions = ROLE_PERMISSIONS[currentUserRole];

  // Auto-hide feedback
  useEffect(() => {
    if (feedback) {
      const timer = setTimeout(() => setFeedback(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [feedback]);

  // Logic: Filtering & Sorting & Pagination
  const { paginatedUsers, totalItems, totalPages } = useMemo(() => {
    let filtered = users.filter(user => {
      const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           user.email.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = statusFilter === 'All' || user.status === statusFilter;
      return matchesSearch && matchesStatus;
    });

    if (sortConfig) {
      filtered.sort((a, b) => {
        const valA = a[sortConfig.key] || '';
        const valB = b[sortConfig.key] || '';
        if (valA < valB) return sortConfig.direction === 'asc' ? -1 : 1;
        if (valA > valB) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
      });
    }

    const startIndex = (currentPage - 1) * itemsPerPage;
    return {
      paginatedUsers: filtered.slice(startIndex, startIndex + itemsPerPage),
      totalItems: filtered.length,
      totalPages: Math.ceil(filtered.length / itemsPerPage)
    };
  }, [users, searchQuery, statusFilter, sortConfig, currentPage]);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, statusFilter]);

  // Actions
  const handleSort = (key: keyof User) => {
    setSortConfig(prev => {
      if (prev?.key === key) {
        return { key, direction: prev.direction === 'asc' ? 'desc' : 'asc' };
      }
      return { key, direction: 'asc' };
    });
  };

  const handleCreate = () => {
    setEditingUser(null);
    setValidationErrors({});
    setIsDirty(false);
    setIsFormOpen(true);
  };

  const handleEdit = (user: User) => {
    if (!permissions.canEdit) return;
    setEditingUser(user);
    setValidationErrors({});
    setIsDirty(false);
    setIsFormOpen(true);
  };

  const validateForm = (data: Partial<User>) => {
    const errors: Record<string, string> = {};
    if (!data.name?.trim()) errors.name = 'Name is required';
    if (!data.email?.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.email = 'Invalid email format';
    }
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      name: formData.get('userName') as string,
      email: formData.get('userEmail') as string,
      role: formData.get('userRole') as UserRole,
    };

    if (!validateForm(data)) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      if (editingUser) {
        setUsers(prev => prev.map(u => u.id === editingUser.id ? { ...u, ...data } : u));
        setFeedback({ type: 'success', message: \`User \${data.name} updated successfully\` });
      } else {
        const newUser: User = {
          id: Math.random().toString(36).substr(2, 9),
          name: data.name,
          email: data.email,
          role: data.role,
          status: 'Active',
          lastActive: 'Just now',
        };
        setUsers(prev => [newUser, ...prev]);
        setFeedback({ type: 'success', message: \`New user \${data.name} created\` });
      }
      setIsFormOpen(false);
      setIsSubmitting(false);
    }, 800);
  };

  const handleDeleteClick = (user: User) => {
    if (!permissions.canDelete) return;
    setUserToDelete(user);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    if (!userToDelete) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setUsers(prev => prev.filter(u => u.id !== userToDelete.id));
      setFeedback({ type: 'error', message: \`User \${userToDelete.name} deleted\` });
      setIsDeleteModalOpen(false);
      setUserToDelete(null);
      setIsSubmitting(false);
    }, 600);
  };

  const handleBulkDelete = () => {
    if (!permissions.canDelete) return;
    if (window.confirm(\`Are you sure you want to delete \${selectedIds.length} users?\`)) {
      setUsers(prev => prev.filter(u => !selectedIds.includes(u.id)));
      setFeedback({ type: 'error', message: \`\${selectedIds.length} users removed\` });
      setSelectedIds([]);
    }
  };

  const handleBulkStatusUpdate = (status: UserStatus) => {
    setUsers(prev => prev.map(u => selectedIds.includes(u.id) ? { ...u, status } : u));
    setFeedback({ type: 'success', message: \`Updated \${selectedIds.length} users to \${status}\` });
    setSelectedIds([]);
  };

  return (
    <Stack spacing={6} className="w-full">
      {/* Simulation Banner */}
      <Alert variant="info" className="border-primary-100 bg-primary-50/50">
        <Flex justify="between" align="center" className="w-full">
          <Flex gap={2} align="center">
            <Icon size="xs"><path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></Icon>
            <Text size="sm" className="font-medium">Role Simulation Mode:</Text>
          </Flex>
          <Flex gap={2}>
            {(['Admin', 'Editor', 'Viewer'] as UserRole[]).map(role => (
              <Button 
                key={role} 
                size="xs" 
                variant={currentUserRole === role ? 'primary' : 'outline'}
                onClick={() => setCurrentUserRole(role)}
                className="py-1"
              >
                {role}
              </Button>
            ))}
          </Flex>
        </Flex>
      </Alert>

      {feedback && (
        <div className="fixed top-24 right-8 z-50 animate-in fade-in slide-in-from-right-8">
          <Alert variant={feedback.type === 'success' ? 'success' : feedback.type === 'error' ? 'danger' : 'info'} title={feedback.message} onClose={() => setFeedback(null)} />
        </div>
      )}

      {/* Header & Controls */}
      <Flex justify="between" align="center" className="flex-wrap gap-4 px-1">
        <div>
          <Heading level={2}>Team Management</Heading>
          <Text tone="muted">Configure roles and permissions for your organization.</Text>
        </div>
        <Tooltip content={!permissions.canCreate ? "You don't have permission to create users" : ""}>
          <Button 
            variant="primary" 
            onClick={handleCreate} 
            disabled={!permissions.canCreate}
            className="shadow-lg shadow-primary-500/20"
          >
            <Icon size="xs" className="mr-2"><path d="M12 4v16m8-8H4" /></Icon>
            Create Member
          </Button>
        </Tooltip>
      </Flex>

      {/* Filters & Bulk Actions */}
      <Card className="p-4 border-neutral-200/60 dark:border-neutral-800/60 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm">
        <Flex justify="between" align="center" className="flex-wrap gap-4">
          <Flex gap={4} align="center" className="flex-1 min-w-[300px]">
            <div className="relative flex-1">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
                <Icon size="xs"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></Icon>
              </span>
              <Input 
                placeholder="Search by name or email..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-10"
              />
            </div>
            <Select 
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              options={[
                { label: 'All Status', value: 'All' },
                { label: 'Active', value: 'Active' },
                { label: 'Inactive', value: 'Inactive' },
                { label: 'Pending', value: 'Pending' },
              ]}
              className="w-44 h-10"
            />
          </Flex>

          {selectedIds.length > 0 && permissions.canBulkAction && (
            <Flex align="center" gap={3} className="animate-in fade-in slide-in-from-right-4 bg-primary-50 dark:bg-primary-900/10 p-1.5 rounded-lg border border-primary-200/50 dark:border-primary-800/50">
              <Text size="sm" className="font-semibold text-primary-600 px-2 border-r border-primary-200 dark:border-primary-800">
                \${selectedIds.length} users
              </Text>
              <Dropdown
                trigger={<Button variant="ghost" size="sm" className="text-primary-700">Actions</Button>}
                items={[
                  { label: 'Activate All', onClick: () => handleBulkStatusUpdate('Active'), icon: <Icon size="xs"><path d="M5 13l4 4L19 7" /></Icon> },
                  { label: 'Deactivate All', onClick: () => handleBulkStatusUpdate('Inactive'), icon: <Icon size="xs"><path d="M6 18L18 6M6 6l12 12" /></Icon> },
                  { label: 'Delete Selected', onClick: handleBulkDelete, danger: true, icon: <Icon size="xs"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></Icon> }
                ]}
              />
            </Flex>
          )}
        </Flex>
      </Card>

      {/* Main Table */}
      <div className="overflow-hidden border border-neutral-200 dark:border-neutral-800 rounded-2xl bg-white dark:bg-neutral-950 shadow-xl shadow-neutral-200/50 dark:shadow-none">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-neutral-50 dark:bg-neutral-900/50 border-b border-neutral-200 dark:border-neutral-800 text-neutral-500 font-bold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="px-6 py-4 w-10">
                  <Checkbox 
                    checked={selectedIds.length > 0 && selectedIds.length === paginatedUsers.length}
                    onChange={() => {
                      if (selectedIds.length === paginatedUsers.length) setSelectedIds([]);
                      else setSelectedIds(paginatedUsers.map(u => u.id));
                    }}
                  />
                </th>
                <th className="px-6 py-4 cursor-pointer hover:text-primary-600 transition" onClick={() => handleSort('name')}>
                  <Flex align="center" gap={1}>
                    Member {sortConfig?.key === 'name' && (sortConfig.direction === 'asc' ? 'â†‘' : 'â†“')}
                  </Flex>
                </th>
                <th className="px-6 py-4 cursor-pointer hover:text-primary-600 transition" onClick={() => handleSort('role')}>
                  <Flex align="center" gap={1}>
                    Role {sortConfig?.key === 'role' && (sortConfig.direction === 'asc' ? 'â†‘' : 'â†“')}
                  </Flex>
                </th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Last Active</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200/80 dark:divide-neutral-800/80">
              {paginatedUsers.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-24 text-center">
                    <Stack align="center" spacing={4}>
                      <div className="w-16 h-16 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center text-neutral-300">
                        <Icon size="lg"><path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></Icon>
                      </div>
                      <div>
                        <Text className="font-bold text-lg">No results found</Text>
                        <Text tone="muted">We couldn't find any members matching your criteria.</Text>
                      </div>
                    </Stack>
                  </td>
                </tr>
              ) : (
                paginatedUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-neutral-50/50 dark:hover:bg-neutral-900/50 transition-colors group">
                    <td className="px-6 py-4">
                      <Checkbox 
                        checked={selectedIds.includes(user.id)}
                        onChange={() => {
                          setSelectedIds(prev => prev.includes(user.id) ? prev.filter(i => i !== user.id) : [...prev, user.id]);
                        }}
                      />
                    </td>
                    <td className="px-6 py-4">
                      <Flex gap={3} align="center">
                        <Avatar name={user.name} size="sm" src={user.avatar} className="border-2 border-white dark:border-neutral-800 shadow-sm" />
                        <div>
                          <Text className="font-bold text-neutral-900 dark:text-neutral-100">{user.name}</Text>
                          <Text variant="caption" tone="muted">{user.email}</Text>
                        </div>
                      </Flex>
                    </td>
                    <td className="px-6 py-4">
                      <Flex gap={2} align="center">
                        <span className={\`w-2 h-2 rounded-full \${user.role === 'Admin' ? 'bg-indigo-500' : user.role === 'Editor' ? 'bg-emerald-500' : 'bg-neutral-400'}\`} />
                        <Text variant="body-sm" weight="medium">{user.role}</Text>
                      </Flex>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant={
                        user.status === 'Active' ? 'success' : 
                        user.status === 'Inactive' ? 'danger' : 'warning'
                      }>
                        {user.status}
                      </Badge>
                    </td>
                    <td className="px-6 py-4">
                      <Text variant="body-sm" tone="muted">{user.lastActive}</Text>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Flex gap={1} justify="end" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <Tooltip content={!permissions.canEdit ? "No permission to edit" : "Edit Member"}>
                          <IconButton 
                            size="sm" 
                            variant="ghost" 
                            onClick={() => handleEdit(user)}
                            disabled={!permissions.canEdit}
                          >
                            <Icon size="xs"><path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></Icon>
                          </IconButton>
                        </Tooltip>
                        <Tooltip content={!permissions.canDelete ? "No permission to delete" : "Remove Member"}>
                          <IconButton 
                            size="sm" 
                            variant="ghost" 
                            className="text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30"
                            onClick={() => handleDeleteClick(user)}
                            disabled={!permissions.canDelete}
                          >
                            <Icon size="xs"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></Icon>
                          </IconButton>
                        </Tooltip>
                      </Flex>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30 flex items-center justify-between">
          <Text variant="body-sm" tone="muted">Showing <span className="font-semibold text-neutral-900 dark:text-neutral-100">{paginatedUsers.length}</span> of <span className="font-semibold text-neutral-900 dark:text-neutral-100">{totalItems}</span> members</Text>
          <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
        </div>
      </div>

      {/* Create/Edit Drawer */}
      <Drawer
        isOpen={isFormOpen}
        onClose={() => {
          if (isDirty && !window.confirm("You have unsaved changes. Are you sure you want to close?")) return;
          setIsFormOpen(false);
        }}
        title={editingUser ? 'Edit Member Profile' : 'Invite New Member'}
        size="md"
      >
        <form onSubmit={handleFormSubmit} onChange={() => setIsDirty(true)}>
          <Stack spacing={6} className="p-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="userName">Full Name</Label>
                <Input 
                  id="userName" 
                  name="userName" 
                  defaultValue={editingUser?.name} 
                  placeholder="e.g. Alex Thompson"
                  error={validationErrors.name}
                  className={validationErrors.name ? 'border-red-500' : ''}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="userEmail">Email Address</Label>
                <Input 
                  id="userEmail" 
                  name="userEmail" 
                  type="email" 
                  defaultValue={editingUser?.email} 
                  placeholder="name@company.com" 
                  error={validationErrors.email}
                  className={validationErrors.email ? 'border-red-500' : ''}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="userRole">Access Level</Label>
                <Select 
                  id="userRole" 
                  name="userRole" 
                  defaultValue={editingUser?.role || 'Viewer'}
                  options={[
                    { label: 'Administrator (Full Access)', value: 'Admin' },
                    { label: 'Editor (Restricted Write)', value: 'Editor' },
                    { label: 'Viewer (Read Only)', value: 'Viewer' },
                  ]}
                />
              </div>
            </div>

            {isDirty && (
              <Alert variant="warning" className="mb-2">
                <Flex align="center" gap={2}>
                  <Icon size="xs"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></Icon>
                  <Text variant="caption">You have unsaved changes</Text>
                </Flex>
              </Alert>
            )}

            <Flex justify="end" gap={3} className="pt-8 border-t border-neutral-100 dark:border-neutral-800 mt-4">
              <Button variant="ghost" onClick={() => setIsFormOpen(false)} type="button">Cancel</Button>
              <Button 
                variant="primary" 
                type="submit" 
                disabled={isSubmitting || (editingUser && !permissions.canEdit)}
                className="min-w-[120px] shadow-lg shadow-primary-500/10"
              >
                {isSubmitting ? 'Processing...' : (editingUser ? 'Save Updates' : 'Send Invitation')}
              </Button>
            </Flex>
          </Stack>
        </form>
      </Drawer>

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        title="Remove Member Access"
        size="sm"
      >
        <Stack spacing={6} className="p-8">
          <div className="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center text-red-600 mb-2">
            <Icon size="md"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></Icon>
          </div>
          <div className="space-y-2">
            <Text className="font-bold text-lg">Are you absolutely sure?</Text>
            <Text tone="muted">
              You are about to remove <span className="font-bold text-neutral-900 dark:text-neutral-100">{userToDelete?.name}</span> from the organization. They will lose all access to shared projects.
            </Text>
          </div>
          <Flex justify="end" gap={3} className="mt-2">
            <Button variant="ghost" onClick={() => setIsDeleteModalOpen(false)}>Nevermind</Button>
            <Button 
              variant="danger" 
              onClick={confirmDelete} 
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Removing...' : 'Confirm Removal'}
            </Button>
          </Flex>
        </Stack>
      </Modal>
    </Stack>
  );
};`,
  orbit: `import * as React from "react"
import { motion, useReducedMotion, useAnimation, useAnimationFrame, useMotionValue, useTransform } from "framer-motion"

/**
 * Orbit Component
 * 
 * A decorative animation component where elements revolve around a center point.
 * Items are positioned using polar coordinates via a specific transform stack.
 * Animation is applied to the container, with optional counter-rotation for items.
 * 
 * @author Antigravity
 */

interface OrbitProps {
    radius?: number
    speed?: number
    direction?: "clockwise" | "anticlockwise"
    itemSize?: number
    keepUpright?: boolean
    pauseOnHover?: boolean
    borderRadius?: number
    children?: React.ReactNode
}

export function Orbit(props: OrbitProps) {
    const {
        radius = 150,
        speed = 10,
        direction = "clockwise",
        itemSize = 80,
        keepUpright = true,
        pauseOnHover = false,
        borderRadius = 0,
        children,
    } = props

    const shouldReduceMotion = useReducedMotion()
    const childrenArray = React.Children.toArray(children)
    const itemCount = childrenArray.length

    // State to track hover
    const [isHovered, setIsHovered] = React.useState(false)

    // Motion values for smooth control and pausing
    const rotation = useMotionValue(0)
    
    // Manual animation loop to support seamless pausing and reduced motion
    useAnimationFrame((time: number, delta: number) => {
        if (shouldReduceMotion) {
            rotation.set(0)
            return
        }

        if (pauseOnHover && isHovered) return

        const degreesPerMs = 360 / (speed * 1000)
        const moveAmount = degreesPerMs * delta
        const currentRotation = rotation.get()
        
        if (direction === "clockwise") {
            rotation.set((currentRotation + moveAmount) % 360)
        } else {
            rotation.set((currentRotation - moveAmount) % 360)
        }
    })

    // To keep items upright, they must rotate by -rotation (the container's rotation)
    const counterRotation = useTransform(rotation, (r: number) => -r)

    const containerStyle: React.CSSProperties = {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "visible",
    }

    const orbitContainerStyle: React.CSSProperties = {
        width: 0,
        height: 0,
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }

    return (
        <div 
            style={containerStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                style={{
                    ...orbitContainerStyle,
                    rotate: rotation,
                }}
            >
                {childrenArray.map((child, index) => {
                    // Orbit Math:
                    // Angle per item = 360 / itemCount
                    const angle = (360 / itemCount) * index
                    
                    const itemWrapperStyle: React.CSSProperties = {
                        position: "absolute",
                        width: itemSize,
                        height: itemSize,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: borderRadius,
                        overflow: "hidden",
                        // Transform stack per item (Mandatory):
                        // 1. rotate(angle)
                        // 2. translateX(radius)
                        // 3. rotate(-angle) (optional)
                        transform: #BACKTICK_ESCAPE#rotate(\${angle}deg) translateX(\${radius}px) \${
                            keepUpright ? #BACKTICK_ESCAPE#rotate(-\${angle}deg)#BACKTICK_ESCAPE# : ""
                        }#BACKTICK_ESCAPE#,
                    }

                    return (
                        <div key={index} style={itemWrapperStyle}>
                            <motion.div
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    // Counter-rotate the container's rotation to remain upright relative to screen
                                    rotate: keepUpright && !shouldReduceMotion ? counterRotation : 0,
                                }}
                            >
                                {child}
                            </motion.div>
                        </div>
                    )
                })}
            </motion.div>
        </div>
    );
}
`,
  targetCursor: `import React, { useEffect, useState, useRef } from "react";
import { 
    motion, 
    useSpring, 
    useMotionValue, 
    useReducedMotion,
    AnimatePresence,
} from "framer-motion";

export interface TargetCursorProps {
    /** Primary brand color */
    color?: string;
    /** Padding around the element when snapped */
    padding?: number;
    /** Transition smoothing */
    stiffness?: number;
    /** Custom class for the wrapper */
    className?: string;
}

export function TargetCursor({
    color = "#8B5CF6", // Violet
    padding = 8,
    stiffness = 400,
    className = "",
}: TargetCursorProps) {
    const shouldReduceMotion = useReducedMotion();
    
    // State
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [hoverType, setHoverType] = useState<string | null>(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const targetWidth = useMotionValue(24);
    const targetHeight = useMotionValue(24);

    const springConfig = { damping: 35, stiffness, mass: 0.5 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);
    const width = useSpring(targetWidth, springConfig);
    const height = useSpring(targetHeight, springConfig);

    useEffect(() => {
        if (shouldReduceMotion) return;
        document.body.style.cursor = "none";
        const style = document.createElement("style");
        style.innerHTML = "* { cursor: none !important; }";
        document.head.appendChild(style);

        const handleMouseMove = (e) => {
            if (!isVisible) setIsVisible(true);
            const target = e.target.closest('[data-cursor-target="true"]');
            
            if (target) {
                const rect = target.getBoundingClientRect();
                mouseX.set(rect.left + rect.width / 2);
                mouseY.set(rect.top + rect.height / 2);
                targetWidth.set(rect.width + padding * 2);
                targetHeight.set(rect.height + padding * 2);
                setIsHovering(true);
                setHoverType(target.getAttribute("data-cursor-type") || "default");
            } else {
                mouseX.set(e.clientX);
                mouseY.set(e.clientY);
                targetWidth.set(24);
                targetHeight.set(24);
                setIsHovering(false);
                setHoverType(null);
            }
        };

        const handleMouseDown = () => setIsClicked(true);
        const handleMouseUp = () => setIsClicked(false);
        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        document.body.addEventListener("mouseleave", handleMouseLeave);
        document.body.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            document.body.style.cursor = "auto";
            document.head.removeChild(style);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            document.body.removeEventListener("mouseleave", handleMouseLeave);
            document.body.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, [mouseX, mouseY, targetWidth, targetHeight, isVisible, shouldReduceMotion, padding]);

    if (shouldReduceMotion) return null;

    return (
        <div className={#BACKTICK_ESCAPE#fixed inset-0 pointer-events-none z-[9999] overflow-hidden \${className}#BACKTICK_ESCAPE#}>
            <motion.div
                animate={{
                    rotate: isHovering ? 0 : 360,
                }}
                transition={{
                    rotate: isHovering 
                        ? { type: "spring", stiffness: 300, damping: 30 } 
                        : { duration: 8, repeat: Infinity, ease: "linear" }
                }}
                style={{ x: cursorX, y: cursorY, width: width, height: height, translateX: "-50%", translateY: "-50%", opacity: isVisible ? 1 : 0 }}
                className="relative flex items-center justify-center p-0"
            >
                <div className="absolute inset-0">
                    <motion.div animate={{ scale: isClicked ? 0.8 : 1 }} style={{ borderColor: color }} className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2" />
                    <motion.div animate={{ scale: isClicked ? 0.8 : 1 }} style={{ borderColor: color }} className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2" />
                    <motion.div animate={{ scale: isClicked ? 0.8 : 1 }} style={{ borderColor: color }} className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2" />
                    <motion.div animate={{ scale: isClicked ? 0.8 : 1 }} style={{ borderColor: color }} className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2" />
                </div>
                <motion.div animate={{ scale: isHovering ? 0 : 1, opacity: isHovering ? 0 : 1 }} style={{ backgroundColor: color }} className="w-1 h-1 rounded-full shadow-[0_0_8px_rgba(255,255,240,0.6)]" />
                <AnimatePresence>
                    {isHovering && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.05 }} exit={{ opacity: 0 }} style={{ backgroundColor: color }} className="absolute inset-0 rounded-sm" />
                    )}
                </AnimatePresence>
                <AnimatePresence>
                    {isHovering && hoverType && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: height.get() / 2 + 15 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute pointer-events-none whitespace-nowrap"
                        >
                            <span 
                                className="text-[10px] uppercase font-bold tracking-[0.2em] opacity-80"
                                style={{ color: color }}
                            >
                                {hoverType}
                            </span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
`,
  pillNav: `import React from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion"

type AnimationType = "spring" | "smooth" | "elastic"
type Orientation = "horizontal" | "vertical"

interface PillNavContextValue {
    value?: string
    onValueChange?: (value: string) => void
    orientation: Orientation
    animationType: AnimationType
    disabled?: boolean
}

const PillNavContext = React.createContext<PillNavContextValue | undefined>(undefined)

interface PillNavProps extends React.HTMLAttributes<HTMLDivElement> {
    value?: string
    defaultValue?: string
    onValueChange?: (value: string) => void
    orientation?: Orientation
    animationType?: AnimationType
    fullWidth?: boolean
    disabled?: boolean
    children: React.ReactNode
    className?: string
}

/**
 * PillNav
 * 
 * A fluid navigation component with animated active state.
 */
function PillNav({
    value: controlledValue,
    defaultValue,
    onValueChange,
    orientation = "horizontal",
    animationType = "spring",
    fullWidth = false,
    disabled = false,
    className,
    children,
    ...props
}: PillNavProps) {
    const [uncontrolledValue, setUncontrolledValue] = React.useState(defaultValue)
    const isControlled = controlledValue !== undefined
    const value = isControlled ? controlledValue : uncontrolledValue

    const handleValueChange = React.useCallback((newValue: string) => {
        if (!isControlled) {
            setUncontrolledValue(newValue)
        }
        onValueChange?.(newValue)
    }, [isControlled, onValueChange])

    // Keyboard Navigation
    const containerRef = React.useRef<HTMLDivElement>(null)

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (disabled) return
        
        const items = Array.from(containerRef.current?.querySelectorAll('[role="tab"]:not([disabled])') || []) as HTMLButtonElement[]
        const currentIndex = items.indexOf(document.activeElement as HTMLButtonElement)
        
        let nextIndex = currentIndex

        if (orientation === "horizontal") {
            if (e.key === "ArrowRight") nextIndex = currentIndex + 1
            if (e.key === "ArrowLeft") nextIndex = currentIndex - 1
        } else {
            if (e.key === "ArrowDown") nextIndex = currentIndex + 1
            if (e.key === "ArrowUp") nextIndex = currentIndex - 1
        }

        if (nextIndex >= 0 && nextIndex < items.length && nextIndex !== currentIndex) {
            e.preventDefault()
            items[nextIndex].focus()
            // Optional: Automatically select on focus? 
            // Usually for tabs, selection follows focus or explicit enter. 
            // Let's keep it manual selection (Enter/Space) for now to allow browsing without activating?
            // Actually, "Pill Nav" often implies immediate selection. Let's trigger change.
            items[nextIndex].click()
        }
    }

    return (
        <PillNavContext.Provider value={{ value, onValueChange: handleValueChange, orientation, animationType, disabled }}>
            <LayoutGroup id={React.useId()}>
                <div
                    ref={containerRef}
                    className={#BACKTICK_ESCAPE#inline-flex \${orientation === "vertical" ? "flex-col" : "flex-row"} \${fullWidth ? "w-full" : ""} p-1 bg-neutral-100 dark:bg-neutral-800/50 rounded-xl relative overflow-hidden ring-1 ring-black/5 dark:ring-white/5 \${className || ""}#BACKTICK_ESCAPE#}
                    role="tablist"
                    aria-orientation={orientation}
                    onKeyDown={handleKeyDown}
                    {...props}
                >
                    {children}
                </div>
            </LayoutGroup>
        </PillNavContext.Provider>
    )
}

interface PillNavItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    value: string
    disabled?: boolean
    children: React.ReactNode
    className?: string
}

const TRANSITIONS = {
    spring: { type: "spring", stiffness: 300, damping: 30 },
    smooth: { type: "tween", ease: "easeInOut", duration: 0.3 },
    elastic: { type: "spring", stiffness: 300, damping: 20 }, // bouncier
}

function PillNavItem({
    value,
    disabled,
    className,
    children,
    ...props
}: PillNavItemProps) {
    const context = React.useContext(PillNavContext)
    if (!context) throw new Error("PillNav.Item must be used within PillNav")

    const isActive = context.value === value
    const isDisabled = disabled || context.disabled

    return (
        <button
            type="button"
            role="tab"
            aria-selected={isActive}
            disabled={isDisabled}
            onClick={() => !isDisabled && context.onValueChange?.(value)}
            className={#BACKTICK_ESCAPE#
                relative z-10 flex-1 px-4 py-2 text-sm font-medium transition-colors duration-200 outline-none select-none rounded-lg
                \${isActive ? "text-neutral-900 dark:text-white" : "text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"}
                \${isDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
                \${className || ""}
            #BACKTICK_ESCAPE#}
            {...props}
        >
            {isActive && (
                <motion.div
                    layoutId="pill-nav-indicator"
                    className="absolute inset-0 bg-white dark:bg-neutral-700 shadow-sm rounded-lg -z-10"
                    initial={false}
                    transition={TRANSITIONS[context.animationType]}
                    style={{
                        originY: "0px" // Helps with some layout shifts
                    }}
                />
            )}
            <span className="relative z-10">{children}</span>
        </button>
    )
}

// Subcomponent assignment
const PillNavNamespace = Object.assign(PillNav, {
    Item: PillNavItem
})

export { PillNavNamespace as PillNav }
`,
  scrollStack: `import React from "react";
import { motion, useScroll, useTransform, useMotionValue, MotionValue } from "framer-motion"
import { ScrollStackProps } from "../../types"

/**
 * ScrollStack Component
 * 
 * A premium scrolling presentation where cards stack and scale with a depth effect.
 * Features smooth scaling, blurring, and snapping.
 */
export function ScrollStack({
    children,
    orientation = "vertical",
    snap = false,
    scaleStrength = 0.05,
    blurStrength = 0,
    offset = 40,
    className,
    ...props
}: ScrollStackProps) {
    const containerRef = React.useRef<HTMLDivElement>(null)
    const isHorizontal = orientation === "horizontal"

    // Convert children to array
    const items = React.Children.toArray(children)
    const total = items.length
    
    return (
        <div 
            ref={containerRef}
            className={\`
                relative w-full h-full overflow-y-auto snap-y snap-mandatory
                \${className || ""}
                scrollbar-hide
            \`}
            style={{
                scrollBehavior: "smooth"
            }}
            {...props}
        >
            <div className={\`
                flex 
                \${isHorizontal ? "flex-row w-max h-full" : "flex-col w-full"}
                gap-4 p-4
            \`}>
                {items.map((child, i) => (
                    <StickyItem
                        key={i}
                        index={i}
                        total={total}
                        isHorizontal={isHorizontal}
                        scaleStrength={scaleStrength}
                        blurStrength={blurStrength}
                        offset={offset}
                        containerRef={containerRef}
                    >
                        {child}
                    </StickyItem>
                ))}
            </div>
        </div>
    )
}

function StickyItem({ 
    children, 
    index, 
    total, 
    isHorizontal, 
    scaleStrength, 
    blurStrength,
    offset,
    containerRef 
}: any) {
    return (
        <div 
            className="sticky top-0 left-0 flex-shrink-0 flex items-center justify-center transition-all duration-500"
            style={{
                zIndex: index,
                // Sticky offset to create the "stack" pile
                [isHorizontal ? "left" : "top"]: index * Math.abs(offset), 
                // We add margin to allow scrolling past
                marginBottom: isHorizontal ? 0 : total * Math.abs(offset), 
                marginRight: isHorizontal ? total * Math.abs(offset) : 0, 
            }}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full h-full"
            >
                {children}
            </motion.div>
        </div>
    );
}
`,
  magicBentoJSX: `import React, { useRef, useState, MouseEvent, useEffect } from 'react';
import styles from './MagicBento.module.css';
import { Heading, Text } from '../Primitives';

export interface BentoItem {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  span?: 1 | 2 | 3;
  image?: string;
  className?: string;
  titleColor?: string;
  descriptionColor?: string;
}

export interface MagicBentoProps {
  items: BentoItem[];
  className?: string;
  spotlightColor?: string;
  spotlightSize?: number;
  variant?: 'default' | 'minimal' | 'hero';
  clickEffect?: boolean;
  enableStars?: boolean;
  borderColor?: string;
  backgroundColor?: string;
  gap?: string;
}

const BentoCard: React.FC<{ 
  item: BentoItem; 
  spotlightColor?: string; 
  spotlightSize?: number;
  variant?: string;
  clickEffect?: boolean;
  borderColor?: string;
  backgroundColor?: string;
}> = ({ 
  item, 
  spotlightColor = 'rgba(0, 0, 0, 0.1)', 
  spotlightSize = 400,
  variant = 'default',
  clickEffect = false,
  borderColor,
  backgroundColor
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPosition({ x, y });
  };

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if (!clickEffect || !divRef.current) return;

    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();

    setRipples(prev => [...prev, { x, y, id }]);
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== id));
    }, 600);
  };

  const spanClass = item.span === 2 ? styles.span2 : item.span === 3 ? styles.span3 : '';
  const variantClass = variant === 'minimal' ? styles.minimal : variant === 'hero' ? styles.hero : '';

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      className={\`\${styles.bentoCard} \${spanClass} \${variantClass} \${item.className || ''}\`}
      style={{
        '--mouse-x': \`\${position.x}px\`,
        '--mouse-y': \`\${position.y}px\`,
        '--spotlight-color': spotlightColor,
        '--spotlight-size': \`\${spotlightSize}px\`,
        '--card-border-color': borderColor,
        '--card-bg-color': backgroundColor
      } as React.CSSProperties}
    >
      <div className={styles.spotlight} />
      
      {clickEffect && ripples.map(ripple => (
        <span 
          key={ripple.id} 
          className={styles.ripple} 
          style={{ left: ripple.x, top: ripple.y }} 
        />
      ))}

      <div className={styles.cardContent}>
        {item.icon && <div className={styles.cardIcon}>{item.icon}</div>}
        
        <div className="mt-auto relative z-10">
          <Heading 
            level={variant === 'hero' ? 3 : 4} 
            className="mb-2 !text-inherit"
            style={{ color: item.titleColor }}
          >
            {item.title}
          </Heading>
          <Text 
            size={variant === 'minimal' ? 'xs' : 'sm'} 
            className="opacity-80 !text-inherit"
            style={{ color: item.descriptionColor }}
          >
            {item.description}
          </Text>
        </div>

        {item.image && (
          <div className={\`\${styles.imageWrapper} \${variant === 'hero' ? styles.heroImage : ''}\`}>
            <img src={item.image} alt="" className="w-full h-full object-cover" />
          </div>
        )}
      </div>
    </div>
  );
};

export const MagicBento: React.FC<MagicBentoProps> = ({ 
  items, 
  className = '', 
  spotlightColor,
  spotlightSize = 400,
  variant = 'default',
  clickEffect = false,
  enableStars = false,
  borderColor,
  backgroundColor,
  gap
}) => {
  return (
    <div 
      className={\`\${styles.bentoGrid} \${className} \${enableStars ? styles.hasStars : ''}\`}
      style={{ gap: gap }}
    >
      {items.map((item) => (
        <BentoCard 
          key={item.id} 
          item={item} 
          spotlightColor={spotlightColor} 
          spotlightSize={spotlightSize}
          variant={variant}
          clickEffect={clickEffect}
          borderColor={borderColor}
          backgroundColor={backgroundColor}
        />
      ))}
    </div>
  );
};`,
  magicBentoCSS: `.bentoGrid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
  position: relative;
}

@media (min-width: 768px) {
  .bentoGrid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
  .bentoGrid { grid-template-columns: repeat(3, 1fr); }
}

.bentoCard {
  position: relative;
  overflow: hidden;
  border-radius: 1.5rem;
  background-color: var(--card-bg-color, #E6E6FA); /* Lavender */
  border: 1px solid var(--card-border-color, rgba(0, 0, 0, 0.1));
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), border-color 0.4s ease, background-color 0.4s ease;
  color: #1a1a1a; /* Dark text */
  cursor: pointer;
  box-shadow: none !important;
}

.bentoCard:hover {
  transform: translateY(-8px);
  border-color: var(--spotlight-color, rgba(0, 0, 0, 0.2));
  background-color: var(--card-bg-color, #f0f0ff);
}

.minimal { padding: 1.5rem; border-radius: 1rem; }
.hero { padding: 4rem; }
.hero .cardIcon { font-size: 3rem; margin-bottom: 2rem; }

.spotlight {
  pointer-events: none;
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.5s ease;
  background: radial-gradient(
    circle var(--spotlight-size, 400px) at var(--mouse-x) var(--mouse-y),
    rgba(0, 0, 0, 0.15),
    rgba(0, 0, 0, 0.05) 30%,
    transparent 80%
  );
  z-index: 1;
  mix-blend-mode: normal;
}

.bentoCard:hover .spotlight { opacity: 1; }

.bentoCard::after {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(circle 300px at var(--mouse-x) var(--mouse-y), rgba(0, 0, 0, 0.03), transparent 100%);
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.5s ease;
  z-index: 0;
}

.bentoCard:hover::after { opacity: 1; }

.ripple {
  position: absolute;
  width: 2px;
  height: 2px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  animation: ripple-animation 0.6s ease-out;
  z-index: 5;
}

@keyframes ripple-animation {
  from { width: 0; height: 0; opacity: 0.5; }
  to { width: 500px; height: 500px; opacity: 0; }
}

.cardContent { position: relative; z-index: 10; display: flex; flex-direction: column; height: 100%; }
.cardIcon { margin-bottom: 1.5rem; color: inherit; font-size: 1.75rem; }

.imageWrapper {
  position: absolute;
  right: 0;
  top: 0;
  width: 50%;
  height: 100%;
  opacity: 0.15;
  pointer-events: none;
  mask-image: linear-gradient(to left, black, transparent);
  -webkit-mask-image: linear-gradient(to left, black, transparent);
  z-index: 0;
  transition: opacity 0.3s ease;
}

.bentoCard:hover .imageWrapper { opacity: 0.25; }
.heroImage { width: 70%; opacity: 0.1; }

.hasStars::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(0, 0, 0, 0.2) 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: 0.05;
  pointer-events: none;
}

.span2 { grid-column: span 1; }
@media (min-width: 768px) { .span2 { grid-column: span 2; } }
.span3 { grid-column: span 1; }
@media (min-width: 1024px) { .span3 { grid-column: span 3; } }`,
  wizard: `import React, { useState, useEffect } from 'react';
import styles from './Wizard.module.css';
import { WizardProps, WizardStep } from '../../../types';

export const Wizard: React.FC<WizardProps> = ({
  steps,
  currentStep = 0,
  orientation = 'horizontal',
  variant = 'default',
  size = 'md',
  color = 'primary',
  onStepClick,
  onStepChange,
  showIcons = true,
  allowStepClick = false,
  animated = true,
  className = '',
  showNavigation = false,
  onNext,
  onBack,
  nextLabel,
  backLabel,
  // ...other props
}) => {
  const isVertical = orientation === 'vertical';

  const handleStepClick = (index: number) => {
    if (allowStepClick && onStepClick) {
      onStepClick(index);
    }
    if (allowStepClick && onStepChange) {
        onStepChange(index);
    }
  };

  const getVariantClass = () => {
    switch (variant) {
      case 'modern':
      case 'modern-gradient':
      case 'gradient': 
        return styles.modern;
      case 'minimal': 
      case 'minimal-clean':
        return styles.minimal;
      case 'filled':
        return styles.filled;
      case 'outline':
        return styles.outline;
      default: return '';
    }
  };

  const getSizeStyle = () => {
      if (size === 'sm') return { '--wizard-step-size': '2rem', fontSize: '0.875rem' } as React.CSSProperties;
      if (size === 'lg') return { '--wizard-step-size': '3.5rem', fontSize: '1.125rem' } as React.CSSProperties;
      return {};
  };

  const getContainerClass = () => {
      if (variant === 'glass') return styles.glass;
      return '';
  };

  return (
    <div 
        className={[styles.wizard, getVariantClass(), getContainerClass(), className].filter(Boolean).join(' ')}
        style={getSizeStyle()}
        data-color={color}
        role="tablist"
        aria-orientation={orientation}
    >
      <div className={[styles.stepsContainer, isVertical ? styles.vertical : ''].filter(Boolean).join(' ')}>
        {steps.map((step, index) => {
          const isActive = index === currentStep;
          const isCompleted = index < currentStep;
          const isDisabled = step.status === 'disabled';
          const isError = step.status === 'error';

          let stepClass = styles.step;
          if (isActive) stepClass += ' ' + styles.active;
          if (isCompleted) stepClass += ' ' + styles.completed;
          if (isDisabled) stepClass += ' ' + styles.disabled;
          if (isError) stepClass += ' ' + styles.error;

          return (
            <React.Fragment key={step.id || index}>
              <div 
                className={stepClass}
                onClick={() => !isDisabled && handleStepClick(index)}
                role="tab"
                aria-selected={isActive}
                aria-disabled={isDisabled}
                tabIndex={isDisabled ? -1 : 0}
                onKeyDown={(e) => {
                    if ((e.key === 'Enter' || e.key === ' ') && !isDisabled) {
                        handleStepClick(index);
                    }
                }}
              >
                <div className={styles.circle}>
                  {isCompleted ? (
                    <svg className={styles.checkmark} viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  ) : isError ? (
                     <span>!</span>
                  ) : (
                    step.icon && showIcons ? <span className={styles.icon}>{step.icon}</span> : (index + 1)
                  )}
                </div>

                <div className={styles.content}>
                  <div className={styles.title}>{step.title}</div>
                  {step.description && (
                    <div className={styles.description}>{step.description}</div>
                  )}
                </div>

                {isVertical && index < steps.length - 1 && (
                    <div className={styles.verticalConnector}>
                        <div 
                            className={styles.verticalConnectorProgress}
                            style={{ height: isCompleted ? '100%': '0%' }}
                        />
                    </div>
                )}
              </div>
              
              {!isVertical && index < steps.length - 1 && (
                   <div className={styles.connector}>
                       <div 
                         className={styles.connectorProgress} 
                         style={{ width: isCompleted ? '100%' : '0%' }}
                       />
                   </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};`,
  wizardCSS: `/* Wizard.module.css */

/* --- Variables --- */
.wizard {
  --wizard-primary: #6366f1; /* Indigo 500 */
  --wizard-primary-glow: rgba(99, 102, 241, 0.4);
  --wizard-bg: #ffffff;
  --wizard-text: #171717;
  --wizard-text-muted: #737373;
  --wizard-line-inactive: #e5e5e5;
  --wizard-line-active: var(--wizard-primary);
  --wizard-step-bg: #f5f5f5;
  --wizard-step-size: 2.5rem;
  --transition-speed: 0.3s;
  --glass-bg: rgba(255, 255, 255, 0.7);
  --glass-border: rgba(255, 255, 255, 0.5);
  --glass-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.07);

  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  font-family: 'Inter', sans-serif;
}

:global(.dark) .wizard {
  --wizard-bg: #171717;
  --wizard-text: #f5f5f5;
  --wizard-text-muted: #a3a3a3;
  --wizard-line-inactive: #404040;
  --wizard-step-bg: #262626;
  --glass-bg: rgba(23, 23, 23, 0.7);
  --glass-border: rgba(255, 255, 255, 0.1);
}

.stepsContainer {
  display: flex;
  width: 100%;
  position: relative;
  justify-content: space-between;
  align-items: flex-start;
}

.vertical {
  flex-direction: column;
  align-items: flex-start;
  gap: 0;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 10;
  flex: 0 0 auto;
  text-align: center;
  cursor: pointer;
  transition: opacity var(--transition-speed);
  min-width: 80px;
}

.step.disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.vertical .step {
  flex-direction: row;
  align-items: flex-start;
  text-align: left;
  width: 100%;
  min-height: 80px;
}

.connector {
  flex: 1 1 auto;
  height: 2px;
  background-color: var(--wizard-line-inactive);
  margin-top: calc(var(--wizard-step-size) / 2);
  transform: translateY(-50%);
  margin-left: -5px;
  margin-right: -5px;
  z-index: 0;
  position: relative;
}

.connectorProgress {
  height: 100%;
  background-color: var(--wizard-line-active);
  width: 0%;
  transition: width 0.5s ease-in-out;
  box-shadow: 0 0 10px var(--wizard-primary-glow);
}

.verticalConnector {
  position: absolute;
  top: var(--wizard-step-size);
  left: calc(var(--wizard-step-size) / 2);
  width: 2px;
  height: calc(100% - var(--wizard-step-size));
  background-color: var(--wizard-line-inactive);
  transform: translateX(-50%);
  z-index: 0;
}

.verticalConnectorProgress {
  width: 100%;
  height: 0%;
  background-color: var(--wizard-line-active);
  transition: height 0.5s ease-in-out;
  box-shadow: 0 0 10px var(--wizard-primary-glow);
}

.circle {
  width: var(--wizard-step-size);
  height: var(--wizard-step-size);
  border-radius: 50%;
  background-color: var(--wizard-step-bg);
  border: 2px solid var(--wizard-line-inactive);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: var(--wizard-text-muted);
  transition: all var(--transition-speed) cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 2;
  margin-bottom: 0.75rem;
}

.vertical .circle {
  margin-bottom: 0;
  margin-right: 1rem;
  flex-shrink: 0;
}

.step.active .circle {
  border-color: var(--wizard-primary);
  color: var(--wizard-primary);
  box-shadow: 0 0 0 4px var(--wizard-primary-glow);
  background-color: var(--wizard-bg);
  transform: scale(1.1);
}

.step.completed .circle {
  background-color: var(--wizard-primary);
  border-color: var(--wizard-primary);
  color: #fff;
}

.icon {
  width: 1.25rem;
  height: 1.25rem;
}

.checkmark {
  width: 1.25rem;
  height: 1.25rem;
  stroke: white;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  animation: drawCheck 0.3s ease-in-out forwards;
}

@keyframes drawCheck {
  0% { stroke-dasharray: 20; stroke-dashoffset: 20; }
  100% { stroke-dasharray: 20; stroke-dashoffset: 0; }
}

.content {
  display: flex;
  flex-direction: column;
}

.title {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--wizard-text);
  margin: 0;
}

.description {
  font-size: 0.75rem;
  color: var(--wizard-text-muted);
  margin-top: 0.25rem;
  max-width: 150px;
}

/* Color Overrides */
.wizard[data-color="secondary"] { --wizard-primary: #737373; --wizard-primary-glow: rgba(115, 115, 115, 0.2); }
.wizard[data-color="success"] { --wizard-primary: #10b981; --wizard-primary-glow: rgba(16, 185, 129, 0.2); }
.wizard[data-color="warning"] { --wizard-primary: #f59e0b; --wizard-primary-glow: rgba(245, 158, 11, 0.2); }
.wizard[data-color="danger"] { --wizard-primary: #ef4444; --wizard-primary-glow: rgba(239, 68, 68, 0.2); }
.wizard[data-color="neutral"] { --wizard-primary: #404040; --wizard-primary-glow: rgba(64, 64, 64, 0.2); }

/* --- Variants --- */

/* Filled Variant */
.filled .circle {
  border: none;
  background-color: var(--wizard-line-inactive);
}

.filled .step.active .circle {
  background-color: var(--wizard-primary);
  color: white;
  box-shadow: 0 4px 12px var(--wizard-primary-glow);
}

.filled .step.completed .circle {
  background-color: var(--wizard-primary);
  opacity: 0.8;
}

/* Outline Variant */
.outline .circle {
  background-color: transparent;
  border-width: 2px;
}

.outline .step.active .circle {
  border-color: var(--wizard-primary);
  background-color: transparent;
  box-shadow: none;
}

.outline .step.active .circle::after {
  content: '';
  position: absolute;
  inset: 4px;
  border-radius: 50%;
  background-color: var(--wizard-primary);
}

.outline .step.completed .circle {
  border-color: var(--wizard-primary);
  background-color: var(--wizard-primary);
}

/* Modern Gradient */
.modern {
  --wizard-primary: #ec4899; /* Pink 500 */
  --wizard-primary-glow: rgba(236, 72, 153, 0.4);
}

.modern .step.active .circle {
  border: double 2px transparent;
  background-image: linear-gradient(var(--wizard-bg), var(--wizard-bg)), 
                    linear-gradient(135deg, #6366f1, #ec4899);
  background-origin: border-box;
  background-clip: content-box, border-box;
  color: #ec4899;
}

.modern .step.completed .circle {
  background: linear-gradient(135deg, #6366f1, #ec4899);
  border: none;
}

.modern .connectorProgress,
.modern .verticalConnectorProgress {
  background: linear-gradient(90deg, #6366f1, #ec4899);
}

/* Minimal Clean */
.minimal {
  --wizard-step-size: 2rem;
}

.minimal .circle {
  border-width: 1px;
  background: transparent;
}

.minimal .step.active .circle {
  background: var(--wizard-text);
  color: var(--wizard-bg);
  box-shadow: none;
}

.minimal .step.completed .circle {
  background: var(--wizard-text);
  border-color: var(--wizard-text);
  color: var(--wizard-bg);
}

.minimal .connectorProgress {
  background-color: var(--wizard-text);
  box-shadow: none;
}

.glass {
  background: var(--glass-bg);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--glass-border);
  box-shadow: var(--glass-shadow);
  border-radius: 1rem;
  padding: 2rem;
}

/* --- Responsive Adjustments --- */
@media (max-width: 768px) {
  .stepsContainer:not(.vertical) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }

  .stepsContainer:not(.vertical) .step {
    flex-direction: row;
    align-items: flex-start;
    text-align: left;
    width: 100%;
    margin-bottom: 0;
  }

  .stepsContainer:not(.vertical) .circle {
    margin-right: 1rem;
    margin-bottom: 0;
  }

  .stepsContainer:not(.vertical) .connector {
    display: none; /* Hide horizontal connector on mobile */
  }

  /* We might want to show vertical lines on mobile even if orientation is horizontal */
  .stepsContainer:not(.vertical) .step:not(:last-child)::after {
    content: '';
    position: absolute;
    top: var(--wizard-step-size);
    left: calc(var(--wizard-step-size) / 2);
    width: 2px;
    height: 1.5rem; /* Gap size */
    background-color: var(--wizard-line-inactive);
    transform: translateX(-50%);
    z-index: 0;
  }
  
  .stepsContainer:not(.vertical) .step.completed:not(:last-child)::after {
     background-color: var(--wizard-line-active);
  }
}
`
};

