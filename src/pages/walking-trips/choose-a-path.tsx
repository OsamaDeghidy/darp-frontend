import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import { useI18n } from '@/src/locales';
import Link from 'next/link';
import { HRef } from '@/src/utilities/href';
import ChooseAPath from '@/src/components/walking-trips/ChooseAPath';
import WalkingTripsLayout from '@/src/components/ui/layouts/WalkingTripsLayout';
import withEveryone from '@/src/hooks/auth/withEveryone';
import { wrapper } from '@/src/store';
import { commonApi } from '@/src/store/RTKQuery/common/commonApi';

const ChooseAPathPage: NextPage = ({
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
		<WalkingTripsLayout
			title={t('pageName', { name: t('chooseAPath') })}
			name={t('chooseAPath')}
			header={pageProps.data?.header}
			footer={pageProps.data?.footer}
			breadcrumb={[
				{ title: <Link href={HRef.home}>{t('home')}</Link> },
				{
					title: t('chooseAPath'),
				},
			]}
		>
			<ChooseAPath />
		</WalkingTripsLayout>
	);
};
export const getServerSideProps: GetServerSideProps = withEveryone(
	wrapper.getServerSideProps((store) => async (context) => {
		const data = await store.dispatch(
			commonApi.endpoints?.getPage.initiate(),
		);
		return {
			props: { data: data.data?.data  || null},
		};
	}),
);
export default ChooseAPathPage;
