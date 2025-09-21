import type { NextApiRequest, NextApiResponse } from 'next';
import { serialize } from 'cookie';
import { CookieEnum } from '@/src/utilities/cookie';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	if (req.method !== 'POST') {
		return res.status(405).json({ error: 'Method Not Allowed' });
	}

	try {
		const { code, id_token } = req.body;
		if (!code || !id_token) {
			return res.status(400).json({ error: 'Missing code or id_token' });
		}

		const baseUrl =
			process.env.BACKEND_BASE_URL ||
			'https://darb-be.v4.mmd-technology.com';

		const response = await fetch(
			`${baseUrl}/api/Authentication/login-with-apple`,
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					authorizationCode: code,
					idToken: id_token,
					isWebApplication: true,
				}),
			},
		);

		const data = await response.json();

		if (!response.ok) {
			return res.status(response.status).json(data);
		}

		if (data?.isSuccess && data?.data?.token) {
			const token = data.data.token;

			res.setHeader(
				'Set-Cookie',
				serialize(CookieEnum.token, token, {
					httpOnly: true,
					secure: process.env.NODE_ENV === 'production',
					sameSite: 'lax',
					path: '/',
					maxAge: 60 * 60 * 24 * 7,
				}),
			);

			const redirectUrl = `${process.env.DOMAIN_BASE_URL ?? '/'}`;

			res.writeHead(302, { Location: redirectUrl });
			return res.end();
		}

		return res.status(200).json(data);
	} catch (error) {
		return res
			.status(500)
			.json({ error: 'Internal Server Error', message: String(error) });
	}
}
