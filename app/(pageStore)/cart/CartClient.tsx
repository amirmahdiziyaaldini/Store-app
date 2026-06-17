'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CommonSection from '@/components/ui/CommoSection';
import { useCartStore } from '@/lib/store/cartStore';

export default function CartClient() {
	const [mounted, setMounted] = useState(false);

	const items = useCartStore((state) => state.items);
	const removeFromCart = useCartStore((state) => state.removeFromCart);
	const increaseQty = useCartStore((state) => state.increaseQty);
	const decreaseQty = useCartStore((state) => state.decreaseQty);
	const totalPrice = useCartStore((state) => state.totalPrice());
	const totalItems = useCartStore((state) => state.totalItems());

	useEffect(() => {
		// eslint-disable-next-line react-hooks/set-state-in-effect
		setMounted(true);
	}, []);

	if (!mounted) {
		return (
			<>
				<CommonSection title="Shopping Cart" />
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
					<div className="h-64 bg-slate-100 rounded-2xl animate-pulse" />
				</div>
			</>
		);
	}

	if (items.length === 0) {
		return (
			<>
				<CommonSection title="Shopping Cart" />
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
					<i className="ri-shopping-bag-line text-6xl text-slate-300" />
					<h2 className="mt-4 text-2xl font-semibold text-slate-500">
						Your cart is empty
					</h2>
					<p className="mt-2 text-slate-400">
						Looks like you haven&apos;t added anything yet.
					</p>
					<Link
						href="/shop"
						className="mt-8 inline-flex bg-[#0a1d37] text-white px-8 py-3 rounded-xl font-medium hover:opacity-90 transition"
					>
						Start Shopping
					</Link>
				</div>
			</>
		);
	}

	return (
		<>
			<CommonSection title="Shopping Cart" />

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
				<div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-8">
					{/* Desktop Table */}
					<div className="hidden md:block">
						<table className="w-full border-collapse">
							<thead>
								<tr className="border-b border-slate-200 text-[#0a1d37]">
									<th className="py-4 text-left font-semibold">Image</th>
									<th className="py-4 text-left font-semibold">Product</th>
									<th className="py-4 text-left font-semibold">Price</th>
									<th className="py-4 text-left font-semibold">Qty</th>
									<th className="py-4 text-left font-semibold">Subtotal</th>
									<th className="py-4 text-left font-semibold">Delete</th>
								</tr>
							</thead>

							<tbody>
								{items.map((item) => (
									<tr key={item.id} className="border-b border-slate-200">
										<td className="py-5">
											<Image
												src={item.imgUrl}
												alt={item.productName}
												width={100}
												height={100}
												className="object-contain"
											/>
										</td>

										<td className="py-5 font-medium text-[#0a1d37]">
											{item.productName}
										</td>

										<td className="py-5 text-[#0a1d37]">${item.price}</td>

										{/* Quantity Controls */}
										<td className="py-5">
											<div className="flex items-center gap-2">
												<button
													onClick={() => decreaseQty(item.id)}
													className="w-7 h-7 rounded-full border border-slate-300 flex items-center justify-center hover:bg-slate-100 transition cursor-pointer"
												>
													<i className="ri-subtract-line text-sm" />
												</button>

												<span className="w-6 text-center font-medium">
													{item.quantity}
												</span>

												<button
													onClick={() => increaseQty(item.id)}
													className="w-7 h-7 rounded-full border border-slate-300 flex items-center justify-center hover:bg-slate-100 transition cursor-pointer"
												>
													<i className="ri-add-line text-sm" />
												</button>
											</div>
										</td>

										<td className="py-5 font-medium text-[#0a1d37]">
											${(item.price * item.quantity).toLocaleString()}
										</td>

										<td className="py-5">
											<button
												onClick={() => removeFromCart(item.id)}
												className="cursor-pointer hover:text-red-500 transition-colors"
											>
												<i className="ri-delete-bin-line text-xl text-[#0a1d37]" />
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>

					{/* Mobile Cards */}
					<div className="md:hidden flex flex-col gap-4">
						{items.map((item) => (
							<div
								key={item.id}
								className="rounded-xl border border-slate-200 p-4 shadow-sm"
							>
								<div className="flex gap-4">
									<Image
										src={item.imgUrl}
										alt={item.productName}
										width={90}
										height={90}
										className="object-contain shrink-0"
									/>

									<div className="flex-1 min-w-0">
										<h3 className="font-semibold text-[#0a1d37] text-sm">
											{item.productName}
										</h3>

										<p className="mt-1 text-sm text-slate-600">
											Price: ${item.price}
										</p>

										{/* Quantity Controls Mobile */}
										<div className="flex items-center gap-2 mt-2">
											<button
												onClick={() => decreaseQty(item.id)}
												className="w-6 h-6 rounded-full border border-slate-300 flex items-center justify-center hover:bg-slate-100 transition cursor-pointer"
											>
												<i className="ri-subtract-line text-xs" />
											</button>

											<span className="text-sm font-medium">
												{item.quantity}
											</span>

											<button
												onClick={() => increaseQty(item.id)}
												className="w-6 h-6 rounded-full border border-slate-300 flex items-center justify-center hover:bg-slate-100 transition cursor-pointer"
											>
												<i className="ri-add-line text-xs" />
											</button>
										</div>

										<p className="mt-1 text-sm font-medium text-[#0a1d37]">
											Subtotal: ${(item.price * item.quantity).toLocaleString()}
										</p>
									</div>

									<button
										onClick={() => removeFromCart(item.id)}
										className="self-start shrink-0 hover:text-red-500 transition-colors"
									>
										<i className="ri-delete-bin-line text-xl text-[#0a1d37]" />
									</button>
								</div>
							</div>
						))}
					</div>

					{/* Order Summary */}
					<div className="h-fit bg-[#0a1d37] text-white rounded-2xl p-5 sm:p-6 shadow-lg sticky top-24">
						<h3 className="text-xl font-semibold mb-6">Order Summary</h3>

						<div className="space-y-5">
							<div className="flex items-center justify-between">
								<span className="text-slate-300">Total Qty</span>
								<span className="font-medium">{totalItems} Items</span>
							</div>

							<div className="flex items-center justify-between">
								<span className="text-slate-300">Subtotal</span>
								<span className="font-medium">
									${totalPrice.toLocaleString()}
								</span>
							</div>

							<div className="flex items-center justify-between">
								<span className="text-slate-300">Shipping</span>
								<span className="font-medium">Free</span>
							</div>
						</div>

						<div className="my-6 border-t border-white/20" />

						<div className="flex items-center justify-between">
							<h4 className="text-xl font-semibold">Total</h4>
							<span className="text-3xl font-bold">
								${totalPrice.toLocaleString()}
							</span>
						</div>

						<p className="mt-2 text-sm text-slate-400">
							Taxes and shipping calculated at checkout.
						</p>

						<div className="mt-6 flex flex-col gap-3">
							<Link
								href="/Checkout"
								className="w-full bg-white text-[#0a1d37] font-semibold text-center py-3 rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
							>
								Place Order
							</Link>

							<Link
								href="/shop"
								className="w-full border border-white/20 text-white text-center py-3 rounded-xl transition-all duration-300 hover:bg-white/10"
							>
								Continue Shopping
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
