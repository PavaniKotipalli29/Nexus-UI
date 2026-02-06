import React, { forwardRef } from 'react';
import styles from './ProgressBar.module.css';
import { ProgressBarProps } from '../../../types';

export const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(({
  value = 0,
  max = 100,
  variant = 'default',
  size = 'md',
  showLabel = false,
  indeterminate = false,
  label,
  className = '',
  ...props
}, ref) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div className={`${styles.container} ${className}`} ref={ref} {...props}>
      {(showLabel || label) && (
        <div className={styles.labelContainer}>
          {label && <span className={styles.label}>{label}</span>}
          {showLabel && !indeterminate && (
            <span className={styles.value}>{Math.round(percentage)}%</span>
          )}
        </div>
      )}
      <div 
        className={`${styles.progressBar} ${styles[size]} ${styles[variant]} ${indeterminate ? styles.indeterminate : ''}`}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={indeterminate ? undefined : value}
      >
        <div 
          className={styles.indicator} 
          style={{ width: indeterminate ? '50%' : `${percentage}%` }} // Width doesn't matter much for indeterminate animation but keeps it visible
        />
      </div>
    </div>
  );
});

ProgressBar.displayName = 'ProgressBar';
