import React, { useEffect, useState } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import CustomButton from '@/src/components/ui/buttons/CustomButton';
import AppleIcon from '@/src/components/ui/icons/AppleIcon';
import { useI18n } from '@/src/locales';
import { useLoginWithAppleMutation } from '@/src/store/RTKQuery/auth/authApi';
import { useRouter } from 'next/router';
import { HRef } from '@/src/utilities/href';
import { CookieEnum, setCookie } from '@/src/utilities/cookie';

const LoginWithAppleButton: React.FC = () => {
	const t = useI18n();
	const { data, status } = useSession();
	const [loginWithApple, loginWithAppleResponse] =
		useLoginWithAppleMutation();
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (status === 'authenticated' && data) {
			if ((data.user as any).provider == 'apple') {
				loginWithApple({ token: (data as any).accessToken });
			}
			setIsLoading(false);
		}
		if (status === 'loading') {
			setIsLoading(true);
		}
		if (status === 'unauthenticated') {
			setIsLoading(false);
		}
	}, [status]);

	useEffect(() => {
		if (loginWithAppleResponse.isSuccess) {
			signOut();
			setCookie(CookieEnum.token, loginWithAppleResponse.data.data.token);
			router.push(HRef.home);
		}
	}, [loginWithAppleResponse.isSuccess]);

	return (
		<CustomButton
			className={'button-outline w-full mb-[20px]'}
			onClick={() => {
				signIn('apple').then(() => {});
			}}
			text={t('createAccountByApple')}
			icon={<AppleIcon className={'no-style'} />}
			isLoading={isLoading || loginWithAppleResponse.isLoading}
			disabled={isLoading || loginWithAppleResponse.isLoading}
		/>
	);
};

export default LoginWithAppleButton;
