'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useCartStore } from '@/lib/store/cartStore';
import { useWishlistStore } from '@/lib/store/wishlistStore';

import logo from '@/public/images/eco-logo.png';
import user_icon from '@/public/images/user-icon.png';

interface NavItem {
	address: string;
	namePage: string;
}

const NAV_ITEMS: NavItem[] = [
	{ address: '/', namePage: 'Home' },
	{ address: '/shop', namePage: 'Shop' },
	{ address: '/cart', namePage: 'Cart' },
];

export default function Navigation() {
	const pathname = usePathname();
	const [menuOpen, setMenuOpen] = useState(false);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		// eslint-disable-next-line react-hooks/set-state-in-effect
		setMounted(true);
	}, []);

	const cartTotal = useCartStore((state) => state.totalItems());
	const wishlistTotal = useWishlistStore((state) => state.totalItems());

	return (
		<>
			{/* Overlay */}
			<div
				onClick={() => setMenuOpen(false)}
				className={`
					fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden
					transition-all duration-300 z-40
					${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
				`}
			/>

			{/* Mobile Drawer */}
			<div
				className={`
					fixed top-0 right-0 h-screen w-72 bg-white shadow-2xl
					z-50 md:hidden transition-all duration-500 ease-out overflow-y-auto
					${menuOpen ? 'translate-x-0' : 'translate-x-full'}
				`}
			>
				<div className="flex items-center justify-between p-5 border-b">
					<div className="flex items-center gap-2">
						<Image src={logo} alt="logo" className="w-8 h-8" />
						<h2 className="font-bold text-[#0a1d37]">Multimart</h2>
					</div>

					<button
						onClick={() => setMenuOpen(false)}
						className="text-2xl transition-transform duration-300 hover:rotate-90"
					>
						<i className="ri-close-line" />
					</button>
				</div>

				<nav className="p-5">
					<ul className="space-y-3">
						{NAV_ITEMS.map((item) => (
							<li key={item.address}>
								<Link
									href={item.address}
									onClick={() => setMenuOpen(false)}
									className={`
										block px-4 py-3 rounded-xl transition-all duration-300 hover:translate-x-2
										${
											pathname === item.address
												? 'bg-[#0a1d37] text-white'
												: 'hover:bg-slate-100 text-[#0a1d37]'
										}
									`}
								>
									{item.namePage}
								</Link>
							</li>
						))}
					</ul>

					<div className="mt-8 border-t pt-6 space-y-5">
						{/* Cart Mobile */}
						<Link
							href="/cart"
							onClick={() => setMenuOpen(false)}
							className="flex items-center justify-between"
						>
							<div className="flex items-center gap-4">
								<i className="ri-shopping-bag-line text-2xl" />
								<span>Cart</span>
							</div>
							{mounted && cartTotal > 0 && (
								<span className="bg-[#0a1d37] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
									{cartTotal}
								</span>
							)}
						</Link>

						{/* Wishlist Mobile */}
						<Link
							href="/wishlist"
							onClick={() => setMenuOpen(false)}
							className="flex items-center justify-between"
						>
							<div className="flex items-center gap-4">
								<i className="ri-heart-3-line text-2xl" />
								<span>Wishlist</span>
							</div>
							{mounted && wishlistTotal > 0 && (
								<span className="bg-[#0a1d37] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
									{wishlistTotal}
								</span>
							)}
						</Link>

						{/* User Mobile */}
						<Link
							href="/login"
							onClick={() => setMenuOpen(false)}
							className="flex items-center gap-4"
						>
							<Image
								src={user_icon}
								alt="user"
								className="w-10 h-10 rounded-full"
							/>
							<span className="font-medium">My Account</span>
						</Link>
					</div>
				</nav>
			</div>

			{/* Header */}
			<header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-slate-100">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
					<div className="flex items-center justify-between">
						{/* Logo */}
						<Link href="/" className="flex items-center gap-3 group">
							<Image
								src={logo}
								alt="logo"
								className="h-8 w-8 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110"
							/>
							<h1 className="font-bold text-xl text-[#0a1d37] transition-all duration-300 group-hover:tracking-wide">
								Multimart
							</h1>
						</Link>

						{/* Desktop Menu */}
						<nav className="hidden md:flex">
							<ul className="flex items-center gap-8">
								{NAV_ITEMS.map((item) => (
									<li key={item.address}>
										<Link
											href={item.address}
											className={`
												relative pb-1 transition-all duration-300
												after:absolute after:left-0 after:bottom-0 after:h-0.5
												after:bg-[#0a1d37] after:transition-all after:duration-300
												${
													pathname === item.address
														? 'text-[#0a1d37] font-bold'
														: 'text-slate-700 hover:font-bold'
												}
											`}
										>
											{item.namePage}
										</Link>
									</li>
								))}
							</ul>
						</nav>

						{/* Right Side */}
						<div className="flex items-center gap-5">
							{/* Cart Badge */}
							<Link href="/cart" className="relative hidden md:block group">
								<i className="ri-shopping-bag-line text-2xl transition-all duration-300 group-hover:scale-125 group-hover:-translate-y-1" />
								{mounted && cartTotal > 0 && (
									<span className="absolute -top-1 -right-2 bg-[#0a1d37] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-125">
										{cartTotal}
									</span>
								)}
							</Link>

							{/* Wishlist Badge */}
							<Link href="/wishlist" className="relative hidden md:block group">
								<i className="ri-heart-3-line text-2xl transition-all duration-300 group-hover:scale-125 group-hover:text-red-500" />
								{mounted && wishlistTotal > 0 && (
									<span className="absolute -top-1 -right-2 bg-[#0a1d37] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
										{wishlistTotal}
									</span>
								)}
							</Link>

							{/* User */}
							<Link href="/login">
								<Image
									src={user_icon}
									alt="user"
									className="hidden md:block h-10 w-10 rounded-full cursor-pointer transition-all duration-300 hover:scale-110 hover:ring-4 hover:ring-blue-100"
								/>
							</Link>

							{/* Mobile Menu Button */}
							<button
								onClick={() => setMenuOpen(true)}
								className="md:hidden text-3xl text-[#0a1d37] transition-all duration-300 hover:rotate-90"
							>
								<i className="ri-menu-line" />
							</button>
						</div>
					</div>
				</div>
			</header>
		</>
	);
}
