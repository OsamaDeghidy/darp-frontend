import MainLayout from '@/src/components/ui/layouts/base/MainLayout';

import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import Policy from '@/src/components/Policy';
import { useI18n } from '@/src/locales';
import withEveryone from '@/src/hooks/auth/withEveryone';
import { wrapper } from '@/src/store';
import { commonApi } from '@/src/store/RTKQuery/common/commonApi';
import { policyApi } from '@/src/store/RTKQuery/policy/policyApi';

const PolicyPage: NextPage = ({
	pageProps,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const t = useI18n();

	return (
		<MainLayout
			title={t('pageName', { name: t('survey') })}
			name={pageProps.data.title}
			header={pageProps.page.header}
			footer={pageProps.page.footer}
			seo={pageProps.page.seo}
		>
			<Policy data={pageProps.data} />
		</MainLayout>
	);
};
export const getServerSideProps: GetServerSideProps = withEveryone(
	wrapper.getServerSideProps((store) => async (context) => {
		const page = await store.dispatch(
			commonApi.endpoints?.getPage.initiate(),
		);

		const data = await store.dispatch(
			policyApi.endpoints?.getPolicyPage.initiate(),
		);
		return {
			props: {
				page: page.data?.data,
				data: data.data?.data,
			},
		};
	}),
);
export default PolicyPage;
