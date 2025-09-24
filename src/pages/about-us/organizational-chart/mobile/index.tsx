import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import { useI18n } from '@/src/locales';
import OrganizationStructure from '@/src/components/about-us/OrganizationStructure';
import withEveryone from '@/src/hooks/auth/withEveryone';
import { wrapper } from '@/src/store';
import { aboutUsApi } from '@/src/store/RTKQuery/about-us/aboutUsApi';

const Index: NextPage = ({
	pageProps,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const t = useI18n();

	return (
		<div className={'container'}>
			<OrganizationStructure data={pageProps.data} isMobile={true} />
		</div>
	);
};

export const getServerSideProps: GetServerSideProps = withEveryone(
	wrapper.getServerSideProps((store) => async (context) => {
		const data = await store.dispatch(
			aboutUsApi.endpoints?.getOrganizationStructure.initiate(),
		);
		return {
			props: { data: data.data?.data || null },
		};
	}),
);

export default Index;
