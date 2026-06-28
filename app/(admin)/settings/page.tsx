import { settingsMetadata } from "@/lib/metadata";
export const metadata = settingsMetadata;

const inputClass =
	'w-full border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#0a1d37] transition bg-white placeholder:text-slate-400';

export default function AdminSettingsPage() {
	return (
		<div className="space-y-6 max-w-4xl">
			{/* Header */}
			<div>
				<h2 className="text-2xl font-bold text-[#0a1d37]">Settings</h2>
				<p className="text-sm text-slate-500 mt-1">
					Manage your store and account settings
				</p>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6">
				{/* Left Nav */}
				<div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-3 h-fit">
					{[
						{ label: 'Store Info', icon: 'ri-store-2-line', active: true },
						{ label: 'Account', icon: 'ri-user-settings-line', active: false },
						{
							label: 'Notifications',
							icon: 'ri-notification-3-line',
							active: false,
						},
						{
							label: 'Security',
							icon: 'ri-shield-keyhole-line',
							active: false,
						},
						{ label: 'Appearance', icon: 'ri-palette-line', active: false },
					].map((item) => (
						<button
							key={item.label}
							className={`
								w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition cursor-pointer
								${item.active ? 'bg-[#0a1d37] text-white' : 'text-slate-600 hover:bg-slate-50'}
							`}
						>
							<i className={`${item.icon} text-lg`} />
							{item.label}
						</button>
					))}
				</div>

				{/* Right Content */}
				<div className="space-y-5">
					{/* Store Info */}
					<div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 space-y-5">
						<div className="flex items-center justify-between border-b border-slate-100 pb-4">
							<div>
								<h3 className="font-bold text-[#0a1d37]">Store Information</h3>
								<p className="text-xs text-slate-400 mt-0.5">
									Basic info about your store
								</p>
							</div>
							<i className="ri-store-2-line text-2xl text-slate-300" />
						</div>

						<div>
							<label className="text-sm font-medium text-slate-600 mb-1.5 block">
								Store Name
							</label>
							<input
								type="text"
								defaultValue="Multimart"
								className={inputClass}
							/>
						</div>

						<div>
							<label className="text-sm font-medium text-slate-600 mb-1.5 block">
								Store Email
							</label>
							<input
								type="email"
								defaultValue="contact@multimart.com"
								className={inputClass}
							/>
						</div>

						<div>
							<label className="text-sm font-medium text-slate-600 mb-1.5 block">
								Store URL
							</label>
							<input
								type="text"
								defaultValue="https://multimart.com"
								className={inputClass}
							/>
						</div>

						<div>
							<label className="text-sm font-medium text-slate-600 mb-1.5 block">
								Store Description
							</label>
							<textarea
								rows={3}
								defaultValue="Best online store for furniture, mobiles, watches and wireless products."
								className={`${inputClass} resize-none`}
							/>
						</div>

						<div className="grid grid-cols-2 gap-4">
							<div>
								<label className="text-sm font-medium text-slate-600 mb-1.5 block">
									Currency
								</label>
								<select className={inputClass}>
									<option>USD ($)</option>
									<option>EUR (€)</option>
									<option>GBP (£)</option>
								</select>
							</div>

							<div>
								<label className="text-sm font-medium text-slate-600 mb-1.5 block">
									Language
								</label>
								<select className={inputClass}>
									<option>English</option>
									<option>Persian</option>
									<option>Arabic</option>
								</select>
							</div>
						</div>
					</div>

					{/* Shipping */}
					<div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 space-y-5">
						<div className="flex items-center justify-between border-b border-slate-100 pb-4">
							<div>
								<h3 className="font-bold text-[#0a1d37]">Shipping Settings</h3>
								<p className="text-xs text-slate-400 mt-0.5">
									Configure shipping options
								</p>
							</div>
							<i className="ri-truck-line text-2xl text-slate-300" />
						</div>

						<div className="flex items-center justify-between py-2">
							<div>
								<p className="text-sm font-medium text-[#0a1d37]">
									Free Shipping
								</p>
								<p className="text-xs text-slate-400 mt-0.5">
									Enable free shipping for all orders
								</p>
							</div>
							<div className="relative">
								<input
									type="checkbox"
									id="free-shipping"
									defaultChecked
									className="sr-only peer"
								/>
								<label
									htmlFor="free-shipping"
									className="
										w-11 h-6 bg-slate-200 rounded-full cursor-pointer
										peer-checked:bg-[#0a1d37]
										after:content-[''] after:absolute after:top-0.5 after:left-0.5
										after:bg-white after:rounded-full after:w-5 after:h-5
										after:transition-all
										peer-checked:after:translate-x-5
										block
									"
								/>
							</div>
						</div>

						<div>
							<label className="text-sm font-medium text-slate-600 mb-1.5 block">
								Minimum Order for Free Shipping ($)
							</label>
							<input type="number" defaultValue={50} className={inputClass} />
						</div>

						<div>
							<label className="text-sm font-medium text-slate-600 mb-1.5 block">
								Standard Shipping Cost ($)
							</label>
							<input type="number" defaultValue={20} className={inputClass} />
						</div>
					</div>

					{/* Notifications */}
					<div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 space-y-5">
						<div className="flex items-center justify-between border-b border-slate-100 pb-4">
							<div>
								<h3 className="font-bold text-[#0a1d37]">Notifications</h3>
								<p className="text-xs text-slate-400 mt-0.5">
									Choose what you want to be notified about
								</p>
							</div>
							<i className="ri-notification-3-line text-2xl text-slate-300" />
						</div>

						{[
							{
								label: 'New Orders',
								desc: 'Get notified when a new order is placed',
								defaultChecked: true,
							},
							{
								label: 'New Users',
								desc: 'Get notified when a new user registers',
								defaultChecked: true,
							},
							{
								label: 'Low Stock',
								desc: 'Get notified when product stock is low',
								defaultChecked: false,
							},
							{
								label: 'Order Cancelled',
								desc: 'Get notified when an order is cancelled',
								defaultChecked: true,
							},
						].map((item) => (
							<div
								key={item.label}
								className="flex items-center justify-between py-1"
							>
								<div>
									<p className="text-sm font-medium text-[#0a1d37]">
										{item.label}
									</p>
									<p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
								</div>
								<div className="relative">
									<input
										type="checkbox"
										id={item.label}
										defaultChecked={item.defaultChecked}
										className="sr-only peer"
									/>
									<label
										htmlFor={item.label}
										className="
											w-11 h-6 bg-slate-200 rounded-full cursor-pointer
											peer-checked:bg-[#0a1d37]
											after:content-[''] after:absolute after:top-0.5 after:left-0.5
											after:bg-white after:rounded-full after:w-5 after:h-5
											after:transition-all peer-checked:after:translate-x-5
											block
										"
									/>
								</div>
							</div>
						))}
					</div>

					{/* Danger Zone */}
					<div className="bg-white rounded-2xl shadow-sm border border-red-100 p-6 space-y-4">
						<div className="flex items-center justify-between border-b border-red-50 pb-4">
							<div>
								<h3 className="font-bold text-red-600">Danger Zone</h3>
								<p className="text-xs text-slate-400 mt-0.5">
									Irreversible actions — proceed with caution
								</p>
							</div>
							<i className="ri-error-warning-line text-2xl text-red-300" />
						</div>

						<div className="flex items-center justify-between py-2">
							<div>
								<p className="text-sm font-medium text-[#0a1d37]">
									Clear All Orders
								</p>
								<p className="text-xs text-slate-400 mt-0.5">
									Permanently delete all orders from the database
								</p>
							</div>
							<button className="px-4 py-2 rounded-xl border border-red-200 text-red-500 text-sm font-medium hover:bg-red-50 transition cursor-pointer">
								Clear
							</button>
						</div>

						<div className="flex items-center justify-between py-2">
							<div>
								<p className="text-sm font-medium text-[#0a1d37]">
									Reset Store
								</p>
								<p className="text-xs text-slate-400 mt-0.5">
									Reset all settings to their default values
								</p>
							</div>
							<button className="px-4 py-2 rounded-xl border border-red-200 text-red-500 text-sm font-medium hover:bg-red-50 transition cursor-pointer">
								Reset
							</button>
						</div>
					</div>

					{/* Save Button */}
					<div className="flex items-center justify-end gap-3">
						<button className="px-6 py-3 rounded-xl border border-slate-200 text-slate-600 text-sm font-medium hover:bg-slate-50 transition cursor-pointer">
							Cancel
						</button>
						<button className="px-6 py-3 rounded-xl bg-[#0a1d37] text-white text-sm font-semibold hover:opacity-90 transition cursor-pointer">
							Save Changes
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
