
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
    <div className={`${sizes[size]} mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  padding = 'md',
  variant = 'default',
  layout = 'vertical',
  size = 'md',
  hoverable = false,
  clickable = false,
  selectable = false,
  selected = false,
  loading = false,
  disabled = false,
  expandable = false,
  defaultExpanded = false,
  badge,
  status,
  header,
  footer,
  media,
  interactive = false,
  onClick,
  ...props
}) => {
  const [isExpanded, setIsExpanded] = React.useState(defaultExpanded);

  const paddings = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
  };

  const variants = {
    default: 'bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800',
    outlined: 'bg-transparent border-neutral-200 dark:border-neutral-800 shadow-none',
    elevated: 'bg-white dark:bg-neutral-900 border-transparent shadow-xl',
    glass: 'bg-white/70 dark:bg-neutral-900/70 backdrop-blur-md border-white/20 dark:border-neutral-800/50',
    gradient: 'bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-950 border-neutral-200 dark:border-neutral-800',
    minimal: 'bg-transparent border-transparent shadow-none',
    interactive: 'bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 hover:border-primary-500',
    dashboard: 'bg-neutral-50 dark:bg-neutral-900/50 border-l-4 border-l-primary-500 border-neutral-200 dark:border-neutral-800',
    feature: 'bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 text-center items-center',
  };

  const statusColors = {
    success: 'border-t-4 border-t-green-500',
    warning: 'border-t-4 border-t-yellow-500',
    error: 'border-t-4 border-t-red-500',
    info: 'border-t-4 border-t-primary-500',
  };

  const isInteractive = interactive || hoverable || clickable || selectable;
  const interactionStyle = isInteractive 
    ? 'transition-all duration-200 transform' 
    : '';
  const hoverStyle = (hoverable || interactive) ? 'hover:-translate-y-1 hover:shadow-lg' : '';
  const clickStyle = clickable ? 'cursor-pointer active:scale-[0.98]' : '';
  const selectStyle = (selectable && selected) ? 'ring-2 ring-primary-500 bg-primary-50/10' : '';
  const disabledStyle = disabled ? 'opacity-50 grayscale pointer-events-none' : '';

  return (
    <div 
      className={`relative flex rounded-xl border shadow-sm overflow-hidden ${variants[variant]} ${layout === 'horizontal' || layout === 'media-left' ? 'flex-row' : 'flex-col'} ${interactionStyle} ${hoverStyle} ${clickStyle} ${selectStyle} ${disabledStyle} ${status ? statusColors[status] : ''} ${className}`}
      onClick={(e) => {
        if (disabled || loading) return;
        onClick?.(e);
      }}
      {...props}
    >
      {badge && (
        <div className="absolute top-3 right-3 z-10 px-2 py-0.5 bg-primary-500 text-white text-[10px] font-bold rounded-full uppercase tracking-wider">
          {badge}
        </div>
      )}

      {loading && (
        <div className="absolute inset-0 z-20 bg-white/50 dark:bg-black/50 backdrop-blur-[1px] flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {media && (layout === 'media-top' || layout === 'media-left' || layout === 'horizontal') && (
        <div className={`${layout === 'horizontal' || layout === 'media-left' ? 'w-1/3' : 'w-full'} overflow-hidden bg-neutral-100 dark:bg-neutral-800`}>
          {media}
        </div>
      )}

      <div className="flex-1 flex flex-col">
        {(header || expandable) && (
          <div className={`flex items-center justify-between border-b border-neutral-100 dark:border-neutral-800 ${paddings[padding]} py-4`}>
            <div className="flex-1">{header}</div>
            {expandable && (
              <button 
                onClick={(e) => { e.stopPropagation(); setIsExpanded(!isExpanded); }}
                className={`p-1 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
              </button>
            )}
          </div>
        )}

        <div className={`${paddings[padding]} flex-1`}>
          {children}
          {expandable && (
            <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96 mt-4 pt-4 border-t border-dashed border-neutral-200 dark:border-neutral-800' : 'max-h-0'}`}>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">Additional expanded content goes here...</p>
            </div>
          )}
        </div>

        {footer && (
          <div className={`${paddings[padding]} py-4 border-t border-neutral-100 dark:border-neutral-800 bg-neutral-50/30 dark:bg-white/5`}>
            {footer}
          </div>
        )}
      </div>

      {media && layout === 'vertical' && (
        <div className="w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800">
          {media}
        </div>
      )}
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
    <div className={`flex ${directions[direction]} ${gap} ${aligns[align]} ${justifies[justify]} ${className}`}>
      {children}
    </div>
  );
};
