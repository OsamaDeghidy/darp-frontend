import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import { useI18n } from '@/src/locales';
import Link from 'next/link';
import { HRef } from '@/src/utilities/href';
import TourOperators from '@/src/components/walking-trips/TourOperators';
import WalkingTripsLayout from '@/src/components/ui/layouts/WalkingTripsLayout';
import withEveryone from '@/src/hooks/auth/withEveryone';
import { wrapper } from '@/src/store';
import { trackApi } from '@/src/store/RTKQuery/track/trackApi';

const TourOperatorsPage: NextPage = ({
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
			title={t('pageName', { name: t('tourOperators') })}
			name={t('tourOperators')}
			header={pageProps.data?.data.header}
			footer={pageProps.data?.data.footer}
			breadcrumb={[
				{ title: <Link href={HRef.home}>{t('home')}</Link> },
				{
					title: t('tourOperators'),
				},
			]}
		>
			<TourOperators data={pageProps.data?.data} />
		</WalkingTripsLayout>
	);
};
export const getServerSideProps: GetServerSideProps = withEveryone(
	wrapper.getServerSideProps((store) => async (context) => {
		const data = await store.dispatch(
			trackApi.endpoints?.getTourOperators.initiate(),
		);
		return {
			props: { data: data.data },
		};
	}),
);
export default TourOperatorsPage;
