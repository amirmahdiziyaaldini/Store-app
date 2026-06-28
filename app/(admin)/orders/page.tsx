import { ordersMetadata } from '@/lib/metadata';
export const metadata = ordersMetadata;
import {
	ORDERS,
	ORDER_STATUS_STYLES,
	STATUS_LIST,
	getOrderStats,
} from '@/lib/data/adminData';

export default function AdminOrdersPage() {
	const stats = getOrderStats();

	const STATS = [
		{
			label: 'Total Orders',
			value: stats.total,
			icon: 'ri-file-list-3-line',
			color: 'bg-blue-50 text-blue-600',
		},
		{
			label: 'Delivered',
			value: stats.delivered,
			icon: 'ri-checkbox-circle-line',
			color: 'bg-green-50 text-green-600',
		},
		{
			label: 'Processing',
			value: stats.processing,
			icon: 'ri-loader-4-line',
			color: 'bg-orange-50 text-orange-600',
		},
		{
			label: 'Cancelled',
			value: stats.cancelled,
			icon: 'ri-close-circle-line',
			color: 'bg-red-50 text-red-600',
		},
	];

	return (
		<div className="space-y-6">
			{/* Header */}
			<div>
				<h2 className="text-2xl font-bold text-[#0a1d37]">Orders</h2>
				<p className="text-sm text-slate-500 mt-1">
					{ORDERS.length} orders total
				</p>
			</div>

			{/* Stats */}
			<div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
				{STATS.map((stat) => (
					<div
						key={stat.label}
						className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex items-center gap-4"
					>
						<div
							className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${stat.color}`}
						>
							<i className={`${stat.icon} text-xl`} />
						</div>
						<div>
							<p className="text-xl font-bold text-[#0a1d37]">{stat.value}</p>
							<p className="text-xs text-slate-500">{stat.label}</p>
						</div>
					</div>
				))}
			</div>

			{/* Filters */}
			<div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex flex-col sm:flex-row gap-3">
				<div className="relative flex-1">
					<input
						type="text"
						placeholder="Search by order ID or customer..."
						className="w-full border border-slate-200 rounded-xl px-4 py-2.5 pr-10 text-sm outline-none focus:border-[#0a1d37] transition"
					/>
					<i className="ri-search-line absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
				</div>

				<select className="border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-[#0a1d37] bg-white min-w-36">
					<option>All Status</option>
					{STATUS_LIST.map((s) => (
						<option key={s}>{s}</option>
					))}
				</select>

				<input
					type="date"
					className="border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-[#0a1d37] bg-white"
				/>
			</div>

			{/* Table */}
			<div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
				<div className="overflow-x-auto">
					<table className="w-full">
						<thead>
							<tr className="text-xs text-slate-400 uppercase border-b border-slate-100 bg-slate-50">
								<th className="text-left px-6 py-4">Order ID</th>
								<th className="text-left px-6 py-4">Customer</th>
								<th className="text-left px-6 py-4">Product</th>
								<th className="text-left px-6 py-4">Amount</th>
								<th className="text-left px-6 py-4">Date</th>
								<th className="text-left px-6 py-4">Status</th>
								<th className="text-left px-6 py-4">Actions</th>
							</tr>
						</thead>

						<tbody>
							{ORDERS.map((order) => (
								<tr
									key={order.id}
									className="border-b border-slate-50 hover:bg-slate-50 transition"
								>
									<td className="px-6 py-4 text-sm font-bold text-[#0a1d37]">
										{order.id}
									</td>
									<td className="px-6 py-4">
										<p className="text-sm font-semibold text-[#0a1d37]">
											{order.customer}
										</p>
										<p className="text-xs text-slate-400">{order.email}</p>
									</td>
									<td className="px-6 py-4 text-sm text-slate-600 max-w-40 truncate">
										{order.product}
									</td>
									<td className="px-6 py-4 text-sm font-bold text-[#0a1d37]">
										${order.amount}
									</td>
									<td className="px-6 py-4 text-sm text-slate-500">
										{order.date}
									</td>
									<td className="px-6 py-4">
										<span
											className={`text-xs font-semibold px-3 py-1 rounded-full ${ORDER_STATUS_STYLES[order.status]}`}
										>
											{order.status}
										</span>
									</td>
									<td className="px-6 py-4">
										<div className="flex items-center gap-2">
											<button
												className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition cursor-pointer"
												title="View Details"
											>
												<i className="ri-eye-line text-sm text-slate-600" />
											</button>

											<select className="text-xs border border-slate-200 rounded-lg px-2 py-1.5 outline-none focus:border-[#0a1d37] bg-white cursor-pointer">
												<option>Change Status</option>
												{STATUS_LIST.map((s) => (
													<option key={s}>{s}</option>
												))}
											</select>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>

				{/* Footer */}
				<div className="px-6 py-4 border-t border-slate-100 flex items-center justify-between">
					<p className="text-sm text-slate-500">
						Showing <span className="font-semibold">{ORDERS.length}</span>{' '}
						orders
					</p>
					<div className="flex items-center gap-2">
						<button className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition cursor-pointer">
							<i className="ri-arrow-left-s-line text-slate-600" />
						</button>
						<span className="text-sm text-slate-600 px-2">1 / 1</span>
						<button className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition cursor-pointer">
							<i className="ri-arrow-right-s-line text-slate-600" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
