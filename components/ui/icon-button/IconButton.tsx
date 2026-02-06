import React, { forwardRef } from 'react';
import styles from './IconButton.module.css';
import { IconButtonProps } from '../../../types';
import { Tooltip } from '../Composite';

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(({
  icon,
  'aria-label': ariaLabel,
  onClick,
  className = '',
  variant = 'solid',
  size = 'md',
  disabled = false,
  isLoading = false,
  tooltip,
  type = 'button',
  ...props
}, ref) => {
  
  const buttonContent = (
    <button
      ref={ref}
      type={type}
      className={`
        ${styles.iconButton} 
        ${styles[size]} 
        ${styles[variant]} 
        ${disabled ? styles.disabled : ''} 
        ${isLoading ? styles.loading : ''} 
        ${className}
      `}
      onClick={!disabled && !isLoading ? onClick : undefined}
      disabled={disabled || isLoading}
      aria-label={ariaLabel}
      aria-disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className={styles.spinner}>
          <svg className={styles.spinnerSvg} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </span>
      ) : icon}
    </button>
  );

  if (tooltip && !disabled) {
    return (
      <Tooltip content={tooltip}>
        {buttonContent}
      </Tooltip>
    );
  }

  return buttonContent;
});

IconButton.displayName = 'IconButton';
