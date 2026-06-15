import Link from 'next/link';

export default function OrderSuccessPage() {
	return (
		<div className="min-h-screen flex items-center justify-center px-4">
			<div
				className="
					w-full
					max-w-lg
					bg-white
					rounded-3xl
					shadow-xl
					border
					border-slate-200
					p-8
					text-center
				"
			>
				<div
					className="
						mx-auto
						flex
						h-24
						w-24
						items-center
						justify-center
						rounded-full
						bg-green-100
					"
				>
					<svg
						className="h-12 w-12 text-green-600"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={3}
							d="M5 13l4 4L19 7"
						/>
					</svg>
				</div>

				<h1 className="mt-6 text-3xl font-bold text-[#0a1d37]">
					Order Placed Successfully
				</h1>

				<p className="mt-4 text-slate-500 leading-7">
					Thank you for your purchase. Your order has been successfully received
					and is now being processed.
				</p>

				<div
					className="
						mt-6
						rounded-xl
						bg-slate-50
						p-4
					"
				>
					<p className="text-sm text-slate-500">Order ID</p>

					<p className="mt-1 text-lg font-semibold text-[#0a1d37]">
						#ORD-2025-001
					</p>
				</div>

				<div className="mt-8 flex flex-col gap-3">
					<Link
						href="/home"
						className="
							w-full
							bg-[#0a1d37]
							text-white
							py-3
							rounded-xl
							font-semibold
							transition
							hover:opacity-90
						"
					>
						Track Order
					</Link>

					<Link
						href="/shop"
						className="
							w-full
							border
							border-slate-300
							py-3
							rounded-xl
							font-semibold
							text-[#0a1d37]
							transition
							hover:bg-slate-50
						"
					>
						Continue Shopping
					</Link>
				</div>
			</div>
		</div>
	);
}
