import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import AboutUsLayout from '@/src/components/ui/layouts/AboutUsLayout';
import { useI18n } from '@/src/locales';
import Link from 'next/link';
import { HRef } from '@/src/utilities/href';
import BoardOfDirectors from '@/src/components/about-us/BoardOfDirectors';
import withEveryone from '@/src/hooks/auth/withEveryone';
import { wrapper } from '@/src/store';
import { aboutUsApi } from '@/src/store/RTKQuery/about-us/aboutUsApi';

const BoardOfDirectorsPage: NextPage = ({
	pageProps,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const t = useI18n();
	
	// Safe data access with fallback
	const data = pageProps.data || null;
	
	return (
		<AboutUsLayout
			title={t('pageName', { name: t('boardOfDirectors') })}
			// name={data?.mainTitle}
			mainImage={data?.mainImage?.url}
			header={data?.header}
			footer={data?.footer}
			breadcrumb={[
				{ title: <Link href={HRef.home} aria-label='home'>{t('home')}</Link> },
				{
					title: t('boardOfDirectors'),
				},
			]}
		>
			{data ? <BoardOfDirectors data={data} /> : <div>Loading...</div>}
		</AboutUsLayout>
	);
};
export const getServerSideProps: GetServerSideProps = withEveryone(
	wrapper.getServerSideProps((store) => async (context) => {
		const data = await store.dispatch(
			aboutUsApi.endpoints?.getBoardOfDirectors.initiate(),
		);
		return {
			props: { data: data.data?.data || null },
		};
	}),
);
export default BoardOfDirectorsPage;
