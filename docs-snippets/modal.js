import React, { useState, useEffect, useRef } from 'react';

/**
 * NexusUI Standalone Modal Component
 * A professional dialog component with focus management and hardware acceleration.
 * Features: 8 variants (Drawer, Fullscreen, Centered), ARIA compliance, and scroll locking.
 * Requirements: Plain React (JS), No external deps.
 */
const Modal = ({
  open = false,
  defaultOpen = false,
  onOpenChange,
  variant = 'default',
  size = 'md',
  title = '',
  description = '',
  closeOnOverlayClick = true,
  closeOnEscape = true,
  showCloseButton = true,
  preventScroll = true,
  overlayBlur = true,
  persistent = false,
  footer = null,
  children,
  className = '',
  ...props
}) => {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isOpen = onOpenChange ? open : internalOpen;
  const modalRef = useRef(null);
  const previousActiveElement = useRef(null);

  const handleClose = () => {
    if (persistent) return;
    if (onOpenChange) onOpenChange(false);
    else setInternalOpen(false);
  };

  // Scroll Locking & Focus Management
  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement;
      if (preventScroll) {
        document.body.style.overflow = 'hidden';
      }
      // Simple focus trap
      const focusable = modalRef.current?.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (focusable?.length) focusable[0].focus();
    } else {
      if (preventScroll) {
        document.body.style.overflow = '';
      }
      if (previousActiveElement.current) previousActiveElement.current.focus();
    }

    const handleEsc = (e) => {
      if (closeOnEscape && e.key === 'Escape' && isOpen) handleClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, preventScroll, closeOnEscape]);

  if (!isOpen) return null;

  const containerClasses = [
    'nx-modal-root',
    `nx-modal--${variant}`,
    `nx-modal-size--${size}`,
    overlayBlur ? 'nx-modal--blur' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={containerClasses} {...props}>
      <style>{`
        .nx-modal-root {
          position: fixed;
          inset: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }

        .nx-modal-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          animation: nx-fade-in 0.2s ease-out;
        }
        .nx-modal--blur .nx-modal-overlay {
           backdrop-filter: blur(4px);
           -webkit-backdrop-filter: blur(4px);
        }

        .nx-modal-content {
          position: relative;
          background: #ffffff;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          max-width: calc(100vw - 40px);
          max-height: calc(100vh - 40px);
          display: flex;
          flex-direction: column;
          animation: nx-modal-zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          border-radius: 16px;
          z-index: 1001;
        }

        /* Variants */
        .nx-modal--centered .nx-modal-content { border-radius: 20px; }
        .nx-modal--minimal .nx-modal-content { border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
        .nx-modal--glass .nx-modal-content { 
          background: rgba(255, 255, 255, 0.8); 
          backdrop-filter: blur(20px); 
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        
        .nx-modal--fullscreen .nx-modal-content {
          width: 100vw;
          height: 100vh;
          max-width: none;
          max-height: none;
          border-radius: 0;
          animation: nx-fade-in 0.3s ease;
        }

        .nx-modal--drawer .nx-modal-content {
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          height: 100vh;
          border-radius: 0;
          max-height: none;
          width: 400px;
          animation: nx-slide-in-right 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nx-modal--alert .nx-modal-content { border-top: 5px solid #ef4444; max-width: 400px; }

        /* Sizes */
        .nx-modal-size--xs .nx-modal-content:not(.nx-modal--fullscreen):not(.nx-modal--drawer) { width: 320px; }
        .nx-modal-size--sm .nx-modal-content:not(.nx-modal--fullscreen):not(.nx-modal--drawer) { width: 440px; }
        .nx-modal-size--md .nx-modal-content:not(.nx-modal--fullscreen):not(.nx-modal--drawer) { width: 600px; }
        .nx-modal-size--lg .nx-modal-content:not(.nx-modal--fullscreen):not(.nx-modal--drawer) { width: 800px; }
        .nx-modal-size--xl .nx-modal-content:not(.nx-modal--fullscreen):not(.nx-modal--drawer) { width: 1140px; }

        .nx-modal-header {
          padding: 24px;
          border-bottom: 1px solid #f1f5f9;
          position: relative;
        }
        .nx-modal-title { margin: 0; font-size: 18px; font-weight: 700; color: #1e293b; }
        .nx-modal-desc { margin: 4px 0 0; font-size: 14px; color: #64748b; }

        .nx-modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: #f8fafc;
          border: none;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #64748b;
          transition: all 0.2s;
        }
        .nx-modal-close:hover { background: #f1f5f9; color: #0f172a; transform: rotate(90deg); }

        .nx-modal-body {
          padding: 24px;
          overflow-y: auto;
          flex: 1;
        }

        .nx-modal-footer {
          padding: 16px 24px;
          background: #f8fafc;
          border-top: 1px solid #f1f5f9;
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          border-radius: 0 0 16px 16px;
        }

        @keyframes nx-fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes nx-modal-zoom { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
        @keyframes nx-slide-in-right { from { transform: translateX(100%); } to { transform: translateX(0); } }
      `}</style>

      <div className="nx-modal-overlay" onClick={closeOnOverlayClick ? handleClose : undefined} />
      
      <div 
        ref={modalRef}
        className="nx-modal-content" 
        role="dialog" 
        aria-modal="true" 
        aria-labelledby="nx-modal-title"
      >
        {(title || showCloseButton) && (
          <div className="nx-modal-header">
            {title && <h2 id="nx-modal-title" className="nx-modal-title">{title}</h2>}
            {description && <p className="nx-modal-desc">{description}</p>}
            {showCloseButton && (
              <button className="nx-modal-close" onClick={handleClose} aria-label="Close modal">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        )}

        <div className="nx-modal-body">
          {children}
        </div>

        {footer && (
          <div className="nx-modal-footer">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
