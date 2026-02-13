import React, { useState } from 'react';
import { Button, Heading, Text, Icon, Avatar, Badge, Spinner, Box } from './Primitives';
import { Card, Stack, Container } from './Layout';
import { Input } from './Forms';
import { Alert, Pagination } from './Composite';
import { Skeleton } from './Feedback';

// --- Types ---

export interface DashboardStat {
  label: string;
  value: string | number;
  trend?: {
    value: number;
    isUp: boolean;
  };
  icon?: React.ReactNode;
}

// --- Admin Topbar ---

export const AdminTopbar: React.FC<{
  onMenuClick?: () => void;
  user?: { name: string; role: string; avatar?: string };
}> = ({ onMenuClick, user }) => {
  return (
    <header className="h-16 bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between px-4 sm:px-6 sticky top-0 z-30">
      <div className="flex items-center gap-4">
        <button 
          onClick={onMenuClick}
          className="lg:hidden p-2 -ml-2 text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md transition"
        >
          <Icon size="sm"><path d="M4 6h16M4 12h16M4 18h16" /></Icon>
        </button>
        <div className="hidden sm:block w-64 lg:w-96">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
              <Icon size="xs"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></Icon>
            </span>
            <input 
              type="text" 
              placeholder="Search anything..." 
              className="block w-full pl-9 pr-3 py-1.5 bg-neutral-100 dark:bg-neutral-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary-500/20 transition"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <Button variant="ghost" size="sm" className="hidden sm:flex text-neutral-500">
          <Icon size="xs" className="mr-2"><path d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></Icon>
          New Project
        </Button>
        <button className="p-2 text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md relative transition">
          <Icon size="sm"><path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></Icon>
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 border-2 border-white dark:border-neutral-900 rounded-full" />
        </button>
        <div className="h-8 w-px bg-neutral-200 dark:border-neutral-800 mx-1 hidden sm:block" />
        <button className="flex items-center gap-3 p-1 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 transition">
          <div className="hidden sm:block text-right">
            <div className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 leading-none mb-1">{user?.name || 'Jane Doe'}</div>
            <div className="text-xs text-neutral-500 leading-none">{user?.role || 'Admin'}</div>
          </div>
          <Avatar src={user?.avatar} size="sm" name={user?.name || 'Jane Doe'} />
        </button>
      </div>
    </header>
  );
};

// --- Stat Card ---

export const StatCard: React.FC<{
  stat?: DashboardStat;
  isLoading?: boolean;
}> = ({ stat, isLoading }) => {
  if (isLoading) {
    return (
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <Skeleton variant="circular" width="40px" height="40px" />
          <Skeleton width="60px" height="20px" />
        </div>
        <Skeleton width="100px" height="16px" className="mb-2" />
        <Skeleton width="140px" height="32px" />
      </Card>
    );
  }

  if (!stat) return null;

  return (
    <Card className="p-6 group hover:shadow-lg transition-all duration-300 border-neutral-200/60 dark:border-neutral-800/60">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-primary-50 dark:bg-primary-900/20 text-primary-600 rounded-lg group-hover:scale-110 transition-transform">
          {stat.icon || <Icon size="sm"><path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></Icon>}
        </div>
        {stat.trend && (
          <Badge variant={stat.trend.isUp ? 'success' : 'danger'} className="gap-1">
            <Icon size="xs">
              {stat.trend.isUp ? <path d="M5 15l7-7 7 7" /> : <path d="M19 9l-7 7-7-7" />}
            </Icon>
            {Math.abs(stat.trend.value)}%
          </Badge>
        )}
      </div>
      <Text tone="muted" variant="body-sm" className="font-medium uppercase tracking-wider">{stat.label}</Text>
      <Heading level={2} className="mt-1 text-2xl font-bold">{stat.value}</Heading>
    </Card>
  );
};

// --- Mini Charts ---

export const MiniChart: React.FC<{
  type?: 'line' | 'bar';
  data?: number[];
  isLoading?: boolean;
  color?: string;
  height?: number;
}> = ({ type = 'line', data = [], isLoading, color = 'currentColor', height = 60 }) => {
  if (isLoading) {
    return <Skeleton width="100%" height={`${height}px`} />;
  }

  if (data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-4 h-[60px] bg-neutral-50 dark:bg-neutral-800/50 rounded-lg border border-dashed border-neutral-200 dark:border-neutral-800">
        <Text variant="caption" tone="muted">No data</Text>
      </div>
    );
  }

  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const padding = 5;
  const width = 200;
  
  const points = data.map((d, i) => ({
    x: (i / (data.length - 1)) * width,
    y: height - ((d - min) / range) * (height - padding * 2) - padding
  }));

  if (type === 'line') {
    const pathData = points.length > 0 ? `M ${points.map(p => `${p.x},${p.y}`).join(' L ')}` : '';
    const areaData = pathData ? `${pathData} L ${width},${height} L 0,${height} Z` : '';

    return (
      <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none" className="overflow-visible">
        <defs>
          <linearGradient id="chart-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity="0.2" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={areaData} fill="url(#chart-gradient)" />
        <path d={pathData} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <div className="flex items-end gap-1 w-full" style={{ height }}>
      {data.map((d, i) => (
        <div 
          key={i}
          className="flex-1 rounded-t-sm"
          style={{ 
            height: `${((d - min) / range) * 100}%`,
            backgroundColor: color,
            opacity: 0.6 + (i / data.length) * 0.4
          }}
        />
      ))}
    </div>
  );
};

// --- Advanced Table ---

export interface TableColumn {
  key: string;
  header: string;
  sortable?: boolean;
  render?: (value: any, row: any) => React.ReactNode;
}

export const AdvancedTable: React.FC<{
  columns: TableColumn[];
  data: any[];
  isLoading?: boolean;
  error?: string;
  onSort?: (key: string) => void;
  selection?: any[];
  onSelectionChange?: (selected: any[]) => void;
}> = ({ columns, data, isLoading, error, onSort, selection = [], onSelectionChange }) => {
  if (error) {
    return <Alert variant="danger" title="Error Loading Data">{error}</Alert>;
  }

  return (
    <div className="w-full overflow-hidden border border-neutral-200 dark:border-neutral-800 rounded-xl bg-white dark:bg-neutral-900 shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="bg-neutral-50 dark:bg-neutral-950/50 border-b border-neutral-200 dark:border-neutral-800">
            <tr>
              {onSelectionChange && (
                <th className="px-6 py-4 w-10">
                  <input 
                    type="checkbox" 
                    className="rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
                    checked={data.length > 0 && selection.length === data.length}
                    onChange={(e) => onSelectionChange(e.target.checked ? data : [])}
                  />
                </th>
              )}
              {columns.map((col) => (
                <th 
                  key={col.key} 
                  className={`px-6 py-4 font-semibold text-neutral-600 dark:text-neutral-400 uppercase tracking-tight ${col.sortable ? 'cursor-pointer hover:text-neutral-900 dark:hover:text-neutral-100' : ''}`}
                  onClick={() => col.sortable && onSort?.(col.key)}
                >
                  <div className="flex items-center gap-2">
                    {col.header}
                    {col.sortable && <Icon size="xs"><path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" /></Icon>}
                  </div>
                </th>
              ))}
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
            {isLoading ? (
              Array.from({ length: 5 }).map((_, i) => (
                <tr key={i}>
                  {onSelectionChange && <td className="px-6 py-4"><Skeleton width="16px" height="16px" /></td>}
                  {columns.map((_, j) => (
                    <td key={j} className="px-6 py-4"><Skeleton width="80%" height="16px" /></td>
                  ))}
                  <td className="px-6 py-4"><Skeleton width="40px" height="16px" className="ml-auto" /></td>
                </tr>
              ))
            ) : data.length === 0 ? (
              <tr>
                <td colSpan={columns.length + (onSelectionChange ? 2 : 1)} className="px-6 py-12 text-center">
                  <Stack align="center" spacing={2}>
                    <div className="p-3 bg-neutral-100 dark:bg-neutral-800 rounded-full text-neutral-400">
                      <Icon size="lg"><path d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" /></Icon>
                    </div>
                    <Text className="font-semibold text-neutral-900 dark:text-neutral-100">No results found</Text>
                    <Text tone="muted" variant="body-sm">Try adjusting your filters or search query</Text>
                  </Stack>
                </td>
              </tr>
            ) : (
              data.map((row, i) => (
                <tr key={i} className="hover:bg-neutral-50 dark:hover:bg-neutral-800/30 transition-colors">
                  {onSelectionChange && (
                    <td className="px-6 py-4">
                      <input 
                        type="checkbox" 
                        className="rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
                        checked={selection.includes(row)}
                        onChange={(e) => {
                          const newSelection = e.target.checked 
                            ? [...selection, row]
                            : selection.filter(s => s !== row);
                          onSelectionChange(newSelection);
                        }}
                      />
                    </td>
                  )}
                  {columns.map((col) => (
                    <td key={col.key} className="px-6 py-4 text-neutral-700 dark:text-neutral-300">
                      {col.render ? col.render(row[col.key], row) : row[col.key]}
                    </td>
                  ))}
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-1">
                      <Button variant="ghost" size="xs">Edit</Button>
                      <Button variant="ghost" size="xs" className="text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20">Delete</Button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// --- Admin Sidebar ---

export const AdminSidebar: React.FC<{
  isCollapsed?: boolean;
  onToggle?: () => void;
  activeId?: string;
}> = ({ isCollapsed, onToggle, activeId }) => {
  const navItems = [
    { group: 'Overview', items: [
      { id: 'dashboard', label: 'Dashboard', icon: <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /> },
      { id: 'analytics', label: 'Analytics', icon: <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /> },
    ]},
    { group: 'Management', items: [
      { id: 'users', label: 'Users', icon: <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /> },
      { id: 'projects', label: 'Projects', icon: <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /> },
      { id: 'billing', label: 'Billing', icon: <path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /> },
    ]},
    { group: 'Support', items: [
      { id: 'tickets', label: 'Tickets', icon: <path d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" /> },
      { id: 'settings', label: 'Settings', icon: <><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></> },
    ]}
  ];

  return (
    <aside className={`bg-neutral-900 text-white h-screen sticky top-0 z-40 transition-all duration-300 flex flex-col ${isCollapsed ? 'w-20' : 'w-64'}`}>
      <div className="h-16 flex items-center px-6 gap-3 border-b border-white/10 shrink-0 overflow-hidden">
        <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center shrink-0">
          <div className="w-4 h-4 bg-white rounded-sm rotate-45" />
        </div>
        {!isCollapsed && <span className="font-bold text-xl tracking-tight whitespace-nowrap">Admin<span className="text-primary-500">Box</span></span>}
      </div>

      <div className="flex-1 overflow-y-auto py-6 px-3 space-y-8 scrollbar-hide">
        {navItems.map((group) => (
          <div key={group.group}>
            {!isCollapsed && (
              <h4 className="px-3 mb-3 text-[10px] font-bold text-neutral-500 uppercase tracking-widest whitespace-nowrap">
                {group.group}
              </h4>
            )}
            <ul className="space-y-1">
              {group.items.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <li key={item.id}>
                    <button 
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 group relative
                        ${isActive ? 'bg-primary-600 text-white' : 'text-neutral-400 hover:text-white hover:bg-white/5'}
                      `}
                    >
                      <Icon size="sm" className={isActive ? 'text-white' : 'text-neutral-500 group-hover:text-white'}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{item.icon}</svg>
                      </Icon>
                      {!isCollapsed && <span className="text-sm font-medium">{item.label}</span>}
                      {isCollapsed && (
                        <div className="absolute left-14 bg-neutral-900 border border-white/10 text-white text-xs px-2 py-1.5 rounded opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 pointer-events-none transition-all duration-200 whitespace-nowrap z-50 shadow-xl">
                          {item.label}
                        </div>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-white/10 shrink-0">
        <button 
          onClick={onToggle}
          className="w-full flex items-center justify-center p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-neutral-400 hover:text-white"
        >
          <Icon size="sm" className={`transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`}>
            <path d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
          </Icon>
        </button>
      </div>
    </aside>
  );
};

// --- Admin Dashboard (Main Orchestrator) ---

export const AdminDashboard: React.FC<{
  children?: React.ReactNode;
  user?: any;
  isLoading?: boolean;
}> = ({ children, user, isLoading }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="flex bg-neutral-50 dark:bg-neutral-950 min-h-screen">
      <AdminSidebar 
        isCollapsed={isSidebarCollapsed} 
        onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)} 
        activeId="dashboard"
      />
      
      <div className="flex-1 flex flex-col min-w-0">
        <AdminTopbar 
          onMenuClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          user={user}
        />
        
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          {isLoading ? (
            <Stack spacing={8}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <StatCard isLoading />
                <StatCard isLoading />
                <StatCard isLoading />
                <StatCard isLoading />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2 p-6 h-80 flex flex-col gap-4">
                  <Skeleton width="150px" height="24px" />
                  <Skeleton width="100%" className="flex-1" />
                </Card>
                <Card className="p-6 h-80 flex flex-col gap-4">
                  <Skeleton width="150px" height="24px" />
                  <Skeleton width="100%" className="flex-1" />
                </Card>
              </div>
              <Skeleton width="100%" height="400px" />
            </Stack>
          ) : (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
              {children}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
