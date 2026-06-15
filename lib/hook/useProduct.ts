import { useQuery } from '@tanstack/react-query';
import { Product } from '@/lib/data/products';

async function fetchProduct(id: string): Promise<Product> {
	const res = await fetch(`/api/products/${id}`);

	if (!res.ok) throw new Error('Product not found');

	return res.json();
}

export function useProduct(id: string) {
	return useQuery<Product>({
		queryKey: ['product', id],
		queryFn: () => fetchProduct(id),
		enabled: !!id,
	});
}