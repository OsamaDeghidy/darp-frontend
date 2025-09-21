import { GetServerSideProps, NextPage } from 'next';
import { useI18n } from '@/src/locales';
import withEveryone from '@/src/hooks/auth/withEveryone';
import { wrapper } from '@/src/store';

const OperationalPlansPage: NextPage = () => {
	const t = useI18n();
	return (
		/*  <AboutUsLayout
			  title={t('pageName', { name: t('operationalPlans') })}
			  name={t('operationalPlans')}
			  breadcrumb={[
				  { title: <Link href={HRef.home}>{t('home')}</Link> },
				  {
					  title: t('operationalPlans'),
				  },
			  ]}
		  >
			  <OperationalPlans />
		  </AboutUsLayout>*/
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
export default OperationalPlansPage;
