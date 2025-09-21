import React, { useEffect, useState } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import FacebookIcon from '@/src/components/ui/icons/FacebookIcon';
import CustomButton from '@/src/components/ui/buttons/CustomButton';
import { useI18n } from '@/src/locales';
import { useLoginWithFacebookMutation } from '@/src/store/RTKQuery/auth/authApi';
import { useRouter } from 'next/router';
import { HRef } from '@/src/utilities/href';
import { CookieEnum, setCookie } from '@/src/utilities/cookie';

interface IProps {}

const LoginWithFacebookButton: React.FC<IProps> = (props) => {
	const {} = props;
	const t = useI18n();
	const { data, status, update } = useSession();
	const [loginWithFacebook, loginWithFacebookResponse] =
		useLoginWithFacebookMutation();
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		if (status === 'authenticated' && data) {
			if ((data.user as any).provider == 'facebook') {
				loginWithFacebook({ token: (data as any).accessToken });
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
		if (loginWithFacebookResponse.isSuccess) {
			signOut();
			setCookie(
				CookieEnum.token,
				loginWithFacebookResponse.data.data.token,
			);
			router.push(HRef.home);
		}
	}, [loginWithFacebookResponse.isSuccess]);
	return (
		<CustomButton
			className={'button-outline w-full mb-[20px]'}
			onClick={() => {
				signIn('facebook').then(() => {});
			}}
			text={t('createAccountByFacebook')}
			icon={<FacebookIcon className={'facebook'} />}
			isLoading={isLoading || loginWithFacebookResponse.isLoading}
			disabled={isLoading || loginWithFacebookResponse.isLoading}
		/>
	);
};
export default LoginWithFacebookButton;
