
import React from 'react';
import { BaseProps, ComponentVariant, ComponentSize, TextProps, HeadingProps, BadgeProps, ButtonProps, AvatarProps, BoxProps, FlexProps, IconProps, SpinnerProps } from '../../types';
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
    primary: `${isActive ? 'bg-primary-700 ring-2 ring-primary-500' : 'bg-primary-600'} text-white hover:bg-primary-700 focus:ring-primary-500 shadow-sm`,
    secondary: `${isActive ? 'bg-neutral-100 dark:bg-neutral-700 border-primary-500' : 'bg-white dark:bg-neutral-800'} text-neutral-700 border border-neutral-200 hover:bg-neutral-50 dark:text-neutral-200 dark:border-neutral-700 dark:hover:bg-neutral-700 focus:ring-neutral-200 shadow-sm`,
    outline: `${isActive ? 'bg-primary-50 dark:bg-primary-950/30 border-primary-700' : 'bg-transparent'} border border-primary-600 text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-950/20 focus:ring-primary-500`,
    ghost: `${isActive ? 'bg-neutral-100 dark:bg-neutral-800 text-primary-600' : 'bg-transparent'} text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800 focus:ring-neutral-200`,
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
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${roundedStyle} ${widthStyle} ${className}`}
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
    <div className={`inline-flex shadow-sm rounded-md overflow-hidden ${className}`}>
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

  return <p className={`${sizes[size]} ${weights[weight]} ${colors[color]} text-${align} ${className}`}>{children}</p>;
};

export const Heading: React.FC<HeadingProps> = ({
  children,
  className = '',
  level = 1,
  align = 'left',
  weight = 'bold'
}) => {
  // Fix: Use any to avoid "Cannot find namespace 'JSX'" and "does not have any construct or call signatures" errors
  const Tag = `h${level}` as any;
  const styles = {
    1: 'text-4xl tracking-tight lg:text-5xl',
    2: 'text-3xl tracking-tight',
    3: 'text-2xl tracking-tight',
    4: 'text-xl',
    5: 'text-lg',
    6: 'text-base',
  };

  const weights = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    black: 'font-black',
  };

  return <Tag className={`${styles[level]} ${weights[weight]} text-neutral-900 dark:text-neutral-50 text-${align} ${className}`}>{children}</Tag>;
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  className = '',
  variant = 'default',
  size = 'md',
  isRound = false,
  icon
}) => {
  const variants = {
    default: 'bg-neutral-100 text-neutral-800 border-neutral-200 dark:bg-neutral-800 dark:text-neutral-200 dark:border-neutral-700',
    primary: 'bg-primary-50 text-primary-700 border-primary-100 dark:bg-primary-950/30 dark:text-primary-400 dark:border-primary-900',
    secondary: 'bg-white text-neutral-700 border-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:border-neutral-700',
    outline: 'bg-transparent text-neutral-700 border-neutral-300 dark:text-neutral-300 dark:border-neutral-600',
    ghost: 'bg-transparent text-neutral-600 dark:text-neutral-400 border-transparent',
    success: 'bg-green-50 text-green-700 border-green-100 dark:bg-green-950/30 dark:text-green-400 dark:border-green-900',
    warning: 'bg-yellow-50 text-yellow-700 border-yellow-100 dark:bg-yellow-950/30 dark:text-yellow-400 dark:border-yellow-900',
    danger: 'bg-red-50 text-red-700 border-red-100 dark:bg-red-950/30 dark:text-red-400 dark:border-red-900',
    info: 'bg-blue-50 text-blue-700 border-blue-100 dark:bg-blue-950/30 dark:text-blue-400 dark:border-blue-900',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-[10px]',
    md: 'px-2.5 py-0.5 text-xs',
    lg: 'px-3 py-1 text-sm',
  };

  return (
    <span className={`inline-flex items-center ${sizes[size]} ${isRound ? 'rounded-full' : 'rounded-md'} font-medium border ${variants[variant]} ${className}`}>
      {icon && <span className="mr-1.5 -ml-0.5">{icon}</span>}
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
  shape = 'circle'
}) => {
  const sizes = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
    xl: 'w-16 h-16 text-lg',
    '2xl': 'w-24 h-24 text-2xl',
  };

  const shapes = {
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

  return (
    <div className="relative inline-block">
      <div className={`${sizes[size]} ${shapes[shape]} overflow-hidden bg-neutral-100 dark:bg-neutral-800 border-2 border-white dark:border-neutral-900 flex items-center justify-center font-medium text-neutral-600 dark:text-neutral-400 ${className}`}>
        {src ? (
          <img src={src} alt={alt} className="w-full h-full object-cover" />
        ) : (
          <span>{fallback || alt.charAt(0).toUpperCase()}</span>
        )}
      </div>
      {status && (
        <span className={`absolute bottom-0 right-0 block w-[15%] h-[15%] rounded-full ring-2 ring-white dark:ring-neutral-900 ${statusColors[status]}`} />
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
    padding: typeof padding === 'number' ? `${padding * 0.25}rem` : padding,
    margin: typeof margin === 'number' ? `${margin * 0.25}rem` : margin,
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
    gap: typeof gap === 'number' ? `${gap * 0.25}rem` : gap,
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
      className={`${sizes[size]} ${className}`} 
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
export type { SpinnerProps };
export * from './icon-button/IconButton';
