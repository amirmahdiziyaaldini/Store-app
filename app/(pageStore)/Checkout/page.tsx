import CommoSection from '@/components/ui/CommoSection';
import Link from 'next/link';
import CheckoutForm from './CheckoutForm';

export default function Checkout() {
	return (
		<div>
			<CommoSection title={'Checkout'} />
			<div className="px-4 sm:px-6 lg:px-8 my-9 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-7">
				{/* a  */}
				<CheckoutForm />

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

					{/* Extra info */}
					<p className="text-center text-xs text-slate-400 mt-4">
						Taxes & shipping calculated at checkout
					</p>
				</div>
			</div>
		</div>
	);
}
