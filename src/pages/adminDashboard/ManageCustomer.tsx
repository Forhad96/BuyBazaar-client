"use client"

import { useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Checkbox } from "@/components/ui/checkbox"

type User = {
  id: string
  name: string
  email: string
  role: 'admin' | 'vendor' | 'customer'
  status: 'active' | 'inactive'
  isSuspended: boolean
  joinDate: string
}

const initialUsers: User[] = [
  { id: '1', name: 'John Doe', email: 'john@example.com', role: 'admin', status: 'active', isSuspended: false, joinDate: '2023-01-15' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'vendor', status: 'active', isSuspended: false, joinDate: '2023-02-20' },
  { id: '3', name: 'Bob Johnson', email: 'bob@example.com', role: 'customer', status: 'inactive', isSuspended: true, joinDate: '2023-03-10' },
  { id: '4', name: 'Alice Brown', email: 'alice@example.com', role: 'vendor', status: 'active', isSuspended: false, joinDate: '2023-04-05' },
  { id: '5', name: 'Charlie Wilson', email: 'charlie@example.com', role: 'customer', status: 'active', isSuspended: false, joinDate: '2023-05-12' },
]

export function ManageCustomer() {
  const [users, setUsers] = useState<User[]>(initialUsers)
  const [searchTerm, setSearchTerm] = useState('')
  const [roleFilter, setRoleFilter] = useState<string[]>([])
  const [statusFilter, setStatusFilter] = useState<string[]>([])
  const [sortConfig, setSortConfig] = useState<{ key: keyof User; direction: 'asc' | 'desc' } | null>(null)

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  const handleRoleFilter = (role: string) => {
    setRoleFilter(prev => 
      prev.includes(role) ? prev.filter(r => r !== role) : [...prev, role]
    )
  }

  const handleStatusFilter = (status: string) => {
    setStatusFilter(prev => 
      prev.includes(status) ? prev.filter(s => s !== status) : [...prev, status]
    )
  }

  const handleSort = (key: keyof User) => {
    setSortConfig(prev => 
      prev && prev.key === key
        ? { key, direction: prev.direction === 'asc' ? 'desc' : 'asc' }
        : { key, direction: 'asc' }
    )
  }

  const handleSuspend = (id: string) => {
    setUsers(prev => prev.map(user => 
      user.id === id ? { ...user, isSuspended: !user.isSuspended } : user
    ))
  }

  const filteredAndSortedUsers = users
    .filter(user => 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(user => roleFilter.length === 0 || roleFilter.includes(user.role))
    .filter(user => statusFilter.length === 0 || statusFilter.includes(user.status))
    .sort((a, b) => {
      if (sortConfig) {
        if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'asc' ? -1 : 1
        if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'asc' ? 1 : -1
      }
      return 0
    })

  return (
    <div className="space-y-4">
      <div className="flex justify-between mx-6">
        <Input
          placeholder="Search users..."
          value={searchTerm}
          onChange={handleSearch}
          className="max-w-sm"
        />
        <div className="space-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Filter Role</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuCheckboxItem
                checked={roleFilter.includes('admin')}
                onCheckedChange={() => handleRoleFilter('admin')}
              >
                Admin
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={roleFilter.includes('vendor')}
                onCheckedChange={() => handleRoleFilter('vendor')}
              >
                Vendor
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={roleFilter.includes('customer')}
                onCheckedChange={() => handleRoleFilter('customer')}
              >
                Customer
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Filter Status</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuCheckboxItem
                checked={statusFilter.includes('active')}
                onCheckedChange={() => handleStatusFilter('active')}
              >
                Active
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={statusFilter.includes('inactive')}
                onCheckedChange={() => handleStatusFilter('inactive')}
              >
                Inactive
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">
              <Button variant="ghost" onClick={() => handleSort('id')}>
                ID
                {sortConfig?.key === 'id' && (sortConfig.direction === 'asc' ? ' ↑' : ' ↓')}
              </Button>
            </TableHead>
            <TableHead>
              <Button variant="ghost" onClick={() => handleSort('name')}>
                Name
                {sortConfig?.key === 'name' && (sortConfig.direction === 'asc' ? ' ↑' : ' ↓')}
              </Button>
            </TableHead>
            <TableHead>
              <Button variant="ghost" onClick={() => handleSort('email')}>
                Email
                {sortConfig?.key === 'email' && (sortConfig.direction === 'asc' ? ' ↑' : ' ↓')}
              </Button>
            </TableHead>
            <TableHead>
              <Button variant="ghost" onClick={() => handleSort('role')}>
                Role
                {sortConfig?.key === 'role' && (sortConfig.direction === 'asc' ? ' ↑' : ' ↓')}
              </Button>
            </TableHead>
            <TableHead>
              <Button variant="ghost" onClick={() => handleSort('status')}>
                Status
                {sortConfig?.key === 'status' && (sortConfig.direction === 'asc' ? ' ↑' : ' ↓')}
              </Button>
            </TableHead>
            <TableHead>
              <Button variant="ghost" onClick={() => handleSort('isSuspended')}>
                Suspended
                {sortConfig?.key === 'isSuspended' && (sortConfig.direction === 'asc' ? ' ↑' : ' ↓')}
              </Button>
            </TableHead>
            <TableHead>
              <Button variant="ghost" onClick={() => handleSort('joinDate')}>
                Join Date
                {sortConfig?.key === 'joinDate' && (sortConfig.direction === 'asc' ? ' ↑' : ' ↓')}
              </Button>
            </TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredAndSortedUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.status}</TableCell>
              <TableCell>
                <Checkbox
                  checked={user.isSuspended}
                  onCheckedChange={() => handleSuspend(user.id)}
                />
              </TableCell>
              <TableCell>{user.joinDate}</TableCell>
              <TableCell>
                <Button variant="ghost">Edit</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

