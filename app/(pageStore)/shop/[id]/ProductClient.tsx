'use client';

import Image from 'next/image';
import ProductList from '@/components/ui/ProductList';
import ProductTabs from '@/components/ui/ProductTabs';
import { useProduct } from '@/lib/hook/useProduct';
import { useCartStore } from '@/lib/store/cartStore';
import { useWishlistStore } from '@/lib/store/wishlistStore';

interface ProductClientProps {
	id: string;
}

export default function ProductClient({ id }: ProductClientProps) {
	const { data: product, isLoading, isError } = useProduct(id);

	const addToCart = useCartStore((state) => state.addToCart);
	const toggleWishlist = useWishlistStore((state) => state.toggleWishlist);
	const isInWishlist = useWishlistStore((state) => state.isInWishlist);

	// Loading State
	if (isLoading) {
		return (
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
					<div className="rounded-2xl bg-slate-100 h-96 animate-pulse" />
					<div className="flex flex-col gap-4">
						<div className="h-10 bg-slate-100 rounded-xl animate-pulse w-3/4" />
						<div className="h-6 bg-slate-100 rounded-xl animate-pulse w-1/3" />
						<div className="h-24 bg-slate-100 rounded-xl animate-pulse" />
						<div className="h-12 bg-slate-100 rounded-xl animate-pulse w-1/3" />
					</div>
				</div>
			</div>
		);
	}

	// Error State
	if (isError || !product) {
		return (
			<div className="text-center py-20">
				<i className="ri-error-warning-line text-6xl text-red-300" />
				<p className="mt-4 text-xl font-semibold text-red-500">
					Product not found!
				</p>
			</div>
		);
	}

	const inWishlist = isInWishlist(product.id);

	function handleAddToCart() {
		addToCart({
			id: product!.id,
			productName: product!.productName,
			imgUrl: product!.imgUrl,
			price: product!.price,
			category: product!.category,
		});
	}

	function handleToggleWishlist() {
		toggleWishlist({
			id: product!.id,
			productName: product!.productName,
			imgUrl: product!.imgUrl,
			price: product!.price,
			category: product!.category,
			avgRating: product!.avgRating,
		});
	}

	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
				{/* Product Image */}
				<div className="flex items-center justify-center">
					<div className="w-full max-w-md">
						<Image
							src={product.imgUrl}
							alt={product.productName}
							width={500}
							height={500}
							className="w-full h-auto object-contain"
							priority
						/>
					</div>
				</div>

				{/* Product Info */}
				<div>
					<h1 className="text-3xl md:text-4xl font-semibold text-[#0a1d37]">
						{product.productName}
					</h1>

					{/* Rating */}
					<div className="flex flex-wrap items-center gap-4 mt-4">
						<div className="flex text-orange-400 text-lg">
							{Array.from({ length: 5 }).map((_, i) => (
								<i
									key={i}
									className={
										i < Math.floor(product.avgRating)
											? 'ri-star-fill'
											: i < product.avgRating
												? 'ri-star-half-fill'
												: 'ri-star-line'
									}
								/>
							))}
						</div>
						<span className="text-orange-400 font-medium">
							({product.avgRating} Rating)
						</span>
					</div>

					{/* Price & Category */}
					<div className="flex flex-wrap items-center gap-6 mt-6">
						<span className="text-3xl font-bold text-[#0a1d37]">
							${product.price.toLocaleString()}
						</span>
						<p className="text-lg">
							<span className="font-medium">Category: </span>
							<span className="text-slate-600 capitalize">
								{product.category}
							</span>
						</p>
					</div>

					{/* Description */}
					<p className="mt-6 text-slate-500 leading-8">{product.shortDesc}</p>

					{/* Buttons */}
					<div className="mt-8 flex items-center gap-4">
						{/* Add To Cart */}
						<button
							onClick={handleAddToCart}
							className="
								bg-[#0a1d37]
								text-white
								px-8
								py-3
								rounded-lg
								font-medium
								transition-all
								duration-300
								hover:-translate-y-1
								hover:shadow-lg
								cursor-pointer
							"
						>
							Add To Cart
						</button>

						{/* Wishlist Toggle */}
						<button
							onClick={handleToggleWishlist}
							aria-label={
								inWishlist ? 'Remove from wishlist' : 'Add to wishlist'
							}
							className="
								w-12
								h-12
								rounded-full
								border-2
								border-[#0a1d37]
								flex
								items-center
								justify-center
								transition-all
								duration-300
								hover:scale-110
								cursor-pointer
							"
						>
							<i
								className={`text-xl transition-colors duration-300 ${
									inWishlist
										? 'ri-heart-fill text-red-500'
										: 'ri-heart-line text-[#0a1d37]'
								}`}
							/>
						</button>
					</div>
				</div>
			</div>

			{/* Tabs */}
			<div className="mt-16">
				<ProductTabs />
			</div>

			{/* Related Products */}
			<div className="mt-20">
				<h2 className="text-2xl font-bold text-[#0a1d37] mb-8">
					You might also like
				</h2>
				<ProductList category={product.category} />
			</div>
		</div>
	);
}
