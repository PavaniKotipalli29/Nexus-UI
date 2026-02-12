
import React from 'react';
import { 
  Button, Badge, Text, Heading, Icon, Avatar, AvatarGroup, Spinner, IconButton, SplitButton, HamburgerButton, Box, Flex,
  Label, Caption, Code, Blockquote
} from '../components/ui/Primitives';
import { Card, Stack, Container } from '../components/ui/Layout';
import { 
  Input, Checkbox, Radio, Switch, Textarea, Select, Slider, 
  FormField, SearchInput, LoginForm, SignupForm, DatePicker, TimePicker 
} from '../components/ui/Forms';
import { 
  Modal, Tooltip, Tabs, Alert, Toast, Pagination, Dropdown, Popover, Accordion, Table 
} from '../components/ui/Composite';
import { 
  Breadcrumbs, Stepper 
} from '../components/ui/Navigation';
import { Navbar } from '../components/navigation/Navbar';
import { Sidebar } from '../components/navigation/Sidebar';

import { 
  HeroSection, FeatureGrid, PricingSection, AuthLayout, DashboardLayout, Footer, Page404, ErrorPage 
} from '../components/ui/Patterns';
import { AuthFlow } from '../components/ui/AuthFlow';
import { UserManager } from '../components/ui/CRUDManager';
import { Orbit } from '../components/ui/Orbit';

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
    variants: 2,
    description: 'Visual separator between sections.',
    preview: <div className="w-full h-px bg-neutral-200 dark:bg-neutral-800" />,
    code: '<Divider />',
    info: 'Separates content blocks visually.'
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
  {
    id: 'text',
    name: 'Text',
    category: 'Atomic',
    subCategory: 'Foundation / Primitives',
    variants: 11,
    description: 'The fundamental typography component for all text content.',
    preview: (
      <Stack spacing={2} className="w-full px-6 text-center">
        <Text variant="heading-md" weight="bold">Heading MD</Text>
        <Text variant="body-md">Body MD (Default)</Text>
        <Text variant="caption" tone="muted">Caption / Muted</Text>
      </Stack>
    ),
    code: `<Text variant="heading-lg">Title</Text>\n<Text variant="body-md" tone="muted">Subtitle</Text>`,
    info: 'Unified typography component supporting display, heading, body, label, caption, and code variants with various weights and tones.'
  },
  {
    id: 'heading',
    name: 'Heading',
    category: 'Atomic',
    subCategory: 'Foundation / Primitives',
    variants: 6,
    description: 'Page and section titles.',
    preview: (
      <Stack spacing={2} className="w-full px-6 text-center">
        <Heading level={2}>Section Title</Heading>
        <Heading level={4} tone="primary">Sub-heading</Heading>
      </Stack>
    ),
    code: '<Heading level={1} weight="bold">Main Page Header</Heading>',
    info: 'Uses semantic H1-H6 tags with themeable levels and tones.'
  },

  // --- REUSABLE (Molecules) ---
  {
    id: 'input-field',
    name: 'InputField',
    category: 'Reusable',
    subCategory: 'Molecules',
    variants: 5,
    description: 'Input combined with label and error.',
    preview: <div className="w-full max-w-sm"><Input label="Email Address" placeholder="alex@example.com" /></div>,
    code: '<Input label="Email" placeholder="Enter email" />',
    info: 'A complete form field with label support.'
  },
  {
    id: 'search-bar',
    name: 'SearchBar',
    category: 'Reusable',
    subCategory: 'Molecules',
    variants: 3,
    description: 'Enhanced input for searching.',
    preview: <div className="w-full max-w-sm"><SearchInput placeholder="Search components..." /></div>,
    code: '<SearchInput placeholder="Search..." />',
    info: 'Includes search icon and clear functionality.'
  },
  {
    id: 'tabs',
    name: 'Tabs',
    category: 'Reusable',
    subCategory: 'Molecules',
    variants: 3,
    description: 'Organize content into views.',
    preview: <div className="flex gap-2 border-b w-full px-2"><div className="border-b-2 border-primary-500 px-2 py-1 text-xs font-bold">Tab 1</div><div className="px-2 py-1 text-xs text-neutral-400">Tab 2</div></div>,
    code: '<Tabs items={items} />',
    info: 'Switcher for tabbed content.'
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
    id: 'alert',
    name: 'Alert',
    category: 'Reusable',
    subCategory: 'Molecules',
    variants: 4,
    description: 'Feedback messages.',
    preview: <div className="w-full px-4"><div className="bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded p-2 text-xs">Note: Success notification.</div></div>,
    code: '<Alert variant="info">Message</Alert>',
    info: 'Shows status updates or warnings.'
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
    variants: 2,
    description: 'Vertical application menu.',
    preview: <div className="w-20 h-32 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded p-2 flex flex-col gap-2 scale-90"><div className="h-2 w-full bg-neutral-200 dark:bg-neutral-700 rounded" /><div className="h-2 w-full bg-neutral-200 dark:bg-neutral-700 rounded" /><div className="h-2 w-full bg-neutral-200 dark:bg-neutral-700 rounded" /></div>,
    code: '<Sidebar />',
    info: 'Side navigation system with categories.'
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
    variants: 6,
    description: 'Multi-step process indicator with various visual styles.',
    preview: <div className="w-full flex items-center justify-center gap-2 scale-75 overflow-hidden">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center text-[10px] text-white font-bold">1</div>
        <div className="w-8 h-0.5 bg-primary-600" />
        <div className="w-6 h-6 rounded-full border-2 border-primary-600 flex items-center justify-center text-[10px] text-primary-600 font-bold">2</div>
        <div className="w-8 h-0.5 bg-neutral-200" />
        <div className="w-6 h-6 rounded-full bg-neutral-100 flex items-center justify-center text-[10px] text-neutral-400 font-bold">3</div>
      </div>
    </div>,
    code: '<Wizard steps={steps} currentStep={1} />',
    info: 'Professional multi-step navigation for complex flows.'
  },

  // --- APP-LEVEL (Templates / Pages) ---
  {
    id: 'login-page',
    name: 'Login Page',
    category: 'App-level',
    subCategory: 'Templates / Pages',
    variants: 2,
    description: 'Full authentication screen.',
    preview: <div className="scale-[0.6] origin-top border rounded-xl bg-white dark:bg-neutral-900 shadow-xl overflow-hidden h-[300px] w-full"><LoginForm onSubmit={() => {}} /></div>,
    code: '<AuthLayout><LoginForm /></AuthLayout>',
    info: 'A complete login flow template.'
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
    id: 'landing-page',
    name: 'Landing Page',
    category: 'App-level',
    subCategory: 'Templates / Pages',
    variants: 2,
    description: 'Modern product homepage.',
    preview: <div className="scale-[0.4] origin-top border rounded-2xl overflow-hidden bg-white dark:bg-neutral-950 w-full h-[300px]"><Navbar onToggleDarkMode={() => {}} isDarkMode={false} /><div className="pt-20 text-center"><Heading level={1}>Better UI</Heading></div></div>,
    code: '<LandingPage />',
    info: 'Multi-section landing page template.'
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
  }
];
