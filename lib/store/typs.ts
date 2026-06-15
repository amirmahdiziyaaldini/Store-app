export interface CartItem {
	id: string;
	productName: string;
	imgUrl: string;
	price: number;
	category: string;
	quantity: number;
}

export interface WishlistItem {
	id: string;
	productName: string;
	imgUrl: string;
	price: number;
	category: string;
	avgRating: number;
}


export interface WishlistStore {
	// ── State ──────────────────────────────
	items: WishlistItem[];

	// ── Actions ────────────────────────────
	addToWishlist: (product: WishlistItem) => void;
	removeFromWishlist: (id: string) => void;
	toggleWishlist: (product: WishlistItem) => void;
	clearWishlist: () => void;

	// ── Computed ───────────────────────────
	isInWishlist: (id: string) => boolean;
	totalItems: () => number;
}



export interface CartStore {
	// ── State ──────────────────────────────
	items: CartItem[];

	// ── Actions ────────────────────────────
	addToCart: (product: Omit<CartItem, 'quantity'>) => void;
	removeFromCart: (id: string) => void;
	increaseQty: (id: string) => void;
	decreaseQty: (id: string) => void;
	clearCart: () => void;

	// ── Computed ───────────────────────────
	totalItems: () => number;
	totalPrice: () => number;
}