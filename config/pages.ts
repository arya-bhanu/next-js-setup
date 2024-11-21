import { PagesOptions } from 'next-auth';

export const pages = {
	signIn: '/auth/signin',
	error: '/',
} as Partial<PagesOptions>;
