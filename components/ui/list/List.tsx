import React, { forwardRef } from 'react';
import styles from './List.module.css';
import { 
  ListProps, 
  ListItemProps, 
  ListItemIconProps, 
  ListItemTextProps, 
  ListDividerProps 
} from '../../../types';
import { Text } from '../Primitives';

export const List = forwardRef<HTMLElement, ListProps>(({
  children,
  className = '',
  variant = 'default',
  orientation = 'vertical',
  component: Component = 'ul',
  ...props
}, ref) => {
  return (
    <Component
      ref={ref}
      className={`${styles.list} ${styles[orientation]} ${className}`}
      role={Component === 'ul' || Component === 'ol' ? 'list' : undefined}
      {...props}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === ListItem) {
          // Pass variant down to ListItems if not explicitly set
          return React.cloneElement(child as React.ReactElement<ListItemProps>, {
             variant: (child.props as ListItemProps).variant || variant
          });
        }
        return child;
      })}
    </Component>
  );
});

List.displayName = 'List';

export const ListItem = forwardRef<HTMLElement, ListItemProps>(({
  children,
  className = '',
  variant = 'default',
  onClick,
  disabled = false,
  selected = false,
  href,
  component,
  ...props
}, ref) => {
  const isInteractive = Boolean(onClick || href);
  
  // Determine component type
  let Component: any = component || 'li';
  if (isInteractive && !component) {
    if (href) Component = 'a';
    else Component = 'div'; // Use div for clickable list items to avoid button-in-li issues if not carefully handled, or just 'li' with role
  }

  // Accessibility props
  const ariaProps: any = {};
  if (isInteractive) {
    ariaProps.role = href ? 'link' : 'button';
    ariaProps.tabIndex = disabled ? -1 : 0;
    if (disabled) ariaProps['aria-disabled'] = true;
    if (selected) ariaProps['aria-selected'] = true;
  }

  return (
    <Component
      ref={ref}
      className={`
        ${styles.item} 
        ${styles[variant]} 
        ${isInteractive ? styles.interactive : ''} 
        ${selected ? styles.selected : ''} 
        ${disabled ? styles.disabled : ''} 
        ${className}
      `}
      onClick={!disabled ? onClick : undefined}
      href={!disabled ? href : undefined}
      {...ariaProps}
      {...props}
      onKeyDown={(e: React.KeyboardEvent) => {
        if (isInteractive && !disabled) {
          if (e.key === 'Enter' || e.key === ' ') {
            if (!href) {
                e.preventDefault();
                onClick?.();
            }
          }
        }
        props.onKeyDown?.(e);
      }}
    >
      {/* Pass compact/default context to children if needed via CSS classes on parent */}
      {children}
    </Component>
  );
});

ListItem.displayName = 'ListItem';

export const ListItemIcon: React.FC<ListItemIconProps> = ({
  children,
  className = '',
  position = 'start',
  ...props
}) => {
  return (
    <div className={`${styles.icon} ${styles[position]} ${className}`} {...props}>
      {children}
    </div>
  );
};

export const ListItemText: React.FC<ListItemTextProps> = ({
  primary,
  secondary,
  className = '',
  primaryTypographyProps,
  secondaryTypographyProps,
  ...props
}) => {
  return (
    <div className={`${styles.text} ${className}`} {...props}>
      <span className={styles.primary}>
        {typeof primary === 'string' ? (
             <Text {...primaryTypographyProps}>{primary}</Text>
        ) : primary}
      </span>
      {secondary && (
        <span className={styles.secondary}>
             {typeof secondary === 'string' ? (
                 <Text size="sm" color="muted" {...secondaryTypographyProps}>{secondary}</Text>
             ) : secondary}
        </span>
      )}
    </div>
  );
};

export const ListDivider: React.FC<ListDividerProps> = ({
  component: Component = 'li',
  className = '',
  inset = false,
  ...props
}) => {
  return (
    <Component
      className={`${styles.divider} ${inset ? styles.inset : ''} ${className}`}
      role="separator"
      {...props}
    />
  );
};
