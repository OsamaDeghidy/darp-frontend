import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import AboutUsLayout from '@/src/components/ui/layouts/AboutUsLayout';
import { useI18n } from '@/src/locales';
import Link from 'next/link';
import { HRef } from '@/src/utilities/href';
import FinancialReports from '@/src/components/about-us/FinancialReports';
import withEveryone from '@/src/hooks/auth/withEveryone';
import { wrapper } from '@/src/store';
import { aboutUsApi } from '@/src/store/RTKQuery/about-us/aboutUsApi';

const FinancialReportsPage: NextPage = ({
	pageProps,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const t = useI18n();
	return (
		<AboutUsLayout
			title={t('pageName', { name: t('financialReports') })}
			name={pageProps.data?.mainTitle || ''}
			mainImage={pageProps.data?.mainImage?.url || ''}
			header={pageProps.data?.header || null}
			footer={pageProps.data?.footer || null}
			breadcrumb={[
				{ title: <Link href={HRef.home} aria-label='home'>{t('home')}</Link> },
				{
					title: t('financialReports'),
				},
			]}
		>
			<FinancialReports data={pageProps.data} />
		</AboutUsLayout>
	);
};
export const getServerSideProps: GetServerSideProps = withEveryone(
	wrapper.getServerSideProps((store) => async (context) => {
		const data = await store.dispatch(
			aboutUsApi.endpoints?.getFinancialReports.initiate(),
		);
		return {
			props: { data: data.data?.data || null },
		};
	}),
);
export default FinancialReportsPage;
