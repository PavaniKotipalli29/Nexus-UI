import React, { useState, useEffect, useRef } from 'react';
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
      <div className={`relative w-full ${sizeClasses[size]} bg-white dark:bg-neutral-900 rounded-xl shadow-2xl border border-neutral-200 dark:border-neutral-800 flex flex-col max-h-[90vh] ${className}`}>
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
        className={`absolute bg-white dark:bg-neutral-900 shadow-2xl transition-transform duration-300 transform border-neutral-200 dark:border-neutral-800 flex flex-col ${placementClasses[placement]} ${!isVertical ? sizeClasses[size] : 'w-full'} ${className}`}
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
        <div className={`absolute z-40 px-3 py-1.5 text-xs font-medium text-white bg-neutral-900 rounded shadow-lg whitespace-nowrap pointer-events-none animate-in fade-in zoom-in-95 duration-200 ${positionClasses[position]} ${className}`}>
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
        <div className={`absolute z-30 w-64 bg-white dark:bg-neutral-900 p-4 rounded-lg shadow-xl border border-neutral-200 dark:border-neutral-800 animate-in fade-in zoom-in-95 duration-200 ${positionClasses[position]} ${className}`}>
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
    <div className={`w-full ${className}`}>
      <div className={`flex gap-4 overflow-x-auto ${variant === 'line' ? 'border-b border-neutral-200 dark:border-neutral-800' : ''} ${variant === 'pills' ? 'gap-2' : ''}`}>
        {items.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              data-state={isActive ? 'active' : 'inactive'}
              className={`group px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap ${getVariantClasses(isActive)}`}
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
    <div className={`space-y-4 ${className}`}>
      {items.map((item) => (
        <div key={item.id} className="border border-neutral-200 dark:border-neutral-800 rounded-lg overflow-hidden bg-white dark:bg-neutral-900">
          <button
            onClick={() => toggleItem(item.id)}
            className="w-full flex items-center justify-between p-4 text-left font-medium text-neutral-900 dark:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors"
          >
            {item.title}
             <div className={`transform transition-transform duration-200 ${openItems.includes(item.id) ? 'rotate-180' : ''}`}>
               <Icon size="sm"><path d="M19 9l-7 7-7-7" /></Icon>
             </div>
          </button>
          <div 
            className={`overflow-hidden transition-all duration-300 ease-in-out ${openItems.includes(item.id) ? 'max-h-96' : 'max-h-0'}`}
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
        <div className={`absolute z-50 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 ring-1 ring-black ring-opacity-5 animate-in fade-in zoom-in-95 duration-100 origin-top-${align} ${align === 'right' ? 'right-0' : 'left-0'} ${className}`}>
          <div className="py-1" role="menu">
            {items.map((item, index) => (
              <button
                key={index}
                onClick={(e) => {
                  item.onClick?.();
                  if (item.href) window.location.hash = item.href;
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2 text-sm flex items-center gap-2 ${item.danger ? 'text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20' : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'}`}
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
    <div className={`p-4 rounded-lg border flex items-start gap-4 ${variants[variant]} ${className}`}>
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
    <div className={`fixed bottom-4 right-4 z-50 animate-in slide-in-from-bottom-5 duration-300 ${className}`}>
      <div className={`flex items-start gap-4 p-4 rounded-lg shadow-2xl ${variants[variant]} min-w-[300px]`}>
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
    <div className={`w-full overflow-x-auto border border-neutral-200 dark:border-neutral-800 rounded-lg ${className}`}>
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
    <div className={`flex items-center gap-2 ${className}`}>
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
          className={`w-8 h-8 flex items-center justify-center rounded-md text-sm font-medium transition ${
            currentPage === page
              ? 'bg-primary-600 text-white'
              : 'hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400'
          }`}
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
    <div className={`flex flex-col items-center justify-center text-center p-12 bg-neutral-50 dark:bg-neutral-900/50 border-2 border-dashed border-neutral-200 dark:border-neutral-800 rounded-xl ${className}`}>
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
    <div className={`w-full bg-primary-600 text-white px-4 py-3 ${className}`}>
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
