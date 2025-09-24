import MainLayout from '@/src/components/ui/layouts/base/MainLayout';
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import { useI18n } from '@/src/locales';
import { wrapper } from '@/src/store';
import Membership from '@/src/components/membership/Membership';
import withEveryone from '@/src/hooks/auth/withEveryone';
import { membershipApi } from '@/src/store/RTKQuery/membership/membershipApi';

const MembershipPage: NextPage = ({
	pageProps,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const t = useI18n();
	
	// Safe data access with fallback
	const data = pageProps.data || null;
	const membershipList = pageProps.membershipList || null;
	
	return (
		<MainLayout
			title={t('pageName', { name: t('membership') })}
			name={data?.mainTitle}
			mainImage={data?.mainImage?.url}
			header={data?.header}
			footer={data?.footer}
			seo={data?.seo}
		>
			{data ? (
				<Membership
					data={data}
					membershipList={membershipList || []}
				/>
			) : (
				<div>Loading...</div>
			)}
		</MainLayout>
	);
};
export const getServerSideProps: GetServerSideProps = withEveryone(
	wrapper.getServerSideProps((store) => async (context) => {
		const data = await store.dispatch(
			membershipApi.endpoints?.getMembershipPage.initiate(),
		);
		const membershipList = await store.dispatch(
			membershipApi.endpoints?.getMemberships.initiate(),
		);

		return {
			props: {
				data: data.data?.data || null,
				membershipList: membershipList.data?.data || null,
			},
		};
	}),
);
export default MembershipPage;
