import React from 'react';
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
                className={`rounded-full bg-current ${size === 'xs' ? 'w-1 h-1' : size === 'sm' ? 'w-1.5 h-1.5' : 'w-2 h-2'} animate-bounce`} 
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>
        );
      case 'pulse':
        return <div className={`rounded-full bg-current animate-ping ${sizes[size]}`} />;
      case 'bars':
        return (
          <div className={`flex items-end gap-0.5 ${sizes[size]}`}>
            {[0, 1, 2, 3].map((i) => (
              <div 
                key={i}
                className={`bg-current flex-1 animate-pulse`} 
                style={{ height: '100%', animationDelay: `${i * 0.1}s`, animationDuration: '0.8s' }}
              />
            ))}
          </div>
        );
      case 'ring':
        return (
          <div className={`relative ${sizes[size]}`}>
            <div className={`absolute inset-0 rounded-full border-current opacity-20 ${thicknessMap[thickness]}`} />
            <div className={`absolute inset-0 rounded-full border-t-current animate-spin ${speedMap[speed]} ${thicknessMap[thickness]}`} />
          </div>
        );
      case 'gradient':
        return (
          <div 
            className={`rounded-full animate-spin ${speedMap[speed]} ${sizes[size]}`}
            style={{ 
              background: `conic-gradient(from 0deg, transparent, currentColor)`,
              WebkitMask: `radial-gradient(farthest-side, transparent calc(100% - 4.5px), black calc(100% - 4px))`
            }}
          />
        );
      case 'border':
      default:
        return (
          <div 
            className={`animate-spin rounded-full border-t-transparent border-current ${speedMap[speed]} ${sizes[size]} ${thicknessMap[thickness]}`} 
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
    <div className={`${containerClasses[placement]} ${className}`}>
      <div className={`flex flex-col items-center gap-3 ${colors[color]}`}>
        {renderSpinner()}
        {label && (
          <span className={`text-sm font-medium animate-pulse`}>
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
      className={`animate-pulse bg-neutral-200 dark:bg-neutral-800 ${variants[variant]} ${className}`} 
      style={styles}
    />
  );
};

export * from './progress/ProgressBar';
