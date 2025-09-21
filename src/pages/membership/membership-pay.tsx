import MainLayout from '@/src/components/ui/layouts/base/MainLayout';
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import { useI18n } from '@/src/locales';
import { wrapper } from '@/src/store';
import withAuth from '@/src/hooks/auth/withAuth';
import MembershipPay from '@/src/components/membership/MembershipPay';
import { commonApi } from '@/src/store/RTKQuery/common/commonApi';

const MembershipPayPage: NextPage = ({
	pageProps,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const t = useI18n();
	return (
		<MainLayout
			title={t('pageName', { name: t('payment') })}
			header={pageProps.page.header}
			footer={pageProps.page.footer}
			seo={pageProps.page.seo}
		>
			<MembershipPay />
		</MainLayout>
	);
};
export const getServerSideProps: GetServerSideProps = withAuth(
	wrapper.getServerSideProps((store) => async (context) => {
		const page = await store.dispatch(
			commonApi.endpoints?.getPage.initiate(),
		);

		return {
			props: {
				page: page.data?.data,
			},
		};
	}),
);
export default MembershipPayPage;
