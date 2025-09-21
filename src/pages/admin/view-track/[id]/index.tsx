import {
	GetServerSideProps,
	InferGetServerSidePropsType,
	NextPage,
} from 'next';
import { useI18n } from '@/src/locales';
import TrackDetails from '@/src/components/tracks/TrackDetails';
import withEveryone from '@/src/hooks/auth/withEveryone';
import { wrapper } from '@/src/store';
import MainLayout from '@/src/components/ui/layouts/base/MainLayout';
import PageHeroSection from '@/src/components/ui/layouts/common/PageHeroSection';
import heroImage from '@/public/images/page-hero-section/tracks.jpeg';
import { commonApi } from '@/src/store/RTKQuery/common/commonApi';
import { trackApi } from '@/src/store/RTKQuery/track/trackApi';
import { TrackTypeEnum } from '@/src/enums/track-type-enum';

const TracksDetailsPage: NextPage = ({
	pageProps,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const t = useI18n();
	return <TrackDetails data={pageProps.trackById} />;
};
export const getServerSideProps: GetServerSideProps = withEveryone(
	wrapper.getServerSideProps((store) => async (context) => {
		const id = Number(context.query?.id || 0);
		const trackById = await store.dispatch(
			trackApi.endpoints.getRecordedTrackByIdAdminView.initiate({
				id,
			}),
		);
		console.log('trackById', trackById);

		return {
			props: {
				trackById: trackById.data?.data,
			},
		};
	}),
);
export default TracksDetailsPage;
