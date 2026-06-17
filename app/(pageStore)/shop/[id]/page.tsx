import type { Metadata } from 'next';
import CommonSection from '@/components/ui/CommoSection';
import ProductClient from './ProductClient';
import { generateProductMetadata } from '@/lib/metadata';

export async function generateMetadata({
	params,
}: {
	params: Promise<{ id: string }>;
}): Promise<Metadata> {
	const { id } = await params;

	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${id}`,
	);

	if (!res.ok) return { title: 'Product Not Found' };

	const product = await res.json();

	return generateProductMetadata(product);
}

export default async function ProductDetailsPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;

	return (
		<div>
			<CommonSection title="Product Details" />
			<ProductClient id={id} />
		</div>
	);
}
