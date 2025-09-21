import {
	GetServerSideProps,
	InferGetServerSidePropsType,
	NextPage,
} from 'next';
import { useI18n } from '@/src/locales';
import Link from 'next/link';
import { HRef } from '@/src/utilities/href';
import ContributeLayout from '@/src/components/ui/layouts/ContributeLayout';
import FinancialDonation from '@/src/components/contribute/FinancialDonation';
import withEveryone from '@/src/hooks/auth/withEveryone';
import { wrapper } from '@/src/store';
import { contactUsApi } from '@/src/store/RTKQuery/contact-us/contactUsApi';
const FinancialDonationPage: NextPage = ({
	pageProps,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const t = useI18n();
	return (
		<ContributeLayout
			title={t('pageName', { name: t('donation') })}
			name={t('donation')}
			mainImage={pageProps.data.mainImage.url}
			header={pageProps.data.header}
			footer={pageProps.data.footer}
			breadcrumb={[
				{ title: <Link href={HRef.home}>{t('home')}</Link> },
				{
					title: t('donation'),
				},
			]}
		>
			<FinancialDonation data={pageProps.data} />
		</ContributeLayout>
	);
};
export const getServerSideProps: GetServerSideProps = withEveryone(
	wrapper.getServerSideProps((store) => async (context) => {
		const data = await store.dispatch(
			contactUsApi.endpoints?.getContributePage.initiate(),
		);
		return {
			props: { data: data.data?.data },
		};
	}),
);
export default FinancialDonationPage;
