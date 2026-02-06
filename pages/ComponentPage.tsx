import React, { useState } from 'react';
import { Heading, Text, Badge, Button, IconButton, SplitButton, HamburgerButton, Avatar, Box, Flex, Icon } from '../components/ui/Primitives';
import { Card, Stack, Container } from '../components/ui/Layout';
import { Input, Checkbox, Switch, Textarea, Select, Radio, Slider } from '../components/ui/Forms';
import { Spinner, Skeleton, ProgressBar } from '../components/ui/Feedback';
import { ColorPalette, TypographyScale, SpacingScale, DesignTokens, MotionTokens, CSSReset, ThemeProviderInfo } from '../components/ui/Foundations';
import { 
  Modal, Drawer, Tooltip, Popover, Tabs, Accordion, Dropdown, Table, Pagination, Alert, Toast, NotificationBanner, EmptyState 
} from '../components/ui/Composite';
import {
  List, ListItem, ListItemIcon, ListItemText, ListDivider
} from '../components/ui/list/List';
import { 
  FormWrapper, LoginForm, SignupForm, ForgotPasswordForm, ResetPasswordForm, OTPVerification, PasswordStrengthMeter, FileUpload, DatePicker, TimePicker, SearchInput, Label, FormField, ErrorMessage 
} from '../components/ui/Forms';
import { 
  Breadcrumbs, Stepper, CommandPalette 
} from '../components/ui/Navigation';
import { 
  AuthLayout, DashboardLayout, HeroSection, FeatureGrid, PricingSection, Footer, Page404, ErrorPage 
} from '../components/ui/Patterns';
import { 
  ThemeToggle, CopyToClipboard, CodeBlock, Portal, ResponsiveVisibility, VisuallyHidden, FocusTrap 
} from '../components/ui/Utilities';

interface ComponentDoc {
  id: string;
  name: string;
  category: string;
  description: string;
  examples: { title: string, render: () => React.ReactNode, code: string }[];
  props: { name: string, type: string, default: string, desc: string }[];
  usageGuidelines?: string;
  accessibilityNotes?: string;
}

const docs: Record<string, ComponentDoc> = {
  // Foundations
  colors: {
    id: 'colors',
    name: 'Colors',
    category: 'Foundations',
    description: 'The color system is designed to be accessible and provide a consistent visual language. Use these colors via Tailwind classes (e.g., bg-primary-600, text-neutral-500).',
    examples: [{ 
      title: 'Color Palette', 
      render: () => <ColorPalette />, 
      code: `import React from 'react';\nimport { ColorPalette } from '../components/ui/Foundations';\n\nconst Example = () => (\n  <div className="space-y-8">\n    <ColorPalette />\n    \n    {/* Manual usage */}\n    <div className="flex gap-4 mt-6">\n      <div className="px-4 py-2 bg-primary-600 text-white rounded">Primary 600</div>\n      <div className="px-4 py-2 bg-neutral-200 text-neutral-900 rounded">Neutral 200</div>\n    </div>\n  </div>\n);\n\nexport default Example;` 
    }],
    props: [
      { name: 'className', type: 'string', default: '-', desc: 'Additional CSS classes.' },
      { name: 'title', type: 'string', default: '-', desc: 'Optional header title.' },
      { name: 'description', type: 'string', default: '-', desc: 'Optional description text.' }
    ]
  },
  'typography-scale': {
    id: 'typography-scale',
    name: 'Typography Scale',
    category: 'Foundations',
    description: 'Our typography system is optimized for readability. Use standard Tailwind text utilities.',
    examples: [{ 
      title: 'Scale', 
      render: () => <TypographyScale />, 
      code: `import React from 'react';\nimport { TypographyScale } from '../components/ui/Foundations';\n\nconst TypographyExample = () => (\n  <div className="space-y-4">\n    <TypographyScale \n      title="Font Scale" \n      description="Standard typography rhythm for Nexus UI." \n    />\n    \n    {/* Manual usage */}\n    <h1 className="text-4xl lg:text-5xl font-extrabold mt-8">Heading 1</h1>\n    <p className="text-base font-normal text-neutral-600">Body text with base size.</p>\n  </div>\n);\n\nexport default TypographyExample;` 
    }],
    props: [
      { name: 'className', type: 'string', default: '-', desc: 'Additional CSS classes.' },
      { name: 'title', type: 'string', default: '-', desc: 'Optional section heading.' },
      { name: 'description', type: 'string', default: '-', desc: 'Optional descriptive text.' }
    ]
  },
  spacing: {
    id: 'spacing',
    name: 'Spacing',
    category: 'Foundations',
    description: 'A consistent spacing scale helps create a visual rhythm. Based on the 4px grid.',
    examples: [{ 
      title: 'Scale', 
      render: () => <SpacingScale />, 
      code: `import React from 'react';\nimport { SpacingScale } from '../components/ui/Foundations';\n\nconst Example = () => (\n  <div className="space-y-4">\n    <SpacingScale />\n    \n    {/* Utility classes examples */}\n    <div className="flex flex-col gap-4 mt-8">\n      <div className="p-4 bg-primary-50 border border-primary-200">Padding 4 (16px)</div>\n      <div className="m-2 bg-neutral-50 border border-neutral-200">Margin 2 (8px)</div>\n      <div className="w-12 h-12 bg-primary-500 rounded">48px Box</div>\n    </div>\n  </div>\n);\n\nexport default Example;` 
    }],
    props: [
      { name: 'className', type: 'string', default: '-', desc: 'Additional CSS classes.' },
      { name: 'title', type: 'string', default: '-', desc: 'Optional header title.' },
      { name: 'description', type: 'string', default: '-', desc: 'Optional descriptive text.' }
    ]
  },
  'design-tokens': {
    id: 'design-tokens',
    name: 'Design Tokens',
    category: 'Foundations',
    description: 'Core design values for border radius and shadow depth.',
    examples: [{ 
      title: 'Border & Shadows', 
      render: () => <DesignTokens />, 
      code: `import React from 'react';\nimport { DesignTokens } from '../components/ui/Foundations';\n\nconst TokensExample = () => (\n  <div className="p-8 space-y-12">\n    <DesignTokens />\n    \n    {/* Direct usage */}\n    <div className="grid grid-cols-2 gap-8 mt-12">\n      <div className="p-6 bg-white rounded-xl shadow-xl flex items-center justify-center font-bold">XL Radius + XL Shadow</div>\n      <div className="p-6 bg-white rounded-md shadow-md flex items-center justify-center font-bold">MD Radius + MD Shadow</div>\n    </div>\n  </div>\n);\n\nexport default TokensExample;` 
    }],
    props: [
      { name: 'className', type: 'string', default: '-', desc: 'Additional CSS classes.' },
      { name: 'title', type: 'string', default: '-', desc: 'Optional section title.' },
      { name: 'description', type: 'string', default: '-', desc: 'Optional descriptive text.' }
    ]
  },
  motion: {
    id: 'motion',
    name: 'Motion Tokens',
    category: 'Foundations',
    description: 'Standardized animation durations and easing curves.',
    examples: [{ 
      title: 'Scale', 
      render: () => <MotionTokens />, 
      code: `import React from 'react';\nimport { MotionTokens } from '../components/ui/Foundations';\n\nconst MotionExample = () => (\n  <div className="space-y-12">\n    <MotionTokens />\n    \n    {/* Application example */}\n    <div className="p-8 bg-neutral-50 dark:bg-neutral-900 rounded-xl flex items-center justify-center">\n       <div className="w-24 h-24 bg-primary-500 rounded-lg transition-all duration-300 ease-in-out hover:scale-110 hover:rotate-3 shadow-lg flex items-center justify-center text-white font-bold cursor-pointer">\n         Hover me\n       </div>\n    </div>\n  </div>\n);\n\nexport default MotionExample;` 
    }],
    props: [
      { name: 'className', type: 'string', default: '-', desc: 'Additional CSS classes.' },
      { name: 'title', type: 'string', default: '-', desc: 'Optional section title.' },
      { name: 'description', type: 'string', default: '-', desc: 'Optional descriptive text.' }
    ]
  },
  'css-reset': {
    id: 'css-reset',
    name: 'CSS Reset',
    category: 'Foundations',
    description: 'Global stylesheet to normalize browser defaults across all platforms.',
    examples: [{ 
      title: 'Features & Styles', 
      render: () => <CSSReset />, 
      code: `import React from 'react';\nimport { CSSReset } from '../components/ui/Foundations';\n\n// Typically included in your main index.css or App.tsx\nconst AppWrapper = ({ children }) => (\n  <div className="nexus-ui-app">\n    <CSSReset />\n    {children}\n  </div>\n);\n\n/* In index.css: */\n@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n@layer base {\n  html {\n    @apply antialiased scroll-smooth;\n    text-rendering: optimizeLegibility;\n  }\n}` 
    }],
    props: [
      { name: 'className', type: 'string', default: '-', desc: 'Additional CSS classes.' },
      { name: 'title', type: 'string', default: '-', desc: 'Optional section heading.' },
      { name: 'description', type: 'string', default: '-', desc: 'Optional descriptive text.' }
    ]
  },
  'theme-provider': {
    id: 'theme-provider',
    name: 'Theme Provider',
    category: 'Foundations',
    description: 'The foundation for dark mode and styling theme management.',
    examples: [{ 
      title: 'Context Usage', 
      render: () => <ThemeProviderInfo />, 
      code: `import React from 'react';\nimport { ThemeProvider, useTheme } from '../context/ThemeContext';\n\n// 1. Root configuration\nexport const NexusRoot = ({ children }) => (\n  <ThemeProvider \n    defaultTheme="system" \n    storageKey="nexus-ui-theme"\n  >\n    {children}\n  </ThemeProvider>\n);\n\n// 2. Toggling theme in a component\nconst ThemeSwitcher = () => {\n  const { theme, setTheme } = useTheme();\n  \n  return (\n    <div className="flex bg-neutral-100 p-2 rounded-lg">\n      <button \n        className={\`px-3 py-1 rounded \${theme === "light" ? "bg-white shadow" : ""}\`}\n        onClick={() => setTheme("light")}\n      >\n        Light\n      </button>\n      <button \n        className={\`px-3 py-1 rounded \${theme === "dark" ? "bg-white shadow" : ""}\`}\n        onClick={() => setTheme("dark")}\n      >\n        Dark\n      </button>\n    </div>\n  );\n};` 
    }],
    props: [
       { name: 'className', type: 'string', default: '-', desc: 'Additional CSS classes.' },
       { name: 'title', type: 'string', default: '-', desc: 'Optional section heading.' },
       { name: 'description', type: 'string', default: '-', desc: 'Optional descriptive text.' },
       { name: 'defaultTheme', type: 'light | dark | system', default: 'system', desc: 'Default theme on first load.' },
       { name: 'storageKey', type: 'string', default: 'theme', desc: 'Key to store theme in localStorage.' },
       { name: 'attribute', type: 'string', default: 'class', desc: 'HTML attribute to toggle (class or data-theme).' }
    ]
  },

  // Primitives
  button: {
    id: 'button',
    name: 'Button',
    category: 'Primitives',
    description: 'Buttons allow users to take actions with a single tap. They come in various styles and states.',
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
            <Button variant="link">Link</Button>
          </Flex>
        ),
        code: `<Flex gap={4}>\n  <Button variant="primary">Primary</Button>\n  <Button variant="secondary">Secondary</Button>\n  <Button variant="outline">Outline</Button>\n  <Button variant="ghost">Ghost</Button>\n  <Button variant="danger">Danger</Button>\n  <Button variant="link">Link</Button>\n</Flex>`
      },
      {
        title: 'Sizes',
        render: () => (
          <Flex gap={4} align="center">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </Flex>
        ),
        code: `<Flex gap={4} align="center">\n  <Button size="sm">Small</Button>\n  <Button size="md">Medium</Button>\n  <Button size="lg">Large</Button>\n</Flex>`
      },
      {
         title: 'States',
         render: () => (
           <Flex gap={4}>
             <Button isLoading>Loading</Button>
             <Button disabled>Disabled</Button>
             <Button variant="outline" isLoading>Processing</Button>
           </Flex>
         ),
         code: `<Flex gap={4}>\n  <Button isLoading>Loading</Button>\n  <Button disabled>Disabled</Button>\n  <Button variant="outline" isLoading>Processing</Button>\n</Flex>`
      },
      {
        title: 'With Icons (Bookmark & More)',
        render: () => (
          <Flex gap={4}>
            <Button icon={<Icon size="sm"><path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/></Icon>}>
              Bookmark
            </Button>
            <Button rightIcon={<Icon size="sm"><path d="M14 5l7 7m0 0l-7 7m7-7H3"/></Icon>}>
              Next Step
            </Button>
            <Button variant="outline" isIconButton aria-label="Bookmark">
               <Icon size="md"><path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/></Icon>
            </Button>
          </Flex>
        ),
        code: `<Flex gap={4}>\n  <Button icon={<Icon><path d="..."/></Icon>}>Bookmark</Button>\n  <Button rightIcon={<Icon><path d="..."/></Icon>}>Next Step</Button>\n  <Button isIconButton><Icon><path d="..."/></Icon></Button>\n</Flex>`
      }
    ],
    props: [
      { name: 'variant', type: 'primary | secondary | outline | ghost | danger | link', default: 'primary', desc: 'Visual style.' },
      { name: 'size', type: 'sm | md | lg', default: 'md', desc: 'Size of the button.' },
      { name: 'isLoading', type: 'boolean', default: 'false', desc: 'Show loading spinner.' },
      { name: 'disabled', type: 'boolean', default: 'false', desc: 'Disable interaction.' },
      { name: 'icon', type: 'ReactNode', default: '-', desc: 'Left icon element.' },
      { name: 'rightIcon', type: 'ReactNode', default: '-', desc: 'Right icon element.' },
      { name: 'isIconButton', type: 'boolean', default: 'false', desc: 'Optimized for icon-only usage.' },
      { name: 'fullWidth', type: 'boolean', default: 'false', desc: 'Stretch to full width.' },
      { name: 'isActive', type: 'boolean', default: 'false', desc: 'Active state.' },
    ],
    usageGuidelines: `
### When to use
- **Primary**: Main call-to-action. Use only one per page/section.
- **Secondary**: Alternative actions (e.g., "Cancel", "Back").
- **Ghost**: Low priority actions or inside toolbars/menus.
- **Danger**: Destructive actions like "Delete" or "Remove".

### Common Mistakes
- Don't use multiple Primary buttons in the same view.
- Don't use vague labels like "Click here". Use action verbs like "Save" or "Submit".
    `,
    accessibilityNotes: `
### Keyboard Interaction
- **Enter** or **Space**: Activates the button.
- **Tab**: Moves focus to the button.

### ARIA & Focus
- Uses native \`<button>\` element for maximum compatibility.
- Interactive elements must have a visible focus style.
- If using an icon-only button, ensure \`aria-label\` provides a text description.
    `
  },
  text: {
    id: 'text',
    name: 'Text',
    category: 'Primitives',
    description: 'Text is the fundamental component for displaying body copy and small descriptions.',
    examples: [
      {
        title: 'Sizes',
        render: () => (
          <Stack spacing={4}>
            <Text size="3xl">3XL Text (Display)</Text>
            <Text size="2xl">2XL Text (Display)</Text>
            <Text size="xl">Extra Large Text</Text>
            <Text size="lg">Large Text</Text>
            <Text size="base">Base Text (Default)</Text>
            <Text size="sm">Small Text</Text>
            <Text size="xs">Extra Small Text</Text>
          </Stack>
        ),
        code: `<Stack spacing={4}>\n  <Text size="3xl">3XL Text</Text>\n  <Text size="2xl">2XL Text</Text>\n  <Text size="xl">XL Text</Text>\n  <Text size="lg">LG Text</Text>\n  <Text size="base">Base Text</Text>\n  <Text size="sm">SM Text</Text>\n  <Text size="xs">XS Text</Text>\n</Stack>`
      },
      {
        title: 'Weights',
        render: () => (
          <Stack spacing={4}>
            <Text weight="black">Black Weight</Text>
            <Text weight="bold">Bold Weight</Text>
            <Text weight="semibold">Semibold Weight</Text>
            <Text weight="medium">Medium Weight</Text>
            <Text weight="normal">Normal Weight</Text>
          </Stack>
        ),
        code: `<Stack spacing={4}>\n  <Text weight="black">Black</Text>\n  <Text weight="bold">Bold</Text>\n  <Text weight="semibold">Semibold</Text>\n  <Text weight="medium">Medium</Text>\n  <Text weight="normal">Normal</Text>\n</Stack>`
      },
      {
        title: 'Alignment',
        render: () => (
          <Stack spacing={4} className="max-w-md bg-neutral-100 dark:bg-neutral-800 p-4 rounded">
            <Text align="left">Left aligned text (default)</Text>
            <Text align="center">Center aligned text</Text>
            <Text align="right">Right aligned text</Text>
          </Stack>
        ),
        code: `<Stack spacing={4}>\n  <Text align="left">Left aligned</Text>\n  <Text align="center">Center aligned</Text>\n  <Text align="right">Right aligned</Text>\n</Stack>`
      },
      {
        title: 'Colors',
        render: () => (
          <Stack spacing={4}>
            <Text color="default">Default Color</Text>
            <Text color="muted">Muted Color</Text>
            <Text color="primary">Primary Color</Text>
            <Text color="success">Success Color</Text>
            <Text color="error">Error Color</Text>
            <Box bg="black" padding={2} rounded="md"><Text color="white">White Color</Text></Box>
          </Stack>
        ),
        code: `<Stack spacing={4}>\n  <Text color="default">Default</Text>\n  <Text color="muted">Muted</Text>\n  <Text color="primary">Primary</Text>\n  <Text color="success">Success</Text>\n  <Text color="error">Error</Text>\n  <Text color="white">White</Text>\n</Stack>`
      }
    ],
    props: [
      { name: 'size', type: 'xs | sm | base | lg | xl | 2xl | 3xl', default: 'base', desc: 'The font size.' },
      { name: 'weight', type: 'normal | medium | semibold | bold | black', default: 'normal', desc: 'The font weight.' },
      { name: 'align', type: 'left | center | right | justify', default: 'left', desc: 'The text alignment.' },
      { name: 'color', type: 'default | muted | primary | error | success | warning | white', default: 'default', desc: 'The text color.' },
    ]
  },
  heading: {
      id: 'heading',
      name: 'Heading',
      category: 'Primitives',
      description: 'Headings create hierarchy and separation in content.',
      examples: [
          {
              title: 'Levels',
              render: () => (
                  <Stack spacing={4}>
                      <Heading level={1}>Heading Level 1</Heading>
                      <Heading level={2}>Heading Level 2</Heading>
                      <Heading level={3}>Heading Level 3</Heading>
                      <Heading level={4}>Heading Level 4</Heading>
                      <Heading level={5}>Heading Level 5</Heading>
                      <Heading level={6}>Heading Level 6</Heading>
                  </Stack>
              ),
              code: `<Stack spacing={4}>\n  <Heading level={1}>H1</Heading>\n  <Heading level={2}>H2</Heading>\n  <Heading level={3}>H3</Heading>\n  <Heading level={4}>H4</Heading>\n  <Heading level={5}>H5</Heading>\n  <Heading level={6}>H6</Heading>\n</Stack>`
          },
          {
              title: 'Alignment & Weight',
              render: () => (
                 <Stack spacing={4}>
                   <Heading level={3} align="center">Center Aligned</Heading>
                   <Heading level={3} align="right">Right Aligned</Heading>
                   <Heading level={3} weight="normal">Normal Weight Heading</Heading>
                   <Heading level={3} weight="black">Black Weight Heading</Heading>
                 </Stack>
              ),
              code: `<Stack spacing={4}>\n  <Heading level={3} align="center">Center</Heading>\n  <Heading level={3} align="right">Right</Heading>\n  <Heading level={3} weight="normal">Weight</Heading>\n  <Heading level={3} weight="black">Black</Heading>\n</Stack>`
          }
      ],
      props: [
        { name: 'level', type: '1-6', default: '1', desc: 'Heading level.' },
        { name: 'align', type: 'left | center | right', default: 'left', desc: 'Text alignment.' },
        { name: 'weight', type: 'normal...black', default: 'bold', desc: 'Font weight.' },
      ]
  },
  badge: {
    id: 'badge',
    name: 'Badge',
    category: 'Primitives',
    description: 'Badges highlight the state or status of an object.',
    examples: [
      {
        title: 'Variants',
        render: () => (
          <Flex gap={4} wrap="wrap">
            <Badge variant="default">Default</Badge>
            <Badge variant="primary">Primary</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="ghost">Ghost</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="danger">Error</Badge>
            <Badge variant="info">Info</Badge>
          </Flex>
        ),
        code: `<Flex gap={4}>\n  <Badge variant="default">Default</Badge>\n  <Badge variant="primary">Primary</Badge>\n  <Badge variant="secondary">Secondary</Badge>\n  <Badge variant="outline">Outline</Badge>\n  <Badge variant="ghost">Ghost</Badge>\n  <Badge variant="success">Success</Badge>\n  <Badge variant="warning">Warning</Badge>\n  <Badge variant="danger">Error</Badge>\n  <Badge variant="info">Info</Badge>\n</Flex>`
      },
      {
        title: 'Sizes & Shapes',
        render: () => (
          <Flex gap={4} align="center">
            <Badge size="sm">Small</Badge>
            <Badge size="md">Medium</Badge>
            <Badge size="lg">Large</Badge>
            <Badge isRound>Pill Shape</Badge>
            <Badge isRound size="lg" variant="primary">Large Pill</Badge>
          </Flex>
        ),
        code: `<Flex gap={4}>\n  <Badge size="sm">Small</Badge>\n  <Badge size="md">Medium</Badge>\n  <Badge size="lg">Large</Badge>\n  <Badge isRound>Pill</Badge>\n  <Badge isRound size="lg" variant="primary">Large Pill</Badge>\n</Flex>`
      },
      {
         title: 'With Icon',
         render: () => (
           <Flex gap={4}>
             <Badge variant="success" icon={<Icon size="sm"><path d="M5 13l4 4L19 7" /></Icon>}>Verified</Badge>
             <Badge variant="danger" icon={<Icon size="sm"><path d="M6 18L18 6M6 6l12 12" /></Icon>}>Deleted</Badge>
           </Flex>
         ),
         code: `<Badge variant="success" icon={<Icon><path d="..." /></Icon>}>Verified</Badge>\n<Badge variant="danger" icon={<Icon><path d="..." /></Icon>}>Deleted</Badge>`
      }
    ],
    props: [
      { name: 'variant', type: 'string', default: 'default', desc: 'Visual style.' },
      { name: 'size', type: 'sm | md | lg', default: 'md', desc: 'Size of badge.' },
      { name: 'isRound', type: 'boolean', default: 'false', desc: 'Use pill shape.' },
      { name: 'icon', type: 'ReactNode', default: '-', desc: 'Icon element.' },
    ],
    usageGuidelines: `
### When to use
- **Status**: To show state (e.g., Active, Pending).
- **Counts**: To show notification counts.

### Common Mistakes
- Don't use for interactive elements (use Button).
    `,
    accessibilityNotes: `
### ARIA
- Badges are generally decorative or status indicators.
- If status changes, ensure it's announced via \`aria-live\`.
    `
  },
  box: {
      id: 'box',
      name: 'Box',
      category: 'Primitives',
      description: 'Box is a low-level wrapper component.',
      examples: [
          {
              title: 'Usage',
              render: () => <Box padding={4} bg="black" rounded="md" style={{ color: 'white' }}>Box Content</Box>,
              code: `<Box padding={4} bg="black" rounded="md" style={{ color: 'white' }}>Box Content</Box>`
          },
          {
              title: 'As Button',
              render: () => <Box as="button" padding="2" bg="primary.100" rounded="md" className="hover:bg-primary-200 transition">Clickable Box</Box>,
              code: `<Box as="button" padding="2" ...>Clickable Box</Box>`
          }
      ],
      props: [
        { name: 'padding', type: 'string | number', default: '-', desc: 'Padding value.' },
        { name: 'margin', type: 'string | number', default: '-', desc: 'Margin value.' },
        { name: 'bg', type: 'string', default: '-', desc: 'Background color.' },
        { name: 'border', type: 'string', default: '-', desc: 'Border styles.' },
        { name: 'rounded', type: 'string', default: '-', desc: 'Border radius.' },
        { name: 'shadow', type: 'string', default: '-', desc: 'Box shadow.' },
        { name: 'width', type: 'string | number', default: '-', desc: 'Width.' },
        { name: 'height', type: 'string | number', default: '-', desc: 'Height.' },
        { name: 'position', type: 'relative | absolute | fixed', default: '-', desc: 'Positioning.' },
        { name: 'as', type: 'ElementType', default: 'div', desc: 'Polymorphic prop.' }
      ]
  },
  flex: {
    id: 'flex',
    name: 'Flex',
    category: 'Primitives',
    description: 'Flexbox container.',
    examples: [{
      title: 'Alignment & Justify',
      render: () => <Flex gap={4} justify="between" align="center" className="bg-neutral-100 p-4"><Box>Left</Box><Box>Right</Box></Flex>,
      code: `<Flex gap={4} justify="between" align="center">\n  <Box>Left</Box>\n  <Box>Right</Box>\n</Flex>`
    }],
    props: [
      { name: 'direction', type: 'row | col | row-reverse | col-reverse', default: 'row', desc: 'Flex direction.' },
      { name: 'align', type: 'start | center | end | stretch | baseline', default: 'stretch', desc: 'Align items.' },
      { name: 'justify', type: 'start | center | end | between | around | evenly', default: 'start', desc: 'Justify content.' },
      { name: 'wrap', type: 'nowrap | wrap | wrap-reverse', default: 'nowrap', desc: 'Flex wrap.' },
      { name: 'gap', type: 'number | string', default: '0', desc: 'Gap between items.' }
    ]
  },
  container: {
    id: 'container',
    name: 'Container',
    category: 'Layout',
    description: 'Centers content horizontally.',
    examples: [{
      title: 'Sizes',
      render: () => <Flex direction="col" gap={4}><Container size="sm" className="bg-neutral-100 p-4 border text-center">Small</Container><Container size="md" className="bg-neutral-100 p-4 border text-center">Medium</Container><Container size="lg" className="bg-neutral-100 p-4 border text-center">Large</Container></Flex>,
      code: `<Container size="sm">Small</Container>\n<Container size="md">Medium</Container>\n<Container size="lg">Large</Container>`
    }],
    props: [
      { name: 'size', type: 'sm | md | lg | xl | full', default: 'lg', desc: 'Max width.' },
      { name: 'children', type: 'ReactNode', default: '-', desc: 'Content.' }
    ]
  },
  card: {
    id: 'card',
    name: 'Card',
    category: 'Layout',
    description: 'Container for grouped content.',
    examples: [{
      title: 'Basic',
      render: () => <Card><Heading level={4}>Card Title</Heading><Text className="mt-2">Card content goes here.</Text><Button className="mt-4" size="sm">Action</Button></Card>,
      code: `<Card>\n  <Heading level={4}>Title</Heading>\n  <Text>Content</Text>\n  <Button>Action</Button>\n</Card>`
    }],
    props: [
      { name: 'padding', type: 'none | sm | md | lg', default: 'md', desc: 'Inner spacing.' },
      { name: 'interactive', type: 'boolean', default: 'false', desc: 'Hover effects.' },
      { name: 'children', type: 'ReactNode', default: '-', desc: 'Card content.' }
    ],
    usageGuidelines: `
### When to use
- **Grouping**: To group related content.
- **Dashboard**: For widgets or stats.

### Common Mistakes
- Don't nest cards too deeply.
    `,
    accessibilityNotes: `
### ARIA
- Use headings inside the card to outline content.
    `
  },
  stack: {
    id: 'stack',
    name: 'Stack',
    category: 'Layout',
    description: 'Vertical or horizontal stack.',
    examples: [{
      title: 'Vertical Stack',
      render: () => <Stack spacing={4}><Box bg="primary.100" p={4} rounded="md">Item 1</Box><Box bg="primary.200" p={4} rounded="md">Item 2</Box><Box bg="primary.300" p={4} rounded="md">Item 3</Box></Stack>,
      code: `<Stack spacing={4}>\n  <Box>Item 1</Box>\n  <Box>Item 2</Box>\n  <Box>Item 3</Box>\n</Stack>`
    }],
    props: [
      { name: 'direction', type: 'row | col', default: 'col', desc: 'Stack direction.' },
      { name: 'spacing', type: '0-12', default: '4', desc: 'Gap between items.' },
      { name: 'align', type: 'start | center | end | stretch', default: 'stretch', desc: 'Align items.' },
      { name: 'justify', type: 'start | center | end | between', default: 'start', desc: 'Justify content.' }
    ]
  },
  icon: {
      id: 'icon',
      name: 'Icon',
      category: 'Primitives',
      description: 'Icon component for SVG paths.',
      examples: [
          {
              title: 'Sizes',
              render: () => (
                  <Flex gap={4} align="center">
                      <Icon size="sm"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></Icon>
                      <Icon size="md"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></Icon>
                      <Icon size="lg"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></Icon>
                      <Icon size="xl"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></Icon>
                  </Flex>
              ),
              code: `<Flex gap={4} align="center">\n  <Icon size="sm"><path d="..."/></Icon>\n  <Icon size="md"><path d="..."/></Icon>\n  <Icon size="lg"><path d="..."/></Icon>\n  <Icon size="xl"><path d="..."/></Icon>\n</Flex>`
          },
          {
             title: 'Colors & Stroke',
             render: () => (
                <Flex gap={4}>
                   <Icon color="red" strokeWidth={1}><path d="M13 10V3L4 14h7v7l9-11h-7z" /></Icon>
                   <Icon color="blue" strokeWidth={2}><path d="M13 10V3L4 14h7v7l9-11h-7z" /></Icon>
                   <Icon color="green" strokeWidth={3}><path d="M13 10V3L4 14h7v7l9-11h-7z" /></Icon>
                </Flex>
             ),
             code: `<Flex gap={4}>\n  <Icon color="red" strokeWidth={1}><path .../></Icon>\n  <Icon color="blue" strokeWidth={2}><path .../></Icon>\n</Flex>`
          }
      ],
      props: [
        { name: 'size', type: 'sm | md | lg | xl', default: 'md', desc: 'Size of the icon.' },
        { name: 'color', type: 'string', default: 'currentColor', desc: 'Icon color.' },
        { name: 'strokeWidth', type: 'number', default: '2', desc: 'Stroke width.' },
      ]
  },
  'icon-button': {
    id: 'icon-button',
    name: 'Icon Button',
    category: 'Primitives',
    description: 'Button with only an icon.',
    examples: [{
      title: 'Variants',
      render: () => <Flex gap={4}><IconButton aria-label="Search" icon={<Icon><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></Icon>} /><IconButton variant="ghost" aria-label="Edit" icon={<Icon><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></Icon>} /><IconButton variant="outline" aria-label="Delete" icon={<Icon><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></Icon>} /></Flex>,
      code: `<IconButton aria-label="Search" icon={<Icon ... />} />`
    }, {
      title: 'Sizes',
      render: () => <Flex gap={4} align="center"><IconButton size="sm" aria-label="Small" icon={<Icon size="sm"><path d="M12 4v16m8-8H4"/></Icon>} /><IconButton size="md" aria-label="Medium" icon={<Icon size="md"><path d="M12 4v16m8-8H4"/></Icon>} /><IconButton size="lg" aria-label="Large" icon={<Icon size="lg"><path d="M12 4v16m8-8H4"/></Icon>} /></Flex>,
      code: `<IconButton size="sm" ... />`
    }, {
      title: 'Loading',
      render: () => <IconButton isLoading aria-label="Loading" icon={<Icon><path d="M12 4v16m8-8H4"/></Icon>} />,
      code: `<IconButton isLoading ... />`
    }],
    props: [
      { name: 'icon', type: 'ReactNode', default: '-', desc: 'Icon element.' },
      { name: 'aria-label', type: 'string', default: '-', desc: 'Accessible label.' },
      { name: 'variant', type: 'solid | ghost | outline | surface', default: 'solid', desc: 'Visual style.' },
      { name: 'size', type: 'sm | md | lg', default: 'md', desc: 'Button size.' },
      { name: 'tooltip', type: 'string', default: '-', desc: 'Tooltip text.' },
      { name: 'isLoading', type: 'boolean', default: 'false', desc: 'Loading state.' },
      { name: 'disabled', type: 'boolean', default: 'false', desc: 'Disabled state.' }
    ],
    accessibilityNotes: `
### Accessibility
- **Labeling**: Always provide an \`aria-label\` since there is no visible text.
- **Focus**: Fully keyboard accessible with visible focus states.
    `
  },
  avatar: {
    id: 'avatar',
    name: 'Avatar',
    category: 'Primitives',
    description: 'Avatars represent a user or organization.',
    examples: [
      {
        title: 'Sizes',
        render: () => (
          <Flex gap={4} align="center">
            <Avatar size="sm" fallback="S" />
            <Avatar size="md" fallback="M" />
            <Avatar size="lg" fallback="L" />
            <Avatar size="xl" fallback="XL" />
            <Avatar size="2xl" fallback="2X" />
          </Flex>
        ),
        code: `<Flex gap={4} align="center">\n  <Avatar size="sm" fallback="S" />\n  <Avatar size="md" fallback="M" />\n  <Avatar size="lg" fallback="L" />\n  <Avatar size="xl" fallback="XL" />\n  <Avatar size="2xl" fallback="2X" />\n</Flex>`
      },
      {
        title: 'Shapes',
        render: () => (
          <Flex gap={4} align="center">
            <Avatar shape="circle" fallback="C" />
            <Avatar shape="rounded" fallback="R" />
            <Avatar shape="square" fallback="S" />
          </Flex>
        ),
        code: `<Flex gap={4}>\n  <Avatar shape="circle" fallback="C" />\n  <Avatar shape="rounded" fallback="R" />\n  <Avatar shape="square" fallback="S" />\n</Flex>`
      },
      {
        title: 'Status Indicators',
        render: () => (
          <Flex gap={4}>
            <Avatar status="online" fallback="ON" />
            <Avatar status="offline" fallback="OFF" />
            <Avatar status="busy" fallback="BZ" />
            <Avatar status="away" fallback="AW" />
          </Flex>
        ),
        code: `<Flex gap={4}>\n  <Avatar status="online" fallback="ON" />\n  <Avatar status="offline" fallback="OFF" />\n  <Avatar status="busy" fallback="BZ" />\n  <Avatar status="away" fallback="AW" />\n</Flex>`
      }
    ],
    props: [
      { name: 'size', type: 'sm | md | lg | xl | 2xl', default: 'md', desc: 'Size of the avatar.' },
      { name: 'shape', type: 'circle | rounded | square', default: 'circle', desc: 'Shape of avatar.' },
      { name: 'src', type: 'string', default: '-', desc: 'Image URL.' },
      { name: 'fallback', type: 'string', default: '-', desc: 'Fallback text.' },
      { name: 'status', type: 'online | offline | busy | away', default: '-', desc: 'Optional status indicator.' }
    ]
  },

  // Forms
  input: {
      id: 'input',
      name: 'Input',
      category: 'Forms',
      description: 'Used for single-line text input.',
      examples: [
          {
              title: 'Basic',
              render: () => <Input placeholder="Enter text..." />,
              code: `<Input placeholder="Enter text..." />`
          },
          {
              title: 'With Label & Error',
              render: () => <Input label="Email" placeholder="test@example.com" error="Invalid email" />,
              code: `<Input label="Email" placeholder="test@example.com" error="Invalid email" />`
          }
      ],
    props: [
        { name: 'label', type: 'string', default: '-', desc: 'Input label.' },
        { name: 'error', type: 'string', default: '-', desc: 'Error message.' },
        { name: 'helperText', type: 'string', default: '-', desc: 'Helper text.' },
        { name: 'placeholder', type: 'string', default: '-', desc: 'Placeholder text.' },
        { name: 'type', type: 'string', default: 'text', desc: 'Input type.' }
    ],
    usageGuidelines: `
### When to use
- **Text Fields**: For short, single-line data (names, emails).
- **Search**: For filtering or finding content.

### Common Mistakes
- Don't use for long text (use Textarea).
- Don't forget labels (use \`aria-label\` if visual label is hidden).
    `,
    accessibilityNotes: `
### Keyboard Interaction
- **Tab**: Focuses the input.
- **Enter**: Submits the form (if within a \`<form>\`).

### ARIA & Focus
- Associates \`<label>\` with \`<input>\` via \`htmlFor\` and \`id\`.
- Displays error messages via \`aria-describedby\`.
    `
  },
  textarea: {
      id: 'textarea',
      name: 'Textarea',
      category: 'Forms',
      description: 'Used for multi-line text input.',
      examples: [
          {
              title: 'Basic',
              render: () => <Textarea label="Description" placeholder="Enter description..." />,
              code: `<Textarea label="Description" placeholder="Enter description..." />`
          }
      ],
    props: [
        { name: 'label', type: 'string', default: '-', desc: 'Input label.' },
        { name: 'rows', type: 'number', default: '4', desc: 'Number of rows.' },
        { name: 'placeholder', type: 'string', default: '-', desc: 'Placeholder text.' }
    ]
  },
  select: {
      id: 'select',
      name: 'Select',
      category: 'Forms',
      description: 'Allows selection from a list of options.',
      examples: [
          {
              title: 'Basic',
              render: () => <Select label="Country" options={[{label: 'USA', value: 'usa'}, {label: 'Canada', value: 'ca'}]} />,
              code: `<Select label="Country" options={[{label: 'USA', value: 'usa'}, {label: 'Canada', value: 'ca'}]} />`
          }
      ],
    props: [
        { name: 'label', type: 'string', default: '-', desc: 'Input label.' },
        { name: 'options', type: '{label: string, value: string}[]', default: '[]', desc: 'Options list.' },
        { name: 'error', type: 'string', default: '-', desc: 'Error message.' }
    ]
  },
  checkbox: {
      id: 'checkbox',
      name: 'Checkbox',
      category: 'Forms',
      description: 'Allows multiple selection.',
      examples: [
          {
              title: 'Basic',
              render: () => <Stack spacing={2}><Checkbox label="Option 1" /><Checkbox label="Option 2" checked /></Stack>,
              code: `<Stack spacing={2}>\n  <Checkbox label="Option 1" />\n  <Checkbox label="Option 2" checked />\n</Stack>`
          }
      ],
    props: [
        { name: 'label', type: 'string', default: '-', desc: 'Checkbox label.' },
        { name: 'checked', type: 'boolean', default: '-', desc: 'Checked state.' },
        { name: 'onChange', type: '(e) => void', default: '-', desc: 'Change handler.' }
    ]
  },
  radio: {
      id: 'radio',
      name: 'Radio',
      category: 'Forms',
      description: 'Allows single selection.',
      examples: [
          {
              title: 'Basic',
              render: () => <Stack spacing={2}><Radio name="g1" label="Option 1" /><Radio name="g1" label="Option 2" /></Stack>,
              code: `<Stack spacing={2}>\n  <Radio name="g1" label="Option 1" />\n  <Radio name="g1" label="Option 2" />\n</Stack>`
          }
      ],
    props: [
        { name: 'label', type: 'string', default: '-', desc: 'Radio label.' },
        { name: 'name', type: 'string', default: '-', desc: 'Group name.' },
        { name: 'checked', type: 'boolean', default: '-', desc: 'Checked state.' }
    ]
  },
  switch: {
      id: 'switch',
      name: 'Switch',
      category: 'Forms',
      description: 'Toggle between two states.',
      examples: [
          {
              title: 'Usage',
              render: () => {
                  const [on, setOn] = useState(false);
                  return <Switch checked={on} onChange={setOn} label="Notifications" />;
              },
              code: `const [on, setOn] = useState(false);\nreturn <Switch checked={on} onChange={setOn} label="Notifications" />;`
          }
      ],
    props: [
        { name: 'label', type: 'string', default: '-', desc: 'Switch label.' },
        { name: 'checked', type: 'boolean', default: 'false', desc: 'Checked state.' },
        { name: 'onChange', type: '(checked) => void', default: '-', desc: 'Change handler.' }
    ]
  },
  slider: {
      id: 'slider',
      name: 'Slider',
      category: 'Forms',
      description: 'Select a value from a range.',
      examples: [
          {
              title: 'Usage',
              render: () => {
                  const [val, setVal] = useState(50);
                  return <Slider value={val} onChange={setVal} label="Volume" />;
              },
              code: `const [val, setVal] = useState(50);\nreturn <Slider value={val} onChange={setVal} label="Volume" />;`
          }
      ],
    props: [
        { name: 'label', type: 'string', default: '-', desc: 'Slider label.' },
        { name: 'value', type: 'number', default: '0', desc: 'Current value.' },
        { name: 'min', type: 'number', default: '0', desc: 'Minimum value.' },
        { name: 'max', type: 'number', default: '100', desc: 'Maximum value.' },
        { name: 'onChange', type: '(val) => void', default: '-', desc: 'Change handler.' }
    ]
  },

  // Feedback
  spinner: {
      id: 'spinner',
      name: 'Spinner',
      category: 'Feedback',
      description: 'Indicates loading state.',
      examples: [
          {
              title: 'Sizes',
              render: () => <Flex gap={4}><Spinner size="sm"/><Spinner size="md"/><Spinner size="lg"/></Flex>,
              code: `<Flex gap={4}>\n  <Spinner size="sm"/>\n  <Spinner size="md"/>\n  <Spinner size="lg"/>\n</Flex>`
          }
      ],
      props: [{ name: 'size', type: 'sm | md | lg', default: 'md', desc: 'Size of spinner.' }]
  },
  skeleton: {
      id: 'skeleton',
      name: 'Skeleton',
      category: 'Feedback',
      description: 'Placeholder for content loading.',
      examples: [
          {
              title: 'Variants',
              render: () => (
                  <Stack spacing={4}>
                      <Skeleton variant="text" width={200} />
                      <Skeleton variant="circular" width={40} height={40} />
                      <Skeleton variant="rectangular" width="100%" height={100} />
                  </Stack>
              ),
              code: `<Stack spacing={4}>\n  <Skeleton variant="text" width={200} />\n  <Skeleton variant="circular" width={40} height={40} />\n  <Skeleton variant="rectangular" width="100%" height={100} />\n</Stack>`
          }
      ],
      props: [{ name: 'variant', type: 'text | circular | rectangular', default: 'text', desc: 'Shape variant.' }]
  },
  progress: {
      id: 'progress',
      name: 'Progress',
      category: 'Feedback',
      description: 'Displays progress of a task.',
      examples: [
          {
              title: 'Usage',
              render: () => <Stack spacing={4}><ProgressBar value={30} /><ProgressBar value={70} variant="success" /></Stack>,
              code: `<Stack spacing={4}>\n  <ProgressBar value={30} />\n  <ProgressBar value={70} variant="success" />\n</Stack>`
          }
      ],
      props: [{ name: 'value', type: 'number', default: '0', desc: 'Progress value (0-100).' }]
  },



  // --- Forms & Auth ---
  'form-wrapper': {
    id: 'form-wrapper',
    name: 'Form Wrapper',
    category: 'Forms & Auth',
    description: 'A wrapper component for handling form submission.',
    examples: [{
      title: 'Basic Usage',
      render: () => <FormWrapper onSubmit={(e) => alert('Submitted!')}><Input placeholder="Type here" /><Button type="submit">Submit</Button></FormWrapper>,
      code: `<FormWrapper onSubmit={handleSubmit}>\n  <Input />\n  <Button type="submit">Submit</Button>\n</FormWrapper>`
    }],
    props: [{ name: 'onSubmit', type: '(e) => void', default: '-', desc: 'Submit handler.' }]
  },
  'login-form': {
    id: 'login-form',
    name: 'Login Form',
    category: 'Forms & Auth',
    description: 'Pre-built login form component.',
    examples: [{
      title: 'Example',
      render: () => <LoginForm onSubmit={(data) => console.log(data)} />,
      code: `<LoginForm onSubmit={(data) => console.log(data)} />`
    }],
    props: [{ name: 'onSubmit', type: '(data) => void', default: '-', desc: 'Handler called with email and password.' }]
  },
  'signup-form': {
    id: 'signup-form',
    name: 'Signup Form',
    category: 'Forms & Auth',
    description: 'Pre-built signup form component.',
    examples: [{
      title: 'Example',
      render: () => <SignupForm onSubmit={(data) => console.log(data)} />,
      code: `<SignupForm onSubmit={(data) => console.log(data)} />`
    }],
    props: [{ name: 'onSubmit', type: '(data) => void', default: '-', desc: 'Handler called with name, email, password.' }]
  },
  'forgot-password': {
    id: 'forgot-password',
    name: 'Forgot Password',
    category: 'Forms & Auth',
    description: 'Form to request password reset.',
    examples: [{
      title: 'Example',
      render: () => <ForgotPasswordForm onSubmit={(data) => console.log(data)} />,
      code: `<ForgotPasswordForm onSubmit={(data) => console.log(data)} />`
    }],
    props: [{ name: 'onSubmit', type: '(data) => void', default: '-', desc: 'Handler called with email.' }]
  },
  'reset-password': {
    id: 'reset-password',
    name: 'Reset Password',
    category: 'Forms & Auth',
    description: 'Form to reset password.',
    examples: [{
      title: 'Example',
      render: () => <ResetPasswordForm onSubmit={(data) => console.log(data)} />,
      code: `<ResetPasswordForm onSubmit={(data) => console.log(data)} />`
    }],
    props: [{ name: 'onSubmit', type: '(data) => void', default: '-', desc: 'Handler called with new password.' }]
  },
  'otp-verification': {
    id: 'otp-verification',
    name: 'OTP Verification',
    category: 'Forms & Auth',
    description: 'Input for one-time password verification.',
    examples: [{
      title: '6-Digit OTP',
      render: () => <OTPVerification onComplete={(code) => alert(`Code: ${code}`)} />,
      code: `<OTPVerification onComplete={(code) => handleVerify(code)} />`
    }],
    props: [{ name: 'length', type: 'number', default: '6', desc: 'Number of inputs.' }, { name: 'onComplete', type: '(code) => void', default: '-', desc: 'Called when filled.' }]
  },
  'password-strength': {
    id: 'password-strength',
    name: 'Password Strength',
    category: 'Forms & Auth',
    description: 'Visual indicator for password strength.',
    examples: [{
      title: 'Interactive',
      render: () => {
        const [p, setP] = useState('');
        return <div className="max-w-xs"><Input type="password" value={p} onChange={e => setP(e.target.value)} placeholder="Type password..." /><PasswordStrengthMeter password={p} /></div>;
      },
      code: `<Input type="password" value={pass} onChange={e => setPass(e.target.value)} />\n<PasswordStrengthMeter password={pass} />`
    }],
    props: [{ name: 'password', type: 'string', default: '-', desc: 'Password string to evaluate.' }]
  },
  'file-upload': {
    id: 'file-upload',
    name: 'File Upload',
    category: 'Forms & Auth',
    description: 'Drag and drop file upload zone.',
    examples: [{
      title: 'Basic',
      render: () => <FileUpload />,
      code: `<FileUpload label="Upload Image" accept="image/*" />`
    }],
    props: [{ name: 'label', type: 'string', default: 'Upload file', desc: 'Label text.' }, { name: 'accept', type: 'string', default: '-', desc: 'File types accepted.' }]
  },
  'date-time-picker': {
    id: 'date-time-picker',
    name: 'Date & Time',
    category: 'Forms & Auth',
    description: 'Native date and time pickers.',
    examples: [{
      title: 'Pickers',
      render: () => <Stack spacing={4}><DatePicker label="Select Date" /><TimePicker label="Select Time" /></Stack>,
      code: `<DatePicker label="Select Date" />\n<TimePicker label="Select Time" />`
    }],
    props: [{ name: 'label', type: 'string', default: '-', desc: 'Input label.' }]
  },
  'search-input': {
    id: 'search-input',
    name: 'Search Input',
    category: 'Forms & Auth',
    description: 'Search field with icon.',
    examples: [{
      title: 'Basic',
      render: () => <SearchInput onSearch={console.log} />,
      code: `<SearchInput onSearch={(val) => filterResults(val)} />`
    }],
    props: [
        { name: 'placeholder', type: 'string', default: 'Search...', desc: 'Placeholder text.' },
        { name: 'onSearch', type: '(val) => void', default: '-', desc: 'Callback on change.' }
    ]
  },

  // --- Composite ---
  'modal': {
    id: 'modal',
    name: 'Modal',
    category: 'Composite',
    description: 'Dialog window overlay.',
    examples: [{
      title: 'Basic',
      render: () => {
        const [o, setO] = useState(false);
        return <><Button onClick={() => setO(true)}>Open Modal</Button><Modal isOpen={o} onClose={() => setO(false)} title="My Modal"><Text>Content here.</Text></Modal></>;
      },
      code: `const [isOpen, setIsOpen] = useState(false);\n\n<Button onClick={() => setIsOpen(true)}>Open Modal</Button>\n\n<Modal \n  isOpen={isOpen} \n  onClose={() => setIsOpen(false)} \n  title="My Modal"\n>\n  <Text>Modal content goes here.</Text>\n</Modal>`
    }],
    props: [
      { name: 'isOpen', type: 'boolean', default: 'false', desc: 'Controls visibility.' },
      { name: 'onClose', type: '() => void', default: '-', desc: 'Close handler.' },
      { name: 'title', type: 'string', default: '-', desc: 'Modal header title.' },
      { name: 'size', type: 'sm | md | lg | xl | full', default: 'md', desc: 'Modal width.' },
      { name: 'footer', type: 'ReactNode', default: '-', desc: 'Footer content (buttons).' },
      { name: 'children', type: 'ReactNode', default: '-', desc: 'Modal body content.' }
    ]
  },
  'drawer': {
    id: 'drawer',
    name: 'Drawer',
    category: 'Composite',
    description: 'Side panel that slides in.',
    examples: [{
      title: 'Right Drawer',
      render: () => {
        const [o, setO] = useState(false);
        return <><Button onClick={() => setO(true)}>Open Drawer</Button><Drawer isOpen={o} onClose={() => setO(false)} title="My Drawer"><Text>Content here.</Text></Drawer></>;
      },
      code: `const [isOpen, setIsOpen] = useState(false);\n\n<Drawer \n  isOpen={isOpen} \n  onClose={() => setIsOpen(false)} \n  title="Drawer Title" \n  placement="right"\n>\n  <Text>Drawer content.</Text>\n</Drawer>`
    }],
    props: [
      { name: 'isOpen', type: 'boolean', default: 'false', desc: 'Controls visibility.' },
      { name: 'onClose', type: '() => void', default: '-', desc: 'Close handler.' },
      { name: 'placement', type: 'left | right | top | bottom', default: 'right', desc: 'Drawer edge position.' },
      { name: 'size', type: 'sm | md | lg | xl | full', default: 'md', desc: 'Drawer width/height.' },
      { name: 'title', type: 'string', default: '-', desc: 'Drawer header title.' },
      { name: 'footer', type: 'ReactNode', default: '-', desc: 'Footer content.' }
    ]
  },
  'tooltip': {
    id: 'tooltip',
    name: 'Tooltip',
    category: 'Composite',
    description: 'Contextual info on hover.',
    examples: [{
      title: 'Positions',
      render: () => <Flex gap={4}><Tooltip content="Top"><Button size="sm">Hover Me</Button></Tooltip></Flex>,
      code: `<Tooltip content="Top"><Button>Hover Me</Button></Tooltip>`
    }],
    props: [
        { name: 'content', type: 'string', default: '-', desc: 'Tooltip text.' },
        { name: 'position', type: 'top | bottom | left | right', default: 'top', desc: 'Tooltip position.' },
        { name: 'delay', type: 'number', default: '200', desc: 'Show delay in ms.' },
        { name: 'children', type: 'ReactNode', default: '-', desc: 'Trigger element.' }
    ]
  },
  'popover': {
    id: 'popover',
    name: 'Popover',
    category: 'Composite',
    description: 'Rich content on click/hover.',
    examples: [{
      title: 'Basic',
      render: () => <Popover trigger={<Button>Click Me</Button>} content={<Box p={4}>Popover Content</Box>} />,
      code: `<Popover trigger={<Button>Click</Button>} content={<Box>Content</Box>} />`
    }],
    props: [
        { name: 'trigger', type: 'ReactNode', default: '-', desc: 'Clickable trigger element.' },
        { name: 'content', type: 'ReactNode', default: '-', desc: 'Popover body content.' },
        { name: 'position', type: 'top | bottom | left | right', default: 'bottom', desc: 'Popover position.' }
    ]
  },
  'tabs': {
    id: 'tabs',
    name: 'Tabs',
    category: 'Composite',
    description: 'Switch between views.',
    examples: [{
      title: 'Basic',
      render: () => <Tabs items={[{id:'1', label:'Tab 1', content:<Text>Content 1</Text>}, {id:'2', label:'Tab 2', content:<Text>Content 2</Text>}]} />,
      code: `<Tabs items={[{id:'1', label:'Tab 1', content:<Text>1</Text>}]} />`
    }],
    props: [
        { name: 'items', type: '{id, label, content}[]', default: '[]', desc: 'Tab definitions.' },
        { name: 'defaultTab', type: 'string', default: '-', desc: 'Initially active tab ID.' },
        { name: 'variant', type: 'line | enclosed | pills', default: 'line', desc: 'Visual style.' }
    ],
    usageGuidelines: `
### When to use
- **Categorization**: Organizing content into different categories.
- **Context Switching**: Switching between different views of the same context.

### Common Mistakes
- Don't use for navigation between different pages (use Links or Menu).
- Don't use too many tabs (scrolling tabs can be hard to use).
    `,
    accessibilityNotes: `
### Keyboard Interaction
- **Arrow Keys**: Moves focus between tabs.
- **Enter/Space**: Activates the selected tab.
- **Home/End**: Moves to the first/last tab.

### ARIA
- Use \`role="tablist"\` for the container.
- Use \`role="tab"\` for each tab.
- Use \`role="tabpanel"\` for the content.
- Use \`aria-selected\` to indicate the active tab.
- Use \`aria-controls\` to link tabs to their panels.
    `
  },
  'accordion': {
    id: 'accordion',
    name: 'Accordion',
    category: 'Composite',
    description: 'Expandable content sections.',
    examples: [{
      title: 'Basic',
      render: () => <Accordion items={[{id:'1', title:'Section 1', content:<Text>Content 1</Text>}, {id:'2', title:'Section 2', content:<Text>Content 2</Text>}]} />,
      code: `<Accordion items={[{id:'1', title:'Section 1', content:<Text>Content 1</Text>}]} />`
    }],
    props: [
        { name: 'items', type: '{id, title, content}[]', default: '[]', desc: 'Accordion items.' },
        { name: 'allowMultiple', type: 'boolean', default: 'false', desc: 'Allow multiple sections open.' }
    ]
  },
  'dropdown': {
    id: 'dropdown',
    name: 'Dropdown',
    category: 'Composite',
    description: 'Menu for actions.',
    examples: [{
      title: 'Basic',
      render: () => <Dropdown trigger={<Button>Options</Button>} items={[{label:'Edit'}, {label:'Delete', danger:true}]} />,
      code: `<Dropdown trigger={<Button>Options</Button>} items={[{label:'Edit'}]} />`
    }],
    props: [
        { name: 'trigger', type: 'ReactNode', default: '-', desc: 'Dropdown trigger button.' },
        { name: 'items', type: '{label, onClick, danger, icon}[]', default: '[]', desc: 'Menu items.' },
        { name: 'align', type: 'left | right', default: 'left', desc: 'Menu alignment.' }
    ]
  },
  'table': {
    id: 'table',
    name: 'Table',
    category: 'Composite',
    description: 'Data display grid.',
    examples: [{
      title: 'Basic',
      render: () => <Table headers={['Name', 'Role']} data={[{name:'Alice', role:'Dev'}, {name:'Bob', role:'Design'}]} renderRow={(row, i) => <tr key={i}><td className="p-4">{row.name}</td><td className="p-4">{row.role}</td></tr>} />,
      code: `<Table headers={['Name']} data={data} renderRow={...} />`
    }],
    props: [
        { name: 'headers', type: 'string[]', default: '[]', desc: 'Column headers.' },
        { name: 'data', type: 'any[]', default: '[]', desc: 'Array of data objects.' },
        { name: 'renderRow', type: '(row, index) => ReactNode', default: '-', desc: 'Row render function.' }
    ]
  },
  'pagination': {
    id: 'pagination',
    name: 'Pagination',
    category: 'Composite',
    description: 'Navigate pages.',
    examples: [{
      title: 'Basic',
      render: () => {
         const [p, setP] = useState(1);
         return <Pagination currentPage={p} totalPages={10} onPageChange={setP} />;
      },
      code: `<Pagination currentPage={p} totalPages={10} onPageChange={setP} />`
    }],
    props: [
        { name: 'currentPage', type: 'number', default: '1', desc: 'Active page.' },
        { name: 'totalPages', type: 'number', default: '1', desc: 'Total pages.' },
        { name: 'onPageChange', type: '(page) => void', default: '-', desc: 'Page change handler.' }
    ]
  },
  'alert': {
    id: 'alert',
    name: 'Alert',
    category: 'Composite',
    description: 'Important messages.',
    examples: [{
      title: 'Variants',
      render: () => <Stack spacing={4}><Alert variant="info">Info Alert</Alert><Alert variant="success">Success Alert</Alert><Alert variant="warning">Warning Alert</Alert><Alert variant="danger">Error Alert</Alert></Stack>,
      code: `<Alert variant="info">Info</Alert>`
    }],
    props: [
      { name: 'variant', type: 'info | success | warning | danger', default: 'info', desc: 'Alert style.' },
      { name: 'title', type: 'string', default: '-', desc: 'Alert title (optional).' },
      { name: 'children', type: 'ReactNode', default: '-', desc: 'Alert message body.' },
      { name: 'icon', type: 'ReactNode', default: '-', desc: 'Custom icon.' },
      { name: 'onClose', type: '() => void', default: '-', desc: 'Dismiss handler.' }
    ]
  },
  'toast': {
    id: 'toast',
    name: 'Toast',
    category: 'Composite',
    description: 'Temporary notifications.',
    examples: [{
      title: 'Demo',
      render: () => {
        const [show, setShow] = useState(false);
        return <><Button onClick={() => setShow(true)}>Show Toast</Button>{show && <Toast title="Saved" onClose={() => setShow(false)} variant="success" />}</>;
      },
      code: `const [show, setShow] = useState(false);\n\n<Button onClick={() => setShow(true)}>Show Toast</Button>\n\n{show && (\n  <Toast \n    title="Saved Successfully" \n    variant="success" \n    onClose={() => setShow(false)} \n  />\n)}`
    }],
    props: [
      { name: 'title', type: 'string', default: '-', desc: 'Toast title.' },
      { name: 'description', type: 'string', default: '-', desc: 'Detailed message.' },
      { name: 'variant', type: 'info | success | warning | danger', default: 'info', desc: 'Visual style.' },
      { name: 'duration', type: 'number', default: '3000', desc: 'Auto-close delay (ms).' },
      { name: 'onClose', type: '() => void', default: '-', desc: 'Dismiss handler.' }
    ]
  },
  // List
  'list': {
    id: 'list',
    name: 'List',
    category: 'Composite',
    description: 'Lists are continuous, vertical indexes of text or images.',
    examples: [
        {
            title: 'Basic List',
            render: () => (
                <Card padding="none">
                    <List>
                        <ListItem>
                            <ListItemText primary="Inbox" secondary="You have 3 unread messages" />
                        </ListItem>
                        <ListDivider />
                        <ListItem>
                            <ListItemText primary="Drafts" secondary="Saved 2 hours ago" />
                        </ListItem>
                        <ListDivider />
                        <ListItem>
                            <ListItemText primary="Sent" />
                        </ListItem>
                    </List>
                </Card>
            ),
            code: `<List>\n  <ListItem>\n    <ListItemText primary="Inbox" secondary="3 unread" />\n  </ListItem>\n  <ListDivider />\n  <ListItem>\n    <ListItemText primary="Drafts" />\n  </ListItem>\n</List>`
        },
        {
            title: 'Interactive with Icons',
            render: () => (
                <Card padding="none" className="max-w-sm">
                    <List>
                        <ListItem onClick={() => alert('Wifi clicked')}>
                            <ListItemIcon>
                                <Icon size="md"><path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01" /></Icon>
                            </ListItemIcon>
                            <ListItemText primary="Wi-Fi" secondary="Connected" />
                        </ListItem>
                        <ListItem disabled onClick={() => alert('Bluetooth clicked')}>
                            <ListItemIcon>
                                <Icon size="md"><path d="M9.172 16.172a4 4 0 015.656 0M9 10a5 5 0 017 0m-7-5a1 1 0 012 0 1 1 0 012 0m-4 5h4" /></Icon>
                            </ListItemIcon>
                            <ListItemText primary="Bluetooth" secondary="Off" />
                        </ListItem>
                        <ListItem href="#settings">
                            <ListItemIcon>
                                <Icon size="md"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /></Icon>
                            </ListItemIcon>
                            <ListItemText primary="Settings" />
                            <ListItemIcon position="end">
                                <Icon size="sm"><path d="M9 5l7 7-7 7" /></Icon>
                            </ListItemIcon>
                        </ListItem>
                    </List>
                </Card>
            ),
            code: `<List>\n  <ListItem onClick={...}>\n    <ListItemIcon><Icon ... /></ListItemIcon>\n    <ListItemText primary="Wi-Fi" />\n  </ListItem>\n  <ListItem href="#settings">\n    <ListItemIcon><Icon ... /></ListItemIcon>\n    <ListItemText primary="Settings" />\n    <ListItemIcon position="end"><Icon ... /></ListItemIcon>\n  </ListItem>\n</List>`
        },
        {
            title: 'Selected State & Compact',
            render: () => (
                <Card padding="none" className="max-w-sm">
                    <List variant="compact">
                        <ListItem selected onClick={() => {}}>
                            <ListItemIcon><Box className="w-2 h-2 rounded-full bg-primary-500" /></ListItemIcon>
                            <ListItemText primary="Selected Item" />
                        </ListItem>
                        <ListItem onClick={() => {}}>
                            <ListItemIcon><Box className="w-2 h-2 rounded-full bg-neutral-300" /></ListItemIcon>
                            <ListItemText primary="Normal Item" />
                        </ListItem>
                    </List>
                </Card>
            ),
            code: `<List variant="compact">\n  <ListItem selected>\n    <ListItemText primary="Selected Item" />\n  </ListItem>\n  <ListItem>\n    <ListItemText primary="Normal Item" />\n  </ListItem>\n</List>`
        }
    ],
    props: [
        { name: 'variant', type: 'default | compact', default: 'default', desc: 'Spacing variant.' },
        { name: 'orientation', type: 'vertical | horizontal', default: 'vertical', desc: 'Layout direction.' },
        { name: 'onClick', type: 'function', default: '-', desc: 'Click handler for items.' },
        { name: 'selected', type: 'boolean', default: 'false', desc: 'Selected state for items.' },
        { name: 'disabled', type: 'boolean', default: 'false', desc: 'Disabled state for items.' },
        { name: 'href', type: 'string', default: '-', desc: 'URL for link items.' },
    ],
    usageGuidelines: `
### When to use
- **Menus**: For navigation menus or settings.
- **Data**: To display simple data sets.

### Accessibility
- Use \`List\` for semantics (\`<ul>\`).
- Interactive items automatically get \`role="button"\` or \`role="link"\`.
    `
  },
  'notification-banner': {
    id: 'notification-banner',
    name: 'Notification Banner',
    category: 'Composite',
    description: 'Global notification bar.',
    examples: [{
      title: 'Basic',
      render: () => <NotificationBanner title="Update Available" cta={<Button size="sm" variant="ghost" className="text-white">Update</Button>} />,
      code: `<NotificationBanner title="Update Available" />`
    }],
    props: [
        { name: 'title', type: 'string', default: '-', desc: 'Main message.' },
        { name: 'description', type: 'string', default: '-', desc: 'Secondary text.' },
        { name: 'cta', type: 'ReactNode', default: '-', desc: 'Call to action element.' },
        { name: 'onClose', type: '() => void', default: '-', desc: 'Dismiss handler.' }
    ]
  },
  'empty-state': {
    id: 'empty-state',
    name: 'Empty State',
    category: 'Composite',
    description: 'Placeholder when no data exists.',
    examples: [{
      title: 'Basic',
      render: () => <EmptyState title="No Projects" description="Create a project to get started." action={<Button>Create Project</Button>} />,
      code: `<EmptyState title="No Projects" action={<Button>Create</Button>} />`
    }],
    props: [
        { name: 'title', type: 'string', default: '-', desc: 'Main heading.' },
        { name: 'description', type: 'string', default: '-', desc: 'Explainer text.' },
        { name: 'icon', type: 'ReactNode', default: '-', desc: 'Custom illustration/icon.' },
        { name: 'action', type: 'ReactNode', default: '-', desc: 'Primary action button.' }
    ]
  },

  // --- Navigation ---
  'breadcrumbs': {
    id: 'breadcrumbs',
    name: 'Breadcrumbs',
    category: 'Navigation',
    description: 'Path navigation.',
    examples: [{
      title: 'Basic',
      render: () => <Breadcrumbs items={[{label:'Home', href:'#'}, {label:'Docs', href:'#'}, {label:'Breadcrumbs', isCurrent:true}]} />,
      code: `<Breadcrumbs items={[{label:'Home'}, {label:'Page', isCurrent:true}]} />`
    }],
    props: [
        { name: 'items', type: '{label, href, isCurrent}[]', default: '[]', desc: 'Breadcrumb links.' },
        { name: 'separator', type: 'ReactNode', default: '-', desc: 'Custom separator icon.' }
    ]
  },
  'stepper': {
    id: 'stepper',
    name: 'Stepper',
    category: 'Navigation',
    description: 'Progress through steps.',
    examples: [{
      title: 'Horizontal',
      render: () => <Stepper steps={[{title:'Step 1', status:'complete'}, {title:'Step 2', status:'current'}, {title:'Step 3', status:'upcoming'}]} />,
      code: `<Stepper steps={[{title:'Step 1', status:'complete'}]} />`
    }],
    props: [
        { name: 'steps', type: '{title, description, status}[]', default: '[]', desc: 'Step definitions.' },
        { name: 'orientation', type: 'horizontal | vertical', default: 'horizontal', desc: 'Layout direction.' }
    ]
  },
  'command-palette': {
    id: 'command-palette',
    name: 'Command Palette',
    category: 'Navigation',
    description: 'Global command menu.',
    examples: [{
      title: 'Demo',
      render: () => {
         const [o, setO] = useState(false);
         return <><Button onClick={() => setO(true)}>Open Palette</Button><CommandPalette isOpen={o} onClose={() => setO(false)} items={[{group:'General', items:[{label:'Go Home', onClick:()=>{}}]}]} /></>;
      },
      code: `const [isOpen, setIsOpen] = useState(false);\n\n/* Items grouped by category */\nconst items = [\n  {\n    group: 'General',\n    items: [\n      { label: 'Go Home', onClick: () => navigate('/') },\n      { label: 'Settings', onClick: () => navigate('/settings') }\n    ]\n  }\n];\n\n<CommandPalette \n  isOpen={isOpen} \n  onClose={() => setIsOpen(false)} \n  items={items} \n/>`
    }],
    props: [
        { name: 'isOpen', type: 'boolean', default: 'false', desc: 'Controls visibility.' },
        { name: 'onClose', type: '() => void', default: '-', desc: 'Close handler.' },
        { name: 'items', type: '{group, items: {label, onClick...}[]}[]', default: '[]', desc: 'Command groups.' }
    ]
  },

  // --- Patterns ---
  'auth-layout': {
    id: 'auth-layout',
    name: 'Auth Layout',
    category: 'Patterns',
    description: 'Layout for login/signup pages.',
    examples: [{
      title: 'Preview',
      render: () => <div className="h-96 border overflow-hidden"><AuthLayout title="Welcome" logo={<Box p={2} bg="primary.600" rounded="md" className="w-10 h-10" />}><LoginForm onSubmit={()=>{}} /></AuthLayout></div>,
      code: `<AuthLayout title="Welcome">\n  <LoginForm />\n</AuthLayout>`
    }],
    props: [
      { name: 'children', type: 'ReactNode', default: '-', desc: 'Content (usually a form).' },
      { name: 'title', type: 'string', default: '-', desc: 'Page title.' },
      { name: 'subtitle', type: 'string', default: '-', desc: 'Page subtitle.' },
      { name: 'backgroundImage', type: 'string', default: '-', desc: 'URL for side image.' },
      { name: 'logo', type: 'ReactNode', default: '-', desc: 'Logo component.' }
    ]
  },
  'dashboard-layout': {
    id: 'dashboard-layout',
    name: 'Dashboard Layout',
    category: 'Patterns',
    description: 'Layout for app dashboard.',
    examples: [{
      title: 'Preview',
      render: () => <div className="h-96 border overflow-hidden relative"><DashboardLayout><Heading level={2}>Dashboard Content</Heading></DashboardLayout></div>,
      code: `<DashboardLayout>\n  Content\n</DashboardLayout>`
    }],
    props: [
      { name: 'children', type: 'ReactNode', default: '-', desc: 'Main content.' },
      { name: 'sidebar', type: 'ReactNode', default: '<Sidebar />', desc: 'Custom sidebar.' },
      { name: 'navbar', type: 'ReactNode', default: '-', desc: 'Custom navbar.' }
    ]
  },
  'hero-section': {
    id: 'hero-section',
    name: 'Hero Section',
    category: 'Patterns',
    description: 'Marketing hero section.',
    examples: [{
      title: 'Preview',
      render: () => <div className="h-96 border overflow-hidden overflow-y-auto"><HeroSection title="Build Faster" subtitle="The ultimate UI kit." ctaPrimary={<Button>Get Started</Button>} /></div>,
      code: `<HeroSection title="Build Faster" ctaPrimary={<Button>Get Started</Button>} />`
    }],
    props: [
      { name: 'title', type: 'string', default: '-', desc: 'Main headline.' },
      { name: 'subtitle', type: 'string', default: '-', desc: 'Subheadline text.' },
      { name: 'ctaPrimary', type: 'ReactNode', default: '-', desc: 'Primary button.' },
      { name: 'ctaSecondary', type: 'ReactNode', default: '-', desc: 'Secondary button.' },
      { name: 'image', type: 'string', default: '-', desc: 'Hero image URL.' }
    ]
  },
  'feature-grid': {
    id: 'feature-grid',
    name: 'Feature Grid',
    category: 'Patterns',
    description: 'Grid of features.',
    examples: [{
      title: 'Preview',
      render: () => <div className="border overflow-hidden"><FeatureGrid title="Everything you need" features={[{title:'Fast', description:'Blazing fast.', icon:<Icon><path d="M13 10V3L4 14h7v7l9-11h-7z"/></Icon>}]} /></div>,
      code: `<FeatureGrid features={[{title:'Fast', icon:...}]} />`
    }],
    props: [
      { name: 'title', type: 'string', default: '-', desc: 'Section title.' },
      { name: 'subtitle', type: 'string', default: '-', desc: 'Section subtitle.' },
      { name: 'features', type: '{title, description, icon}[]', default: '[]', desc: 'List of features.' }
    ]
  },
  'pricing-section': {
    id: 'pricing-section',
    name: 'Pricing Section',
    category: 'Patterns',
    description: 'Pricing plans display.',
    examples: [{
      title: 'Preview',
      render: () => <div className="border overflow-hidden"><PricingSection title="Simple Pricing" plans={[{name:'Pro', price:'$29', features:['Feature A'], cta:'Buy'}]} /></div>,
      code: `<PricingSection plans={plans} />`
    }],
    props: [
      { name: 'title', type: 'string', default: '-', desc: 'Section title.' },
      { name: 'plans', type: '{name, price, features, cta, recommended}[]', default: '[]', desc: 'Pricing plans.' }
    ]
  },
  'footer': {
    id: 'footer',
    name: 'Footer',
    category: 'Patterns',
    description: 'Site footer.',
    examples: [{
      title: 'Preview',
      render: () => <div className="border overflow-hidden"><Footer links={[{title:'Product', items:['Features']}]} socials={<>Socials</>} /></div>,
      code: `<Footer links={links} />`
    }],
    props: [
      { name: 'links', type: '{title: string, items: string[]}[]', default: '[]', desc: 'Navigation columns.' },
      { name: 'socials', type: 'ReactNode', default: '-', desc: 'Social media icons.' }
    ]
  },
  '404-page': {
    id: '404-page',
    name: '404 Page',
    category: 'Patterns',
    description: 'Not Found page.',
    examples: [{
      title: 'Preview',
      render: () => <div className="h-96 border overflow-hidden relative"><Page404 /></div>,
      code: `<Page404 />`
    }],
    props: []
  },
  'error-page': {
    id: 'error-page',
    name: 'Error Page',
    category: 'Patterns',
    description: 'Generic error page.',
    examples: [{
      title: 'Preview',
      render: () => <div className="h-96 border overflow-hidden relative"><ErrorPage /></div>,
      code: `<ErrorPage />`
    }],
    props: []
  },

  // --- Utilities ---
  'theme-toggle': {
    id: 'theme-toggle',
    name: 'Theme Toggle',
    category: 'Utilities',
    description: 'Button to toggle light/dark mode.',
    examples: [{
      title: 'Basic',
      render: () => <ThemeToggle />,
      code: `<ThemeToggle />`
    }],
    props: [
      { name: 'className', type: 'string', default: '-', desc: 'Additional CSS classes.' }
    ]
  },

  'copy-to-clipboard': {
    id: 'copy-to-clipboard',
    name: 'Copy To Clipboard',
    category: 'Utilities',
    description: 'Copy text helper.',
    examples: [{
      title: 'Basic',
      render: () => <CopyToClipboard text="Copied Text!" />,
      code: `<CopyToClipboard text="Text" />`
    }],
    props: [
        { name: 'text', type: 'string', default: '-', desc: 'Text to copy.' },
        { name: 'children', type: 'ReactNode', default: '-', desc: 'Custom trigger element.' }
    ]
  },
  'code-block': {
    id: 'code-block',
    name: 'Code Block',
    category: 'Utilities',
    description: 'Syntax highlighted code display.',
    examples: [{
      title: 'Basic',
      render: () => <CodeBlock code="const a = 1;" language="typescript" />,
      code: `<CodeBlock code="const a = 1;" />`
    }],
    props: [
        { name: 'code', type: 'string', default: '-', desc: 'Code content.' },
        { name: 'language', type: 'string', default: 'tsx', desc: 'Language for syntax highlighting.' },
        { name: 'showLineNumbers', type: 'boolean', default: 'true', desc: 'Show line numbers.' }
    ]
  },
  'portal': {
    id: 'portal',
    name: 'Portal',
    category: 'Utilities',
    description: 'Render children in a portal.',
    examples: [{
      title: 'Usage',
      render: () => <Portal><div className="fixed top-0 right-0 p-2 bg-red-500 text-white text-xs z-[9999]">Portal Test</div></Portal>,
      code: `<Portal>Content</Portal>`
    }],
    props: [
        { name: 'children', type: 'ReactNode', default: '-', desc: 'Content to render in portal.' },
        { name: 'container', type: 'HTMLElement', default: 'document.body', desc: 'Target container.' }
    ]
  },
  'responsive-visibility': {
    id: 'responsive-visibility',
    name: 'Responsive Visibility',
    category: 'Utilities',
    description: 'Show/hide based on breakpoint.',
    examples: [{
      title: 'Example',
      render: () => <><ResponsiveVisibility hideBelow="md"><Badge>Hidden on Small</Badge></ResponsiveVisibility><ResponsiveVisibility hideAbove="md"><Badge>Visible on Small</Badge></ResponsiveVisibility></>,
      code: `<ResponsiveVisibility hideBelow="md">Content</ResponsiveVisibility>`
    }],
    props: [
        { name: 'hideBelow', type: 'sm|md|lg|xl', default: '-', desc: 'Hide below this breakpoint.' },
        { name: 'hideAbove', type: 'sm|md|lg|xl', default: '-', desc: 'Hide above this breakpoint.' },
        { name: 'children', type: 'ReactNode', default: '-', desc: 'Content to toggle.' }
    ]
  },
  'visually-hidden': {
    id: 'visually-hidden',
    name: 'Visually Hidden',
    category: 'Utilities',
    description: 'Hide content visually but keep for screen readers.',
    examples: [{
      title: 'Example',
      render: () => <Button><VisuallyHidden>Close</VisuallyHidden><Icon><path d="M6 18L18 6M6 6l12 12"/></Icon></Button>,
      code: `<VisuallyHidden>Screen Reader Text</VisuallyHidden>`
    }],
    props: [
        { name: 'children', type: 'ReactNode', default: '-', desc: 'Content to hide visually.' }
    ]
  },
  'focus-trap': {
    id: 'focus-trap',
    name: 'Focus Trap',
    category: 'Utilities',
    description: 'Trap focus within a container.',
    examples: [{
      title: 'Example',
      render: () => <FocusTrap><div className="p-4 border"><Input placeholder="Trapped" /><Button>Trapped</Button></div></FocusTrap>,
      code: `<FocusTrap>Content</FocusTrap>`
    }],
    props: [
        { name: 'isActive', type: 'boolean', default: 'true', desc: 'Enable trap.' },
        { name: 'children', type: 'ReactNode', default: '-', desc: 'Content to trap focus in.' }
    ]
  }
};

const ExampleWrapper: React.FC<{ render: () => React.ReactNode }> = ({ render }) => {
  const Component = render as unknown as React.FC;
  return <Component />;
};

export const ComponentPage: React.FC<{ componentId: string }> = ({ componentId }) => {
  const doc = docs[componentId];
  const [activeTabs, setActiveTabs] = useState<Record<number, 'preview' | 'code'>>({});

  if (!doc) {
    return (
      <div className="text-center py-20">
        <Heading level={2}>Coming Soon</Heading>
        <Text color="muted" className="mt-4">We are currently documenting the {componentId} component.</Text>
      </div>
    );
  }

  const toggleTab = (index: number, tab: 'preview' | 'code') => {
    setActiveTabs(prev => ({ ...prev, [index]: tab }));
  };

  return (
    <div className="space-y-12">
      <header>
        <Badge variant="primary" className="mb-4">{doc.category}</Badge>
        <Heading level={1} className="mb-4">{doc.name}</Heading>
        <Text size="lg" color="muted" className="max-w-3xl">{doc.description}</Text>
      </header>

      <section className="space-y-8">
        <Heading level={2} className="border-b border-neutral-200 dark:border-neutral-800 pb-4">Examples</Heading>
        {doc.examples.map((example, i) => {
          const currentTab = activeTabs[i] || 'preview';
          return (
            <div key={i} className="space-y-4 border border-neutral-200 dark:border-neutral-800 rounded-lg overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2 bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
                <Text weight="medium">{example.title}</Text>
                <div className="flex space-x-2 bg-neutral-200 dark:bg-neutral-800 p-1 rounded-md">
                   <button 
                     onClick={() => toggleTab(i, 'preview')}
                     className={`px-3 py-1 text-xs font-medium rounded-sm transition-all ${currentTab === 'preview' ? 'bg-white text-primary-600 shadow-sm dark:bg-neutral-700 dark:text-white' : 'text-neutral-500 hover:text-neutral-700 dark:text-neutral-400'}`}
                   >
                     Preview
                   </button>
                   <button 
                     onClick={() => toggleTab(i, 'code')}
                     className={`px-3 py-1 text-xs font-medium rounded-sm transition-all ${currentTab === 'code' ? 'bg-white text-primary-600 shadow-sm dark:bg-neutral-700 dark:text-white' : 'text-neutral-500 hover:text-neutral-700 dark:text-neutral-400'}`}
                   >
                     Code
                   </button>
                </div>
              </div>
              
              <div className={`p-6 transition-colors duration-200 min-h-[100px] ${currentTab === 'code' ? 'bg-black text-white' : 'bg-white dark:bg-neutral-950'}`}>
                {currentTab === 'preview' ? (
                  <div className="flex items-center justify-center w-full">
                    <ExampleWrapper render={example.render} />
                  </div>
                ) : (
                   <pre className="text-sm font-mono overflow-x-auto">
                     <code>{String(example.code || '')}</code>
                   </pre>
                )}
              </div>
            </div>
          );
        })}
      </section>

      <section className="space-y-8">
        <Heading level={2} className="border-b border-neutral-200 dark:border-neutral-800 pb-4">API Reference</Heading>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-neutral-200 dark:border-neutral-800">
                <th className="py-4 px-2 text-sm font-bold">Prop</th>
                <th className="py-4 px-2 text-sm font-bold">Type</th>
                <th className="py-4 px-2 text-sm font-bold">Default</th>
                <th className="py-4 px-2 text-sm font-bold">Description</th>
              </tr>
            </thead>
            <tbody>
              {doc.props.map((prop, i) => (
                <tr key={i} className="border-b border-neutral-100 dark:border-neutral-900">
                  <td className="py-4 px-2 text-sm font-mono text-primary-600">{prop.name}</td>
                  <td className="py-4 px-2 text-sm font-mono text-neutral-500">{prop.type}</td>
                  <td className="py-4 px-2 text-sm font-mono text-neutral-400">{prop.default}</td>
                  <td className="py-4 px-2 text-sm text-neutral-600 dark:text-neutral-400">{prop.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {(doc.usageGuidelines || doc.accessibilityNotes) && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {doc.usageGuidelines && (
            <section className="space-y-6">
              <Heading level={2} className="border-b border-neutral-200 dark:border-neutral-800 pb-4">Usage Guidelines</Heading>
              <Card>
                <div className="prose dark:prose-invert max-w-none text-sm space-y-4">
                  {doc.usageGuidelines.split('\n').map((line, i) => {
                    if (line.startsWith('- ')) return <li key={i} className="ml-4">{line.substring(2)}</li>;
                    if (line.startsWith('### ')) return <Heading level={4} key={i} className="mt-4 mb-2">{line.substring(4)}</Heading>;
                    if (line.trim() === '') return <br key={i} />;
                    return <Text key={i}>{line}</Text>;
                  })}
                </div>
              </Card>
            </section>
          )}

          {doc.accessibilityNotes && (
            <section className="space-y-6">
              <Heading level={2} className="border-b border-neutral-200 dark:border-neutral-800 pb-4">Accessibility</Heading>
              <Card>
                 <div className="prose dark:prose-invert max-w-none text-sm space-y-4">
                  {doc.accessibilityNotes.split('\n').map((line, i) => {
                    if (line.startsWith('- ')) return <li key={i} className="ml-4">{line.substring(2)}</li>;
                    if (line.startsWith('### ')) return <Heading level={4} key={i} className="mt-4 mb-2">{line.substring(4)}</Heading>;
                    if (line.trim() === '') return <br key={i} />;
                    return <Text key={i}>{line}</Text>;
                  })}
                </div>
              </Card>
            </section>
          )}
        </div>
      )}
    </div>
  );
};
