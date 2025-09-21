import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import { useI18n } from '@/src/locales';
import Link from 'next/link';
import { HRef } from '@/src/utilities/href';
import PreparingForTheTripAndWhatToDo from '@/src/components/walking-trips/PreparingForTheTripAndWhatToDo';
import WalkingTripsLayout from '@/src/components/ui/layouts/WalkingTripsLayout';
import withEveryone from '@/src/hooks/auth/withEveryone';
import { wrapper } from '@/src/store';
import { trackApi } from '@/src/store/RTKQuery/track/trackApi';

const PreparingForTheTripAndWhatToDoPage: NextPage = ({
														  pageProps,
													  }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const t = useI18n();
	return (
		<WalkingTripsLayout
			title={t('pageName', { name: t('preparingForWalkingTrips') })}
			name={t('preparingForWalkingTrips')}
			header={pageProps.data.data.header}
			footer={pageProps.data.data.footer}
			breadcrumb={[
				{ title: <Link href={HRef.home}>{t('home')}</Link> },
				{
					title: t('preparingForWalkingTrips'),
				},
			]}
		>
			<PreparingForTheTripAndWhatToDo data={pageProps.data.data} />
		</WalkingTripsLayout>
	);
};
export const getServerSideProps: GetServerSideProps = withEveryone(
	wrapper.getServerSideProps((store) => async (context) => {
		const data = await store.dispatch(
			trackApi.endpoints?.getPreparingForHikingTrips.initiate(),
		);
		return {
			props: { data: data.data },
		};
	}),
);
export default PreparingForTheTripAndWhatToDoPage;
