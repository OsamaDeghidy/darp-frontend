import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import { useI18n } from '@/src/locales';
import { wrapper } from '@/src/store';
import withAuth from '@/src/hooks/auth/withAuth';
import ProfileLayout from '@/src/components/ui/layouts/ProfileLayout';
import EditProfile from '@/src/components/profile/EditProfile';
import { commonApi } from '@/src/store/RTKQuery/common/commonApi';
import { useState } from 'react';
import { profileApi } from '@/src/store/RTKQuery/profile/profileApi';

const EditProfilePage: NextPage = ({
	pageProps,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const t = useI18n();
	const [profileImage, setProfileImage] = useState<string>();
	const [coverImage, setCoverImage] = useState<string>();
	
	// Safe data access with fallback
	const data = pageProps.data || null;
	const page = pageProps.page || null;
	const mainNews = pageProps.mainNews || null;
	const latestNews = pageProps.latestNews || null;
	const membershipList = pageProps.membershipList || null;
return (
		<ProfileLayout
			title={t('pageName', { name: t('editProfile') })}
			header={pageProps.data?.header}
			footer={pageProps.data?.footer}
			data={pageProps.myProfileData}
			isEditProfile={true}
			onChangeProfileImage={(url) => {
				setProfileImage(url);
			}}
			onChangeCoverImage={(url) => {
				setCoverImage(url);
			}}
		>
			<EditProfile profileImage={profileImage} coverImage={coverImage} />
		</ProfileLayout>
	);
};
export const getServerSideProps: GetServerSideProps = withAuth(
	wrapper.getServerSideProps((store) => async (context) => {
		const page = await store.dispatch(
			commonApi.endpoints?.getPage.initiate(),
		);
		const myProfileData = await store.dispatch(
			profileApi.endpoints?.getMyProfile.initiate(),
		);
		return {
			props: { data: page.data?.data   || null, myProfileData: myProfileData.data},
		};
	}),
);
export default EditProfilePage;
