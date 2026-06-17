'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signupSchema, SignupFormData } from '@/lib/validations/authSchema';
import logo from '@/public/images/eco-logo.png';


export default function SignupClient(){ 
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<SignupFormData>({
		resolver: yupResolver(signupSchema),
	});

	async function onSubmit(data: SignupFormData) {
		console.log(data);
		await new Promise((resolve) => setTimeout(resolve, 1000));
	}

	const inputClass = (hasError: boolean) =>
		`w-full h-11 border rounded-xl px-4 outline-none transition duration-200
		${
			hasError
				? 'border-red-400 focus:border-red-400 bg-red-50'
				: 'border-slate-300 focus:border-[#0a1d37]'
		}`;

	return (
		<div className="min-h-dvh bg-slate-50 flex items-center justify-center px-4 py-6">
			<div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-5 sm:p-6">
				{/* Logo */}
				<div className="flex justify-center mb-3">
					<Image src={logo} alt="Multimart logo" width={42} height={42} />
				</div>

				{/* Header */}
				<div className="flex flex-col items-center mb-5">
					<div className="h-12 w-12 rounded-full bg-[#0a1d37] text-white flex items-center justify-center shadow-md mb-2">
						<i className="ri-user-add-line text-2xl" />
					</div>
					<h1 className="text-2xl font-bold text-[#0a1d37]">Create Account</h1>
					<p className="text-sm text-slate-500 mt-1">Join Multimart today</p>
				</div>

				{/* Form */}
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="space-y-3"
					noValidate
				>
					{/* Full Name */}
					<div>
						<input
							{...register('fullName')}
							type="text"
							placeholder="Full Name"
							className={inputClass(!!errors.fullName)}
						/>
						{errors.fullName && (
							<p className="mt-1 text-xs text-red-500 flex items-center gap-1">
								<i className="ri-error-warning-line" />
								{errors.fullName.message}
							</p>
						)}
					</div>

					{/* Email */}
					<div>
						<input
							{...register('email')}
							type="email"
							placeholder="Email"
							className={inputClass(!!errors.email)}
						/>
						{errors.email && (
							<p className="mt-1 text-xs text-red-500 flex items-center gap-1">
								<i className="ri-error-warning-line" />
								{errors.email.message}
							</p>
						)}
					</div>

					{/* Password */}
					<div>
						<input
							{...register('password')}
							type="password"
							placeholder="Password"
							className={inputClass(!!errors.password)}
						/>
						{errors.password && (
							<p className="mt-1 text-xs text-red-500 flex items-center gap-1">
								<i className="ri-error-warning-line" />
								{errors.password.message}
							</p>
						)}
					</div>

					{/* Confirm Password */}
					<div>
						<input
							{...register('confirmPassword')}
							type="password"
							placeholder="Confirm Password"
							className={inputClass(!!errors.confirmPassword)}
						/>
						{errors.confirmPassword && (
							<p className="mt-1 text-xs text-red-500 flex items-center gap-1">
								<i className="ri-error-warning-line" />
								{errors.confirmPassword.message}
							</p>
						)}
					</div>

					{/* Submit */}
					<button
						type="submit"
						disabled={isSubmitting}
						className="
							w-full h-11
							bg-[#0a1d37] text-white
							font-semibold rounded-xl
							transition-all duration-300
							hover:opacity-90
							disabled:opacity-60
							disabled:cursor-not-allowed
							cursor-pointer
							flex items-center justify-center gap-2
						"
					>
						{isSubmitting ? (
							<>
								<i className="ri-loader-4-line animate-spin" />
								Creating account...
							</>
						) : (
							'Create Account'
						)}
					</button>
				</form>

				{/* Footer */}
				<p className="text-center text-sm text-slate-500 mt-4">
					Already have an account?{' '}
					<Link
						href="/login"
						className="font-semibold text-[#0a1d37] hover:underline"
					>
						Sign In
					</Link>
				</p>
			</div>
		</div>
	);
}