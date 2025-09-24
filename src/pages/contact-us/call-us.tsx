import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import { useI18n } from '@/src/locales';
import Link from 'next/link';
import { HRef } from '@/src/utilities/href';
import ContactUsLayout from '@/src/components/ui/layouts/ContactUsLayout';
import CallUs from '@/src/components/contact-us/CallUs';
import withEveryone from '@/src/hooks/auth/withEveryone';
import { wrapper } from '@/src/store';
import { contactUsApi } from '@/src/store/RTKQuery/contact-us/contactUsApi';

const CallUsPage: NextPage = ({
	pageProps,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const t = useI18n();
	
	// Safe data access with fallback
	const data = pageProps.data || null;
	
	return (
		<ContactUsLayout
			title={t('pageName', { name: t('callUs') })}
			name={data?.mainTitle}
			mainImage={data?.mainImage?.url}
			header={data?.header}
			footer={data?.footer}
			breadcrumb={[
				{ title: <Link href={HRef.home}>{t('home')}</Link> },
				{
					title: t('callUs'),
				},
			]}
		>
			{data ? <CallUs data={data} /> : <div>Loading...</div>}
		</ContactUsLayout>
	);
};
export const getServerSideProps: GetServerSideProps = withEveryone(
	wrapper.getServerSideProps((store) => async (context) => {
		const data = await store.dispatch(
			contactUsApi.endpoints?.getContactUsPage.initiate(),
		);
		return {
			props: { data: data.data?.data || null },
		};
	}),
);
export default CallUsPage;
