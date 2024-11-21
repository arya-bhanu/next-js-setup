import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import jwt from 'jsonwebtoken';
export default {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID || '',
			clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
		}),
	],
	session: {
		strategy: 'jwt',
		maxAge: Number(process.env.MAX_AGE_JWT),
	},
	callbacks: {
		async session({ token, session }) {
			if (token) {
				session.user.decodedToken = token;
				const encodedToken = jwt.sign(token, process.env.NEXTAUTH_SECRET || '');
				session.user.token = encodedToken;
			}
			return session;
		},
	},
} as NextAuthOptions;
