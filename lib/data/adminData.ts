export type OrderStatus = 'Delivered' | 'Processing' | 'Pending' | 'Cancelled';
export type UserStatus = 'Active' | 'Inactive' | 'Banned';
export type UserRole = 'Admin' | 'Customer';

export interface Order {
	id: string;
	customer: string;
	email: string;
	product: string;
	amount: number;
	date: string;
	status: OrderStatus;
}

export interface User {
	id: string;
	name: string;
	email: string;
	role: UserRole;
	orders: number;
	spent: number;
	joined: string;
	status: UserStatus;
}

// ── Style Maps ─────────────────────────────────────────

export const ORDER_STATUS_STYLES: Record<OrderStatus, string> = {
	Delivered: 'bg-green-100 text-green-700',
	Processing: 'bg-blue-100 text-blue-700',
	Pending: 'bg-yellow-100 text-yellow-700',
	Cancelled: 'bg-red-100 text-red-700',
};

export const USER_STATUS_STYLES: Record<UserStatus, string> = {
	Active: 'bg-green-100 text-green-700',
	Inactive: 'bg-slate-100 text-slate-500',
	Banned: 'bg-red-100 text-red-700',
};

export const USER_ROLE_STYLES: Record<UserRole, string> = {
	Admin: 'bg-purple-100 text-purple-700',
	Customer: 'bg-blue-100 text-blue-700',
};

export const CATEGORY_STYLES: Record<string, string> = {
	sofa: 'bg-blue-50 text-blue-600',
	chair: 'bg-purple-50 text-purple-600',
	mobile: 'bg-green-50 text-green-600',
	watch: 'bg-orange-50 text-orange-600',
	wireless: 'bg-pink-50 text-pink-600',
};

// ── Orders ─────────────────────────────────────────────

export const ORDERS: Order[] = [
	{
		id: '#ORD-001',
		customer: 'John Doe',
		email: 'john@example.com',
		product: 'Apple iPhone 12 Pro',
		amount: 799,
		date: 'Jun 20, 2025',
		status: 'Delivered',
	},
	{
		id: '#ORD-002',
		customer: 'Jane Smith',
		email: 'jane@example.com',
		product: 'Rolex Watch',
		amount: 299,
		date: 'Jun 21, 2025',
		status: 'Processing',
	},
	{
		id: '#ORD-003',
		customer: 'Bob Johnson',
		email: 'bob@example.com',
		product: 'Stone and Beam Sofa',
		amount: 193,
		date: 'Jun 22, 2025',
		status: 'Pending',
	},
	{
		id: '#ORD-004',
		customer: 'Alice Brown',
		email: 'alice@example.com',
		product: 'Beat Studio Wireless',
		amount: 199,
		date: 'Jun 23, 2025',
		status: 'Delivered',
	},
	{
		id: '#ORD-005',
		customer: 'Charlie Wilson',
		email: 'charlie@example.com',
		product: 'Sakarias Armchair',
		amount: 99,
		date: 'Jun 24, 2025',
		status: 'Cancelled',
	},
	{
		id: '#ORD-006',
		customer: 'Emma Davis',
		email: 'emma@example.com',
		product: 'Apple Watch',
		amount: 399,
		date: 'Jun 25, 2025',
		status: 'Processing',
	},
	{
		id: '#ORD-007',
		customer: 'Liam Garcia',
		email: 'liam@example.com',
		product: 'Faux Velvet Sofa',
		amount: 163,
		date: 'Jun 26, 2025',
		status: 'Delivered',
	},
];

// ── Users ──────────────────────────────────────────────

export const USERS: User[] = [
	{
		id: 'USR-001',
		name: 'John Doe',
		email: 'john@example.com',
		role: 'Customer',
		orders: 5,
		spent: 1200,
		joined: 'Jan 10, 2025',
		status: 'Active',
	},
	{
		id: 'USR-002',
		name: 'Jane Smith',
		email: 'jane@example.com',
		role: 'Customer',
		orders: 3,
		spent: 750,
		joined: 'Feb 5, 2025',
		status: 'Active',
	},
	{
		id: 'USR-003',
		name: 'Bob Johnson',
		email: 'bob@example.com',
		role: 'Customer',
		orders: 1,
		spent: 193,
		joined: 'Mar 20, 2025',
		status: 'Inactive',
	},
	{
		id: 'USR-004',
		name: 'Alice Brown',
		email: 'alice@example.com',
		role: 'Admin',
		orders: 0,
		spent: 0,
		joined: 'Jan 1, 2025',
		status: 'Active',
	},
	{
		id: 'USR-005',
		name: 'Charlie Wilson',
		email: 'charlie@example.com',
		role: 'Customer',
		orders: 2,
		spent: 498,
		joined: 'Apr 15, 2025',
		status: 'Banned',
	},
	{
		id: 'USR-006',
		name: 'Emma Davis',
		email: 'emma@example.com',
		role: 'Customer',
		orders: 7,
		spent: 2100,
		joined: 'Dec 12, 2024',
		status: 'Active',
	},
];

// ── Helper Functions ───────────────────────────────────

export function getOrderStats() {
	return {
		total: ORDERS.length,
		delivered: ORDERS.filter((o) => o.status === 'Delivered').length,
		processing: ORDERS.filter((o) => o.status === 'Processing').length,
		cancelled: ORDERS.filter((o) => o.status === 'Cancelled').length,
	};
}

export function getUserStats() {
	return {
		total: USERS.length,
		active: USERS.filter((u) => u.status === 'Active').length,
		admins: USERS.filter((u) => u.role === 'Admin').length,
		banned: USERS.filter((u) => u.status === 'Banned').length,
	};
}

export function getInitials(name: string): string {
	return name
		.split(' ')
		.map((n) => n[0])
		.join('')
		.toUpperCase();
}

export const STATUS_LIST: OrderStatus[] = [
	'Delivered',
	'Processing',
	'Pending',
	'Cancelled',
];
