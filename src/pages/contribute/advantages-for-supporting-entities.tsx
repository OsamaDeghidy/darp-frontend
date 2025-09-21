import { GetServerSideProps, NextPage } from 'next';
import { useI18n } from '@/src/locales';
import withEveryone from '@/src/hooks/auth/withEveryone';
import { wrapper } from '@/src/store';

const AdvantagesForSupportingEntitiesPage: NextPage = () => {
	const t = useI18n();
	return (
		/* <ContributeLayout
			 
			 title={t('pageName', {
				 name: t('advantagesForSupportingEntities'),
			 })}
			 name={t('advantagesForSupportingEntities')}
			 breadcrumb={[
				 { title: <Link href={HRef.home}>{t('home')}</Link> },
				 {
					 title: t('advantagesForSupportingEntities'),
				 },
			 ]}
		 >
			 <AdvantagesForSupportingEntities />
		 </ContributeLayout>*/
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
export default AdvantagesForSupportingEntitiesPage;
