import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { WishlistItem } from './typs';



interface WishlistStore {
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

export const useWishlistStore = create<WishlistStore>()(
	persist(
		(set, get) => ({
			items: [],

			addToWishlist: (product) => {
				const exists = get().isInWishlist(product.id);

				if (!exists) {
					set((state) => ({
						items: [...state.items, product],
					}));
				}
			},

			removeFromWishlist: (id) => {
				set((state) => ({
					items: state.items.filter((item) => item.id !== id),
				}));
			},

			toggleWishlist: (product) => {
				const exists = get().isInWishlist(product.id);

				if (exists) {
					get().removeFromWishlist(product.id);
				} else {
					get().addToWishlist(product);
				}
			},

			clearWishlist: () => set({ items: [] }),

			isInWishlist: (id) => get().items.some((item) => item.id === id),

			totalItems: () => get().items.length,
		}),
		{
			name: 'wishlist-storage',
		},
	),
);
