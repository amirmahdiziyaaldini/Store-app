'use client';

import React, { useState } from 'react';

export default function ProductTabs() {
	const [tab, setTab] = useState<'desc' | 'reviews'>('desc');
	return (
		<>
			{/* Tabs */}
			<div className="flex gap-8 border-b border-slate-200 pb-4">
				<button
					onClick={() => setTab('desc')}
					className={`cursor-pointer text-lg font-semibold transition ${
						tab === 'desc' ? 'text-[#0a1d37]' : 'text-slate-500'
					}`}
				>
					Description
				</button>

				<button
					onClick={() => setTab('reviews')}
					className={`cursor-pointer text-lg font-semibold transition ${
						tab === 'reviews' ? 'text-[#0a1d37]' : 'text-slate-500'
					}`}
				>
					Reviews (2)
				</button>
			</div>

			{/* Description */}
			{tab === 'desc' ? (
				<div className="mt-8">
					<p className="text-slate-500 leading-8">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Consequatur, veritatis. Repellat modi asperiores necessitatibus
						numquam similique perspiciatis pariatur blanditiis dolores.
					</p>

					<p className="text-slate-500 leading-8 mt-4">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
						quisquam quas doloremque, architecto molestias impedit.
					</p>
				</div>
			) : (
				<div className="mt-10">
					{/* Reviews */}
					<div className="space-y-8">
						<div>
							<h4 className="font-semibold text-xl text-[#0a1d37]">Jhon Doe</h4>

							<div className="flex items-center gap-2 mt-1">
								<span className="text-orange-400 font-medium">4.8</span>

								<div className="flex text-orange-400">
									<i className="ri-star-fill"></i>
									<i className="ri-star-fill"></i>
									<i className="ri-star-fill"></i>
									<i className="ri-star-fill"></i>
									<i className="ri-star-half-fill"></i>
								</div>
							</div>

							<p className="mt-3 text-slate-500 leading-7">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
							</p>
						</div>

						<div>
							<h4 className="font-semibold text-xl text-[#0a1d37]">Jhon Doe</h4>

							<div className="flex items-center gap-2 mt-1">
								<span className="text-orange-400 font-medium">4.9</span>

								<div className="flex text-orange-400">
									<i className="ri-star-fill"></i>
									<i className="ri-star-fill"></i>
									<i className="ri-star-fill"></i>
									<i className="ri-star-fill"></i>
									<i className="ri-star-fill"></i>
								</div>
							</div>

							<p className="mt-3 text-slate-500 leading-7">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
							</p>
						</div>
					</div>

					{/* Review Form */}
					<div className="mt-14">
						<h3 className="text-2xl font-semibold text-[#0a1d37] mb-6">
							Leave your experience
						</h3>

						<form className="space-y-6">
							<input
								type="text"
								placeholder="Enter name"
								className="
									w-full
									border
									border-slate-300
									rounded-xl
									p-4
									outline-none
									transition
									focus:border-[#0a1d37]
								"
							/>

							<div className="flex flex-wrap gap-6 text-orange-400 font-semibold">
								<button type="button" className="hover:scale-110 transition">
									1 ★
								</button>

								<button type="button" className="hover:scale-110 transition">
									2 ★
								</button>

								<button type="button" className="hover:scale-110 transition">
									3 ★
								</button>

								<button type="button" className="hover:scale-110 transition">
									4 ★
								</button>

								<button type="button" className="hover:scale-110 transition">
									5 ★
								</button>
							</div>

							<textarea
								rows={6}
								placeholder="Review Message..."
								className="
									w-full
									border
									border-slate-300
									rounded-xl
									p-4
									outline-none
									resize-none
									transition
									focus:border-[#0a1d37]
								"
							/>

							<button
								type="submit"
								className="
									bg-[#0a1d37]
									text-white
									px-8
									py-3
									rounded-lg
									font-medium
									hover:opacity-90
									transition
									cursor-pointer
								"
							>
								Submit Review
							</button>
						</form>
					</div>
				</div>
			)}
		</>
	);
}
