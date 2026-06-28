import { dashboardMetadata } from '@/lib/metadata';
export const metadata = dashboardMetadata;
import products from '@/lib/data/products';
import {
	ORDERS,
	USERS,
	ORDER_STATUS_STYLES,
	CATEGORY_STYLES,
} from '@/lib/data/adminData';

const totalProducts = products.length;
const totalRevenue = products.reduce((sum, p) => sum + p.price, 0);
const categories = [...new Set(products.map((p) => p.category))].length;

const STATS = [
	{
		label: 'Total Products',
		value: totalProducts,
		icon: 'ri-box-3-line',
		color: 'bg-blue-50 text-blue-600',
		change: '+12%',
		changeType: 'up',
	},
	{
		label: 'Total Revenue',
		value: `$${totalRevenue.toLocaleString()}`,
		icon: 'ri-money-dollar-circle-line',
		color: 'bg-green-50 text-green-600',
		change: '+8%',
		changeType: 'up',
	},
	{
		label: 'Total Orders',
		value: ORDERS.length,
		icon: 'ri-file-list-3-line',
		color: 'bg-orange-50 text-orange-600',
		change: '+23%',
		changeType: 'up',
	},
	{
		label: 'Total Users',
		value: USERS.length,
		icon: 'ri-group-line',
		color: 'bg-purple-50 text-purple-600',
		change: '+5%',
		changeType: 'up',
	},
	{
		label: 'Categories',
		value: categories,
		icon: 'ri-apps-2-line',
		color: 'bg-pink-50 text-pink-600',
		change: '0%',
		changeType: 'neutral',
	},
];

const TOP_PRODUCTS = products.slice(0, 5);
const RECENT_ORDERS = ORDERS.slice(0, 5);

export default function DashboardPage() {
	return (
		<div className="space-y-6">
			{/* Stats Grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-5">
				{STATS.map((stat) => (
					<div
						key={stat.label}
						className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100"
					>
						<div className="flex items-center justify-between mb-4">
							<div
								className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.color}`}
							>
								<i className={`${stat.icon} text-2xl`} />
							</div>
							<span
								className={`text-xs font-semibold px-2 py-1 rounded-full ${
									stat.changeType === 'up'
										? 'bg-green-50 text-green-600'
										: 'bg-slate-100 text-slate-500'
								}`}
							>
								{stat.changeType === 'up' ? '↑' : ''} {stat.change}
							</span>
						</div>
						<p className="text-2xl font-bold text-[#0a1d37]">{stat.value}</p>
						<p className="text-sm text-slate-500 mt-1">{stat.label}</p>
					</div>
				))}
			</div>

			<div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-6">
				{/* Recent Orders */}
				<div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
					<div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
						<h3 className="font-bold text-[#0a1d37]">Recent Orders</h3>
						<a
							href="/admin/orders"
							className="text-sm text-blue-500 hover:underline"
						>
							View all
						</a>
					</div>

					<div className="overflow-x-auto">
						<table className="w-full">
							<thead>
								<tr className="text-xs text-slate-400 uppercase border-b border-slate-100">
									<th className="text-left px-6 py-3">Order</th>
									<th className="text-left px-6 py-3">Customer</th>
									<th className="text-left px-6 py-3">Product</th>
									<th className="text-left px-6 py-3">Amount</th>
									<th className="text-left px-6 py-3">Status</th>
								</tr>
							</thead>
							<tbody>
								{RECENT_ORDERS.map((order) => (
									<tr
										key={order.id}
										className="border-b border-slate-50 hover:bg-slate-50 transition"
									>
										<td className="px-6 py-4 text-sm font-semibold text-[#0a1d37]">
											{order.id}
										</td>
										<td className="px-6 py-4 text-sm text-slate-600">
											{order.customer}
										</td>
										<td className="px-6 py-4 text-sm text-slate-600 max-w-40 truncate">
											{order.product}
										</td>
										<td className="px-6 py-4 text-sm font-semibold text-[#0a1d37]">
											${order.amount}
										</td>
										<td className="px-6 py-4">
											<span
												className={`text-xs font-semibold px-3 py-1 rounded-full ${ORDER_STATUS_STYLES[order.status]}`}
											>
												{order.status}
											</span>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>

				{/* Top Products */}
				<div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
					<div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
						<h3 className="font-bold text-[#0a1d37]">Top Products</h3>
						<a
							href="/admin/products"
							className="text-sm text-blue-500 hover:underline"
						>
							View all
						</a>
					</div>

					<div className="divide-y divide-slate-50">
						{TOP_PRODUCTS.map((product, i) => (
							<div
								key={product.id}
								className="flex items-center gap-4 px-6 py-4"
							>
								<span className="text-sm font-bold text-slate-300 w-5">
									{i + 1}
								</span>
								<div className="flex-1 min-w-0">
									<p className="text-sm font-semibold text-[#0a1d37] truncate">
										{product.productName}
									</p>
									<span
										className={`text-xs font-semibold px-2 py-0.5 rounded-full capitalize ${CATEGORY_STYLES[product.category]}`}
									>
										{product.category}
									</span>
								</div>
								<div className="text-right shrink-0">
									<p className="text-sm font-bold text-[#0a1d37]">
										${product.price}
									</p>
									<div className="flex items-center gap-1 justify-end">
										<i className="ri-star-fill text-orange-400 text-xs" />
										<span className="text-xs text-slate-400">
											{product.avgRating}
										</span>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Category Breakdown */}
			<div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
				<h3 className="font-bold text-[#0a1d37] mb-5">Products by Category</h3>
				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
					{['sofa', 'chair', 'mobile', 'watch', 'wireless'].map((cat) => {
						const count = products.filter((p) => p.category === cat).length;
						const percentage = Math.round((count / totalProducts) * 100);
						return (
							<div key={cat} className="text-center">
								<div className="relative w-16 h-16 mx-auto mb-3">
									<svg viewBox="0 0 36 36" className="w-16 h-16 -rotate-90">
										<circle
											cx="18"
											cy="18"
											r="15.9"
											fill="none"
											stroke="#f1f5f9"
											strokeWidth="3"
										/>
										<circle
											cx="18"
											cy="18"
											r="15.9"
											fill="none"
											stroke="#0a1d37"
											strokeWidth="3"
											strokeDasharray={`${percentage} ${100 - percentage}`}
											strokeLinecap="round"
										/>
									</svg>
									<span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-[#0a1d37]">
										{percentage}%
									</span>
								</div>
								<p className="text-sm font-semibold text-[#0a1d37] capitalize">
									{cat}
								</p>
								<p className="text-xs text-slate-400">{count} items</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
