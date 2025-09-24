import MainLayout from '@/src/components/ui/layouts/base/MainLayout';

import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import { useI18n } from '@/src/locales';
import withEveryone from '@/src/hooks/auth/withEveryone';
import { wrapper } from '@/src/store';
import News from '@/src/components/media-center/News';
import { newsApi } from '@/src/store/RTKQuery/news/newsApi';

const NewsPage: NextPage = ({
	pageProps,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const t = useI18n();
	
	// Safe data access with fallback
	const data = pageProps.data || null;
	const mainNews = pageProps.mainNews || null;
	const latestNews = pageProps.latestNews || null;
	
	return (
		<MainLayout
			title={t('pageName', { name: t('news') })}
			header={data?.header}
			footer={data?.footer}
			seo={data?.seo}
		>
			{data ? (
				<News
					data={data}
					mainNews={mainNews?.items || []}
					latestNews={latestNews?.items || []}
				/>
			) : (
				<div>Loading...</div>
			)}
		</MainLayout>
	);
};
export const getServerSideProps: GetServerSideProps = withEveryone(
	wrapper.getServerSideProps((store) => async (context) => {
		const data = await store.dispatch(
			newsApi.endpoints?.getNewsPage.initiate(),
		);
		const mainNews = await store.dispatch(
			newsApi.endpoints?.getNews.initiate({
				pageNumber: 1,
				pageSize: 8,
				type: 'Main News',
			}),
		);
		const latestNews = await store.dispatch(
			newsApi.endpoints?.getNews.initiate({
				pageNumber: 1,
				pageSize: 8,
				type: 'News',
			}),
		);
		return {
			props: {
				data: data.data?.data || null,
				mainNews: mainNews.data?.data || null,
				latestNews: latestNews.data?.data || null,
			},
		};
	}),
);
export default NewsPage;
