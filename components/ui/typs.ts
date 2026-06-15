export interface ProductListProps {
	category?: string;
	search?: string;
	sort?: string;
}

export interface ProductCardProps {
	id: string;
	title: string;
	description: string;
	price: number;
	image: string;
	avgRating: number;
	category: string;
}
