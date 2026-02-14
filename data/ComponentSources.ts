import { SourceData } from '../types';

export const SOURCES: SourceData = {
  types: `import React, { ReactNode } from "react";

export type ComponentSize = "xs" | "sm" | "md" | "lg";
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
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
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
  style?: React.CSSProperties;
}

// Primitives
// Typography
export type TypographyWeight = "regular" | "medium" | "semibold" | "bold";
export type TypographyTone = "default" | "muted" | "subtle" | "destructive" | "success" | "primary";
export type TypographyAlign = "left" | "center" | "right";

export interface TypographyProps extends BaseProps {
  weight?: TypographyWeight;
  tone?: TypographyTone;
  align?: TypographyAlign;
  truncate?: boolean;
}

export type TextVariant = 
  | "display-xl" | "display-lg" 
  | "heading-xl" | "heading-lg" | "heading-md" 
  | "body-lg" | "body-md" | "body-sm" 
  | "label-md" | "caption" | "code";

export type TextWeight = "light" | "regular" | "medium" | "semibold" | "bold";

export type TextTone = 
  | "default" | "muted" | "subtle" 
  | "primary" | "success" | "warning" | "danger" 
  | "disabled" | "inverse" | "destructive";

export interface TextProps extends BaseProps {
  variant?: TextVariant;
  weight?: TextWeight;
  tone?: TextTone;
  align?: TypographyAlign;
  truncate?: boolean;
  /** @deprecated use variant */
  size?: any;
  /** @deprecated use tone */
  color?: any;
}

export interface HeadingProps extends TypographyProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export type LabelVariant = "default" | "subtle" | "primary" | "secondary" | "success" | "warning" | "danger" | "info" | "outline" | "ghost" | "gradient" | "destructive";

export interface LabelProps extends BaseProps {
  variant?: LabelVariant;
  size?: "sm" | "md" | "lg";
  htmlFor?: string;
  required?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  weight?: TypographyWeight;
  align?: TypographyAlign;
}

export interface CaptionProps extends TypographyProps {
  size?: "xs" | "sm";
}

export interface CodeProps extends BaseProps {
  variant?: "inline" | "block";
}

export interface BlockquoteProps extends TypographyProps {
  cite?: string;
}


export type BadgeVariant = "default" | "primary" | "secondary" | "success" | "warning" | "danger" | "outline";
export type BadgeStyle = "solid" | "subtle" | "soft" | "pill";

export interface BadgeProps extends Omit<BaseProps, 'style'> {
  variant?: BadgeVariant;
  style?: BadgeStyle;
  icon?: ReactNode;
  size?: "sm" | "md" | "lg";
}

export interface AvatarProps extends BaseProps {
  name?: string;
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
  onClick?: React.MouseEventHandler<HTMLElement>;
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
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export interface StackProps extends BaseProps {
  direction?: "row" | "col";
  spacing?: 0 | 1 | 2 | 3 | 4 | 6 | 8 | 10 | 12;
  align?: "start" | "center" | "end" | "stretch";
  justify?: "start" | "center" | "end" | "between";
  /** @deprecated use align */
  items?: any;
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
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'border' | 'ring' | 'dots' | 'pulse' | 'bars' | 'gradient';
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'neutral' | 'white';
  placement?: 'inline' | 'centered' | 'fullscreen' | 'overlay';
  label?: string;
  speed?: 'slow' | 'normal' | 'fast';
  thickness?: 'thin' | 'normal' | 'thick';
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
  labelPosition?: 'top' | 'right';
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
  items: { label: ReactNode; content: ReactNode; id: string }[];
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
  size?: "sm" | "md" | "lg";
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

export interface ListItemProps extends BaseProps, Omit<React.HTMLAttributes<HTMLElement>, 'children' | 'className' | 'style' | 'onClick'> {
  variant?: "default" | "compact";
  onClick?: () => void;
  disabled?: boolean;
  selected?: boolean;
  href?: string;
  component?: any;
  onKeyDown?: React.KeyboardEventHandler;
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

export type WizardStepStatus = "inactive" | "active" | "completed" | "error" | "disabled";
export type WizardOrientation = "horizontal" | "vertical";
export type WizardVariant = "default" | "minimal" | "filled" | "outline" | "glass" | "gradient" | "modern" | "minimal-clean" | "modern-gradient";
export type WizardSize = "sm" | "md" | "lg";

export interface WizardStep {
  id: string | number;
  title: string;
  description?: string;
  icon?: ReactNode;
  status?: WizardStepStatus;
  optional?: boolean;
}

export interface WizardProps extends BaseProps {
  steps: WizardStep[];
  currentStep?: number;
  orientation?: WizardOrientation;
  variant?: WizardVariant;
  size?: WizardSize;
  color?: "primary" | "secondary" | "success" | "warning" | "danger" | "neutral";
  onStepClick?: (index: number) => void;
  onStepChange?: (index: number) => void;
  showIcons?: boolean;
  allowStepClick?: boolean;
  animated?: boolean;
  isLazy?: boolean;
  showNavigation?: boolean;
  onNext?: () => void;
  onBack?: () => void;
  nextLabel?: string;
  backLabel?: string;
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
  container?: HTMLElement;
}

export interface ComponentDocumentation {
  name: string;
  description: string;
  category:
    | "foundations"
    | "primitives"
    | "layout"
    | "composite"
    | "forms"
    | "navigation"
    | "patterns";
  props: PropDefinition[];
  examples: Example[];
}

export interface PropDefinition {
  name: string;
  type: string;
  defaultValue?: string;
  description: string;
  required?: boolean;
}

export interface Example {
  title: string;
  code: string;
  render: () => ReactNode;
}

export interface ScrollStackProps extends BaseProps {
  orientation?: "vertical" | "horizontal";
  snap?: boolean;
  scaleStrength?: number;
  offset?: number;
  blurStrength?: number;
}


export interface SourceData {
  types?: string;
  primitives?: string;
  layout?: string;
  forms?: string;
  feedback?: string;
  progressBarJSX?: string;
  progressBarCSS?: string;
  composite?: string;
  list?: string;
  navigation?: string;
  magicBento?: string;
  magicBentoJSX?: string;
  magicBentoCSS?: string;
  wizard?: string;
  wizardCSS?: string;
  targetCursor?: string;
  scrollStack?: string;
  pillNav?: string;
  orbit?: string;
  patterns?: string;
  authFlow?: string;
  adminDashboard?: string;
  crudManagement?: string;
  ecommerceTemplate?: string;
}

// E-commerce Types
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  stock: number;
  variants?: {
    type: "color" | "size";
    options: { label: string; value: string; color?: string }[];
  }[];
  isNew?: boolean;
  isSale?: boolean;
  salePrice?: number;
}

export interface CartItem extends Product {
  quantity: number;
  selectedVariants?: Record<string, string>;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: "pending" | "processing" | "shipped" | "delivered";
  date: string;
  shippingAddress: {
    name: string;
    street: string;
    city: string;
    zip: string;
  };
}
`,
  primitives: `import React from 'react';
import { BaseProps, ComponentVariant, ComponentSize, TextProps, HeadingProps, BadgeProps, ButtonProps, AvatarProps, AvatarGroupProps, BoxProps, FlexProps, IconProps, SpinnerProps, LabelProps, CaptionProps, CodeProps, BlockquoteProps } from '../../types';
import { Spinner } from './Feedback';

// Note: ButtonProps interface is now defined in types.ts
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
    warning: 'bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-400 shadow-sm',
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

export const SplitButton: React.FC<ButtonProps & { onActionClick?: () => void, onMenuClick?: () => void }> = ({
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
    <div className={\`inline-flex shadow-sm rounded-md overflow-hidden \${className}\`}>
      <Button
        variant={variant}
        size={size}
        disabled={disabled}
        onClick={onActionClick || onClick}
        className="rounded-r-none border-r-0"
        icon={icon}
      >
        {children}
      </Button>
      <Button
        variant={variant}
        size={size}
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

export const HamburgerButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button {...props} isIconButton>
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </Button>
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
    \`text-\${align}\`,
    truncate ? 'truncate' : '',
    className
  ].filter(Boolean).join(' ');

  return <Component className={classes}>{children}</Component>;
};

// Re-export Heading as a wrapper around Text for backward compatibility
export const Heading: React.FC<HeadingProps> = ({
  children,
  level = 1,
  weight = 'bold',
  ...props
}) => {
  const mapLevelToVariant = {
    1: 'display-xl', 2: 'display-lg', 3: 'heading-xl', 
    4: 'heading-lg', 5: 'heading-md', 6: 'body-lg'
  };
  return (
    <Text 
      variant={mapLevelToVariant[level as keyof typeof mapLevelToVariant] as any} 
      weight={weight} 
      {...props} 
    >
      {children}
    </Text>
  );
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
      className={\`
        \${baseStyles} 
        \${variants[variant]} 
        \${sizes[size]} 
        \${weights[weight as keyof typeof weights]} 
        text-\${align} 
        \${statusStyles} 
        \${className}
      \`}
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

export const Caption: React.FC<CaptionProps> = ({
  children,
  className = '',
  size = 'sm',
  weight = 'regular',
  tone = 'muted',
  align = 'left',
  truncate = false,
}) => {
  return (
    <span className={\`
      \${size === 'xs' ? 'text-xs' : 'text-sm'}
      \${weight === 'bold' ? 'font-bold' : weight === 'semibold' ? 'font-semibold' : weight === 'medium' ? 'font-medium' : 'font-normal'}
      \${tone === 'muted' ? 'text-neutral-500' : tone === 'subtle' ? 'text-neutral-400' : tone === 'destructive' ? 'text-red-600' : 'text-neutral-900'}
      text-\${align}
      \${truncate ? 'truncate block' : ''}
      \${className}
    \`}>
      {children}
    </span>
  );
};

export const Code: React.FC<CodeProps> = ({
  children,
  className = '',
  variant = 'inline',
}) => {
  if (variant === 'block') {
    return (
      <pre className={\`p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg overflow-x-auto text-sm font-mono text-neutral-800 dark:text-neutral-200 \${className}\`}>
        <code>{children}</code>
      </pre>
    );
  }
  return (
    <code className={\`px-1.5 py-0.5 bg-neutral-100 dark:bg-neutral-800 rounded text-sm font-mono text-primary-600 dark:text-primary-400 \${className}\`}>
      {children}
    </code>
  );
};

export const Blockquote: React.FC<BlockquoteProps> = ({
  children,
  className = '',
  tone = 'default',
  align = 'left',
  cite,
}) => {
  return (
    <blockquote className={\`border-l-4 border-neutral-200 dark:border-neutral-700 pl-4 py-1 my-4 text-\${align} \${className}\`}>
      <Text tone={tone} variant="body-lg" className="italic">
        "{children}"
      </Text>
      {cite && (
        <cite className="block mt-2 text-sm not-italic font-medium text-neutral-500">
          — {cite}
        </cite>
      )}
    </blockquote>
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
    // Style: soft (even lighter bg or transparent with color) - mapped similar to subtle but maybe different nuance?
    // User requested "soft", let's make it slightly more transparent or just alias subtle for now but distinct
    if (s === 'soft') {
       switch (v) {
        case 'primary': return 'bg-primary-50/50 text-primary-600 dark:bg-primary-900/20';
        case 'success': return 'bg-green-50/50 text-green-600 dark:bg-green-900/20';
        case 'warning': return 'bg-yellow-50/50 text-yellow-600 dark:bg-yellow-900/20';
        case 'danger': return 'bg-red-50/50 text-red-600 dark:bg-red-900/20';
        default: return 'bg-neutral-50/50 text-neutral-600 dark:bg-neutral-800/50';
      }
    }
    // Style: pill (shape) - typically solid or subtle but fully rounded. 
    // Implementing as Subtle + Rounded Full for this specific system unless strictly solid
    // Let's assume pill is just a shape modifier on top of default colors, OR it's a specific style.
    // Given the prompt "Styles: solid, subtle, soft, pill", it implies pill is a distinct visual style?
    // Or maybe it's just the shape. Usually "pill" refers to \`rounded-full\`.
    // I will treat it as "Subtle but fully rounded".
    if (s === 'pill') {
       // Use subtle colors but ensure rounded-full
       const base = getVariantStyles(v, 'subtle');
       return \`\${base} rounded-full\`;
    }
    return '';
  };

  const styleClasses = getVariantStyles(variant, style);
  const roundedClass = style === 'pill' ? 'rounded-full' : 'rounded'; // Default rounded if not pill

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
            className: \`ring-2 ring-white dark:ring-neutral-950 \${(child as React.ReactElement<any>).props.className || ''}\`
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

export const Box: React.FC<BoxProps> = ({
  as: Component = 'div',
  children,
  className = '',
  padding,
  margin,
  bg,
  border,
  rounded,
  shadow,
  width,
  height,
  position,
  top,
  left,
  right,
  bottom,
  style,
  onClick,
  ...props
}) => {
  const styles: React.CSSProperties = {
    padding: typeof padding === 'number' ? \`\${padding * 0.25}rem\` : padding,
    margin: typeof margin === 'number' ? \`\${margin * 0.25}rem\` : margin,
    backgroundColor: bg,
    border: border,
    borderRadius: rounded,
    boxShadow: shadow,
    width,
    height,
    position,
    top,
    left,
    right,
    bottom,
    ...style
  };

  return (
    <Component className={className} style={styles} onClick={onClick} {...props}>
      {children}
    </Component>
  );
};

export const Flex: React.FC<FlexProps> = ({
  as = 'div',
  direction = 'row',
  align = 'stretch',
  justify = 'start',
  wrap = 'nowrap',
  gap = 0,
  style,
  ...props
}) => {
  const directionMap = {
    row: 'row',
    col: 'column',
    'row-reverse': 'row-reverse',
    'col-reverse': 'column-reverse'
  };
  
  const alignMap = {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end',
    stretch: 'stretch',
    baseline: 'baseline'
  };

  const justifyMap = {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end',
    between: 'space-between',
    around: 'space-around',
    evenly: 'space-evenly'
  };

  const flexStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: directionMap[direction] as any,
    alignItems: alignMap[align],
    justifyContent: justifyMap[justify],
    flexWrap: wrap,
    gap: typeof gap === 'number' ? \`\${gap * 0.25}rem\` : gap,
    ...style
  };

  return <Box as={as} style={flexStyles} {...props} />;
};

export const Icon: React.FC<IconProps> = ({
  size = 'md',
  color = 'currentColor',
  viewBox = '0 0 24 24',
  path,
  children,
  strokeWidth = 2,
  fill = 'none',
  variant = 'outline',
  className = ''
}) => {
  const sizes = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12',
    '2xl': 'w-16 h-16'
  };

  const isSolid = variant === 'solid';

  return (
    <svg 
      className={\`\${sizes[size]} \${className}\`} 
      fill={isSolid ? (fill === 'none' ? color : fill) : 'none'} 
      viewBox={viewBox} 
      stroke={isSolid ? 'none' : color} 
      xmlns="http://www.w3.org/2000/svg"
    >
      {path && (
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={isSolid ? 0 : strokeWidth} 
          d={path} 
        />
      )}
      {children}
    </svg>
  );
};

export { Spinner };
export * from './icon-button/IconButton';
`,
  layout: `
import React from 'react';
import { BaseProps, ContainerProps, CardProps, StackProps } from '../../types';

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
  interactive = false,
  onClick,
  ...props
}) => {
  const paddings = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const interactiveStyle = interactive ? 'hover:shadow-md hover:border-neutral-300 dark:hover:border-neutral-600 cursor-pointer transition-all duration-200' : '';

  return (
    <div 
      className={\`bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-md shadow-sm \${paddings[padding]} \${interactiveStyle} \${className}\`}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};

export const Stack: React.FC<StackProps> = ({
  children,
  className = '',
  direction = 'col',
  spacing = 4,
  align = 'stretch',
  justify = 'start'
}) => {
  const directions = {
    row: 'flex-row',
    col: 'flex-col',
  };

  const gap = {
    0: 'gap-0', 1: 'gap-1', 2: 'gap-2', 3: 'gap-3', 4: 'gap-4', 6: 'gap-6', 8: 'gap-8', 10: 'gap-10', 12: 'gap-12'
  }[spacing];

  const aligns = {
    start: 'items-start', center: 'items-center', end: 'items-end', stretch: 'items-stretch'
  };

  const justifies = {
    start: 'justify-start', center: 'justify-center', end: 'justify-end', between: 'justify-between'
  };

  return (
    <div className={\`flex \${directions[direction]} \${gap} \${aligns[align]} \${justifies[justify]} \${className}\`}>
      {children}
    </div>
  );
};
`,
  forms: `import React, { useState, useEffect } from 'react';
import { BaseProps, InputProps, CheckboxProps, SwitchProps, TextareaProps, SelectProps, RadioProps, SliderProps } from '../../types';
import { Button, Heading, Text, Icon, Box, Spinner, Label } from './Primitives';
import { Stack, Card } from './Layout';
import { Alert } from './Composite';

// Note: InputProps is now defined in types.ts

export const Input: React.FC<InputProps> = ({
  label,
  error,
  success,
  helperText,
  variant = 'default',
  isLoading = false,
  leftIcon,
  rightIcon,
  clearable = false,
  onClear,
  className = '',
  id,
  disabled,
  value,
  onChange,
  ...props
}) => {
  const baseInputStyles = "block w-full transition-all duration-200 outline-none focus:ring-2 disabled:cursor-not-allowed disabled:opacity-50";
  
  const variants = {
    default: "bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-md focus:border-primary-500 focus:ring-primary-500/20 shadow-sm",
    filled: "bg-neutral-100 dark:bg-neutral-800 border border-transparent rounded-md focus:bg-white dark:focus:bg-neutral-900 focus:border-primary-500 focus:ring-primary-500/20",
    ghost: "bg-transparent border border-transparent rounded-md hover:bg-neutral-50 dark:hover:bg-neutral-800 focus:bg-white dark:focus:bg-neutral-900 focus:border-primary-500 focus:ring-primary-500/20",
    underline: "bg-transparent border-b border-neutral-200 dark:border-neutral-800 rounded-none px-0 focus:border-primary-500 focus:ring-0 shadow-none",
  };

  const statusStyles = error 
    ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" 
    : success 
    ? "border-green-500 focus:border-green-500 focus:ring-green-500/20" 
    : "";

  return (
    <div className={\`w-full space-y-1.5 \${className}\`}>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
          {label}
        </label>
      )}
      <div className="relative group">
        {leftIcon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400 group-focus-within:text-primary-500 transition-colors">
            {leftIcon}
          </div>
        )}
        
        <input
          id={id}
          disabled={disabled || isLoading}
          value={value}
          onChange={onChange}
          className={\`
            \${baseInputStyles}
            \${variants[variant]}
            \${statusStyles}
            \${leftIcon ? 'pl-10' : 'pl-3'}
            \${(rightIcon || isLoading || clearable) ? 'pr-10' : 'pr-3'}
            py-2 text-sm
          \`}
          {...props}
        />

        <div className="absolute inset-y-0 right-0 flex items-center pr-3 space-x-1">
          {isLoading ? (
            <svg className="animate-spin h-4 w-4 text-primary-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : clearable && value && (
            <button 
              type="button" 
              onClick={onClear}
              className="p-0.5 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-400 hover:text-neutral-600 transition-colors"
            >
              <Icon size="xs"><path d="M6 18L18 6M6 6l12 12" /></Icon>
            </button>
          )}
          
          {!isLoading && rightIcon && (
            <div className={\`flex items-center text-neutral-400 group-focus-within:text-primary-500 transition-colors\`}>
              {rightIcon}
            </div>
          )}
        </div>
      </div>

      {error && <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
        <Icon size="xs"><path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></Icon>
        {error}
      </p>}
      
      {success && <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
        <Icon size="xs"><path d="M5 13l4 4L19 7" /></Icon>
        {success}
      </p>}
      
      {helperText && !error && !success && (
        <p className="text-xs text-neutral-500 mt-1">{helperText}</p>
      )}
    </div>
  );
};

export const Textarea: React.FC<TextareaProps> = ({
  label,
  error,
  helperText,
  className = '',
  id,
  rows = 4,
  ...props
}) => {
  return (
    <div className="w-full space-y-1.5">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
          {label}
        </label>
      )}
      <textarea
        id={id}
        rows={rows}
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
};

export const Select: React.FC<SelectProps> = ({
  label,
  error,
  helperText,
  options,
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
      <select
        id={id}
        className={\`
          block w-full px-3 py-2 bg-white dark:bg-neutral-900 border rounded-md shadow-sm transition duration-200
          focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500
          disabled:bg-neutral-50 disabled:text-neutral-500 disabled:cursor-not-allowed
          \${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-neutral-200 dark:border-neutral-800'}
          \${className}
        \`}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
      {helperText && !error && <p className="text-xs text-neutral-500 mt-1">{helperText}</p>}
    </div>
  );
};

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  id,
  className = '',
  ...props
}) => {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        id={id}
        className={\`
          h-4 w-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-500
          dark:border-neutral-700 dark:bg-neutral-900
          \${className}
        \`}
        {...props}
      />
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-neutral-700 dark:text-neutral-300 cursor-pointer">
          {label}
        </label>
      )}
    </div>
  );
};

export const Radio: React.FC<RadioProps> = ({
  label,
  id,
  className = '',
  ...props
}) => {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="radio"
        id={id}
        className={\`
          h-4 w-4 border-neutral-300 text-primary-600 focus:ring-primary-500
          dark:border-neutral-700 dark:bg-neutral-900
          \${className}
        \`}
        {...props}
      />
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-neutral-700 dark:text-neutral-300 cursor-pointer">
          {label}
        </label>
      )}
    </div>
  );
};

export const Switch: React.FC<SwitchProps> = ({
  checked,
  onChange,
  label
}) => {
  return (
    <div className="flex items-center space-x-3">
      <button
        type="button"
        onClick={() => onChange(!checked)}
        className={\`
          relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent 
          transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
          \${checked ? 'bg-primary-600' : 'bg-neutral-200 dark:bg-neutral-700'}
        \`}
      >
        <span
          className={\`
            pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out
            \${checked ? 'translate-x-5' : 'translate-x-0'}
          \`}
        />
      </button>
      {label && <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">{label}</span>}
    </div>
  );
};

export const Slider: React.FC<SliderProps> = ({
  label,
  min = 0,
  max = 100,
  step = 1,
  value,
  onChange,
  className = '',
  ...props
}) => {
  return (
    <div className={\`w-full \${className}\`}>
      {label && (
        <div className="flex justify-between mb-2">
          <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">{label}</label>
          <span className="text-sm text-neutral-500">{value}</span>
        </div>
      )}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer dark:bg-neutral-700 accent-primary-600"
        {...props}
      />
    </div>
  );
};

// --- Form Building Blocks ---

// Note: Label is now imported from Primitives.tsx


export const ErrorMessage: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
    <Icon size="sm"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></Icon>
    {children}
  </p>
);

export const FormField: React.FC<{ label?: string; htmlFor?: string; error?: string; required?: boolean; rightElement?: React.ReactNode; children: React.ReactNode }> = ({ label, htmlFor, error, required, rightElement, children }) => (
  <div className="w-full">
    <div className="flex justify-between items-center mb-1">
      {label && <Label htmlFor={htmlFor} required={required}>{label}</Label>}
      {rightElement}
    </div>
    {children}
    {error && <ErrorMessage>{error}</ErrorMessage>}
  </div>
);

export const FormWrapper: React.FC<{ onSubmit: (e: React.FormEvent) => void; children: React.ReactNode; className?: string }> = ({ onSubmit, children, className = '' }) => (
  <form 
    onSubmit={(e) => { e.preventDefault(); onSubmit(e); }} 
    className={\`space-y-6 \${className}\`}
  >
    {children}
  </form>
);

// --- Authentication Forms ---

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
      {error && <Alert variant="danger" className="mb-4">{error}</Alert>}
      <FormField label="Email" htmlFor="login-email" required>
        <Input
          id="login-email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isLoading}
        />
      </FormField>
      <FormField
        label="Password"
        htmlFor="login-password"
        required
        rightElement={
          <button
            type="button"
            onClick={onForgotPassword}
            className="text-xs font-semibold text-primary-600 hover:text-primary-700 transition-colors"
          >
            Forgot password?
          </button>
        }
      >
        <Input
          id="login-password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={isLoading}
        />
      </FormField>
      <div className="flex items-center justify-between">
        <Checkbox
          id="remember-me"
          label="Remember me"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        />
      </div>
      <Button type="submit" fullWidth isLoading={isLoading} className="mt-2">
        Sign in
      </Button>
    </FormWrapper>
  );
};

export const SignupForm: React.FC<{
  onSubmit: (data: any) => void;
  isLoading?: boolean;
  error?: string;
}> = ({ onSubmit, isLoading, error }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = () => onSubmit({ name, email, password, confirmPassword });

  return (
    <FormWrapper onSubmit={handleSubmit}>
      {error && <Alert variant="danger" className="mb-4">{error}</Alert>}
      <FormField label="Full Name" htmlFor="signup-name" required>
        <Input
          id="signup-name"
          placeholder="John Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          disabled={isLoading}
        />
      </FormField>
      <FormField label="Email" htmlFor="signup-email" required>
        <Input
          id="signup-email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isLoading}
        />
      </FormField>
      <FormField label="Password" htmlFor="signup-password" required>
        <Input
          id="signup-password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={isLoading}
        />
        <PasswordStrengthMeter password={password} />
      </FormField>
      <FormField label="Confirm Password" htmlFor="signup-confirm-password" required>
        <Input
          id="signup-confirm-password"
          type="password"
          placeholder="••••••••"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          disabled={isLoading}
        />
      </FormField>
      <Button type="submit" fullWidth isLoading={isLoading}>Create Account</Button>
    </FormWrapper>
  );
};

export const ForgotPasswordForm: React.FC<{
  onSubmit: (data: any) => void;
  isLoading?: boolean;
  error?: string;
  success?: boolean;
}> = ({ onSubmit, isLoading, error, success }) => {
  const [email, setEmail] = useState('');

  if (success) {
    return (
      <div className="text-center space-y-4">
        <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center mx-auto">
          <Icon size="md"><path d="M5 13l4 4L19 7"/></Icon>
        </div>
        <Heading level={4}>Check your email</Heading>
        <Text color="muted">We've sent a password reset link to <span className="font-medium text-neutral-900 dark:text-white">{email}</span>.</Text>
        <Button variant="outline" fullWidth onClick={() => window.location.reload()}>Back to login</Button>
      </div>
    );
  }

  return (
    <FormWrapper onSubmit={() => onSubmit({ email })}>
      {error && <Alert variant="danger" className="mb-4">{error}</Alert>}
      <Text color="muted" className="mb-4 text-sm">Enter your email address and we'll send you a link to reset your password.</Text>
      <FormField label="Email" htmlFor="forgot-email" required>
        <Input
          id="forgot-email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isLoading}
        />
      </FormField>
      <Button type="submit" fullWidth isLoading={isLoading}>Send Reset Link</Button>
      <div className="text-center mt-4">
        <a href="#" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">Back to login</a>
      </div>
    </FormWrapper>
  );
};

export const ResetPasswordForm: React.FC<{ onSubmit: (data: any) => void; isLoading?: boolean }> = ({ onSubmit, isLoading }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <FormWrapper onSubmit={() => onSubmit({ password, confirmPassword })}>
      <FormField label="New Password" htmlFor="reset-password" required>
        <Input id="reset-password" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </FormField>
      <FormField label="Confirm Password" htmlFor="reset-confirm" required>
        <Input id="reset-confirm" type="password" placeholder="••••••••" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
      </FormField>
      <Button type="submit" fullWidth isLoading={isLoading}>Reset Password</Button>
    </FormWrapper>
  );
};

// --- Specialized Inputs ---

export const OTPVerification: React.FC<{
  length?: number;
  onComplete: (code: string) => void;
  onResend?: () => void;
  isLoading?: boolean;
  error?: string;
}> = ({ length = 6, onComplete, onResend, isLoading, error }) => {
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(''));
  const [timer, setTimer] = useState(30);
  const inputs = React.useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer(prev => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  // Handle focus on first render
  useEffect(() => {
    inputs.current[0]?.focus();
  }, []);

  const handleChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return false;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Focus next input
    if (element.value && index < length - 1) {
      inputs.current[index + 1]?.focus();
    }

    if (newOtp.join('').length === length) {
      onComplete(newOtp.join(''));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handleResend = () => {
    if (timer === 0) {
      setTimer(30);
      onResend?.();
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-2 justify-center">
        {otp.map((data, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            disabled={isLoading}
            ref={(ref) => { inputs.current[index] = ref; }}
            className={\`w-12 h-14 text-center text-xl font-bold bg-white dark:bg-neutral-900 border rounded-lg outline-none transition-all duration-200
              \${error ? 'border-red-500 focus:ring-red-500/20' : 'border-neutral-300 dark:border-neutral-700 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10'}
              \${isLoading ? 'opacity-50 cursor-not-allowed' : ''}
              shadow-sm
            \`}
            value={data}
            onChange={(e) => handleChange(e.target, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        ))}
      </div>

      {error && <p className="text-center text-xs text-red-600 font-medium animate-in fade-in slide-in-from-top-1">{error}</p>}

      <div className="text-center">
        <button
          onClick={handleResend}
          disabled={timer > 0 || isLoading}
          className={\`text-sm font-medium \${timer > 0 ? 'text-neutral-400 cursor-not-allowed' : 'text-primary-600 hover:text-primary-700 underline underline-offset-4'}\`}
        >
          {timer > 0 ? \`Resend code in \${timer}s\` : 'Resend verification code'}
        </button>
      </div>
    </div>
  );
};

export const PasswordStrengthMeter: React.FC<{ password: string }> = ({ password }) => {
  const getStrength = (pass: string) => {
    let score = 0;
    if (!pass) return 0;
    if (pass.length > 8) score += 1;
    if (/[A-Z]/.test(pass)) score += 1;
    if (/[0-9]/.test(pass)) score += 1;
    if (/[^A-Za-z0-9]/.test(pass)) score += 1;
    return Math.min(score, 4);
  };

  const strength = getStrength(password);
  const colors = ['bg-neutral-200', 'bg-red-500', 'bg-yellow-500', 'bg-blue-500', 'bg-green-500'];
  const labels = ['Empty', 'Weak', 'Fair', 'Good', 'Strong'];

  return (
    <div className="space-y-2 mt-2">
      <div className="flex gap-1 h-1.5">
        {[1, 2, 3, 4].map((level) => (
          <div 
            key={level} 
            className={\`flex-1 rounded-full transition-colors duration-300 \${level <= strength ? colors[strength] : 'bg-neutral-200 dark:bg-neutral-800'}\`} 
          />
        ))}
      </div>
      <p className="text-xs text-right text-neutral-500">{labels[strength]}</p>
    </div>
  );
};

export const FileUpload: React.FC<{ label?: string; accept?: string }> = ({ label = "Upload file", accept }) => {
  return (
    <div className="w-full">
      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-neutral-300 dark:border-neutral-700 border-dashed rounded-lg cursor-pointer bg-neutral-50 dark:bg-neutral-900/50 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <Icon size="md" className="text-neutral-400 mb-2"><path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></Icon>
          <p className="mb-2 text-sm text-neutral-500 dark:text-neutral-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">{accept ? \`Accepts \${accept}\` : 'Any file type'}</p>
        </div>
        <input type="file" className="hidden" accept={accept} />
      </label>
    </div>
  );
};

export const DatePicker: React.FC<{ label?: string }> = ({ label }) => {
  return (
    <Input 
      label={label} 
      type="date" 
      className="appearance-none" 
      leftIcon={<Icon size="sm"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></Icon>} 
    />
  );
};

export const TimePicker: React.FC<{ label?: string }> = ({ label }) => {
  return (
    <Input 
      label={label} 
      type="time" 
      className="appearance-none"
      leftIcon={<Icon size="sm"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></Icon>} 
    />
  );
};

export const SearchInput: React.FC<{ 
  placeholder?: string; 
  onSearch?: (val: string) => void;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}> = ({ placeholder = "Search...", onSearch, value, onChange, className = '' }) => {
  return (
    <div className={\`relative \${className}\`}>
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
         <Icon size="sm" className="text-neutral-400"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></Icon>
      </div>
      <input
        type="text"
        className="block w-full pl-10 pr-3 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md leading-5 bg-white dark:bg-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm transition duration-150 ease-in-out"
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          onChange?.(e);
          onSearch?.(e.target.value);
        }}
      />
    </div>
  );
};

`,
  feedback: `import React from 'react';
import { BaseProps, SpinnerProps, SkeletonProps, ProgressBarProps } from '../../types';



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
};

export const Skeleton: React.FC<SkeletonProps> = ({
  variant = 'text',
  width,
  height,
  className = ''
}) => {
  const variants = {
    text: 'h-4 rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-md'
  };

  const styles: React.CSSProperties = {
    width: width,
    height: height
  };

  return (
    <div 
      className={\`animate-pulse bg-neutral-200 dark:bg-neutral-800 \${variants[variant]} \${className}\`} 
      style={styles}
    />
  );
};

export * from './progress/ProgressBar';
`,
  composite: `import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { 
  ModalProps, DrawerProps, TooltipProps, PopoverProps, 
  TabsProps, AccordionProps, DropdownProps, AlertProps, ToastProps 
} from '../../types';
import { Card } from './Layout';
import { Button, Heading, Text, Icon, Box } from './Primitives';

// --- Modal ---
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
        <div className="p-6 overflow-y-auto">
          {children}
        </div>
        {footer && (
          <div className="p-6 border-t border-neutral-100 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/50 rounded-b-xl flex justify-end gap-3">
            {footer}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
};

// --- Drawer ---
export const Drawer: React.FC<DrawerProps> = ({
  isOpen, onClose, title, placement = 'right', size = 'md', children, footer, className = ''
}) => {
  if (!isOpen) return null;

  const placementClasses = {
    left: 'left-0 top-0 bottom-0 border-r',
    right: 'right-0 top-0 bottom-0 border-l',
    top: 'top-0 left-0 right-0 border-b',
    bottom: 'bottom-0 left-0 right-0 border-t',
  };

  const sizeClasses = {
    sm: 'w-64',
    md: 'w-80',
    lg: 'w-96',
    xl: 'w-[32rem]',
    full: 'w-screen',
  };

  // Adjust size for vertical placement
  const isVertical = placement === 'top' || placement === 'bottom';
  const sizeStyle = isVertical ? { height: size === 'full' ? '100vh' : 'auto', maxHeight: '50vh' } : {};

  return createPortal(
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div 
        className={\`absolute bg-white dark:bg-neutral-900 shadow-2xl transition-transform duration-300 transform border-neutral-200 dark:border-neutral-800 flex flex-col \${placementClasses[placement]} \${!isVertical ? sizeClasses[size] : 'w-full'} \${className}\`}
        style={sizeStyle}
      >
        <div className="flex items-center justify-between p-6 border-b border-neutral-100 dark:border-neutral-800">
          <Heading level={4}>{title}</Heading>
          <button onClick={onClose} className="p-2 -mr-2 text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">
             <Icon size="sm"><path d="M6 18L18 6M6 6l12 12" /></Icon>
          </button>
        </div>
        <div className="flex-1 p-6 overflow-y-auto">
          {children}
        </div>
        {footer && (
          <div className="p-6 border-t border-neutral-100 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/50">
            {footer}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
};

// --- Tooltip ---
export const Tooltip: React.FC<TooltipProps> = ({ content, position = 'top', delay = 200, children, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>(undefined);

  const show = () => {
    timeoutRef.current = setTimeout(() => setIsVisible(true), delay);
  };

  const hide = () => {
    clearTimeout(timeoutRef.current);
    setIsVisible(false);
  };

  const positionClasses = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  };

  return (
    <div className="relative inline-block" onMouseEnter={show} onMouseLeave={hide}>
      {children}
      {isVisible && (
        <div className={\`absolute z-40 px-3 py-1.5 text-xs font-medium text-white bg-neutral-900 rounded shadow-lg whitespace-nowrap pointer-events-none animate-in fade-in zoom-in-95 duration-200 \${positionClasses[position]} \${className}\`}>
          {content}
          <div className="absolute w-2 h-2 bg-neutral-900 rotate-45" 
            style={{
              bottom: position === 'top' ? '-4px' : 'auto',
              top: position === 'bottom' ? '-4px' : 'auto',
              right: position === 'left' ? '-4px' : 'auto',
              left: position === 'right' ? '-4px' : typeof position === 'string' ? '50%' : 'auto',
              marginLeft: position === 'top' || position === 'bottom' ? '-4px' : '0',
              marginTop: position === 'left' || position === 'right' ? '-4px' : '0',
            }}
          />
        </div>
      )}
    </div>
  );
};

// --- Popover ---
export const Popover: React.FC<PopoverProps> = ({ trigger, content, position = 'bottom', className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const positionClasses = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  };

  return (
    <div className="relative inline-block" ref={popoverRef}>
      <div onClick={() => setIsOpen(!isOpen)}>{trigger}</div>
      {isOpen && (
        <div className={\`absolute z-30 w-64 bg-white dark:bg-neutral-900 p-4 rounded-lg shadow-xl border border-neutral-200 dark:border-neutral-800 animate-in fade-in zoom-in-95 duration-200 \${positionClasses[position]} \${className}\`}>
          {content}
        </div>
      )}
    </div>
  );
};

// --- Tabs ---
export const Tabs: React.FC<TabsProps> = ({ items, defaultTab, variant = 'line', className = '' }) => {
  const [activeTab, setActiveTab] = useState(defaultTab || items[0]?.id);

  const getVariantClasses = (isActive: boolean) => {
    switch (variant) {
      case 'line':
        return isActive 
          ? 'border-b-2 border-primary-600 text-primary-600 dark:text-primary-400' 
          : 'border-b-2 border-transparent text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200';
      case 'enclosed':
        return isActive 
          ? 'bg-white dark:bg-neutral-900 border border-b-0 border-neutral-200 dark:border-neutral-800 rounded-t-lg text-primary-600 dark:text-primary-400 -mb-[1px]' 
          : 'bg-neutral-50 dark:bg-neutral-950 border border-transparent hover:bg-neutral-100 dark:hover:bg-neutral-900 rounded-t-lg text-neutral-500';
      case 'pills':
        return isActive 
          ? 'bg-primary-600 text-white shadow-sm' 
          : 'bg-transparent text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800';
      default: return '';
    }
  };

  return (
    <div className={\`w-full \${className}\`}>
      <div className={\`flex gap-4 overflow-x-auto \${variant === 'line' ? 'border-b border-neutral-200 dark:border-neutral-800' : ''} \${variant === 'pills' ? 'gap-2' : ''}\`}>
        {items.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              data-state={isActive ? 'active' : 'inactive'}
              className={\`group px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap \${getVariantClasses(isActive)}\`}
            >
              {item.label}
            </button>
          );
        })}

      </div>
      <div className="py-6">
        {items.find(i => i.id === activeTab)?.content}
      </div>
    </div>
  );
};

// --- Accordion ---
export const Accordion: React.FC<AccordionProps> = ({ items, allowMultiple = false, className = '' }) => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenItems(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
    } else {
      setOpenItems(prev => prev.includes(id) ? [] : [id]);
    }
  };

  return (
    <div className={\`space-y-4 \${className}\`}>
      {items.map((item) => (
        <div key={item.id} className="border border-neutral-200 dark:border-neutral-800 rounded-lg overflow-hidden bg-white dark:bg-neutral-900">
          <button
            onClick={() => toggleItem(item.id)}
            className="w-full flex items-center justify-between p-4 text-left font-medium text-neutral-900 dark:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors"
          >
            {item.title}
             <div className={\`transform transition-transform duration-200 \${openItems.includes(item.id) ? 'rotate-180' : ''}\`}>
               <Icon size="sm"><path d="M19 9l-7 7-7-7" /></Icon>
             </div>
          </button>
          <div 
            className={\`overflow-hidden transition-all duration-300 ease-in-out \${openItems.includes(item.id) ? 'max-h-96' : 'max-h-0'}\`}
          >
             <div className="p-4 pt-0 text-neutral-600 dark:text-neutral-400 border-t border-neutral-100 dark:border-neutral-800">
               {item.content}
             </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// --- Dropdown ---
export const Dropdown: React.FC<DropdownProps> = ({ trigger, items, align = 'left', className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div onClick={() => setIsOpen(!isOpen)}>{trigger}</div>
      
      {isOpen && (
        <div className={\`absolute z-50 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 ring-1 ring-black ring-opacity-5 animate-in fade-in zoom-in-95 duration-100 origin-top-\${align} \${align === 'right' ? 'right-0' : 'left-0'} \${className}\`}>
          <div className="py-1" role="menu">
            {items.map((item, index) => (
              <button
                key={index}
                onClick={(e) => {
                  item.onClick?.();
                  if (item.href) window.location.hash = item.href;
                  setIsOpen(false);
                }}
                className={\`w-full text-left px-4 py-2 text-sm flex items-center gap-2 \${item.danger ? 'text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20' : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'}\`}
                role="menuitem"
              >
                {item.icon && <span className="w-4 h-4">{item.icon}</span>}
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// --- Alert ---
export const Alert: React.FC<AlertProps> = ({ variant = 'info', title, icon, children, onClose, className = '' }) => {
  const variants = {
    info: 'bg-blue-50 text-blue-900 border-blue-200 dark:bg-blue-900/20 dark:text-blue-200 dark:border-blue-900',
    success: 'bg-green-50 text-green-900 border-green-200 dark:bg-green-900/20 dark:text-green-200 dark:border-green-900',
    warning: 'bg-yellow-50 text-yellow-900 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-200 dark:border-yellow-900',
    danger: 'bg-red-50 text-red-900 border-red-200 dark:bg-red-900/20 dark:text-red-200 dark:border-red-900',
  };

  const defaultIcons = {
    info: <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
    success: <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
    warning: <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />,
    danger: <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
  };

  return (
    <div className={\`p-4 rounded-lg border flex items-start gap-4 \${variants[variant]} \${className}\`}>
      <div className="flex-shrink-0 mt-0.5">
         <Icon size="sm">{icon || defaultIcons[variant]}</Icon>
      </div>
      <div className="flex-1">
        {title && <h5 className="font-semibold mb-1">{title}</h5>}
        <div className="text-sm opacity-90">{children}</div>
      </div>
      {onClose && (
        <button onClick={onClose} className="opacity-70 hover:opacity-100 transition-opacity">
           <Icon size="sm"><path d="M6 18L18 6M6 6l12 12" /></Icon>
        </button>
      )}
    </div>
  );
};

// --- Toast ---
export const Toast: React.FC<ToastProps> = ({ variant = 'info', title, description, duration = 3000, onClose, className = '' }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const variants = {
    info: 'bg-blue-600 text-white',
    success: 'bg-green-600 text-white',
    warning: 'bg-yellow-600 text-white',
    danger: 'bg-red-600 text-white',
  };

  return createPortal(
    <div className={\`fixed bottom-4 right-4 z-50 animate-in slide-in-from-bottom-5 duration-300 \${className}\`}>
      <div className={\`flex items-start gap-4 p-4 rounded-lg shadow-2xl \${variants[variant]} min-w-[300px]\`}>
        <div className="flex-1">
          {title && <h5 className="font-semibold">{title}</h5>}
          {description && <p className="text-sm opacity-90 mt-1">{description}</p>}
        </div>
        <button onClick={onClose} className="opacity-80 hover:opacity-100">
           <Icon size="sm"><path d="M6 18L18 6M6 6l12 12" /></Icon>
        </button>
      </div>
    </div>,
    document.body
  );
};

// --- Table ---
export const Table: React.FC<{
  headers: string[];
  data: any[];
  renderRow: (row: any, index: number) => React.ReactNode;
  className?: string;
}> = ({ headers, data, renderRow, className = '' }) => {
  return (
    <div className={\`w-full overflow-x-auto border border-neutral-200 dark:border-neutral-800 rounded-lg \${className}\`}>
      <table className="w-full text-left text-sm">
        <thead className="bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
          <tr>
            {headers.map((header, i) => (
              <th key={i} className="px-6 py-3 font-medium text-neutral-500 uppercase tracking-wider">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800 bg-white dark:bg-neutral-950">
          {data.map((row, i) => renderRow(row, i))}
        </tbody>
      </table>
    </div>
  );
};

// --- Pagination ---
import { PaginationProps } from '../../types';

export const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange, className = '' }) => {
  return (
    <div className={\`flex items-center gap-2 \${className}\`}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed transition"
      >
        <Icon size="sm"><path d="M15 19l-7-7 7-7" /></Icon>
      </button>
      
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={\`w-8 h-8 flex items-center justify-center rounded-md text-sm font-medium transition \${
            currentPage === page
              ? 'bg-primary-600 text-white'
              : 'hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400'
          }\`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed transition"
      >
        <Icon size="sm"><path d="M9 5l7 7-7 7" /></Icon>
      </button>
    </div>
  );
};

// --- Empty State ---
export const EmptyState: React.FC<{
  title: string;
  description: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}> = ({ title, description, icon, action, className = '' }) => {
  return (
    <div className={\`flex flex-col items-center justify-center text-center p-12 bg-neutral-50 dark:bg-neutral-900/50 border-2 border-dashed border-neutral-200 dark:border-neutral-800 rounded-xl \${className}\`}>
      <div className="w-16 h-16 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center mb-4 text-neutral-400">
        {icon || <Icon size="lg"><path d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" /></Icon>}
      </div>
      <Heading level={4} className="mb-2">{title}</Heading>
      <Text color="muted" className="max-w-md mb-6">{description}</Text>
      {action}
    </div>
  );
};

// --- Notification Banner ---
export const NotificationBanner: React.FC<{
  title: string;
  description?: string;
  onClose?: () => void;
  cta?: React.ReactNode;
  className?: string;
}> = ({ title, description, onClose, cta, className = '' }) => {
  return (
    <div className={\`w-full bg-primary-600 text-white px-4 py-3 \${className}\`}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="bg-white/20 p-1.5 rounded-full">
            <Icon size="sm"><path d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></Icon>
          </span>
          <div className="text-center sm:text-left">
            <span className="font-medium">{title}</span>
            {description && <span className="opacity-90 ml-2 hidden lg:inline">{description}</span>}
          </div>
        </div>
        <div className="flex items-center gap-4">
          {cta}
          {onClose && (
            <button onClick={onClose} className="opacity-80 hover:opacity-100">
               <Icon size="sm"><path d="M6 18L18 6M6 6l12 12" /></Icon>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
import { WizardProps, WizardStep, WizardStepStatus } from '../../types';

export * from './magic-bento';
export * from './wizard';
export * from './TargetCursor';
`,
  list: `import React, { forwardRef } from 'react';
import styles from './List.module.css';
import { 
  ListProps, 
  ListItemProps, 
  ListItemIconProps, 
  ListItemTextProps, 
  ListDividerProps 
} from '../../../types';
import { Text } from '../Primitives';

export const List = forwardRef<HTMLElement, ListProps>(({
  children,
  className = '',
  variant = 'default',
  orientation = 'vertical',
  component: Component = 'ul',
  ...props
}, ref) => {
  return (
    <Component
      ref={ref}
      className={\`\${styles.list} \${styles[orientation]} \${className}\`}
      role={Component === 'ul' || Component === 'ol' ? 'list' : undefined}
      {...props}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === ListItem) {
          // Pass variant down to ListItems if not explicitly set
          return React.cloneElement(child as React.ReactElement<ListItemProps>, {
             variant: (child.props as ListItemProps).variant || variant
          });
        }
        return child;
      })}
    </Component>
  );
});

List.displayName = 'List';

export const ListItem = forwardRef<HTMLElement, ListItemProps>(({
  children,
  className = '',
  variant = 'default',
  onClick,
  disabled = false,
  selected = false,
  href,
  component,
  ...props
}, ref) => {
  const isInteractive = Boolean(onClick || href);
  
  // Determine component type
  let Component: any = component || 'li';
  if (isInteractive && !component) {
    if (href) Component = 'a';
    else Component = 'div'; // Use div for clickable list items to avoid button-in-li issues if not carefully handled, or just 'li' with role
  }

  // Accessibility props
  const ariaProps: any = {};
  if (isInteractive) {
    ariaProps.role = href ? 'link' : 'button';
    ariaProps.tabIndex = disabled ? -1 : 0;
    if (disabled) ariaProps['aria-disabled'] = true;
    if (selected) ariaProps['aria-selected'] = true;
  }

  return (
    <Component
      ref={ref}
      className={\`
        \${styles.item} 
        \${styles[variant]} 
        \${isInteractive ? styles.interactive : ''} 
        \${selected ? styles.selected : ''} 
        \${disabled ? styles.disabled : ''} 
        \${className}
      \`}
      onClick={!disabled ? onClick : undefined}
      href={!disabled ? href : undefined}
      {...ariaProps}
      {...props}
      onKeyDown={(e: React.KeyboardEvent) => {
        if (isInteractive && !disabled) {
          if (e.key === 'Enter' || e.key === ' ') {
            if (!href) {
                e.preventDefault();
                onClick?.();
            }
          }
        }
        props.onKeyDown?.(e);
      }}
    >
      {/* Pass compact/default context to children if needed via CSS classes on parent */}
      {children}
    </Component>
  );
});

ListItem.displayName = 'ListItem';

export const ListItemIcon: React.FC<ListItemIconProps> = ({
  children,
  className = '',
  position = 'start',
  ...props
}) => {
  return (
    <div className={\`\${styles.icon} \${styles[position]} \${className}\`} {...props}>
      {children}
    </div>
  );
};

export const ListItemText: React.FC<ListItemTextProps> = ({
  primary,
  secondary,
  className = '',
  primaryTypographyProps,
  secondaryTypographyProps,
  ...props
}) => {
  return (
    <div className={\`\${styles.text} \${className}\`} {...props}>
      <span className={styles.primary}>
        {typeof primary === 'string' ? (
             <Text {...primaryTypographyProps}>{primary}</Text>
        ) : primary}
      </span>
      {secondary && (
        <span className={styles.secondary}>
             {typeof secondary === 'string' ? (
                 <Text size="sm" color="muted" {...secondaryTypographyProps}>{secondary}</Text>
             ) : secondary}
        </span>
      )}
    </div>
  );
};

export const ListDivider: React.FC<ListDividerProps> = ({
  component: Component = 'li',
  className = '',
  inset = false,
  ...props
}) => {
  return (
    <Component
      className={\`\${styles.divider} \${inset ? styles.inset : ''} \${className}\`}
      role="separator"
      {...props}
    />
  );
};
`,
  navigation: `import React, { useState, useEffect } from 'react';
import { BreadcrumbsProps, StepperProps } from '../../types';
import { Icon, Text } from './Primitives';
import { Input } from './Forms';

// --- Breadcrumbs ---
export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, separator, className = '' }) => {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <span className="mx-2 text-neutral-400 select-none">
                {separator || <Icon size="sm"><path d="M9 5l7 7-7 7" /></Icon>}
              </span>
            )}
            {item.href ? (
              <a 
                href={item.href} 
                className={\`text-sm font-medium transition-colors \${item.isCurrent ? 'text-neutral-900 dark:text-neutral-100' : 'text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200'}\`}
                aria-current={item.isCurrent ? 'page' : undefined}
              >
                {item.label}
              </a>
            ) : (
               <span className={\`text-sm font-medium \${item.isCurrent ? 'text-neutral-900 dark:text-neutral-100' : 'text-neutral-500'}\`}>
                 {item.label}
               </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

// --- Stepper ---
export const Stepper: React.FC<StepperProps> = ({ steps, orientation = 'horizontal', className = '' }) => {
  return (
    <div className={\`flex \${orientation === 'vertical' ? 'flex-col gap-8' : 'items-center w-full'} \${className}\`}>
      {steps.map((step, index) => (
        <div key={index} className={\`flex \${orientation === 'vertical' ? 'gap-4' : 'flex-1 items-center'} relative\`}>
          <div className="flex flex-col items-center z-10">
             <div className={\`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-colors \${
               step.status === 'complete' 
                 ? 'bg-primary-600 border-primary-600 text-white' 
                 : step.status === 'current'
                   ? 'border-primary-600 text-primary-600'
                   : 'border-neutral-300 dark:border-neutral-700 text-neutral-400'
             }\`}>
               {step.status === 'complete' ? (
                 <Icon size="sm"><path d="M5 13l4 4L19 7" /></Icon>
               ) : (
                 <span className="text-sm font-bold">{index + 1}</span>
               )}
             </div>
          </div>
          
          <div className={\`ml-4 \${orientation === 'vertical' ? '' : 'absolute top-10 left-1/2 -translate-x-1/2 w-48 text-center'}\`}>
             <div className={\`text-sm font-semibold \${step.status === 'upcoming' ? 'text-neutral-500' : 'text-primary-900 dark:text-primary-100'}\`}>
               {step.title}
             </div>
             {step.description && (
               <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                 {step.description}
               </div>
             )}
          </div>

          {index < steps.length - 1 && orientation === 'horizontal' && (
            <div className={\`flex-1 h-0.5 mx-4 \${step.status === 'complete' ? 'bg-primary-600' : 'bg-neutral-200 dark:bg-neutral-800'}\`} />
          )}

           {index < steps.length - 1 && orientation === 'vertical' && (
            <div className={\`absolute left-4 top-8 bottom-[-32px] w-0.5 -ml-px \${step.status === 'complete' ? 'bg-primary-600' : 'bg-neutral-200 dark:bg-neutral-800'}\`} />
          )}
        </div>
      ))}
    </div>
  );
};

// --- Command Palette ---
export const CommandPalette: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  items: { 
    group: string; 
    items: { icon?: React.ReactNode; label: string; shortcut?: string; onClick: () => void }[] 
  }[];
}> = ({ isOpen, onClose, items }) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filteredItems = items.map(group => ({
    ...group,
    items: group.items.filter(item => item.label.toLowerCase().includes(query.toLowerCase()))
  })).filter(group => group.items.length > 0);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-xl bg-white dark:bg-neutral-900 rounded-xl shadow-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 animate-in fade-in zoom-in-95 duration-100">
        <div className="p-4 border-b border-neutral-100 dark:border-neutral-800 flex items-center gap-3">
          <Icon size="sm" className="text-neutral-400"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></Icon>
          <input 
            autoFocus
            type="text" 
            placeholder="Type a command or search..."
            className="flex-1 bg-transparent border-none outline-none text-lg text-neutral-900 dark:text-neutral-100 placeholder-neutral-400"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-xs text-neutral-500 font-mono">ESC</div>
        </div>
        <div className="max-h-[60vh] overflow-y-auto py-2">
          {filteredItems.length === 0 ? (
            <div className="p-8 text-center text-neutral-500">No results found.</div>
          ) : (
             filteredItems.map((group, i) => (
                <div key={i}>
                  <div className="px-4 py-2 text-xs font-semibold text-neutral-400 uppercase tracking-wider bg-neutral-50/50 dark:bg-neutral-900/50">{group.group}</div>
                  {group.items.map((item, j) => (
                    <button 
                      key={j}
                      onClick={() => { item.onClick(); onClose(); }}
                      className="w-full text-left px-4 py-3 flex items-center justify-between hover:bg-primary-50 dark:hover:bg-primary-900/10 text-neutral-700 dark:text-neutral-300 hover:text-primary-700 dark:hover:text-primary-300 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        {item.icon}
                        <span>{item.label}</span>
                      </div>
                      {item.shortcut && (
                        <span className="text-xs text-neutral-400 group-hover:text-primary-500 font-mono">{item.shortcut}</span>
                      )}
                    </button>
                  ))}
                </div>
             ))
          )}
        </div>
      </div>
    </div>
  );
};
`,
  magicBento: `import React, { useRef, useState, MouseEvent, useEffect } from 'react';
import styles from './MagicBento.module.css';
import { Heading, Text } from '../Primitives';

export interface BentoItem {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  span?: 1 | 2 | 3;
  image?: string;
  className?: string; // Allow custom tailwind override if absolutely needed
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
  starColor?: string;
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
  enableStars?: boolean;
  borderColor?: string;
  backgroundColor?: string;
  starColor?: string;
}> = ({ 
  item, 
  spotlightColor = 'rgba(0, 0, 0, 0.1)', 
  spotlightSize = 400,
  variant = 'default',
  clickEffect = false,
  enableStars = false,
  starColor = 'rgba(0, 0, 0, 0.3)',
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
  const starClass = enableStars ? styles.hasStars : '';

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      className={\`\${styles.bentoCard} \${spanClass} \${variantClass} \${starClass} \${item.className || ''}\`}
      style={{
        '--mouse-x': \`\${position.x}px\`,
        '--mouse-y': \`\${position.y}px\`,
        '--spotlight-color': spotlightColor,
        '--spotlight-size': \`\${spotlightSize}px\`,
        '--card-border-color': borderColor,
        '--card-bg-color': backgroundColor,
        '--star-color': starColor
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
  starColor,
  borderColor,
  backgroundColor,
  gap
}) => {
  return (
    <div 
      className={\`\${styles.bentoGrid} \${className}\`}
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
          enableStars={enableStars}
          starColor={starColor}
          borderColor={borderColor}
          backgroundColor={backgroundColor}
        />
      ))}
    </div>
  );
};

`,
  wizard: `import React from 'react';
import { Button } from '../Primitives';
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
  // Internal state for controlled/uncontrolled behavior if needed, 
  // but usually Wizard is controlled by parent via currentStep.
  // We'll trust currentStep from props for the visual state.

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
      case 'modern-gradient': /* mapping for new prop value */
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
      // Inline styles for dynamic sizing if needed, currently handled by CSS vars or could be classes
      if (size === 'sm') return { '--wizard-step-size': '2rem', fontSize: '0.875rem' } as React.CSSProperties;
      if (size === 'lg') return { '--wizard-step-size': '3.5rem', fontSize: '1.125rem' } as React.CSSProperties;
      return {};
  };

  const getContainerClass = () => {
      // If the parent passed a "glass" variant, we wrap it or apply class
      if (variant === 'glass') return styles.glass;
      return '';
  };

  return (
    <div 
        className={\`\${styles.wizard} \${getVariantClass()} \${getContainerClass()} \${className}\`}
        style={getSizeStyle()}
        data-color={color}
        role="tablist"
        aria-orientation={orientation}
    >
      <div className={\`\${styles.stepsContainer} \${isVertical ? styles.vertical : ''}\`}>
        {steps.map((step, index) => {
          const isActive = index === currentStep;
          const isCompleted = index < currentStep;
          const isDisabled = step.status === 'disabled';
          const isError = step.status === 'error';

          let stepClass = \`\${styles.step}\`;
          if (isActive) stepClass += \` \${styles.active}\`;
          if (isCompleted) stepClass += \` \${styles.completed}\`;
          if (isDisabled) stepClass += \` \${styles.disabled}\`;
          if (isError) stepClass += \` \${styles.error}\`;

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
                {/* Connector Line (Horizontal) - Rendered behind steps via absolute positioning usually, 
                    but here we might need to render it conditionally or as a separate element if using flex gap.
                    Current CSS implementation uses absolute positioning for the full line, and we need to fill it.
                */}
                
                {/* Step Circle */}
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

                {/* Step Content */}
                <div className={styles.content}>
                  <div className={styles.title}>{step.title}</div>
                  {step.description && (
                    <div className={styles.description}>{step.description}</div>
                  )}
                </div>

                {/* Vertical Connector Logic for Mobile/Vertical Layout */}
                {isVertical && index < steps.length - 1 && (
                    <div className={styles.verticalConnector}>
                        <div 
                            className={styles.verticalConnectorProgress}
                            style={{ height: isCompleted ? '100%' : '0%' }}
                        />
                    </div>
                )}
              </div>
              
              {/* Connector between steps (Horizontal) */}
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
      {showNavigation && (
        <div className={styles.navigation}>
          <Button 
            variant="secondary" 
            onClick={onBack} 
            disabled={currentStep === 0}
            size={size}
          >
            {backLabel || 'Back'}
          </Button>
          <Button 
            variant="primary" 
            onClick={onNext} 
            disabled={currentStep === steps.length - 1}
            size={size}
          >
            {nextLabel || (currentStep === steps.length - 1 ? 'Finish' : 'Next')}
          </Button>
        </div>
      )}
    </div>
  );
};
`,
  targetCursor: `import React, { useEffect, useState, useRef } from "react";
import { 
    motion, 
    useSpring, 
    useMotionValue, 
    useReducedMotion,
    AnimatePresence,
} from "framer-motion";

/**
 * TargetCursor v2 (Reticle Edition)
 * 
 * A high-end reticle-style cursor that snaps to element boundaries.
 * Features:
 * - 4 corner brackets
 * - Precision center dot
 * - Dimensions-aware element snapping
 * 
 * @author Antigravity
 */

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

    // Movement tracking
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    
    // Target dimensions for snapping
    const targetWidth = useMotionValue(24);
    const targetHeight = useMotionValue(24);

    // Physics
    const springConfig = { damping: 35, stiffness: stiffness, mass: 0.5 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);
    const width = useSpring(targetWidth, springConfig);
    const height = useSpring(targetHeight, springConfig);

    useEffect(() => {
        if (shouldReduceMotion) return;

        document.body.style.cursor = "none";
        const style = document.createElement("style");
        style.innerHTML = \`* { cursor: none !important; } .custom-cursor-area { cursor: cell; }\`;
        document.head.appendChild(style);

        const handleMouseMove = (e: MouseEvent) => {
            if (!isVisible) setIsVisible(true);

            const target = (e.target as HTMLElement).closest('[data-cursor-target="true"]');
            
            if (target) {
                const rect = target.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                
                mouseX.set(centerX);
                mouseY.set(centerY);
                targetWidth.set(rect.width + padding * 2);
                targetHeight.set(rect.height + padding * 2);
                
                setIsHovering(true);
                setHoverType(target.getAttribute("data-cursor-type") || "default");
            } else {
                mouseX.set(e.clientX);
                mouseY.set(e.clientY);
                targetWidth.set(24); // Idle reticle size
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
        <div className={\`fixed inset-0 pointer-events-none z-[9999] overflow-hidden \${className}\`}>
            <motion.div
                animate={{
                    rotate: isHovering ? 0 : 360,
                }}
                transition={{
                    rotate: isHovering 
                        ? { type: "spring", stiffness: 300, damping: 30 } 
                        : { duration: 8, repeat: Infinity, ease: "linear" }
                }}
                style={{
                    x: cursorX,
                    y: cursorY,
                    width: width,
                    height: height,
                    translateX: "-50%",
                    translateY: "-50%",
                    opacity: isVisible ? 1 : 0,
                }}
                className="relative flex items-center justify-center p-0"
            >
                {/* 4 Corner Brackets */}
                <div className="absolute inset-0">
                    {/* Top Left */}
                    <motion.div 
                        animate={{ 
                            scale: isClicked ? 0.8 : 1,
                        }}
                        style={{ borderColor: color }}
                        className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2" 
                    />
                    {/* Top Right */}
                    <motion.div 
                        animate={{ 
                            scale: isClicked ? 0.8 : 1,
                        }}
                        style={{ borderColor: color }}
                        className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2" 
                    />
                    {/* Bottom Left */}
                    <motion.div 
                        animate={{ 
                            scale: isClicked ? 0.8 : 1,
                        }}
                        style={{ borderColor: color }}
                        className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2" 
                    />
                    {/* Bottom Right */}
                    <motion.div 
                        animate={{ 
                            scale: isClicked ? 0.8 : 1,
                        }}
                        style={{ borderColor: color }}
                        className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2" 
                    />
                </div>

                {/* Precision Center Dot */}
                <motion.div
                    animate={{
                        scale: isHovering ? 0 : 1,
                        opacity: isHovering ? 0 : 1,
                    }}
                    style={{ backgroundColor: color }}
                    className="w-1 h-1 rounded-full shadow-[0_0_8px_rgba(255,255,240,0.6)]"
                />

                {/* Snap Indicator (Subtle background) */}
                <AnimatePresence>
                    {isHovering && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.05 }}
                            exit={{ opacity: 0 }}
                            style={{ backgroundColor: color }}
                            className="absolute inset-0 rounded-sm"
                        />
                    )}
                </AnimatePresence>

                {/* Contextual Label */}
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
  scrollStack: `import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ScrollStackProps } from "../../types";

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
    const containerRef = useRef<HTMLDivElement>(null);
    const isHorizontal = orientation === "horizontal";

    // Convert children to array
    const items = React.Children.toArray(children);
    const total = items.length;
    
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
    );
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
                    className={\`inline-flex \${orientation === "vertical" ? "flex-col" : "flex-row"} \${fullWidth ? "w-full" : ""} p-1 bg-neutral-100 dark:bg-neutral-800/50 rounded-xl relative overflow-hidden ring-1 ring-black/5 dark:ring-white/5 \${className || ""}\`}
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
            className={\`
                relative z-10 flex-1 px-4 py-2 text-sm font-medium transition-colors duration-200 outline-none select-none rounded-lg
                \${isActive ? "text-neutral-900 dark:text-white" : "text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"}
                \${isDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
                \${className || ""}
            \`}
            {...props}
        >
            {isActive && (
                <motion.div
                    layoutId="pill-nav-indicator"
                    className="absolute inset-0 bg-white dark:bg-neutral-700 shadow-sm rounded-lg -z-10"
                    initial={false}
                    transition={TRANSITIONS[context.animationType] as any}
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
                        transform: \`rotate(\${angle}deg) translateX(\${radius}px) \${
                            keepUpright ? \`rotate(-\${angle}deg)\` : ""
                        }\`,
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
    )
}

`,
  patterns: `import React, { ReactNode } from 'react';
import { Heading, Text, Button, Icon, Box } from './Primitives';
import { Card, Container, Stack } from './Layout';
import { Navbar } from '../navigation/Navbar';
import { Sidebar } from '../navigation/Sidebar';

// --- Auth Layout ---
export const AuthLayout: React.FC<{
  children: ReactNode;
  backgroundImage?: string;
  logo?: ReactNode;
  title?: string;
  subtitle?: string;
  isFullPage?: boolean;
  className?: string;
}> = ({ children, backgroundImage, logo, title, subtitle, isFullPage = true, className = '' }) => {
  const containerClasses = isFullPage 
    ? "min-h-screen flex bg-neutral-50 dark:bg-neutral-950" 
    : "flex w-full h-full bg-white dark:bg-neutral-900";

  return (
    <div className={\`\${containerClasses} \${className}\`}>
      <div className={\`flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 bg-white dark:bg-neutral-900 \${isFullPage ? 'lg:flex-none lg:px-20 xl:px-24 border-r border-neutral-200 dark:border-neutral-800 lg:w-[480px]' : ''}\`}>
        <div className={\`mx-auto w-full \${isFullPage ? 'max-w-sm lg:w-96' : 'max-w-md'}\`}>
          <div className="mb-8">
             {logo}
             {title && <Heading level={2} className="mt-6">{title}</Heading>}
             {subtitle && <Text color="muted" className="mt-2">{subtitle}</Text>}
          </div>
          {children}
        </div>
      </div>
      {isFullPage && (
        <div className="hidden lg:block relative w-0 flex-1 overflow-hidden">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={backgroundImage || "https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1908&q=80"}
            alt="Authorization Background"
          />
          <div className="absolute inset-0 bg-primary-900/40 mix-blend-multiply" />
        </div>
      )}
    </div>
  );
};

// --- Dashboard Layout ---
export const DashboardLayout: React.FC<{
  children: ReactNode;
  sidebar?: ReactNode;
  navbar?: ReactNode;
}> = ({ children, sidebar, navbar }) => {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      {navbar}
      <div className="flex pt-16 h-screen overflow-hidden">
        {sidebar || <Sidebar />}
        <main className="flex-1 relative overflow-y-auto focus:outline-none lg:ml-64">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

// --- Hero Section ---
export const HeroSection: React.FC<{
  title: string;
  subtitle: string;
  ctaPrimary?: ReactNode;
  ctaSecondary?: ReactNode;
  image?: string;
}> = ({ title, subtitle, ctaPrimary, ctaSecondary, image }) => {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-neutral-900 pt-16 pb-32">
       <Container size="lg" className="relative z-10">
         <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <Heading level={1} className="tracking-tight text-4xl sm:text-5xl md:text-6xl text-neutral-900 dark:text-neutral-100">
                {title}
              </Heading>
              <Text size="lg" color="muted" className="mt-6">
                {subtitle}
              </Text>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0 flex gap-4">
                {ctaPrimary}
                {ctaSecondary}
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
               <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md overflow-hidden">
                 <img className="w-full" src={image || "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"} alt="Hero" />
               </div>
            </div>
         </div>
       </Container>
    </div>
  );
};

// --- Feature Grid ---
export const FeatureGrid: React.FC<{
  title: string;
  subtitle?: string;
  features: { title: string; description: string; icon: ReactNode }[];
}> = ({ title, subtitle, features }) => {
  return (
    <div className="py-12 bg-neutral-50 dark:bg-neutral-950">
      <Container>
        <div className="text-center mb-16">
          <Heading level={2} className="text-primary-600 dark:text-primary-400">Features</Heading>
          <Heading level={2} className="mt-2 text-3xl font-extrabold text-neutral-900 dark:text-white">{title}</Heading>
          {subtitle && <Text size="xl" color="muted" className="mt-4 max-w-2xl mx-auto">{subtitle}</Text>}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="pt-6">
              <div className="flow-root bg-white dark:bg-neutral-900 rounded-lg px-6 pb-8 h-full border border-neutral-200 dark:border-neutral-800 hover:shadow-lg transition">
                <div className="-mt-6">
                  <div className="inline-flex items-center justify-center p-3 bg-primary-500 rounded-md shadow-lg text-white">
                    {feature.icon}
                  </div>
                  <Heading level={3} className="mt-8 text-lg font-medium">{feature.title}</Heading>
                  <Text color="muted" className="mt-5">{feature.description}</Text>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

// --- Pricing Section ---
export const PricingSection: React.FC<{
  title: string;
  plans: { name: string; price: string; features: string[]; cta: string; recommended?: boolean }[];
}> = ({ title, plans }) => {
  return (
    <div className="py-24 bg-white dark:bg-neutral-900">
       <Container>
         <div className="text-center">
            <Heading level={2} className="text-3xl font-extrabold text-neutral-900 dark:text-white sm:text-4xl">{title}</Heading>
         </div>
         <div className="mt-20 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
            {plans.map((plan, i) => (
              <div key={i} className={\`relative p-8 bg-white dark:bg-neutral-900 border rounded-2xl shadow-sm flex flex-col \${plan.recommended ? 'border-primary-500 ring-2 ring-primary-500' : 'border-neutral-200 dark:border-neutral-800'}\`}>
                 <div className="flex-1">
                   <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">{plan.name}</h3>
                   <p className="mt-4 flex items-baseline text-neutral-900 dark:text-neutral-100">
                     <span className="text-5xl font-extrabold tracking-tight">{plan.price}</span>
                     <span className="ml-1 text-xl font-semibold text-neutral-500">/mo</span>
                   </p>
                   <ul className="mt-6 space-y-6">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex">
                           <Icon size="sm" className="text-primary-500 flex-shrink-0"><path d="M5 13l4 4L19 7"/></Icon>
                           <span className="ml-3 text-neutral-500 dark:text-neutral-400">{feature}</span>
                        </li>
                      ))}
                   </ul>
                 </div>
                 <Button className="mt-8 w-full" variant={plan.recommended ? 'primary' : 'outline'}>{plan.cta}</Button>
              </div>
            ))}
         </div>
       </Container>
    </div>
  );
};

// --- Footer ---
export const Footer: React.FC<{
  links: { title: string; items: string[] }[];
  socials?: ReactNode;
}> = ({ links, socials }) => {
  return (
    <footer className="bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800">
      <Container className="py-12 md:py-16 lg:py-20">
         <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
               <div className="flex items-center gap-2">
                 <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700" />
                 <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400">Nexus UI</span>
               </div>
               <Text color="muted" className="text-sm max-w-xs">Making the web look better, one component at a time.</Text>
               <div className="flex space-x-6">{socials}</div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                 {links.slice(0, 2).map((col, i) => (
                   <div key={i} className="mt-12 md:mt-0">
                      <h3 className="text-sm font-semibold text-neutral-400 tracking-wider uppercase">{col.title}</h3>
                      <ul className="mt-4 space-y-4">
                         {col.items.map((item, j) => (
                           <li key={j}><a href="#" className="text-base text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition">{item}</a></li>
                         ))}
                      </ul>
                   </div>
                 ))}
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                 {links.slice(2, 4).map((col, i) => (
                   <div key={i} className="mt-12 md:mt-0">
                      <h3 className="text-sm font-semibold text-neutral-400 tracking-wider uppercase">{col.title}</h3>
                      <ul className="mt-4 space-y-4">
                         {col.items.map((item, j) => (
                           <li key={j}><a href="#" className="text-base text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition">{item}</a></li>
                         ))}
                      </ul>
                   </div>
                 ))}
              </div>
            </div>
         </div>
      </Container>
    </footer>
  );
};

// --- 404 Page ---
export const Page404: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 flex flex-col justify-center items-center pb-24 px-4">
       <h1 className="text-9xl font-extrabold text-primary-200 dark:text-primary-900/30 tracking-widest">404</h1>
       <div className="absolute bg-primary-600 text-white px-2 text-sm rounded rotate-12">Page Not Found</div>
       <Heading level={2} className="mt-8">Whoops! Nothing to see here.</Heading>
       <Text className="mt-4" color="muted">The page you are looking for might have been removed or unavailable.</Text>
       <Button className="mt-8" size="lg">Go Home</Button>
    </div>
  );
};

// --- Error Page ---
export const ErrorPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 flex flex-col justify-center items-center pb-24 px-4">
       <div className="w-24 h-24 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-8">
         <Icon size="xl"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></Icon>
       </div>
       <Heading level={2}>Something went wrong</Heading>
       <Text className="mt-4 text-center max-w-md" color="muted">We apologize for the inconvenience. Please try again later or contact support if the problem persists.</Text>
       <div className="flex gap-4 mt-8">
         <Button variant="outline">Contact Support</Button>
         <Button>Try Again</Button>
       </div>
    </div>
  );
};
`,
  authFlow: `import React, { useState } from 'react';
import {
  LoginForm, SignupForm, ForgotPasswordForm, OTPVerification, ResetPasswordForm
} from './Forms';
import { AuthLayout } from './Patterns';
import { Button, Heading, Text, Icon } from './Primitives';
import { Alert } from './Composite';
import { Card, Stack } from './Layout';
import { Skeleton } from './Feedback';

export type AuthStep = 'login' | 'signup' | 'forgot-password' | 'otp' | 'reset-password' | 'success';

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
  const [step, setStep] = useState<AuthStep>(initialStep);
  const [isLoading, setIsLoading] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState('');

  const navigateTo = (nextStep: AuthStep) => {
    setIsTransitioning(true);
    setError(null);
    setTimeout(() => {
      setStep(nextStep);
      setIsTransitioning(false);
    }, 600);
  };

  const renderContent = () => {
    if (isTransitioning) {
      return (
        <Stack spacing={6}>
          <Skeleton height="40px" />
          <Skeleton height="40px" />
          <Skeleton height="40px" />
          <Skeleton height="48px" className="mt-4" />
        </Stack>
      );
    }

    switch (step) {
      case 'login':
        return (
          <div className="space-y-6">
            <LoginForm 
              onSubmit={(data) => {
                setIsLoading(true);
                setEmail(data.email);
                // Simulate API call
                setTimeout(() => {
                  setIsLoading(false);
                  if (data.email === 'error@example.com') {
                    setError('Invalid credentials. Please check your email and password.');
                  } else {
                    navigateTo('otp');
                  }
                }, 1500);
              }} 
              onForgotPassword={() => navigateTo('forgot-password')}
              isLoading={isLoading}
              error={error || undefined}
            />
            <div className="text-center">
              <Text color="muted" className="text-sm">
                Don't have an account?{' '}
                <button onClick={() => navigateTo('signup')} className="font-medium text-primary-600 hover:text-primary-500">
                  Sign up
                </button>
              </Text>
            </div>
          </div>
        );
      case 'signup':
        return (
          <div className="space-y-6">
            <SignupForm 
              onSubmit={(data) => {
                setIsLoading(true);
                setEmail(data.email);
                setTimeout(() => {
                  setIsLoading(false);
                  navigateTo('otp');
                }, 1500);
              }} 
              isLoading={isLoading}
              error={error || undefined}
            />
            <div className="text-center">
              <Text color="muted" className="text-sm">
                Already have an account?{' '}
                <button onClick={() => navigateTo('login')} className="font-medium text-primary-600 hover:text-primary-500">
                  Sign in
                </button>
              </Text>
            </div>
          </div>
        );
      case 'forgot-password':
        return (
          <div className="space-y-6">
            <ForgotPasswordForm 
              onSubmit={(data) => {
                setIsLoading(true);
                setEmail(data.email);
                setTimeout(() => {
                  setIsLoading(false);
                  // In demo, we jump to OTP for verification
                  navigateTo('otp');
                }, 1500);
              }} 
              isLoading={isLoading}
              error={error || undefined}
            />
            <div className="text-center">
              <button onClick={() => navigateTo('login')} className="text-sm font-medium text-primary-600 hover:text-primary-500">
                Back to Sign in
              </button>
            </div>
          </div>
        );
      case 'otp':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <Text color="muted">
                We've sent a 6-digit verification code to <br />
                <span className="font-semibold text-neutral-900 dark:text-neutral-100">{email || 'your email'}</span>
              </Text>
            </div>
            <OTPVerification 
              onComplete={(code) => {
                setIsLoading(true);
                setTimeout(() => {
                  setIsLoading(false);
                  if (code === '000000') {
                    setError('Invalid verification code. Please try again.');
                  } else {
                    navigateTo('success');
                    onSuccess?.({ email, code, status: 'verified' });
                  }
                }, 1500);
              }}
              onResend={() => {
                setError(null);
                // Simulate resend
              }}
              isLoading={isLoading}
              error={error || undefined}
            />
          </div>
        );
      case 'reset-password':
        return (
          <ResetPasswordForm 
            onSubmit={() => {
              setIsLoading(true);
              setTimeout(() => {
                setIsLoading(false);
                navigateTo('success');
              }, 1500);
            }} 
            isLoading={isLoading} 
          />
        );
      case 'success':
        return (
          <div className="text-center py-8 animate-in zoom-in duration-500">
            <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
              <Icon size="lg"><path d="M5 13l4 4L19 7" /></Icon>
            </div>
            <Heading level={2} className="mb-2">Success!</Heading>
            <Text color="muted" className="mb-10 px-4">Your account has been verified successfully. You can now continue to use all features.</Text>
            <Button fullWidth onClick={() => navigateTo('login')}>
              Go to Dashboard
            </Button>
          </div>
        );
      default:
        return null;
    }
  };

  const getHeaderInfo = () => {
    switch (step) {
      case 'login': return { title: 'Welcome Back', subtitle: 'Sign in to your account' };
      case 'signup': return { title: 'Create Account', subtitle: 'Join our community today' };
      case 'forgot-password': return { title: 'Forgot Password', subtitle: 'Reset your security credentials' };
      case 'otp': return { title: 'Verify Email', subtitle: 'Enter the code sent to your email' };
      case 'success': return { title: '', subtitle: '' };
      default: return { title: 'Authentication', subtitle: '' };
    }
  };

  const header = getHeaderInfo();

  return (
    <AuthLayout
      title={header.title}
      subtitle={header.subtitle}
      isFullPage={isFullPage}
      className={className}
      logo={logo || (
        <div className="w-12 h-12 rounded-xl bg-primary-600 flex items-center justify-center text-white shadow-lg shadow-primary-600/20">
          <Icon size="md">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </Icon>
        </div>
      )}
    >
      {renderContent()}
    </AuthLayout>
  );
};
`,
  adminDashboard: `import React, { useState } from 'react';
import { Button, Heading, Text, Icon, Avatar, Badge, Spinner, Box } from './Primitives';
import { Card, Stack, Container } from './Layout';
import { Input } from './Forms';
import { Alert, Pagination } from './Composite';
import { Skeleton } from './Feedback';

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
};
`,
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
  Label
} from './Primitives';
import { Card, Stack, Container } from './Layout';
import { Input, Select, Checkbox } from './Forms';
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
          <Text color="muted">Configure roles and permissions for your organization.</Text>
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
                {selectedIds.length} users
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
                    Member {sortConfig?.key === 'name' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                  </Flex>
                </th>
                <th className="px-6 py-4 cursor-pointer hover:text-primary-600 transition" onClick={() => handleSort('role')}>
                  <Flex align="center" gap={1}>
                    Role {sortConfig?.key === 'role' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
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
                        <Text color="muted">We couldn't find any members matching your criteria.</Text>
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
                          <Text size="xs" color="muted">{user.email}</Text>
                        </div>
                      </Flex>
                    </td>
                    <td className="px-6 py-4">
                      <Flex gap={2} align="center">
                        <span className={\`w-2 h-2 rounded-full \${user.role === 'Admin' ? 'bg-indigo-500' : user.role === 'Editor' ? 'bg-emerald-500' : 'bg-neutral-400'}\`} />
                        <Text size="sm" weight="medium">{user.role}</Text>
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
                      <Text size="sm" color="muted">{user.lastActive}</Text>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Flex gap={1} justify="end" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <Tooltip content={!permissions.canEdit ? "No permission to edit" : "Edit Member"}>
                          <IconButton 
                            size="sm" 
                            variant="ghost" 
                            onClick={() => handleEdit(user)}
                            disabled={!permissions.canEdit}
                            aria-label="Edit Member"
                            icon={<Icon size="xs"><path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></Icon>}
                          />
                        </Tooltip>
                        <Tooltip content={!permissions.canDelete ? "No permission to delete" : "Remove Member"}>
                          <IconButton 
                            size="sm" 
                            variant="ghost" 
                            className="text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30"
                            onClick={() => handleDeleteClick(user)}
                            disabled={!permissions.canDelete}
                            aria-label="Remove Member"
                            icon={<Icon size="xs"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></Icon>}
                          />
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
          <Text size="sm" color="muted">Showing <span className="font-semibold text-neutral-900 dark:text-neutral-100">{paginatedUsers.length}</span> of <span className="font-semibold text-neutral-900 dark:text-neutral-100">{totalItems}</span> members</Text>
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
              <Alert variant="warning" size="sm" className="mb-2">
                <Flex align="center" gap={2}>
                  <Icon size="xs"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></Icon>
                  <Text size="xs">You have unsaved changes</Text>
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
            <Text color="muted">
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
};
`,
  ecommerceTemplate: `import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Product, CartItem, Order, 
  ButtonProps, ComponentVariant, ComponentSize 
} from '../../types';
import { 
  Button, Badge, Text, Heading, Icon, Avatar, IconButton, Label, Box, Flex 
} from './Primitives';
import { Card, Stack, Container } from './Layout';
import { Input, SearchInput, Select, Checkbox } from './Forms';
import { Drawer, Tabs, Modal, Wizard } from './Composite';

// --- Mock Data ---
const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Nexus Pro Headphones',
    description: 'High-fidelity audio with active noise cancellation and spatial sound.',
    price: 299,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    category: 'Electronics',
    rating: 4.8,
    reviews: 124,
    stock: 15,
    isNew: true,
    variants: [
      { type: 'color', options: [
        { label: 'Obsidian', value: 'obsidian', color: '#1a1a1a' },
        { label: 'Arctic', value: 'arctic', color: '#f5f5f7' },
        { label: 'Stardust', value: 'stardust', color: '#e2e2e2' }
      ]}
    ]
  },
  {
    id: '2',
    name: 'Minimalist Peak Backpack',
    description: 'Water-resistant, commuter-friendly design with modular compartments.',
    price: 145,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
    category: 'Lifestyle',
    rating: 4.6,
    reviews: 89,
    stock: 24,
    isSale: true,
    salePrice: 120
  },
  {
    id: '3',
    name: 'Precision Mechanical Keyboard',
    description: 'Tactile switches with customizable RGB lighting and aluminum frame.',
    price: 189,
    image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=800&q=80',
    category: 'Electronics',
    rating: 4.9,
    reviews: 210,
    stock: 8
  },
  {
    id: '4',
    name: 'Aura Smart Watch',
    description: 'Track your health and stay connected with a stunning OLED display.',
    price: 399,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    category: 'Electronics',
    rating: 4.7,
    reviews: 156,
    stock: 42,
    isNew: true
  },
  {
    id: '5',
    name: 'Nomad Leather Wallet',
    description: 'Full-grain leather with RFID protection and slim profile.',
    price: 59,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&q=80',
    category: 'Lifestyle',
    rating: 4.5,
    reviews: 78,
    stock: 120
  },
  {
    id: '6',
    name: 'Zenith Studio Speakers',
    description: 'Reference-grade monitors for crystal clear sound production.',
    price: 549,
    image: 'https://images.unsplash.com/photo-1589190282059-2720352c2826?w=800&q=80',
    category: 'Electronics',
    rating: 5.0,
    reviews: 45,
    stock: 5
  }
];

// --- Sub-components ---

const ProductCard = ({ 
  product, 
  onAddToCart, 
  onViewDetails 
}: { 
  product: Product; 
  onAddToCart: (p: Product) => void;
  onViewDetails: (p: Product) => void;
  key?: React.Key;
}) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="group overflow-hidden h-full flex flex-col border-neutral-100 dark:border-neutral-800 hover:shadow-2xl transition-all duration-500">
        <div 
          className="relative aspect-square overflow-hidden cursor-pointer"
          onClick={() => onViewDetails(product)}
        >
          <motion.img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {product.isNew && <Badge variant="primary">New Arrival</Badge>}
            {product.isSale && <Badge variant="danger">Sale</Badge>}
          </div>
          <div 
            className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2"
          >
            <Button size="sm" variant="primary" onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}>
              Add to Cart
            </Button>
          </div>
        </div>
        
        <div className="p-4 flex-1 flex flex-col gap-2">
          <div className="flex justify-between items-start gap-4">
            <Text variant="label-md" weight="bold" className="line-clamp-1 group-hover:text-primary-500 transition-colors">
              {product.name}
            </Text>
            <div className="flex items-center gap-1 shrink-0">
               <Icon size="xs" className="text-amber-400">
                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
               </Icon>
               <Text variant="caption">{product.rating}</Text>
            </div>
          </div>
          
          <Text variant="caption" tone="muted" className="line-clamp-2">
            {product.description}
          </Text>
          
          <div className="mt-auto pt-4 flex justify-between items-center">
            <div className="flex items-baseline gap-2">
              <Text variant="heading-md" weight="bold">
                \${product.isSale ? product.salePrice : product.price}
              </Text>
              {product.isSale && (
                <Text variant="caption" tone="muted" className="line-through">
                  \${product.price}
                </Text>
              )}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

const CartSidebar = ({ 
  isOpen, 
  onClose, 
  items, 
  onUpdateQuantity, 
  onRemove,
  onCheckout
}: {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, q: number) => void;
  onRemove: (id: string) => void;
  onCheckout: () => void;
}) => {
  const total = items.reduce((sum, item) => sum + (item.salePrice || item.price) * item.quantity, 0);

  return (
    <Drawer isOpen={isOpen} onClose={onClose} title="Your Cart" size="md">
      <div className="flex flex-col h-full">
        <div className="flex-1 overflow-y-auto py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 opacity-50">
              <Icon size="xl" className="mb-4"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></Icon>
              <Text>Your cart is empty</Text>
            </div>
          ) : (
            <Stack spacing={4}>
              <AnimatePresence mode="popLayout">
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex gap-4 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800"
                  >
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <Text weight="bold" variant="label-md">{item.name}</Text>
                          <IconButton size="sm" variant="ghost" icon={<Icon size="xs"><path d="M6 18L18 6M6 6l12 12" /></Icon>} onClick={() => onRemove(item.id)} aria-label="Remove" />
                        </div>
                        <Text variant="caption" tone="muted">\${item.salePrice || item.price}</Text>
                      </div>
                      <div className="flex items-center gap-3">
                        <IconButton size="sm" variant="outline" icon={<Icon size="xs"><path d="M20 12H4" /></Icon>} onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))} aria-label="Decrease" />
                        <Text weight="medium">{item.quantity}</Text>
                        <IconButton size="sm" variant="outline" icon={<Icon size="xs"><path d="M12 4v16m8-8H4" /></Icon>} onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} aria-label="Increase" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </Stack>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t dark:border-neutral-800 pt-6 mt-auto">
            <div className="flex justify-between mb-4">
              <Text variant="body-lg" weight="medium">Total</Text>
              <Text variant="body-lg" weight="bold" className="text-primary-600">\${total.toFixed(2)}</Text>
            </div>
            <Button fullWidth size="lg" variant="primary" onClick={onCheckout}>
              Proceed to Checkout
            </Button>
            <Text variant="caption" tone="muted" align="center" className="mt-4 block">
              Free shipping on orders over $500
            </Text>
          </div>
        )}
      </div>
    </Drawer>
  );
};

// --- Main Template Component ---

export const EcommerceTemplate = () => {
  const [view, setView] = useState<'grid' | 'detail' | 'checkout' | 'success'>('grid');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  // Filtering
  const filteredProducts = useMemo(() => {
    return MOCK_PRODUCTS.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const categories = ['All', ...Array.from(new Set(MOCK_PRODUCTS.map(p => p.category)))];

  // Actions
  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, q: number) => {
    setCart(prev => prev.map(item => item.id === id ? { ...item, quantity: q } : item));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  // Render Logic
  const renderContent = () => {
    switch (view) {
      case 'grid':
        return (
          <Stack spacing={8}>
             <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
                <div>
                   <Heading level={2}>Discover Innovation</Heading>
                   <Text tone="muted">Explore our curated collection of premium tech and lifestyle essentials.</Text>
                </div>
                <div className="flex gap-4 w-full md:w-auto">
                   <div className="flex-1 md:w-64">
                      <SearchInput 
                        placeholder="Search products..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                   </div>
                   <IconButton 
                     variant="outline"
                     aria-label="Filter"
                     icon={<Icon size="sm"><path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></Icon>}
                   />
                </div>
             </div>

             <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
                {categories.map(cat => (
                  <Button 
                    key={cat}
                    size="sm"
                    variant={selectedCategory === cat ? 'primary' : 'outline'}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </Button>
                ))}
             </div>

             {filteredProducts.length > 0 ? (
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                 <AnimatePresence mode="popLayout">
                   {filteredProducts.map(product => (
                     <ProductCard 
                       key={product.id} 
                       product={product} 
                       onAddToCart={addToCart}
                       onViewDetails={(p) => { setSelectedProduct(p); setView('detail'); }}
                     />
                   ))}
                 </AnimatePresence>
               </div>
             ) : (
               <div className="py-20 text-center">
                  <Icon size="xl" className="mx-auto mb-4 opacity-20"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></Icon>
                  <Text tone="muted">No products found matching your search.</Text>
               </div>
             )}
          </Stack>
        );
      
      case 'detail':
        if (!selectedProduct) return null;
        return (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
             <div className="space-y-4">
                <Button variant="ghost" size="sm" onClick={() => setView('grid')} className="mb-4">
                  <Icon size="xs" className="mr-2"><path d="M10 19l-7-7m0 0l7-7m-7 7h18" /></Icon>
                  Back to Shop
                </Button>
                <div className="aspect-square rounded-3xl overflow-hidden border border-neutral-100 dark:border-neutral-800">
                   <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-cover" />
                </div>
             </div>
             
             <div className="flex flex-col gap-6 py-8">
                <div>
                   <Badge variant="primary" className="mb-4">{selectedProduct.category}</Badge>
                   <Heading level={1}>{selectedProduct.name}</Heading>
                   <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center gap-1">
                         <Icon size="xs" className="text-amber-400"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></Icon>
                         <Text weight="bold">{selectedProduct.rating}</Text>
                      </div>
                      <Text variant="caption" tone="muted">{selectedProduct.reviews} verified reviews</Text>
                   </div>
                </div>

                <div className="flex items-baseline gap-3">
                   <Text variant="display-lg" weight="bold" className="text-primary-600">
                     \${selectedProduct.isSale ? selectedProduct.salePrice : selectedProduct.price}
                   </Text>
                   {selectedProduct.isSale && (
                     <Text weight="medium" tone="muted" className="line-through text-lg">
                       \${selectedProduct.price}
                     </Text>
                   )}
                </div>

                <Text className="text-lg leading-relaxed">{selectedProduct.description}</Text>

                {selectedProduct.variants?.map(variant => (
                  <div key={variant.type} className="space-y-4">
                     <Text weight="bold" className="capitalize">{variant.type}</Text>
                     <div className="flex gap-3">
                        {variant.options.map(opt => (
                           <button
                             key={opt.value}
                             className="w-10 h-10 rounded-full border-2 transition-all hover:scale-110 active:scale-95 focus:ring-2 ring-primary-500 ring-offset-2"
                             style={{ 
                               backgroundColor: opt.color, 
                               borderColor: 'rgba(0,0,0,0.1)' 
                             }}
                             title={opt.label}
                           />
                        ))}
                     </div>
                  </div>
                ))}

                <div className="flex gap-4 mt-8">
                   <Button size="lg" variant="primary" className="flex-1" onClick={() => addToCart(selectedProduct)}>
                     Add to Cart
                   </Button>
                   <IconButton size="lg" variant="outline" icon={<Icon size="sm"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></Icon>} aria-label="Add to wishlist" />
                </div>
                
                <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 flex gap-4 items-center">
                   <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600">
                      <Icon size="xs"><path d="M5 13l4 4L19 7" /></Icon>
                   </div>
                   <div>
                      <Text variant="label-md" weight="bold">In Stock & Ready to Ship</Text>
                      <Text variant="caption" tone="muted">Order now and get it by Thursday, Sep 15.</Text>
                   </div>
                </div>
             </div>
          </motion.div>
        );

      case 'checkout':
        return (
          <Container size="md" className="py-12">
             <Card className="p-8">
                <Wizard 
                  variant="modern"
                  currentStep={1}
                  steps={[
                    { id: 1, title: 'Shipping', description: 'Address details' },
                    { id: 2, title: 'Payment', description: 'Payment method' },
                    { id: 3, title: 'Review', description: 'Final summary' }
                  ]}
                />
                
                <div className="mt-12 space-y-8">
                   <Stack spacing={4}>
                      <Heading level={4}>Shipping Information</Heading>
                      <div className="grid grid-cols-2 gap-4">
                         <Input label="First Name" placeholder="John" />
                         <Input label="Last Name" placeholder="Doe" />
                      </div>
                      <Input label="Street Address" placeholder="123 Innovation Drive" />
                      <div className="grid grid-cols-3 gap-4">
                         <div className="col-span-2"><Input label="City" placeholder="San Francisco" /></div>
                         <Input label="ZIP" placeholder="94103" />
                      </div>
                   </Stack>
                   
                   <div className="flex justify-between items-center pt-8 border-t dark:border-neutral-800">
                      <Button variant="ghost" onClick={() => setView('grid')}>Cancel</Button>
                      <Button variant="primary" onClick={() => setView('success')}>Complete Purchase</Button>
                   </div>
                </div>
             </Card>
          </Container>
        );

      case 'success':
        return (
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="py-20 text-center space-y-6"
          >
             <div className="w-24 h-24 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center text-emerald-600 mx-auto">
                <Icon size="lg"><path d="M5 13l4 4L19 7" /></Icon>
             </div>
             <Heading level={1}>Order Confirmed!</Heading>
             <Text tone="muted" className="max-w-md mx-auto">
                Your order #NX-98241 has been placed successfully. We'll send you a confirmation email with tracking details shortly.
             </Text>
             <div className="pt-8">
                <Button variant="primary" onClick={() => { setCart([]); setView('grid'); }}>
                   Continue Shopping
                </Button>
             </div>
          </motion.div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      {/* Navigation Header */}
      <nav className="sticky top-0 z-40 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-neutral-100 dark:border-neutral-900">
         <Container size="xl" className="h-20 flex items-center justify-between">
            <div className="flex items-center gap-8">
               <div className="flex items-center gap-2 cursor-pointer" onClick={() => setView('grid')}>
                  <div className="w-8 h-8 bg-primary-600 rounded-xl" />
                  <Text weight="bold" className="text-xl tracking-tight">NEXUS<span className="text-primary-500">STORE</span></Text>
               </div>
               <div className="hidden md:flex gap-6">
                  <Text variant="label-md" weight="medium" className="cursor-pointer hover:text-primary-500">Market</Text>
                  <Text variant="label-md" weight="medium" className="cursor-pointer hover:text-primary-500">Categories</Text>
                  <Text variant="label-md" weight="medium" className="cursor-pointer hover:text-primary-500">Sale</Text>
               </div>
            </div>
            
            <div className="flex items-center gap-4">
               <IconButton 
                 variant="ghost" 
                 aria-label="Search"
                 icon={<Icon size="sm"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></Icon>} 
               />
               <div className="relative">
                  <IconButton 
                    variant="ghost" 
                    aria-label="Cart"
                    onClick={() => setIsCartOpen(true)}
                    icon={<Icon size="sm"><path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></Icon>} 
                  />
                  {cart.length > 0 && (
                    <motion.div 
                      layoutId="cart-badge"
                      className="absolute -top-1 -right-1 w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center text-[10px] text-white font-bold border-2 border-white dark:border-neutral-950"
                    >
                      {cart.reduce((s, i) => s + i.quantity, 0)}
                    </motion.div>
                  )}
               </div>
               <Avatar src="https://i.pravatar.cc/150?u=current" size="sm" />
            </div>
         </Container>
      </nav>

      {/* Main Content Area */}
      <Container size="xl" className="py-12">
         {renderContent()}
      </Container>

      {/* Cart Drawer */}
      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cart}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
        onCheckout={() => { setIsCartOpen(false); setView('checkout'); }}
      />
      
      {/* Footer */}
      <footer className="mt-20 border-t border-neutral-100 dark:border-neutral-900 bg-neutral-50 dark:bg-neutral-950 py-12">
         <Container size="xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
               <Stack spacing={4}>
                  <Text weight="bold">Store</Text>
                  <Stack spacing={2}>
                    <Text variant="caption" tone="muted">New Arrivals</Text>
                    <Text variant="caption" tone="muted">Featured</Text>
                    <Text variant="caption" tone="muted">Sale Items</Text>
                  </Stack>
               </Stack>
               <Stack spacing={4}>
                  <Text weight="bold">Support</Text>
                  <Stack spacing={2}>
                    <Text variant="caption" tone="muted">FAQ</Text>
                    <Text variant="caption" tone="muted">Shipping</Text>
                    <Text variant="caption" tone="muted">Returns</Text>
                  </Stack>
               </Stack>
               <Stack spacing={4}>
                  <Text weight="bold">Company</Text>
                  <Stack spacing={2}>
                    <Text variant="caption" tone="muted">About Us</Text>
                    <Text variant="caption" tone="muted">Careers</Text>
                    <Text variant="caption" tone="muted">Press</Text>
                  </Stack>
               </Stack>
               <Stack spacing={4}>
                  <Text weight="bold">Subscribe</Text>
                  <Text variant="caption" tone="muted">Get the latest updates on new products and upcoming sales.</Text>
                  <div className="flex gap-2">
                     <Input placeholder="Email" />
                     <Button variant="primary">Join</Button>
                  </div>
               </Stack>
            </div>
         </Container>
      </footer>
    </div>
  );
};
`,
};
