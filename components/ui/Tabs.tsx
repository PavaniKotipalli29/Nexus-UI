import React, { useState, useRef, useEffect, useMemo } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { TabsProps, TabItem } from '../../types';
import { Icon, Badge, Text } from './Primitives';

/**
 * Tabs Component - Premium & Versatile
 * Supports 8+ variants, animations, and extensive interactive props.
 */
export const Tabs: React.FC<TabsProps> = ({
  items,
  defaultTab,
  activeTab: controlledActiveTab,
  onChange,
  variant = 'underline',
  size = 'md',
  animation = 'slide',
  indicatorColor,
  indicatorThickness,
  showIndicator = true,
  lazy = true,
  disabledTabs = [],
  keepMounted = false,
  iconPosition = 'left',
  rounded = 'md',
  shadow = 'none',
  bordered = false,
  fullWidth = false,
  listClassName = '',
  className = '',
  children,
}) => {
  const [internalActiveTab, setInternalActiveTab] = useState(defaultTab || items[0]?.id);
  const activeTab = controlledActiveTab !== undefined ? controlledActiveTab : internalActiveTab;
  const layoutId = React.useId();
  
  // Track which tabs have been rendered for lazy loading
  const [renderedTabs, setRenderedTabs] = useState<Set<string>>(new Set([activeTab]));

  useEffect(() => {
    if (activeTab) {
      setRenderedTabs((prev) => new Set([...Array.from(prev), activeTab]));
    }
  }, [activeTab]);

  const handleTabChange = (id: string) => {
    if (controlledActiveTab === undefined) {
      setInternalActiveTab(id);
    }
    onChange?.(id);
  };

  const getContainerClasses = () => {
    const base = 'flex overflow-x-auto no-scrollbar relative';
    const variants: Record<string, string> = {
      line: 'border-b border-neutral-200 dark:border-neutral-800 gap-8',
      underline: 'border-b border-neutral-200 dark:border-neutral-800 gap-8',
      pills: 'p-1 bg-neutral-100 dark:bg-neutral-800/50 rounded-lg gap-1',
      card: 'gap-0 border-b border-neutral-200 dark:border-neutral-800',
      vertical: 'flex-col gap-1 border-r border-neutral-200 dark:border-neutral-800 pr-4',
      'icon-label': 'gap-8 border-b border-neutral-200 dark:border-neutral-800',
      segmented: 'p-1 bg-neutral-100 dark:bg-neutral-800/50 rounded-xl gap-0',
      contained: 'p-1.5 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl gap-2',
      ghost: 'gap-6 p-1',
      enclosed: 'gap-1 border-b border-neutral-200 dark:border-neutral-800',
    };

    const sizeStyles: Record<string, string> = {
      sm: 'gap-4 text-xs',
      md: 'gap-8 text-sm',
      lg: 'gap-10 text-base',
    };

    return `
      ${base} 
      ${variants[variant] || ''} 
      ${sizeStyles[size] || ''}
      ${fullWidth ? 'w-full' : ''} 
      ${variant === 'vertical' ? 'h-full' : 'w-full'}
      ${listClassName}
    `.trim();
  };

  const getTabClasses = (isActive: boolean, disabled: boolean) => {
    const base = 'group relative flex items-center justify-center transition-all duration-200 select-none outline-none';
    const cursor = disabled ? 'cursor-not-allowed opacity-40' : 'cursor-pointer';
    
    const sizeStyles: Record<string, string> = {
      sm: 'px-3 py-1.5 text-xs',
      md: 'px-4 py-2 text-sm',
      lg: 'px-6 py-3 text-base',
    };

    const variantStyles: Record<string, string> = {
      line: `py-3 font-medium ${isActive ? 'text-primary-600 dark:text-primary-400' : 'text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200'}`,
      underline: `py-3 font-medium ${isActive ? 'text-primary-600 dark:text-primary-400' : 'text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200'}`,
      pills: `${sizeStyles[size]} font-medium rounded-md ${isActive ? 'text-white' : 'text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200'}`,
      card: `${sizeStyles[size]} font-medium border-x border-t -mb-[1px] ${isActive ? 'bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 rounded-t-lg z-10' : 'bg-neutral-50 dark:bg-neutral-950 border-transparent text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-900'}`,
      vertical: `${sizeStyles[size]} font-medium rounded-lg justify-start gap-3 ${isActive ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400' : 'text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800'}`,
      'icon-label': `py-3 flex-col gap-1.5 font-medium ${isActive ? 'text-primary-600 dark:text-primary-400' : 'text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200'}`,
      segmented: `flex-1 ${sizeStyles[size]} font-medium transition-all ${isActive ? 'text-neutral-900 dark:text-white' : 'text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200'}`,
      contained: `${sizeStyles[size]} font-medium rounded-lg ${isActive ? 'bg-white dark:bg-neutral-800 text-primary-600 dark:text-primary-400 shadow-sm' : 'text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200'}`,
      ghost: `${sizeStyles[size]} font-medium rounded-full ${isActive ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400' : 'text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200'}`,
      enclosed: `${sizeStyles[size]} font-medium border border-transparent -mb-[1px] rounded-t-lg ${isActive ? 'bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 border-b-white dark:border-b-neutral-900 text-primary-600 dark:text-primary-400 z-10' : 'text-neutral-500 shadow-inner hover:bg-neutral-100 dark:hover:bg-neutral-900'}`,
    };

    return `${base} ${variantStyles[variant] || ''} ${cursor}`;
  };

  const getIndicator = (isActive: boolean) => {
    if (!isActive || animation === 'none' || !showIndicator) return null;

    const springConfig = { type: 'spring', stiffness: 500, damping: 35 };
    const indicatorLayoutId = `indicator-${layoutId}`;

    if (variant === 'underline' || variant === 'line') {
      return (
        <motion.div
          layoutId={indicatorLayoutId}
          className="absolute bottom-0 left-0 right-0"
          style={{ 
            backgroundColor: indicatorColor || 'var(--primary-600, #2563eb)',
            height: indicatorThickness || (size === 'lg' ? 3 : 2)
          }}
          transition={springConfig as any}
        />
      );
    }

    if (variant === 'pills') {
      return (
        <motion.div
          layoutId={indicatorLayoutId}
          className="absolute inset-0 z-0 bg-primary-600 rounded-md"
          style={{ backgroundColor: indicatorColor }}
          transition={springConfig as any}
        />
      );
    }

    if (variant === 'segmented') {
      return (
        <motion.div
          layoutId={indicatorLayoutId}
          className="absolute inset-0 z-0 bg-white dark:bg-neutral-700 shadow-sm rounded-lg"
          style={{ backgroundColor: indicatorColor }}
          transition={springConfig as any}
        />
      );
    }

    if (variant === 'ghost') {
      return (
        <motion.div
          layoutId={indicatorLayoutId}
          className="absolute inset-x-0 -bottom-1"
          style={{ 
            backgroundColor: indicatorColor || 'var(--primary-500, #3b82f6)',
            height: indicatorThickness || 2
          }}
          transition={springConfig as any}
        />
      );
    }

    return null;
  };

  return (
    <div className={`w-full ${className}`}>
      <div className={getContainerClasses()} role="tablist">
        <LayoutGroup id={layoutId}>
          {items.map((item) => {
            const isActive = activeTab === item.id;
            const isDisabled = !!item.disabled || disabledTabs.includes(item.id);

            return (
              <button
                key={item.id}
                role="tab"
                aria-selected={isActive}
                disabled={isDisabled}
                onClick={() => !isDisabled && handleTabChange(item.id)}
                className={getTabClasses(isActive, isDisabled)}
              >
                {getIndicator(isActive)}
                
                <div className={`relative z-10 flex items-center gap-2 ${iconPosition === 'top' ? 'flex-col' : iconPosition === 'right' ? 'flex-row-reverse' : 'flex-row'}`}>
                  {item.icon && (
                    <span className={`inline-flex items-center justify-center shrink-0 ${isActive ? 'text-primary-500' : 'text-neutral-400 group-hover:text-neutral-600'}`}>
                      {item.icon}
                    </span>
                  )}
                  
                  <div className="flex flex-col items-start leading-none">
                    <span className="whitespace-nowrap">{item.label}</span>
                    {variant === 'vertical' && item.description && (
                      <span className="text-[10px] text-neutral-400 font-normal mt-0.5 line-clamp-1">{item.description}</span>
                    )}
                  </div>

                  {item.badge !== undefined && (
                    <span className={`
                      inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-bold rounded-full
                      ${isActive ? 'bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-300' : 'bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400'}
                    `}>
                      {item.badge}
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </LayoutGroup>
      </div>

      <div className="mt-4 relative overflow-hidden">
        <AnimatePresence mode="wait">
          {items.map((item) => {
            const isActive = activeTab === item.id;
            const shouldRender = !lazy || renderedTabs.has(item.id) || keepMounted;

            if (!isActive && !keepMounted) return null;
            if (!shouldRender) return null;

            return (
              <motion.div
                key={item.id}
                role="tabpanel"
                initial={animation === 'slide' ? { x: 20, opacity: 0 } : animation === 'fade' ? { opacity: 0 } : {}}
                animate={{ x: 0, opacity: 1 }}
                exit={animation === 'slide' ? { x: -20, opacity: 0 } : animation === 'fade' ? { opacity: 0 } : {}}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className={isActive ? 'block' : 'hidden'}
              >
                {item.content}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Tabs;
