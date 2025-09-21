import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import AboutUsLayout from '@/src/components/ui/layouts/AboutUsLayout';
import { useI18n } from '@/src/locales';
import Link from 'next/link';
import { HRef } from '@/src/utilities/href';
import MembersOfTheGeneralAssembly from '@/src/components/about-us/MembersOfTheGeneralAssembly';
import withEveryone from '@/src/hooks/auth/withEveryone';
import { wrapper } from '@/src/store';
import { aboutUsApi } from '@/src/store/RTKQuery/about-us/aboutUsApi';

const MembersOfTheGeneralAssemblyPage: NextPage = ({
	pageProps,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const t = useI18n();
	return (
		<AboutUsLayout
			title={t('pageName', { name: t('membersOfTheGeneralAssembly') })}
			name={pageProps.data.mainTitle}
			mainImage={pageProps.data.mainImage?.url}
			header={pageProps.data.header}
			footer={pageProps.data.footer}
			breadcrumb={[
				{ title: <Link href={HRef.home}>{t('home')}</Link> },
				{
					title: t('membersOfTheGeneralAssembly'),
				},
			]}
		>
			<MembersOfTheGeneralAssembly
				data={pageProps.data.membersOfAssemblyItemList}
			/>
		</AboutUsLayout>
	);
};
export const getServerSideProps: GetServerSideProps = withEveryone(
	wrapper.getServerSideProps((store) => async (context) => {
		const data = await store.dispatch(
			aboutUsApi.endpoints?.getMembersOfAssembly.initiate(),
		);
		return {
			props: { data: data.data?.data },
		};
	}),
);
export default MembersOfTheGeneralAssemblyPage;
