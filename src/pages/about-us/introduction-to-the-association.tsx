import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import IntroductionToTheAssociation from '@/src/components/about-us/IntroductionToTheAssociation';
import AboutUsLayout from '@/src/components/ui/layouts/AboutUsLayout';
import { useI18n } from '@/src/locales';
import Link from 'next/link';
import { HRef } from '@/src/utilities/href';
import withEveryone from '@/src/hooks/auth/withEveryone';
import { wrapper } from '@/src/store';
import { aboutUsApi } from '@/src/store/RTKQuery/about-us/aboutUsApi';

const IntroductionToTheAssociationPage: NextPage = ({
	pageProps,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const t = useI18n();

	// Debug: Log the pageProps to see what we're receiving
	console.log('IntroductionToTheAssociationPage pageProps:', pageProps);
	console.log('IntroductionToTheAssociationPage data:', pageProps.data);
	
	// Safe data access with fallback
	const data = pageProps.data || null;
	const page = pageProps.page || null;
	const mainNews = pageProps.mainNews || null;
	const latestNews = pageProps.latestNews || null;
	const membershipList = pageProps.membershipList || null;
return (
		<AboutUsLayout
			title={t('pageName', { name: t('introductionToTheAssociation') })}
			name={pageProps.data?.mainTitle}
			mainImage={pageProps.data?.mainImage?.url}
			header={pageProps.data?.header}
			footer={pageProps.data?.footer}
			breadcrumb={[
				{ title: <Link href={HRef.home} aria-label='home'>{t('home')}</Link> },
				{
					title: t('introductionToTheAssociation'),
				},
			]}
		>
			<IntroductionToTheAssociation data={pageProps.data} />
		</AboutUsLayout>
	);
};
export const getServerSideProps: GetServerSideProps = withEveryone(
	wrapper.getServerSideProps((store) => async (context) => {
		console.log('getServerSideProps: Starting to fetch about organization data');
		try {
			const data = await store.dispatch(
				aboutUsApi.endpoints?.getAboutOrganization.initiate(),
			);
			console.log('getServerSideProps: Raw API response:', data);
			console.log('getServerSideProps: API response status:', data.status);
			console.log('getServerSideProps: API response error:', data.error);
			console.log('getServerSideProps: Processed data:', data.data?.data);
			
			if (data.error) {
				console.error('getServerSideProps: API Error:', data.error);
				return {
					props: { data: null },
				};
			}
			
			return {
				props: { data: data.data?.data || null },
			};
		} catch (error) {
			console.error('getServerSideProps: Exception:', error);
			return {
				props: { data: null },
			};
		}
	}),
);
export default IntroductionToTheAssociationPage;
