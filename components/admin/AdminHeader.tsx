'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import userIcon from '@/public/images/user-icon.png';

const PAGE_TITLES: Record<string, string> = {
	'/dashboard': 'Dashboard',
	'/products': 'Products',
	'/products/new': 'Add Product',
	'/orders': 'Orders',
	'/users': 'Users',
	'/settings': 'Settings',
};

export default function AdminHeader() {
	const pathname = usePathname();

	const title =
		Object.entries(PAGE_TITLES).find(([key]) =>
			pathname.startsWith(key),
		)?.[1] ?? 'Admin';

	return (
		<header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between shrink-0">
			<h2 className="text-xl font-bold text-[#0a1d37]">{title}</h2>

			<div className="flex items-center gap-4">
				{/* Notifications */}
				<button className="relative w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition cursor-pointer">
					<i className="ri-notification-3-line text-xl text-[#0a1d37]" />
					<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
				</button>

				{/* Admin User */}
				<div className="flex items-center gap-3">
					<Image
						src={userIcon}
						alt="admin"
						width={36}
						height={36}
						className="rounded-full"
					/>
					<div className="hidden sm:block">
						<p className="text-sm font-semibold text-[#0a1d37]">Admin</p>
						<p className="text-xs text-slate-400">admin@multimart.com</p>
					</div>
				</div>
			</div>
		</header>
	);
}
