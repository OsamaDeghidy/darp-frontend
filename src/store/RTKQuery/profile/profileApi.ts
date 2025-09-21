import { IResponseModel } from '@/src/models/response';
import { createApi } from '@reduxjs/toolkit/query/react';
import { getFetchBaseQuery } from '@/src/store/getFetchBaseQuery';
import { IProfileFormModel, IProfileModel } from '@/src/models/user';
import { ITrackModel, ITrackParamModel } from '@/src/models/track';
import { IPaginationModel } from '@/src/models/pagination';
import queryString from 'query-string';

export const profileApi = createApi({
	reducerPath: 'profileApi',
	baseQuery: getFetchBaseQuery,
	tagTypes: ['Profile'],
	endpoints: (build) => ({
		getMyProfile: build.query<IResponseModel<IProfileModel>, Partial<void>>(
			{
				query: (data) => ({
					url: 'my-profile',
				}),
				providesTags: ['Profile'],
			},
		),
		getProfileUser: build.query<
			IResponseModel<IProfileModel>,
			{ id: number }
		>({
			query: (data) => ({
				url: `profile/${data.id}`,
			}),
			providesTags: ['Profile'],
		}),
		updateMyProfile: build.mutation<
			IResponseModel<any>,
			Partial<IProfileFormModel>
		>({
			query: (data) => ({
				url: 'my-profile',
				method: 'PUT',
				body: JSON.parse(JSON.stringify(data)),
			}),
			invalidatesTags: ['Profile'],
		}),
		cancelSubscription: build.mutation<IResponseModel<any>, void>({
			query: (data) => ({
				url: 'payment/cancel-subscription',
				method: 'POST',
			}),
			invalidatesTags: ['Profile'],
		}),
		cancelDonation: build.mutation<IResponseModel<any>, { id: number }>({
			query: (data) => ({
				url: 'payment/cancel-recurring-donation',
				method: 'POST',
				body: JSON.parse(JSON.stringify(data)),
			}),
			invalidatesTags: ['Profile'],
		}),
		followUser: build.mutation<
			IResponseModel<any>,
			{ followingId: number }
		>({
			query: (data) => ({
				url: 'profile/follow',
				method: 'POST',
				body: JSON.parse(JSON.stringify(data)),
			}),
			invalidatesTags: ['Profile'],
		}),
		unfollowUser: build.mutation<
			IResponseModel<any>,
			{ followingId: number }
		>({
			query: (data) => ({
				url: 'profile/follow',
				method: 'DELETE',
				body: JSON.parse(JSON.stringify(data)),
			}),
			invalidatesTags: ['Profile'],
		}),
		getTrackMyProfile: build.query<
			IResponseModel<IPaginationModel<ITrackModel>>,
			{ params: ITrackParamModel }
		>({
			query: (data) => ({
				url: `profile/tracks?${queryString.stringify(data.params)}`,
			}),
			providesTags: ['Profile'],
		}),
		getTrackLikeMyProfile: build.query<
			IResponseModel<IPaginationModel<ITrackModel>>,
			{ params: ITrackParamModel }
		>({
			query: (data) => ({
				url: `profile/tracks/likes?${queryString.stringify(data.params)}`,
			}),
			providesTags: ['Profile'],
		}),
		getTracksProfileUser: build.query<
			IResponseModel<ITrackModel>,
			{ id: number }
		>({
			query: (data) => ({
				url: `profile/tracks/${data.id}`,
			}),
			providesTags: ['Profile'],
		}),
	}),
});

export const {
	useGetMyProfileQuery,
	useGetProfileUserQuery,
	useUpdateMyProfileMutation,
	useCancelSubscriptionMutation,
	useCancelDonationMutation,
	useFollowUserMutation,
	useUnfollowUserMutation,
	useGetTrackMyProfileQuery,
	useGetTrackLikeMyProfileQuery,
} = profileApi;
