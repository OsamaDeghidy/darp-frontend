import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import AppleProvider from 'next-auth/providers/apple';

import { generateAppleClientSecret } from '@/src/utilities/generateAppleClientSecret';

let appleClientSecret = '';
try {
	appleClientSecret = await generateAppleClientSecret();
} catch (e) {
	console.error('Error generating Apple client secret:', e);
}
export default NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID || '',
			clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
		}),
		FacebookProvider({
			clientId: process.env.FACEBOOK_ID || '',
			clientSecret: process.env.FACEBOOK_SECRET || '',
		}),
		AppleProvider({
			clientId: process.env.APPLE_CLIENT_ID || '',
			clientSecret: appleClientSecret,
			authorization: {
				url: 'https://appleid.apple.com/auth/authorize',
				params: {
					response_type: 'code id_token',

					redirect_uri: 'https://darb.org/api/apple/callback',
				},
			},
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,
	callbacks: {
		async jwt({ token, account, profile }) {
			console.log('account', account);
			console.log('token', token);
			console.log('profile', profile);
			if (account) {
				console.log('🧪 Apple account info:', account);
				console.log('🧪 Apple profile:', profile);
				if (account.provider == 'google') {
					token.accessToken = account.id_token;
				}
				if (account.provider == 'facebook') {
					token.accessToken = account.access_token;
				}
				if (account && profile) {
					if (account.provider === 'apple') {
						token.email = profile.email;
						token.name = profile.name;
					}
					token.id = account.providerAccountId;
				}

				token.provider = account.provider;
			}
			return token;
		},
		async session({ session, token }) {
			(session as any).accessToken = token.accessToken;
			(session as any).user.provider = token.provider;
			(session as any).user.id = token.id as string;
			console.log('session', session);
			return session;
		},
	},
	debug: true,
});
