import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import AuthLayout from '@/src/components/ui/layouts/AuthLayout';
import AuthAlertMessage from '@/src/components/auth/AuthAlertMessage';
import { useI18n } from '@/src/locales';
import { wrapper } from '@/src/store';
import withoutVerifyEmail from '@/src/hooks/auth/withoutVerifyEmail';
import { commonApi, useGetAuthModalsContentQuery } from '@/src/store/RTKQuery/common/commonApi';
import { useResendEmailConfirmationMutation } from '@/src/store/RTKQuery/auth/authApi';
import ActivateAccountForm from '../../components/auth/ActivateAccountForm';

const VerifyEmailPage: NextPage = ({
	pageProps,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const t = useI18n();
	const [resendVerifyEmail, { isSuccess, isLoading }] =
		useResendEmailConfirmationMutation();
	const { data } = useGetAuthModalsContentQuery();
	const cardContent = data?.data.authList.filter(
		(item) => item.type === 'Confirm Email',
	);

	return (
		<AuthLayout data={pageProps.data} width={'max-w-[630px]'}>
			<AuthAlertMessage
				title={
					isSuccess
						? cardContent
							? cardContent[0].successTitle
							: ''
						: cardContent
							? cardContent[0].title
							: ''
				}
				description={cardContent ? cardContent[0].description : ''}
			/>
			<ActivateAccountForm />
		</AuthLayout>
	);
};
export const getServerSideProps: GetServerSideProps = withoutVerifyEmail(
	wrapper.getServerSideProps((store) => async (context) => {
		const data = await store.dispatch(
			commonApi.endpoints?.getPage.initiate(),
		);
		return {
			props: { data: data.data?.data },
		};
	}),
);
export default VerifyEmailPage;
