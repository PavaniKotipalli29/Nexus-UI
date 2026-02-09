import React from 'react';
import { Button } from '../ui/Primitives';

const navGroups = [
  {
    group: 'Atomic',
    sections: [
      {
        title: 'Foundation / Primitives',
        items: [
          { name: 'Button', id: 'button' },
          { name: 'Input', id: 'input' },
          { name: 'Label', id: 'label' },
          { name: 'Icon', id: 'icon' },
          { name: 'Badge', id: 'badge' },
          { name: 'Avatar', id: 'avatar' },
          { name: 'Spinner', id: 'spinner' },
          { name: 'Divider', id: 'divider' },
          { name: 'Checkbox', id: 'checkbox' },
          { name: 'Radio', id: 'radio' },
          { name: 'Switch', id: 'switch' },
          { name: 'Typography', id: 'typography' },
          { name: 'Tooltip', id: 'tooltip' },
          { name: 'Link', id: 'link' },
        ]
      }
    ]
  },
  {
    group: 'Reusable',
    sections: [
      {
        title: 'Molecules',
        items: [
          { name: 'InputField', id: 'input-field' },
          { name: 'SearchBar', id: 'search-bar' },
          { name: 'Dropdown', id: 'dropdown' },
          { name: 'Tabs', id: 'tabs' },
          { name: 'FormField', id: 'form-field' },
          { name: 'Toast', id: 'toast' },
          { name: 'Card', id: 'card' },
          { name: 'Modal', id: 'modal' },
          { name: 'Alert', id: 'alert' },
          { name: 'Pagination', id: 'pagination' },
          { name: 'Breadcrumb', id: 'breadcrumb' },
          { name: 'ToggleGroup', id: 'toggle-group' },
        ]
      }
    ]
  },
  {
    group: 'Composite',
    sections: [
      {
        title: 'Organisms / Patterns',
        items: [
          { name: 'Navbar', id: 'navbar' },
          { name: 'Sidebar', id: 'sidebar' },
          { name: 'DataTable', id: 'data-table' },
          { name: 'Pricing Section', id: 'pricing-section' },
          { name: 'Hero Section', id: 'hero-section' },
          { name: 'Feature Grid', id: 'feature-grid' },
          { name: 'Dashboard Stats', id: 'dashboard-stats' },
          { name: 'User Profile Card', id: 'user-profile-card' },
          { name: 'Checkout Summary', id: 'checkout-summary' },
          { name: 'Multi-step Form', id: 'multi-step-form' },
          { name: 'Wizard', id: 'wizard' },
          { name: 'Settings Panel', id: 'settings-panel' },
          { name: 'Comments Section', id: 'comments-section' },
          { name: 'Activity Feed', id: 'activity-feed' },
          { name: 'Product Grid', id: 'product-grid' },
        ]
      }
    ]
  },
  {
    group: 'App-Level',
    sections: [
      {
        title: 'Templates / Pages',
        items: [
          { name: 'Login Page', id: 'login-page' },
          { name: 'Signup Page', id: 'signup-page' },
          { name: 'Dashboard Page', id: 'dashboard-page' },
          { name: 'Analytics Page', id: 'analytics-page' },
          { name: 'Billing Page', id: 'billing-page' },
          { name: 'Profile Page', id: 'profile-page' },
          { name: 'Settings Page', id: 'settings-page' },
          { name: 'Landing Page', id: 'landing-page' },
          { name: 'Checkout Page', id: 'checkout-page' },
          { name: 'Admin Panel', id: 'admin-panel' },
          { name: 'Blog Page', id: 'blog-page' },
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
