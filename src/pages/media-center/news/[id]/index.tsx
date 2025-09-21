import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import ArticlePage from '@/src/components/media-center/ArticlePage';
import withEveryone from '@/src/hooks/auth/withEveryone';
import { wrapper } from '@/src/store';
import { newsApi } from '@/src/store/RTKQuery/news/newsApi';
import MainLayout from '@/src/components/ui/layouts/base/MainLayout';
import { useI18n } from '@/src/locales';

const NewsArticle: NextPage = ({
	pageProps,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const t = useI18n();

	return (
		<MainLayout
			title={t('pageName', { name: t('news') })}
			header={pageProps.layout.data.header}
			footer={pageProps.layout.data.footer}
			seo={pageProps.layout.data.seo}
		>
			<ArticlePage
				data={pageProps.data}
				latestNews={pageProps.newsData}
			/>
		</MainLayout>
	);
};

export const getServerSideProps: GetServerSideProps = withEveryone(
	wrapper.getServerSideProps((store) => async (context) => {
		const id = context.params?.id || '';
		const data = await store.dispatch(
			newsApi.endpoints?.getNewsDetails.initiate({
				id: Number(id),
			}),
		);
		const newsData = await store.dispatch(
			newsApi.endpoints?.getNewsPage.initiate(),
		);
		return {
			props: {
				data: data.data?.data,
				newsData: newsData?.data?.data.latestNews,
				layout: newsData?.data,
			},
		};
	}),
);

export default NewsArticle;
