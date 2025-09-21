/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		BASE_URL: process.env.BASE_URL,
		GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
		GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
		FACEBOOK_ID: process.env.FACEBOOK_ID,
		FACEBOOK_SECRET: process.env.FACEBOOK_SECRET,
		GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
		GOOGLE_MAPS_MAP_ID: process.env.GOOGLE_MAPS_MAP_ID,
		APPLE_PRIVATE_KEY: process.env.APPLE_PRIVATE_KEY,
		APPLE_TEAM_ID: process.env.APPLE_TEAM_ID,
		APPLE_CLIENT_ID: process.env.APPLE_CLIENT_ID,
		APPLE_KEY_ID: process.env.APPLE_KEY_ID,
		AUTH_APPLE_SECRET: process.env.AUTH_APPLE_SECRET,
		APPLE_REDIRECT_URI: process.env.APPLE_REDIRECT_URI,
		NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
		DOMAIN_BASE_URL: process.env.DOMAIN_BASE_URL,
		DONATION_DOMAIN_BASE_URL: process.env.DONATION_DOMAIN_BASE_URL,
	},
	images: {
		domains: [
			'darb-be.v4.mmd-technology.com',
			'icons.veryicon.com',
			'mmd-files-dev.s3.eu-west-1.amazonaws.com',
			'localhost:44380',
			'mmd-files-dev.s3.amazonaws.com',
			'localhost:44380',
			'localhost',
		],
	},
	i18n: {
		locales: ['ar', 'en'],
		defaultLocale: 'ar',
		localeDetection: false,
	},
	async headers() {
		return [
			{
				source: '/',
				headers: [
					{
						key: 'Feature-Policy',
						value: "payment 'self' https://www.tap.company/ https://darb-fe.v4.mmd-technology.com/", // السماح بالدفع من الموقع الرئيسي وموقع آخر
					},
				],
			},
		];
	},
};

module.exports = nextConfig;
