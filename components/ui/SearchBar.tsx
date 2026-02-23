import React, { useState } from 'react';
import { SearchBarProps } from '../../types';

/**
 * SearchBar - A premium standalone component
 * Features: 12+ variants, 3 shapes, 3 sizes, interactive logic
 * Requirements: Plain React (adapted for TSX in this repo), Scoped CSS, No external deps
 */
const SearchBar: React.FC<SearchBarProps> = ({
  variant = 'default',
  shape,
  size = 'md',
  placeholder = 'Search...',
  value,
  onChange,
  fullWidth = false,
  disabled = false,
  loading = false,
  showClear = true,
  iconPosition = 'left',
  className = '',
  ...props
}) => {
  const [internalValue, setInternalValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  // Controlled vs Uncontrolled logic
  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) {
      setInternalValue(e.target.value);
    }
    if (onChange) {
      onChange(e as any);
    }
  };

  const handleClear = () => {
    const e = { target: { value: '' } };
    if (!isControlled) {
      setInternalValue('');
    }
    if (onChange) {
      onChange(e as any);
    }
  };

  const containerClasses = [
    'nx-search',
    `nx-search--${variant}`,
    `nx-search--${size}`,
    `nx-search--icon-${iconPosition}`,
    shape ? `nx-search--${shape}` : '',
    fullWidth ? 'nx-search--full-width' : '',
    disabled ? 'nx-search--disabled' : '',
    isFocused ? 'nx-search--focused' : '',
    loading ? 'nx-search--loading' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <React.Fragment>
      <style>{`
        :root {
          --nx-primary: #3b82f6;
          --nx-primary-hover: #2563eb;
          --nx-bg: #ffffff;
          --nx-text: #1f2937;
          --nx-text-muted: #6b7280;
          --nx-border: #e5e7eb;
          --nx-ring: rgba(59, 130, 246, 0.2);
          --nx-transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nx-search {
          display: inline-flex;
          align-items: center;
          position: relative;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          box-sizing: border-box;
          transition: var(--nx-transition);
          background: var(--nx-bg);
          color: var(--nx-text);
          min-width: 200px;
        }

        .nx-search * { box-sizing: border-box; }
        .nx-search--full-width { display: flex; width: 100%; }

        /* Sizes */
        .nx-search--sm { height: 32px; font-size: 13px; border-radius: 6px; }
        .nx-search--md { height: 42px; font-size: 14px; border-radius: 8px; }
        .nx-search--lg { height: 52px; font-size: 16px; border-radius: 12px; }

        /* Input Styles */
        .nx-search-input {
          flex: 1;
          border: none;
          background: transparent;
          color: inherit;
          font-size: inherit;
          padding: 0 12px;
          height: 100%;
          outline: none;
          width: 100%;
        }
        .nx-search-input:disabled { cursor: not-allowed; opacity: 0.6; }

        /* Icon Container */
        .nx-search-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--nx-text-muted);
          pointer-events: none;
          transition: var(--nx-transition);
        }
        .nx-search--md .nx-search-icon { width: 42px; }
        .nx-search--sm .nx-search-icon { width: 32px; }
        .nx-search--lg .nx-search-icon { width: 52px; }

        .nx-search--icon-right { flex-direction: row-reverse; }

        /* Variant: Default */
        .nx-search--default { border: 1px solid var(--nx-border); }
        .nx-search--default.nx-search--focused { border-color: var(--nx-primary); box-shadow: 0 0 0 4px var(--nx-ring); }

        /* Variant: Outline */
        .nx-search--outline { border: 1.5px solid var(--nx-border); background: transparent; }
        .nx-search--outline.nx-search--focused { border-color: var(--nx-primary); }

        /* Variant: Filled */
        .nx-search--filled { background: #f3f4f6; border: 1px solid transparent; }
        .nx-search--filled.nx-search--focused { background: var(--nx-bg); border-color: var(--nx-primary); }

        /* Variant: Ghost */
        .nx-search--ghost { background: transparent; border: 1px solid transparent; }
        .nx-search--ghost:hover { background: #f9fafb; }
        .nx-search--ghost.nx-search--focused { background: var(--nx-bg); border-color: var(--nx-border); }

        /* Variant: Underline */
        .nx-search--underline { border-bottom: 2px solid var(--nx-border); border-radius: 0; background: transparent; }
        .nx-search--underline.nx-search--focused { border-bottom-color: var(--nx-primary); }

        /* Variant: Minimal */
        .nx-search--minimal { background: transparent; border: none; box-shadow: none; }
        .nx-search--minimal .nx-search-input { padding-left: 0; }

        /* Variant: Elevated */
        .nx-search--elevated { border: none; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06); }
        .nx-search--elevated.nx-search--focused { box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); }

        /* Variant: Soft */
        .nx-search--soft { background: #eff6ff; border: none; color: #1e40af; }
        .nx-search--soft .nx-search-icon, .nx-search--soft .nx-search-input { color: #1e40af; }

        /* Shapes */
        .nx-search--pill { border-radius: 9999px; }
        .nx-search--square { border-radius: 0; }
        .nx-search--rounded { border-radius: 8px; }

        /* Modern UI: Glass */
        .nx-search--glass {
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.07);
        }

        /* Modern UI: Neumorphic */
        .nx-search--neumorphic {
          background: #e0e5ec;
          border: none;
          box-shadow: 9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255,0.5);
        }
        .nx-search--neumorphic.nx-search--focused {
          box-shadow: inset 6px 6px 12px #bec8d4, inset -6px -6px 12px rgba(255,255,255,0.8);
        }

        /* Modern UI: Gradient */
        .nx-search--gradient {
          background: var(--nx-bg);
          padding: 2px;
          background-clip: padding-box;
          border: 2px solid transparent;
          position: relative;
        }
        .nx-search--gradient::before {
          content: "";
          position: absolute;
          top: -2px; bottom: -2px; left: -2px; right: -2px;
          background: linear-gradient(45deg, #f06, #4a90e2, #9b51e0);
          border-radius: inherit;
          z-index: -1;
          transition: var(--nx-transition);
          opacity: 0.7;
        }
        .nx-search--gradient.nx-search--focused::before { opacity: 1; }

        /* Modern UI: Dark */
        .nx-search--dark {
          background: #111827;
          color: #f9fafb;
          border: 1px solid #374151;
        }
        .nx-search--dark .nx-search-input::placeholder { color: #6b7280; }
        .nx-search--dark .nx-search-icon { color: #9ca3af; }
        .nx-search--dark.nx-search--focused { border-color: #60a5fa; box-shadow: 0 0 0 4px rgba(96, 165, 250, 0.2); }

        /* Utilities */
        .nx-search-clear {
          background: none;
          border: none;
          padding: 0;
          margin-right: 10px;
          cursor: pointer;
          color: var(--nx-text-muted);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.6;
          transition: var(--nx-transition);
        }
        .nx-search-clear:hover { opacity: 1; color: var(--nx-text); }

        .nx-search-loading { margin-right: 12px; display: flex; align-items: center; }
        .nx-search-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(0,0,0,0.1);
          border-top-color: var(--nx-primary);
          border-radius: 50%;
          animation: nx-spin 0.6s linear infinite;
        }
        .nx-search--dark .nx-search-spinner { border-color: rgba(255,255,255,0.1); border-top-color: #60a5fa; }

        @keyframes nx-spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
      <div className={containerClasses}>
        <div className="nx-search-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>

        <input
          className="nx-search-input"
          placeholder={placeholder}
          value={currentValue}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          disabled={disabled}
          aria-label="Search"
          {...props}
        />

        {loading && (
          <div className="nx-search-loading">
            <div className="nx-search-spinner"></div>
          </div>
        )}

        {showClear && currentValue && !loading && !disabled && (
          <button className="nx-search-clear" onClick={handleClear} type="button" aria-label="Clear search">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        )}
      </div>
    </React.Fragment>
  );
};

export default SearchBar;
