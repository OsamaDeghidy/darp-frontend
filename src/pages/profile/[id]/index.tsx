import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import { useI18n } from '@/src/locales';
import { wrapper } from '@/src/store';
import ProfileLayout from '@/src/components/ui/layouts/ProfileLayout';
import React from 'react';
import Profile from '@/src/components/profile/Profile';
import { commonApi } from '@/src/store/RTKQuery/common/commonApi';
import { profileApi } from '@/src/store/RTKQuery/profile/profileApi';
import withEveryone from '@/src/hooks/auth/withEveryone';

const ProfilePeoplePage: NextPage = ({
	pageProps,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const t = useI18n();
    
	return (
		<ProfileLayout
			title={t('pageName', { name: t('personalAccount') })}
			header={pageProps.data.header}
			footer={pageProps.data.footer}
			data={pageProps.ProfileById}
			isViewProfile={true}
            trackProfileById={pageProps.TrackProfileById}
		>
			<Profile data={pageProps.ProfileById} isViewProfile={true}  />
		</ProfileLayout>
	);
};

export const getServerSideProps: GetServerSideProps = withEveryone(
	wrapper.getServerSideProps((store) => async (context) => {
		const page = await store.dispatch(
			commonApi.endpoints?.getPage.initiate(),
		);
		const ProfileById = await store.dispatch(
			profileApi.endpoints?.getProfileUser.initiate({
				id: Number(context.query.id),
			}),
		);
		const TrackProfileById = await store.dispatch(
			profileApi.endpoints?.getTracksProfileUser.initiate({
				id: Number(context.query.id),
			}),
		);
		const state = store.getState();
		const user = state.authUserSlice?.user;

		if (user?.id === ProfileById?.data?.data.userId) {
			return {
				redirect: {
					destination: '/profile',
					permanent: false,
				},
			};
		}
		return {
			props: {
				data: page.data?.data,
				ProfileById: ProfileById.data,
                TrackProfileById: TrackProfileById.data,
			},
		};
	}),
);

export default ProfilePeoplePage;
