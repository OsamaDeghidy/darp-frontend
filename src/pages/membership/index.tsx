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
	return (
		<MainLayout
			title={t('pageName', { name: t('membership') })}
			name={pageProps.data.mainTitle}
			mainImage={pageProps.data.mainImage?.url}
			header={pageProps.data.header}
			footer={pageProps.data.footer}
			seo={pageProps.data.seo}
		>
			<Membership
				data={pageProps.data}
				membershipList={pageProps.membershipList}
			/>
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
				data: data.data?.data,
				membershipList: membershipList.data?.data,
			},
		};
	}),
);
export default MembershipPage;
