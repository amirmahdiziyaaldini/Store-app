import Nevigation from '@/components/header/navigation';
import Footer from '@/components/footer/footer';

export default function StoreLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex flex-col min-h-screen">
			<Nevigation />

			<main className="flex-1">{children}</main>

			<Footer />
		</div>
	);
}
