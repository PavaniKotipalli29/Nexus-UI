import React, { useState } from 'react';

/**
 * NexusUI Standalone Card Component
 * A production-grade, dependency-free Card component.
 * Features: 8+ variants, 4 layouts, interactive states, and modern SaaS styling.
 * Requirements: Plain React (JS), No Tailwind, No Framer Motion.
 */
const Card = ({
  variant = 'default',
  layout = 'vertical',
  size = 'md',
  hoverable = false,
  clickable = false,
  selectable = false,
  selected = false,
  loading = false,
  disabled = false,
  expandable = false,
  defaultExpanded = false,
  badge = null,
  status = null,
  media = null,
  header = null,
  footer = null,
  children,
  onClick,
  onSelect,
  className = '',
  ...props
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const handleClick = (e) => {
    if (disabled || loading) return;
    if (clickable && onClick) onClick(e);
    if (selectable && onSelect) onSelect(!selected);
  };

  const containerClasses = [
    'nx-card',
    `nx-card--${variant}`,
    `nx-card--${layout}`,
    `nx-card--${size}`,
    hoverable ? 'nx-card--hoverable' : '',
    clickable ? 'nx-card--clickable' : '',
    selectable ? 'nx-card--selectable' : '',
    selected ? 'nx-card--selected' : '',
    loading ? 'nx-card--loading' : '',
    disabled ? 'nx-card--disabled' : '',
    isExpanded ? 'nx-card--expanded' : '',
    status ? `nx-card--status-${status}` : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={containerClasses} onClick={handleClick} {...props}>
      <style>{`
        :root {
          --nx-card-bg: #ffffff;
          --nx-card-border: #e2e8f0;
          --nx-card-text: #1e293b;
          --nx-card-text-muted: #64748b;
          --nx-card-radius: 12px;
          --nx-card-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
          --nx-card-primary: #3b82f6;
          --nx-card-transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nx-card {
          position: relative;
          display: flex;
          background: var(--nx-card-bg);
          border: 1px solid var(--nx-card-border);
          border-radius: var(--nx-card-radius);
          box-shadow: var(--nx-card-shadow);
          color: var(--nx-card-text);
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          overflow: hidden;
          transition: var(--nx-card-transition);
          box-sizing: border-box;
          text-align: left;
        }

        .nx-card * { box-sizing: border-box; }

        /* Layouts */
        .nx-card--vertical { flex-direction: column; }
        .nx-card--horizontal { flex-direction: row; }
        .nx-card--media-left { flex-direction: row; }
        .nx-card--media-top { flex-direction: column; }

        /* Sizes */
        .nx-card--sm { --nx-card-padding: 12px; font-size: 13px; }
        .nx-card--md { --nx-card-padding: 20px; font-size: 14px; }
        .nx-card--lg { --nx-card-padding: 28px; font-size: 16px; }
        .nx-card--xl { --nx-card-padding: 36px; font-size: 18px; }

        /* Variants */
        .nx-card--outlined { box-shadow: none; }
        .nx-card--elevated { 
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
          border: none;
        }
        .nx-card--glass {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        .nx-card--gradient {
          background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
          border: 1px solid var(--nx-card-border);
        }
        .nx-card--minimal {
          border: none;
          box-shadow: none;
          background: transparent;
        }
        .nx-card--dashboard {
          background: #f8fafc;
          border-left: 4px solid var(--nx-card-primary);
        }
        .nx-card--feature {
          text-align: center;
          align-items: center;
        }

        /* Interaction States */
        .nx-card--hoverable:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
        }
        .nx-card--clickable { cursor: pointer; }
        .nx-card--clickable:active { transform: scale(0.98); }
        
        .nx-card--selectable { cursor: pointer; border-width: 2px; transition: border-color 0.2s; }
        .nx-card--selected { border-color: var(--nx-card-primary); background: #eff6ff; }
        
        .nx-card--disabled { opacity: 0.6; cursor: not-allowed; pointer-events: none; }
        
        /* Status Borders */
        .nx-card--status-success { border-top: 4px solid #10b981; }
        .nx-card--status-warning { border-top: 4px solid #f59e0b; }
        .nx-card--status-error { border-top: 4px solid #ef4444; }
        .nx-card--status-info { border-top: 4px solid #3b82f6; }

        /* Inner Sections */
        .nx-card-media {
          flex-shrink: 0;
          background: #f1f5f9;
        }
        .nx-card--horizontal .nx-card-media, 
        .nx-card--media-left .nx-card-media { width: 40%; }
        
        .nx-card-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .nx-card-main {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .nx-card-header {
          padding: var(--nx-card-padding);
          border-bottom: 1px solid var(--nx-card-border);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .nx-card--minimal .nx-card-header { border: none; padding-bottom: 0; }

        .nx-card-body {
          padding: var(--nx-card-padding);
          flex: 1;
        }

        .nx-card-footer {
          padding: var(--nx-card-padding);
          border-top: 1px solid var(--nx-card-border);
          background: rgba(0, 0, 0, 0.02);
        }
        .nx-card--minimal .nx-card-footer { border: none; background: transparent; }

        /* Badge and status */
        .nx-card-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          background: var(--nx-card-primary);
          color: white;
          padding: 2px 8px;
          border-radius: 99px;
          font-size: 10px;
          font-weight: bold;
          text-transform: uppercase;
          z-index: 10;
        }

        /* Expandable */
        .nx-card-expand-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease-out;
        }
        .nx-card--expanded .nx-card-expand-content {
          max-height: 500px;
        }
        
        .nx-card-expand-btn {
          background: none;
          border: none;
          cursor: pointer;
          color: var(--nx-card-text-muted);
          padding: 4px;
          display: flex;
          transition: transform 0.2s;
        }
        .nx-card--expanded .nx-card-expand-btn { transform: rotate(180deg); }

        /* Loading Overlay */
        .nx-card-loading-overlay {
          position: absolute;
          inset: 0;
          background: rgba(255, 255, 255, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 20;
        }
        .nx-card-spinner {
          width: 24px;
          height: 24px;
          border: 2px solid rgba(0,0,0,0.1);
          border-top-color: var(--nx-card-primary);
          border-radius: 50%;
          animation: nx-spin 0.8s linear infinite;
        }
        @keyframes nx-spin { to { transform: rotate(360deg); } }
      `}</style>

      {badge && <div className="nx-card-badge">{badge}</div>}
      
      {loading && (
        <div className="nx-card-loading-overlay">
          <div className="nx-card-spinner"></div>
        </div>
      )}

      {media && (layout === 'media-top' || layout === 'media-left' || layout === 'horizontal') && (
        <div className="nx-card-media">{media}</div>
      )}

      <div className="nx-card-main">
        {(header || expandable) && (
          <div className="nx-card-header">
            <div style={{ flex: 1 }}>{header}</div>
            {expandable && (
              <button 
                className="nx-card-expand-btn" 
                onClick={(e) => { e.stopPropagation(); setIsExpanded(!isExpanded); }}
                type="button"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
            )}
          </div>
        )}

        <div className="nx-card-body">
          {children}
          {expandable && (
            <div className="nx-card-expand-content">
              <div style={{ paddingTop: '16px', borderTop: '1px dashed #e2e8f0' }}>
                <p style={{ margin: 0, opacity: 0.8 }}>Additional hidden information...</p>
              </div>
            </div>
          )}
        </div>

        {footer && <div className="nx-card-footer">{footer}</div>}
      </div>

      {media && layout === 'vertical' && (
         <div className="nx-card-media">{media}</div>
      )}
    </div>
  );
};

export default Card;
