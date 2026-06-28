import { addProductMetadata } from '@/lib/metadata';
import Link from 'next/link';
export const metadata = addProductMetadata;

const CATEGORIES = ['sofa', 'chair', 'mobile', 'watch', 'wireless'];

const inputClass =
	'w-full border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#0a1d37] transition bg-white placeholder:text-slate-400';

export default function AddProductPage() {
	return (
		<div className="space-y-6 max-w-4xl">
			{/* Header */}
			<div className="flex items-center gap-4">
				<Link
					href="/products"
					className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition shadow-sm"
				>
					<i className="ri-arrow-left-line text-[#0a1d37]" />
				</Link>
				<div>
					<h2 className="text-2xl font-bold text-[#0a1d37]">Add New Product</h2>
					<p className="text-sm text-slate-500 mt-0.5">
						Fill in the details below to add a new product
					</p>
				</div>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
				{/* Left */}
				<div className="space-y-5">
					{/* Basic Info */}
					<div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 space-y-4">
						<h3 className="font-semibold text-[#0a1d37]">Basic Information</h3>

						<div>
							<label className="text-sm font-medium text-slate-600 mb-1.5 block">
								Product Name
							</label>
							<input
								type="text"
								placeholder="e.g. Apple iPhone 15 Pro"
								className={inputClass}
							/>
						</div>

						<div>
							<label className="text-sm font-medium text-slate-600 mb-1.5 block">
								Short Description
							</label>
							<input
								type="text"
								placeholder="Brief product summary..."
								className={inputClass}
							/>
						</div>

						<div>
							<label className="text-sm font-medium text-slate-600 mb-1.5 block">
								Full Description
							</label>
							<textarea
								rows={5}
								placeholder="Full product description..."
								className={`${inputClass} resize-none`}
							/>
						</div>
					</div>

					{/* Pricing */}
					<div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 space-y-4">
						<h3 className="font-semibold text-[#0a1d37]">Pricing</h3>

						<div className="grid grid-cols-2 gap-4">
							<div>
								<label className="text-sm font-medium text-slate-600 mb-1.5 block">
									Price ($)
								</label>
								<input
									type="number"
									placeholder="0.00"
									min={0}
									className={inputClass}
								/>
							</div>

							<div>
								<label className="text-sm font-medium text-slate-600 mb-1.5 block">
									Avg Rating
								</label>
								<input
									type="number"
									placeholder="4.5"
									min={0}
									max={5}
									step={0.1}
									className={inputClass}
								/>
							</div>
						</div>
					</div>
				</div>

				{/* Right */}
				<div className="space-y-5">
					{/* Category */}
					<div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 space-y-4">
						<h3 className="font-semibold text-[#0a1d37]">Category</h3>

						<div className="flex flex-wrap gap-2">
							{CATEGORIES.map((cat) => (
								<label
									key={cat}
									className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 cursor-pointer hover:border-[#0a1d37] transition has-checked:bg-[#0a1d37] has-checked:text-white has-checked:border-[#0a1d37]"
								>
									<input
										type="radio"
										name="category"
										value={cat}
										className="hidden"
									/>
									<span className="text-sm font-medium capitalize">{cat}</span>
								</label>
							))}
						</div>
					</div>

					{/* Image */}
					<div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 space-y-4">
						<h3 className="font-semibold text-[#0a1d37]">Product Image</h3>

						<div>
							<label className="text-sm font-medium text-slate-600 mb-1.5 block">
								Image Path
							</label>
							<input
								type="text"
								placeholder="/images/product.jpg"
								className={inputClass}
							/>
							<p className="text-xs text-slate-400 mt-1.5">
								Upload image to /public/images/ first
							</p>
						</div>

						{/* Upload Area */}
						<div className="border-2 border-dashed border-slate-200 rounded-xl p-6 text-center hover:border-[#0a1d37] transition cursor-pointer">
							<i className="ri-upload-cloud-2-line text-3xl text-slate-300" />
							<p className="text-sm text-slate-400 mt-2">
								Drag & drop or click to upload
							</p>
							<p className="text-xs text-slate-300 mt-1">PNG, JPG up to 2MB</p>
						</div>
					</div>

					{/* Actions */}
					<div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 space-y-3">
						<button
							type="button"
							className="w-full bg-[#0a1d37] text-white py-3 rounded-xl font-semibold text-sm hover:opacity-90 transition cursor-pointer"
						>
							Save Product
						</button>

						<Link
							href="/products"
							className="w-full border border-slate-200 text-slate-600 py-3 rounded-xl font-semibold text-sm hover:bg-slate-50 transition text-center block"
						>
							Cancel
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
