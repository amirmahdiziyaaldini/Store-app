// app/(pageStore)/shop/page.tsx
import type { Metadata } from 'next';
import ShopClient from './ShopClient';
import CommonSection from '@/components/ui/CommoSection';

export const metadata: Metadata = {
	title: 'Shop',
};

export default function ShopPage() {
	return (
		<div className="max-w-7xl mx-auto">
			<CommonSection title="Products" />
			<ShopClient />
		</div>
	);
}
