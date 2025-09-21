import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import { useI18n } from '@/src/locales';
import Link from 'next/link';
import { HRef } from '@/src/utilities/href';
import ContributeLayout from '@/src/components/ui/layouts/ContributeLayout';
import withEveryone from '@/src/hooks/auth/withEveryone';
import { wrapper } from '@/src/store';
import { contactUsApi } from '@/src/store/RTKQuery/contact-us/contactUsApi';
import Jobs from '@/src/components/contribute/Jobs';

const JobsPage: NextPage = ({
	pageProps,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const t = useI18n();
	return (
		<ContributeLayout
			title={t('pageName', { name: t('jobs') })}
			name={pageProps.data.mainTitle}
			mainImage={pageProps.data.mainImage?.url}
			header={pageProps.data.header}
			footer={pageProps.data.footer}
			breadcrumb={[
				{ title: <Link href={HRef.home}>{t('home')}</Link> },
				{
					title: t('jobs'),
				},
			]}
		>
			<Jobs data={pageProps.data} />
		</ContributeLayout>
	);
};
export const getServerSideProps: GetServerSideProps = withEveryone(
	wrapper.getServerSideProps((store) => async (context) => {
		const data = await store.dispatch(
			contactUsApi.endpoints?.getJobsPage.initiate(),
		);
		return {
			props: { data: data.data?.data },
		};
	}),
);
export default JobsPage;
