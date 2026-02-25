import React, { useEffect, useState, useRef } from 'react';

/**
 * TargetCursor Component (Standalone)
 * A high-end reticle-style cursor that snaps to element boundaries.
 * Features: Precision center dot, corner brackets, element snapping.
 * Requirements: Plain React, No Framer Motion, No Tailwind.
 */
const TargetCursor = ({
  color = '#8B5CF6',
  padding = 8,
  className = '',
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [hoverType, setHoverType] = useState(null);

  // Smooth position state
  const [pos, setPos] = useState({ x: 0, y: 0, w: 24, h: 24, rotate: 0 });
  const targetPos = useRef({ x: 0, y: 0, w: 24, h: 24 });

  useEffect(() => {
    // Hide default cursor
    const style = document.createElement('style');
    style.innerHTML = `* { cursor: none !important; }`;
    document.head.appendChild(style);

    const handleMouseMove = (e) => {
      if (!isVisible) setIsVisible(true);

      const target = e.target.closest('[data-cursor-target="true"]');
      
      if (target) {
        const rect = target.getBoundingClientRect();
        targetPos.current = {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
          w: rect.width + padding * 2,
          h: rect.height + padding * 2
        };
        setIsHovering(true);
        setHoverType(target.getAttribute('data-cursor-type') || 'default');
      } else {
        targetPos.current = {
          x: e.clientX,
          y: e.clientY,
          w: 24,
          h: 24
        };
        setIsHovering(false);
        setHoverType(null);
      }
    };

    // Animation Loop for Smoothing
    let raf;
    const update = () => {
      setPos(prev => ({
        x: prev.x + (targetPos.current.x - prev.x) * 0.15,
        y: prev.y + (targetPos.current.y - prev.y) * 0.15,
        w: prev.w + (targetPos.current.w - prev.w) * 0.15,
        h: prev.h + (targetPos.current.h - prev.h) * 0.15,
        rotate: isHovering ? 0 : (prev.rotate + 1) % 360
      }));
      raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.head.removeChild(style);
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible, isHovering, padding]);

  return (
    <div
      className={`nx-cursor-root ${className}`}
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 9999,
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.3s ease'
      }}
      {...props}
    >
      <style>{`
        .nx-cursor-reticle {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: translate(-50%, -50%);
          transition: transform 0.1s linear;
        }
        
        .nx-cursor-bracket {
          position: absolute;
          width: 8px;
          height: 8px;
          transition: transform 0.2s ease;
        }
        
        .nx-cursor-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }

        .nx-cursor-label {
          position: absolute;
          transform: translateY(20px);
          font-family: monospace;
          font-size: 10px;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 0.2em;
        }
      `}</style>

      <div
        className="nx-cursor-reticle"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          width: `${pos.w}px`,
          height: `${pos.h}px`,
          transform: `translate(-50%, -50%) rotate(${pos.rotate}deg)`
        }}
      >
        {/* Corner Brackets */}
        <div 
          className="nx-cursor-bracket" 
          style={{ 
            top: 0, left: 0, borderTop: `2px solid ${color}`, borderLeft: `2px solid ${color}`,
            transform: isClicked ? 'scale(0.8)' : 'scale(1)'
          }} 
        />
        <div 
          className="nx-cursor-bracket" 
          style={{ 
            top: 0, right: 0, borderTop: `2px solid ${color}`, borderRight: `2px solid ${color}`,
            transform: isClicked ? 'scale(0.8)' : 'scale(1)'
          }} 
        />
        <div 
          className="nx-cursor-bracket" 
          style={{ 
            bottom: 0, left: 0, borderBottom: `2px solid ${color}`, borderLeft: `2px solid ${color}`,
            transform: isClicked ? 'scale(0.8)' : 'scale(1)'
          }} 
        />
        <div 
          className="nx-cursor-bracket" 
          style={{ 
            bottom: 0, right: 0, borderBottom: `2px solid ${color}`, borderRight: `2px solid ${color}`,
            transform: isClicked ? 'scale(0.8)' : 'scale(1)'
          }} 
        />

        {/* Center Dot */}
        <div
          className="nx-cursor-dot"
          style={{
            backgroundColor: color,
            transform: isHovering ? 'scale(0)' : 'scale(1)',
            opacity: isHovering ? 0 : 1
          }}
        />

        {/* Label */}
        {isHovering && hoverType && (
          <div className="nx-cursor-label" style={{ color: color, top: `${pos.h / 2}px` }}>
            {hoverType}
          </div>
        )}
      </div>
    </div>
  );
};

export default TargetCursor;
