import React, { useEffect, useState } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import GoogleIcon from '@/src/components/ui/icons/GoogleIcon';
import CustomButton from '@/src/components/ui/buttons/CustomButton';
import { useI18n } from '@/src/locales';
import { useLoginWithGoogleMutation } from '@/src/store/RTKQuery/auth/authApi';
import { useRouter } from 'next/router';
import { HRef } from '@/src/utilities/href';
import { CookieEnum, setCookie } from '@/src/utilities/cookie';

interface IProps {}

const LoginWithGoogleButton: React.FC<IProps> = (props) => {
	const {} = props;
	const t = useI18n();
	const { data, status } = useSession();
	const [loginWithGoogle, loginWithGoogleResponse] =
		useLoginWithGoogleMutation();
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		if (status === 'authenticated' && data) {
			if ((data.user as any).provider == 'google') {
				loginWithGoogle({ token: (data as any).accessToken });
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
		if (loginWithGoogleResponse.isSuccess) {
			signOut();
			setCookie(
				CookieEnum.token,
				loginWithGoogleResponse.data.data.token,
			);
			router.push(HRef.home);
		}
	}, [loginWithGoogleResponse.isSuccess]);
	return (
		<CustomButton
			className={'button-outline w-full mb-[20px]'}
			onClick={() => {
				signIn('google').then(() => {});
			}}
			text={t('createAccountByGoogle')}
			icon={<GoogleIcon className={'no-style'} />}
			isLoading={isLoading || loginWithGoogleResponse.isLoading}
			disabled={isLoading || loginWithGoogleResponse.isLoading}
		/>
	);
};
export default LoginWithGoogleButton;
