import { SignJWT } from 'jose';
import { importPKCS8 } from 'jose';

export async function generateAppleClientSecret() {
	const teamId = process.env.APPLE_TEAM_ID;
	const clientId = process.env.APPLE_CLIENT_ID;
	const keyId = process.env.APPLE_KEY_ID;
	const privateKey = process.env.APPLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

	if (!teamId || !clientId || !keyId || !privateKey) {
		throw new Error('Missing Apple environment variables');
	}

	const now = Math.floor(Date.now() / 1000);
	const key = await importPKCS8(privateKey, 'ES256');

	const token = await new SignJWT({
		iss: teamId,
		sub: clientId,
		aud: 'https://appleid.apple.com',
	})
		.setProtectedHeader({ alg: 'ES256', kid: keyId })
		.setIssuedAt(now)
		.setExpirationTime(now + 86400 * 180) // 180 يوم
		.sign(key);

	return token;
}
