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
	secret: process.env.NEXTAUTH_SECRET,
	callbacks: {
		async session({ session, token }) {
			session.user.id = token.id as string;
			session.user.oauthToken = token.oauthToken as string;
			session.user.jwtToken = token.jwtToken as string;
			return session;
		},
		async jwt({ token, user, account, trigger }) {
			if (trigger === 'signIn') {
				if (user) {
					token.id = user.id;
				}
				if (account) {
					token.jwtToken = jwt.sign(token, process.env.NEXTAUTH_SECRET || '');
					token.oauthToken = account.access_token;
				}
			}
			return token;
		},
	},
} as NextAuthOptions;
