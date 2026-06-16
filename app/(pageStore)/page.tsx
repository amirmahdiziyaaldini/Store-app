import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import heroImg from '@/public/images/hero-img.png';
import Services from '@/Services/services';
import ProductList from '@/components/ui/ProductList';
import Clock from '@/components/ui/Clock';

export const metadata: Metadata = {
	title: 'Home',
	description:
		'Explore trending furniture, chairs, sofas, watches and electronics at Multimart ecommerce store.',

	keywords: [
		'Furniture',
		'Ecommerce',
		'Chair',
		'Sofa',
		'Watch',
		'Electronics',
		'Next.js',
	],

	openGraph: {
		title: 'Multimart | Home',
		description:
			'Explore trending furniture, chairs, sofas, watches and electronics.',
		type: 'website',
	},

	robots: {
		index: true,
		follow: true,
	},
};

export default function HomePage() {
	const year = new Date().getFullYear();

	return (
		<>
			{/* Hero Section */}
			<section className="bg-[#d6e5fb]" aria-labelledby="hero-heading">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
						<div className="flex flex-col gap-5 py-12 md:py-20 lg:py-28">
							<p className="text-base md:text-lg">
								Trending products in {year}
							</p>

							<h1
								id="hero-heading"
								className="font-bold text-2xl sm:text-3xl lg:text-5xl leading-tight"
							>
								Make Your Interior More Minimalistic & Modern
							</h1>

							<p className="text-gray-600 text-sm md:text-base max-w-lg">
								Discover premium furniture collections designed to make your
								home modern, stylish and comfortable.
							</p>

							<Link
								href="/shop"
								aria-label="Browse all products in shop"
								className="inline-flex w-fit bg-[#0a1d37] text-white py-3 px-7 rounded-md text-sm font-medium hover:shadow-lg transition-transform hover:scale-105 duration-300"
							>
								Shop Now
							</Link>
						</div>

						<div className="flex justify-center">
							<Image
								src={heroImg}
								alt="Modern furniture showcase for living room"
								priority
								sizes="(max-width:768px) 100vw, 50vw"
								className="w-full h-auto max-w-md lg:max-w-lg xl:max-w-xl"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Services */}
			<section aria-labelledby="services-heading" className="my-16">
				<h2 id="services-heading" className="sr-only">
					Our Services
				</h2>

				<Services />
			</section>

			{/* Trending Products */}
			<section
				aria-labelledby="trending-products"
				className="text-center mt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
			>
				<h2
					id="trending-products"
					className="font-bold text-2xl sm:text-3xl lg:text-4xl"
				>
					Trending Products
				</h2>

				<ProductList category="chair" />
			</section>

			{/* Best Sales */}
			<section
				aria-labelledby="best-sales"
				className="text-center mt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
			>
				<h2
					id="best-sales"
					className="font-bold text-2xl sm:text-3xl lg:text-4xl"
				>
					Best Sales
				</h2>

				<ProductList category="sofa" />
			</section>

			{/* Limited Offer */}
			<section aria-labelledby="limited-offer">
				<h2 id="limited-offer" className="sr-only">
					Limited Time Offer
				</h2>

				<Clock />
			</section>

			{/* New Arrivals */}
			<section
				aria-labelledby="new-arrivals"
				className="text-center mt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
			>
				<h2
					id="new-arrivals"
					className="font-bold text-2xl sm:text-3xl lg:text-4xl"
				>
					New Arrivals
				</h2>

				<ProductList category="mobile" />
			</section>

			{/* Popular Category */}
			<section
				aria-labelledby="popular-category"
				className="text-center mt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
			>
				<h2
					id="popular-category"
					className="font-bold text-2xl sm:text-3xl lg:text-4xl"
				>
					Popular Category
				</h2>

				<ProductList category="watch" />
			</section>
		</>
	);
}