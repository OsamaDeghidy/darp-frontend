import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import ComplaintsAndSuggestions from '@/src/components/ComplaintsAndSuggestions';
import { useI18n } from '@/src/locales';
import withEveryone from '@/src/hooks/auth/withEveryone';
import { wrapper } from '@/src/store';
import { contactUsApi } from '@/src/store/RTKQuery/contact-us/contactUsApi';
import ContactUsLayout from '@/src/components/ui/layouts/ContactUsLayout';

const ComplaintsAndSuggestionsPage: NextPage = ({
													pageProps,
												}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const t = useI18n();
	
	// Safe data access with fallback
	const data = pageProps.data || null;
	const page = pageProps.page || null;
	const mainNews = pageProps.mainNews || null;
	const latestNews = pageProps.latestNews || null;
	const membershipList = pageProps.membershipList || null;
return (
		<ContactUsLayout
			breadcrumb={[{ title: t('complaintsAndSuggestions') }]}
			title={t('pageName', { name: t('complaintsAndSuggestions') })}
			name={pageProps.data?.mainTitle}
			mainImage={pageProps.data?.mainImage?.url}
			header={pageProps.data?.header}
			footer={pageProps.data?.footer}
			
		>
			<ComplaintsAndSuggestions data={pageProps.data} />
		</ContactUsLayout>
		
	);
};
export const getServerSideProps: GetServerSideProps = withEveryone(
	wrapper.getServerSideProps((store) => async (context) => {
		const data = await store.dispatch(
			contactUsApi.endpoints?.getComplaintsAndSuggestions.initiate(),
		);
		return {
			props: { data: data.data?.data  || null},
		};
	}),
);
export default ComplaintsAndSuggestionsPage;
