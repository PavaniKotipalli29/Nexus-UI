import React from 'react';
import { BaseProps, SpinnerProps, SkeletonProps, ProgressBarProps } from '../../types';



export const Spinner: React.FC<SpinnerProps> = ({
  size = 'md',
  color = 'primary',
  className = ''
}) => {
  const sizes = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-3',
    lg: 'w-12 h-12 border-4',
    xl: 'w-16 h-16 border-4'
  };

  const colors = {
    current: 'border-current',
    primary: 'border-primary-600 text-primary-200',
    white: 'border-white text-white/30',
    neutral: 'border-neutral-600 text-neutral-200'
  };

  return (
    <div 
      className={`animate-spin rounded-full border-t-transparent ${sizes[size]} ${colors[color]} ${className}`} 
      role="status"
    >
      <span className="sr-only">Loading...</span>
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
      className={`animate-pulse bg-neutral-200 dark:bg-neutral-800 ${variants[variant]} ${className}`} 
      style={styles}
    />
  );
};

export * from './progress/ProgressBar';
