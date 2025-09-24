import MainLayout from '@/src/components/ui/layouts/base/MainLayout';
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import { useI18n } from '@/src/locales';
import { wrapper } from '@/src/store';
import withAuth from '@/src/hooks/auth/withAuth';
import MembershipCart from '@/src/components/membership/MembershipCart';
import { membershipApi } from '@/src/store/RTKQuery/membership/membershipApi';
import { commonApi } from '@/src/store/RTKQuery/common/commonApi';

const MembershipCartPage: NextPage = ({
	pageProps,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const t = useI18n();
	
	// Safe data access with fallback
	const data = pageProps.data || null;
	const page = pageProps.page || null;
	const mainNews = pageProps.mainNews || null;
	const latestNews = pageProps.latestNews || null;
	const membershipList = pageProps.membershipList || null;
return (
		<MainLayout
			title={t('pageName', { name: t('cart') })}
			header={pageProps.page?.header}
			footer={pageProps.page?.footer}
			seo={pageProps.page?.seo}
		>
			<MembershipCart
				data={pageProps.data}
				membershipList={pageProps.membershipList}
			/>
		</MainLayout>
	);
};
export const getServerSideProps: GetServerSideProps = withAuth(
	wrapper.getServerSideProps((store) => async (context) => {
		const id = context.params?.id || '';

		const data = await store.dispatch(
			membershipApi.endpoints?.getMembershipById.initiate({
				id: Number(id),
			}),
		);
		const membershipList = await store.dispatch(
			membershipApi.endpoints?.getMemberships.initiate(),
		);

		const page = await store.dispatch(
			commonApi.endpoints?.getPage.initiate(),
		);

		return {
			props: {
				data: data.data?.data || null,
				membershipList: membershipList.data?.data || null,
				page: page.data?.data || null,
			},
		};
	}),
);
export default MembershipCartPage;
