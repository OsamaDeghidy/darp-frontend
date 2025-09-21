import { GetServerSideProps, NextPage } from 'next';
import { useI18n } from '@/src/locales';
import withEveryone from '@/src/hooks/auth/withEveryone';
import { wrapper } from '@/src/store';

const TypesOfMembershipAndConditionsOfJoiningPage: NextPage = () => {
	const t = useI18n();
	return (
		/*<ContactUsLayout
			title={t('pageName', {
				name: t('typesOfMembershipAndConditionsOfJoining'),
			})}
			name={t('typesOfMembershipAndConditionsOfJoining')}
			breadcrumb={[
				{ title: <Link href={HRef.home}>{t('home')}</Link> },
				{
					title: t('typesOfMembershipAndConditionsOfJoining'),
				},
			]}
		>
			<TypesOfMembershipAndConditionsOfJoining />
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
export default TypesOfMembershipAndConditionsOfJoiningPage;
