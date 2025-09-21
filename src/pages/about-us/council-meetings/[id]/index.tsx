import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import { useI18n } from '@/src/locales';
import MainLayout from '@/src/components/ui/layouts/base/MainLayout';
import withEveryone from '@/src/hooks/auth/withEveryone';
import { wrapper } from '@/src/store';
import { aboutUsApi } from '@/src/store/RTKQuery/about-us/aboutUsApi';
import PdfRender from '@/src/components/ui/PdfRender';

const MeetingDetailsPage: NextPage = ({
	pageProps,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const t = useI18n();
	return (
		<MainLayout
			header={pageProps.data.header}
			footer={pageProps.data.footer}
			title={t('pageName', { name: t('meetingDetails') })}
			seo={pageProps.data.seo}
		>
			<div className="container">
				<div className="flex justify-center mt-[30px] mb-[60px]">
					<PdfRender url={pageProps.data.details.pdfFile?.url} />
				</div>
			</div>
		</MainLayout>
	);
};
export const getServerSideProps: GetServerSideProps = withEveryone(
	wrapper.getServerSideProps((store) => async (context) => {
		const id = context.params?.id || '';

		const data = await store.dispatch(
			aboutUsApi.endpoints?.getCouncilMeetingsById.initiate({
				id: Number(id),
			}),
		);

		return {
			props: { data: data.data?.data },
		};
	}),
);
export default MeetingDetailsPage;
