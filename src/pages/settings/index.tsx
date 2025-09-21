import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import { useI18n } from '@/src/locales';
import MainLayout from '@/src/components/ui/layouts/base/MainLayout';
import { wrapper } from '@/src/store';
import { commonApi } from '@/src/store/RTKQuery/common/commonApi';
import Settingspage from '@/src/components/settings/Settingspage';
import withAuth from '@/src/hooks/auth/withAuth';

const SettingsPage: NextPage = ({
	pageProps,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const t = useI18n();
	
	return (
		<MainLayout
			title={t('pageName', { name: t('settings') })}
			header={pageProps.data.header}
			footer={pageProps.data.footer}
			seo={pageProps.data.seo}
		>
            <Settingspage/>
		</MainLayout>
	);
};
export const getServerSideProps: GetServerSideProps = withAuth(
	wrapper.getServerSideProps((store) => async (context) => {
		const data = await store.dispatch(
			commonApi.endpoints?.getPage.initiate(),
		);
		return {
			props: { data: data.data?.data },
		};
	}),
);
export default SettingsPage;

