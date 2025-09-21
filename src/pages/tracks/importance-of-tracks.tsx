import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import SaudiTrackAccreditationStandards from '@/src/components/tracks/SaudiTrackAccreditationStandards';
import { useI18n } from '@/src/locales';
import TracksLayout from '@/src/components/ui/layouts/TracksLayout';
import Link from 'next/link';
import { HRef } from '@/src/utilities/href';
import TechnicalSpecificationsForDirectionalSigns
	from '@/src/components/tracks/TechnicalSpecificationsForDirectionalSigns';
import withEveryone from '@/src/hooks/auth/withEveryone';
import { wrapper } from '@/src/store';
import { trackApi } from '@/src/store/RTKQuery/track/trackApi';

const ImportanceOfTracks: NextPage = ({
	pageProps,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const t = useI18n();
	return (
		<TracksLayout
			mainImage={pageProps.data.data.mainImage?.url}
			header={pageProps.data.data.header}
			footer={pageProps.data.data.footer}
			title={t('pageName', {
				name: t('importanceOfTracks'),
			})}
			name={t('tracksStandards')}
			breadcrumb={[
				{ title: <Link href={HRef.home}>{t('home')}</Link> },
				{
					title: t('tracks'),
				},
			]}
		>
			<SaudiTrackAccreditationStandards data={pageProps.data.data} />
			<TechnicalSpecificationsForDirectionalSigns
				data={pageProps.data.data}
			/>
		</TracksLayout>
	);
};
export const getServerSideProps: GetServerSideProps = withEveryone(
	wrapper.getServerSideProps((store) => async (context) => {
		const data = await store.dispatch(
			trackApi.endpoints?.getImportanceOfTracks.initiate(),
		);
		return {
			props: { data: data.data },
		};
	}),
);

export default ImportanceOfTracks;
