import { IResponseModel, PaginatorModel } from '@/src/models/response';
import { createApi } from '@reduxjs/toolkit/query/react';
import { getFetchBaseQuery } from '@/src/store/getFetchBaseQuery';
import {
	IHomeMapTrackModel,
	IPreparingForHikingModel,
	ITourOperatorsModel,
	ITrackByIdParamModel,
	ITrackCommentParamModel,
	ITrackImportanceModel,
	ITrackModel,
	ITrackParamModel,
	ITrackPointModel,
} from '@/src/models/track';
import queryString from 'query-string';
import { IPaginationModel } from '@/src/models/pagination';
import { ITracksCommentModel } from '@/src/models/ITracksComment';
import { TrackTypeEnum } from '@/src/enums/track-type-enum';

export const trackApi = createApi({
	reducerPath: 'trackApi',
	baseQuery: getFetchBaseQuery,
	tagTypes: ['Comments', 'Track'],
	endpoints: (build) => ({
		getTracks: build.query<
			IResponseModel<IPaginationModel<ITrackModel>>,
			{ params: ITrackParamModel }
		>({
			query: (data) => ({
				url: `tracks?${queryString.stringify(data.params)}`,
			}),
			providesTags: ['Track'],
		}),
		getAllTracks: build.query<
			IResponseModel<IPaginationModel<ITrackModel>>,
			{ params: ITrackParamModel }
		>({
			query: (data) => ({
				url: `tracks/all?${queryString.stringify(data.params)}`,
			}),
			providesTags: ['Track'],
		}),
		getAllTracksById: build.query<
			IResponseModel<IPaginationModel<ITrackModel>>,
			{ params: ITrackByIdParamModel }
		>({
			query: (data) => ({
				url: `tracks/all/get-by-id?${queryString.stringify(data.params)}`,
			}),
			providesTags: ['Track'],
		}),
		getRecordedTrackByIdAdminView: build.query<
			IResponseModel<ITrackModel>,
			{ id: number }
		>({
			query: (data) => ({
				url: `tracks/all/get-by-id/admin-view/${data.id}`,
			}),
			providesTags: ['Track'],
		}),
		getTrackById: build.query<
			IResponseModel<IPaginationModel<ITrackModel>>,
			{ id: number }
		>({
			query: (data) => ({
				url: `tracks/${data.id}`,
			}),
		}),
		getHomeMapTracks: build.query<
			IResponseModel<IHomeMapTrackModel[]>,
			Partial<void>
		>({
			query: (data) => ({
				url: 'tracks/all-tracks-summaries-map',
			}),
			transformResponse: (
				data: IResponseModel<IHomeMapTrackModel[]>,
			): IResponseModel<IHomeMapTrackModel[]> => {
				data.data.map((item) => {
					item.firstPoint = JSON.parse(item.firstPoint as any);
				});
				return data;
			},
		}),
		getMapTrackDetails: build.query<
			IResponseModel<ITrackPointModel[]>,
			Partial<{ id: number; type: TrackTypeEnum }>
		>({
			query: (data) => ({
				url: `tracks/track-map-details?${queryString.stringify(data)}`,
			}),
		}),
		getTrackComments: build.query<
			IResponseModel<PaginatorModel<ITracksCommentModel>>,
			{ params: ITrackCommentParamModel }
		>({
			query: (data) => ({
				url: `tracks/get-track-comments?${queryString.stringify(data.params)}`,
			}),
			providesTags: ['Comments'],
		}),

		CreateComment: build.mutation<
			void,
			Partial<{
				comment: string;
				trackId: number;
				trackType: TrackTypeEnum;
			}>
		>({
			query: (data) => ({
				url: 'tracks/create-track-comment',
				method: 'POST',
				body: JSON.parse(JSON.stringify(data)),
			}),
			invalidatesTags: ['Comments'],
		}),
		ReplyComment: build.mutation<
			void,
			Partial<{
				comment: string;
				parentCommentId: number;
			}>
		>({
			query: (data) => ({
				url: 'tracks/create-track-sub-comment',
				method: 'POST',
				body: JSON.parse(JSON.stringify(data)),
			}),
			invalidatesTags: ['Comments'],
		}),
		getImportanceOfTracks: build.query<
			IResponseModel<ITrackImportanceModel>,
			Partial<void>
		>({
			query: (data) => ({
				url: `tracks/importance-of-tracks`,
			}),
			providesTags: ['Comments'],
		}),
		likeTrack: build.mutation<
			IResponseModel<any>,
			Partial<{
				id: number;
				trackType: TrackTypeEnum;
			}>
		>({
			query: (data) => ({
				url: 'tracks/like-track',
				method: 'POST',
				body: JSON.parse(JSON.stringify(data)),
			}),
			invalidatesTags: ['Track'],
		}),
		unLikeTrack: build.mutation<
			IResponseModel<any>,
			Partial<{
				id: number;
				trackType: TrackTypeEnum;
			}>
		>({
			query: (data) => ({
				url: 'tracks/dislike-track',
				method: 'POST',
				body: JSON.parse(JSON.stringify(data)),
			}),
			invalidatesTags: ['Track'],
		}),
		getTourOperators: build.query<
			IResponseModel<ITourOperatorsModel>,
			Partial<void>
		>({
			query: (data) => ({
				url: `tracks/tour-operators`,
			}),
			providesTags: ['Track'],
		}),
		getPreparingForHikingTrips: build.query<
			IResponseModel<IPreparingForHikingModel>,
			Partial<void>
		>({
			query: (data) => ({
				url: `tracks/preparing-for-hiking-trips`,
			}),
			providesTags: ['Track'],
		}),
		getRecordedTracks: build.query<
			IResponseModel<ITrackModel>,
			{ params: ITrackParamModel }
		>({
			query: (data) => ({
				url: `recorded-track?${queryString.stringify(data.params)}`,
			}),
			providesTags: ['Track'],
		}),
	}),
});

export const {
	useGetHomeMapTracksQuery,
	useGetTracksQuery,
	useGetAllTracksByIdQuery,
	useGetAllTracksQuery,
	useGetMapTrackDetailsQuery,
	useGetTrackCommentsQuery,
	useCreateCommentMutation,
	useReplyCommentMutation,
	useGetImportanceOfTracksQuery,
	useLikeTrackMutation,
	useUnLikeTrackMutation,
	useGetRecordedTracksQuery,
} = trackApi;
