'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCartStore } from '@/lib/store/cartStore';
import { useWishlistStore } from '@/lib/store/wishlistStore';
import { ProductCardProps } from './typs';



export default function ProductCard({
	id,
	title,
	description,
	price,
	image,
	avgRating,
	category,
}: ProductCardProps) {
	const addToCart = useCartStore((state) => state.addToCart);
	const toggleWishlist = useWishlistStore((state) => state.toggleWishlist);
	const isInWishlist = useWishlistStore((state) => state.isInWishlist);

	const inWishlist = isInWishlist(id);

	function handleAddToCart(e: React.MouseEvent) {
		e.preventDefault();
		addToCart({ id, productName: title, imgUrl: image, price, category });
	}

	function handleToggleWishlist(e: React.MouseEvent) {
		e.preventDefault();
		toggleWishlist({
			id,
			productName: title,
			imgUrl: image,
			price,
			category,
			avgRating,
		});
	}

	return (
		<div className="relative overflow-hidden rounded-2xl bg-white p-4 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
			{/* Wishlist Button */}
			<button
				onClick={handleToggleWishlist}
				aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
				className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center transition hover:scale-110"
			>
				<i
					className={`text-lg transition-colors duration-300 ${
						inWishlist
							? 'ri-heart-fill text-red-500'
							: 'ri-heart-line text-slate-400'
					}`}
				/>
			</button>

			<Link href={`/shop/${id}`} className="flex flex-col">
				{/* Image */}
				<div className="overflow-hidden rounded-xl">
					<Image
						src={image}
						alt={title}
						width={300}
						height={256}
						quality={85}
						className="w-full h-48 sm:h-56 md:h-64 object-contain p-2 transition-transform duration-300 hover:scale-110"
					/>
				</div>

				<div className="mt-4 flex flex-col gap-3 text-left">
					<h2 className="text-lg font-semibold line-clamp-1">{title}</h2>

					<p className="text-sm text-slate-500 line-clamp-2">{description}</p>

					{/* Rating */}
					<div className="flex items-center gap-1">
						<i className="ri-star-fill text-orange-400 text-sm" />
						<span className="text-sm text-slate-600 font-medium">
							{avgRating}
						</span>
					</div>

					<div className="flex items-center justify-between">
						<span className="text-lg sm:text-xl lg:text-2xl font-bold">
							${price.toLocaleString()}
						</span>

						{/* Add To Cart */}
						<button
							type="button"
							onClick={handleAddToCart}
							aria-label={`Add ${title} to cart`}
							className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#0a1d37] text-white transition hover:scale-110 cursor-pointer"
						>
							<i className="ri-add-fill" aria-hidden="true" />
						</button>
					</div>
				</div>
			</Link>
		</div>
	);
}
