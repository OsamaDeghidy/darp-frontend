import { GetServerSideProps, NextPage } from 'next';
import { useI18n } from '@/src/locales';
import TrackOrder from '@/src/components/store/TrackOrder';
import withEveryone from '@/src/hooks/auth/withEveryone';
import { wrapper } from '@/src/store';
import MainLayout from '@/src/components/ui/layouts/base/MainLayout';

const TracksDetailsPage: NextPage = () => {
	const t = useI18n();

	return (
		<MainLayout  title={t('pageName', { name: t('trackOrder') })}>
			<TrackOrder />
		</MainLayout>
	);
};
export const getServerSideProps: GetServerSideProps = withEveryone(
	wrapper.getServerSideProps((store) => async (context) => {
		return {
			props: {},
		};
	}),
);
export default TracksDetailsPage;
