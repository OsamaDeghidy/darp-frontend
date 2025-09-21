import { createApi } from '@reduxjs/toolkit/query/react';
import { getFetchBaseQuery } from '@/src/store/getFetchBaseQuery';

export const apiService = createApi({
	reducerPath: 'api',
	baseQuery: getFetchBaseQuery,
	tagTypes: ['General'],
	endpoints: (builder) => ({
		getContent: builder.query<any, string>({
			query: (parameters) => parameters ? `content${parameters}` : `content`,
			transformResponse: (response:any) => response.items[0],
		}),
		getMediaItem: builder.query<any, string>({
			query: (id) => `media/item/${id}`,
		}),
		getMedia: builder.query<any, string>({
			query: (image) => `media/${image}`,
		}),
	}),
});

export const { useGetContentQuery,useGetMediaQuery,useGetMediaItemQuery  } = apiService