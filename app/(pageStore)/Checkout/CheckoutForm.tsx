'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import {
	checkoutSchema,
	CheckoutFormData,
} from '@/lib/validations/authSchema';

export default function CheckoutForm() {
	const router = useRouter();

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<CheckoutFormData>({
		resolver: yupResolver(checkoutSchema),
		mode: 'onBlur',
	});

	async function onSubmit(data: CheckoutFormData) {
		console.log(data);

		await new Promise((resolve) => setTimeout(resolve, 1000));

		router.push('/OrderSuccessPage');
	}

	const inputClass =
		'w-full h-12 px-4 rounded-lg border border-slate-300 bg-white text-slate-700 placeholder:text-slate-400 transition-all duration-200 focus:border-[#0a1d37] focus:ring-4 focus:ring-[#0a1d37]/10 outline-none';

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col gap-4 bg-white p-5 md:p-7 rounded-xl shadow-sm border border-slate-200"
		>
			<h3 className="text-xl font-semibold text-[#0a1d37] mb-2">
				Billing Information
			</h3>

			{/* Name */}
			<div>
				<input
					{...register('name')}
					type="text"
					placeholder="Enter your name"
					className={inputClass}
				/>

				{errors.name && (
					<p className="text-red-500 text-sm mt-1">
						{errors.name.message}
					</p>
				)}
			</div>

			{/* Email */}
			<div>
				<input
					{...register('email')}
					type="email"
					placeholder="Enter your email"
					className={inputClass}
				/>

				{errors.email && (
					<p className="text-red-500 text-sm mt-1">
						{errors.email.message}
					</p>
				)}
			</div>

			{/* Phone */}
			<div>
				<input
					{...register('phone')}
					type="tel"
					placeholder="Phone number"
					className={inputClass}
				/>

				{errors.phone && (
					<p className="text-red-500 text-sm mt-1">
						{errors.phone.message}
					</p>
				)}
			</div>

			{/* Address */}
			<div>
				<input
					{...register('address')}
					type="text"
					placeholder="Street address"
					className={inputClass}
				/>

				{errors.address && (
					<p className="text-red-500 text-sm mt-1">
						{errors.address.message}
					</p>
				)}
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				{/* City */}
				<div>
					<input
						{...register('city')}
						type="text"
						placeholder="City"
						className={inputClass}
					/>

					{errors.city && (
						<p className="text-red-500 text-sm mt-1">
							{errors.city.message}
						</p>
					)}
				</div>

				{/* Postal Code */}
				<div>
					<input
						{...register('postalCode')}
						type="text"
						placeholder="Postal code"
						className={inputClass}
					/>

					{errors.postalCode && (
						<p className="text-red-500 text-sm mt-1">
							{errors.postalCode.message}
						</p>
					)}
				</div>
			</div>

			{/* Country */}
			<div>
				<input
					{...register('country')}
					type="text"
					placeholder="Country"
					className={inputClass}
				/>

				{errors.country && (
					<p className="text-red-500 text-sm mt-1">
						{errors.country.message}
					</p>
				)}
			</div>

			{/* Submit Button */}
			<button
				type="submit"
				disabled={isSubmitting}
				className="
					mt-6
					flex
					items-center
					justify-center
					gap-2
					w-full
					bg-[#0a1d37]
					text-white
					font-bold
					py-4
					rounded-2xl
					transition-all
					duration-300
					hover:-translate-y-1
					hover:shadow-xl
					disabled:opacity-50
					disabled:cursor-not-allowed
				"
			>
				<span>
					{isSubmitting
						? 'Processing...'
						: 'Place Order'}
				</span>

				{!isSubmitting && (
					<i className="ri-arrow-right-line"></i>
				)}
			</button>
		</form>
	);
}
