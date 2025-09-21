import Auth from '@/src/components/auth/Auth';

import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import withoutAuth from '@/src/hooks/auth/withoutAuth';
import { wrapper } from '@/src/store';
import { commonApi } from '@/src/store/RTKQuery/common/commonApi';

const AuthPage: NextPage = ({
	pageProps,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	return <Auth data={pageProps.data} tab={'login'} />;
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
export default AuthPage;
