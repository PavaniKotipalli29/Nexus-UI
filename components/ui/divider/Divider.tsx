import React from 'react';
import { DividerProps } from '../../../types';
// @ts-ignore
import styles from './Divider.module.css';


export const Divider = React.forwardRef<HTMLDivElement, DividerProps>(({
  className = '',
  variant = 'solid',
  orientation = 'horizontal',
  thickness = '1px',
  color,
  label,
  labelPosition = 'center',
  labelBackground,
  style,
  ...props
}, ref) => {
  // Construct dynamic styles for container
  const dynamicStyles: React.CSSProperties = {
    ...style,
    ['--divider-thickness' as any]: typeof thickness === 'number' ? `${thickness}px` : thickness,
    ['--divider-color' as any]: color,
  };

  if (color) {
     dynamicStyles.color = color;
  }

  // Determine line style based on variant and orientation
  const getLineStyle = () => {
    // Zigzag and some patterns need more height to be visible by default
    let appliedThickness = thickness;
    
    if (variant === 'zigzag' && (thickness === '1px' || (typeof thickness === 'number' && thickness === 1))) {
        appliedThickness = '12px';
    } else if ((variant === 'dashed' || variant === 'dotted') && (thickness === '1px' || (typeof thickness === 'number' && thickness === 1))) {
        // Dotted/Dashed look better slightly thicker
        appliedThickness = '2px';
    }

    return {
      '--divider-thickness': typeof appliedThickness === 'number' ? `${appliedThickness}px` : appliedThickness
    } as any;
  };

  const lineStyle = getLineStyle();

  // Helper to render line element
  const renderLine = () => (
    <div 
      className={styles.line} 
      style={lineStyle} 
    />
  );

  const renderContent = () => {
    if (!label) {
      return renderLine();
    }

    if (orientation === 'vertical') {
       // Vertical with label
       return (
        <>
          {renderLine()}
          <span className={styles.label} style={{ background: labelBackground }}>{label}</span>
          {renderLine()}
        </>
      );
    }

    // Horizontal with label
    if (labelPosition === 'left') {
      return (
        <>
          <span className={`${styles.label} ${styles.labelLeft}`} style={{ background: labelBackground }}>{label}</span>
          {renderLine()}
        </>
      );
    }

    if (labelPosition === 'right') {
      return (
        <>
          {renderLine()}
          <span className={`${styles.label} ${styles.labelRight}`} style={{ background: labelBackground }}>{label}</span>
        </>
      );
    }

    // Center
    return (
      <>
        {renderLine()}
        <span className={styles.label} style={{ background: labelBackground }}>{label}</span>
        {renderLine()}
      </>
    );
  };

  // Safe class mapping
  const orientationClass = (styles[orientation] || styles.horizontal || '');
  const variantClass = (styles[variant] || styles.solid || '');

  return (
    <div
      ref={ref}
      role="separator"
      aria-orientation={orientation}
      className={`
        ${styles.divider}
        ${orientationClass}
        ${variantClass}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
      style={dynamicStyles}
      {...props}
    >
      {renderContent()}
    </div>
  );
});

Divider.displayName = 'Divider';
