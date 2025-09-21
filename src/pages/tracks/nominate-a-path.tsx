import { GetServerSideProps, NextPage } from 'next';
import { useI18n } from '@/src/locales';
import withEveryone from '@/src/hooks/auth/withEveryone';
import { wrapper } from '@/src/store';

const NominateAPathPage: NextPage = () => {
	const t = useI18n();
	return (
		/* <TracksLayout
			 title={t('pageName', { name: t('nominateAPath') })}
			 name={t('nominateAPath')}
			 breadcrumb={[
				 { title: <Link href={HRef.home}>{t('home')}</Link> },
				 {
					 title: t('nominateAPath'),
				 },
			 ]}
		 >
			 <NominateAPath />
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
export default NominateAPathPage;
