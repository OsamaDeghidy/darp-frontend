import { IResponseModel } from '@/src/models/response';
import { createApi } from '@reduxjs/toolkit/query/react';
import { getFetchBaseQuery } from '@/src/store/getFetchBaseQuery';
import { IMediaMaterialPageModel, IPhotosLibraryPageModel } from '@/src/models/media-center';

export const mediaCenterApi = createApi({
	reducerPath: 'mediaCenterApi',
	baseQuery: getFetchBaseQuery,
	endpoints: (build) => ({
		getPhotoLibrary: build.query<
			IResponseModel<IPhotosLibraryPageModel>,
			Partial<void>
		>({
			query: (data) => ({
				url: 'media/photos-library',
			}),
		}),
		getVideoLibrary: build.query<
			IResponseModel<IPhotosLibraryPageModel>,
			Partial<void>
		>({
			query: (data) => ({
				url: 'media/videos-library',
			}),
		}),
		getMediaMaterials: build.query<
			IResponseModel<IMediaMaterialPageModel>,
			Partial<void>
		>({
			query: (data) => ({
				url: 'media/media-materials',
			}),
		}),
	}),
});

export const {
	useGetPhotoLibraryQuery,
	useGetVideoLibraryQuery,
	useGetMediaMaterialsQuery,
} = mediaCenterApi;
