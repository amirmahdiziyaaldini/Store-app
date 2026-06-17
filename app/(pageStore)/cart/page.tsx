import CartClient from './CartClient';
import { cartMetadata } from '@/lib/metadata';
export const metadata = cartMetadata;

export default function CartPage() {
	return <CartClient />;
}
