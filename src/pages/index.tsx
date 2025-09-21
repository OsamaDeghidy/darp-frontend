import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import Home from '@/src/components/home/Home';
import { useI18n } from '@/src/locales';
import withEveryone from '@/src/hooks/auth/withEveryone';
import MainLayout from '@/src/components/ui/layouts/base/MainLayout';
import { wrapper } from '@/src/store';
import { homeApi } from '@/src/store/RTKQuery/home/homeApi';

const HomePage: NextPage = ({
	pageProps,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const t = useI18n();
	
	// Safe data access with fallback
	const data = pageProps.data || null;
	
	return (
		<MainLayout
			title={t('pageName', { name: t('home') })}
			header={data?.header}
			footer={data?.footer}
			seo={data?.seo}
		>
			{data ? <Home data={data} /> : <div>Loading...</div>}
		</MainLayout>
	);
};
export const getServerSideProps: GetServerSideProps = withEveryone(
	wrapper.getServerSideProps((store) => async (context) => {
		const data = await store.dispatch(
			homeApi.endpoints?.getHome.initiate(),
		);
		return {
			props: { data: data.data?.data || null },
		};
	}),
);
export default HomePage;
