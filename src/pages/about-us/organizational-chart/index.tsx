import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import { useI18n } from '@/src/locales';
import AboutUsLayout from '@/src/components/ui/layouts/AboutUsLayout';
import Link from 'next/link';
import { HRef } from '@/src/utilities/href';
import OrganizationStructure from '@/src/components/about-us/OrganizationStructure';
import withEveryone from '@/src/hooks/auth/withEveryone';
import { wrapper } from '@/src/store';
import { aboutUsApi } from '@/src/store/RTKQuery/about-us/aboutUsApi';

const Index: NextPage = ({
	pageProps,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const t = useI18n();

	return (
		<AboutUsLayout
			title={t('pageName', { name: pageProps.data?.mainTitle || t('organizationalChart') })}
			name={pageProps.data?.mainTitle || ''}
			mainImage={pageProps.data?.mainImage?.url || ''}
			header={pageProps.data?.header || null}
			footer={pageProps.data?.footer || null}
			breadcrumb={[
				{ title: <Link href={HRef.home}>{t('home')}</Link> },
				{
					title: pageProps.data?.mainTitle || t('organizationalChart'),
				},
			]}
		>
			<OrganizationStructure data={pageProps.data} />
		</AboutUsLayout>
	);
};

export const getServerSideProps: GetServerSideProps = withEveryone(
	wrapper.getServerSideProps((store) => async (context) => {
		const data = await store.dispatch(
			aboutUsApi.endpoints?.getOrganizationStructure.initiate(),
		);
		return {
			props: { data: data.data?.data || null },
		};
	}),
);

export default Index;
