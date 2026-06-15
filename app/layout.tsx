import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import 'remixicon/fonts/remixicon.css';
import Providers from './providers';

const montserrat = Montserrat({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700', '800'],
	display: 'swap',
});

export const metadata: Metadata = {
	title: {
		default: 'Multimart ',
		template: 'Multimart  | %s',
	},
	description: 'Ecommerce Website',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="text-[#0a1d37]">
			<body className={`${montserrat.className} antialiased`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
