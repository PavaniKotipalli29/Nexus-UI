import React, { useState, useEffect } from 'react';

/**
 * Orbit Component (Standalone)
 * A premium decorative component where elements revolve around a center point.
 * Features: Variable speed, direction, radius, and "keep upright" logic.
 * Requirements: Plain React, No external CSS, No Framer Motion.
 */
const Orbit = ({
  radius = 120,
  speed = 10,
  direction = 'clockwise',
  itemSize = 60,
  keepUpright = true,
  pauseOnHover = false,
  children,
  className = '',
  ...props
}) => {
  const [isPaused, setIsPaused] = useState(false);
  const childrenArray = React.Children.toArray(children);
  const itemCount = childrenArray.length;

  return (
    <div
      className={`nx-orbit-container ${className}`}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      style={{
        width: '100%',
        height: '100%',
        minHeight: radius * 2 + itemSize + 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'visible',
      }}
      {...props}
    >
      <style>{`
        .nx-orbit-wrapper {
          position: relative;
          width: 0;
          height: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: nx-orbit-rotate var(--nx-speed) linear infinite;
          animation-direction: var(--nx-direction);
          animation-play-state: var(--nx-play-state);
        }

        .nx-orbit-item {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
        }

        .nx-orbit-counter-rotate {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: nx-orbit-rotate var(--nx-speed) linear infinite reverse;
          animation-direction: var(--nx-direction);
          animation-play-state: var(--nx-play-state);
        }

        @keyframes nx-orbit-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
      
      <div 
        className="nx-orbit-wrapper"
        style={{
          '--nx-speed': `${speed}s`,
          '--nx-direction': direction === 'clockwise' ? 'normal' : 'reverse',
          '--nx-play-state': isPaused ? 'paused' : 'running'
        }}
      >
        {childrenArray.map((child, index) => {
          const angle = (360 / itemCount) * index;
          return (
            <div
              key={index}
              className="nx-orbit-item"
              style={{
                width: itemSize,
                height: itemSize,
                transform: `rotate(${angle}deg) translateX(${radius}px)`
              }}
            >
              <div 
                className={keepUpright ? 'nx-orbit-counter-rotate' : ''}
                style={keepUpright ? {
                  transform: `rotate(${-angle}deg)`
                } : {}}
              >
                {child}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Orbit;
