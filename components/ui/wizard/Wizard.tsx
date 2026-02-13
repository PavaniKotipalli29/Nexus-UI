import React from 'react';
import { Button } from '../Primitives';
import styles from './Wizard.module.css';
import { WizardProps, WizardStep } from '../../../types';

export const Wizard: React.FC<WizardProps> = ({
  steps,
  currentStep = 0,
  orientation = 'horizontal',
  variant = 'default',
  size = 'md',
  color = 'primary',
  onStepClick,
  onStepChange,
  showIcons = true,
  allowStepClick = false,
  animated = true,
  className = '',
  showNavigation = false,
  onNext,
  onBack,
  nextLabel,
  backLabel,
  // ...other props
}) => {
  // Internal state for controlled/uncontrolled behavior if needed, 
  // but usually Wizard is controlled by parent via currentStep.
  // We'll trust currentStep from props for the visual state.

  const isVertical = orientation === 'vertical';

  const handleStepClick = (index: number) => {
    if (allowStepClick && onStepClick) {
      onStepClick(index);
    }
    if (allowStepClick && onStepChange) {
        onStepChange(index);
    }
  };

  const getVariantClass = () => {
    switch (variant) {
      case 'modern':
      case 'modern-gradient': /* mapping for new prop value */
      case 'gradient': 
        return styles.modern;
      case 'minimal': 
      case 'minimal-clean':
        return styles.minimal;
      case 'filled':
        return styles.filled;
      case 'outline':
        return styles.outline;
      default: return '';
    }
  };

  const getSizeStyle = () => {
      // Inline styles for dynamic sizing if needed, currently handled by CSS vars or could be classes
      if (size === 'sm') return { '--wizard-step-size': '2rem', fontSize: '0.875rem' } as React.CSSProperties;
      if (size === 'lg') return { '--wizard-step-size': '3.5rem', fontSize: '1.125rem' } as React.CSSProperties;
      return {};
  };

  const getContainerClass = () => {
      // If the parent passed a "glass" variant, we wrap it or apply class
      if (variant === 'glass') return styles.glass;
      return '';
  };

  return (
    <div 
        className={`${styles.wizard} ${getVariantClass()} ${getContainerClass()} ${className}`}
        style={getSizeStyle()}
        data-color={color}
        role="tablist"
        aria-orientation={orientation}
    >
      <div className={`${styles.stepsContainer} ${isVertical ? styles.vertical : ''}`}>
        {steps.map((step, index) => {
          const isActive = index === currentStep;
          const isCompleted = index < currentStep;
          const isDisabled = step.status === 'disabled';
          const isError = step.status === 'error';

          let stepClass = `${styles.step}`;
          if (isActive) stepClass += ` ${styles.active}`;
          if (isCompleted) stepClass += ` ${styles.completed}`;
          if (isDisabled) stepClass += ` ${styles.disabled}`;
          if (isError) stepClass += ` ${styles.error}`;

          return (
            <React.Fragment key={step.id || index}>
              <div 
                className={stepClass}
                onClick={() => !isDisabled && handleStepClick(index)}
                role="tab"
                aria-selected={isActive}
                aria-disabled={isDisabled}
                tabIndex={isDisabled ? -1 : 0}
                onKeyDown={(e) => {
                    if ((e.key === 'Enter' || e.key === ' ') && !isDisabled) {
                        handleStepClick(index);
                    }
                }}
              >
                {/* Connector Line (Horizontal) - Rendered behind steps via absolute positioning usually, 
                    but here we might need to render it conditionally or as a separate element if using flex gap.
                    Current CSS implementation uses absolute positioning for the full line, and we need to fill it.
                */}
                
                {/* Step Circle */}
                <div className={styles.circle}>
                  {isCompleted ? (
                    <svg className={styles.checkmark} viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  ) : isError ? (
                     <span>!</span>
                  ) : (
                    step.icon && showIcons ? <span className={styles.icon}>{step.icon}</span> : (index + 1)
                  )}
                </div>

                {/* Step Content */}
                <div className={styles.content}>
                  <div className={styles.title}>{step.title}</div>
                  {step.description && (
                    <div className={styles.description}>{step.description}</div>
                  )}
                </div>

                {/* Vertical Connector Logic for Mobile/Vertical Layout */}
                {isVertical && index < steps.length - 1 && (
                    <div className={styles.verticalConnector}>
                        <div 
                            className={styles.verticalConnectorProgress}
                            style={{ height: isCompleted ? '100%' : '0%' }}
                        />
                    </div>
                )}
              </div>
              
              {/* Connector between steps (Horizontal) */}
              {!isVertical && index < steps.length - 1 && (
                   <div className={styles.connector}>
                       <div 
                         className={styles.connectorProgress} 
                         style={{ width: isCompleted ? '100%' : '0%' }}
                       />
                   </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
      {showNavigation && (
        <div className={styles.navigation}>
          <Button 
            variant="secondary" 
            onClick={onBack} 
            disabled={currentStep === 0}
            size={size}
          >
            {backLabel || 'Back'}
          </Button>
          <Button 
            variant="primary" 
            onClick={onNext} 
            disabled={currentStep === steps.length - 1}
            size={size}
          >
            {nextLabel || (currentStep === steps.length - 1 ? 'Finish' : 'Next')}
          </Button>
        </div>
      )}
    </div>
  );
};
