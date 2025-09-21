import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import { useI18n } from '@/src/locales';
import { wrapper } from '@/src/store';
import withAuth from '@/src/hooks/auth/withAuth';
import ProfileLayout from '@/src/components/ui/layouts/ProfileLayout';
import React, { useState } from 'react';
import Profile from '@/src/components/profile/Profile';
import { commonApi } from '@/src/store/RTKQuery/common/commonApi';
import { profileApi, useGetTrackLikeMyProfileQuery } from '@/src/store/RTKQuery/profile/profileApi';
import { ITrackParamModel } from '@/src/models/track';

const ProfilePage: NextPage = ({
	pageProps,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const t = useI18n();
	// const { data, isSuccess, isLoading } = useGetMyProfileQuery();
	const [params, setParams] = useState<ITrackParamModel>({
		pageNumber: 1,
		pageSize: 8,
	});
	const {
		data: TrackLikeMyProfile,
		refetch,
	} = useGetTrackLikeMyProfileQuery({ params });

	return (
		<ProfileLayout
			title={t('pageName', { name: t('personalAccount') })}
			header={pageProps.data.header}
			footer={pageProps.data.footer}
			data={pageProps.myProfileData}
		>
			<Profile
				data={pageProps.myProfileData}
				TrackLikeMyProfile={TrackLikeMyProfile}
				refetch={refetch}
			/>
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
			props: { data: page.data?.data, myProfileData: myProfileData.data },
		};
	}),
);
export default ProfilePage;
