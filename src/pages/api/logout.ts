import type { NextApiRequest, NextApiResponse } from 'next';
import { serialize } from 'cookie';
import { CookieEnum } from '@/src/utilities/cookie';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	res.setHeader(
		'Set-Cookie',
		serialize(CookieEnum.token, '', {
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
			sameSite: 'lax',
			path: '/',
			expires: new Date(0),
		}),
	);

	res.status(200).json({ message: 'Logged out' });
}
