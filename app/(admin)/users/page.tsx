import { usersMetadata } from '@/lib/metadata';
export const metadata = usersMetadata;
import {
	USERS,
	USER_STATUS_STYLES,
	USER_ROLE_STYLES,
	getUserStats,
	getInitials,
} from '@/lib/data/adminData';

export default function AdminUsersPage() {
	const stats = getUserStats();

	const STATS = [
		{
			label: 'Total Users',
			value: stats.total,
			icon: 'ri-group-line',
			color: 'bg-blue-50 text-blue-600',
		},
		{
			label: 'Active',
			value: stats.active,
			icon: 'ri-user-follow-line',
			color: 'bg-green-50 text-green-600',
		},
		{
			label: 'Admins',
			value: stats.admins,
			icon: 'ri-shield-user-line',
			color: 'bg-purple-50 text-purple-600',
		},
		{
			label: 'Banned',
			value: stats.banned,
			icon: 'ri-user-forbid-line',
			color: 'bg-red-50 text-red-600',
		},
	];

	return (
		<div className="space-y-6">
			{/* Header */}
			<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
				<div>
					<h2 className="text-2xl font-bold text-[#0a1d37]">Users</h2>
					<p className="text-sm text-slate-500 mt-1">
						{USERS.length} registered users
					</p>
				</div>

				<button className="inline-flex items-center gap-2 bg-[#0a1d37] text-white px-5 py-2.5 rounded-xl font-medium text-sm hover:opacity-90 transition cursor-pointer">
					<i className="ri-user-add-line text-lg" />
					Add User
				</button>
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
						placeholder="Search by name or email..."
						className="w-full border border-slate-200 rounded-xl px-4 py-2.5 pr-10 text-sm outline-none focus:border-[#0a1d37] transition"
					/>
					<i className="ri-search-line absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
				</div>

				<select className="border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-[#0a1d37] bg-white min-w-32">
					<option>All Roles</option>
					<option>Admin</option>
					<option>Customer</option>
				</select>

				<select className="border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-[#0a1d37] bg-white min-w-36">
					<option>All Status</option>
					<option>Active</option>
					<option>Inactive</option>
					<option>Banned</option>
				</select>
			</div>

			{/* Table */}
			<div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
				<div className="overflow-x-auto">
					<table className="w-full">
						<thead>
							<tr className="text-xs text-slate-400 uppercase border-b border-slate-100 bg-slate-50">
								<th className="text-left px-6 py-4">User</th>
								<th className="text-left px-6 py-4">Role</th>
								<th className="text-left px-6 py-4">Orders</th>
								<th className="text-left px-6 py-4">Total Spent</th>
								<th className="text-left px-6 py-4">Joined</th>
								<th className="text-left px-6 py-4">Status</th>
								<th className="text-left px-6 py-4">Actions</th>
							</tr>
						</thead>

						<tbody>
							{USERS.map((user) => (
								<tr
									key={user.id}
									className="border-b border-slate-50 hover:bg-slate-50 transition"
								>
									<td className="px-6 py-4">
										<div className="flex items-center gap-3">
											<div className="w-10 h-10 rounded-full bg-[#0a1d37] text-white flex items-center justify-center text-sm font-bold shrink-0">
												{getInitials(user.name)}
											</div>
											<div>
												<p className="text-sm font-semibold text-[#0a1d37]">
													{user.name}
												</p>
												<p className="text-xs text-slate-400">{user.email}</p>
											</div>
										</div>
									</td>

									<td className="px-6 py-4">
										<span
											className={`text-xs font-semibold px-3 py-1 rounded-full ${USER_ROLE_STYLES[user.role]}`}
										>
											{user.role}
										</span>
									</td>

									<td className="px-6 py-4 text-sm font-semibold text-[#0a1d37]">
										{user.orders}
									</td>

									<td className="px-6 py-4 text-sm font-bold text-[#0a1d37]">
										${user.spent.toLocaleString()}
									</td>

									<td className="px-6 py-4 text-sm text-slate-500">
										{user.joined}
									</td>

									<td className="px-6 py-4">
										<span
											className={`text-xs font-semibold px-3 py-1 rounded-full ${USER_STATUS_STYLES[user.status]}`}
										>
											{user.status}
										</span>
									</td>

									<td className="px-6 py-4">
										<div className="flex items-center gap-2">
											<button
												className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center hover:bg-blue-100 transition cursor-pointer"
												title="Edit"
											>
												<i className="ri-edit-line text-sm text-blue-600" />
											</button>

											{user.status === 'Banned' ? (
												<button
													className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center hover:bg-green-100 transition cursor-pointer"
													title="Unban"
												>
													<i className="ri-user-follow-line text-sm text-green-600" />
												</button>
											) : (
												<button
													className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center hover:bg-red-100 transition cursor-pointer"
													title="Ban"
												>
													<i className="ri-user-forbid-line text-sm text-red-500" />
												</button>
											)}
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
						Showing <span className="font-semibold">{USERS.length}</span> users
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
