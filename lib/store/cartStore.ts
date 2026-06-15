import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem } from './typs';




interface CartStore {
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


export const useCartStore = create<CartStore>()(
	persist(
		(set, get) => ({
			items: [],

			addToCart: (product) => {
				const exists = get().items.find((item) => item.id === product.id);

				if (exists) {
					set((state) => ({
						items: state.items.map((item) =>
							item.id === product.id
								? { ...item, quantity: item.quantity + 1 }
								: item,
						),
					}));
				} else {
					set((state) => ({
						items: [...state.items, { ...product, quantity: 1 }],
					}));
				}
			},

			removeFromCart: (id) => {
				set((state) => ({
					items: state.items.filter((item) => item.id !== id),
				}));
			},

			increaseQty: (id) => {
				set((state) => ({
					items: state.items.map((item) =>
						item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
					),
				}));
			},

			decreaseQty: (id) => {
				const item = get().items.find((i) => i.id === id);

				if (item?.quantity === 1) {
					get().removeFromCart(id);
				} else {
					set((state) => ({
						items: state.items.map((i) =>
							i.id === id ? { ...i, quantity: i.quantity - 1 } : i,
						),
					}));
				}
			},

			clearCart: () => set({ items: [] }),

			totalItems: () =>
				get().items.reduce((total, item) => total + item.quantity, 0),

			totalPrice: () =>
				get().items.reduce(
					(total, item) => total + item.price * item.quantity,
					0,
				),
		}),
		{
			name: 'cart-storage', 
		},
	),
);
