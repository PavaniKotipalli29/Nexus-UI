import React, { useRef, useState, MouseEvent, useEffect } from 'react';
import styles from './MagicBento.module.css';
import { Heading, Text } from '../Primitives';

export interface BentoItem {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  span?: 1 | 2 | 3;
  image?: string;
  className?: string; // Allow custom tailwind override if absolutely needed
  titleColor?: string;
  descriptionColor?: string;
}

export interface MagicBentoProps {
  items: BentoItem[];
  className?: string;
  spotlightColor?: string;
  spotlightSize?: number;
  variant?: 'default' | 'minimal' | 'hero';
  clickEffect?: boolean;
  enableStars?: boolean;
  starColor?: string;
  borderColor?: string;
  backgroundColor?: string;
  gap?: string;
}

const BentoCard: React.FC<{ 
  item: BentoItem; 
  spotlightColor?: string; 
  spotlightSize?: number;
  variant?: string;
  clickEffect?: boolean;
  enableStars?: boolean;
  borderColor?: string;
  backgroundColor?: string;
  starColor?: string;
}> = ({ 
  item, 
  spotlightColor = 'rgba(0, 0, 0, 0.1)', 
  spotlightSize = 400,
  variant = 'default',
  clickEffect = false,
  enableStars = false,
  starColor = 'rgba(0, 0, 0, 0.3)',
  borderColor,
  backgroundColor
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPosition({ x, y });
  };

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if (!clickEffect || !divRef.current) return;

    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();

    setRipples(prev => [...prev, { x, y, id }]);
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== id));
    }, 600);
  };

  const spanClass = item.span === 2 ? styles.span2 : item.span === 3 ? styles.span3 : '';
  const variantClass = variant === 'minimal' ? styles.minimal : variant === 'hero' ? styles.hero : '';
  const starClass = enableStars ? styles.hasStars : '';

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      className={`${styles.bentoCard} ${spanClass} ${variantClass} ${starClass} ${item.className || ''}`}
      style={{
        '--mouse-x': `${position.x}px`,
        '--mouse-y': `${position.y}px`,
        '--spotlight-color': spotlightColor,
        '--spotlight-size': `${spotlightSize}px`,
        '--card-border-color': borderColor,
        '--card-bg-color': backgroundColor,
        '--star-color': starColor
      } as React.CSSProperties}
    >
      <div className={styles.spotlight} />
      
      {clickEffect && ripples.map(ripple => (
        <span 
          key={ripple.id} 
          className={styles.ripple} 
          style={{ left: ripple.x, top: ripple.y }} 
        />
      ))}

      <div className={styles.cardContent}>
        {item.icon && <div className={styles.cardIcon}>{item.icon}</div>}
        
        <div className="mt-auto relative z-10">
          <Heading 
            level={variant === 'hero' ? 3 : 4} 
            className="mb-2 !text-inherit"
            style={{ color: item.titleColor }}
          >
            {item.title}
          </Heading>
          <Text 
            size={variant === 'minimal' ? 'xs' : 'sm'} 
            className="opacity-80 !text-inherit"
            style={{ color: item.descriptionColor }}
          >
            {item.description}
          </Text>
        </div>

        {item.image && (
          <div className={`${styles.imageWrapper} ${variant === 'hero' ? styles.heroImage : ''}`}>
            <img src={item.image} alt="" className="w-full h-full object-cover" />
          </div>
        )}
      </div>
    </div>
  );
};

export const MagicBento: React.FC<MagicBentoProps> = ({ 
  items, 
  className = '', 
  spotlightColor,
  spotlightSize = 400,
  variant = 'default',
  clickEffect = false,
  enableStars = false,
  starColor,
  borderColor,
  backgroundColor,
  gap
}) => {
  return (
    <div 
      className={`${styles.bentoGrid} ${className}`}
      style={{ gap: gap }}
    >
      {items.map((item) => (
        <BentoCard 
          key={item.id} 
          item={item} 
          spotlightColor={spotlightColor} 
          spotlightSize={spotlightSize}
          variant={variant}
          clickEffect={clickEffect}
          enableStars={enableStars}
          starColor={starColor}
          borderColor={borderColor}
          backgroundColor={backgroundColor}
        />
      ))}
    </div>
  );
};

