import Link from 'next/link';
import Image from 'next/image';
import products from '@/lib/data/products';
import { productsMetadata } from '@/lib/metadata';
import { CATEGORY_STYLES } from '@/lib/data/adminData';
export const metadata = productsMetadata;

export default function AdminProductsPage() {
	return (
		<div className="space-y-6">
			{/* Header */}
			<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
				<div>
					<h2 className="text-2xl font-bold text-[#0a1d37]">Products</h2>
					<p className="text-sm text-slate-500 mt-1">
						{products.length} products total
					</p>
				</div>

				<Link
					href="/products/new"
					className="inline-flex items-center gap-2 bg-[#0a1d37] text-white px-5 py-2.5 rounded-xl font-medium text-sm hover:opacity-90 transition"
				>
					<i className="ri-add-line text-lg" />
					Add Product
				</Link>
			</div>

			{/* Filters */}
			<div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex flex-col sm:flex-row gap-3">
				<div className="relative flex-1">
					<input
						type="text"
						placeholder="Search products..."
						className="w-full border border-slate-200 rounded-xl px-4 py-2.5 pr-10 text-sm outline-none focus:border-[#0a1d37] transition"
					/>
					<i className="ri-search-line absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
				</div>

				<select className="border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-[#0a1d37] bg-white min-w-40">
					<option>All Categories</option>
					<option>Sofa</option>
					<option>Chair</option>
					<option>Mobile</option>
					<option>Watch</option>
					<option>Wireless</option>
				</select>

				<select className="border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-[#0a1d37] bg-white min-w-36">
					<option>Sort By</option>
					<option>Price: Low to High</option>
					<option>Price: High to Low</option>
					<option>Rating</option>
				</select>
			</div>

			{/* Table */}
			<div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
				<div className="overflow-x-auto">
					<table className="w-full">
						<thead>
							<tr className="text-xs text-slate-400 uppercase border-b border-slate-100 bg-slate-50">
								<th className="text-left px-6 py-4">Product</th>
								<th className="text-left px-6 py-4">Category</th>
								<th className="text-left px-6 py-4">Price</th>
								<th className="text-left px-6 py-4">Rating</th>
								<th className="text-left px-6 py-4">Reviews</th>
								<th className="text-left px-6 py-4">Actions</th>
							</tr>
						</thead>

						<tbody>
							{products.map((product) => (
								<tr
									key={product.id}
									className="border-b border-slate-50 hover:bg-slate-50 transition"
								>
									<td className="px-6 py-4">
										<div className="flex items-center gap-4">
											<div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-100 shrink-0">
												<Image
													src={product.imgUrl}
													alt={product.productName}
													width={48}
													height={48}
													className="w-full h-full object-contain p-1"
												/>
											</div>
											<div className="min-w-0">
												<p className="text-sm font-semibold text-[#0a1d37] truncate max-w-45">
													{product.productName}
												</p>
												<p className="text-xs text-slate-400">
													ID: {product.id}
												</p>
											</div>
										</div>
									</td>

									<td className="px-6 py-4">
										<span
											className={`text-xs font-semibold px-3 py-1 rounded-full capitalize ${CATEGORY_STYLES[product.category]}`}
										>
											{product.category}
										</span>
									</td>

									<td className="px-6 py-4 text-sm font-bold text-[#0a1d37]">
										${product.price.toLocaleString()}
									</td>

									<td className="px-6 py-4">
										<div className="flex items-center gap-1">
											<i className="ri-star-fill text-orange-400 text-sm" />
											<span className="text-sm font-medium text-[#0a1d37]">
												{product.avgRating}
											</span>
										</div>
									</td>

									<td className="px-6 py-4 text-sm text-slate-500">
										{product.reviews.length} reviews
									</td>

									<td className="px-6 py-4">
										<div className="flex items-center gap-2">
											<Link
												href={`/shop/${product.id}`}
												target="_blank"
												className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition"
												title="View"
											>
												<i className="ri-eye-line text-sm text-slate-600" />
											</Link>

											<Link
												href={`/shop/${product.id}`}
												className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center hover:bg-blue-100 transition"
												title="Edit"
											>
												<i className="ri-edit-line text-sm text-blue-600" />
											</Link>

											<button
												className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center hover:bg-red-100 transition cursor-pointer"
												title="Delete"
											>
												<i className="ri-delete-bin-line text-sm text-red-500" />
											</button>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>

				{/* Footer */}
				<div className="px-6 py-4 border-t border-slate-100 flex items-center justify-between">
					<p className="text-sm text-slate-500">
						Showing <span className="font-semibold">{products.length}</span>{' '}
						products
					</p>
					<div className="flex items-center gap-2">
						<button className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition cursor-pointer">
							<i className="ri-arrow-left-s-line text-slate-600" />
						</button>
						<span className="text-sm text-slate-600 px-2">1 / 1</span>
						<button className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition cursor-pointer">
							<i className="ri-arrow-right-s-line text-slate-600" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
