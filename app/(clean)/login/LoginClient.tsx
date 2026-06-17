'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema, LoginFormData } from '@/lib/validations/authSchema';
import logo from '@/public/images/eco-logo.png';
import { loginMetadata } from '@/lib/metadata';
export const metadata = loginMetadata;

export default function LoginClient() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginFormData>({
        resolver: yupResolver(loginSchema),
    });

    async function onSubmit(data: LoginFormData) {
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
                <div className="flex justify-center mb-4">
                    <Image src={logo} alt="Multimart logo" width={42} height={42} />
                </div>

                {/* Header */}
                <div className="flex flex-col items-center mb-6">
                    <div className="h-14 w-14 rounded-full bg-[#0a1d37] text-white flex items-center justify-center shadow-md mb-3">
                        <i className="ri-user-line text-2xl" />
                    </div>
                    <h1 className="text-2xl font-bold text-[#0a1d37]">Welcome Back</h1>
                    <p className="text-sm text-slate-500 mt-1 text-center">
                        Sign in to your account
                    </p>
                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-4"
                    noValidate
                >
                    {/* Email */}
                    <div>
                        <input
                            {...register('email')}
                            type="email"
                            placeholder="Email Address"
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
                                Signing in...
                            </>
                        ) : (
                            'Sign In'
                        )}
                    </button>
                </form>

                {/* Footer */}
                <p className="text-center text-sm text-slate-500 mt-5">
                    Don&apos;t have an account?{' '}
                    <Link
                        href="/signup"
                        className="font-semibold text-[#0a1d37] hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
}
