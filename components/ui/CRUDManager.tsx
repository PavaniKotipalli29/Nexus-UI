import React, { useState, useMemo, useEffect } from 'react';
import { 
  Button, 
  Heading, 
  Text, 
  Icon, 
  Avatar, 
  Badge, 
  IconButton, 
  Box, 
  Flex,
  Label
} from './Primitives';
import { Card, Stack, Container } from './Layout';
import { Input, Select, Checkbox } from './Forms';
import { 
  Modal, 
  Drawer, 
  Table, 
  Pagination, 
  Alert, 
  Dropdown,
  Tabs,
  Tooltip
} from './Composite';

// --- Types ---

export type UserRole = 'Admin' | 'Editor' | 'Viewer';
export type UserStatus = 'Active' | 'Inactive' | 'Pending';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  lastActive: string;
  avatar?: string;
}

export interface PermissionSet {
  canCreate: boolean;
  canEdit: boolean;
  canDelete: boolean;
  canBulkAction: boolean;
}

const ROLE_PERMISSIONS: Record<UserRole, PermissionSet> = {
  Admin: { canCreate: true, canEdit: true, canDelete: true, canBulkAction: true },
  Editor: { canCreate: true, canEdit: true, canDelete: false, canBulkAction: true },
  Viewer: { canCreate: false, canEdit: false, canDelete: false, canBulkAction: false },
};

// --- Mock Data ---

const INITIAL_USERS: User[] = [
  { id: '1', name: 'Alex Thompson', email: 'alex.t@example.com', role: 'Admin', status: 'Active', lastActive: '2 mins ago' },
  { id: '2', name: 'Sarah Chen', email: 'sarah.c@example.com', role: 'Editor', status: 'Active', lastActive: '1 hour ago' },
  { id: '3', name: 'Michael Ross', email: 'm.ross@example.com', role: 'Viewer', status: 'Pending', lastActive: 'Never' },
  { id: '4', name: 'Elena Rodriguez', email: 'elena.r@example.com', role: 'Editor', status: 'Inactive', lastActive: '2 days ago' },
  { id: '5', name: 'David Kim', email: 'd.kim@example.com', role: 'Viewer', status: 'Active', lastActive: '5 mins ago' },
  { id: '6', name: 'Jessica Bloom', email: 'j.bloom@example.com', role: 'Editor', status: 'Active', lastActive: '12 mins ago' },
  { id: '7', name: 'Robert Vance', email: 'r.vance@example.com', role: 'Viewer', status: 'Inactive', lastActive: '3 days ago' },
];

// --- Components ---

export const UserManager: React.FC<{
  initialRole?: UserRole;
}> = ({ initialRole = 'Admin' }) => {
  const [users, setUsers] = useState<User[]>(INITIAL_USERS);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState<User | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  
  // Premium Features
  const [currentUserRole, setCurrentUserRole] = useState<UserRole>(initialRole);
  const [sortConfig, setSortConfig] = useState<{ key: keyof User, direction: 'asc' | 'desc' } | null>({ key: 'name', direction: 'asc' });
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [isDirty, setIsDirty] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error' | 'info', message: string } | null>(null);

  const permissions = ROLE_PERMISSIONS[currentUserRole];

  // Auto-hide feedback
  useEffect(() => {
    if (feedback) {
      const timer = setTimeout(() => setFeedback(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [feedback]);

  // Logic: Filtering & Sorting & Pagination
  const { paginatedUsers, totalItems, totalPages } = useMemo(() => {
    let filtered = users.filter(user => {
      const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           user.email.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = statusFilter === 'All' || user.status === statusFilter;
      return matchesSearch && matchesStatus;
    });

    if (sortConfig) {
      filtered.sort((a, b) => {
        const valA = a[sortConfig.key] || '';
        const valB = b[sortConfig.key] || '';
        if (valA < valB) return sortConfig.direction === 'asc' ? -1 : 1;
        if (valA > valB) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
      });
    }

    const startIndex = (currentPage - 1) * itemsPerPage;
    return {
      paginatedUsers: filtered.slice(startIndex, startIndex + itemsPerPage),
      totalItems: filtered.length,
      totalPages: Math.ceil(filtered.length / itemsPerPage)
    };
  }, [users, searchQuery, statusFilter, sortConfig, currentPage]);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, statusFilter]);

  // Actions
  const handleSort = (key: keyof User) => {
    setSortConfig(prev => {
      if (prev?.key === key) {
        return { key, direction: prev.direction === 'asc' ? 'desc' : 'asc' };
      }
      return { key, direction: 'asc' };
    });
  };

  const handleCreate = () => {
    setEditingUser(null);
    setValidationErrors({});
    setIsDirty(false);
    setIsFormOpen(true);
  };

  const handleEdit = (user: User) => {
    if (!permissions.canEdit) return;
    setEditingUser(user);
    setValidationErrors({});
    setIsDirty(false);
    setIsFormOpen(true);
  };

  const validateForm = (data: Partial<User>) => {
    const errors: Record<string, string> = {};
    if (!data.name?.trim()) errors.name = 'Name is required';
    if (!data.email?.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.email = 'Invalid email format';
    }
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      name: formData.get('userName') as string,
      email: formData.get('userEmail') as string,
      role: formData.get('userRole') as UserRole,
    };

    if (!validateForm(data)) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      if (editingUser) {
        setUsers(prev => prev.map(u => u.id === editingUser.id ? { ...u, ...data } : u));
        setFeedback({ type: 'success', message: `User ${data.name} updated successfully` });
      } else {
        const newUser: User = {
          id: Math.random().toString(36).substr(2, 9),
          name: data.name,
          email: data.email,
          role: data.role,
          status: 'Active',
          lastActive: 'Just now',
        };
        setUsers(prev => [newUser, ...prev]);
        setFeedback({ type: 'success', message: `New user ${data.name} created` });
      }
      setIsFormOpen(false);
      setIsSubmitting(false);
    }, 800);
  };

  const handleDeleteClick = (user: User) => {
    if (!permissions.canDelete) return;
    setUserToDelete(user);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    if (!userToDelete) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setUsers(prev => prev.filter(u => u.id !== userToDelete.id));
      setFeedback({ type: 'error', message: `User ${userToDelete.name} deleted` });
      setIsDeleteModalOpen(false);
      setUserToDelete(null);
      setIsSubmitting(false);
    }, 600);
  };

  const handleBulkDelete = () => {
    if (!permissions.canDelete) return;
    if (window.confirm(`Are you sure you want to delete ${selectedIds.length} users?`)) {
      setUsers(prev => prev.filter(u => !selectedIds.includes(u.id)));
      setFeedback({ type: 'error', message: `${selectedIds.length} users removed` });
      setSelectedIds([]);
    }
  };

  const handleBulkStatusUpdate = (status: UserStatus) => {
    setUsers(prev => prev.map(u => selectedIds.includes(u.id) ? { ...u, status } : u));
    setFeedback({ type: 'success', message: `Updated ${selectedIds.length} users to ${status}` });
    setSelectedIds([]);
  };

  return (
    <Stack spacing={6} className="w-full">
      {/* Simulation Banner */}
      <Alert variant="info" className="border-primary-100 bg-primary-50/50">
        <Flex justify="between" align="center" className="w-full">
          <Flex gap={2} align="center">
            <Icon size="xs"><path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></Icon>
            <Text size="sm" className="font-medium">Role Simulation Mode:</Text>
          </Flex>
          <Flex gap={2}>
            {(['Admin', 'Editor', 'Viewer'] as UserRole[]).map(role => (
              <Button 
                key={role} 
                size="xs" 
                variant={currentUserRole === role ? 'primary' : 'outline'}
                onClick={() => setCurrentUserRole(role)}
                className="py-1"
              >
                {role}
              </Button>
            ))}
          </Flex>
        </Flex>
      </Alert>

      {feedback && (
        <div className="fixed top-24 right-8 z-50 animate-in fade-in slide-in-from-right-8">
          <Alert variant={feedback.type === 'success' ? 'success' : feedback.type === 'error' ? 'danger' : 'info'} title={feedback.message} onClose={() => setFeedback(null)} />
        </div>
      )}

      {/* Header & Controls */}
      <Flex justify="between" align="center" className="flex-wrap gap-4 px-1">
        <div>
          <Heading level={2}>Team Management</Heading>
          <Text color="muted">Configure roles and permissions for your organization.</Text>
        </div>
        <Tooltip content={!permissions.canCreate ? "You don't have permission to create users" : ""}>
          <Button 
            variant="primary" 
            onClick={handleCreate} 
            disabled={!permissions.canCreate}
            className="shadow-lg shadow-primary-500/20"
          >
            <Icon size="xs" className="mr-2"><path d="M12 4v16m8-8H4" /></Icon>
            Create Member
          </Button>
        </Tooltip>
      </Flex>

      {/* Filters & Bulk Actions */}
      <Card className="p-4 border-neutral-200/60 dark:border-neutral-800/60 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm">
        <Flex justify="between" align="center" className="flex-wrap gap-4">
          <Flex gap={4} align="center" className="flex-1 min-w-[300px]">
            <div className="relative flex-1">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
                <Icon size="xs"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></Icon>
              </span>
              <Input 
                placeholder="Search by name or email..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-10"
              />
            </div>
            <Select 
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              options={[
                { label: 'All Status', value: 'All' },
                { label: 'Active', value: 'Active' },
                { label: 'Inactive', value: 'Inactive' },
                { label: 'Pending', value: 'Pending' },
              ]}
              className="w-44 h-10"
            />
          </Flex>

          {selectedIds.length > 0 && permissions.canBulkAction && (
            <Flex align="center" gap={3} className="animate-in fade-in slide-in-from-right-4 bg-primary-50 dark:bg-primary-900/10 p-1.5 rounded-lg border border-primary-200/50 dark:border-primary-800/50">
              <Text size="sm" className="font-semibold text-primary-600 px-2 border-r border-primary-200 dark:border-primary-800">
                {selectedIds.length} users
              </Text>
              <Dropdown
                trigger={<Button variant="ghost" size="sm" className="text-primary-700">Actions</Button>}
                items={[
                  { label: 'Activate All', onClick: () => handleBulkStatusUpdate('Active'), icon: <Icon size="xs"><path d="M5 13l4 4L19 7" /></Icon> },
                  { label: 'Deactivate All', onClick: () => handleBulkStatusUpdate('Inactive'), icon: <Icon size="xs"><path d="M6 18L18 6M6 6l12 12" /></Icon> },
                  { label: 'Delete Selected', onClick: handleBulkDelete, danger: true, icon: <Icon size="xs"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></Icon> }
                ]}
              />
            </Flex>
          )}
        </Flex>
      </Card>

      {/* Main Table */}
      <div className="overflow-hidden border border-neutral-200 dark:border-neutral-800 rounded-2xl bg-white dark:bg-neutral-950 shadow-xl shadow-neutral-200/50 dark:shadow-none">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-neutral-50 dark:bg-neutral-900/50 border-b border-neutral-200 dark:border-neutral-800 text-neutral-500 font-bold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="px-6 py-4 w-10">
                  <Checkbox 
                    checked={selectedIds.length > 0 && selectedIds.length === paginatedUsers.length}
                    onChange={() => {
                      if (selectedIds.length === paginatedUsers.length) setSelectedIds([]);
                      else setSelectedIds(paginatedUsers.map(u => u.id));
                    }}
                  />
                </th>
                <th className="px-6 py-4 cursor-pointer hover:text-primary-600 transition" onClick={() => handleSort('name')}>
                  <Flex align="center" gap={1}>
                    Member {sortConfig?.key === 'name' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                  </Flex>
                </th>
                <th className="px-6 py-4 cursor-pointer hover:text-primary-600 transition" onClick={() => handleSort('role')}>
                  <Flex align="center" gap={1}>
                    Role {sortConfig?.key === 'role' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                  </Flex>
                </th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Last Active</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200/80 dark:divide-neutral-800/80">
              {paginatedUsers.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-24 text-center">
                    <Stack align="center" spacing={4}>
                      <div className="w-16 h-16 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center text-neutral-300">
                        <Icon size="lg"><path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></Icon>
                      </div>
                      <div>
                        <Text className="font-bold text-lg">No results found</Text>
                        <Text color="muted">We couldn't find any members matching your criteria.</Text>
                      </div>
                    </Stack>
                  </td>
                </tr>
              ) : (
                paginatedUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-neutral-50/50 dark:hover:bg-neutral-900/50 transition-colors group">
                    <td className="px-6 py-4">
                      <Checkbox 
                        checked={selectedIds.includes(user.id)}
                        onChange={() => {
                          setSelectedIds(prev => prev.includes(user.id) ? prev.filter(i => i !== user.id) : [...prev, user.id]);
                        }}
                      />
                    </td>
                    <td className="px-6 py-4">
                      <Flex gap={3} align="center">
                        <Avatar name={user.name} size="sm" src={user.avatar} className="border-2 border-white dark:border-neutral-800 shadow-sm" />
                        <div>
                          <Text className="font-bold text-neutral-900 dark:text-neutral-100">{user.name}</Text>
                          <Text size="xs" color="muted">{user.email}</Text>
                        </div>
                      </Flex>
                    </td>
                    <td className="px-6 py-4">
                      <Flex gap={2} align="center">
                        <span className={`w-2 h-2 rounded-full ${user.role === 'Admin' ? 'bg-indigo-500' : user.role === 'Editor' ? 'bg-emerald-500' : 'bg-neutral-400'}`} />
                        <Text size="sm" weight="medium">{user.role}</Text>
                      </Flex>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant={
                        user.status === 'Active' ? 'success' : 
                        user.status === 'Inactive' ? 'danger' : 'warning'
                      }>
                        {user.status}
                      </Badge>
                    </td>
                    <td className="px-6 py-4">
                      <Text size="sm" color="muted">{user.lastActive}</Text>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Flex gap={1} justify="end" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <Tooltip content={!permissions.canEdit ? "No permission to edit" : "Edit Member"}>
                          <IconButton 
                            size="sm" 
                            variant="ghost" 
                            onClick={() => handleEdit(user)}
                            disabled={!permissions.canEdit}
                            aria-label="Edit Member"
                            icon={<Icon size="xs"><path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></Icon>}
                          />
                        </Tooltip>
                        <Tooltip content={!permissions.canDelete ? "No permission to delete" : "Remove Member"}>
                          <IconButton 
                            size="sm" 
                            variant="ghost" 
                            className="text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30"
                            onClick={() => handleDeleteClick(user)}
                            disabled={!permissions.canDelete}
                            aria-label="Remove Member"
                            icon={<Icon size="xs"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></Icon>}
                          />
                        </Tooltip>
                      </Flex>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30 flex items-center justify-between">
          <Text size="sm" color="muted">Showing <span className="font-semibold text-neutral-900 dark:text-neutral-100">{paginatedUsers.length}</span> of <span className="font-semibold text-neutral-900 dark:text-neutral-100">{totalItems}</span> members</Text>
          <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
        </div>
      </div>

      {/* Create/Edit Drawer */}
      <Drawer
        isOpen={isFormOpen}
        onClose={() => {
          if (isDirty && !window.confirm("You have unsaved changes. Are you sure you want to close?")) return;
          setIsFormOpen(false);
        }}
        title={editingUser ? 'Edit Member Profile' : 'Invite New Member'}
        size="md"
      >
        <form onSubmit={handleFormSubmit} onChange={() => setIsDirty(true)}>
          <Stack spacing={6} className="p-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="userName">Full Name</Label>
                <Input 
                  id="userName" 
                  name="userName" 
                  defaultValue={editingUser?.name} 
                  placeholder="e.g. Alex Thompson"
                  error={validationErrors.name}
                  className={validationErrors.name ? 'border-red-500' : ''}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="userEmail">Email Address</Label>
                <Input 
                  id="userEmail" 
                  name="userEmail" 
                  type="email" 
                  defaultValue={editingUser?.email} 
                  placeholder="name@company.com" 
                  error={validationErrors.email}
                  className={validationErrors.email ? 'border-red-500' : ''}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="userRole">Access Level</Label>
                <Select 
                  id="userRole" 
                  name="userRole" 
                  defaultValue={editingUser?.role || 'Viewer'}
                  options={[
                    { label: 'Administrator (Full Access)', value: 'Admin' },
                    { label: 'Editor (Restricted Write)', value: 'Editor' },
                    { label: 'Viewer (Read Only)', value: 'Viewer' },
                  ]}
                />
              </div>
            </div>

            {isDirty && (
              <Alert variant="warning" size="sm" className="mb-2">
                <Flex align="center" gap={2}>
                  <Icon size="xs"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></Icon>
                  <Text size="xs">You have unsaved changes</Text>
                </Flex>
              </Alert>
            )}

            <Flex justify="end" gap={3} className="pt-8 border-t border-neutral-100 dark:border-neutral-800 mt-4">
              <Button variant="ghost" onClick={() => setIsFormOpen(false)} type="button">Cancel</Button>
              <Button 
                variant="primary" 
                type="submit" 
                disabled={isSubmitting || (editingUser && !permissions.canEdit)}
                className="min-w-[120px] shadow-lg shadow-primary-500/10"
              >
                {isSubmitting ? 'Processing...' : (editingUser ? 'Save Updates' : 'Send Invitation')}
              </Button>
            </Flex>
          </Stack>
        </form>
      </Drawer>

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        title="Remove Member Access"
        size="sm"
      >
        <Stack spacing={6} className="p-8">
          <div className="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center text-red-600 mb-2">
            <Icon size="md"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></Icon>
          </div>
          <div className="space-y-2">
            <Text className="font-bold text-lg">Are you absolutely sure?</Text>
            <Text color="muted">
              You are about to remove <span className="font-bold text-neutral-900 dark:text-neutral-100">{userToDelete?.name}</span> from the organization. They will lose all access to shared projects.
            </Text>
          </div>
          <Flex justify="end" gap={3} className="mt-2">
            <Button variant="ghost" onClick={() => setIsDeleteModalOpen(false)}>Nevermind</Button>
            <Button 
              variant="danger" 
              onClick={confirmDelete} 
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Removing...' : 'Confirm Removal'}
            </Button>
          </Flex>
        </Stack>
      </Modal>
    </Stack>
  );
};
