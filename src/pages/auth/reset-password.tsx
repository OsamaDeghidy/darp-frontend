import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import AuthLayout from '@/src/components/ui/layouts/AuthLayout';
import ResetPassword from '@/src/components/auth/ResetPassword';
import withoutAuth from '@/src/hooks/auth/withoutAuth';
import { wrapper } from '@/src/store';
import { commonApi } from '@/src/store/RTKQuery/common/commonApi';

const ResetPasswordPage: NextPage = ({
	pageProps,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	return (
		<AuthLayout data={pageProps.data} width={'max-w-[630px]'}>
			<ResetPassword />
		</AuthLayout>
	);
};
export const getServerSideProps: GetServerSideProps = withoutAuth(
	wrapper.getServerSideProps((store) => async (context) => {
		const data = await store.dispatch(
			commonApi.endpoints?.getPage.initiate(),
		);
		return {
			props: { data: data.data?.data },
		};
	}),
);
export default ResetPasswordPage;
