import React from 'react';
import { Button } from '../ui/Primitives';

const navGroups = [
  {
    group: 'System',
    sections: [
      {
        title: 'Foundations',
        items: [
          { name: 'Colors', id: 'colors' },
          { name: 'Typography Scale', id: 'typography-scale' },
          { name: 'Spacing', id: 'spacing' },
          { name: 'Design Tokens', id: 'design-tokens' },
          { name: 'Motion', id: 'motion' },
          { name: 'CSS Reset', id: 'css-reset' },
          { name: 'Theme Provider', id: 'theme-provider' },
        ]
      },
      {
        title: 'Utilities',
        items: [
          { name: 'Theme Toggle', id: 'theme-toggle' },
          { name: 'Copy To Clipboard', id: 'copy-to-clipboard' },
          { name: 'Code Block', id: 'code-block' },
          { name: 'Portal', id: 'portal' },
          { name: 'Responsive Visibility', id: 'responsive-visibility' },
          { name: 'Visually Hidden', id: 'visually-hidden' },
          { name: 'Focus Trap', id: 'focus-trap' },
        ]
      }
    ]
  },
  {
    group: 'Components',
    sections: [
      {
        title: 'Primitives',
        items: [
          { name: 'Button', id: 'button' },
          { name: 'Text', id: 'text' },
          { name: 'Heading', id: 'heading' },
          { name: 'Badge', id: 'badge' },
          { name: 'Avatar', id: 'avatar' },
          { name: 'Box', id: 'box' },
          { name: 'Flex', id: 'flex' },
          { name: 'Icon', id: 'icon' },
        ]
      },
      {
        title: 'Layout',
        items: [
          { name: 'Container', id: 'container' },
          { name: 'Card', id: 'card' },
          { name: 'Stack', id: 'stack' },
        ]
      },
      {
        title: 'Forms',
        items: [
          { name: 'Input', id: 'input' },
          { name: 'Textarea', id: 'textarea' },
          { name: 'Select', id: 'select' },
          { name: 'Checkbox', id: 'checkbox' },
          { name: 'Radio', id: 'radio' },
          { name: 'Switch', id: 'switch' },
          { name: 'Slider', id: 'slider' },
          { name: 'Form Wrapper', id: 'form-wrapper' },
          { name: 'Login Form', id: 'login-form' },
          { name: 'Signup Form', id: 'signup-form' },
          /* Merged specialized forms for brevity in the menu list if desired, keeping logic simple */
          { name: 'Search Input', id: 'search-input' },
        ]
      },
      {
        title: 'Composite',
        items: [
          { name: 'Modal', id: 'modal' },
          { name: 'Drawer', id: 'drawer' },
          { name: 'Tooltip', id: 'tooltip' },
          { name: 'Popover', id: 'popover' },
          { name: 'Tabs', id: 'tabs' },
          { name: 'Accordion', id: 'accordion' },
          { name: 'Dropdown', id: 'dropdown' },
          { name: 'Table', id: 'table' },
          { name: 'Pagination', id: 'pagination' },
          { name: 'Alert', id: 'alert' },
          { name: 'Toast', id: 'toast' },
          { name: 'Notification Banner', id: 'notification-banner' },
          { name: 'Empty State', id: 'empty-state' },
        ]
      },
      {
        title: 'Navigation',
        items: [
          { name: 'Breadcrumbs', id: 'breadcrumbs' },
          { name: 'Stepper', id: 'stepper' },
          { name: 'Command Palette', id: 'command-palette' },
        ]
      },
      {
        title: 'Feedback',
        items: [
          { name: 'Spinner', id: 'spinner' },
          { name: 'Skeleton', id: 'skeleton' },
          { name: 'Progress', id: 'progress' },
        ]
      }
    ]
  },
  {
    group: 'Patterns',
    sections: [
      {
        title: 'Application Shells',
        items: [
          { name: 'Auth Layout', id: 'auth-layout' },
          { name: 'Dashboard Layout', id: 'dashboard-layout' },
        ]
      },
      {
        title: 'Marketing',
        items: [
          { name: 'Hero Section', id: 'hero-section' },
          { name: 'Feature Grid', id: 'feature-grid' },
          { name: 'Pricing Section', id: 'pricing-section' },
          { name: 'Footer', id: 'footer' },
        ]
      },
      {
        title: 'Pages',
        items: [
          { name: '404 Page', id: '404-page' },
          { name: 'Error Page', id: 'error-page' },
        ]
      }
    ]
  }
];

export const Sidebar: React.FC = () => {
  return (
    <aside className="hidden lg:block w-64 bg-white dark:bg-neutral-900 border-r border-neutral-200 dark:border-neutral-800 h-screen fixed overflow-y-auto">
      <div className="p-6">
        <nav className="space-y-10">
          {navGroups.map((group) => (
            <div key={group.group}>
              <h4 className="mb-4 text-sm font-bold text-primary-600 dark:text-primary-400 uppercase tracking-widest border-b border-neutral-100 dark:border-neutral-800 pb-2">
                {group.group}
              </h4>
              <div className="space-y-8 pl-2">
                {group.sections.map((section) => (
                  <div key={section.title}>
                    <h5 className="mb-2 text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                      {section.title}
                    </h5>
                    <ul className="space-y-1 border-l-2 border-neutral-100 dark:border-neutral-800 ml-1 pl-3">
                      {section.items.map((item) => (
                        <li key={item.id}>
                          <a
                            href={`#/docs/${item.id}`}
                            className="block py-1.5 text-sm text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
};
