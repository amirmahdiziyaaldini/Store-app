import CommoSection from '@/components/ui/CommoSection';
import Link from 'next/link';

export default function Checkout() {
	const inputClass =
		'w-full h-12 px-4 rounded-lg border border-slate-300 bg-white text-slate-700 placeholder:text-slate-400 transition-all duration-200 focus:border-[#0a1d37] focus:ring-4 focus:ring-[#0a1d37]/10 outline-none';
	return (
		<div>
			<CommoSection title={'Checkout'} />
			<div className="px-4 sm:px-6 lg:px-8 my-9 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-7">
				<form className="flex flex-col gap-4 bg-white p-5 md:p-7 rounded-xl shadow-sm border border-slate-200">
					<h3 className="text-xl font-semibold text-[#0a1d37] mb-2">
						Billing Information
					</h3>

					<input
						type="text"
						placeholder="Enter your name"
						className={inputClass}
					/>

					<input
						type="email"
						placeholder="Enter your email"
						className={inputClass}
					/>

					<input type="tel" placeholder="Phone number" className={inputClass} />

					<input
						type="text"
						placeholder="Street address"
						className={inputClass}
					/>

					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
						<input type="text" placeholder="City" className={inputClass} />

						<input
							type="text"
							placeholder="Postal code"
							className={inputClass}
						/>
					</div>

					<input type="text" placeholder="Country" className={inputClass} />
				</form>

				{/* b */}
				<div
					className="
		bg-[#0a1d37]
		text-white
		rounded-3xl
		p-6
		lg:p-8
		shadow-2xl
		h-fit
		sticky
		top-24
	"
				>
					{/* Title */}
					<div className="mb-6">
						<h3 className="text-2xl font-bold">Order Summary</h3>
						<p className="text-sm text-slate-300 mt-1">
							Review your order before checkout
						</p>
					</div>

					{/* Items */}
					<div className="space-y-4">
						<div className="flex justify-between items-center">
							<span className="text-slate-300">Total Items</span>
							<span className="font-semibold">3</span>
						</div>

						<div className="flex justify-between items-center">
							<span className="text-slate-300">Subtotal</span>
							<span className="font-semibold">$450</span>
						</div>

						<div className="flex justify-between items-center">
							<span className="text-slate-300">Shipping</span>
							<span className="font-semibold">$20</span>
						</div>

						<div className="flex justify-between items-center">
							<span className="text-slate-300">Discount</span>
							<span className="font-semibold text-green-400">-$15</span>
						</div>
					</div>

					{/* Divider */}
					<div className="my-6 border-t border-white/20"></div>

					{/* Total */}
					<div className="bg-white/10 rounded-2xl p-4">
						<div className="flex items-center justify-between">
							<span className="text-lg font-medium">Total Cost</span>

							<span className="text-3xl font-bold text-white">$455</span>
						</div>
					</div>

					{/* Secure Checkout */}
					<div className="mt-5 flex items-center gap-2 text-sm text-slate-300">
						<i className="ri-shield-check-line text-green-400 text-lg"></i>
						<span>Secure Checkout Guaranteed</span>
					</div>

					{/* Button */}
					<Link
						href="/OrderSuccessPage"
						className="
			mt-6
			flex
			items-center
			justify-center
			gap-2
			w-full
			bg-white
			text-[#0a1d37]
			font-bold
			py-4
			rounded-2xl
			transition-all
			duration-300
			hover:-translate-y-1
			hover:shadow-xl
		"
					>
						<span>Place Order</span>
						<i className="ri-arrow-right-line"></i>
					</Link>

					{/* Extra info */}
					<p className="text-center text-xs text-slate-400 mt-4">
						Taxes & shipping calculated at checkout
					</p>
				</div>
			</div>
		</div>
	);
}
