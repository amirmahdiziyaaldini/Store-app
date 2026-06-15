'use client';

import { useProducts } from '@/lib/hook/useProducts';
import ProductCard from './ProductCard';
import { ProductListProps } from './typs';


export default function ProductList({ category, search, sort }: ProductListProps) {
	const { data: products, isLoading, isError } = useProducts({
		category,
		search,
		sort,
	});

	if (isLoading) {
		return (
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-12 px-4 sm:px-6 lg:px-8">
				{Array.from({ length: 8 }).map((_, i) => (
					<div key={i} className="rounded-2xl bg-slate-100 h-72 animate-pulse" />
				))}
			</div>
		);
	}

	if (isError) {
		return (
			<div className="text-center py-20 text-red-500">
				<p className="text-lg font-medium">Something went wrong!</p>
				<p className="text-sm mt-1">Please try again later.</p>
			</div>
		);
	}

	if (!products || products.length === 0) {
		return (
			<div className="text-center py-20 text-slate-500">
				<p className="text-lg font-medium">No products found.</p>
			</div>
		);
	}

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-12 px-4 sm:px-6 lg:px-8">
			{products.map((product) => (
				<ProductCard
					key={product.id}
					id={product.id}
					title={product.productName}
					description={product.shortDesc}
					price={product.price}
					image={product.imgUrl}
					avgRating={product.avgRating}
					category={product.category}  
				/>
			))}
		</div>
	);
}