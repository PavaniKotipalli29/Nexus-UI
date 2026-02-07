
import React from 'react';
import { Button, Badge } from '../components/ui/Primitives';
import { Card } from '../components/ui/Layout';

export interface ComponentItem {
  id: string;
  name: string;
  category: string;
  variants: number;
  description: string;
  preview: React.ReactNode;
  code: string;
  info: string;
}

export const components: ComponentItem[] = [
  {
    id: 'button',
    name: 'Button',
    category: '1D Components',
    variants: 8,
    description: 'Interactive buttons for actions and triggers.',
    preview: <Button>Primary Action</Button>,
    code: '<Button variant="primary">Click Me</Button>\n<Button variant="secondary">Cancel</Button>',
    info: 'Buttons are used for primary or secondary actions. They support various sizes and variants like outline, ghost, and danger.'
  },
  {
    id: 'input',
    name: 'Input',
    category: '1D Components',
    variants: 4,
    description: 'Text inputs for user data entry.',
    preview: <div className="w-full px-4"><div className="h-8 border rounded bg-white dark:bg-neutral-800 flex items-center px-2 text-xs text-neutral-400">Placeholder...</div></div>,
    code: '<Input label="Name" placeholder="Enter your name" />',
    info: 'Standard text input with support for labels, error states, and helper text.'
  },
  {
    id: 'badge',
    name: 'Badge',
    category: '1D Components',
    variants: 9,
    description: 'Status indicators and labels.',
    preview: <Badge variant="success">Active</Badge>,
    code: '<Badge variant="success">Active</Badge>\n<Badge variant="danger">Error</Badge>',
    info: 'Badges highlight the status of an object. Available in multiple variants for different context (success, warning, etc).'
  },
  {
    id: 'modal',
    name: 'Modal',
    category: '2D Components',
    variants: 5,
    description: 'Dialog overlays for focused interactions.',
    preview: <Card className="scale-75 shadow-lg border-primary-500"><div className="h-4 w-24 bg-neutral-200 dark:bg-neutral-700 rounded mb-2"></div><div className="h-2 w-full bg-neutral-100 dark:bg-neutral-800 rounded"></div></Card>,
    code: '<Modal isOpen={isOpen} onClose={close} title="Modal Title">\n  <Text>Modal content goes here...</Text>\n</Modal>',
    info: 'Modals provide a focused interface for critical tasks. They overlay the main content and require explicit dismissal.'
  },
  {
    id: 'tabs',
    name: 'Tabs',
    category: '2D Components',
    variants: 3,
    description: 'Organize content into navigable views.',
    preview: <div className="flex gap-2 border-b w-full px-2"><div className="border-b-2 border-primary-500 px-2 py-1 text-[10px] font-bold">Tab 1</div><div className="px-2 py-1 text-[10px] text-neutral-400">Tab 2</div></div>,
    code: '<Tabs items={[\n  { id: "1", label: "Tab 1", content: <Text>1</Text> },\n  { id: "2", label: "Tab 2", content: <Text>2</Text> }\n]} />',
    info: 'Tabs allow users to switch between different contexts within the same view, organizing complex information efficiently.'
  },
  {
    id: 'alert',
    name: 'Alert',
    category: '2D Components',
    variants: 4,
    description: 'Feedback messages for user actions.',
    preview: <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded p-2 flex gap-2 w-full"><div className="w-2 h-2 rounded-full bg-blue-500 mt-1"></div><div className="h-2 w-16 bg-blue-200 dark:bg-blue-800 rounded"></div></div>,
    code: '<Alert variant="info" title="Updates">New version available.</Alert>',
    info: 'Alerts provide contextual feedback to the user. Use them to display important information or status updates.'
  }
];
