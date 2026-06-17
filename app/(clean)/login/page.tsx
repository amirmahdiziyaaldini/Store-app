import { loginMetadata } from '@/lib/metadata';
import LoginClient from './LoginClient';
export const metadata = loginMetadata;

export default function Login() {
	return <LoginClient />;
}
