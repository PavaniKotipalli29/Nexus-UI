import React, { useState } from 'react';
import { Heading, Text, Badge, Button, IconButton, Avatar, AvatarGroup, Box, Flex, Icon, SplitButton, HamburgerButton, Label, Caption, Code, Blockquote } from '../components/ui/Primitives';
import { Card, Stack, Container } from '../components/ui/Layout';
import { Input, Checkbox, Switch, Textarea, Select, Radio, Slider, FormWrapper, LoginForm, SignupForm, DatePicker, TimePicker, SearchInput, FileUpload, OTPVerification } from '../components/ui/Forms';
import { Spinner, Skeleton } from '../components/ui/Feedback';
import { ProgressBar } from '../components/ui/progress/ProgressBar';
import { ColorPalette, TypographyScale, SpacingScale, DesignTokens, MotionTokens, CSSReset, ThemeProviderInfo } from '../components/ui/Foundations';
import { Modal, Drawer, Tooltip, Popover, Tabs, Accordion, Dropdown, Table, Pagination, Alert, Toast, NotificationBanner, EmptyState, Wizard, MagicBento } from '../components/ui/Composite';
import { List, ListItem, ListItemIcon, ListItemText, ListDivider } from '../components/ui/list/List';
import { Breadcrumbs, Stepper, CommandPalette } from '../components/ui/Navigation';
import { AuthLayout, DashboardLayout, HeroSection, FeatureGrid, PricingSection, Footer, Page404, ErrorPage } from '../components/ui/Patterns';
import { ThemeToggle, CopyToClipboard, CodeBlock, Portal, ResponsiveVisibility, VisuallyHidden, FocusTrap } from '../components/ui/Utilities';
import { Sidebar } from '../components/patterns/sidebar';
import { Navbar } from '../components/navigation/Navbar';
import { LandingPage } from '../components/templates/landing-page';
import { AuthFlow } from '../components/ui/AuthFlow';
import { UserManager } from '../components/ui/CRUDManager';
import { AdminDashboard, StatCard, MiniChart, AdvancedTable } from '../components/ui/Dashboard';
import { Orbit } from '../components/ui/Orbit';
import { TargetCursor } from '../components/ui/TargetCursor';
import { ScrollStack } from '../components/ui/ScrollStack';
import { PillNav } from '../components/ui/PillNav';
import { EcommerceTemplate } from '../components/ui/Ecommerce';
import { ErrorBoundary } from '../components/ui/ErrorBoundary';
import { Divider } from '../components/ui/divider';
import SearchBar from '../components/ui/SearchBar';

// Import standalone snippets as raw text for documentation
import buttonSnippet from '../docs-snippets/button.tsx?raw';
import iconSnippet from '../docs-snippets/icon.tsx?raw';
import badgeSnippet from '../docs-snippets/badge.tsx?raw';
import avatarSnippet from '../docs-snippets/avatar.tsx?raw';
import checkboxSnippet from '../docs-snippets/checkbox.tsx?raw';
import inputSnippet from '../docs-snippets/input.tsx?raw';
import dividerSnippet from '../docs-snippets/divider.tsx?raw';
import radioSnippet from '../docs-snippets/radio.tsx?raw';
import searchBarSnippet from '../docs-snippets/search-bar.tsx?raw';
import tabsSnippet from '../docs-snippets/tabs.tsx?raw';

const snippetContent: Record<string, string> = {
  button: buttonSnippet,
  icon: iconSnippet,
  badge: badgeSnippet,
  avatar: avatarSnippet,
  checkbox: checkboxSnippet,
  input: inputSnippet,
  divider: dividerSnippet,
  radio: radioSnippet,
  'search-bar': searchBarSnippet,
  tabs: tabsSnippet,
};




export interface ComponentDoc {
  id: string;
  name: string;
  category: 'Atomic' | 'Reusable' | 'Composite' | 'App-level';
  subCategory?: string;
  description: string;
  examples: {
    title: string;
    description?: string;
    render: () => React.ReactNode;
    usageCode: string;
  }[];
  props: { name: string; type: string; default: string; desc: string }[];
  fullSource?: string;
}



const docs: Record<string, ComponentDoc> = {
  // --- 1D Components ---
  button: {
    id: 'button',
    name: 'Button',
    category: 'Atomic',
    subCategory: 'Foundation / Primitives',
    description: 'Buttons allow users to take actions, and make choices, with a single tap.',
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
  icon: {
    id: 'icon',
    name: 'Icon',
    category: 'Atomic',
    subCategory: 'Foundation / Primitives',
    description: 'SVG icons with support for outline and solid variants.',
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
    description: 'A premium, animated checkbox component with support for multiple shapes and smooth path-drawing transitions.',
    examples: [
      {
        title: 'Shapes',
        description: 'Choose between square, squircle, and circle variants.',
        render: () => (
          <Flex gap={8}>
            <Checkbox label="Square (Default)" variant="square" defaultChecked />
            <Checkbox label="Squircle" variant="squircle" defaultChecked />
            <Checkbox label="Circle" variant="circle" defaultChecked />
          </Flex>
        ),
        usageCode: `<Checkbox variant="square" label="Default" />\n<Checkbox variant="squircle" label="Squircle" />\n<Checkbox variant="circle" label="Circle" />`
      },
      {
        title: 'States',
        render: () => (
          <Flex gap={8}>
            <Checkbox label="Unchecked" />
            <Checkbox label="Checked" checked />
            <Checkbox label="Disabled" disabled />
            <Checkbox label="Disabled Checked" disabled checked />
          </Flex>
        ),
        usageCode: `<Checkbox label="Unchecked" />\n<Checkbox checked />\n<Checkbox disabled />`
      },
      {
        title: 'Interactions',
        render: () => (
          <Flex gap={8}>
            <Checkbox label="Hover Scale" hoverScale={1.2} interactive defaultChecked />
            <Checkbox label="Tap Compress" tapScale={0.8} interactive />
            <Checkbox label="Custom Color" hoverColor="#f43f5e" interactive />
          </Flex>
        ),
        usageCode: `<Checkbox hoverScale={1.2} interactive />\n<Checkbox tapScale={0.8} interactive />`
      }
    ],
    props: [
      { name: 'label', type: 'string', default: '-', desc: 'Label text.' },
      { name: 'variant', type: 'square | squircle | circle', default: 'square', desc: 'The shape of the checkbox.' },
      { name: 'checked', type: 'boolean', default: 'false', desc: 'Controlled checked state.' },
      { name: 'defaultChecked', type: 'boolean', default: 'false', desc: 'Initial checked state.' },
      { name: 'onChange', type: '(e: ChangeEvent) => void', default: '-', desc: 'Change event handler.' },
      { name: 'disabled', type: 'boolean', default: 'false', desc: 'Disabled state.' },
      { name: 'interactive', type: 'boolean', default: 'false', desc: 'Enables hover/tap effects.' },
      { name: 'hoverScale', type: 'number', default: '1.05', desc: 'Scale on hover.' },
      { name: 'tapScale', type: 'number', default: '0.95', desc: 'Scale on tap.' }
    ]
  },
  radio: {
    id: 'radio',
    name: 'Radio',
    category: 'Atomic',
    subCategory: 'Foundation / Primitives',
    description: 'A premium, animated radio component with smooth spring-based selection transitions and high-end visual feedback.',
    examples: [
      {
        title: 'Basic Usage',
        description: 'Radio buttons allow single selection from a predefined set of options.',
        render: () => (
          <Stack spacing={3}>
            <Radio name="plan-basic" label="Standard Plan" defaultChecked />
            <Radio name="plan-basic" label="Premium Plan" />
            <Radio name="plan-basic" label="Enterprise Plan" />
          </Stack>
        ),
        usageCode: `<Stack spacing={3}>\n  <Radio name="plan" label="Standard" defaultChecked />\n  <Radio name="plan" label="Premium" />\n</Stack>`
      },
      {
        title: 'States',
        render: () => (
          <Flex gap={8} wrap="wrap">
            <Radio label="Checked" checked readOnly />
            <Radio label="Unchecked" checked={false} readOnly />
            <Radio label="Disabled" disabled />
            <Radio label="Disabled Checked" disabled checked readOnly />
          </Flex>
        ),
        usageCode: `<Radio label="Checked" checked />\n<Radio disabled />`
      },
      {
        title: 'Interactions',
        render: () => (
          <Flex gap={8}>
            <Radio label="Hover Scale" hoverScale={1.2} interactive checked readOnly />
            <Radio label="Tap Compress" tapScale={0.8} interactive />
            <Radio label="Custom Color" hoverColor="#10b981" interactive />
          </Flex>
        ),
        usageCode: `<Radio hoverScale={1.2} interactive />\n<Radio tapScale={0.8} interactive />`
      }
    ],
    props: [
      { name: 'label', type: 'string', default: '-', desc: 'Label text.' },
      { name: 'name', type: 'string', default: '-', desc: 'The group name for the radio buttons.' },
      { name: 'checked', type: 'boolean', default: 'false', desc: 'Controlled checked state.' },
      { name: 'defaultChecked', type: 'boolean', default: 'false', desc: 'Initial checked state.' },
      { name: 'onChange', type: '(e: ChangeEvent) => void', default: '-', desc: 'Change event handler.' },
      { name: 'disabled', type: 'boolean', default: 'false', desc: 'Disabled state.' },
      { name: 'interactive', type: 'boolean', default: 'false', desc: 'Enables hover/tap effects.' },
      { name: 'hoverScale', type: 'number', default: '1.05', desc: 'Scale on hover.' },
      { name: 'tapScale', type: 'number', default: '0.95', desc: 'Scale on tap.' }
    ]
  },
  switch: {
    id: 'switch',
    name: 'Switch',
    category: 'Atomic',
    subCategory: 'Foundation / Primitives',
    description: 'A premium toggle component with smooth spring animations and multiple design variants.',
    examples: [
      {
        title: 'Variants',
        render: () => {
          const [s1, setS1] = useState(true);
          const [s2, setS2] = useState(true);
          const [s3, setS3] = useState(true);
          return (
            <Stack spacing={4}>
              <Switch label="Default Style" checked={s1} onChange={setS1} variant="default" />
              <Switch label="iOS Style" checked={s2} onChange={setS2} variant="ios" />
              <Switch label="Slim Style" checked={s3} onChange={setS3} variant="slim" />
            </Stack>
          );
        },
        usageCode: `<Switch variant="default" label="Default" />\n<Switch variant="ios" label="iOS" />\n<Switch variant="slim" label="Slim" />`
      },
      {
        title: 'States',
        render: () => (
          <Flex gap={8}>
            <Switch label="Disabled Off" checked={false} onChange={() => {}} disabled />
            <Switch label="Disabled On" checked={true} onChange={() => {}} disabled />
          </Flex>
        ),
        usageCode: `<Switch disabled label="Disabled" />`
      }
    ],
    props: [
      { name: 'label', type: 'string', default: '-', desc: 'Label text.' },
      { name: 'variant', type: 'default | ios | slim', default: 'default', desc: 'Design variant.' },
      { name: 'checked', type: 'boolean', default: '-', desc: 'Controlled checked state.' },
      { name: 'onChange', type: '(checked: boolean) => void', default: '-', desc: 'Change handler.' },
      { name: 'disabled', type: 'boolean', default: 'false', desc: 'Disabled state.' }
    ]
  },
  slider: {
    id: 'slider',
    name: 'Slider',
    category: 'Atomic',
    subCategory: 'Foundation / Primitives',
    description: 'Select a value from a range.',
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
    description: 'Visually separates content with support for various styles, text labels, and orientations.',
    examples: [
      {
        title: 'With Text',
        render: () => (
          <Stack spacing={4}>
            <Divider label="Center" />
            <Divider label="Left" labelPosition="left" />
            <Divider label="Right" labelPosition="right" />
          </Stack>
        ),
        usageCode: `<Divider label="Center" />
<Divider label="Left" labelPosition="left" />
<Divider label="Right" labelPosition="right" />`
      },
      {
         title: 'Vertical',
         render: () => (
            <Flex className="h-12 items-center border p-2 rounded">
               <Text>Item 1</Text>
               <Divider orientation="vertical" />
               <Text>Item 2</Text>
               <Divider orientation="vertical" variant="dashed" />
               <Text>Item 3</Text>
            </Flex>
         ),
         usageCode: `<Flex className="h-12 items-center">
  <Text>Item 1</Text>
  <Divider orientation="vertical" />
  <Text>Item 2</Text>
</Flex>`
      }
    ],
    props: [
      { name: 'variant', type: 'solid | dashed | dotted | gradient | gradient-animated', default: 'solid', desc: 'Visual style of the line.' },
      { name: 'orientation', type: 'horizontal | vertical', default: 'horizontal', desc: 'Direction of the divider.' },
      { name: 'thickness', type: 'number | string', default: '1px', desc: 'Thickness of the line.' },
      { name: 'color', type: 'string', default: '-', desc: 'Custom color override.' },
      { name: 'label', type: 'ReactNode', default: '-', desc: 'Content to display within the divider.' },
      { name: 'labelPosition', type: 'left | center | right', default: 'center', desc: 'Position of the label (horizontal only).' },
      { name: 'labelBackground', type: 'string', default: '-', desc: 'Background color for label text (useful for transparency).' }
    ]
  },
  'progress-bar': {
    id: 'progress-bar',
    name: 'Progress Bar',
    category: 'Atomic',
    subCategory: 'Foundation / Primitives',
    description: 'Visual indicator of progress.',
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
    description: 'A premium, feature-rich tabs component with 8 professional variants, advanced animations, and intensive interactive props.',
    examples: [
      {
        title: 'Modern Defaults',
        description: 'Choose between standard underline and segmented control styles.',
        render: () => (
          <Stack spacing={8} className="w-full">
            <div>
              <Text variant="label-md" tone="muted" className="mb-4">Underline (Default)</Text>
              <Tabs items={[
                { id: 'u1', label: 'Dashboard', content: <Text>Dashboard Overview</Text> },
                { id: 'u2', label: 'Team', content: <Text>Team Settings</Text> },
                { id: 'u3', label: 'Projects', content: <Text>Project List</Text> },
              ]} />
            </div>
            <div>
              <Text variant="label-md" tone="muted" className="mb-4">Segmented Control</Text>
              <Tabs variant="segmented" fullWidth items={[
                { id: 's1', label: 'Monthly', content: <Text className="py-4 font-bold">$19/mo</Text> },
                { id: 's2', label: 'Yearly', content: <Text className="py-4 font-bold">$180/yr</Text> },
              ]} />
            </div>
          </Stack>
        ),
        usageCode: `const items = [
  { id: '1', label: 'Dashboard', content: <Dashboard /> },
  { id: '2', label: 'Team', content: <Team /> },
];

<Tabs variant="underline" items={items} />
<Tabs variant="segmented" fullWidth items={items} />`
      },
      {
        title: 'Style Variants',
        description: 'Professional variants for different UI needs.',
        render: () => (
          <Stack spacing={8} className="w-full">
            <Flex gap={8} wrap="wrap">
              <div className="flex-1 min-w-[200px]">
                <Text variant="label-md" tone="muted" className="mb-4">Pills</Text>
                <Tabs variant="pills" items={[
                  { id: 'p1', label: 'Active', content: 'Active Items' },
                  { id: 'p2', label: 'Closed', content: 'Closed Items' },
                ]} />
              </div>
              <div className="flex-1 min-w-[200px]">
                <Text variant="label-md" tone="muted" className="mb-4">Ghost</Text>
                <Tabs variant="ghost" items={[
                  { id: 'g1', label: 'Latest', content: 'Latest Updates' },
                  { id: 'g2', label: 'Top', content: 'Top Rated' },
                ]} />
              </div>
            </Flex>
            <div>
              <Text variant="label-md" tone="muted" className="mb-4">Contained</Text>
              <Tabs variant="contained" items={[
                { id: 'c1', label: 'Tab A', content: 'Content A' },
                { id: 'c2', label: 'Tab B', content: 'Content B' },
                { id: 'c3', label: 'Tab C', content: 'Content C' },
              ]} />
            </div>
          </Stack>
        ),
        usageCode: `<Tabs variant="pills" size="sm" items={items} />
<Tabs variant="ghost" indicatorColor="#f43f5e" items={items} />
<Tabs variant="contained" items={items} />`
      },
      {
        title: 'Vertical Sidebar',
        description: 'Scales well with many tabs or complex descriptions.',
        render: () => (
          <div className="border border-neutral-200 dark:border-neutral-800 rounded-xl p-4 min-w-[300px]">
            <Tabs 
              variant="vertical"
              items={[
                { id: 'v1', label: 'Account', description: 'Personal information', icon: <Icon size="xs"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></Icon>, content: 'Account Details' },
                { id: 'v2', label: 'Security', description: 'Password and MFA', icon: <Icon size="xs"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></Icon>, content: 'Security Settings' },
                { id: 'v3', label: 'Notifications', description: 'Alert preferences', icon: <Icon size="xs"><path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></Icon>, content: 'Notification Preferences' },
              ]} 
            />
          </div>
        ),
        usageCode: `<Tabs 
  variant="vertical" 
  items={[
    { id: '1', label: 'Account', description: 'Settings', icon: <UserIcon /> },
    { id: '2', label: 'Security', description: 'Privacy', icon: <LockIcon /> }
  ]} 
/>`
      },
      {
        title: 'Rich Content',
        description: 'Use icons, badges, and top-aligned labels.',
        render: () => (
          <Tabs 
            variant="icon-label"
            iconPosition="top"
            items={[
              { id: 'r1', label: 'Orders', icon: <Icon size="xs"><path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></Icon>, badge: 2, content: 'Order History' },
              { id: 'r2', label: 'Wishlist', icon: <Icon size="xs"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></Icon>, badge: 8, content: 'Saved Items' },
              { id: 'r3', label: 'Wallet', icon: <Icon size="xs"><path d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></Icon>, content: 'Payment Methods' },
            ]} 
          />
        ),
        usageCode: `<Tabs 
  variant="icon-label" 
  iconPosition="top" 
  items={[
    { id: '1', label: 'Home', icon: <HomeIcon />, badge: 3 },
    { id: '2', label: 'User', icon: <UserIcon /> }
  ]} 
/>`
      },
      {
        title: 'Sizes & States',
        description: 'Control the physical size, disable specific tabs, and customize the active indicator.',
        render: () => (
          <Stack spacing={8} className="w-full">
            <div>
              <Text variant="label-md" tone="muted" className="mb-4">Small & Disabled Tabs</Text>
              <Tabs 
                size="sm" 
                variant="pills" 
                disabledTabs={['s2']}
                items={[
                  { id: 's1', label: 'Available', content: 'Item is available' },
                  { id: 's2', label: 'Out of Stock', content: 'This should be disabled' },
                  { id: 's3', label: 'Backorder', content: 'Items coming soon' },
                ]} 
              />
            </div>
            <div>
              <Text variant="label-md" tone="muted" className="mb-4">Large with Custom Indicator</Text>
              <Tabs 
                size="lg" 
                variant="underline" 
                indicatorColor="#10b981" 
                indicatorThickness={4}
                items={[
                  { id: 'l1', label: 'Success Metric', content: 'Showing green indicator' },
                  { id: 'l2', label: 'Growth Data', content: 'Indicator is 4px thick' },
                ]} 
              />
            </div>
          </Stack>
        ),
        usageCode: `<Tabs size="sm" variant="pills" disabledTabs={['tab-id']} items={items} />
<Tabs size="lg" indicatorColor="#10b981" indicatorThickness={4} items={items} />`
      }
    ],
    props: [
      { name: 'items', type: 'TabItem[]', default: '[]', desc: 'Array of tab items with id, label, and content.' },
      { name: 'variant', type: 'underline | line | pills | card | vertical | icon-label | segmented | contained | ghost', default: 'underline', desc: 'Visual style of the tabs.' },
      { name: 'size', type: 'sm | md | lg', default: 'md', desc: 'Physical size of the tabs and text.' },
      { name: 'animation', type: 'slide | fade | none', default: 'slide', desc: 'Content transition animation.' },
      { name: 'fullWidth', type: 'boolean', default: 'false', desc: 'Whether tabs should take up full width.' },
      { name: 'iconPosition', type: 'left | right | top', default: 'left', desc: 'Position of the icon relative to the label.' },
      { name: 'lazy', type: 'boolean', default: 'true', desc: 'If true, tabs are only rendered when selected.' },
      { name: 'keepMounted', type: 'boolean', default: 'false', desc: 'If true, unselected tabs remain in the DOM.' },
      { name: 'disabledTabs', type: 'string[]', default: '[]', desc: 'Array of tab IDs to disable.' },
      { name: 'showIndicator', type: 'boolean', default: 'true', desc: 'Whether to show the active tab indicator.' },
      { name: 'indicatorColor', type: 'string', default: 'primary-600', desc: 'Custom color for the active indicator.' },
      { name: 'indicatorThickness', type: 'number | string', default: '2px', desc: 'Thickness of the line indicator.' }
    ]
  },
  orbit: {
    id: 'orbit',
    name: 'Orbit',
    category: 'Reusable',
    subCategory: 'Molecules',
    description: 'A decorative animation component where elements revolve around a center point.',
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
  'pill-nav': {
    id: 'pill-nav',
    name: 'Pill Navigation',
    category: 'Reusable',
    subCategory: 'Molecules',
    description: 'A fluid navigation component with animated active state that magnetically glides between items. Supports keyboard navigation and multiple animation styles.',
    examples: [
      {
        title: 'Basic Usage',
        description: 'Default spring animation with horizontal orientation.',
        render: () => (
          <div className="py-4">
            <PillNav defaultValue="home">
              <PillNav.Item value="home">Home</PillNav.Item>
              <PillNav.Item value="projects">Projects</PillNav.Item>
              <PillNav.Item value="about">About</PillNav.Item>
              <PillNav.Item value="contact">Contact</PillNav.Item>
            </PillNav>
          </div>
        ),
        usageCode: `<PillNav defaultValue="home">
  <PillNav.Item value="home">Home</PillNav.Item>
  <PillNav.Item value="projects">Projects</PillNav.Item>
  <PillNav.Item value="about">About</PillNav.Item>
  <PillNav.Item value="contact">Contact</PillNav.Item>
</PillNav>`
      },
      {
        title: 'Animation Types',
        description: 'Choose between spring, smooth, and elastic (bouncy) transitions.',
        render: () => (
          <Stack spacing={8} align="center" className="py-4">
            <Stack align="center" spacing={2}>
              <Caption>Spring (Default)</Caption>
              <PillNav defaultValue="1" animationType="spring">
                <PillNav.Item value="1">Option 1</PillNav.Item>
                <PillNav.Item value="2">Option 2</PillNav.Item>
                <PillNav.Item value="3">Option 3</PillNav.Item>
              </PillNav>
            </Stack>
            <Stack align="center" spacing={2}>
              <Caption>Smooth (Tween)</Caption>
              <PillNav defaultValue="1" animationType="smooth">
                <PillNav.Item value="1">Option 1</PillNav.Item>
                <PillNav.Item value="2">Option 2</PillNav.Item>
                <PillNav.Item value="3">Option 3</PillNav.Item>
              </PillNav>
            </Stack>
            <Stack align="center" spacing={2}>
              <Caption>Elastic (Bouncy)</Caption>
              <PillNav defaultValue="1" animationType="elastic">
                <PillNav.Item value="1">Option 1</PillNav.Item>
                <PillNav.Item value="2">Option 2</PillNav.Item>
                <PillNav.Item value="3">Option 3</PillNav.Item>
              </PillNav>
            </Stack>
          </Stack>
        ),
        usageCode: `<PillNav animationType="elastic">...</PillNav>`
      },
      {
        title: 'Vertical Orientation',
        render: () => (
          <div className="py-4">
            <PillNav defaultValue="overview" orientation="vertical" className="w-48">
              <PillNav.Item value="overview">Overview</PillNav.Item>
              <PillNav.Item value="analytics">Analytics</PillNav.Item>
              <PillNav.Item value="reports">Reports</PillNav.Item>
              <PillNav.Item value="settings">Settings</PillNav.Item>
            </PillNav>
          </div>
        ),
        usageCode: `<PillNav orientation="vertical">...</PillNav>`
      }
    ],
    props: [
      { name: 'value', type: 'string', default: '-', desc: 'The controlled value of the active item.' },
      { name: 'defaultValue', type: 'string', default: '-', desc: 'The initial value for uncontrolled mode.' },
      { name: 'onValueChange', type: '(value: string) => void', default: '-', desc: 'Callback triggered when the active item changes.' },
      { name: 'orientation', type: '"horizontal" | "vertical"', default: '"horizontal"', desc: 'The layout orientation of the navigation.' },
      { name: 'animationType', type: '"spring" | "smooth" | "elastic"', default: '"spring"', desc: 'The motion physics to use for the indicator.' },
      { name: 'fullWidth', type: 'boolean', default: 'false', desc: 'Whether the container should take up the full width.' },
      { name: 'disabled', type: 'boolean', default: 'false', desc: 'Whether the entire navigation is disabled.' }
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
    description: 'A professional, production-ready navigation sidebar with support for multiple variants, states, and responsive behavior. Built with a compound component pattern for maximum flexibility.',
    examples: [
      {
         title: 'Default Sidebar',
         render: () => (
           <div className="h-[500px] border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden relative flex bg-neutral-50 dark:bg-neutral-900/50">
              <Sidebar>
                <Sidebar.Section title="Overview">
                  <Sidebar.Item icon={<Icon size="xs"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></Icon>} label="Dashboard" active />
                  <Sidebar.Item icon={<Icon size="xs"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></Icon>} label="Analytics" />
                </Sidebar.Section>
                <Sidebar.Section title="System" collapsible>
                  <Sidebar.Item icon={<Icon size="xs"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></Icon>} label="Settings" />
                </Sidebar.Section>
              </Sidebar>
              <div className="flex-1 p-8">
                 <Heading level={3}>Main Content</Heading>
                 <Text tone="muted" className="mt-2">The sidebar is fully responsive and supports multiple variants.</Text>
              </div>
           </div>
         ),
         usageCode: `<Sidebar>\n  <Sidebar.Section title="Main">\n    <Sidebar.Item icon={<HomeIcon />} label="Home" active />\n  </Sidebar.Section>\n</Sidebar>`
      }
    ],
    props: [
      { name: 'variant', type: 'default | minimal | floating | glass', default: 'default', desc: 'Visual variant of the sidebar.' },
      { name: 'theme', type: 'light | dark', default: 'light', desc: 'Color theme.' },
      { name: 'collapsible', type: 'boolean', default: 'true', desc: 'Whether the sidebar can be collapsed.' },
      { name: 'width', type: 'string', default: '260px', desc: 'Width when expanded.' },
      { name: 'collapsedWidth', type: 'string', default: '80px', desc: 'Width when collapsed.' },
      { name: 'showExpandOnHover', type: 'boolean', default: 'false', desc: 'Expand automatically on hover.' }
    ]
  },
  breadcrumbs: {
    id: 'breadcrumbs',
    name: 'Breadcrumbs',
    category: 'Reusable',
    subCategory: 'Molecules',
    description: 'Shows the current page location within a hierarchy.',
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
          <Flex gap={6} wrap="wrap">
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
  'search-bar': {
    id: 'search-bar',
    name: 'SearchBar',
    category: 'Reusable',
    subCategory: 'Molecules',
    description: 'A premium, standalone search component with support for multiple visual styles including Glass, Neumorphic, and Gradient effects.',
    examples: [
      {
        title: 'Interactive Search Demo',
        description: 'A fully functional search bar with data filtering logic. Perfect for copy-pasting as a starting point.',
        render: () => {
          const [searchInput, setSearchInput] = useState('');
          const data = [
            { id: 1, name: 'Devpulse' },
            { id: 2, name: 'Linklinks' },
            { id: 3, name: 'Centizu' },
            { id: 4, name: 'Dynabox' },
            { id: 5, name: 'Avaveo' },
          ];
          const filtered = data.filter(el => el.name.toLowerCase().includes(searchInput.toLowerCase()));

          return (
            <div className="w-full max-w-md mx-auto p-4 border rounded-xl bg-white dark:bg-neutral-900 shadow-sm">
              <SearchBar 
                variant="default" 
                shape="pill" 
                placeholder="Search names..." 
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                fullWidth
              />
              <ul className="mt-6 space-y-2">
                {filtered.map(item => (
                  <li key={item.id} className="px-4 py-2 border-b dark:border-neutral-800 last:border-0 text-sm flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                    {item.name}
                  </li>
                ))}
                {filtered.length === 0 && <li className="text-neutral-500 text-center py-4 text-sm">No results found</li>}
              </ul>
            </div>
          );
        },
        usageCode: `// Standalone Copy-Paste Example
import React, { useState } from 'react';
import { SearchBar } from 'nexus-ui';

const SearchDemo = () => {
  const [query, setQuery] = useState('');
  const data = ['Devpulse', 'Linklinks', 'Centizu', 'Dynabox', 'Avaveo'];
  
  const filtered = data.filter(name => 
    name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-4 border rounded-xl max-w-sm">
      <SearchBar 
        variant="default" 
        shape="pill" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search names..."
        fullWidth
      />
      <ul className="mt-4">
        {filtered.map(name => <li key={name} className="py-2 border-b">{name}</li>)}
      </ul>
    </div>
  );
};`
      },
      {
        title: 'Basic Style Variants',
        description: 'Control the structural appearance including borders and backgrounds.',
        render: () => (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <Stack spacing={2}><Text variant="caption">Default</Text><SearchBar variant="default" placeholder="Default style..." /></Stack>
            <Stack spacing={2}><Text variant="caption">Outline</Text><SearchBar variant="outline" placeholder="Outline style..." /></Stack>
            <Stack spacing={2}><Text variant="caption">Filled</Text><SearchBar variant="filled" placeholder="Filled style..." /></Stack>
            <Stack spacing={2}><Text variant="caption">Ghost</Text><SearchBar variant="ghost" placeholder="Ghost style..." /></Stack>
            <Stack spacing={2}><Text variant="caption">Underline</Text><SearchBar variant="underline" placeholder="Underline style..." /></Stack>
            <Stack spacing={2}><Text variant="caption">Minimal</Text><SearchBar variant="minimal" placeholder="Minimal style..." /></Stack>
            <Stack spacing={2}><Text variant="caption">Elevated</Text><SearchBar variant="elevated" placeholder="Elevated style..." /></Stack>
            <Stack spacing={2}><Text variant="caption">Soft</Text><SearchBar variant="soft" placeholder="Soft style..." /></Stack>
          </div>
        ),
        usageCode: `<SearchBar variant="glass" />\n<SearchBar variant="neumorphic" />\n<SearchBar variant="gradient" />`
      },
      {
        title: 'Shape Variants',
        description: 'Modify the corner radius to match your brands visual language.',
        render: () => (
          <Stack spacing={6} className="w-full">
            <Stack spacing={2}><Text variant="caption">Rounded (Default)</Text><SearchBar shape="rounded" placeholder="Rounded corners..." /></Stack>
            <Stack spacing={2}><Text variant="caption">Pill</Text><SearchBar shape="pill" placeholder="Pill shape..." /></Stack>
            <Stack spacing={2}><Text variant="caption">Square</Text><SearchBar shape="square" placeholder="No radius..." /></Stack>
          </Stack>
        ),
        usageCode: `<SearchBar shape="pill" />\n<SearchBar shape="square" />`
      },
      {
        title: 'Modern UI Variants',
        description: 'Advanced visual effects for premium, modern interfaces.',
        render: () => (
          <Stack spacing={8} className="w-full">
            <div className="p-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl">
              <Text variant="caption" className="text-white/70 mb-2">Glassmorphism</Text>
              <SearchBar variant="glass" placeholder="Glass variant..." fullWidth />
            </div>
            <div className="p-12 bg-[#e0e5ec] rounded-2xl flex flex-col items-center">
              <Text variant="caption" className="text-neutral-500 mb-4">Neumorphic</Text>
              <SearchBar variant="neumorphic" placeholder="Neumorphic..." />
            </div>
            <Stack spacing={2}>
              <Text variant="caption">Gradient Border</Text>
              <SearchBar variant="gradient" placeholder="Animated Gradient..." fullWidth />
            </Stack>
            <div className="p-8 bg-neutral-900 rounded-2xl">
              <Text variant="caption" className="text-neutral-500 mb-2">Dark Style</Text>
              <SearchBar variant="dark" placeholder="Dark variant..." fullWidth />
            </div>
          </Stack>
        ),
        usageCode: `<SearchBar variant="glass" />\n<SearchBar variant="neumorphic" />\n<SearchBar variant="gradient" />\n<SearchBar variant="dark" />`
      },
      {
        title: 'Interactive Props',
        render: () => (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <Stack spacing={2}><Text variant="caption">Loading State</Text><SearchBar loading placeholder="Searching..." /></Stack>
            <Stack spacing={2}><Text variant="caption">Disabled State</Text><SearchBar disabled value="Locked input" /></Stack>
            <Stack spacing={2}><Text variant="caption">Icon Right</Text><SearchBar iconPosition="right" placeholder="Right aligned icon" /></Stack>
            <Stack spacing={2}><Text variant="caption">Small Size (36px)</Text><SearchBar size="sm" shape="pill" /></Stack>
            <Stack spacing={2}><Text variant="caption">Medium Size (44px)</Text><SearchBar size="md" shape="pill" /></Stack>
            <Stack spacing={2}><Text variant="caption">Large Size (52px)</Text><SearchBar size="lg" shape="pill" /></Stack>
          </div>
        ),
        usageCode: `<SearchBar loading />\n<SearchBar disabled />\n<SearchBar size="sm" />`
      }
    ],
    props: [
      { name: 'variant', type: 'default | outline | filled | ghost | underline | minimal | elevated | soft | glass | neumorphic | gradient | dark', default: 'default', desc: 'Visual theme of the bar.' },
      { name: 'shape', type: 'rounded | pill | square', default: 'rounded', desc: 'Corner rounding style.' },
      { name: 'size', type: 'sm | md | lg', default: 'md', desc: 'Component height (36px, 44px, 52px).' },
      { name: 'fullWidth', type: 'boolean', default: 'false', desc: 'Whether to span 100% of container.' },
      { name: 'loading', type: 'boolean', default: 'false', desc: 'Shows a loading spinner.' },
      { name: 'showClear', type: 'boolean', default: 'true', desc: 'Shows clear button when value exists.' },
      { name: 'iconPosition', type: 'left | right', default: 'left', desc: 'Position of the search icon.' },
      { name: 'placeholder', type: 'string', default: 'Search...', desc: 'Input placeholder text.' },
      { name: 'disabled', type: 'boolean', default: 'false', desc: 'Disables all interactions.' }
    ],
    fullSource: snippetContent['search-bar']
  },
  'form-field': {
    id: 'form-field',
    name: 'FormField',
    category: 'Reusable',
    subCategory: 'Molecules',
    description: 'Generic wrapper for form controls.',
    examples: [{ title: 'Basic', render: () => <FormWrapper onSubmit={() => {}}><Heading level={4} className="mb-4">Account Settings</Heading><Input label="Display Name" /></FormWrapper>, usageCode: `<FormWrapper onSubmit={...}>\n  <Heading>Account Settings</Heading>\n  <Input label="..." />\n</FormWrapper>` }],
    props: []
  },
  toast: {
    id: 'toast',
    name: 'Toast',
    category: 'Reusable',
    subCategory: 'Molecules',
    description: 'Floating notification message.',
    examples: [{ title: 'Preview', render: () => <Toast title="Action successful!" variant="success" onClose={() => {}} />, usageCode: `<Toast title="..." variant="success" />` }],
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
    examples: [{ title: 'Preview', render: () => <Table headers={['ID', 'User', 'Status']} data={[{id: '1', user: 'John Doe', status: 'Active'}]} renderRow={(row, i) => <tr key={i}><td className="p-4">{row.id}</td><td className="p-4">{row.user}</td><td className="p-4"><Badge variant="success">{row.status}</Badge></td></tr>} />, usageCode: `<Table headers={['ID', 'User']} data={rows} renderRow={...} />` }],
    props: []
  },
  'pricing-section': {
    id: 'pricing-section',
    name: 'Pricing Section',
    category: 'Composite',
    subCategory: 'Organisms / Patterns',
    description: 'Section showcasing pricing tiers.',
    examples: [{ title: 'Section', render: () => <PricingSection title="Pricing" plans={[{ name: 'Startup', price: '$29', features: ['Core Features'], cta: 'Buy Now' }]} />, usageCode: `<PricingSection title="Pricing" plans={[{ name: 'Startup', price: '$29', ... }]} />` }],
    props: []
  },
  'hero-section': {
    id: 'hero-section',
    name: 'Hero Section',
    category: 'Composite',
    subCategory: 'Organisms / Patterns',
    description: 'Main landing page header.',
    examples: [{ title: 'Section', render: () => <HeroSection title="Welcome" subtitle="SaaS Starter Kit" ctaPrimary={<Button>Get Started</Button>} />, usageCode: `<HeroSection title="Welcome" subtitle="..." />` }],
    props: []
  },
  'feature-grid': {
    id: 'feature-grid',
    name: 'Feature Grid',
    category: 'Composite',
    subCategory: 'Organisms / Patterns',
    description: 'Grid layout for product features.',
    examples: [{ title: 'Section', render: () => <FeatureGrid title="Features" features={[{ title: 'Fast', description: 'Optimized', icon: <span>⚡</span> }]} />, usageCode: `<FeatureGrid title="Features" features={[{...}]} />` }],
    props: []
  },
  'dashboard-stats': {
    id: 'dashboard-stats',
    name: 'Dashboard Stats',
    category: 'Composite',
    subCategory: 'Organisms / Patterns',
    description: 'Summary statistics panel.',
    examples: [{ title: 'Preview', render: () => <div className="grid grid-cols-3 gap-4 w-full"><Card className="text-center"><Text variant="caption" tone="muted">Users</Text><Heading level={4}>2.4k</Heading></Card><Card className="text-center"><Text variant="caption" tone="muted">Sales</Text><Heading level={4}>$12k</Heading></Card><Card className="text-center"><Text variant="caption" tone="muted">Orders</Text><Heading level={4}>156</Heading></Card></div>, usageCode: `<div className="grid grid-cols-3 gap-4">\n  <StatCard title="Users" value="2.4k" />\n  <StatCard title="Sales" value="$12k" />\n  <StatCard title="Orders" value="156" />\n</div>` }],
    props: []
  },
  'user-profile-card': {
    id: 'user-profile-card',
    name: 'User Profile Card',
    category: 'Composite',
    subCategory: 'Organisms / Patterns',
    description: 'Card displaying user information.',
    examples: [{ title: 'Preview', render: () => <Card><Flex gap={4} align="center"><Avatar /><Stack><Heading level={4}>User Name</Heading><Text tone="muted">Admin</Text></Stack></Flex></Card>, usageCode: `<UserProfileCard />` }],
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
    examples: [{ title: 'Preview', render: () => <Stepper steps={[{ title: 'Account', status: 'current' }, { title: 'Profile', status: 'upcoming' }, { title: 'Billing', status: 'upcoming' }]} />, usageCode: `<Stepper steps={[{ title: 'Account', status: 'current' }, ...]} />` }],
    props: []
  },
  'settings-panel': {
    id: 'settings-panel',
    name: 'Settings Panel',
    category: 'Composite',
    subCategory: 'Organisms / Patterns',
    description: 'Full app settings interface.',
    examples: [{ title: 'Preview', render: () => <Box className="border rounded p-4"><Heading level={3}>Settings</Heading><Divider /><Stack spacing={4}><Switch label="Notifications" checked={true} onChange={() => {}} /><Button>Save</Button></Stack></Box>, usageCode: `<SettingsPanel />` }],
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


  'magic-bento': {
    id: 'magic-bento',
    name: 'Magic Bento',
    category: 'Composite',
    subCategory: 'Organisms / Patterns',
    description: 'A visually striking grid layout with mouse-tracking spotlight effects. Perfect for feature showcases and interactive bento-box style interfaces.',
    examples: [
      {
        title: 'Feature Showcase',
        description: 'A typical bento grid with icons and varying spans.',
        render: () => (
          <MagicBento 
            items={[
              { id: '1', title: 'Analytics', description: 'Real-time data insights.', span: 2, icon: <span className="text-2xl">📊</span> },
              { id: '2', title: 'Security', description: 'Enterprise-grade protection.', span: 1, icon: <span className="text-2xl">🛡️</span> },
              { id: '3', title: 'Cloud', description: 'Scalable infrastructure.', span: 1, icon: <span className="text-2xl">☁️</span> },
              { id: '4', title: 'AI Driven', description: 'Powered by machine learning.', span: 2, icon: <span className="text-2xl">🤖</span> },
            ]}
          />
        ),
        usageCode: `<MagicBento \n  items={[...]} \n/>`
      },
      {
        title: 'Minimal Variant',
        description: 'A cleaner, more compact layout for utility grids.',
        render: () => (
          <MagicBento 
            variant="minimal"
            items={[
              { id: '1', title: 'Fast', description: 'Optimized performance.', span: 1, icon: '⚡' },
              { id: '2', title: 'Secure', description: 'SSL encryption.', span: 1, icon: '🔒' },
              { id: '3', title: 'Global', description: 'edge delivery.', span: 1, icon: '🌐' },
            ]}
          />
        ),
        usageCode: `<MagicBento \n  variant="minimal" \n  items={[...]} \n/>`
      },
      {
        title: 'Hero / Marketing',
        description: 'Large, bold sections for high-impact landing pages.',
        render: () => (
          <MagicBento 
            variant="hero"
            clickEffect
            enableStars
            items={[
              { id: '1', title: 'Transform Your Workflow', description: 'The next generation of developer tools is here. Experience speed like never before.', span: 3, icon: '🚀' },
              { id: '2', title: 'Seamless Integration', description: 'Connect with your favorite services in seconds.', span: 1, icon: '🔗' },
              { id: '3', title: 'Built-in Security', description: 'Security is not an afterthought.', span: 2, icon: '🔐' },
            ]}
          />
        ),
        usageCode: `<MagicBento \n  variant="hero" \n  clickEffect \n  enableStars \n  items={[...]} \n/>`
      }
    ],
    props: [
      { name: 'items', type: 'BentoItem[]', default: '[]', desc: 'Array of items to display.' },
      { name: 'variant', type: "'default' | 'minimal' | 'hero'", default: "'default'", desc: 'Visual style preset.' },
      { name: 'spotlightColor', type: 'string', default: '"rgba(0, 0, 0, 0.1)"', desc: 'Color of the spotlight effect.' },
      { name: 'spotlightSize', type: 'number', default: '400', desc: 'Radius of the spotlight in pixels.' },
      { name: 'clickEffect', type: 'boolean', default: 'false', desc: 'Enable ripple effect on click.' },
      { name: 'enableStars', type: 'boolean', default: 'false', desc: 'Show animated/star background pattern.' },
      { name: 'borderColor', type: 'string', default: '-', desc: 'Custom border color for cards.' },
      { name: 'backgroundColor', type: 'string', default: '-', desc: 'Custom background color for cards.' },
      { name: 'gap', type: 'string', default: '"1.5rem"', desc: 'Grid gap spacing.' }
    ]
  },

  // --- New App-Level Components ---
  'landing-page': {
    id: 'landing-page',
    name: 'Landing Page (Modular)',
    category: 'App-level',
    subCategory: 'Templates / Pages',
    description: 'A modular, high-conversion landing page template with customizable hero, features, and pricing sections.',
    examples: [
      {
        title: 'Default Landing Page',
        render: () => (
          <div className="h-[600px] border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-auto scale-75 origin-top">
            <LandingPage variant="default" theme="light" />
          </div>
        ),
        usageCode: `<LandingPage variant="default" theme="light" />`
      },
      {
        title: 'Enterprise SaaS Variant',
        render: () => (
          <div className="h-[600px] border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-auto scale-75 origin-top">
            <LandingPage 
              variant="saas" 
              heroVariant="split" 
              heroData={{
                title: 'Professional Logic for Modern Platforms',
                subtitle: 'Accelerate your development cycle with our robust modular landing page sections. Built for high-performance enterprise applications.',
                badge: 'Enterprise v2.0',
                ctaPrimary: { label: 'Start 14-day trial' },
                imageSrc: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
              }}
              featuresData={{
                title: 'Engineered for Performance',
                subtitle: 'Our sections are optimized for conversion and scalability.',
                items: [
                  { id: 1, title: 'Modular Architecture', description: 'Every section is a standalone module that can be easily customized or rearranged.' },
                  { id: 2, title: 'Strictly Typed', description: 'Comprehensive TypeScript support ensures your data flows correctly through every section.' },
                  { id: 3, title: 'Zero Bloat', description: 'Optimized CSS Modules ensure high lighthouse scores and fast interaction times.' }
                ]
              }}
              pricingData={{
                title: 'Transparent Pricing for Every Team',
                plans: [
                  { id: 1, name: 'Starter', price: '0', features: ['Up to 3 projects', 'Basic components', 'Community support'] },
                  { id: 2, name: 'Pro', price: '49', period: 'mo', features: ['Unlimited projects', 'Advanced components', 'Priority support'], isPopular: true },
                  { id: 3, name: 'Enterprise', price: 'Custom', features: ['Custom development', 'SLA guarantees', 'Dedicated account manager'] }
                ]
              }}
              pricingVariant="toggle-monthly-yearly"
            />
          </div>
        ),
        usageCode: `<LandingPage variant="saas" heroVariant="split" pricingVariant="toggle-monthly-yearly" />`
      },
      {
        title: 'Dark Mode Version',
        render: () => (
          <div className="h-[600px] border border-neutral-800 rounded-xl overflow-auto scale-75 origin-top bg-neutral-900">
            <LandingPage theme="dark" variant="gradient" />
          </div>
        ),
        usageCode: `<LandingPage theme="dark" variant="gradient" />`
      }
    ],
    props: [
      { name: 'variant', type: "'default' | 'minimal' | 'startup' | 'saas' | 'gradient' | 'dark'", default: "'default'", desc: 'Overall template style preset.' },
      { name: 'theme', type: "'light' | 'dark'", default: "'light'", desc: 'Color mode (tokens update via CSS variables).' },
      { name: 'heroVariant', type: "'centered' | 'split' | 'image-right' | 'full-background'", default: "'centered'", desc: 'Hero section layout variant.' },
      { name: 'featuresLayout', type: "'grid' | 'cards' | 'alternating' | 'minimal'", default: "'grid'", desc: 'Layout for feature items.' },
      { name: 'showFooter', type: 'boolean', default: 'true', desc: 'Toggle footer visibility.' }
    ]
  },
  'signup-page': {
    id: 'signup-page',
    name: 'Signup Page',
    category: 'App-level',
    subCategory: 'Templates / Pages',
    description: 'Complete user registration layout.',
    examples: [{ title: 'Page', render: () => <div className="h-96 scale-75 origin-top border overflow-auto"><AuthLayout title="Register"><SignupForm onSubmit={() => {}} /></AuthLayout></div>, usageCode: `<SignupPage />` }],
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
  },
  'scroll-stack': {
    id: 'scroll-stack',
    name: 'Scroll Stack',
    category: 'Composite',
    subCategory: 'Organisms / Patterns',
    description: 'A premium scrolling presentation where cards stack and scale with a depth effect. Ideal for feature showcases or portfolios.',
    examples: [
      {
        title: 'Nexus Stack',
        description: 'A professional stacking card interface for dashboards or feature lists.',
        render: () => (
             <div className="h-[600px] w-full overflow-y-auto border border-neutral-200 dark:border-neutral-800 rounded-xl relative bg-neutral-50 dark:bg-neutral-950/50">
                <ScrollStack orientation="horizontal" offset={-20} scaleStrength={0.05} blurStrength={2}>
                    <div className="w-full h-full flex items-center justify-center p-4">
                        <div className="w-[400px] h-[500px] rounded-2xl bg-white dark:bg-neutral-900 flex flex-col p-8 shadow-xl border border-neutral-200 dark:border-neutral-800">
                             <div className="w-14 h-14 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 mb-6">
                                <Icon size="lg"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></Icon>
                             </div>
                             <Heading level={2} className="mb-3">Fast Performance</Heading>
                             <Text tone="muted" variant="body-lg">Optimized for speed with zero runtime overhead. Experience silky smooth interactions.</Text>
                        </div>
                    </div>
                    <div className="w-full h-full flex items-center justify-center p-4">
                        <div className="w-[400px] h-[500px] rounded-2xl bg-white dark:bg-neutral-900 flex flex-col p-8 shadow-xl border border-neutral-200 dark:border-neutral-800">
                             <div className="w-14 h-14 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 mb-6">
                                <Icon size="lg"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></Icon>
                             </div>
                             <Heading level={2} className="mb-3">Secure by Design</Heading>
                             <Text tone="muted" variant="body-lg">Enterprise-grade security features built-in directly. specific compliance ready.</Text>
                        </div>
                    </div>
                    <div className="w-full h-full flex items-center justify-center p-4">
                        <div className="w-[400px] h-[500px] rounded-2xl bg-white dark:bg-neutral-900 flex flex-col p-8 shadow-xl border border-neutral-200 dark:border-neutral-800">
                             <div className="w-14 h-14 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 mb-6">
                                <Icon size="lg"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></Icon>
                             </div>
                             <Heading level={2} className="mb-3">Real-time Analytics</Heading>
                             <Text tone="muted" variant="body-lg">Track every metric with precision and ease. Visualize data in real-time.</Text>
                        </div>
                    </div>
                    <div className="w-full h-full flex items-center justify-center p-4">
                        <div className="w-[400px] h-[500px] rounded-2xl bg-white dark:bg-neutral-900 flex flex-col p-8 shadow-xl border border-neutral-200 dark:border-neutral-800">
                             <div className="w-14 h-14 rounded-xl bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center text-rose-600 mb-6">
                                <Icon size="lg"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></Icon>
                             </div>
                             <Heading level={2} className="mb-3">User Loved</Heading>
                             <Text tone="muted" variant="body-lg">Designed with empathy for the best user experience. Award winning interface.</Text>
                        </div>
                    </div>
                </ScrollStack>
                <div className="absolute top-4 right-4 bg-white/80 dark:bg-black/50 backdrop-blur-md text-neutral-500 dark:text-neutral-400 px-3 py-1.5 rounded-full text-xs pointer-events-none border border-neutral-200 dark:border-neutral-800 shadow-sm">Scroll to Stack</div>
             </div>
        ),
        usageCode: `<ScrollStack orientation="horizontal" offset={-20} scaleStrength={0.05} blurStrength={2}>
  <FeatureCard icon={<BoltIcon />} title="Fast" />
  <FeatureCard icon={<LockIcon />} title="Secure" />
  <FeatureCard icon={<ChartIcon />} title="Analytics" />
  <FeatureCard icon={<HeartIcon />} title="Loved" />
</ScrollStack>`
      }
    ],
    props: [
      { name: 'orientation', type: '"vertical" | "horizontal"', default: '"vertical"', desc: 'Scroll direction.' },
      { name: 'snap', type: 'boolean', default: 'false', desc: 'Enable scroll snapping.' },
      { name: 'scaleStrength', type: 'number', default: '0.05', desc: 'How much items scale down as they stack.' },
      { name: 'blurStrength', type: 'number', default: '10', desc: 'Blur amount for stacked items.' },
    ]
  },
  'wizard': {
    id: 'wizard',
    name: 'Wizard',
    category: 'Composite',
    subCategory: 'Organisms / Patterns',
    description: 'A professional multi-step indicator for complex workflows, supporting multiple orientations and premium visual styles.',
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
          const steps = [{ id: 1, title: 'Step One' }, { id: 2, title: 'Step Two' }, { id: 3, title: 'Step Three' }];
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
        title: 'Complete Navigation Flow',
        render: () => {
          const [step, setStep] = useState(0);
          const steps = [
            { id: 1, title: 'Account', description: 'Enter credentials' },
            { id: 2, title: 'Identity', description: 'Social security & ID' },
            { id: 3, title: 'Billing', description: 'Payment methods' },
            { id: 4, title: 'Review', description: 'Confirm your plan' }
          ];
          return (
            <div className="w-full">
              <Wizard 
                steps={steps} 
                currentStep={step} 
                showNavigation 
                onNext={() => setStep(s => Math.min(steps.length - 1, s + 1))}
                onBack={() => setStep(s => Math.max(0, s - 1))}
                onStepChange={setStep}
                allowStepClick
                variant="glass"
                color="primary"
              />
              <div className="mt-8 p-6 bg-neutral-50 dark:bg-neutral-900/50 border border-dashed border-neutral-300 dark:border-neutral-700 rounded-xl text-center">
                 <Text tone="muted">Currently viewing step: <Text weight="bold" tone="primary">{steps[step].title}</Text></Text>
                 <Text size="sm" className="mt-1 opacity-70">{steps[step].description}</Text>
              </div>
            </div>
          );
        },
        usageCode: `<Wizard \\n  showNavigation \\n  currentStep={step} \\n  onNext={() => setStep(s => s + 1)} \\n  onBack={() => setStep(s => s - 1)} \\n/>`
      },
      {
        title: 'Sizes',
        render: () => {
          const steps = [{ id: 1, title: 'Start' }, { id: 2, title: 'Process' }, { id: 3, title: 'Finish' }];
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
      { name: 'onStepClick', type: '(index: number) => void', default: '-', desc: 'Callback when a step is clicked.' },
      { name: 'onStepChange', type: '(index: number) => void', default: '-', desc: 'Callback when step changes.' },
      { name: 'showIcons', type: 'boolean', default: 'true', desc: 'Show/hide step icons.' },
      { name: 'allowStepClick', type: 'boolean', default: 'false', desc: 'Allow clicking any step.' },
      { name: 'showNavigation', type: 'boolean', default: 'false', desc: 'Show built-in Next/Back buttons.' },
      { name: 'onNext', type: '() => void', default: '-', desc: 'Callback for Next button.' },
      { name: 'onBack', type: '() => void', default: '-', desc: 'Callback for Back button.' },
      { name: 'nextLabel', type: 'string', default: '"Next"', desc: 'Custom label for Next button.' },
      { name: 'backLabel', type: 'string', default: '"Back"', desc: 'Custom label for Back button.' },
      { name: 'animated', type: 'boolean', default: 'true', desc: 'Enable animations.' }
    ]
  },
  'ecommerce-marketplace': {
    id: 'ecommerce-marketplace',
    name: 'E-commerce Marketplace',
    category: 'App-level',
    subCategory: 'Templates / Pages',
    description: 'A robust product-based marketplace template featuring filtering, advanced product details, cart with motion-driven interactions, and multi-step checkout.',
    examples: [
      {
        title: 'Complete Marketplace View',
        description: 'The full interactive e-commerce experience including grid, detail, and checkout views.',
        render: () => (
          <div className="w-full border border-neutral-200 dark:border-neutral-800 rounded-3xl overflow-hidden bg-white dark:bg-neutral-950 shadow-2xl relative h-[800px]">
             <EcommerceTemplate />
          </div>
        ),
        usageCode: `<EcommerceTemplate />`
      }
    ],
    props: []
  }
};



const InteractivePanel = ({ children, props, onChange }: { 
    children: (props: any, setProp: (name: string, value: any) => void) => React.ReactNode; 
    props: { name: string; type: string; default: any; options?: string[] }[];
    onChange: (prop: string, value: any) => void;
}) => {
    const [activeProps, setActiveProps] = useState<Record<string, any>>(
        props.reduce((acc, p) => {
            let value: any = p.default;
            if (p.default === '-') value = '';
            else if (p.default === 'true' || p.default === true) value = true;
            else if (p.default === 'false' || p.default === false) value = false;
            else if (typeof p.default === 'number') value = p.default;
            else if (typeof p.default === 'string' && !isNaN(Number(p.default)) && p.default.trim() !== '') value = Number(p.default);
            return { ...acc, [p.name]: value };
        }, {})
    );

    const handlePropChange = (name: string, value: any) => {
        setActiveProps(prev => ({ ...prev, [name]: value }));
        onChange(name, value);
    };

    return (
        <div className="flex flex-col lg:flex-row gap-8 bg-neutral-50/50 dark:bg-neutral-900/50 p-6 rounded-lg min-h-[400px]">
            <div className="flex-1 flex items-center justify-center p-8 border border-neutral-200 dark:border-neutral-800 rounded-lg bg-white dark:bg-neutral-950 shadow-inner">
                {children(activeProps, handlePropChange)}
            </div>
            <div className="w-full lg:w-72 space-y-6">
                <Heading level={4} className="text-sm uppercase tracking-wider text-neutral-500">Interactive Props</Heading>
                <Stack spacing={4}>
                    {props.filter(p => p.options || p.type === 'boolean' || p.type === 'string' || p.type === 'number').map(prop => (
                        <div key={prop.name} className="space-y-2">
                            <Label className="text-xs font-semibold">{prop.name}</Label>
                            {prop.type === 'boolean' ? (
                                <Switch 
                                    checked={activeProps[prop.name]} 
                                    onChange={(val) => handlePropChange(prop.name, val)} 
                                />
                            ) : prop.type === 'number' ? (
                                <Input 
                                    type="number"
                                    value={activeProps[prop.name]} 
                                    onChange={(e) => handlePropChange(prop.name, Number(e.target.value))}
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
        <Text className="mt-4 text-neutral-500">The documentation for "{componentId}" is currently being prepared.</Text>
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
      { name: 'variant', type: 'select', default: 'line', options: ['line', 'underline', 'pills', 'card', 'vertical', 'icon-label', 'segmented', 'contained', 'ghost', 'enclosed'] },
      { name: 'size', type: 'select', default: 'md', options: ['sm', 'md', 'lg'] },
      { name: 'animation', type: 'select', default: 'slide', options: ['slide', 'fade', 'none'] },
      { name: 'showIndicator', type: 'boolean', default: 'true' },
      { name: 'indicatorThickness', type: 'number', default: '2' },
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
      { name: 'color', type: 'string', default: '#8B5CF6' },
      { name: 'padding', type: 'number', default: '8' },
      { name: 'stiffness', type: 'number', default: '400' },
    ],
    orbit: [
      { name: 'radius', type: 'number', default: '150' },
      { name: 'speed', type: 'number', default: '10' },
      { name: 'direction', type: 'select', default: 'clockwise', options: ['clockwise', 'anticlockwise'] },
      { name: 'itemSize', type: 'number', default: '80' },
      { name: 'keepUpright', type: 'boolean', default: 'true' },
      { name: 'pauseOnHover', type: 'boolean', default: 'false' },
    ],
    wizard: [
      { name: 'orientation', type: 'select', default: 'horizontal', options: ['horizontal', 'vertical'] },
      { name: 'size', type: 'select', default: 'md', options: ['sm', 'md', 'lg'] },
      { name: 'variant', type: 'select', default: 'default', options: ['default', 'minimal', 'filled', 'outline', 'glass', 'gradient'] },
      { name: 'color', type: 'select', default: 'primary', options: ['primary', 'secondary', 'success', 'warning', 'danger', 'neutral'] },
      { name: 'currentStep', type: 'number', default: '0' },
      { name: 'showNavigation', type: 'boolean', default: 'false' },
      { name: 'nextLabel', type: 'string', default: '' },
      { name: 'backLabel', type: 'string', default: '' },
    ],
    'scroll-stack': [
      { name: 'orientation', type: 'select', default: 'vertical', options: ['vertical', 'horizontal'] },
      { name: 'snap', type: 'boolean', default: 'false' },
      { name: 'scaleStrength', type: 'number', default: '0.05' },
      { name: 'blurStrength', type: 'number', default: '10' },
    ],
    'magic-bento': [
      { name: 'variant', type: 'select', default: 'default', options: ['default', 'minimal', 'hero'] },
      { name: 'enableStars', type: 'boolean', default: 'false' },
      { name: 'clickEffect', type: 'boolean', default: 'false' },
      { name: 'spotlightSize', type: 'number', default: '400' },
      { name: 'gap', type: 'string', default: '1.5rem' },
    ],
    divider: [
      { name: 'variant', type: 'select', default: 'solid', options: ['solid', 'dashed', 'dotted', 'gradient', 'gradient-animated', 'fade', 'glass', 'glow', 'zigzag'] },
      { name: 'orientation', type: 'select', default: 'horizontal', options: ['horizontal', 'vertical'] },
      { name: 'thickness', type: 'string', default: '1px' },
      { name: 'color', type: 'string', default: '' },
      { name: 'label', type: 'string', default: 'Label' },
      { name: 'labelPosition', type: 'select', default: 'center', options: ['left', 'center', 'right'] },
    ],
    sidebar: [
      { name: 'variant', type: 'select', default: 'default', options: ['default', 'minimal', 'floating', 'glass'] },
      { name: 'theme', type: 'select', default: 'light', options: ['light', 'dark'] },
      { name: 'collapsible', type: 'boolean', default: 'true' },
      { name: 'showExpandOnHover', type: 'boolean', default: 'false' },
      { name: 'width', type: 'string', default: '260px' },
    ],
    checkbox: [
      { name: 'label', type: 'string', default: 'Accept Terms' },
      { name: 'variant', type: 'select', default: 'square', options: ['square', 'squircle', 'circle'] },
      { name: 'disabled', type: 'boolean', default: 'false' },
      { name: 'interactive', type: 'boolean', default: 'false' },
      { name: 'hoverScale', type: 'number', default: '1.05' },
      { name: 'tapScale', type: 'number', default: '0.95' },
    ],
    radio: [
      { name: 'label', type: 'string', default: 'Radio Option' },
      { name: 'disabled', type: 'boolean', default: 'false' },
      { name: 'interactive', type: 'boolean', default: 'false' },
      { name: 'hoverScale', type: 'number', default: '1.05' },
      { name: 'tapScale', type: 'number', default: '0.95' },
    ]
  };

  const interactiveProps = interactivePropsMetadata[componentId];

  const generateCode = (componentId: string, activeProps: any) => {
    if (componentId === 'sidebar') {
      const activeEntries = Object.entries(activeProps).filter(([key, value]) => {
        const metadata = (interactivePropsMetadata as any)[componentId]?.find((p: any) => p.name === key);
        return value !== metadata?.default && key !== 'children';
      });

      const propsStr = activeEntries.map(([key, value]) => {
        if (typeof value === 'boolean') return value ? key : '';
        if (typeof value === 'string') return `${key}="${value}"`;
        return `${key}={${JSON.stringify(value)}}`;
      }).filter(Boolean).join(' ');

      return `import { Sidebar } from "nexus-ui";\n\nreturn (\n  <Sidebar ${propsStr}>\n    <Sidebar.Section title="Main">\n      <Sidebar.Item icon={<HomeIcon />} label="Home" active />\n      <Sidebar.Item icon={<ChartIcon />} label="Analytics" />\n    </Sidebar.Section>\n    <Sidebar.Section title="System" collapsible>\n      <Sidebar.Item icon={<SettingsIcon />} label="Settings" />\n    </Sidebar.Section>\n  </Sidebar>\n);`;
    }

    if (componentId === 'wizard') {
      const activeEntries = Object.entries(activeProps).filter(([key, value]) => {
        const metadata = interactiveProps.find(p => p.name === key);
        return value !== metadata?.default && key !== 'children';
      });

      const handlers = [];
      if (activeProps.showNavigation) {
        handlers.push('onNext={() => setCurrentStep(prev => prev + 1)}');
        handlers.push('onBack={() => setCurrentStep(prev => prev - 1)}');
      }

      const propsStr = activeEntries.map(([key, value]) => {
        if (typeof value === 'boolean') return value ? key : '';
        if (typeof value === 'string') return `${key}="${value}"`;
        return `${key}={${JSON.stringify(value)}}`;
      }).filter(Boolean).concat(handlers).join('\n    ');

      return `const [currentStep, setCurrentStep] = useState(${activeProps.currentStep || 0});\nconst steps = [\n  { id: 1, title: 'Step 1' },\n  { id: 2, title: 'Step 2' },\n  { id: 3, title: 'Step 3' }\n];\n\nreturn (\n  <Wizard \n    steps={steps} \n    currentStep={currentStep} \n    ${propsStr}\n  />\n);`;
    }

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

      {/* Technical Requirements Notice */}
      <div className="px-4">
        <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/10 flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex items-center gap-2 text-blue-500 shrink-0">
            <Icon size="sm"><path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></Icon>
            <Text weight="bold" size="sm" className="text-blue-600 dark:text-blue-400">Technical Requirements</Text>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <Text size="xs" tone="muted">React 19+</Text>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <Text size="xs" tone="muted">TypeScript (.tsx)</Text>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <Text size="xs" tone="muted">Tailwind CSS</Text>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <Text size="xs" tone="muted">Framer Motion</Text>
            </div>
          </div>
          <Text size="xs" className="md:ml-auto text-blue-600/70 dark:text-blue-400/70 italic">
            JavaScript users must remove type annotations.
          </Text>
        </div>
      </div>

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
                            {(activeProps, setProp) => (
                              <div className="w-full space-y-8">
                                <div className="flex flex-col lg:flex-row gap-8">
                                  <div className="flex-1 flex items-center justify-center p-12 border border-neutral-200 dark:border-neutral-800 rounded-2xl bg-white dark:bg-neutral-950 shadow-inner min-h-[400px]">
                                      {(() => {
                                          if (componentId === 'button') return <Button {...activeProps}>{activeProps.children}</Button>;
                                          if (componentId === 'badge') return <Badge {...activeProps}>{activeProps.children}</Badge>;
                                          if (componentId === 'spinner') return <Spinner {...activeProps} />;
                                          if (componentId === 'input') return <div className="w-full max-w-sm"><Input {...activeProps} /></div>;
                                          if (componentId === 'checkbox') return <Checkbox {...activeProps} />;
                                          if (componentId === 'radio') return <Radio {...activeProps} />;
                                          if (componentId === 'modal') return (
                                            <div className="relative h-64 w-full border border-dashed rounded flex items-center justify-center bg-neutral-50 dark:bg-neutral-900/50">
                                              <Button onClick={() => alert('In doc preview, modal would open here.')}>Open Modal Overlay</Button>
                                              {activeProps.isOpen && <div className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center rounded"><Card className="p-4 w-64 shadow-xl"><Heading level={4}>{activeProps.title}</Heading><Text size="sm" className="mt-2">Modal content preview</Text></Card></div>}
                                            </div>
                                          );
                                           if (componentId === 'tabs') return <Tabs {...activeProps} items={[{id: '1', label: 'Tab 1', content: 'Content 1'}, {id: '2', label: 'Tab 2', content: 'Content 2'}]} />;
                                          if (componentId === 'alert') return <Alert {...activeProps}>{activeProps.children}</Alert>;
                                          if (componentId === 'crud-management') return <UserManager {...activeProps} />;
                                          if (componentId === 'avatar') return <Avatar {...activeProps} />;
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
                                          if (componentId === 'scroll-stack') return (
                                            <div className="h-[400px] w-full border border-neutral-200 dark:border-neutral-800 rounded-lg relative overflow-hidden">
                                                <ScrollStack {...activeProps}>
                                                    <div className="w-full h-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-3xl font-bold text-slate-400">Card 1</div>
                                                    <div className="w-full h-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-3xl font-bold text-blue-500">Card 2</div>
                                                    <div className="w-full h-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-3xl font-bold text-indigo-500">Card 3</div>
                                                    <div className="w-full h-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-3xl font-bold text-purple-500">Card 4</div>
                                                </ScrollStack>
                                            </div>
                                          );
                                          if (componentId === 'orbit') return (
                                            <div className="h-96 w-full flex items-center justify-center">
                                              <ErrorBoundary>
                                                <Orbit {...activeProps}>
                                                   <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white">1</div>
                                                   <div className="w-12 h-12 bg-secondary-500 rounded-full flex items-center justify-center text-white">2</div>
                                                   <div className="w-12 h-12 bg-success-500 rounded-full flex items-center justify-center text-white">3</div>
                                                   <div className="w-12 h-12 bg-warning-500 rounded-full flex items-center justify-center text-white">4</div>
                                                </Orbit>
                                              </ErrorBoundary>
                                            </div>
                                          );
                                          if (componentId === 'wizard') {
                                            const steps = [{id: 1, title: 'Step 1', description: 'Setup'}, {id: 2, title: 'Step 2', description: 'Config'}, {id: 3, title: 'Step 3', description: 'Done'}];
                                            return (
                                              <Wizard 
                                                steps={steps} 
                                                {...activeProps} 
                                                onNext={() => setProp('currentStep', Math.min(steps.length - 1, activeProps.currentStep + 1))}
                                                onBack={() => setProp('currentStep', Math.max(0, activeProps.currentStep - 1))}
                                                onStepChange={(val) => setProp('currentStep', val)}
                                              />
                                            );
                                          }
                                          if (componentId === 'magic-bento') return (
                                            <MagicBento 
                                              items={[
                                                { id: '1', title: 'Analytics', description: 'Real-time data insights.', span: 2, icon: <span className="text-2xl">📊</span> },
                                                { id: '2', title: 'Security', description: 'Enterprise-grade protection.', span: 1, icon: <span className="text-2xl">🛡️</span> },
                                              ]} 
                                              {...activeProps} 
                                            />
                                          );
                                          if (componentId === 'divider') {
                                            if (activeProps.orientation === 'vertical') {
                                               return <div className="h-64 flex items-center justify-center p-4 bg-dots"><Divider {...activeProps} /></div>;
                                            }
                                            return <div className="w-full p-8"><Divider {...activeProps} /></div>;
                                          }
                                          if (componentId === 'sidebar') return (
                                            <div className="h-[500px] w-full flex border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden bg-neutral-50 dark:bg-neutral-900/50">
                                              <Sidebar {...activeProps}>
                                                <Sidebar.Section title="Main">
                                                  <Sidebar.Item icon={<Icon size="xs"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></Icon>} label="Dashboard" active />
                                                  <Sidebar.Item icon={<Icon size="xs"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></Icon>} label="Profile" />
                                                </Sidebar.Section>
                                                <Sidebar.Section title="System" collapsible>
                                                  <Sidebar.Item icon={<Icon size="xs"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></Icon>} label="Settings" />
                                                </Sidebar.Section>
                                              </Sidebar>
                                              <div className="flex-1 p-8 overflow-auto">
                                                <Stack spacing={6}>
                                                  <Heading level={2}>Dashboard Analytics</Heading>
                                                  <div className="grid grid-cols-2 gap-4">
                                                    <Card className="p-4"><Text tone="muted">Views</Text><Heading level={4}>12,402</Heading></Card>
                                                    <Card className="p-4"><Text tone="muted">Revenue</Text><Heading level={4}>$8,230</Heading></Card>
                                                  </div>
                                                  <Box className="h-64 bg-white dark:bg-neutral-800 rounded-xl border border-dashed border-neutral-300 dark:border-neutral-700 flex items-center justify-center">Main Content Area</Box>
                                                </Stack>
                                              </div>
                                            </div>
                                          );
                                          return (
                                            <ErrorBoundary>
                                              {doc.examples[0].render()}
                                            </ErrorBoundary>
                                          );
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
                                         listClassName="bg-transparent"
                                         items={[
                                             { id: 'usage', label: 'Usage Example', content: <CodeBlock code={example.usageCode} showLineNumbers={false} /> }
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
            ...(snippetContent[componentId] ? [{
              id: 'full-source',
              label: 'Full Source (Standalone)',
              content: (
                <div className="p-0">
                  <div className="bg-amber-50 dark:bg-amber-950/20 p-4 border-b border-amber-100 dark:border-amber-900/30 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center text-amber-600">
                      <Icon size="xs"><path d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></Icon>
                    </div>
                    <div>
                      <Text weight="bold" size="sm" className="text-amber-800 dark:text-amber-200">Standalone Component</Text>
                      <Text size="xs" className="text-amber-700/70 dark:text-amber-300/50">This file is fully self-contained. Copy and paste it directly into your project.</Text>
                    </div>
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="ml-auto text-amber-700 hover:bg-amber-100 dark:text-amber-300 dark:hover:bg-amber-900/30"
                      onClick={() => {
                        navigator.clipboard.writeText(snippetContent[componentId]);
                        alert('Source code copied to clipboard!');
                      }}
                    >
                      Copy All
                    </Button>
                  </div>
                  <div className="max-h-[800px] overflow-auto">
                    <CodeBlock code={snippetContent[componentId] || ''} language="tsx" showLineNumbers={true} />
                  </div>
                </div>
              )
            }] : []),
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
