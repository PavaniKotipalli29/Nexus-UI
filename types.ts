import React, { ReactNode } from "react";

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

export interface InteractiveProps {
  interactive?: boolean;
  hoverScale?: number;
  tapScale?: number;
  hoverOpacity?: number;
  hoverColor?: string;
}

export interface TextProps extends BaseProps, InteractiveProps {
  variant?: TextVariant;
  weight?: TextWeight;
  tone?: TextTone;
  align?: TypographyAlign;
  truncate?: boolean;
  gradient?: boolean | string;
  balanced?: boolean;
  decoration?: "underline" | "line-through" | "none";
  onClick?: React.MouseEventHandler<HTMLElement>;
  /** @deprecated use variant */
  size?: any;
  /** @deprecated use tone */
  color?: any;
}

export interface HeadingProps extends TextProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  underlined?: boolean;
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

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement>, InteractiveProps {
  label?: string;
  variant?: "square" | "squircle" | "circle";
}

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement>, InteractiveProps {
  label?: string;
  variant?: "default" | "solid";
}

export interface SwitchProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  variant?: "default" | "ios" | "slim";
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

// Divider
export type DividerVariant = "solid" | "dashed" | "dotted" | "gradient" | "gradient-animated" | "fade" | "glass" | "glow" | "zigzag";
export type DividerOrientation = "horizontal" | "vertical";
export type DividerLabelPosition = "left" | "center" | "right";

export interface DividerProps extends BaseProps {
  variant?: DividerVariant;
  orientation?: DividerOrientation;
  thickness?: number | string;
  color?: string;
  label?: ReactNode;
  labelPosition?: DividerLabelPosition;
  labelBackground?: string;
}
