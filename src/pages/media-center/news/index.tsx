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
	return (
		<MainLayout
			title={t('pageName', { name: t('news') })}
			header={pageProps.data.header}
			footer={pageProps.data.footer}
			seo={pageProps.data.seo}
		>
			<News
				data={pageProps.data}
				mainNews={pageProps.mainNews.items}
				latestNews={pageProps.latestNews.items}
			/>
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
				data: data.data?.data,
				mainNews: mainNews.data?.data,
				latestNews: latestNews.data?.data,
			},
		};
	}),
);
export default NewsPage;
