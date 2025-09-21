import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import AboutUsLayout from '@/src/components/ui/layouts/AboutUsLayout';
import { useI18n } from '@/src/locales';
import Link from 'next/link';
import { HRef } from '@/src/utilities/href';
import CouncilMeetings from '@/src/components/about-us/CouncilMeetings';
import withEveryone from '@/src/hooks/auth/withEveryone';
import { wrapper } from '@/src/store';
import { aboutUsApi } from '@/src/store/RTKQuery/about-us/aboutUsApi';

const CouncilMeetingsPage: NextPage = ({
	pageProps,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const t = useI18n();
	return (
		<AboutUsLayout
			title={t('pageName', { name: t('councilMeetings') })}
			name={pageProps.data.mainTitle}
			mainImage={pageProps.data.mainImage?.url}
			header={pageProps.data.header}
			footer={pageProps.data.footer}
			breadcrumb={[
				{ title: <Link href={HRef.home}>{t('home')}</Link> },
				{
					title: t('councilMeetings'),
				},
			]}
		>
			<CouncilMeetings data={pageProps.data} />
		</AboutUsLayout>
	);
};
export const getServerSideProps: GetServerSideProps = withEveryone(
	wrapper.getServerSideProps((store) => async (context) => {
		const data = await store.dispatch(
			aboutUsApi.endpoints?.getCouncilMeetings.initiate(),
		);
		return {
			props: { data: data.data?.data },
		};
	}),
);
export default CouncilMeetingsPage;
