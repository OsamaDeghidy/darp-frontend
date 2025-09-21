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
	return (
		<ContactUsLayout
			title={t('pageName', { name: t('callUs') })}
			name={pageProps.data.mainTitle}
			mainImage={pageProps.data.mainImage?.url}
			header={pageProps.data.header}
			footer={pageProps.data.footer}
			breadcrumb={[
				{ title: <Link href={HRef.home}>{t('home')}</Link> },
				{
					title: t('callUs'),
				},
			]}
		>
			<CallUs data={pageProps.data} />
		</ContactUsLayout>
	);
};
export const getServerSideProps: GetServerSideProps = withEveryone(
	wrapper.getServerSideProps((store) => async (context) => {
		const data = await store.dispatch(
			contactUsApi.endpoints?.getContactUsPage.initiate(),
		);
		return {
			props: { data: data.data?.data },
		};
	}),
);
export default CallUsPage;
