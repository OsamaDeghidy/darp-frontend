import MainLayout from '@/src/components/ui/layouts/base/MainLayout';

import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import Survey from '@/src/components/Survey';
import { useI18n } from '@/src/locales';
import withEveryone from '@/src/hooks/auth/withEveryone';
import { wrapper } from '@/src/store';
import { contactUsApi } from '@/src/store/RTKQuery/contact-us/contactUsApi';

const SurveyPage: NextPage = ({
	pageProps,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	
	const t = useI18n();
	return (
		<MainLayout
			title={t('pageName', { name: t('survey') })}
			name={pageProps.data.mainTitle}
			mainImage={pageProps.data.mainImage?.url}
			header={pageProps.data.header}
			footer={pageProps.data.footer}
			seo={pageProps.data.seo}
		>
			<Survey data={pageProps.data.surveyItems} />
		</MainLayout>
	);
};
export const getServerSideProps: GetServerSideProps = withEveryone(
	wrapper.getServerSideProps((store) => async (context) => {
		const data = await store.dispatch(
			contactUsApi.endpoints?.getSurveyPage.initiate(),
		);
		return {
			props: { data: data.data?.data },
		};
	}),
);
export default SurveyPage;
