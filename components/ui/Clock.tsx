'use client';

import Link from 'next/link';
import Image from 'next/image';
import counterImg from '@/public/images/counter-timer-img.png';
import { useEffect, useRef, useState } from 'react';

export default function Clock() {
	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	const intervalRef = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		const destination = new Date('Dec 31, 2026 23:59:59').getTime();

		intervalRef.current = setInterval(() => {
			const now = Date.now();

			const difference = destination - now;

			if (difference <= 0) {
				if (intervalRef.current) {
					clearInterval(intervalRef.current);
				}

				setDays(0);
				setHours(0);
				setMinutes(0);
				setSeconds(0);

				return;
			}

			const remainingDays = Math.floor(difference / (1000 * 60 * 60 * 24));

			const remainingHours = Math.floor(
				(difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
			);

			const remainingMinutes = Math.floor(
				(difference % (1000 * 60 * 60)) / (1000 * 60),
			);

			const remainingSeconds = Math.floor((difference % (1000 * 60)) / 1000);

			setDays(remainingDays);
			setHours(remainingHours);
			setMinutes(remainingMinutes);
			setSeconds(remainingSeconds);
		}, 1000);

		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
			}
		};
	}, []);
	return (
		<section className="bg-[#0a1d37] text-white">
			<div className="mx-auto max-w-7xl px-4  sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 lg:gap-16">
					{/* Content */}
					<div>
						<h3 className="text-lg font-medium text-gray-200">
							Limited Offers
						</h3>

						<h4 className="mt-2 text-2xl font-bold sm:text-3xl lg:text-4xl">
							Quality Armchair
						</h4>

						{/* Counter */}
						<div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6">
							<div className="flex flex-col items-center">
								<span className="text-2xl font-bold sm:text-3xl">{days}</span>
								<span className="text-sm text-gray-300">Days</span>
							</div>

							<span className="text-2xl font-bold">:</span>

							<div className="flex flex-col items-center">
								<span className="text-2xl font-bold sm:text-3xl">{hours}</span>
								<span className="text-sm text-gray-300">Hours</span>
							</div>

							<span className="text-2xl font-bold">:</span>

							<div className="flex flex-col items-center">
								<span className="text-2xl font-bold sm:text-3xl">
									{minutes}
								</span>
								<span className="text-sm text-gray-300">Minutes</span>
							</div>

							<span className="text-2xl font-bold">:</span>

							<div className="flex flex-col items-center">
								<span className="text-2xl font-bold sm:text-3xl">
									{seconds}
								</span>
								<span className="text-sm text-gray-300">Seconds</span>
							</div>
						</div>

						<Link
							href="/shop"
							className="
								mt-8
								inline-flex
								w-fit
								items-center
								justify-center
								rounded-lg
								bg-white
								px-6
								py-3
								font-semibold
								text-[#0a1d37]
								transition-transform
								duration-300
								hover:scale-105
							"
						>
							Visit Store
						</Link>
					</div>

					{/* Image */}
					<div className="flex justify-center md:justify-end">
						<Image
							src={counterImg}
							alt="Counter Timer"
							priority
							className="
								h-auto
								w-full
								max-w-60
								object-contain
								sm:max-w-[320px]
								md:max-w-95
								lg:max-w-112.5
							"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}