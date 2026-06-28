'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import logo from '@/public/images/eco-logo.png';

const NAV_ITEMS = [
	{
		label: 'Dashboard',
		href: '/dashboard',
		icon: 'ri-dashboard-line',
	},
	{
		label: 'Products',
		href: '/products',
		icon: 'ri-box-3-line',
	},
	{
		label: 'Orders',
		href: '/orders',
		icon: 'ri-file-list-3-line',
	},
	{
		label: 'Users',
		href: '/users',
		icon: 'ri-group-line',
	},
	{
		label: 'Settings',
		href: '/settings',
		icon: 'ri-settings-3-line',
	},
];

export default function AdminSidebar() {
	const pathname = usePathname();

	return (
		<aside className="w-64 bg-[#0a1d37] text-white flex flex-col shrink-0">
			{/* Logo */}
			<div className="flex items-center gap-3 px-6 py-5 border-b border-white/10">
				<Image src={logo} alt="logo" width={32} height={32} />
				<div>
					<h1 className="font-bold text-base leading-tight">Multimart</h1>
					<p className="text-xs text-slate-400">Admin Panel</p>
				</div>
			</div>

			{/* Nav */}
			<nav className="flex-1 px-4 py-6 space-y-1">
				{NAV_ITEMS.map((item) => {
					const isActive = pathname.startsWith(item.href);
					return (
						<Link
							key={item.href}
							href={item.href}
							className={`
								flex items-center gap-3 px-4 py-3 rounded-xl
								transition-all duration-200 text-sm font-medium
								${
									isActive
										? 'bg-white text-[#0a1d37]'
										: 'text-slate-300 hover:bg-white/10 hover:text-white'
								}
							`}
						>
							<i className={`${item.icon} text-lg`} />
							{item.label}
						</Link>
					);
				})}
			</nav>

			{/* Bottom */}
			<div className="px-4 py-4 border-t border-white/10">
				<Link
					href="/"
					className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-300 hover:bg-white/10 hover:text-white transition-all duration-200 text-sm"
				>
					<i className="ri-store-2-line text-lg" />
					Back to Store
				</Link>
			</div>
		</aside>
	);
}
