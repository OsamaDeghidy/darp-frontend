import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import { useI18n } from '@/src/locales';
import Link from 'next/link';
import { HRef } from '@/src/utilities/href';
import TracksLayout from '@/src/components/ui/layouts/TracksLayout';
import TechnicalSpecificationsForDirectionalSigns
	from '@/src/components/tracks/TechnicalSpecificationsForDirectionalSigns';
import withEveryone from '@/src/hooks/auth/withEveryone';
import { wrapper } from '@/src/store';
import { commonApi } from '@/src/store/RTKQuery/common/commonApi';
import { trackApi } from '@/src/store/RTKQuery/track/trackApi';

const TechnicalSpecificationsForDirectionalSignsPage: NextPage = ({
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
		<TracksLayout
			title={t('pageName', {
				name: t('technicalSpecificationsForDirectionalSigns'),
			})}
			name={t('technicalSpecificationsForDirectionalSigns')}
			header={pageProps.data?.header}
			footer={pageProps.data?.footer}
			breadcrumb={[
				{ title: <Link href={HRef.home}>{t('home')}</Link> },
				{
					title: t('technicalSpecificationsForDirectionalSigns'),
				},
			]}
		>
			<TechnicalSpecificationsForDirectionalSigns data={pageProps.technicalSpecifications?.data} />
		</TracksLayout>
	);
};
export const getServerSideProps: GetServerSideProps = withEveryone(
	wrapper.getServerSideProps((store) => async (context) => {
		const data = await store.dispatch(
			commonApi.endpoints?.getPage.initiate(),
		);
		const technicalSpecifications = await store.dispatch(
			trackApi.endpoints?.getImportanceOfTracks.initiate(),
		);
		return {
			props: {
				data: data.data?.data || null,
				technicalSpecifications: technicalSpecifications.data?.data || null,
			},
		};
	}),
);
export default TechnicalSpecificationsForDirectionalSignsPage;
