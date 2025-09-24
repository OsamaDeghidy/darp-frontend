import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import AboutUsLayout from '@/src/components/ui/layouts/AboutUsLayout';
import Link from 'next/link';
import { HRef } from '@/src/utilities/href';
import { useI18n } from '@/src/locales';
import CertificationPage from '@/src/components/about-us/Certifications';
import withEveryone from '@/src/hooks/auth/withEveryone';
import { wrapper } from '@/src/store';
import { aboutUsApi } from '@/src/store/RTKQuery/about-us/aboutUsApi';

const Certification: NextPage = ({
	pageProps,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const t = useI18n();

	return (
		<AboutUsLayout
			title={t('pageName', { name: t('strategicDirections') })}
			name={pageProps.data?.mainTitle}
			mainImage={pageProps.data?.mainImage?.url}
			header={pageProps.data?.header}
			footer={pageProps.data?.footer}
			breadcrumb={[
				{ title: <Link href={HRef.home}>{t('home')}</Link> },
				{
					title: t('strategicDirections'),
				},
			]}
		>
			<CertificationPage data={pageProps.data} />
		</AboutUsLayout>
	);
};

export const getServerSideProps: GetServerSideProps = withEveryone(
	wrapper.getServerSideProps((store) => async (context) => {
		const data = await store.dispatch(
			aboutUsApi.endpoints?.getLicenseCertificate.initiate(),
		);
		return {
			props: { data: data.data?.data  || null},
		};
	}),
);

export default Certification;
