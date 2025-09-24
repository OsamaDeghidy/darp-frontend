import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import AuthLayout from '@/src/components/ui/layouts/AuthLayout';
import AuthAlertMessage from '@/src/components/auth/AuthAlertMessage';
import { useI18n } from '@/src/locales';
import { HRef } from '@/src/utilities/href';
import { wrapper } from '@/src/store';
import withoutVerifyEmail from '@/src/hooks/auth/withoutVerifyEmail';
import { commonApi, useGetAuthModalsContentQuery } from '@/src/store/RTKQuery/common/commonApi';
import { useConfirmEmailMutation } from '@/src/store/RTKQuery/auth/authApi';
import Loader from '@/src/components/ui/Loader';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const VerifyEmailPage: NextPage = ({
	pageProps,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const t = useI18n();
	const searchParams = useSearchParams();
	const code = searchParams.get('code');
	const [confirmEmail, { isSuccess, isLoading }] = useConfirmEmailMutation();

	const { data } = useGetAuthModalsContentQuery();
	const cardContent = data?.data.authList.filter(
		(item) => item.type === 'Confirm Email',
	);

	useEffect(() => {
		if (code) {
			confirmEmail({ token: code });
		}
	}, []);
	return (
		<AuthLayout data={pageProps.data} width={'max-w-[630px]'}>
			{isLoading ? (
				<Loader />
			) : (
				<>
					{isSuccess ? (
						<AuthAlertMessage
							title={
								cardContent ? cardContent[0].successTitle : ''
							}
							description={
								cardContent
									? cardContent[0].successDescription
									: ''
							}
							link={{
								text: t('continue'),
								href: HRef.home,
							}}
						/>
					) : (
						<AuthAlertMessage
							title={
								cardContent ? cardContent[0].failedTitle : ''
							}
							description={
								cardContent
									? cardContent[0].failedDescription
									: ''
							}
							link={{
								text: t('continue'),
								href: HRef.resendVerifyEmail,
							}}
						/>
					)}
				</>
			)}
		</AuthLayout>
	);
};
export const getServerSideProps: GetServerSideProps = withoutVerifyEmail(
	wrapper.getServerSideProps((store) => async (context) => {
		const data = await store.dispatch(
			commonApi.endpoints?.getPage.initiate(),
		);
		return {
			props: { data: data.data?.data  || null},
		};
	}),
);
export default VerifyEmailPage;
