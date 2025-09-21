import { GetServerSideProps, NextPage } from 'next';
import { useI18n } from '@/src/locales';
import withEveryone from '@/src/hooks/auth/withEveryone';
import { wrapper } from '@/src/store';

const ReportTrackStatusPage: NextPage = () => {
	const t = useI18n();
	return (
		/*<TracksLayout
			title={t('pageName', { name: t('reportTrackStatus') })}
			name={t('reportTrackStatus')}
			breadcrumb={[
				{ title: <Link href={HRef.home}>{t('home')}</Link> },
				{
					title: t('reportTrackStatus'),
				},
			]}
		>
			<ReportTrackStatus />
		</TracksLayout>*/
		<></>
	);
};
export const getServerSideProps: GetServerSideProps = withEveryone(
	wrapper.getServerSideProps((store) => async (context) => {
		return {
			props: {},
		};
	}),
);
export default ReportTrackStatusPage;
