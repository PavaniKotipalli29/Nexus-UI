
import React, { useState } from 'react';
import { Card, Stack, Container } from '../../components/ui/Layout';
import { Heading, Text, Badge, Button } from '../../components/ui/Primitives';
import { Input } from '../../components/ui/Forms';

export const DashboardPage: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 flex">
      {/* Internal Dashboard Sidebar */}
      <aside className={`${isSidebarOpen ? 'w-64' : 'w-20'} hidden md:flex flex-col border-r border-neutral-200 dark:border-neutral-800 transition-all duration-300`}>
        <div className="p-6 border-b border-neutral-200 dark:border-neutral-800 flex justify-between items-center">
          {isSidebarOpen && <span className="font-bold">Nexus UI Hub</span>}
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-1 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
          </button>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {['Overview', 'Foundations', 'Primitives', 'Forms', 'Layout', 'Patterns'].map((item) => (
            <button key={item} className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors ${item === 'Overview' ? 'bg-primary-50 text-primary-600 dark:bg-primary-950/30' : 'text-neutral-600 dark:text-neutral-400'}`}>
              <div className="w-2 h-2 mr-3 bg-primary-500 rounded-full" />
              {isSidebarOpen && item}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="h-16 border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-8 flex items-center justify-between sticky top-0 z-10">
          <Heading level={4}>System Overview</Heading>
          <div className="flex items-center space-x-4">
            <Input placeholder="Search components..." className="!py-1.5 w-64" />
            <div className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center text-xs font-bold">NX</div>
          </div>
        </header>

        <div className="p-8">
          <Container size="full">
            <div className="flex justify-between items-end mb-8">
              <Stack spacing={1}>
                <Heading level={3}>Nexus UI System</Heading>
                <Text color="muted">Monitor the health and development progress of the core library.</Text>
              </Stack>
              <div className="flex space-x-3">
                <Button variant="secondary" size="sm">Documentation</Button>
                <Button size="sm">New Component</Button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              {[
                { label: 'Total Components', value: '45+', change: 'Estimated', status: 'primary' },
                { label: 'Foundations', value: 'Complete', change: 'Stable', status: 'success' },
                { label: 'Last Updated', value: 'Feb 6, 2026', change: 'Today', status: 'neutral' },
                { label: 'Version', value: 'v0.0.0', change: 'Alpha', status: 'warning' },
              ].map((stat, i) => (
                <Card key={i} padding="sm">
                  <Text size="sm" color="muted" className="mb-1">{stat.label}</Text>
                  <div className="flex items-baseline justify-between">
                    <Heading level={4}>{stat.value}</Heading>
                    <Badge variant={stat.status as any}>{stat.change}</Badge>
                  </div>
                </Card>
              ))}
            </div>

            {/* Main Area */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <Card>
                  <div className="flex justify-between items-center mb-6">
                    <Heading level={4}>Development Feed <span className="text-sm font-normal text-neutral-400 ml-2">(Demo Data)</span></Heading>
                    <Button variant="ghost" size="sm">View History</Button>
                  </div>
                  <div className="space-y-6">
                    {[
                      { action: 'Completed', target: 'Button Component Docs', time: '10m ago', details: 'Added variants, sizes and full API reference.' },
                      { action: 'Refactored', target: 'Color & Typography', time: '2h ago', details: 'Standardized the foundation scale across themes.' },
                      { action: 'Added', target: 'Spacing Scale', time: '5h ago', details: 'Implemented 16-step spacing system with visual aids.' },
                      { action: 'Initialized', target: 'Project Core', time: '1d ago', details: 'Setup Vite, TypeScript and Tailwind configuration.' },
                    ].map((feed, i) => (
                      <div key={i} className="flex items-start pb-6 border-b border-neutral-100 dark:border-neutral-800 last:border-0 last:pb-0">
                        <div className="w-10 h-10 rounded-lg bg-primary-50 dark:bg-primary-950/20 mr-4 flex-shrink-0 flex items-center justify-center text-primary-600 font-bold text-xs">{feed.action[0]}</div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <Text weight="medium">{feed.action} {feed.target}</Text>
                            <Text size="xs" color="muted">{feed.time}</Text>
                          </div>
                          <Text size="sm" color="muted">{feed.details}</Text>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
              <div>
                <Card className="h-full">
                  <Heading level={4} className="mb-6">Library Health <span className="text-sm font-normal text-neutral-400 ml-2">(Demo Data)</span></Heading>
                  <div className="space-y-4">
                    {[
                      { name: 'Primitives', progress: 95 },
                      { name: 'Foundations', progress: 100 },
                      { name: 'Form Components', progress: 42 },
                      { name: 'Patterns', progress: 28 },
                    ].map(p => (
                      <div key={p.name} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium">{p.name}</span>
                          <span className="text-neutral-500">{p.progress}%</span>
                        </div>
                        <div className="h-2 w-full bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
                          <div className={`h-full bg-primary-600 transition-all`} style={{ width: `${p.progress}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="secondary" fullWidth className="mt-8">View Roadmap</Button>
                </Card>
              </div>
            </div>
          </Container>
        </div>
      </main>
    </div>
  );
};
