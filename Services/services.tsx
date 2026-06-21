'use client';
import serviceData from '../lib/data/serviceData'
export default function Services() {
	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
				{serviceData.map((item) => {
					const Icon = item.icon;
					return (
						<div
							key={item.id}
							className="flex items-start gap-2 p-5 rounded-md shadow-lg cursor-pointer transition-transform hover:scale-110 duration-400"
							style={{ background: item.bg }}
						>
							<div className="shrink-0 w-12 h-12 rounded-full bg-[#1a2340] flex items-center justify-center">
								<Icon fontSize="large" className="text-white" />
							</div>

							<div>
								<h1 className="font-bold text-base sm:text-lg ">
									{item.title}
								</h1>

								<p className="text-sm text-gray-600">{item.subtitle}</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
