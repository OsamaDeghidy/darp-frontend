import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import ForgetPassword from '@/src/components/auth/ForgetPassword';
import AuthLayout from '@/src/components/ui/layouts/AuthLayout';
import { wrapper } from '@/src/store';
import withoutAuth from '@/src/hooks/auth/withoutAuth';
import { commonApi } from '@/src/store/RTKQuery/common/commonApi';

const ForgetPasswordPage: NextPage = ({
	pageProps,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	return (
		<AuthLayout data={pageProps.data} width={'max-w-[630px]'}>
			<ForgetPassword />
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
export default ForgetPasswordPage;
