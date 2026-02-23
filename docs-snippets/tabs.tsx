import React, { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';

/**
 * standalone premium tabs component
 * includes all variants and logic in one block
 */

export const Tabs = ({
  items,
  defaultTab,
  variant = 'underline',
  size = 'md',
  animation = 'slide',
  rounded = 'md',
  fullWidth = false,
  listClassName = '',
  className = '',
  indicatorColor,
  indicatorThickness,
  showIndicator = true,
  disabledTabs = [],
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab || items[0]?.id);
  const layoutId = React.useId();

  const getContainerClasses = () => {
    const base = 'flex overflow-x-auto no-scrollbar relative';
    const variants: Record<string, string> = {
      underline: 'border-b border-neutral-200 dark:border-neutral-800 gap-8',
      pills: 'p-1 bg-neutral-100 dark:bg-neutral-800/50 rounded-lg gap-1',
      card: 'gap-0 border-b border-neutral-200 dark:border-neutral-800',
      vertical: 'flex-col gap-1 border-r border-neutral-200 dark:border-neutral-800 pr-4',
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
      ${listClassName}
    `.trim();
  };

  const getTabClasses = (isActive, disabled) => {
    const base = 'group relative flex items-center justify-center transition-all px-4 py-2 font-medium cursor-pointer outline-none select-none';
    const cursor = disabled ? 'cursor-not-allowed opacity-40' : 'cursor-pointer';
    
    const sizeStyles = {
      sm: 'px-3 py-1.5 text-xs',
      md: 'px-4 py-2 text-sm',
      lg: 'px-6 py-3 text-base',
    };

    const styles = {
      underline: isActive ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700',
      pills: isActive ? 'text-white' : 'text-gray-500 hover:text-gray-700',
      card: isActive ? 'bg-white dark:bg-gray-800 border-x border-t rounded-t-lg' : 'text-gray-500 hover:bg-gray-100',
      vertical: isActive ? 'bg-blue-50 text-blue-600 rounded-lg' : 'text-gray-500 hover:bg-gray-100',
      segmented: isActive ? 'text-black dark:text-white' : 'text-gray-500',
      contained: isActive ? 'bg-white dark:bg-gray-800 text-blue-600 shadow-sm' : 'text-gray-500',
      ghost: isActive ? 'bg-blue-50 text-blue-600 rounded-full' : 'text-gray-500',
      enclosed: isActive ? 'bg-white dark:bg-gray-800 border border-b-white rounded-t-lg' : 'text-gray-500',
    };
    return `${base} ${styles[variant] || ''} ${sizeStyles[size]} ${cursor}`;
  };

  return (
    <div className={className}>
      <div className={getContainerClasses()} role="tablist">
        <LayoutGroup id={layoutId}>
          {items.map((item) => {
            const isActive = activeTab === item.id;
            const isDisabled = !!item.disabled || disabledTabs.includes(item.id);
            
            return (
              <button
                key={item.id}
                onClick={() => !isDisabled && setActiveTab(item.id)}
                disabled={isDisabled}
                className={getTabClasses(isActive, isDisabled)}
              >
                {isActive && showIndicator && (
                  <motion.div
                    layoutId={`indicator-${layoutId}`}
                    className={
                      variant === 'pills' || variant === 'segmented' || variant === 'contained'
                      ? 'absolute inset-0 bg-blue-600 dark:bg-blue-500 rounded-md -z-10' 
                      : 'absolute bottom-0 inset-x-0 bg-blue-600'
                    }
                    style={{ 
                      backgroundColor: indicatorColor,
                      height: (variant === 'underline' || variant === 'line' || variant === 'ghost') ? (indicatorThickness || 2) : undefined
                    }}
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {item.icon}
                  <div className="flex flex-col items-start leading-tight">
                    <span>{item.label}</span>
                    {variant === 'vertical' && item.description && (
                      <span className="text-[10px] opacity-60">{item.description}</span>
                    )}
                  </div>
                  {item.badge && (
                    <span className="px-1.5 py-0.5 text-[10px] rounded-full bg-blue-100 text-blue-800">
                      {item.badge}
                    </span>
                  )}
                </span>
              </button>
            );
          })}
        </LayoutGroup>
      </div>
      <div className="mt-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={animation === 'slide' ? { opacity: 0, x: 10 } : { opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
            exit={animation === 'slide' ? { opacity: 0, x: -10 } : { opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            {items.find(i => i.id === activeTab)?.content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
