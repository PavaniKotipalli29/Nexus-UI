import React, { useState } from 'react';
import { Heading, Text, Badge, Button, IconButton, Avatar, AvatarGroup, Box, Flex, Icon, SplitButton, HamburgerButton, Label, Caption, Code, Blockquote } from '../components/ui/Primitives';
import { Card, Stack, Container } from '../components/ui/Layout';
import { Input, Checkbox, Switch, Textarea, Select, Radio, Slider, FormWrapper, LoginForm, SignupForm, DatePicker, TimePicker, SearchInput, FileUpload, OTPVerification } from '../components/ui/Forms';
import { Spinner, Skeleton } from '../components/ui/Feedback';
import { ProgressBar } from '../components/ui/progress/ProgressBar';
import { ColorPalette, TypographyScale, SpacingScale, DesignTokens, MotionTokens, CSSReset, ThemeProviderInfo } from '../components/ui/Foundations';
import { Modal, Drawer, Tooltip, Popover, Tabs, Accordion, Dropdown, Table, Pagination, Alert, Toast, NotificationBanner, EmptyState, Wizard } from '../components/ui/Composite';
import { List, ListItem, ListItemIcon, ListItemText, ListDivider } from '../components/ui/list/List';
import { Breadcrumbs, Stepper, CommandPalette } from '../components/ui/Navigation';
import { AuthLayout, DashboardLayout, HeroSection, FeatureGrid, PricingSection, Footer, Page404, ErrorPage } from '../components/ui/Patterns';
import { ThemeToggle, CopyToClipboard, CodeBlock, Portal, ResponsiveVisibility, VisuallyHidden, FocusTrap } from '../components/ui/Utilities';
import { Sidebar } from '../components/navigation/Sidebar';
import { Navbar } from '../components/navigation/Navbar';
import { AuthFlow } from '../components/ui/AuthFlow';
import { UserManager } from '../components/ui/CRUDManager';
import { AdminDashboard, StatCard, MiniChart, AdvancedTable } from '../components/ui/Dashboard';
import { Orbit } from '../components/ui/Orbit';
import { TargetCursor } from '../components/ui/TargetCursor';

// Import full source codes
import { SOURCES } from '../data/ComponentSources';

export interface ComponentDoc {
  id: string;
  name: string;
  category: 'Atomic' | 'Reusable' | 'Composite' | 'App-level';
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
    category: 'Atomic',
    subCategory: 'Foundation / Primitives',
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
    category: 'Atomic',
    subCategory: 'Foundation / Primitives',
    description: 'Text is the fundamental component for displaying body copy and small descriptions.',
    implementationSource: SOURCES.primitives,
    examples: [
      {
        title: 'Basic Usage',
        render: () => (
          <Stack spacing={2}>
            <Text>Default text content.</Text>
            <Text tone="muted">Muted text for secondary info.</Text>
            <Text weight="bold">Bold emphasis text.</Text>
          </Stack>
        ),
        usageCode: `<Text tone="muted">Secondary content</Text>`
      }
    ],
    props: [
      { name: 'variant', type: 'display | heading | body | label | caption | code', default: '"body-md"', desc: 'Typography variant.' },
      { name: 'tone', type: 'default | muted | subtle | primary | success | warning | danger | inverse', default: '"default"', desc: 'Visual tone.' },
      { name: 'weight', type: 'light | regular | medium | semibold | bold', default: '"regular"', desc: 'Font weight.' },
      { name: 'align', type: 'left | center | right', default: '"left"', desc: 'Text alignment.' }
    ]
  },
  heading: {
    id: 'heading',
    name: 'Heading',
    category: 'Atomic',
    subCategory: 'Foundation / Primitives',
    description: 'Headings for titles and subtitles.',
    implementationSource: SOURCES.primitives,
    examples: [
      {
        title: 'Levels',
        render: () => (
          <Stack spacing={4}>
            <Heading level={1}>Heading 1</Heading>
            <Heading level={2}>Heading 2</Heading>
            <Heading level={3}>Heading 3</Heading>
          </Stack>
        ),
        usageCode: `<Heading level={1}>Main Title</Heading>`
      }
    ],
    props: [
      { name: 'level', type: '1 | 2 | 3 | 4 | 5 | 6', default: '1', desc: 'Heading level.' },
      { name: 'tone', type: '"default" | "muted" | "primary" | "destructive" | "success"', default: '"default"', desc: 'Visual tone.' }
    ]
  },
  icon: {
    id: 'icon',
    name: 'Icon',
    category: 'Atomic',
    subCategory: 'Foundation / Primitives',
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
    category: 'Atomic',
    subCategory: 'Foundation / Primitives',
    description: 'Badges highlight the state or status of an object.',
    implementationSource: SOURCES.primitives,
    examples: [
      {
        title: 'Variants',
        render: () => (
          <Flex gap={2} wrap="wrap">
            <Badge variant="default">Default</Badge>
            <Badge variant="primary">Primary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="danger">Danger</Badge>
            <Badge variant="outline">Outline</Badge>
          </Flex>
        ),
        usageCode: `<Badge variant="primary">Primary</Badge>\n<Badge variant="outline">Outline</Badge>`
      },
      {
        title: 'Styles',
        render: () => (
          <Flex gap={2} wrap="wrap">
            <Badge variant="primary" style="solid">Solid</Badge>
            <Badge variant="primary" style="subtle">Subtle</Badge>
            <Badge variant="primary" style="soft">Soft</Badge>
            <Badge variant="primary" style="pill">Pill</Badge>
          </Flex>
        ),
        usageCode: `<Badge variant="primary" style="solid">Solid</Badge>\n<Badge variant="primary" style="pill">Pill</Badge>`
      }
    ],
    props: [
      { name: 'variant', type: 'default | primary | secondary | success | warning | danger | outline', default: 'default', desc: 'Visual variant.' },
      { name: 'style', type: 'solid | subtle | soft | pill', default: 'subtle', desc: 'Visual style.' },
      { name: 'size', type: 'sm | md | lg', default: 'md', desc: 'Size of the badge.' }
    ]
  },
  input: {
    id: 'input',
    name: 'Input',
    category: 'Atomic',
    subCategory: 'Foundation / Primitives',
    description: 'A versatile input component supporting multiple variants, states, and icon configurations.',
    implementationSource: SOURCES.forms,
    examples: [
      {
        title: 'Variants',
        render: () => (
          <Stack spacing={4} className="w-full max-w-sm">
            <Input variant="default" placeholder="Default variant" label="Default" />
            <Input variant="filled" placeholder="Filled variant" label="Filled" />
            <Input variant="ghost" placeholder="Ghost variant" label="Ghost" />
            <Input variant="underline" placeholder="Underline variant" label="Underline" />
          </Stack>
        ),
        usageCode: `<Input variant="default" placeholder="Default" />\n<Input variant="filled" placeholder="Filled" />\n<Input variant="ghost" placeholder="Ghost" />\n<Input variant="underline" placeholder="Underline" />`
      },
      {
        title: 'States',
        render: () => (
          <Stack spacing={4} className="w-full max-w-sm">
            <Input label="Disabled" disabled placeholder="Can't type here" />
            <Input label="Loading" isLoading placeholder="Processing..." />
            <Input label="Error" error="Invalid input" value="Invalid data" />
            <Input label="Success" success="Input is valid" value="Correct data" />
          </Stack>
        ),
        usageCode: `<Input disabled placeholder="Disabled" />\n<Input isLoading placeholder="Loading..." />\n<Input error="Error message" />\n<Input success="Success message" />`
      },
      {
        title: 'With Icons',
        render: () => (
          <Stack spacing={4} className="w-full max-w-sm">
            <Input 
              placeholder="Search..." 
              leftIcon={<Icon size="xs"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></Icon>} 
            />
            <Input 
              placeholder="Email address" 
              rightIcon={<Icon size="xs"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></Icon>} 
            />
          </Stack>
        ),
        usageCode: `<Input leftIcon={<SearchIcon />} />\n<Input rightIcon={<MailIcon />} />`
      },
      {
        title: 'Clearable',
        render: () => {
          const [val, setVal] = useState('Clear me');
          return <Input label="Clearable Input" value={val} onChange={(e) => setVal(e.target.value)} clearable onClear={() => setVal('')} />;
        },
        usageCode: `<Input clearable value={val} onClear={() => setVal('')} />`
      }
    ],
    props: [
      { name: 'variant', type: 'default | filled | ghost | underline', default: 'default', desc: 'Visual variant.' },
      { name: 'label', type: 'string', default: '-', desc: 'Label text.' },
      { name: 'error', type: 'string', default: '-', desc: 'Error message.' },
      { name: 'success', type: 'string', default: '-', desc: 'Success message.' },
      { name: 'isLoading', type: 'boolean', default: 'false', desc: 'Loading state.' },
      { name: 'leftIcon', type: 'ReactNode', default: '-', desc: 'Icon on the left.' },
      { name: 'rightIcon', type: 'ReactNode', default: '-', desc: 'Icon on the right.' },
      { name: 'clearable', type: 'boolean', default: 'false', desc: 'Show clear button.' }
    ]
  },
  textarea: {
    id: 'textarea',
    name: 'Textarea',
    category: 'Atomic',
    subCategory: 'Foundation / Primitives',
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
    category: 'Atomic',
    subCategory: 'Foundation / Primitives',
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
  avatar: {
    id: 'avatar',
    name: 'Avatar',
    category: 'Atomic',
    subCategory: 'Foundation / Primitives',
    description: 'Visual representation of a user, supporting groups and status indicators.',
    implementationSource: SOURCES.primitives,
    examples: [
      {
        title: 'Variants',
        render: () => (
          <Flex gap={4}>
            <Avatar src="https://i.pravatar.cc/150?u=1" variant="circle" />
            <Avatar src="https://i.pravatar.cc/150?u=2" variant="rounded" />
            <Avatar src="https://i.pravatar.cc/150?u=3" variant="square" />
          </Flex>
        ),
        usageCode: `<Avatar variant="circle" src="..." />\n<Avatar variant="rounded" src="..." />\n<Avatar variant="square" src="..." />`
      },
      {
        title: 'Sizes',
        render: () => (
          <Flex gap={4} align="end">
            <Avatar fallback="SM" size="sm" />
            <Avatar fallback="MD" size="md" />
            <Avatar fallback="LG" size="lg" />
            <Avatar fallback="XL" size="xl" />
          </Flex>
        ),
        usageCode: `<Avatar size="sm" fallback="SM" />\n<Avatar size="xl" fallback="XL" />`
      },
      {
        title: 'Status Indicators',
        render: () => (
          <Flex gap={4}>
            <Avatar src="https://i.pravatar.cc/150?u=4" status="online" />
            <Avatar src="https://i.pravatar.cc/150?u=5" status="busy" />
            <Avatar src="https://i.pravatar.cc/150?u=6" status="away" />
            <Avatar fallback="OFF" status="offline" />
          </Flex>
        ),
        usageCode: `<Avatar status="online" src="..." />\n<Avatar status="offline" fallback="OFF" />`
      },
      {
        title: 'Avatar Group',
        description: 'Display multiple avatars in a stack.',
        render: () => (
          <AvatarGroup limit={3}>
            <Avatar src="https://i.pravatar.cc/150?u=7" />
            <Avatar src="https://i.pravatar.cc/150?u=8" />
            <Avatar src="https://i.pravatar.cc/150?u=9" />
            <Avatar src="https://i.pravatar.cc/150?u=10" />
            <Avatar src="https://i.pravatar.cc/150?u=11" />
          </AvatarGroup>
        ),
        usageCode: `<AvatarGroup limit={3}>\n  <Avatar src="..." />\n  <Avatar src="..." />\n  <Avatar src="..." />\n  <Avatar src="..." />\n</AvatarGroup>`
      }
    ],
    props: [
      { name: 'src', type: 'string', default: '-', desc: 'Image source URL.' },
      { name: 'alt', type: 'string', default: 'Avatar', desc: 'Alt text for the image.' },
      { name: 'fallback', type: 'string', default: 'A', desc: 'Initials to show if image fails or is missing.' },
      { name: 'size', type: 'sm | md | lg | xl | 2xl', default: 'md', desc: 'Size of the avatar.' },
      { name: 'variant', type: 'circle | rounded | square', default: 'circle', desc: 'Shape of the avatar.' },
      { name: 'status', type: 'online | offline | busy | away', default: '-', desc: 'Live status indicator.' }
    ]
  },
  box: {
    id: 'box',
    name: 'Box',
    category: 'Atomic',
    subCategory: 'Foundation / Primitives',
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
    category: 'Atomic',
    subCategory: 'Foundation / Primitives',
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
    category: 'Atomic',
    subCategory: 'Foundation / Primitives',
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
    category: 'Atomic',
    subCategory: 'Foundation / Primitives',
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
    category: 'Atomic',
    subCategory: 'Foundation / Primitives',
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
    category: 'Atomic',
    subCategory: 'Foundation / Primitives',
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
    category: 'Atomic',
    subCategory: 'Foundation / Primitives',
    description: 'Indicates a loading state or ongoing process with multiple visual styles.',
    implementationSource: SOURCES.feedback,
    examples: [
      {
        title: 'Variants',
        render: () => (
          <Flex gap={8} align="center" wrap="wrap">
            <Stack align="center" spacing={2}><Spinner variant="border" /><Caption>Border</Caption></Stack>
            <Stack align="center" spacing={2}><Spinner variant="ring" /><Caption>Ring</Caption></Stack>
            <Stack align="center" spacing={2}><Spinner variant="dots" /><Caption>Dots</Caption></Stack>
            <Stack align="center" spacing={2}><Spinner variant="pulse" /><Caption>Pulse</Caption></Stack>
            <Stack align="center" spacing={2} className="h-8"><Spinner variant="bars" /><Caption>Bars</Caption></Stack>
            <Stack align="center" spacing={2}><Spinner variant="gradient" /><Caption>Gradient</Caption></Stack>
          </Flex>
        ),
        usageCode: `<Spinner variant="border" />\n<Spinner variant="dots" />\n<Spinner variant="gradient" />`
      },
      {
        title: 'Colors & Sizes',
        render: () => (
          <Stack spacing={6}>
            <Flex gap={4} align="end">
              <Spinner size="xs" color="primary" />
              <Spinner size="sm" color="success" />
              <Spinner size="md" color="warning" />
              <Spinner size="lg" color="danger" />
              <Spinner size="xl" color="secondary" />
            </Flex>
          </Stack>
        ),
        usageCode: `<Spinner size="sm" color="success" />\n<Spinner size="xl" color="primary" />`
      },
      {
        title: 'With Labels',
        render: () => (
          <Flex gap={8}>
            <Spinner label="Loading..." color="primary" />
            <Spinner variant="dots" label="Processing" color="success" />
          </Flex>
        ),
        usageCode: `<Spinner label="Loading..." />`
      }
    ],
    props: [
      { name: 'variant', type: 'border | ring | dots | pulse | bars | gradient', default: 'border', desc: 'The visual animation style.' },
      { name: 'size', type: 'xs | sm | md | lg | xl', default: 'md', desc: 'Size of the spinner.' },
      { name: 'color', type: 'primary | secondary | success | warning | danger | neutral | white', default: 'primary', desc: 'Color variant.' },
      { name: 'placement', type: 'inline | centered | fullscreen | overlay', default: 'inline', desc: 'Positioning and backdrop behavior.' },
      { name: 'label', type: 'string', default: '-', desc: 'Optional text to display below the spinner.' },
      { name: 'speed', type: 'slow | normal | fast', default: 'normal', desc: 'Animation speed.' },
      { name: 'thickness', type: 'thin | normal | thick', default: 'normal', desc: 'Thickness of the spinner lines (for border and ring variants).' }
    ]
  },
  divider: {
    id: 'divider',
    name: 'Divider',
    category: 'Atomic',
    subCategory: 'Foundation / Primitives',
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
    category: 'Atomic',
    subCategory: 'Foundation / Primitives',
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
    category: 'Reusable',
    subCategory: 'Molecules',
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
    category: 'Reusable',
    subCategory: 'Molecules',
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
    category: 'Reusable',
    subCategory: 'Molecules',
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
    category: 'Reusable',
    subCategory: 'Molecules',
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
  orbit: {
    id: 'orbit',
    name: 'Orbit',
    category: 'Reusable',
    subCategory: 'Molecules',
    description: 'A decorative animation component where elements revolve around a center point.',
    implementationSource: SOURCES.orbit,
    examples: [
      {
        title: 'Team Orbit',
        description: 'Perfect for showcasing team members or contributors.',
        render: () => (
          <div className="w-full h-64 flex items-center justify-center overflow-hidden bg-neutral-50 dark:bg-neutral-900/50 rounded-xl relative border border-dashed border-neutral-200 dark:border-neutral-800">
            <Orbit radius={80} speed={6} direction="clockwise" itemSize={50} keepUpright={true} pauseOnHover={true} borderRadius={50}>
              <Avatar src="https://i.pravatar.cc/150?u=1" variant="circle" className="ring-2 ring-primary-500 shadow-xl" />
              <Avatar src="https://i.pravatar.cc/150?u=2" variant="circle" className="ring-2 ring-accent-500 shadow-xl" />
              <Avatar src="https://i.pravatar.cc/150?u=3" variant="circle" className="ring-2 ring-indigo-500 shadow-xl" />
              <Avatar src="https://i.pravatar.cc/150?u=4" variant="circle" className="ring-2 ring-emerald-500 shadow-xl" />
              <Avatar src="https://i.pravatar.cc/150?u=5" variant="circle" className="ring-2 ring-pink-500 shadow-xl" />
            </Orbit>
            <div className="absolute w-12 h-12 bg-white dark:bg-neutral-800 rounded-full flex items-center justify-center shadow-lg z-10 border border-neutral-100 dark:border-neutral-700">
              <div className="w-8 h-8 bg-primary-600 rounded-full animate-pulse" />
            </div>
          </div>
        ),
        usageCode: `<Orbit radius={80} speed={6} direction="clockwise" keepUpright={true} pauseOnHover={true}>
  <Avatar src="user1.jpg" />
  <Avatar src="user2.jpg" />
  <Avatar src="user3.jpg" />
</Orbit>`
      },
      {
        title: 'Basic Shapes',
        render: () => (
          <div className="w-full h-48 flex items-center justify-center overflow-hidden bg-neutral-50 dark:bg-neutral-900/50 rounded-xl relative">
            <Orbit radius={50} speed={4} direction="anticlockwise" itemSize={30} keepUpright={false} pauseOnHover={false}>
              <div className="w-full h-full bg-primary-500 rounded" />
              <div className="w-full h-full bg-accent-500 rounded-full" />
              <div className="w-full h-full bg-emerald-500 rotate-45" />
            </Orbit>
          </div>
        ),
        usageCode: `<Orbit radius={50} speed={4} direction="anticlockwise" keepUpright={false}>
  <div className="w-6 h-6 bg-primary-500" />
  <div className="w-6 h-6 bg-accent-500 rounded-full" />
</Orbit>`
      }
    ],
    props: [
      { name: 'radius', type: 'number', default: '150', desc: 'Distance from center to item centers in pixels.' },
      { name: 'speed', type: 'number', default: '10', desc: 'Time for one full rotation in seconds.' },
      { name: 'direction', type: '"clockwise" | "anticlockwise"', default: '"clockwise"', desc: 'Rotation direction.' },
      { name: 'itemSize', type: 'number', default: '80', desc: 'The square dimension of the item container.' },
      { name: 'keepUpright', type: 'boolean', default: 'true', desc: 'If true, items remain upright while revolving.' },
      { name: 'pauseOnHover', type: 'boolean', default: 'false', desc: 'Pauses animation when cursor enters the container.' },
      { name: 'borderRadius', type: 'number', default: '0', desc: 'Border radius of the item wrappers.' }
    ]
  },
  'target-cursor': {
    id: 'target-cursor',
    name: 'Target Cursor',
    category: 'Reusable',
    subCategory: 'Molecules',
    description: 'A high-end experimental cursor with integrated magnetic snapping, aperture organic geometry, and momentum-based velocity distortion.',
    implementationSource: SOURCES.targetCursor,
    examples: [
      {
        title: 'Magnetic Synergy',
        description: 'Move close to the buttons to see the cursor "snap" towards their center.',
        render: () => (
          <div className="w-full flex items-center justify-center gap-12 py-20 bg-neutral-900 rounded-3xl overflow-hidden relative">
            <TargetCursor stiffness={300} padding={12} />
            <div 
              data-cursor-target="true" 
              data-cursor-type="magnet"
              className="group relative w-32 h-32 flex items-center justify-center cursor-none"
            >
              <div className="absolute inset-0 bg-primary-500/10 rounded-2xl border border-primary-500/30 group-hover:bg-primary-500/20 transition-all duration-300" />
              <div className="z-10 text-center">
                <Icon size="md" className="text-primary-400 mb-1"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></Icon>
                <Text weight="bold" size="sm" className="text-primary-100">MAGNETIC</Text>
              </div>
            </div>
            <div 
              data-cursor-target="true" 
              data-cursor-type="info"
              className="group relative w-32 h-32 flex items-center justify-center cursor-none"
            >
              <div className="absolute inset-0 bg-white/5 rounded-full border border-white/10 group-hover:bg-white/10 transition-all duration-300" />
              <div className="z-10 text-center">
                <Icon size="md" className="text-neutral-400 mb-1"><path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></Icon>
                <Text weight="bold" size="sm" className="text-neutral-300">INFO</Text>
              </div>
            </div>
          </div>
        ),
        usageCode: `<TargetCursor padding={12} stiffness={300} />\n\n<div data-cursor-target="true" data-cursor-type="magnet">Magnetic Target</div>`
      }
    ],
    props: [
      { name: 'color', type: 'string', default: '"var(--primary-500)"', desc: 'Primary brand color.' },
      { name: 'padding', type: 'number', default: '8', desc: 'Padding around the element when snapped.' },
      { name: 'stiffness', type: 'number', default: '400', desc: 'Spring stiffness for the cursor movement.' },
      { name: 'className', type: 'string', default: '""', desc: 'Container class.' }
    ]
  },

  // --- 3D Components ---
  navbar: {
    id: 'navbar',
    name: 'Navbar',
    category: 'Composite',
    subCategory: 'Organisms / Patterns',
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
    category: 'Composite',
    subCategory: 'Organisms / Patterns',
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
    category: 'Reusable',
    subCategory: 'Molecules',
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
    category: 'Reusable',
    subCategory: 'Molecules',
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
    category: 'App-level',
    subCategory: 'Templates / Pages',
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
  },
  // --- New Atomic Components ---
  label: {
    id: 'label',
    name: 'Label',
    category: 'Atomic',
    subCategory: 'Foundation / Primitives',
    description: 'A comprehensive label component used for form elements, with support for various styles, weights, and interactive states.',
    implementationSource: SOURCES.primitives,
    examples: [
      {
        title: 'Variants',
        render: () => (
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <Stack spacing={2}><Label variant="default">Default</Label><Label variant="subtle">Subtle</Label></Stack>
            <Stack spacing={2}><Label variant="primary">Primary</Label><Label variant="info">Info</Label></Stack>
            <Stack spacing={2}><Label variant="success">Success</Label><Label variant="warning">Warning</Label></Stack>
            <Stack spacing={2}><Label variant="danger">Danger</Label><Label variant="outline">Outline</Label></Stack>
            <Stack spacing={2}><Label variant="ghost">Ghost</Label><Label variant="gradient">Gradient</Label></Stack>
          </div>
        ),
        usageCode: `<Label variant="primary">Primary Label</Label>\n<Label variant="ghost">Ghost Label</Label>`
      },
      {
        title: 'Sizes',
        render: () => (
          <Flex gap={6} align="end">
            <Label size="sm">Small Label</Label>
            <Label size="md">Medium Label</Label>
            <Label size="lg">Large Label</Label>
          </Flex>
        ),
        usageCode: `<Label size="sm">Small</Label>\n<Label size="lg">Large</Label>`
      },
      {
        title: 'States',
        render: () => (
          <Flex gap={6} wrap>
            <Label required>Required Field</Label>
            <Label isLoading>Loading State</Label>
            <Label disabled>Disabled Label</Label>
          </Flex>
        ),
        usageCode: `<Label required>Required</Label>\n<Label isLoading>Loading</Label>\n<Label disabled>Disabled</Label>`
      }
    ],
    props: [
      { name: 'variant', type: '"default" | "subtle" | "primary" | "success" | "warning" | "danger" | "info" | "outline" | "ghost" | "gradient"', default: '"default"', desc: 'The visual style of the label.' },
      { name: 'size', type: '"sm" | "md" | "lg"', default: '"md"', desc: 'Size of the label.' },
      { name: 'required', type: 'boolean', default: 'false', desc: 'Adds a red asterisk if true.' },
      { name: 'isLoading', type: 'boolean', default: 'false', desc: 'Shows a loading spinner.' },
      { name: 'disabled', type: 'boolean', default: 'false', desc: 'Applies disabled styles.' },
      { name: 'weight', type: '"regular" | "medium" | "semibold" | "bold"', default: '"medium"', desc: 'Font weight.' }
    ]
  },
  tooltip: {
    id: 'tooltip',
    name: 'Tooltip',
    category: 'Atomic',
    subCategory: 'Foundation / Primitives',
    description: 'Helpful text that appears on hover.',
    examples: [{ title: 'Preview', render: () => <Tooltip content="This is a tooltip"><Button variant="outline">Hover Me</Button></Tooltip>, usageCode: `<Tooltip content="...">\n  <Button>Hover Me</Button>\n</Tooltip>` }],
    props: []
  },
  link: {
    id: 'link',
    name: 'Link',
    category: 'Atomic',
    subCategory: 'Foundation / Primitives',
    description: 'Navigation link component.',
    examples: [{ title: 'Basic', render: () => <a href="#" className="text-primary-600 hover:underline">Click Here</a>, usageCode: `<a href="#" className="text-primary-600 hover:underline">Click Here</a>` }],
    props: []
  },

  // --- New Reusable Components ---
  'input-field': {
    id: 'input-field',
    name: 'InputField',
    category: 'Reusable',
    subCategory: 'Molecules',
    description: 'Input combined with Label and Error text.',
    examples: [{ title: 'Basic', render: () => <Input label="Email" placeholder="you@example.com" />, usageCode: `<Input label="Email" placeholder="..." />` }],
    props: []
  },
  'search-bar': {
    id: 'search-bar',
    name: 'SearchBar',
    category: 'Reusable',
    subCategory: 'Molecules',
    description: 'Search input with icon.',
    examples: [{ title: 'Basic', render: () => <SearchInput placeholder="Search components..." />, usageCode: `<SearchInput placeholder="..." />` }],
    props: []
  },
  'form-field': {
    id: 'form-field',
    name: 'FormField',
    category: 'Reusable',
    subCategory: 'Molecules',
    description: 'Generic wrapper for form controls.',
    examples: [{ title: 'Basic', render: () => <FormWrapper title="Account Settings"><Input label="Display Name" /></FormWrapper>, usageCode: `<FormWrapper title="...">\n  <Input label="..." />\n</FormWrapper>` }],
    props: []
  },
  toast: {
    id: 'toast',
    name: 'Toast',
    category: 'Reusable',
    subCategory: 'Molecules',
    description: 'Floating notification message.',
    examples: [{ title: 'Preview', render: () => <Toast message="Action successful!" type="success" />, usageCode: `<Toast message="..." type="success" />` }],
    props: []
  },
  pagination: {
    id: 'pagination',
    name: 'Pagination',
    category: 'Reusable',
    subCategory: 'Molecules',
    description: 'Page navigation controls.',
    examples: [{ title: 'Basic', render: () => <Pagination currentPage={1} totalPages={10} onPageChange={() => {}} />, usageCode: `<Pagination currentPage={1} totalPages={10} />` }],
    props: []
  },
  'toggle-group': {
    id: 'toggle-group',
    name: 'ToggleGroup',
    category: 'Reusable',
    subCategory: 'Molecules',
    description: 'Group of mutually exclusive buttons.',
    examples: [{ title: 'Basic', render: () => <Flex gap={2}><Button variant="secondary" isActive>Left</Button><Button variant="secondary">Center</Button><Button variant="secondary">Right</Button></Flex>, usageCode: `<Flex gap={2}>\n  <Button isActive>Left</Button>\n  <Button>Right</Button>\n</Flex>` }],
    props: []
  },

  // --- New Composite Components ---
  'data-table': {
    id: 'data-table',
    name: 'DataTable',
    category: 'Composite',
    subCategory: 'Organisms / Patterns',
    description: 'Advanced table with data mapping.',
    examples: [{ title: 'Preview', render: () => <Table headers={['ID', 'User', 'Status']} rows={[['1', 'John Doe', <Badge variant="success">Active</Badge>]]} />, usageCode: `<Table headers={['ID', 'User']} rows={...} />` }],
    props: []
  },
  'pricing-section': {
    id: 'pricing-section',
    name: 'Pricing Section',
    category: 'Composite',
    subCategory: 'Organisms / Patterns',
    description: 'Section showcasing pricing tiers.',
    examples: [{ title: 'Section', render: () => <PricingSection />, usageCode: `<PricingSection />` }],
    props: []
  },
  'hero-section': {
    id: 'hero-section',
    name: 'Hero Section',
    category: 'Composite',
    subCategory: 'Organisms / Patterns',
    description: 'Main landing page header.',
    examples: [{ title: 'Section', render: () => <HeroSection />, usageCode: `<HeroSection />` }],
    props: []
  },
  'feature-grid': {
    id: 'feature-grid',
    name: 'Feature Grid',
    category: 'Composite',
    subCategory: 'Organisms / Patterns',
    description: 'Grid layout for product features.',
    examples: [{ title: 'Section', render: () => <FeatureGrid />, usageCode: `<FeatureGrid />` }],
    props: []
  },
  'dashboard-stats': {
    id: 'dashboard-stats',
    name: 'Dashboard Stats',
    category: 'Composite',
    subCategory: 'Organisms / Patterns',
    description: 'Summary statistics panel.',
    examples: [{ title: 'Preview', render: () => <div className="grid grid-cols-3 gap-4 w-full"><Card className="text-center"><Text size="xs" color="muted">Users</Text><Heading level={4}>2.4k</Heading></Card><Card className="text-center"><Text size="xs" color="muted">Sales</Text><Heading level={4}>$12k</Heading></Card><Card className="text-center"><Text size="xs" color="muted">Orders</Text><Heading level={4}>156</Heading></Card></div>, usageCode: `<div className="grid grid-cols-3 gap-4">\n  <StatCard title="Users" value="2.4k" />\n  <StatCard title="Sales" value="$12k" />\n  <StatCard title="Orders" value="156" />\n</div>` }],
    props: []
  },
  'user-profile-card': {
    id: 'user-profile-card',
    name: 'User Profile Card',
    category: 'Composite',
    subCategory: 'Organisms / Patterns',
    description: 'Card displaying user information.',
    examples: [{ title: 'Preview', render: () => <Card><Flex gap={4} align="center"><Avatar /><Stack><Heading level={4}>User Name</Heading><Text color="muted">Admin</Text></Stack></Flex></Card>, usageCode: `<UserProfileCard />` }],
    props: []
  },
  'checkout-summary': {
    id: 'checkout-summary',
    name: 'Checkout Summary',
    category: 'Composite',
    subCategory: 'Organisms / Patterns',
    description: 'Order details and totals summary.',
    examples: [{ title: 'Preview', render: () => <Card><Stack spacing={4}><Heading level={4}>Summary</Heading><Flex justify="between"><Text>Subtotal</Text><Text weight="bold">$99.00</Text></Flex><Button fullWidth>Checkout</Button></Stack></Card>, usageCode: `<CheckoutSummary />` }],
    props: []
  },
  'multi-step-form': {
    id: 'multi-step-form',
    name: 'Multi-step Form',
    category: 'Composite',
    subCategory: 'Organisms / Patterns',
    description: 'Form wizard with multiple steps.',
    examples: [{ title: 'Preview', render: () => <Stepper steps={['Account', 'Profile', 'Billing']} currentStep={0} />, usageCode: `<Stepper steps={['1', '2']} />` }],
    props: []
  },
  'settings-panel': {
    id: 'settings-panel',
    name: 'Settings Panel',
    category: 'Composite',
    subCategory: 'Organisms / Patterns',
    description: 'Full app settings interface.',
    examples: [{ title: 'Preview', render: () => <Box className="border rounded p-4"><Heading level={3}>Settings</Heading><Divider /><Stack spacing={4}><Switch label="Notifications" /><Button>Save</Button></Stack></Box>, usageCode: `<SettingsPanel />` }],
    props: []
  },
  'comments-section': {
    id: 'comments-section',
    name: 'Comments Section',
    category: 'Composite',
    subCategory: 'Organisms / Patterns',
    description: 'User discussion and feedback area.',
    examples: [{ title: 'Preview', render: () => <Stack spacing={4}><Flex gap={2}><Avatar /><Textarea placeholder="Add a comment..." /></Flex><Button size="sm">Post</Button></Stack>, usageCode: `<CommentsSection />` }],
    props: []
  },
  'activity-feed': {
    id: 'activity-feed',
    name: 'Activity Feed',
    category: 'Composite',
    subCategory: 'Organisms / Patterns',
    description: 'Chronological list of events.',
    examples: [{ title: 'Preview', render: () => <List><ListItem><ListItemText primary="User Joe joined" secondary="2 mins ago" /></ListItem></List>, usageCode: `<ActivityFeed />` }],
    props: []
  },
  'product-grid': {
    id: 'product-grid',
    name: 'Product Grid',
    category: 'Composite',
    subCategory: 'Organisms / Patterns',
    description: 'Showcase grid for e-commerce products.',
    examples: [{ title: 'Preview', render: () => <div className="grid grid-cols-2 gap-4"><Card><Box className="h-40 bg-neutral-100 mb-2" /><Heading level={5}>Product A</Heading></Card><Card><Box className="h-40 bg-neutral-100 mb-2" /><Heading level={5}>Product B</Heading></Card></div>, usageCode: `<ProductGrid />` }],
    props: []
  },

  'wizard': {
    id: 'wizard',
    name: 'Wizard',
    category: 'Composite',
    subCategory: 'Organisms / Patterns',
    description: 'A professional multi-step indicator for complex workflows, supporting multiple orientations and premium visual styles.',
    implementationSource: SOURCES.wizard,
    examples: [
      {
        title: 'Orientations',
        render: () => {
          const steps = [
            { id: 1, title: 'Identity', description: 'Personal details' },
            { id: 2, title: 'Security', description: 'Account safety' },
            { id: 3, title: 'Finalize', description: 'Review & submit' }
          ];
          return (
            <Stack spacing={12} className="w-full">
              <Stack spacing={4}>
                <Caption>Horizontal (Default)</Caption>
                <Wizard steps={steps} currentStep={1} />
              </Stack>
              <Stack spacing={4}>
                <Caption>Vertical</Caption>
                <Wizard steps={steps} currentStep={1} orientation="vertical" />
              </Stack>
            </Stack>
          );
        },
        usageCode: `<Wizard \n  orientation="vertical" \n  steps={[...]} \n  currentStep={1} \n/>`
      },
      {
        title: 'Visual Styles',
        render: () => {
          const steps = [{ title: 'Step One' }, { title: 'Step Two' }, { title: 'Step Three' }];
          return (
            <Stack spacing={8} className="w-full">
              <Stack spacing={2}><Caption>Glassmorphism (Premium)</Caption><Wizard variant="glass" steps={steps} currentStep={1} /></Stack>
              <Stack spacing={2}><Caption>Gradient Flow</Caption><Wizard variant="gradient" steps={steps} currentStep={1} /></Stack>
              <Stack spacing={2}><Caption>Filled Container</Caption><Wizard variant="filled" steps={steps} currentStep={0} /></Stack>
              <Stack spacing={2}><Caption>Simple Outline</Caption><Wizard variant="outline" steps={steps} currentStep={2} /></Stack>
              <Stack spacing={2}><Caption>Minimalist</Caption><Wizard variant="minimal" steps={steps} currentStep={1} /></Stack>
            </Stack>
          );
        },
        usageCode: `<Wizard variant="glass" steps={...} />\n<Wizard variant="gradient" steps={...} />\n<Wizard variant="minimal" steps={...} />`
      },
      {
        title: 'Step States',
        render: () => {
          const steps: any[] = [
            { id: 1, title: 'Completed', status: 'completed' },
            { id: 2, title: 'Active', status: 'active' },
            { id: 3, title: 'Error State', status: 'error', description: 'Invalid data provided' },
            { id: 4, title: 'Disabled', status: 'disabled' },
            { id: 5, title: 'Inactive', status: 'inactive' }
          ];
          return <Wizard steps={steps} currentStep={1} />;
        },
        usageCode: `<Wizard \n  steps={[\n    { title: 'Done', status: 'completed' },\n    { title: 'Error', status: 'error' },\n    { title: 'Wait', status: 'disabled' }\n  ]} \n/>`
      },
      {
        title: 'Sizes',
        render: () => {
          const steps = [{ title: 'Start' }, { title: 'Process' }, { title: 'Finish' }];
          return (
            <Stack spacing={8} className="w-full">
              <Stack spacing={2}><Caption>Small (sm)</Caption><Wizard size="sm" steps={steps} currentStep={1} /></Stack>
              <Stack spacing={2}><Caption>Medium (md)</Caption><Wizard size="md" steps={steps} currentStep={1} /></Stack>
              <Stack spacing={2}><Caption>Large (lg)</Caption><Wizard size="lg" steps={steps} currentStep={1} /></Stack>
            </Stack>
          );
        },
        usageCode: `<Wizard size="sm" steps={...} />\n<Wizard size="lg" steps={...} />`
      }

    ],
    props: [
      { name: 'steps', type: 'WizardStep[]', default: '[]', desc: 'Array of step objects.' },
      { name: 'currentStep', type: 'number', default: '0', desc: 'Active step index.' },
      { name: 'orientation', type: '"horizontal" | "vertical"', default: '"horizontal"', desc: 'Layout direction.' },
      { name: 'size', type: '"sm" | "md" | "lg"', default: '"md"', desc: 'Visual scale.' },
      { name: 'variant', type: '"default" | "minimal" | "filled" | "outline" | "glass" | "gradient"', default: '"default"', desc: 'Visual style.' },
      { name: 'color', type: '"primary" | "secondary" | "success" | "warning" | "danger" | "neutral"', default: '"primary"', desc: 'Brand color theme.' },
      { name: 'onStepClick', type: '(index: number) => void', default: '-', desc: 'Callback when a step is clicked.' }
    ]
  },

  // --- New App-Level Components ---
  'login-page': {
    id: 'login-page',
    name: 'Login Page',
    category: 'App-level',
    subCategory: 'Templates / Pages',
    description: 'Complete user login screen layout.',
    examples: [{ title: 'Page', render: () => <div className="h-96 scale-75 origin-top border"><AuthLayout title="Login"><LoginForm /></AuthLayout></div>, usageCode: `<LoginPage />` }],
    props: []
  },
  'signup-page': {
    id: 'signup-page',
    name: 'Signup Page',
    category: 'App-level',
    subCategory: 'Templates / Pages',
    description: 'Complete user registration layout.',
    examples: [{ title: 'Page', render: () => <div className="h-96 scale-75 origin-top border"><AuthLayout title="Register"><SignupForm /></AuthLayout></div>, usageCode: `<SignupPage />` }],
    props: []
  },
  'dashboard-page': {
    id: 'dashboard-page',
    name: 'Dashboard Page',
    category: 'App-level',
    subCategory: 'Templates / Pages',
    description: 'Main application dashboard template.',
    examples: [{ title: 'Page', render: () => <div className="h-96 scale-75 origin-top border"><DashboardLayout>Content</DashboardLayout></div>, usageCode: `<DashboardPage />` }],
    props: []
  },
  'analytics-page': {
    id: 'analytics-page',
    name: 'Analytics Page',
    category: 'App-level',
    subCategory: 'Templates / Pages',
    description: 'Data visualization and reporting layout.',
    examples: [{ title: 'Page', render: () => <div className="h-96 scale-75 origin-top border border-dashed flex items-center justify-center">Analytics Template Preview</div>, usageCode: `<AnalyticsPage />` }],
    props: []
  },
  'billing-page': {
    id: 'billing-page',
    name: 'Billing Page',
    category: 'App-level',
    subCategory: 'Templates / Pages',
    description: 'Invoicing and nested subscriptions layout.',
    examples: [{ title: 'Page', render: () => <div className="h-96 scale-75 origin-top border border-dashed flex items-center justify-center">Billing Template Preview</div>, usageCode: `<BillingPage />` }],
    props: []
  },
  'profile-page': {
    id: 'profile-page',
    name: 'Profile Page',
    category: 'App-level',
    subCategory: 'Templates / Pages',
    description: 'User information and profile management.',
    examples: [{ title: 'Page', render: () => <div className="h-96 scale-75 origin-top border border-dashed flex items-center justify-center">Profile Template Preview</div>, usageCode: `<ProfilePage />` }],
    props: []
  },
  'settings-page': {
    id: 'settings-page',
    name: 'Settings Page',
    category: 'App-level',
    subCategory: 'Templates / Pages',
    description: 'Application-wide settings template.',
    examples: [{ title: 'Page', render: () => <div className="h-96 scale-75 origin-top border border-dashed flex items-center justify-center">Settings Template Preview</div>, usageCode: `<SettingsPage />` }],
    props: []
  },
  'landing-page': {
    id: 'landing-page',
    name: 'Landing Page',
    category: 'App-level',
    subCategory: 'Templates / Pages',
    description: 'Modular landing page for products.',
    examples: [{ title: 'Page', render: () => <div className="h-96 scale-75 origin-top border"><HeroSection /></div>, usageCode: `<LandingPage />` }],
    props: []
  },
  'checkout-page': {
    id: 'checkout-page',
    name: 'Checkout Page',
    category: 'App-level',
    subCategory: 'Templates / Pages',
    description: 'E-commerce checkout process flow.',
    examples: [{ title: 'Page', render: () => <div className="h-96 scale-75 origin-top border border-dashed flex items-center justify-center">Checkout Template Preview</div>, usageCode: `<CheckoutPage />` }],
    props: []
  },
  'admin-panel': {
    id: 'admin-panel',
    name: 'Admin Panel',
    category: 'App-level',
    subCategory: 'Templates / Pages',
    description: 'Back-office management interface.',
    examples: [{ title: 'Page', render: () => <div className="h-96 scale-75 origin-top border border-dashed flex items-center justify-center">Admin Template Preview</div>, usageCode: `<AdminPanel />` }],
    props: []
  },
  'blog-page': {
    id: 'blog-page',
    name: 'Blog Page',
    category: 'App-level',
    subCategory: 'Templates / Pages',
    description: 'Content-focused blog layout template.',
    examples: [{ title: 'Page', render: () => <div className="h-96 scale-75 origin-top border border-dashed flex items-center justify-center">Blog Template Preview</div>, usageCode: `<BlogPage />` }],
    props: []
  },
  'auth-flow': {
    id: 'auth-flow',
    name: 'Authentication Flow',
    category: 'App-level',
    subCategory: 'Templates / Pages',
    description: 'A comprehensive authentication system that handles the entire user lifecycle from sign-in to security verification. It manages internal state for various steps and provides a seamless user experience.',
    implementationSource: SOURCES.authFlow,
    examples: [
      {
        title: 'Complete Flow',
        description: 'The full interactive authentication experience starting from the login screen.',
        render: () => (
          <div className="max-w-md mx-auto border border-neutral-200 dark:border-neutral-800 rounded-3xl shadow-2xl overflow-hidden h-[640px] relative bg-white dark:bg-neutral-900">
             <AuthFlow isFullPage={false} />
          </div>
        ),
        usageCode: `<AuthFlow initialStep="login" />`
      },
      {
        title: 'Signup View',
        description: 'Direct access to the signup screen with password strength validation.',
        render: () => (
          <div className="max-w-md mx-auto border border-neutral-200 dark:border-neutral-800 rounded-3xl shadow-2xl overflow-hidden h-[640px] relative bg-white dark:bg-neutral-900">
             <AuthFlow initialStep="signup" isFullPage={false} />
          </div>
        ),
        usageCode: `<AuthFlow initialStep="signup" />`
      },
      {
        title: 'Password Recovery',
        description: 'The password reset initiation flow.',
        render: () => (
          <div className="max-w-md mx-auto border border-neutral-200 dark:border-neutral-800 rounded-3xl shadow-2xl overflow-hidden h-[480px] relative bg-white dark:bg-neutral-900">
             <AuthFlow initialStep="forgot-password" isFullPage={false} />
          </div>
        ),
        usageCode: `<AuthFlow initialStep="forgot-password" />`
      },
      {
        title: 'Security Verification',
        description: 'OTP verification screen with resend logic.',
        render: () => (
          <div className="max-w-md mx-auto border border-neutral-200 dark:border-neutral-800 rounded-3xl shadow-2xl overflow-hidden h-[480px] relative bg-white dark:bg-neutral-900">
             <AuthFlow initialStep="otp" isFullPage={false} />
          </div>
        ),
        usageCode: `<AuthFlow initialStep="otp" />`
      }
    ],
    props: [
      { name: 'initialStep', type: 'login | signup | forgot-password | otp | success', default: 'login', desc: 'The starting screen of the flow.' },
      { name: 'onSuccess', type: '(data: any) => void', default: '-', desc: 'Callback invoked after successful authentication.' },
      { name: 'logo', type: 'ReactNode', default: 'Default Logo', desc: 'Custom logo to display in the layout.' }
    ]
  },
  'admin-dashboard': {
    id: 'admin-dashboard',
    name: 'Admin Dashboard',
    category: 'App-level',
    subCategory: 'Templates / Pages',
    description: 'A complete, ready-to-use admin dashboard template featuring a collapsible sidebar, utility topbar, KPI cards with trend indicators, and an advanced data table.',
    implementationSource: SOURCES.adminDashboard,
    examples: [
      {
        title: 'Complete Admin Layout',
        description: 'The full dashboard experience with sidebar, topbar, and sample content.',
        render: () => (
          <div className="w-full h-[600px] border border-neutral-200 dark:border-neutral-800 rounded-3xl overflow-hidden glassmorphism shadow-2xl relative transform-gpu">
             <div className="absolute inset-0 scale-[0.5] origin-top-left w-[200%] h-[200%]">
               <AdminDashboard user={{ name: 'Alex Thompson', role: 'System Admin' }}>
                  <Stack spacing={8}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      <StatCard 
                        stat={{ 
                          label: 'Total Revenue', 
                          value: '$128,430', 
                          trend: { value: 12.5, isUp: true },
                        }} 
                      />
                      <StatCard 
                        stat={{ 
                          label: 'Active Users', 
                          value: '2,842', 
                          trend: { value: 8.2, isUp: true },
                        }} 
                      />
                      <StatCard 
                        stat={{ 
                          label: 'New Orders', 
                          value: '432', 
                          trend: { value: 3.1, isUp: false },
                        }} 
                      />
                      <StatCard 
                        stat={{ 
                          label: 'Conversion Rate', 
                          value: '4.8%', 
                          trend: { value: 0.2, isUp: true },
                        }} 
                      />
                    </div>
                    <Card className="p-6">
                      <div className="h-64">
                        <MiniChart 
                          type="line" 
                          data={[30, 45, 32, 60, 55, 80, 75, 90, 85, 100]} 
                          color="#0ea5e9"
                          height={200}
                        />
                      </div>
                    </Card>
                    <AdvancedTable 
                      columns={[
                        { key: 'customer', header: 'Customer' },
                        { key: 'status', header: 'Status', render: (val) => <Badge variant={val === 'Paid' ? 'success' : 'warning'}>{val}</Badge> },
                        { key: 'amount', header: 'Amount' }
                      ]}
                      data={[
                        { customer: 'Sarah Wilson', status: 'Paid', amount: '$432.00' },
                        { customer: 'James Miller', status: 'Pending', amount: '$120.50' }
                      ]}
                    />
                  </Stack>
               </AdminDashboard>
             </div>
          </div>
        ),
        usageCode: `<AdminDashboard user={user}>\n  <KPICards data={stats} />\n  <Charts data={analytics} />\n  <AdvancedTable columns={cols} data={rows} />\n</AdminDashboard>`
      }
    ],
    props: [
      { name: 'user', type: '{ name, role, avatar }', default: '-', desc: 'User profile data for the topbar.' },
      { name: 'isLoading', type: 'boolean', default: 'false', desc: 'Global loading state.' },
      { name: 'children', type: 'ReactNode', default: '-', desc: 'Main dashboard content.' }
    ]
  },
  'crud-management': {
    id: 'crud-management',
    name: 'CRUD Management',
    category: 'App-level',
    subCategory: 'Templates / Pages',
    description: 'A complete, production-ready user management system demonstrating full CRUD workflows and permission-aware UI.',
    implementationSource: SOURCES.crudManagement,
    examples: [
      {
        title: 'User Management Dashboard',
        description: 'The main interface for managing team members with search, filters, and pagination.',
        render: () => <UserManager initialRole="Admin" />,
        usageCode: `<UserManager initialRole="Admin" />`
      }
    ],
    props: [
      { name: 'initialRole', type: 'Admin | Editor | Viewer', default: 'Admin', desc: 'Starting role for permission simulation.' }
    ]
  }
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
        { name: 'variant', type: 'select', default: 'border', options: ['border', 'ring', 'dots', 'pulse', 'bars', 'gradient'] },
        { name: 'size', type: 'select', default: 'md', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
        { name: 'color', type: 'select', default: 'primary', options: ['primary', 'secondary', 'success', 'warning', 'danger', 'neutral', 'white'] },
        { name: 'placement', type: 'select', default: 'inline', options: ['inline', 'centered', 'fullscreen', 'overlay'] },
        { name: 'label', type: 'string', default: '' },
        { name: 'speed', type: 'select', default: 'normal', options: ['slow', 'normal', 'fast'] },
        { name: 'thickness', type: 'select', default: 'normal', options: ['thin', 'normal', 'thick'] },
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
    ],
    'crud-management': [
      { name: 'initialRole', type: 'select', default: 'Admin', options: ['Admin', 'Editor', 'Viewer'] },
    ],
    avatar: [
      { name: 'variant', type: 'select', default: 'circle', options: ['circle', 'rounded', 'square'] },
      { name: 'size', type: 'select', default: 'md', options: ['sm', 'md', 'lg', 'xl', '2xl'] },
      { name: 'status', type: 'select', default: '', options: ['', 'online', 'offline', 'busy', 'away'] },
      { name: 'fallback', type: 'string', default: 'U' },
    ],
    'target-cursor': [
      { name: 'magneticStrength', type: 'number', default: '0.4' },
      { name: 'hoverScale', type: 'number', default: '1.6' },
    ],
    wizard: [
      { name: 'orientation', type: 'select', default: 'horizontal', options: ['horizontal', 'vertical'] },
      { name: 'size', type: 'select', default: 'md', options: ['sm', 'md', 'lg'] },
      { name: 'variant', type: 'select', default: 'default', options: ['default', 'minimal', 'filled', 'outline', 'glass', 'gradient'] },
      { name: 'color', type: 'select', default: 'primary', options: ['primary', 'secondary', 'success', 'warning', 'danger', 'neutral'] },
      { name: 'currentStep', type: 'number', default: '1' },
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
      <div className="px-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => window.location.hash = `#/components/${doc.category}`}
          className="group -ml-3 text-neutral-500 hover:text-primary-600 transition-colors"
          icon={
            <Icon size="xs" className="group-hover:-translate-x-1 transition-transform">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </Icon>
          }
        >
          Back to Components
        </Button>
      </div>

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
                                          if (componentId === 'crud-management') return <UserManager {...activeProps} />;
                                          if (componentId === 'avatar') return <Avatar {...activeProps} />;
                                          if (componentId === 'wizard') return <Wizard steps={[{id: 1, title: 'Step 1', description: 'Setup'}, {id: 2, title: 'Step 2', description: 'Config'}, {id: 3, title: 'Step 3', description: 'Done'}]} {...activeProps} />;
                                          if (componentId === 'wizard') return <Wizard steps={[{id: 1, title: 'Step 1', description: 'Setup'}, {id: 2, title: 'Step 2', description: 'Config'}, {id: 3, title: 'Step 3', description: 'Done'}]} {...activeProps} />;
                                          if (componentId === 'target-cursor') return (
                                            <div className="relative h-64 w-full border border-dashed rounded flex flex-col items-center justify-center bg-neutral-50 dark:bg-neutral-900/50">
                                              <TargetCursor {...activeProps} />
                                              <Text tone="muted" className="mb-8">Hover the target below</Text>
                                              <div 
                                                data-cursor-target="true" 
                                                className="w-24 h-24 bg-primary-500 rounded-full flex items-center justify-center shadow-lg cursor-none"
                                              >
                                                <Icon size="md" className="text-white"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></Icon>
                                              </div>
                                            </div>
                                          );
                                          return doc.examples[0].render();
                                      })()}
                                  </div>
                                </div>

                                <div className="space-y-4">
                                  <CodeBlock code={generateCode(componentId, activeProps)} showLineNumbers={false} />
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
                                             { id: 'usage', label: 'Usage Example', content: <CodeBlock code={example.usageCode} showLineNumbers={false} /> },
                                             { 
                                               id: 'source', 
                                               label: 'Implementation Source', 
                                               content: doc.implementationSource ? (
                                                 <div className="space-y-4">
                                                   <Text size="sm" className="px-4 text-neutral-400">Full React component implementation</Text>
                                                   <CodeBlock code={doc.implementationSource} />
                                                   {doc.cssSource && (
                                                     <>
                                                       <Text size="sm" className="px-4 text-neutral-400">CSS Module</Text>
                                                       <CodeBlock code={doc.cssSource} language="css" />
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
                             <CodeBlock code={doc.implementationSource} />
                          </div>
                          
                          {doc.cssSource && (
                            <div className="space-y-4">
                               <CodeBlock code={doc.cssSource} language="css" />
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

export default ComponentPage;
