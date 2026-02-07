import React, { useState } from 'react';
import { Heading, Text, Badge, Button, IconButton, Avatar, Box, Flex, Icon, SplitButton, HamburgerButton } from '../components/ui/Primitives';
import { Card, Stack, Container } from '../components/ui/Layout';
import { Input, Checkbox, Switch, Textarea, Select, Radio, Slider, FormWrapper, LoginForm, SignupForm, DatePicker, TimePicker, SearchInput, FileUpload, OTPVerification, Label } from '../components/ui/Forms';
import { Spinner, Skeleton } from '../components/ui/Feedback';
import { ProgressBar } from '../components/ui/progress/ProgressBar';
import { ColorPalette, TypographyScale, SpacingScale, DesignTokens, MotionTokens, CSSReset, ThemeProviderInfo } from '../components/ui/Foundations';
import { Modal, Drawer, Tooltip, Popover, Tabs, Accordion, Dropdown, Table, Pagination, Alert, Toast, NotificationBanner, EmptyState } from '../components/ui/Composite';
import { List, ListItem, ListItemIcon, ListItemText, ListDivider } from '../components/ui/list/List';
import { Breadcrumbs, Stepper, CommandPalette } from '../components/ui/Navigation';
import { AuthLayout, DashboardLayout, HeroSection, FeatureGrid, PricingSection, Footer, Page404, ErrorPage } from '../components/ui/Patterns';
import { ThemeToggle, CopyToClipboard, CodeBlock, Portal, ResponsiveVisibility, VisuallyHidden, FocusTrap } from '../components/ui/Utilities';
import { Sidebar } from '../components/navigation/Sidebar';
import { Navbar } from '../components/navigation/Navbar';

// Import full source codes
import { SOURCES } from '../data/ComponentSources';

interface ComponentDoc {
  id: string;
  name: string;
  category: '1D Components' | '2D Components' | '3D Components' | 'Foundations';
  subCategory?: string;
  description: string;
  implementationSource?: string;
  cssSource?: string;
  examples: {
    title: string;
    description?: string;
    render: () => React.ReactNode;
    usageCode: string;
  }[];
  props: { name: string; type: string; default: string; desc: string }[];
}

// Helper to simulate a Divider
const Divider = () => <hr className="my-4 border-neutral-200 dark:border-neutral-800" />;

const docs: Record<string, ComponentDoc> = {
  // --- 1D Components ---
  button: {
    id: 'button',
    name: 'Button',
    category: '1D Components',
    subCategory: 'Atomic',
    description: 'Buttons allow users to take actions, and make choices, with a single tap.',
    implementationSource: SOURCES.primitives,
    examples: [
      {
        title: 'Variants',
        render: () => (
          <Flex gap={4} wrap="wrap">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
          </Flex>
        ),
        usageCode: `<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>`
      }
    ],
    props: [
      { name: 'variant', type: 'primary | secondary | outline | ghost | danger', default: 'primary', desc: 'Visual style of the button.' },
      { name: 'size', type: 'sm | md | lg', default: 'md', desc: 'Size of the button.' },
      { name: 'isLoading', type: 'boolean', default: 'false', desc: 'Show loading spinner.' },
      { name: 'disabled', type: 'boolean', default: 'false', desc: 'Disable interaction.' }
    ]
  },
  text: {
    id: 'text',
    name: 'Text',
    category: '1D Components',
    subCategory: 'Atomic',
    description: 'Text is the fundamental component for displaying body copy and small descriptions.',
    implementationSource: SOURCES.primitives,
    examples: [
      {
        title: 'Sizes',
        render: () => (
          <Stack spacing={2}>
             <Text size="sm">Small text</Text>
             <Text size="base">Base text</Text>
             <Text size="lg">Large text</Text>
             <Text size="xl">Extra Large text</Text>
          </Stack>
        ),
        usageCode: `<Text size="sm">Small text</Text>
<Text size="base">Base text</Text>
<Text size="lg">Large text</Text>
<Text size="xl">Extra Large text</Text>`
      }
    ],
    props: [
      { name: 'size', type: 'xs | sm | base | lg | xl | 2xl | 3xl', default: 'base', desc: 'Font size.' },
      { name: 'weight', type: 'normal | medium | semibold | bold', default: 'normal', desc: 'Font weight.' },
      { name: 'align', type: 'left | center | right', default: 'left', desc: 'Text alignment.' }
    ]
  },
  icon: {
    id: 'icon',
    name: 'Icon',
    category: '1D Components',
    subCategory: 'Atomic',
    description: 'SVG icons with support for outline and solid variants.',
    implementationSource: SOURCES.primitives,
    examples: [
      {
        title: 'Usage',
        render: () => (
          <Flex gap={4}>
            <Icon size="md"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></Icon>
            <Icon size="md" color="primary.600"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></Icon>
          </Flex>
        ),
        usageCode: `<Icon size="md"><path d="..."/></Icon>
<Icon size="md" color="primary.600"><path d="..."/></Icon>`
      }
    ],
    props: [
      { name: 'size', type: 'xs | sm | md | lg | xl', default: 'md', desc: 'Size of the icon.' },
      { name: 'color', type: 'string', default: 'currentColor', desc: 'Icon color.' }
    ]
  },
  badge: {
    id: 'badge',
    name: 'Badge',
    category: '1D Components',
    subCategory: 'Atomic',
    description: 'Badges highlight the state or status of an object.',
    implementationSource: SOURCES.primitives,
    examples: [
       {
         title: 'Variants',
         render: () => (
           <Flex gap={2}>
             <Badge variant="default">Default</Badge>
             <Badge variant="primary">Primary</Badge>
             <Badge variant="success">Success</Badge>
             <Badge variant="warning">Warning</Badge>
             <Badge variant="danger">Danger</Badge>
           </Flex>
         ),
         usageCode: `<Badge variant="default">Default</Badge>
<Badge variant="primary">Primary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="danger">Danger</Badge>`
       }
    ],
    props: [
      { name: 'variant', type: 'default | primary | success | warning | danger', default: 'default', desc: 'Visual style.' },
      { name: 'size', type: 'sm | md | lg', default: 'md', desc: 'Size of the badge.' }
    ]
  },
  input: {
    id: 'input',
    name: 'Input',
    category: '1D Components',
    subCategory: 'Atomic',
    description: 'Used for single-line text input.',
    implementationSource: SOURCES.forms,
    examples: [
      {
        title: 'Basic',
        render: () => <Input placeholder="Enter your name" />,
        usageCode: `<Input placeholder="Enter your name" />`
      }
    ],
    props: [
      { name: 'label', type: 'string', default: '-', desc: 'Label text.' },
      { name: 'error', type: 'string', default: '-', desc: 'Error message.' }
    ]
  },
  textarea: {
    id: 'textarea',
    name: 'Textarea',
    category: '1D Components',
    subCategory: 'Atomic',
    description: 'Multi-line text input.',
    implementationSource: SOURCES.forms,
    examples: [
      {
        title: 'Basic',
        render: () => <Textarea label="Message" placeholder="Type your message..." rows={4} />,
        usageCode: `<Textarea label="Message" placeholder="Type your message..." rows={4} />`
      }
    ],
    props: [
      { name: 'label', type: 'string', default: '-', desc: 'Label text.' },
      { name: 'rows', type: 'number', default: '4', desc: 'Number of rows.' }
    ]
  },
  select: {
    id: 'select',
    name: 'Select',
    category: '1D Components',
    subCategory: 'Atomic',
    description: 'Dropdown selection input.',
    implementationSource: SOURCES.forms,
    examples: [
      {
        title: 'Basic',
        render: () => <Select label="Country" options={[{label: 'United States', value: 'us'}, {label: 'Canada', value: 'ca'}]} />,
        usageCode: `<Select label="Country" options={[{label: 'United States', value: 'us'}, {label: 'Canada', value: 'ca'}]} />`
      }
    ],
    props: [
      { name: 'options', type: '{label, value}[]', default: '[]', desc: 'Options to display.' }
    ]
  },
  heading: {
    id: 'heading',
    name: 'Heading',
    category: '1D Components',
    subCategory: 'Atomic',
    description: 'Headings are used for titles and subtitles, supporting levels 1 through 6.',
    implementationSource: SOURCES.primitives,
    examples: [
      {
        title: 'Levels',
        render: () => <Stack spacing={2}><Heading level={1}>Heading 1</Heading><Heading level={2}>Heading 2</Heading><Heading level={3}>Heading 3</Heading></Stack>,
        usageCode: `<Heading level={1}>Heading 1</Heading>`
      }
    ],
    props: [{ name: 'level', type: '1 | 2 | 3 | 4 | 5 | 6', default: '1', desc: 'Heading level.' }]
  },
  avatar: {
    id: 'avatar',
    name: 'Avatar',
    category: '1D Components',
    subCategory: 'Atomic',
    description: 'Displays a user image or initials as a fallback.',
    implementationSource: SOURCES.primitives,
    examples: [
      {
        title: 'Basic',
        render: () => <Flex gap={4}><Avatar src="https://i.pravatar.cc/150?u=1" alt="User" /><Avatar fallback="JD" /><Avatar status="online" /></Flex>,
        usageCode: `<Avatar src="..." alt="User" />`
      }
    ],
    props: [{ name: 'src', type: 'string', default: '-', desc: 'Image source.' }]
  },
  box: {
    id: 'box',
    name: 'Box',
    category: '1D Components',
    subCategory: 'Atomic',
    description: 'A primitive layout component for managing spacing, borders, and position.',
    implementationSource: SOURCES.primitives,
    examples: [
      {
        title: 'Styling',
        render: () => <Box className="p-4 bg-primary-100 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-lg"><Text>This is a Box</Text></Box>,
        usageCode: `<Box className="p-4 bg-primary-100 border rounded-lg">...</Box>`
      }
    ],
    props: []
  },
  flex: {
    id: 'flex',
    name: 'Flex',
    category: '1D Components',
    subCategory: 'Atomic',
    description: 'A layout component based on Flexbox.',
    implementationSource: SOURCES.primitives,
    examples: [
      {
        title: 'Row Layout',
        render: () => <Flex gap={4} justify="between" className="w-full bg-neutral-100 p-2 rounded"><Box className="w-10 h-10 bg-primary-500 rounded" /><Box className="w-10 h-10 bg-primary-500 rounded" /><Box className="w-10 h-10 bg-primary-500 rounded" /></Flex>,
        usageCode: `<Flex gap={4} justify="between">...</Flex>`
      }
    ],
    props: [{ name: 'direction', type: 'row | col', default: 'row', desc: 'Flex direction.' }]
  },
  checkbox: {
    id: 'checkbox',
    name: 'Checkbox',
    category: '1D Components',
    subCategory: 'Atomic',
    description: 'Allows multiple selection.',
    implementationSource: SOURCES.forms,
    examples: [
      {
        title: 'Basic',
        render: () => <Checkbox label="Accept terms and conditions" />,
        usageCode: `<Checkbox label="Accept terms and conditions" />`
      }
    ],
    props: [
      { name: 'label', type: 'string', default: '-', desc: 'Label text.' },
      { name: 'checked', type: 'boolean', default: 'false', desc: 'Checked state.' }
    ]
  },
  radio: {
    id: 'radio',
    name: 'Radio',
    category: '1D Components',
    subCategory: 'Atomic',
    description: 'Single selection from a group.',
    implementationSource: SOURCES.forms,
    examples: [
      {
        title: 'Basic',
        render: () => <Stack spacing={2}><Radio name="plan" label="Free Plan" /><Radio name="plan" label="Pro Plan" /></Stack>,
        usageCode: `<Stack spacing={2}>\n  <Radio name="plan" label="Free Plan" />\n  <Radio name="plan" label="Pro Plan" />\n</Stack>`
      }
    ],
    props: [
      { name: 'label', type: 'string', default: '-', desc: 'Label text.' },
      { name: 'name', type: 'string', default: '-', desc: 'Group name.' }
    ]
  },
  switch: {
    id: 'switch',
    name: 'Switch',
    category: '1D Components',
    subCategory: 'Atomic',
    description: 'Toggle between two states.',
    implementationSource: SOURCES.forms,
    examples: [
      {
        title: 'Basic',
        render: () => {
          const [checked, setChecked] = useState(false);
          return <Switch label="Airplane Mode" checked={checked} onChange={setChecked} />;
        },
        usageCode: `const [checked, setChecked] = useState(false);\n<Switch label="Airplane Mode" checked={checked} onChange={setChecked} />`
      }
    ],
    props: [
      { name: 'label', type: 'string', default: '-', desc: 'Label text.' }
    ]
  },
  slider: {
    id: 'slider',
    name: 'Slider',
    category: '1D Components',
    subCategory: 'Atomic',
    description: 'Select a value from a range.',
    implementationSource: SOURCES.forms,
    examples: [
      {
        title: 'Basic',
        render: () => <Slider label="Volume" min={0} max={100} value={50} onChange={() => {}} />,
        usageCode: `<Slider label="Volume" min={0} max={100} value={50} onChange={setVal} />`
      }
    ],
    props: [
      { name: 'min', type: 'number', default: '0', desc: 'Minimum value.' }
    ]
  },
  spinner: {
    id: 'spinner',
    name: 'Spinner',
    category: '1D Components',
    subCategory: 'Atomic',
    description: 'Indicates loading state.',
    implementationSource: SOURCES.feedback,
    examples: [
      {
        title: 'Sizes',
        render: () => <Flex gap={4}><Spinner size="sm" /><Spinner size="md" /><Spinner size="lg" /></Flex>,
        usageCode: `<Spinner size="sm" />\n<Spinner size="md" />\n<Spinner size="lg" />`
      }
    ],
    props: [
      { name: 'size', type: 'sm | md | lg | xl', default: 'md', desc: 'Size of the spinner.' }
    ]
  },
  divider: {
    id: 'divider',
    name: 'Divider',
    category: '1D Components',
    subCategory: 'Atomic',
    description: 'Visually separates content.',
    examples: [
      {
        title: 'Usage',
        render: () => <Box><Text>Above</Text><Divider /><Text>Below</Text></Box>,
        usageCode: `<Text>Above</Text>\n<hr className="my-4 border-neutral-200" />\n<Text>Below</Text>`
      }
    ],
    props: []
  },
  'progress-bar': {
    id: 'progress-bar',
    name: 'Progress Bar',
    category: '1D Components',
    subCategory: 'Atomic',
    description: 'Visual indicator of progress.',
    implementationSource: SOURCES.progressBarJSX,
    cssSource: SOURCES.progressBarCSS,
    examples: [
      {
        title: 'Basic',
        render: () => <Stack spacing={4} className="w-full max-w-md"><ProgressBar value={25} /><ProgressBar value={50} showLabel /><ProgressBar value={75} variant="success" /></Stack>,
        usageCode: `<ProgressBar value={25} />\n<ProgressBar value={50} showLabel />\n<ProgressBar value={75} variant="success" />`
      }
    ],
    props: [
      { name: 'value', type: 'number', default: '0', desc: 'Current progress.' }
    ]
  },

  // --- 2D Components ---
  card: {
    id: 'card',
    name: 'Card',
    category: '2D Components',
    subCategory: 'Surface',
    description: 'Container for grouped content.',
    implementationSource: SOURCES.layout,
    examples: [
      {
        title: 'Basic',
        render: () => (
          <Card>
            <Heading level={4}>Card Title</Heading>
            <Text className="mt-2 text-neutral-600 dark:text-neutral-400">This is a card component used to group related information.</Text>
            <div className="mt-4 flex justify-end">
              <Button size="sm">Action</Button>
            </div>
          </Card>
        ),
        usageCode: `<Card>\n  <Heading level={4}>Card Title</Heading>\n  <Text>Card content...</Text>\n  <Button>Action</Button>\n</Card>`
      }
    ],
    props: [
      { name: 'padding', type: 'none | sm | md | lg', default: 'md', desc: 'Padding inside the card.' }
    ]
  },
  stack: {
    id: 'stack',
    name: 'Stack',
    category: '2D Components',
    subCategory: 'Layout',
    description: 'Vertical or horizontal stack.',
    implementationSource: SOURCES.layout,
    examples: [
      {
        title: 'Vertical',
        render: () => <Stack spacing={4}><Box className="p-4 bg-neutral-200 dark:bg-neutral-800 rounded">1</Box><Box className="p-4 bg-neutral-200 dark:bg-neutral-800 rounded">2</Box></Stack>,
        usageCode: `<Stack spacing={4}>\n  <Box>1</Box>\n  <Box>2</Box>\n</Stack>`
      }
    ],
    props: []
  },
  modal: {
    id: 'modal',
    name: 'Modal',
    category: '2D Components',
    subCategory: 'Surface',
    description: 'Dialog window that requires user interaction.',
    implementationSource: SOURCES.composite,
    examples: [
      {
        title: 'Example',
        render: () => {
          const [isOpen, setIsOpen] = useState(false);
          return (
            <>
              <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
              <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Example Modal" footer={<Button onClick={() => setIsOpen(false)}>Close</Button>}>
                <Text>This is the modal content. It overlays the page content.</Text>
              </Modal>
            </>
          );
        },
        usageCode: `const [isOpen, setIsOpen] = useState(false);\n<Modal \n  isOpen={isOpen} \n  onClose={() => setIsOpen(false)} \n  title="Example Modal"\n>\n  <Text>Modal content...</Text>\n</Modal>`
      }
    ],
    props: [
      { name: 'isOpen', type: 'boolean', default: 'false', desc: 'Controls visibility.' }
    ]
  },
  tabs: {
    id: 'tabs',
    name: 'Tabs',
    category: '2D Components',
    subCategory: 'Surface',
    description: 'Switch between different views.',
    implementationSource: SOURCES.composite,
    examples: [
      {
        title: 'Basic',
        render: () => (
          <Tabs items={[
            { id: '1', label: 'Tab 1', content: <Text>Content 1</Text> },
            { id: '2', label: 'Tab 2', content: <Text>Content 2</Text> },
          ]} />
        ),
        usageCode: `<Tabs items={[\n  { id: '1', label: 'Tab 1', content: <Text>Content 1</Text> },\n  { id: '2', label: 'Tab 2', content: <Text>Content 2</Text> }\n]} />`
      }
    ],
    props: []
  },

  // --- 3D Components ---
  navbar: {
    id: 'navbar',
    name: 'Navbar',
    category: '3D Components',
    subCategory: 'Page-Level',
    description: 'Top navigation bar.',
    examples: [
      {
        title: 'Preview',
        render: () => (
          <div className="relative h-20 border border-neutral-200 dark:border-neutral-800 rounded-md overflow-hidden transform scale-95 origin-top">
             <Navbar onToggleDarkMode={() => {}} isDarkMode={false} />
          </div>
        ),
        usageCode: `<Navbar onToggleDarkMode={toggle} isDarkMode={isDark} />`
      }
    ],
    props: []
  },
  sidebar: {
    id: 'sidebar',
    name: 'Sidebar',
    category: '3D Components',
    subCategory: 'Page-Level',
    description: 'Side navigation menu.',
    examples: [
      {
         title: 'Preview',
         render: () => (
           <div className="h-64 border border-neutral-200 dark:border-neutral-800 rounded-md overflow-hidden relative">
              <div className="absolute inset-0 overflow-y-auto">
                 <Sidebar />
              </div>
           </div>
         ),
         usageCode: `<Sidebar />`
      }
    ],
    props: []
  },
  alert: {
    id: 'alert',
    name: 'Alert',
    category: '2D Components',
    subCategory: 'Composition',
    description: 'Displays a brief, important message for a user.',
    implementationSource: SOURCES.composite,
    examples: [
      {
        title: 'Variants',
        render: () => <Stack spacing={4} className="w-full"><Alert variant="info" title="Information">Updates available.</Alert><Alert variant="success" title="Success">Settings saved.</Alert><Alert variant="danger" title="Error">Action failed.</Alert></Stack>,
        usageCode: `<Alert variant="success" title="Success">Settings saved.</Alert>`
      }
    ],
    props: [{ name: 'variant', type: 'info | success | warning | danger', default: 'info', desc: 'Alert style.' }]
  },
  breadcrumbs: {
    id: 'breadcrumbs',
    name: 'Breadcrumbs',
    category: '3D Components',
    subCategory: 'Navigation',
    description: 'Shows the current page location within a hierarchy.',
    implementationSource: SOURCES.navigation,
    examples: [
      {
        title: 'Usage',
        render: () => <Breadcrumbs items={[{ label: 'Home', href: '#' }, { label: 'Components', href: '#' }, { label: 'Breadcrumbs', isCurrent: true }]} />,
        usageCode: `<Breadcrumbs items={[{ label: 'Home', href: '/' }, ...]} />`
      }
    ],
    props: []
  },
  'auth-layout': {
    id: 'auth-layout',
    name: 'Auth Layout',
    category: '3D Components',
    subCategory: 'Page-Level',
    description: 'Layout for authentication pages.',
    implementationSource: SOURCES.patterns,
    examples: [
       {
         title: 'Structure',
         render: () => (
           <div className="h-64 border rounded overflow-hidden">
             <AuthLayout title="Welcome Back">
               <div className="p-4 bg-white/50 rounded text-center">Content</div>
             </AuthLayout>
           </div>
         ),
         usageCode: `<AuthLayout title="Welcome">\n  <LoginForm />\n</AuthLayout>`
       }
    ],
    props: []
  }
};

const SyntaxHighlighter = ({ code, language = 'tsx' }: { code: string; language?: string }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative group">
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <Button size="sm" variant="ghost" onClick={handleCopy} className="bg-neutral-800 text-neutral-300 hover:bg-neutral-700 hover:text-white">
                    {copied ? 'Copied' : 'Copy'}
                </Button>
            </div>
            <pre className="bg-neutral-900 text-neutral-100 p-4 rounded-md overflow-x-auto text-sm font-mono leading-relaxed max-h-[500px]">
                <code>{code}</code>
            </pre>
        </div>
    );
};

const InteractivePanel = ({ children, props, onChange }: { 
    children: (props: any) => React.ReactNode; 
    props: { name: string; type: string; default: string; options?: string[] }[];
    onChange: (prop: string, value: any) => void;
}) => {
    const [activeProps, setActiveProps] = useState<Record<string, any>>(
        props.reduce((acc, p) => ({ ...acc, [p.name]: p.default === '-' ? '' : (p.default === 'true' ? true : (p.default === 'false' ? false : p.default)) }), {})
    );

    const handlePropChange = (name: string, value: any) => {
        setActiveProps(prev => ({ ...prev, [name]: value }));
        onChange(name, value);
    };

    return (
        <div className="flex flex-col lg:flex-row gap-8 bg-neutral-50/50 dark:bg-neutral-900/50 p-6 rounded-lg min-h-[400px]">
            <div className="flex-1 flex items-center justify-center p-8 border border-neutral-200 dark:border-neutral-800 rounded-lg bg-white dark:bg-neutral-950 shadow-inner">
                {children(activeProps)}
            </div>
            <div className="w-full lg:w-72 space-y-6">
                <Heading level={4} className="text-sm uppercase tracking-wider text-neutral-500">Interactive Props</Heading>
                <Stack spacing={4}>
                    {props.filter(p => p.options || p.type === 'boolean' || p.type === 'string').map(prop => (
                        <div key={prop.name} className="space-y-2">
                            <Label className="text-xs font-semibold">{prop.name}</Label>
                            {prop.type === 'boolean' ? (
                                <Switch 
                                    checked={activeProps[prop.name]} 
                                    onChange={(val) => handlePropChange(prop.name, val)} 
                                />
                            ) : prop.options ? (
                                <Select 
                                    value={activeProps[prop.name]} 
                                    onChange={(e) => handlePropChange(prop.name, e.target.value)}
                                    options={prop.options.map(o => ({ label: o, value: o }))}
                                />
                            ) : (
                                <Input 
                                    value={activeProps[prop.name]} 
                                    onChange={(e) => handlePropChange(prop.name, e.target.value)}
                                    placeholder={prop.name}
                                />
                            )}
                        </div>
                    ))}
                </Stack>
            </div>
        </div>
    );
};

export const ComponentPage: React.FC<{ componentId: string }> = ({ componentId }) => {
  const doc = docs[componentId];

  if (!doc) {
    return (
      <Container size="md" className="py-20 text-center">
        <Heading level={2}>Component Documentation Coming Soon</Heading>
        <Text className="mt-4 text-neutral-500">Full source code integration for "{componentId}" is being finalized.</Text>
      </Container>
    );
  }

  // Define interactive props metadata for generic toggles
  const interactivePropsMetadata: Record<string, any[]> = {
    button: [
      { name: 'variant', type: 'select', default: 'primary', options: ['primary', 'secondary', 'outline', 'ghost', 'danger', 'success', 'warning', 'link'] },
      { name: 'size', type: 'select', default: 'md', options: ['sm', 'md', 'lg'] },
      { name: 'isLoading', type: 'boolean', default: 'false' },
      { name: 'disabled', type: 'boolean', default: 'false' },
      { name: 'children', type: 'string', default: 'Button Text' },
    ],
    input: [
      { name: 'label', type: 'string', default: 'Username' },
      { name: 'placeholder', type: 'string', default: 'Enter your username' },
      { name: 'error', type: 'string', default: '' },
      { name: 'disabled', type: 'boolean', default: 'false' },
    ],
    badge: [
        { name: 'variant', type: 'select', default: 'default', options: ['default', 'primary', 'secondary', 'outline', 'ghost', 'success', 'warning', 'danger', 'info'] },
        { name: 'size', type: 'select', default: 'md', options: ['sm', 'md', 'lg'] },
        { name: 'isRound', type: 'boolean', default: 'false' },
        { name: 'children', type: 'string', default: 'Status' },
    ],
    spinner: [
        { name: 'size', type: 'select', default: 'md', options: ['sm', 'md', 'lg', 'xl'] },
        { name: 'color', type: 'select', default: 'primary', options: ['primary', 'current', 'white', 'neutral'] },
    ],
    modal: [
      { name: 'title', type: 'string', default: 'Interactive Modal' },
      { name: 'isOpen', type: 'boolean', default: 'false' },
    ],
    tabs: [
      { name: 'variant', type: 'select', default: 'line', options: ['line', 'pills', 'folder'] },
    ],
    alert: [
      { name: 'variant', type: 'select', default: 'info', options: ['info', 'success', 'warning', 'danger'] },
      { name: 'title', type: 'string', default: 'Attention' },
      { name: 'children', type: 'string', default: 'This is an alert message.' },
    ]
  };

  const interactiveProps = interactivePropsMetadata[componentId];

  const generateCode = (componentId: string, activeProps: any) => {
    const propsString = Object.entries(activeProps)
      .filter(([key, value]) => {
        const metadata = interactiveProps.find(p => p.name === key);
        return value !== metadata?.default && key !== 'children';
      })
      .map(([key, value]) => {
        if (typeof value === 'boolean') return value ? key : '';
        if (typeof value === 'string') return `${key}="${value}"`;
        return `${key}={${JSON.stringify(value)}}`;
      })
      .filter(Boolean)
      .join(' ');

    const componentName = componentId.charAt(0).toUpperCase() + componentId.slice(1).replace(/-([a-z])/g, g => g[1].toUpperCase());
    
    if (activeProps.children) {
      return `<${componentName}${propsString ? ' ' + propsString : ''}>\n  ${activeProps.children}\n</${componentName}>`;
    }
    return `<${componentName}${propsString ? ' ' + propsString : ''} />`;
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 max-w-6xl mx-auto">
      <header className="space-y-4 px-4">
        <div className="flex items-center gap-3">
          <Badge variant="secondary" className="uppercase tracking-wider text-[10px]">{doc.category}</Badge>
          {doc.subCategory && <Badge variant="outline" className="uppercase tracking-wider text-[10px]">{doc.subCategory}</Badge>}
        </div>
        <Heading level={1} className="text-4xl lg:text-5xl font-bold tracking-tight">{doc.name}</Heading>
      </header>

      <Card padding="none" className="overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-xl bg-white dark:bg-neutral-950 rounded-2xl">
        <Tabs 
          variant="line"
          className="w-full"
          items={[
            {
              id: 'preview',
              label: 'Preview & Examples',
              content: (
                <div className="p-6 lg:p-10 space-y-16">
                   {interactiveProps && (
                     <div className="space-y-8">
                        <InteractivePanel props={interactiveProps} onChange={() => {}}>
                            {(activeProps) => (
                              <div className="w-full space-y-8">
                                <div className="flex flex-col lg:flex-row gap-8">
                                  <div className="flex-1 flex items-center justify-center p-12 border border-neutral-200 dark:border-neutral-800 rounded-2xl bg-white dark:bg-neutral-950 shadow-inner min-h-[400px]">
                                      {(() => {
                                          if (componentId === 'button') return <Button {...activeProps}>{activeProps.children}</Button>;
                                          if (componentId === 'badge') return <Badge {...activeProps}>{activeProps.children}</Badge>;
                                          if (componentId === 'spinner') return <Spinner {...activeProps} />;
                                          if (componentId === 'input') return <div className="w-full max-w-sm"><Input {...activeProps} /></div>;
                                          if (componentId === 'modal') return (
                                            <div className="relative h-64 w-full border border-dashed rounded flex items-center justify-center bg-neutral-50 dark:bg-neutral-900/50">
                                              <Button onClick={() => alert('In doc preview, modal would open here.')}>Open Modal Overlay</Button>
                                              {activeProps.isOpen && <div className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center rounded"><Card className="p-4 w-64 shadow-xl"><Heading level={4}>{activeProps.title}</Heading><Text size="sm" className="mt-2">Modal content preview</Text></Card></div>}
                                            </div>
                                          );
                                          if (componentId === 'tabs') return <Tabs variant={activeProps.variant} items={[{id: '1', label: 'Tab 1', content: 'Content 1'}, {id: '2', label: 'Tab 2', content: 'Content 2'}]} />;
                                          if (componentId === 'alert') return <Alert {...activeProps}>{activeProps.children}</Alert>;
                                          return doc.examples[0].render();
                                      })()}
                                  </div>
                                </div>

                                <div className="space-y-4">
                                  <SyntaxHighlighter code={generateCode(componentId, activeProps)} />
                                </div>
                              </div>
                            )}
                        </InteractivePanel>
                     </div>
                   )}

                   <div className="space-y-10">
                     <div className="border-t border-neutral-100 dark:border-neutral-800 pt-10">
                     </div>
                     <div className="grid gap-12">
                     {doc.examples.map((example, index) => (
                       <div key={index} className="space-y-4">
                          <Heading level={3} className="text-xl">{example.title}</Heading>
                          {example.description && <Text>{example.description}</Text>}
                          
                          <Card padding="none" className="overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-sm rounded-xl">
                            <Tabs 
                              items={[
                                {
                                  id: 'preview',
                                  label: 'Preview',
                                  content: (
                                    <div className="p-8 bg-neutral-50/50 dark:bg-neutral-900/50 flex items-center justify-center min-h-[250px] overflow-auto">
                                      {example.render()}
                                    </div>
                                  )
                                },
                                {
                                  id: 'code',
                                  label: 'Code',
                                  content: (
                                    <div className="bg-neutral-950 p-2">
                                       <Tabs 
                                         variant="pills"
                                         items={[
                                             { id: 'usage', label: 'Usage Example', content: <SyntaxHighlighter code={example.usageCode} /> },
                                             { 
                                               id: 'source', 
                                               label: 'Implementation Source', 
                                               content: doc.implementationSource ? (
                                                 <div className="space-y-4">
                                                   <Text size="sm" className="px-4 text-neutral-400">Full React component implementation</Text>
                                                   <SyntaxHighlighter code={doc.implementationSource} />
                                                   {doc.cssSource && (
                                                     <>
                                                       <Text size="sm" className="px-4 text-neutral-400">CSS Module</Text>
                                                       <SyntaxHighlighter code={doc.cssSource} />
                                                     </>
                                                   )}
                                                 </div>
                                               ) : (
                                                 <div className="p-8 text-center text-neutral-500">Source code not available for this legacy pattern.</div>
                                               )
                                             }
                                         ]}
                                       />
                                    </div>
                                  )
                                }
                              ]}
                              variant="line"
                              className="w-full"
                            />
                          </Card>
                       </div>
                     ))}
                     </div>
                   </div>
                </div>
              )
            },
            {
              id: 'code',
              label: 'Full Source Code',
              content: (
                <div className="bg-neutral-950 min-h-[500px]">
                   {doc.implementationSource ? (
                     <div className="p-6 lg:p-10 space-y-8">
                       <div className="space-y-8">
                          <div className="space-y-4">
                             <SyntaxHighlighter code={doc.implementationSource} />
                          </div>
                          
                          {doc.cssSource && (
                            <div className="space-y-4">
                               <SyntaxHighlighter code={doc.cssSource} />
                            </div>
                          )}
                       </div>
                     </div>
                   ) : (
                     <div className="p-32 text-center text-white">
                        <Heading level={3} className="text-neutral-500">Source Code Unavailable</Heading>
                        <Text color="muted" className="mt-2">This component uses a legacy implementation without direct source mapping.</Text>
                     </div>
                   )}
                </div>
              )
            },
            {
              id: 'info',
              label: 'Information & API',
              content: (
                <div className="p-6 lg:p-10 space-y-16">
                   <div className="space-y-4">
                      <Text size="lg" className="text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-4xl">
                        {doc.description}
                      </Text>
                   </div>

                   {doc.props.length > 0 && (
                     <div className="space-y-8 pt-10 border-t border-neutral-100 dark:border-neutral-800">
                        <div className="overflow-hidden border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-sm">
                          <table className="w-full text-left text-sm border-collapse">
                            <thead className="bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
                              <tr>
                                <th className="p-4 font-bold text-neutral-900 dark:text-neutral-100">Prop</th>
                                <th className="p-4 font-bold text-neutral-900 dark:text-neutral-100">Type</th>
                                <th className="p-4 font-bold text-neutral-900 dark:text-neutral-100">Default</th>
                                <th className="p-4 font-bold text-neutral-900 dark:text-neutral-100">Description</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800 bg-white dark:bg-neutral-950">
                              {doc.props.map((prop) => (
                                <tr key={prop.name} className="hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition duration-150">
                                  <td className="p-4 font-mono font-semibold text-primary-600 dark:text-primary-400">{prop.name}</td>
                                  <td className="p-4 font-mono text-xs text-neutral-500">{prop.type}</td>
                                  <td className="p-4 font-mono text-xs text-neutral-500">{prop.default}</td>
                                  <td className="p-4 text-neutral-600 dark:text-neutral-300 leading-relaxed">{prop.desc}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                     </div>
                   )}
                </div>
              )
            }
          ]}
        />
      </Card>
    </div>
  );
};
