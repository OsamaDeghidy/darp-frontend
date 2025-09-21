import MainLayout from '@/src/components/ui/layouts/base/MainLayout';
import { GetServerSideProps, NextPage } from 'next';
import { useI18n } from '@/src/locales';
import { wrapper } from '@/src/store';
import withAuth from '@/src/hooks/auth/withAuth';
import OrderTrack from '@/src/components/store/OrderTrack';

const OrderTrackPage: NextPage = () => {
	const t = useI18n();
	return (
		<MainLayout title={t('pageName', { name: t('orderTrack') })}>
			<OrderTrack />
		</MainLayout>
	);
};
export const getServerSideProps: GetServerSideProps = withAuth(
	wrapper.getServerSideProps((store) => async (context) => {
		return {
			props: {},
		};
	}),
);
export default OrderTrackPage;
