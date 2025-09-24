import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import MediaMaterialsPage from '@/src/components/media-center/MediaMaterialsPage';
import withEveryone from '@/src/hooks/auth/withEveryone';
import { wrapper } from '@/src/store';
import { mediaCenterApi } from '@/src/store/RTKQuery/media-center/mediaCenterApi';
import MainLayout from '@/src/components/ui/layouts/base/MainLayout';
import { useI18n } from '@/src/locales';

const MediaMaterials: NextPage = ({
	pageProps,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const t = useI18n();
	return (
		<MainLayout
			title={t('pageName', { name: t('mediaMaterials') })}
			name={pageProps.data?.mainTitle}
			mainImage={pageProps.data?.mainImage?.url}
			header={pageProps.data?.header}
			footer={pageProps.data?.footer}
			seo={pageProps.data?.seo}
			
		>
			<MediaMaterialsPage data={pageProps.data} />
		</MainLayout>
	);
};
export const getServerSideProps: GetServerSideProps = withEveryone(
	wrapper.getServerSideProps((store) => async (context) => {
		const data = await store.dispatch(
			mediaCenterApi.endpoints?.getMediaMaterials.initiate(),
		);
		return {
			props: { data: data.data?.data  || null},
		};
	}),
);
export default MediaMaterials;
