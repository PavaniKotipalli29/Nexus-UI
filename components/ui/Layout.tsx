
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
      className={`bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-md shadow-sm ${paddings[padding]} ${interactiveStyle} ${className}`}
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
    <div className={`flex ${directions[direction]} ${gap} ${aligns[align]} ${justifies[justify]} ${className}`}>
      {children}
    </div>
  );
};
