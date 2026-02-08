import React from 'react';
import { BaseProps, ComponentVariant, ComponentSize, TextProps, HeadingProps, BadgeProps, ButtonProps, AvatarProps, BoxProps, FlexProps, IconProps, SpinnerProps, LabelProps, CaptionProps, CodeProps, BlockquoteProps } from '../../types';
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
    `text-${align}`,
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
  const baseStyles = 'inline-flex items-center gap-2 font-medium transition-all duration-200';
  
  const variants = {
    default: 'text-neutral-700 dark:text-neutral-300',
    subtle: 'text-neutral-500 dark:text-neutral-400',
    primary: 'text-primary-600 dark:text-primary-400',
    success: 'text-green-600 dark:text-green-400',
    warning: 'text-yellow-600 dark:text-yellow-400',
    danger: 'text-red-600 dark:text-red-400',
    destructive: 'text-red-600 dark:text-red-400', // alias for danger
    info: 'text-blue-600 dark:text-blue-400',
    outline: 'px-2 py-0.5 border border-neutral-300 dark:border-neutral-700 rounded text-neutral-600 dark:text-neutral-400',
    ghost: 'px-2 py-0.5 bg-neutral-100 dark:bg-neutral-800 rounded text-neutral-600 dark:text-neutral-400',
    gradient: 'text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600 font-bold',
  };

  const sizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  };

  const weights = {
    regular: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  return (
    <label
      htmlFor={htmlFor}
      className={`
        ${baseStyles} 
        ${variants[variant]} 
        ${sizes[size]} 
        ${weights[weight as keyof typeof weights]} 
        text-${align} 
        ${disabledStyles} 
        ${className}
      `}
    >
      {isLoading && (
        <svg className="animate-spin h-3 w-3 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {children}
      {required && <span className="text-red-500 ml-0.5">*</span>}
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
    <span className={`
      ${size === 'xs' ? 'text-xs' : 'text-sm'}
      ${weight === 'bold' ? 'font-bold' : weight === 'semibold' ? 'font-semibold' : weight === 'medium' ? 'font-medium' : 'font-normal'}
      ${tone === 'muted' ? 'text-neutral-500' : tone === 'subtle' ? 'text-neutral-400' : tone === 'destructive' ? 'text-red-600' : 'text-neutral-900'}
      text-${align}
      ${truncate ? 'truncate block' : ''}
      ${className}
    `}>
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
      <pre className={`p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg overflow-x-auto text-sm font-mono text-neutral-800 dark:text-neutral-200 ${className}`}>
        <code>{children}</code>
      </pre>
    );
  }
  return (
    <code className={`px-1.5 py-0.5 bg-neutral-100 dark:bg-neutral-800 rounded text-sm font-mono text-primary-600 dark:text-primary-400 ${className}`}>
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
    <blockquote className={`border-l-4 border-neutral-200 dark:border-neutral-700 pl-4 py-1 my-4 text-${align} ${className}`}>
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
    // Or maybe it's just the shape. Usually "pill" refers to `rounded-full`.
    // I will treat it as "Subtle but fully rounded".
    if (s === 'pill') {
       // Use subtle colors but ensure rounded-full
       const base = getVariantStyles(v, 'subtle');
       return `${base} rounded-full`;
    }
    return '';
  };

  const styleClasses = getVariantStyles(variant, style);
  const roundedClass = style === 'pill' ? 'rounded-full' : 'rounded'; // Default rounded if not pill

  return (
    <span className={`${baseStyles} ${sizes[size]} ${styleClasses} ${roundedClass} ${className}`}>
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
export * from './icon-button/IconButton';
