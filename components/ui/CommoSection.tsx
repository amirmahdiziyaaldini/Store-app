import Image from 'next/image';
import roominterior from '../../assets/images/room-interior-design.jpg';
import roominterior1 from './22.jpg';

export default function CommonSection({ title }:{title:string}) {
	return (
		<section className="relative overflow-hidden">
			{/* Background Image */}
			<Image
				src={roominterior1}
				alt="Room Interior"
				fill
				priority
				sizes="100vw"
				className="object-cover"
			/>

			{/* Overlay */}
			<div className="absolute inset-0 bg-black/60" />

			{/* Content */}
			<div
				className="
					relative z-10
					flex items-center justify-center
					text-center
					h-50
					sm:h-62.5
					md:h-75
					lg:h-87.5
					xl:h-100
					px-4
				"
			>
				<h1
					className="
						text-white
						font-bold
						text-2xl
						sm:text-3xl
						md:text-4xl
						lg:text-5xl
					"
				>
					{title}
				</h1>
			</div>
		</section>
	);
}
