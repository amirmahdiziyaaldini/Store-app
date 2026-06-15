'use client';

import { useState } from 'react';
import ProductList from '@/components/ui/ProductList';

const CATEGORIES = [
	{ value: 'all', label: 'All Categories' },
	{ value: 'sofa', label: 'Sofa' },
	{ value: 'chair', label: 'Chair' },
	{ value: 'mobile', label: 'Mobile' },
	{ value: 'watch', label: 'Watch' },
	{ value: 'wireless', label: 'Wireless' },
];

const SORT_OPTIONS = [
	{ value: '', label: 'Sort By' },
	{ value: 'asc', label: 'Price: Low to High' },
	{ value: 'desc', label: 'Price: High to Low' },
];

export default function ShopClient() {
	const [category, setCategory] = useState('all');
	const [sort, setSort] = useState('');
	const [search, setSearch] = useState('');
	const [searchInput, setSearchInput] = useState('');


	function handleSearch() {
		setSearch(searchInput);
	}

	function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
		if (e.key === 'Enter') handleSearch();
	}

	return (
		<div className="px-4 sm:px-6 lg:px-8 py-7">
			{/* Filters */}
			<div className="flex flex-col gap-4 lg:flex-row justify-between">
				<div className="flex flex-col sm:flex-row gap-4">
					{/* Category */}
					<select
						value={category}
						onChange={(e) => setCategory(e.target.value)}
						className="
							bg-[#0a1d37]
							text-white
							px-4
							py-3
							rounded-md
							min-w-55
							outline-none
							cursor-pointer
						"
					>
						{CATEGORIES.map((cat) => (
							<option key={cat.value} value={cat.value}>
								{cat.label}
							</option>
						))}
					</select>

					{/* Sort */}
					<select
						value={sort}
						onChange={(e) => setSort(e.target.value)}
						className="
							bg-[#0a1d37]
							text-white
							px-4
							py-3
							rounded-md
							min-w-40
							outline-none
							cursor-pointer
						"
					>
						{SORT_OPTIONS.map((opt) => (
							<option key={opt.value} value={opt.value}>
								{opt.label}
							</option>
						))}
					</select>
				</div>

				{/* Search */}
				<div className="relative w-full lg:w-1/2">
					<input
						type="text"
						value={searchInput}
						onChange={(e) => setSearchInput(e.target.value)}
						onKeyDown={handleKeyDown}
						placeholder="Search products..."
						className="
							w-full
							border
							border-slate-400
							rounded-md
							px-4
							py-3
							pr-12
							outline-none
							focus:border-[#0a1d37]
						"
					/>
					<button
						onClick={handleSearch}
						aria-label="Search"
						className="absolute right-4 top-1/2 -translate-y-1/2"
					>
						<i className="ri-search-line text-lg text-[#0a1d37]" />
					</button>
				</div>
			</div>

			{/* Product List */}
			<ProductList category={category} sort={sort} search={search} />
		</div>
	);
}
