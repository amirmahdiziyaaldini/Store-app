import { useQuery } from '@tanstack/react-query';
import { Product } from '@/lib/data/products';

interface ProductsFilter {
	category?: string;
	search?: string;
	sort?: string;
}

async function fetchProducts(filters: ProductsFilter): Promise<Product[]> {
	const params = new URLSearchParams();

	if (filters.category && filters.category !== 'all') {
		params.set('category', filters.category);
	}
	if (filters.search) {
		params.set('search', filters.search);
	}
	if (filters.sort) {
		params.set('sort', filters.sort);
	}

	const res = await fetch(`/api/products?${params.toString()}`);

	if (!res.ok) throw new Error('Failed to fetch products');

	return res.json();
}

export function useProducts(filters: ProductsFilter = {}) {
	return useQuery<Product[]>({
		queryKey: ['products', filters],
		queryFn: () => fetchProducts(filters),
	});
}
