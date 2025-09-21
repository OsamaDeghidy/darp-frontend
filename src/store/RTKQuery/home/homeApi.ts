import { IResponseModel } from '@/src/models/response';
import { IHomeModel } from '@/src/models/home';
import { createApi } from '@reduxjs/toolkit/query/react';
import { getFetchBaseQuery } from '@/src/store/getFetchBaseQuery';

export const homeApi = createApi({
	reducerPath: 'homeApi',
	baseQuery: getFetchBaseQuery,
	endpoints: (build) => ({
		getHome: build.query<IResponseModel<IHomeModel>, Partial<void>>({
			query: (data) => ({
				url: 'home-page',
			}),
		}),
	}),
});

export const { useGetHomeQuery } = homeApi;
