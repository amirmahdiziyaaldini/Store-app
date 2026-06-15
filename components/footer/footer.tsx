import Link from 'next/link';

export default function Footer() {
	const year = new Date().getFullYear();
	return (
		<footer className="bg-[#0a1d37] text-white pt-10 pb-5">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] ">
				<div className="flex flex-col gap-4">
					<div className=" flex">
						<h2 className="font-bold text-xl">Multimart</h2>
					</div>
					<p className="text-sm text-gray-300 leading-relaxed mr-3">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
						debitis amet exercitationem consequuntur repellendus? Maxime esse
						praesentium nobis deserunt iusto, officia ab labore ut
					</p>
				</div>

				{/* Top Categories */}
				<div className="flex flex-col gap-4">
					<h2 className="font-bold text-lg">Top Categories</h2>
					<ul className="flex flex-col gap-3 text-sm text-gray-300">
						<li>
							<Link href="#" className="hover:text-white transition-colors">
								Mobile Phones
							</Link>
						</li>
						<li>
							<Link href="#" className="hover:text-white transition-colors">
								Modern Sofa
							</Link>
						</li>
						<li>
							<Link href="#" className="hover:text-white transition-colors">
								Arm Chair
							</Link>
						</li>
						<li>
							<Link href="#" className="hover:text-white transition-colors">
								Smart Watches
							</Link>
						</li>
					</ul>
				</div>

				{/*Useful Links */}
				<div className="flex flex-col gap-4">
					<h2 className="font-bold text-lg">Useful Links</h2>
					<ul className="flex flex-col gap-3 text-sm text-gray-300">
						<li>
							<Link href="/shop" className="hover:text-white transition-colors">
								Shop
							</Link>
						</li>
						<li>
							<Link href="/cart" className="hover:text-white transition-colors">
								Cart
							</Link>
						</li>
						<li>
							<Link
								href="/login"
								className="hover:text-white transition-colors"
							>
								Login
							</Link>
						</li>
						<li>
							<Link href="#" className="hover:text-white transition-colors">
								Privacy Policy
							</Link>
						</li>
					</ul>
				</div>

				{/* Contact */}
				<div className="flex flex-col gap-4">
					<h2 className="font-bold text-lg">Contact</h2>
					<ul className="flex flex-col gap-3 text-sm text-gray-300">
						<li className="flex items-start gap-2">
							<i className="ri-map-pin-line mt-0.5 text-base"></i>
							<span>123, ZindaBazar, Sylhet, Bangladesh</span>
						</li>
						<li className="flex items-center gap-2">
							<i className="ri-phone-line text-base"></i>
							<span>+916967666</span>
						</li>
						<li className="flex items-center gap-2">
							<i className="ri-mail-line text-base"></i>
							<span>amirmahdiziyaaldini@gmail.com</span>
						</li>
					</ul>
				</div>
			</div>

			{/* Copyright */}
			<div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-600 px-4 sm:px-6 lg:px-8 ">
				<p className="text-sm text-gray-400">
					CopyRight
					<span className="text-white font-medium px-1">{year}</span>
					developed by
				</p>
			</div>
		</footer>
	);
}
