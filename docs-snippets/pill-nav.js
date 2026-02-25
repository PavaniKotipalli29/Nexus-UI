import React, { useState, useRef, useEffect } from 'react';

/**
 * PillNav Component (Standalone)
 * A fluid navigation component with an animated active indicator.
 * Features: Horizontal/Vertical orientations, smooth transitions, custom themes.
 * Requirements: Plain React, No Tailwind, No Framer Motion.
 */
const PillNav = ({
  items = [],
  defaultValue,
  value,
  onValueChange,
  orientation = 'horizontal',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const [internalValue, setInternalValue] = useState(defaultValue || (items[0]?.id));
  const activeValue = value !== undefined ? value : internalValue;
  
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const containerRef = useRef(null);
  const itemRefs = useRef({});

  const updateIndicator = () => {
    const activeItem = itemRefs.current[activeValue];
    if (activeItem && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const itemRect = activeItem.getBoundingClientRect();
      
      setIndicatorStyle({
        width: `${itemRect.width}px`,
        height: `${itemRect.height}px`,
        transform: `translate(${itemRect.left - containerRect.left}px, ${itemRect.top - containerRect.top}px)`,
        opacity: 1
      });
    }
  };

  useEffect(() => {
    updateIndicator();
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [activeValue]);

  const handleSelect = (id) => {
    if (value === undefined) setInternalValue(id);
    if (onValueChange) onValueChange(id);
  };

  return (
    <div
      ref={containerRef}
      className={`nx-pill-nav ${className}`}
      style={{
        display: 'inline-flex',
        flexDirection: orientation === 'vertical' ? 'column' : 'row',
        width: fullWidth ? '100%' : 'auto',
        position: 'relative',
        padding: '4px',
        backgroundColor: '#f3f4f6',
        borderRadius: '12px',
        userSelect: 'none'
      }}
      {...props}
    >
      <style>{`
        .nx-pill-nav-indicator {
          position: absolute;
          top: 0;
          left: 0;
          background: #ffffff;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          border-radius: 8px;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), width 0.3s, height 0.3s;
          pointer-events: none;
          z-index: 1;
        }

        .nx-pill-nav-item {
          position: relative;
          z-index: 2;
          padding: 8px 16px;
          font-size: 14px;
          font-weight: 500;
          color: #6b7280;
          cursor: pointer;
          border-radius: 8px;
          transition: color 0.2s ease;
          border: none;
          background: none;
          flex: 1;
          white-space: nowrap;
          outline: none;
        }

        .nx-pill-nav-item--active {
          color: #111827;
        }

        .nx-pill-nav-item:hover:not(.nx-pill-nav-item--active) {
          color: #374151;
        }
      `}</style>

      <div className="nx-pill-nav-indicator" style={indicatorStyle} />
      
      {items.map((item) => (
        <button
          key={item.id}
          ref={(el) => (itemRefs.current[item.id] = el)}
          className={`nx-pill-nav-item ${activeValue === item.id ? 'nx-pill-nav-item--active' : ''}`}
          onClick={() => handleSelect(item.id)}
          type="button"
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default PillNav;
