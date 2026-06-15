// lib/validations/authSchema.ts
import * as yup from 'yup';


// login_____________
export const loginSchema = yup.object({
	email: yup
		.string()
		.email('Please enter a valid email')
		.required('Email is required'),

	password: yup
		.string()
		.min(6, 'Password must be at least 6 characters')
		.required('Password is required'),
});

//signup____________________
export const signupSchema = yup.object({
	fullName: yup
		.string()
		.min(3, 'Name must be at least 3 characters')
		.required('Full name is required'),

	email: yup
		.string()
		.email('Please enter a valid email')
		.required('Email is required'),

	password: yup
		.string()
		.min(6, 'Password must be at least 6 characters')
		.required('Password is required'),

	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password')], 'Passwords do not match')
		.required('Please confirm your password'),
});


// typs_________________
export type LoginFormData = yup.InferType<typeof loginSchema>;
export type SignupFormData = yup.InferType<typeof signupSchema>;
