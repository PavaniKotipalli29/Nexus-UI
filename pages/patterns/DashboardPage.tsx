
import React, { useState } from 'react';
import { Card, Stack, Container } from '../../components/ui/Layout';
import { Heading, Text, Badge, Button, Icon, Avatar, Flex } from '../../components/ui/Primitives';
import { Input } from '../../components/ui/Forms';
import { Table } from '../../components/ui/Composite';

export const DashboardPage: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const navItems = [
    { name: 'Dashboard', icon: <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />, active: true },
    { name: 'Projects', icon: <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /> },
    { name: 'Users', icon: <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /> },
    { name: 'Issues', icon: <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> },
    { name: 'Analytics', icon: <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /> },
    { name: 'Settings', icon: <><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></> },
  ];

  const userData = [
    { name: 'Sarah Wilson', email: 'sarah.w@nexus.ui', role: 'Admin', status: 'active', avatar: 'S' },
    { name: 'Michael Chen', email: 'm.chen@nexus.ui', role: 'Developer', status: 'active', avatar: 'M' },
    { name: 'Alex Rivera', email: 'a.rivera@nexus.ui', role: 'Designer', status: 'away', avatar: 'A' },
    { name: 'Emma Thompson', email: 'emma@nexus.ui', role: 'Product', status: 'inactive', avatar: 'E' },
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB] dark:bg-neutral-950 flex font-sans">
      {/* Sidebar */}
      <aside className={`${isSidebarOpen ? 'w-64' : 'w-20'} hidden md:flex flex-col border-r border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 transition-all duration-300`}>
        <div className="p-6 border-b border-neutral-100 dark:border-neutral-800 flex justify-between items-center">
          {isSidebarOpen ? (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white font-black">N</div>
              <span className="font-bold tracking-tight text-neutral-900 dark:text-white text-lg">Nexus Console</span>
            </div>
          ) : (
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white font-black mx-auto">N</div>
          )}
        </div>
        
        <nav className="flex-1 p-4 space-y-2 mt-4">
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="w-full flex items-center px-3 py-2 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 transition-colors mb-4 lg:hidden">
            <Icon size="sm"><path d="M4 6h16M4 12h16m-7 6h7" /></Icon>
          </button>
          
          {navItems.map((item) => (
            <button 
              key={item.name} 
              className={`w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all ${item.active ? 'bg-primary-50 text-primary-600 dark:bg-primary-950/20' : 'text-neutral-500 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 hover:text-neutral-900 dark:hover:text-neutral-100'}`}
            >
              <Icon size="sm" className={`mr-3 ${item.active ? 'text-primary-600' : 'text-neutral-400'}`}>{item.icon}</Icon>
              {isSidebarOpen && item.name}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-neutral-100 dark:border-neutral-800">
           <div className={`flex items-center ${isSidebarOpen ? 'gap-3' : 'justify-center'}`}>
              <Avatar src="" alt="User" size="sm" fallback="JD" status="online" />
              {isSidebarOpen && (
                <div className="flex-1 min-w-0">
                  <Text size="sm" weight="medium" className="truncate">Jane Doe</Text>
                  <Text size="xs" color="muted" className="truncate text-[10px]">Administrator</Text>
                </div>
              )}
           </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="h-16 border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md px-8 flex items-center justify-between sticky top-0 z-10 transition-colors">
          <div className="flex items-center gap-4">
             <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 -ml-2 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 rounded-lg">
                <Icon size="sm"><path d="M4 6h16M4 12h16M4 18h16" /></Icon>
             </button>
             <div className="hidden sm:flex items-center text-sm text-neutral-400 gap-2">
                <span>Dashboard</span>
                <span className="text-neutral-300">/</span>
                <span className="text-neutral-900 dark:text-neutral-100 font-medium tracking-tight">System Overview</span>
             </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative group hidden lg:block">
               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400 group-focus-within:text-primary-600 transition-colors">
                  <Icon size="sm"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></Icon>
               </div>
               <Input placeholder="Search records..." className="!py-1.5 pl-10 w-64 !bg-neutral-50 dark:!bg-neutral-800/50 !border-neutral-200 dark:!border-neutral-700" />
            </div>
            <button className="p-2 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 rounded-lg relative">
               <Icon size="sm"><path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></Icon>
               <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white dark:ring-neutral-900" />
            </button>
          </div>
        </header>

        <div className="p-8">
          <Container size="full">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4">
              <Stack spacing={1}>
                <Heading level={2} className="text-3xl font-bold tracking-tight">Dashboard Overview</Heading>
                <Text color="muted">Welcome back! Here's what's happening in your system today.</Text>
              </Stack>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" icon={<Icon size="xs"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></Icon>}>Export</Button>
                <Button size="sm" icon={<Icon size="xs"><path d="M12 4v16m8-8H4" /></Icon>}>New Project</Button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                { label: 'Total Revenue', value: '$45,231', change: '+12%', icon: <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />, status: 'success' },
                { label: 'Active Users', value: '2,420', change: '+2.1%', icon: <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />, status: 'primary' },
                { label: 'Sales', value: '1,204', change: '+4.3%', icon: <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />, status: 'success' },
                { label: 'Performance', value: '98.2%', change: '+0.5%', icon: <path d="M13 10V3L4 14h7v7l9-11h-7z" />, status: 'warning' },
              ].map((stat, i) => (
                <Card key={i} className="border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-md transition-all group overflow-hidden">
                  <div className="flex items-center justify-between mb-2">
                    <Text size="sm" color="muted" className="font-medium">{stat.label}</Text>
                    <div className="p-2 bg-neutral-50 dark:bg-neutral-800 rounded-lg group-hover:bg-primary-50 dark:group-hover:bg-primary-950/20 transition-colors">
                       <Icon size="xs" className="text-neutral-400 group-hover:text-primary-600">{stat.icon}</Icon>
                    </div>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <Heading level={3}>{stat.value}</Heading>
                    <Badge variant={stat.status as any} size="sm" isRound>{stat.change}</Badge>
                  </div>
                </Card>
              ))}
            </div>

            {/* Bottom Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <Card className="border-neutral-200 dark:border-neutral-800 shadow-sm">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                    <Stack spacing={0}>
                      <Heading level={4}>Recent Team Activity</Heading>
                      <Text size="sm" color="muted">Manage and monitor your team member status.</Text>
                    </Stack>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">Download CSV</Button>
                      <Button variant="ghost" size="sm" className="text-primary-600">View All</Button>
                    </div>
                  </div>
                  
                  <Table 
                    headers={['Team Member', 'Role', 'Status', 'Last Login']}
                    data={userData}
                    renderRow={(user, i) => (
                      <tr key={i} className="group hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors">
                        <td className="px-6 py-4">
                           <div className="flex items-center gap-3">
                              <Avatar size="sm" fallback={user.avatar} className="bg-primary-50 dark:bg-primary-950/30 text-primary-600" />
                              <div className="min-w-0">
                                 <Text size="sm" weight="medium">{user.name}</Text>
                                 <Text size="xs" color="muted">{user.email}</Text>
                              </div>
                           </div>
                        </td>
                        <td className="px-6 py-4">
                           <Text size="sm" color="muted">{user.role}</Text>
                        </td>
                        <td className="px-6 py-4">
                           <Badge variant={user.status === 'active' ? 'success' : (user.status === 'away' ? 'warning' : 'default')} size="sm" isRound>
                              {user.status}
                           </Badge>
                        </td>
                        <td className="px-6 py-4">
                           <Text size="xs" color="muted">2 hours ago</Text>
                        </td>
                      </tr>
                    )}
                  />
                </Card>
              </div>

              {/* Sidebar Cards */}
              <div className="space-y-6">
                <Card className="border-neutral-200 dark:border-neutral-800 shadow-sm">
                  <Heading level={4} className="mb-6">System Health</Heading>
                  <div className="space-y-6">
                    {[
                      { name: 'Core Engine', progress: 98, status: 'success' },
                      { name: 'Database API', progress: 85, status: 'primary' },
                      { name: 'Auth Service', progress: 100, status: 'success' },
                      { name: 'Storage Layer', progress: 45, status: 'warning' },
                    ].map(p => (
                      <div key={p.name} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium text-neutral-700 dark:text-neutral-200">{p.name}</span>
                          <span className="text-neutral-500 font-mono text-xs">{p.progress}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
                          <div className={`h-full bg-${p.status === 'success' ? 'green' : (p.status === 'warning' ? 'yellow-500' : 'primary-600')} transition-all duration-1000`} style={{ width: `${p.progress}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="secondary" fullWidth size="sm" className="mt-8 border-neutral-200 dark:border-neutral-700">Detailed Analytics</Button>
                </Card>

                <Card className="bg-primary-600 text-white border-0 overflow-hidden relative group">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-500" />
                   <div className="relative z-10">
                      <Heading level={4} className="text-white mb-2">Pro Plan available</Heading>
                      <Text className="text-white/80 text-sm mb-4">Unlock advanced analytics and multi-tenant support for your console.</Text>
                      <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20">Upgrade Now</Button>
                   </div>
                </Card>
              </div>
            </div>
          </Container>
        </div>
      </main>
    </div>
  );
};
