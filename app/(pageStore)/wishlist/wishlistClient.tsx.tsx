/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CommonSection from '@/components/ui/CommoSection';
import { useWishlistStore } from '@/lib/store/wishlistStore';
import { useCartStore } from '@/lib/store/cartStore';

export default function WishlistClient() {
	const [mounted, setMounted] = useState(false);

	const items = useWishlistStore((state) => state.items);
	const removeFromWishlist = useWishlistStore(
		(state) => state.removeFromWishlist,
	);
	const addToCart = useCartStore((state) => state.addToCart);

	useEffect(() => {
		setMounted(true);
	}, []);

	// Skeleton
	if (!mounted) {
		return (
			<>
				<CommonSection title="Wishlist" />
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{Array.from({ length: 4 }).map((_, i) => (
							<div
								key={i}
								className="rounded-3xl bg-slate-100 h-80 animate-pulse"
							/>
						))}
					</div>
				</div>
			</>
		);
	}

	// Empty State
	if (items.length === 0) {
		return (
			<>
				<CommonSection title="Wishlist" />
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
					<i className="ri-heart-3-line text-6xl text-slate-300" />
					<h2 className="mt-4 text-2xl font-semibold text-slate-500">
						Your wishlist is empty
					</h2>
					<p className="mt-2 text-slate-400">
						Save items you love to your wishlist.
					</p>
					<Link
						href="/shop"
						className="mt-8 inline-flex bg-[#0a1d37] text-white px-8 py-3 rounded-xl font-medium hover:opacity-90 transition"
					>
						Explore Products
					</Link>
				</div>
			</>
		);
	}

	return (
		<>
			<CommonSection title="Wishlist" />

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
				{/* Header */}
				<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
					<div>
						<h2 className="text-3xl font-bold text-[#0a1d37]">
							My Wishlist ❤️
						</h2>
						<p className="text-slate-500 mt-2">
							You have {items.length} saved{' '}
							{items.length === 1 ? 'product' : 'products'}
						</p>
					</div>
				</div>

				{/* Products Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
					{items.map((item) => (
						<div
							key={item.id}
							className="group bg-white rounded-3xl p-5 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
						>
							{/* Delete */}
							<div className="flex justify-end">
								<button
									onClick={() => removeFromWishlist(item.id)}
									aria-label="Remove from wishlist"
									className="w-10 h-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center hover:bg-red-100 cursor-pointer transition"
								>
									<i className="ri-delete-bin-line text-lg" />
								</button>
							</div>

							{/* Clickable Area */}
							<Link href={`/shop/${item.id}`}>
								<div className="flex items-center justify-center h-56">
									<Image
										src={item.imgUrl}
										alt={item.productName}
										width={200}
										height={200}
										className="object-contain max-h-full transition-transform duration-300 group-hover:scale-105"
									/>
								</div>

								<h3 className="mt-4 text-lg font-semibold text-[#0a1d37] line-clamp-2">
									{item.productName}
								</h3>

								{/* Rating */}
								<div className="flex items-center gap-2 mt-3">
									<div className="flex text-yellow-400">
										{Array.from({ length: 5 }).map((_, i) => (
											<i
												key={i}
												className={
													i < Math.floor(item.avgRating)
														? 'ri-star-fill'
														: i < item.avgRating
															? 'ri-star-half-fill'
															: 'ri-star-line'
												}
											/>
										))}
									</div>
									<span className="text-sm text-slate-500">
										({item.avgRating})
									</span>
								</div>

								<div className="mt-4">
									<span className="text-2xl font-bold text-[#0a1d37]">
										${item.price.toLocaleString()}
									</span>
								</div>
							</Link>

							{/* Add To Cart */}
							<button
								onClick={() =>
									addToCart({
										id: item.id,
										productName: item.productName,
										imgUrl: item.imgUrl,
										price: item.price,
										category: item.category,
									})
								}
								className="mt-5 w-full bg-[#0a1d37] text-white py-3 rounded-xl font-medium hover:opacity-90 transition cursor-pointer"
							>
								Add To Cart
							</button>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
