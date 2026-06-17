import ShopClient from './ShopClient';
import CommonSection from '@/components/ui/CommoSection';
import { shopMetadata } from '@/lib/metadata';
export const metadata = shopMetadata;

export default function ShopPage() {
	return (
		<div className="max-w-7xl mx-auto">
			<CommonSection title="Products" />
			<ShopClient />
		</div>
	);
}
