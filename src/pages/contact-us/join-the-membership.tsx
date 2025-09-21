import { GetServerSideProps, NextPage } from 'next';
import { useI18n } from '@/src/locales';
import withEveryone from '@/src/hooks/auth/withEveryone';
import { wrapper } from '@/src/store';

const JoinTheMembershipPage: NextPage = () => {
	const t = useI18n();
	return (
		/*   <ContactUsLayout header={}
			   title={t('pageName', {
				   name: t('joinTheMembership'),
			   })}
			   name={t('joinTheMembership')}
			   breadcrumb={[
				   { title: <Link href={HRef.home}>{t('home')}</Link> },
				   {
					   title: t('joinTheMembership'),
				   },
			   ]}
		   >
			   <JoinTheMembership />
		   </ContactUsLayout>*/
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
export default JoinTheMembershipPage;
