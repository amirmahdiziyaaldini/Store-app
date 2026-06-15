import { NextRequest, NextResponse } from 'next/server';
import products from '@/lib/data/products';

export async function GET(request: NextRequest) {
	const { searchParams } = new URL(request.url);

	const category = searchParams.get('category');
	const search = searchParams.get('search');
	const sort = searchParams.get('sort');

	let filtered = [...products];

	if (category && category !== 'all') {
		filtered = filtered.filter((p) => p.category === category);
	}
	if (search) {
		filtered = filtered.filter((p) =>
			p.productName.toLowerCase().includes(search.toLowerCase()),
		);
	}

	if (sort === 'asc') {
		filtered.sort((a, b) => a.price - b.price);
	} else if (sort === 'desc') {
		filtered.sort((a, b) => b.price - a.price);
	}

	return NextResponse.json(filtered);
}
