import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import AboutUsLayout from '@/src/components/ui/layouts/AboutUsLayout';
import { useI18n } from '@/src/locales';
import Link from 'next/link';
import { HRef } from '@/src/utilities/href';
import ExecutiveManagement from '@/src/components/about-us/ExecutiveManagement';
import withEveryone from '@/src/hooks/auth/withEveryone';
import { wrapper } from '@/src/store';
import { aboutUsApi } from '@/src/store/RTKQuery/about-us/aboutUsApi';

const ExecutiveManagementPage: NextPage = ({
	pageProps,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const t = useI18n();

	
	// Safe data access with fallback
	const data = pageProps.data || null;
	const page = pageProps.page || null;
	const mainNews = pageProps.mainNews || null;
	const latestNews = pageProps.latestNews || null;
	const membershipList = pageProps.membershipList || null;
return (
		<AboutUsLayout
			title={t('pageName', { name: t('executiveManagement') })}
			name={pageProps.data?.mainTitle}
			mainImage={pageProps.data?.mainImage?.url}
			header={pageProps.data?.header}
			footer={pageProps.data?.footer}
			breadcrumb={[
				{ title: <Link href={HRef.home}>{t('home')}</Link> },
				{
					title: t('executiveManagement'),
				},
			]}
		>
			<ExecutiveManagement data={pageProps.data} />
		</AboutUsLayout>
	);
};
export const getServerSideProps: GetServerSideProps = withEveryone(
	wrapper.getServerSideProps((store) => async (context) => {
		const data = await store.dispatch(
			aboutUsApi.endpoints?.getExecutiveManagement.initiate(),
		);
		return {
			props: { data: data.data?.data  || null},
		};
	}),
);
export default ExecutiveManagementPage;
