import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import { useI18n } from '@/src/locales';
import TrackDetails from '@/src/components/tracks/TrackDetails';
import withEveryone from '@/src/hooks/auth/withEveryone';
import { wrapper } from '@/src/store';
import MainLayout from '@/src/components/ui/layouts/base/MainLayout';
import PageHeroSection from '@/src/components/ui/layouts/common/PageHeroSection';
import heroImage from '@/public/images/page-hero-section/tracks.jpeg';
import { commonApi } from '@/src/store/RTKQuery/common/commonApi';
import { trackApi } from '@/src/store/RTKQuery/track/trackApi';

const TracksDetailsPage: NextPage = ({
	pageProps,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const t = useI18n();
	return (
		<MainLayout
			title={t('pageName', { name: t('trackDetails') })}
			header={pageProps.page.header}
			footer={pageProps.page.footer}
			seo={pageProps.page.seo}
		>
			<PageHeroSection pageName={t('trackDetails')} image={heroImage} />
			<TrackDetails data={pageProps.trackById} />
		</MainLayout>
	);
};
export const getServerSideProps: GetServerSideProps = withEveryone(
	wrapper.getServerSideProps((store) => async (context) => {
		// const id = context.params?.id || '';
		const id = Number(context.query?.id || 0);
		const type = Number(context.query?.type || 0);
		const trackById = await store.dispatch(
			trackApi.endpoints.getAllTracksById.initiate({
				params: { Id: id, Type: type },
			}),
		);
		const page = await store.dispatch(
			commonApi.endpoints?.getPage.initiate(),
		);

		return {
			props: {
				page: page.data?.data,
				trackById: trackById.data?.data,
			},
		};
	}),
);
export default TracksDetailsPage;
