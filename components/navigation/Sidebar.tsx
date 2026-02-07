import React from 'react';
import { Button } from '../ui/Primitives';

const navGroups = [
  {
    group: '1D Components',
    sections: [
      {
        title: 'Atomic / Inline',
        items: [
          { name: 'Button', id: 'button' },
          { name: 'Input', id: 'input' },
          { name: 'Badge', id: 'badge' },
        ]
      }
    ]
  },
  {
    group: '3D Components',
    sections: [
      {
        title: 'Flow / Page-Level',
        items: [
          { name: 'Modal', id: 'modal' },
          { name: 'Tabs', id: 'tabs' },
          { name: 'Alert', id: 'alert' },
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
