import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import PicturesLibrary from '@/src/components/media-center/PicturesLibrary';
import withEveryone from '@/src/hooks/auth/withEveryone';
import { wrapper } from '@/src/store';
import MainLayout from '@/src/components/ui/layouts/base/MainLayout';
import { useI18n } from '@/src/locales';
import { mediaCenterApi } from '@/src/store/RTKQuery/media-center/mediaCenterApi';

const PicturesLibraryPage: NextPage = ({
	pageProps,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const t = useI18n();
	return (
		<MainLayout
			title={t('pageName', { name: t('picturesLibrary') })}
			name={pageProps.data.mainTitle}
			mainImage={pageProps.data.mainImage?.url}
			header={pageProps.data.header}
			footer={pageProps.data.footer}
			seo={pageProps.data.seo}
		>
			<PicturesLibrary data={pageProps.data} />
		</MainLayout>
	);
};

export const getServerSideProps: GetServerSideProps = withEveryone(
	wrapper.getServerSideProps((store) => async (context) => {
		const data = await store.dispatch(
			mediaCenterApi.endpoints?.getPhotoLibrary.initiate(),
		);
		return {
			props: { data: data.data?.data },
		};
	}),
);
export default PicturesLibraryPage;
