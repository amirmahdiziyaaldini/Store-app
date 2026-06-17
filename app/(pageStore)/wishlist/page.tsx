import { wishlistMetadata } from '@/lib/metadata';
import WishlistClient from './wishlistClient.tsx';
export const metadata = wishlistMetadata;


export default function wishlist() {
	return <WishlistClient />;
}
