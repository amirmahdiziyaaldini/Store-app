import type { Metadata } from 'next';

const BASE_URL = 'https://multimart.com';

// ── Home ───────────────────────────────────────────────
export const homeMetadata: Metadata = {
	title: 'Home',
	description: 'Discover trending furniture, mobiles, watches at Multimart.',
	openGraph: {
		title: 'Multimart — Home',
		description: 'Discover trending furniture, mobiles, watches at Multimart.',
		url: BASE_URL,
	},
};

// ── Shop ───────────────────────────────────────────────
export const shopMetadata: Metadata = {
	title: 'Shop',
	description:
		'Browse our full collection of furniture, mobiles, watches and more.',
	openGraph: {
		title: 'Shop | Multimart',
		description: 'Browse our full collection of products.',
		url: `${BASE_URL}/shop`,
	},
};

// ── Cart ───────────────────────────────────────────────
export const cartMetadata: Metadata = {
	title: 'Cart',
	description: 'Your shopping cart at Multimart.',
	robots: {
		index: false,
		follow: false,
	},
};

// ── Wishlist ───────────────────────────────────────────
export const wishlistMetadata: Metadata = {
	title: 'Wishlist',
	description: 'Your saved products at Multimart.',
	robots: {
		index: false,
		follow: false,
	},
};

// ── Checkout ───────────────────────────────────────────
export const checkoutMetadata: Metadata = {
	title: 'Checkout',
	description: 'Complete your purchase at Multimart.',
	robots: {
		index: false,
		follow: false,
	},
};

// ── Login ──────────────────────────────────────────────
export const loginMetadata: Metadata = {
	title: 'Login',
	description: 'Sign in to your Multimart account.',
	robots: {
		index: false,
		follow: false,
	},
};

// ── Signup ─────────────────────────────────────────────
export const signupMetadata: Metadata = {
	title: 'Sign Up',
	description: 'Create your Multimart account today.',
	robots: {
		index: false,
		follow: false,
	},
};

// ── Product Details (dynamic) ─────────────────────────
export function generateProductMetadata(product: {
	productName: string;
	shortDesc: string;
	imgUrl: string;
}): Metadata {
	return {
		title: product.productName,
		description: product.shortDesc,
		openGraph: {
			title: `${product.productName} | Multimart`,
			description: product.shortDesc,
			images: [
				{
					url: `${BASE_URL}${product.imgUrl}`,
					width: 500,
					height: 500,
					alt: product.productName,
				},
			],
		},
	};
}

// admin_______________________________________________

export const dashboardMetadata: Metadata = {
	title: 'Dashboard | Admin',
	robots: { index: false, follow: false },
};

export const ordersMetadata: Metadata = {
	title: 'Orders | Admin',
	robots: { index: false, follow: false },
};

export const productsMetadata: Metadata = {
	title: 'Products | Admin',
	robots: { index: false, follow: false },
};

export const addProductMetadata: Metadata = {
	title: 'Add Product | Admin',
	robots: { index: false, follow: false },
};

export const settingsMetadata: Metadata = {
	title: 'Settings | Admin',
	robots: { index: false, follow: false },
};
export const usersMetadata: Metadata = {
	title: 'Users | Admin',
	robots: { index: false, follow: false },
};

