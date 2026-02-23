
import React from 'react';
import { 
  Button, Badge, Text, Heading, Icon, Avatar, AvatarGroup, Spinner, IconButton, SplitButton, HamburgerButton, Box, Flex,
  Label, Caption, Code, Blockquote
} from '../components/ui/Primitives';
import { Divider } from '../components/ui/divider';
import { Card, Stack, Container } from '../components/ui/Layout';
import { 
  Input, Checkbox, Radio, Switch, Textarea, Select, Slider, 
  FormField, SearchInput, LoginForm, SignupForm, DatePicker, TimePicker 
} from '../components/ui/Forms';
import { 
  Modal, Tooltip, Tabs, Alert, Toast, Pagination, Dropdown, Popover, Accordion, Table, MagicBento, Wizard
} from '../components/ui/Composite';
import { 
  Breadcrumbs, Stepper 
} from '../components/ui/Navigation';
import { Navbar } from '../components/navigation/Navbar';
import { Sidebar } from '../components/navigation/Sidebar';
import { SidebarPreview } from '../components/ui/SidebarPreview';

import { 
  HeroSection, FeatureGrid, PricingSection, AuthLayout, DashboardLayout, Footer, Page404, ErrorPage 
} from '../components/ui/Patterns';
import { AuthFlow } from '../components/ui/AuthFlow';
import { UserManager } from '../components/ui/CRUDManager';
import SearchBar from '../components/ui/SearchBar';
import { Orbit } from '../components/ui/Orbit';
import { PillNav } from '../components/ui/PillNav';
import { EcommerceTemplate } from '../components/ui/Ecommerce';


export type Category = 'Atomic' | 'Reusable' | 'Composite' | 'App-level';

export interface ComponentItem {
  id: string;
  name: string;
  category: Category;
  subCategory: string;
  variants: number;
  description: string;
  preview: React.ReactNode;
  code: string;
  info: string;
}

export const components: ComponentItem[] = [
  // --- ATOMIC (Foundation / Primitives) ---
  {
    id: 'button',
    name: 'Button',
    category: 'Atomic',
    subCategory: 'Foundation / Primitives',
    variants: 8,
    description: 'Interactive buttons for actions and triggers.',
    preview: <Button>Primary Action</Button>,
    code: '<Button variant="primary">Click Me</Button>',
    info: 'Buttons are the primary way users interact with the app.'
  },
  {
    id: 'input',
    name: 'Input',
    category: 'Atomic',
    subCategory: 'Foundation / Primitives',
    variants: 12,
    description: 'Highly customizable text inputs with multiple variants, states, and icon support.',
    preview: (
      <Stack spacing={4} className="w-full px-6">
        <Input 
          variant="default" 
          placeholder="Default variation" 
          leftIcon={<Icon size="xs"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></Icon>}
        />
        <Input 
          variant="filled" 
          placeholder="Filled variation" 
          clearable 
          value="Clearable content"
          onClear={() => {}}
        />
        <Input 
          variant="underline" 
          placeholder="Underline variation" 
          error="This is an error state"
        />
      </Stack>
    ),
    code: `// Variants
<Input variant="default" placeholder="Default" />
<Input variant="filled" placeholder="Filled" />
<Input variant="ghost" placeholder="Ghost" />
<Input variant="underline" placeholder="Underline" />

// States
<Input disabled placeholder="Disabled" />
<Input isLoading placeholder="Loading..." />
<Input error="Error message" value="Invalid" />
<Input success="Success message" value="Valid" />

// Features
<Input leftIcon={<UserIcon />} placeholder="With Icon" />
<Input clearable value="Text" onClear={handleClear} />`,
    info: 'A robust input component supporting 4 variants (default, filled, ghost, underline) and various interactive states like error, success, loading, and clearable. Includes built-in support for icons and accessibility features.'
  },
  {
    id: 'label',
    name: 'Label',
    category: 'Atomic',
    subCategory: 'Foundation / Primitives',
    variants: 30,
    description: 'A versatile label component with multiple variants, sizes, and states, matching button aesthetics.',
    preview: (
      <Stack spacing={4} className="w-full px-6">
        <div className="flex flex-wrap gap-2 justify-center">
          <Label variant="primary">Primary</Label>
          <Label variant="success">Success</Label>
          <Label variant="warning">Warning</Label>
          <Label variant="danger">Danger</Label>
          <Label variant="info">Info</Label>
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
          <Label variant="outline">Outline</Label>
          <Label variant="ghost">Ghost</Label>
          <Label variant="subtle">Subtle</Label>
          <Label variant="gradient">Gradient</Label>
        </div>
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <Label size="sm" variant="primary">Small</Label>
          <Label size="md" variant="primary">Medium</Label>
          <Label size="lg" variant="primary">Large</Label>
        </div>
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <Label isLoading variant="secondary">Loading</Label>
          <Label required variant="secondary">Required</Label>
          <Label disabled variant="secondary">Disabled</Label>
        </div>
      </Stack>
    ),
    code: `// Variants
<Label variant="primary">Primary</Label>
<Label variant="outline">Outline</Label>
<Label variant="gradient">Premium</Label>

// Sizes
<Label size="sm">Small</Label>
<Label size="lg">Large</Label>

// States
<Label isLoading>Processing...</Label>
<Label required>Required Field</Label>
<Label disabled>Inactive</Label>`,
    info: 'A robust label component supporting 10 premium variants, 3 responsive sizes, and interactive states. Designed to provide clear context for form elements and UI metadata.'
  },
  {
    id: 'badge',
    name: 'Badge',
    category: 'Atomic',
    subCategory: 'Foundation / Primitives',
    variants: 28,
    description: 'Status indicators and labels with multiple styles and tones.',
    preview: (
      <Stack spacing={4} className="w-full px-6">
        <div className="flex flex-wrap gap-2 justify-center">
          <Badge variant="primary" style="solid">Solid</Badge>
          <Badge variant="success" style="subtle">Subtle</Badge>
          <Badge variant="warning" style="soft">Soft</Badge>
          <Badge variant="danger" style="pill">Pill</Badge>
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
          <Badge variant="outline">Outline</Badge>
          <Badge variant="primary" size="sm">Small</Badge>
          <Badge variant="primary" icon={<span className="text-xs">★</span>}>Icon</Badge>
        </div>
      </Stack>
    ),
    code: `<Badge variant="success" style="subtle">Active</Badge>\n<Badge variant="primary" style="solid" size="lg">New</Badge>`,
    info: 'Versatile status indicators supporting 7 colors, 4 styles (solid, subtle, soft, pill), and 3 sizes.'
  },
  {
    id: 'avatar',
    name: 'Avatar',
    category: 'Atomic',
    subCategory: 'Foundation / Primitives',
    variants: 12,
    description: 'Visual representation of a user, supporting groups and status indicators.',
    preview: (
      <Stack spacing={6} className="w-full px-6 items-center">
        <Flex gap={4}>
          <Avatar src="https://i.pravatar.cc/150?u=1" variant="circle" />
          <Avatar src="https://i.pravatar.cc/150?u=2" variant="rounded" />
          <Avatar src="https://i.pravatar.cc/150?u=3" variant="square" />
        </Flex>
        <Flex gap={4} align="center">
          <Avatar fallback="SM" size="sm" />
          <Avatar fallback="MD" size="md" />
          <Avatar fallback="LG" size="lg" />
          <Avatar fallback="XL" size="xl" />
        </Flex>
        <Flex gap={4}>
          <Avatar src="https://i.pravatar.cc/150?u=4" status="online" />
          <Avatar src="https://i.pravatar.cc/150?u=5" status="busy" />
          <Avatar src="https://i.pravatar.cc/150?u=6" status="away" />
          <Avatar fallback="OFF" status="offline" />
        </Flex>
        <AvatarGroup limit={3}>
          <Avatar src="https://i.pravatar.cc/150?u=7" />
          <Avatar src="https://i.pravatar.cc/150?u=8" />
          <Avatar src="https://i.pravatar.cc/150?u=9" />
          <Avatar src="https://i.pravatar.cc/150?u=10" />
          <Avatar src="https://i.pravatar.cc/150?u=11" />
        </AvatarGroup>
      </Stack>
    ),
    code: `// Variants
<Avatar variant="circle" src="..." />
<Avatar variant="rounded" fallback="JD" />
<Avatar variant="square" src="..." />

// Sizes
<Avatar size="sm" fallback="S" />
<Avatar size="xl" fallback="XL" />

// Status
<Avatar status="online" src="..." />
<Avatar status="busy" fallback="B" />

// Avatar Group
<AvatarGroup limit={3}>
  <Avatar src="..." />
  <Avatar src="..." />
  <Avatar src="..." />
  <Avatar src="..." />
</AvatarGroup>`,
    info: 'Displays user profile photos or initials. Supports 3 shapes, 4 sizes, status indicators, and grouped displays with verification limits.'
  },
  {
    id: 'spinner',
    name: 'Spinner',
    category: 'Atomic',
    subCategory: 'Foundation / Primitives',
    variants: 4,
    description: 'Indicates loading state.',
    preview: <Spinner />,
    code: '<Spinner size="md" />',
    info: 'Used when content is being fetched or processed.'
  },
  {
    id: 'divider',
    name: 'Divider',
    category: 'Atomic',
    subCategory: 'Foundation / Primitives',
    variants: 9,
    description: 'A professional divider with support for text, gradients, and multiple styles including glass and glow.',
    preview: (
      <Stack spacing={6} className="w-full px-6 py-4">
          <Divider />
          <Divider label="Section Break" />
          <Divider variant="dashed" />
          <Divider thickness={2} />
          <Divider thickness={2} color="var(--primary-500)" />
          <Divider variant="zigzag" thickness={2} />
      </Stack>
    ),
    code: '<Divider variant="glass" label="Section" />',
    info: 'Supports horizontal/vertical orientation, text labels, and premium styles like Glass and Glow.'
  },
  {
    id: 'checkbox',
    name: 'Checkbox',
    category: 'Atomic',
    subCategory: 'Foundation / Primitives',
    variants: 3,
    description: 'Toggleable selection box.',
    preview: <Checkbox label="Remember me" />,
    code: '<Checkbox label="Option" />',
    info: 'Allows selection of one or more items.'
  },
  {
    id: 'radio',
    name: 'Radio',
    category: 'Atomic',
    subCategory: 'Foundation / Primitives',
    variants: 3,
    description: 'Single selection from a group.',
    preview: <Radio label="Choose this" />,
    code: '<Radio label="Option" />',
    info: 'Selection of a single item from a set.'
  },
  {
    id: 'switch',
    name: 'Switch',
    category: 'Atomic',
    subCategory: 'Foundation / Primitives',
    variants: 3,
    description: 'On/Off toggle control.',
    preview: <Switch checked={true} onChange={() => {}} />,
    code: '<Switch label="Toggle" />',
    info: 'Used for binary settings.'
  },

  // --- REUSABLE (Molecules) ---
  {
    id: 'search-bar',
    name: 'SearchBar',
    category: 'Reusable',
    subCategory: 'Molecules',
    variants: 24, // 12 styles * 2 positions of icon
    description: 'A premium, standalone search bar with 12 visual styles (Glass, Neumorphic, etc.) and interactive filtering logic.',
    preview: (
      <div className="w-full flex justify-center p-4">
        <SearchBar variant="default" shape="pill" placeholder="Quick search..." fullWidth />
      </div>
    ),
    code: '<SearchBar variant="glass" shape="pill" fullWidth />',
    info: 'Supports Basic (8), Shape (3), and Modern (4) variants. Includes built-in dark mode and interactive states.'
  },
  {
    id: 'tabs',
    name: 'Tabs',
    category: 'Reusable',
    subCategory: 'Molecules',
    variants: 10,
    description: 'A premium, feature-rich tabs component with 8 professional variants, advanced animations, and intensive interactive props.',
    preview: (
      <div className="w-full space-y-12 p-6 max-h-[600px] overflow-y-auto no-scrollbar">
        <div className="space-y-4">
          <Text variant="label-md" tone="muted">Underline (Modern Default)</Text>
          <Tabs 
            variant="underline"
            items={[
              { id: 't1', label: 'Overview', content: <div className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg">Overview Content</div> },
              { id: 't2', label: 'Analytics', content: <div className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg">Analytics Content</div> },
              { id: 't3', label: 'Settings', content: <div className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg">Settings Content</div> },
            ]} 
          />
        </div>

        <div className="space-y-4">
          <Text variant="label-md" tone="muted">Segmented (Premium Feel)</Text>
          <Tabs 
            variant="segmented"
            fullWidth
            items={[
              { id: 's1', label: 'Monthly', content: <div className="text-center py-4 font-bold text-2xl">$19/mo</div> },
              { id: 's2', label: 'Yearly', content: <div className="text-center py-4 font-bold text-2xl">$180/yr</div> },
            ]} 
          />
        </div>

        <div className="space-y-4">
          <Text variant="label-md" tone="muted">Icon + Label Tabs</Text>
          <Tabs 
            variant="icon-label"
            items={[
              { id: 'i1', label: 'Home', icon: <Icon size="xs"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></Icon>, content: 'Home View', badge: 3 },
              { id: 'i2', label: 'Messages', icon: <Icon size="xs"><path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></Icon>, content: 'Messages View', badge: 12 },
              { id: 'i3', label: 'Profile', icon: <Icon size="xs"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></Icon>, content: 'Profile View' },
            ]} 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <Text variant="label-md" tone="muted">Vertical Sidebar</Text>
            <div className="border border-neutral-200 dark:border-neutral-800 rounded-xl p-4 min-h-[200px]">
              <Tabs 
                variant="vertical"
                items={[
                  { id: 'v1', label: 'General', description: 'Account settings and more', content: 'General Settings' },
                  { id: 'v2', label: 'Security', description: 'MFA, passwords', content: 'Security Settings' },
                  { id: 'v3', label: 'Billing', description: 'Invoices and plans', content: 'Billing Info' },
                ]} 
              />
            </div>
          </div>
          <div className="space-y-4">
            <Text variant="label-md" tone="muted">Pills (Professional)</Text>
            <Tabs 
              variant="pills"
              items={[
                { id: 'p1', label: 'Design', content: 'Design Assets' },
                { id: 'p2', label: 'Code', content: 'Code Snippets' },
                { id: 'p3', label: 'Docs', content: 'Documentation' },
              ]} 
            />
          </div>
        </div>
      </div>
    ),
    code: `<Tabs 
  variant="underline" 
  size="md" 
  items={[
    { id: '1', label: 'Overview', content: <Overview /> },
    { id: '2', label: 'Settings', content: <Settings /> }
  ]} 
/>`,
    info: 'Professional multi-variant tabs with Framer Motion animations. Supports Underline, Pills, Card, Vertical, Segmented, and Contained styles. Features include lazy loading, badges, icon support, and fluid transitions.'
  },
  {
    id: 'card',
    name: 'Card',
    category: 'Reusable',
    subCategory: 'Molecules',
    variants: 6,
    description: 'Container for grouped content.',
    preview: <Card className="p-4"><Heading level={5}>Card Title</Heading><Text size="sm">Content goes here.</Text></Card>,
    code: '<Card>Content</Card>',
    info: 'Standard layout container.'
  },
  {
    id: 'modal',
    name: 'Modal',
    category: 'Reusable',
    subCategory: 'Molecules',
    variants: 5,
    description: 'Dialog overlays.',
    preview: <div className="border rounded-lg p-4 bg-white dark:bg-neutral-900 border-primary-500 shadow-lg scale-90 w-full"><Heading level={5}>Modal Title</Heading><div className="h-10 mt-2 bg-neutral-100 dark:bg-neutral-800 rounded" /></div>,
    code: '<Modal isOpen={true}>Content</Modal>',
    info: 'Focuses user attention on a specific task.'
  },
  {
    id: 'orbit',
    name: 'Orbit',
    category: 'Reusable',
    subCategory: 'Molecules',
    variants: 7,
    description: 'A decorative animation component where elements revolve around a center point.',
    preview: (
      <div className="w-full h-48 flex items-center justify-center overflow-hidden bg-neutral-50 dark:bg-neutral-900/50 rounded-xl relative">
        <Orbit radius={60} speed={8} direction="clockwise" itemSize={44} keepUpright={true} pauseOnHover={true} borderRadius={50}>
          <Avatar src="https://i.pravatar.cc/150?u=11" variant="circle" className="ring-2 ring-primary-500 shadow-lg" />
          <Avatar src="https://i.pravatar.cc/150?u=22" variant="circle" className="ring-2 ring-accent-500 shadow-lg" />
          <Avatar src="https://i.pravatar.cc/150?u=33" variant="circle" className="ring-2 ring-indigo-500 shadow-lg" />
          <Avatar src="https://i.pravatar.cc/150?u=44" variant="circle" className="ring-2 ring-emerald-500 shadow-lg" />
        </Orbit>
        <div className="absolute w-10 h-10 bg-white dark:bg-neutral-800 rounded-full flex items-center justify-center shadow-inner z-10 border border-neutral-100 dark:border-neutral-700">
          <div className="w-6 h-6 bg-primary-600 rounded-full animate-pulse" />
        </div>
      </div>
    ),
    code: `<Orbit 
  radius={120} 
  speed={10} 
  direction="clockwise" 
  itemSize={60} 
  keepUpright={true}
>
  <Avatar src="..." />
  <Avatar src="..." />
  <Avatar src="..." />
</Orbit>`,
    info: 'Premium orbital animation system for displaying revolving elements with automated rotations. Perfect for showcasing team members, technology stacks, or featured items. Supports configurable radius, speed, direction, and item orientation. Features automatic pause-on-hover and smart reduced-motion support.'
  },
  {
    id: 'target-cursor',
    name: 'Target Cursor',
    category: 'Reusable',
    subCategory: 'Molecules',
    variants: 3,
    description: 'A high-end reticle-style cursor that snaps to element boundaries with precision corner brackets and fluid animations. Designed for clean, technical interfaces.',
    preview: (
      <div className="w-full h-56 flex items-center justify-center bg-neutral-900 rounded-xl relative overflow-hidden group border border-neutral-800 shadow-2xl">
        <div className="text-center z-10">
          <Text variant="caption" className="mb-4 text-neutral-500 uppercase tracking-widest font-bold">Interactive Reticle Demo</Text>
          <div className="flex gap-6">
            <div data-cursor-target="true" data-cursor-type="action" className="w-14 h-14 bg-primary-500/10 border border-primary-500/50 rounded-2xl flex items-center justify-center cursor-none hover:bg-primary-500/20 transition-colors">
              <Icon size="sm" className="text-primary-400"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></Icon>
            </div>
            <div data-cursor-target="true" data-cursor-type="info" className="w-14 h-14 bg-white/5 border border-white/20 rounded-2xl flex items-center justify-center cursor-none hover:bg-white/10 transition-colors">
              <Icon size="sm" className="text-neutral-400"><path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" /></Icon>
            </div>
          </div>
        </div>
        {/* Soft atmospheric background elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-600/10 blur-[60px]" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent-600/10 blur-[60px]" />
      </div>
    ),
    code: '<TargetCursor padding={8} stiffness={400} />',
    info: 'A precision reticle cursor system that automatically snaps to elements marked with data-cursor-target. It adjusts its dimensions to match the target element and features smooth, high-frequency spring physics.'
  },
  {
    id: 'pill-nav',
    name: 'Pill Navigation',
    category: 'Reusable',
    subCategory: 'Molecules',
    variants: 3,
    description: 'A fluid navigation component with animated active state that magnetically glides between items.',
    preview: (
        <div className="w-full h-40 flex flex-col items-center justify-center gap-8 bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800">
            <PillNav defaultValue="home">
                <PillNav.Item value="home">Home</PillNav.Item>
                <PillNav.Item value="projects">Projects</PillNav.Item>
                <PillNav.Item value="about">About</PillNav.Item>
                <PillNav.Item value="contact" disabled>Contact</PillNav.Item>
            </PillNav>
            
            <PillNav defaultValue="design" animationType="elastic">
                <PillNav.Item value="code">Code</PillNav.Item>
                <PillNav.Item value="design">Design</PillNav.Item>
                <PillNav.Item value="manage">Manage</PillNav.Item>
            </PillNav>
        </div>
    ),
    code: `<PillNav defaultValue="home">
  <PillNav.Item value="home">Home</PillNav.Item>
  <PillNav.Item value="projects">Projects</PillNav.Item>
  <PillNav.Item value="about">About</PillNav.Item>
</PillNav>`,
    info: 'Use for segmented controls or page navigation. Supports spring, smooth, and elastic animations with keyboard support.'
  },

  // --- COMPOSITE (Organisms / Patterns) ---
  {
    id: 'navbar',
    name: 'Navbar',
    category: 'Composite',
    subCategory: 'Organisms / Patterns',
    variants: 2,
    description: 'Top-level navigation header.',
    preview: <div className="w-full h-12 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded flex items-center px-4 justify-between scale-90"><div className="w-8 h-8 bg-primary-600 rounded" /><div className="flex gap-2"><div className="w-10 h-2 bg-neutral-200 dark:bg-neutral-700 rounded" /><div className="w-10 h-2 bg-neutral-200 dark:bg-neutral-700 rounded" /></div></div>,
    code: '<Navbar />',
    info: 'Complete responsive navigation bar.'
  },
  {
    id: 'sidebar',
    name: 'Sidebar',
    category: 'Composite',
    subCategory: 'Organisms / Patterns',
    variants: 4,
    description: 'A professional, production-ready navigation sidebar with support for multiple variants, states, and responsive behavior.',
    preview: <SidebarPreview />,
    code: `import { Sidebar } from "nexus-ui";

// Basic Usage
<Sidebar>
  <Sidebar.Section title="Main">
    <Sidebar.Item icon={<HomeIcon />} label="Home" active />
    <Sidebar.Item icon={<ChartIcon />} label="Analytics" badge={<Badge>New</Badge>} />
  </Sidebar.Section>
  
  <Sidebar.Section title="System" collapsible>
    <Sidebar.Item icon={<SettingsIcon />} label="Settings" />
  </Sidebar.Section>
</Sidebar>`,
    info: 'A robust composite component built with the compound component pattern. Supports Default, Minimal, Floating, and Glass variants. Features include controlled/uncontrolled collapse, expand-on-hover, nested sections, badges, and full keyboard accessibility.'
  },
  {
    id: 'hero-section',
    name: 'Hero Section',
    category: 'Composite',
    subCategory: 'Organisms / Patterns',
    variants: 3,
    description: 'Main landing page header.',
    preview: <div className="text-center py-6 scale-90 border rounded bg-neutral-50 dark:bg-neutral-900 w-full"><Heading level={3}>Title</Heading><Button className="mt-2" size="sm">Get Started</Button></div>,
    code: '<HeroSection />',
    info: 'Premium hero section with CTA.'
  },

  {
    id: 'wizard',
    name: 'Wizard',
    category: 'Composite',
    subCategory: 'Organisms / Patterns',
    variants: 8,
    description: 'Advanced multi-step process indicator with premium visual styles, animations, and accessibility.',
    preview: (
      <div className="w-full scale-90 origin-top p-4">
        <Wizard 
          variant="modern"
          currentStep={1}
          steps={[
            { id: 1, title: 'Account', description: 'Setup details', icon: <span className="text-xl">👤</span> },
            { id: 2, title: 'Profile', description: 'Personal info', icon: <span className="text-xl">📝</span> },
            { id: 3, title: 'Confirm', description: 'Review data', icon: <span className="text-xl">✅</span> },
          ]}
        />
      </div>
    ),
    code: `<Wizard 
  variant="modern" // 'default' | 'minimal' | 'glass' | 'gradient'
  currentStep={1} 
  onStepChange={(step) => console.log(step)}
  steps={[
    { title: 'Account', description: 'Setup details', icon: <UserIcon /> },
    { title: 'Profile', description: 'Personal info', icon: <ProfileIcon /> },
    { title: 'Confirm', description: 'Review data', icon: <CheckIcon /> },
  ]} 
/>`,
    info: 'Professional multi-step navigation with 8 variants, glassmorphism support, and animated transitions.'
  },
  {
    id: 'magic-bento',
    name: 'Magic Bento',
    category: 'Composite',
    subCategory: 'Organisms / Patterns',
    variants: 1,
    description: 'A visually striking grid layout with mouse-tracking spotlight effects. Perfect for feature showcases and interactive bento-box style interfaces.',
    preview: (
      <div className="w-full scale-75 origin-top">
        <MagicBento 
          items={[
            { id: '1', title: 'Analytics', description: 'Real-time data insights.', span: 2, icon: <span className="text-2xl">📊</span> },
            { id: '2', title: 'Security', description: 'Enterprise-grade protection.', span: 1, icon: <span className="text-2xl">🛡️</span> },
            { id: '3', title: 'Cloud', description: 'Scalable infrastructure.', span: 1, icon: <span className="text-2xl">☁️</span> },
            { id: '4', title: 'AI Driven', description: 'Powered by machine learning.', span: 2, icon: <span className="text-2xl">🤖</span> },
          ]}
        />
      </div>
    ),
    code: `<MagicBento 
  items={[
    { 
      id: '1', 
      title: 'Analytics', 
      description: 'Real-time data', 
      span: 2, 
      icon: <span className="text-2xl">📊</span> 
    },
    { 
      id: '2', 
      title: 'Security', 
      description: 'End-to-end encryption', 
      span: 1 
    },
    // ...
  ]} 
/>`,
    info: 'A visually striking grid layout with mouse-tracking spotlight effects. Perfect for feature showcases.'
  },


  // --- APP-LEVEL (Templates / Pages) ---
  {
    id: 'landing-page',
    name: 'Landing Page (Modular)',
    category: 'App-level',
    subCategory: 'Templates / Pages',
    variants: 6,
    description: 'Modern, fully modular landing page template with multiple sections and layouts.',
    preview: <div className="scale-[0.5] origin-top border rounded-xl bg-white dark:bg-neutral-900 shadow-xl overflow-hidden h-[300px] w-full"><div className="p-8 text-center bg-indigo-600 text-white font-bold h-full flex flex-col items-center justify-center">Landing Page Template<div className="text-xs font-normal opacity-80 mt-2">Modular & Responsive</div></div></div>,
    code: '<LandingPage variant="saas" theme="light" />',
    info: 'A collection of production-ready sections for building high-conversion pages.'
  },
  {
    id: 'admin-dashboard',
    name: 'Admin Dashboard',
    category: 'App-level',
    subCategory: 'Templates / Pages',
    variants: 1,
    description: 'A complete, ready-to-use admin dashboard template with sidebar, topbar, and metrics.',
    preview: (
      <div className="w-full h-full bg-neutral-50 dark:bg-neutral-950 rounded-xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800 scale-[0.35] origin-top transform-gpu">
        <div className="flex bg-neutral-50 dark:bg-neutral-950 h-[800px] w-[1400px]">
          <div className="w-64 bg-neutral-900 h-full p-6 flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary-600 rounded-lg" />
              <div className="h-4 w-24 bg-white/20 rounded" />
            </div>
            <div className="space-y-4">
              <div className="h-3 w-16 bg-white/10 rounded" />
              <div className="h-8 w-full bg-white/5 rounded" />
              <div className="h-8 w-full bg-white/5 rounded" />
            </div>
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-violet-500 opacity-80">
              Dashboard
            </span>
          </div>
          <div className="flex-1 flex flex-col">
            <div className="h-16 bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between px-8">
              <div className="h-8 w-64 bg-neutral-100 dark:bg-neutral-800 rounded-lg" />
              <div className="flex gap-4">
                <div className="h-8 w-8 bg-neutral-100 dark:bg-neutral-800 rounded-full" />
                <div className="h-8 w-24 bg-neutral-100 dark:bg-neutral-800 rounded-lg" />
              </div>
            </div>
            <div className="p-8 space-y-8">
              <div className="grid grid-cols-4 gap-6">
                <div className="h-32 bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-sm" />
                <div className="h-32 bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-sm" />
                <div className="h-32 bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-sm" />
                <div className="h-32 bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-sm" />
              </div>
              <div className="h-96 bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-sm" />
            </div>
          </div>
        </div>
      </div>
    ),
    code: `import { AdminDashboard, StatCard, MiniChart, AdvancedTable } from "./components/ui/Dashboard";

<AdminDashboard user={{ name: "Jane Doe", role: "Manager" }}>
  <div className="grid grid-cols-4 gap-6 mb-8">
    <StatCard stat={{ label: "Total Users", value: "2,543", trend: { value: 12, isUp: true } }} />
    {/* ... */}
  </div>
  <AdvancedTable columns={columns} data={data} />
</AdminDashboard>`,
    info: 'A comprehensive dashboard template for administrative interfaces.'
  },
  {
    id: 'auth-flow',
    name: 'Authentication Flow',
    category: 'App-level',
    subCategory: 'Templates / Pages',
    variants: 5,
    description: 'A complete, multi-step authentication process including Login, Signup, Reset Password, and MFA.',
    preview: <div className="scale-[0.5] origin-top h-[350px] overflow-hidden border border-neutral-200 dark:border-neutral-800 rounded-3xl shadow-2xl relative"><AuthFlow isFullPage={false} /></div>,
    code: `// Comprehensive Authentication Flow
<AuthFlow 
  initialStep="login" 
  onSuccess={(user) => console.log('Logged in:', user)} 
/>`,
    info: 'Handles all authentication states: Login (with loading/error), Signup, Forgot Password, OTP Verification, and Success feedback.'
  },

  {
    id: 'crud-management',
    name: 'CRUD Management',
    category: 'App-level',
    subCategory: 'Templates / Pages',
    variants: 1,
    description: 'A premium, production-ready user management system with full CRUD operations, bulk actions, and permission-aware interfaces.',
    preview: (
      <div className="w-full h-full bg-neutral-50 dark:bg-neutral-950 rounded-xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800 scale-[0.3] origin-top transform-gpu">
        <div className="p-8">
          <UserManager initialRole="Admin" />
        </div>
      </div>
    ),
    code: `import { UserManager } from "./components/ui/CRUDManager";

// Full CRUD with Permission Simulation
<UserManager initialRole="Admin" />`,
    info: 'Comprehensive CRUD lifecycle: Real-time search/sort, field validation, unsaved change detection, bulk actions (delete/status), and permission-based UI states (Admin/Editor/Viewer).'
  },
  {
    id: 'ecommerce-marketplace',
    name: 'E-commerce Marketplace',
    category: 'App-level',
    subCategory: 'Templates / Pages',
    variants: 1,
    description: 'A robust product-based marketplace template featuring filtering, advanced product details, cart with motion-driven interactions, and multi-step checkout.',
    preview: (
      <div className="w-full h-full bg-white dark:bg-neutral-950 rounded-xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800 scale-[0.3] origin-top transform-gpu">
        <EcommerceTemplate />
      </div>
    ),
    code: `import { EcommerceTemplate } from "./components/ui/Ecommerce";

// Complete Marketplace Experience
<EcommerceTemplate />`,
    info: 'A high-complexity template for product-based startups. Includes a responsive product grid with dynamic filtering, a slide-out cart drawer with spring physics, and a full checkout lifecycle.'
  }
];
