import { IResponseModel, PaginatorModel } from '@/src/models/response';
import { createApi } from '@reduxjs/toolkit/query/react';
import { getFetchBaseQuery } from '@/src/store/getFetchBaseQuery';
import { INewsFilterModel, INewsModel, INewsPageModel } from '@/src/models/news';
import querystring from 'query-string';

export const newsApi = createApi({
	reducerPath: 'newsApi',
	baseQuery: getFetchBaseQuery,
	endpoints: (build) => ({
		getNewsPage: build.query<IResponseModel<INewsPageModel>, Partial<void>>(
			{
				query: (data) => ({
					url: 'news/page',
				}),
			},
		),
		getNews: build.query<
			IResponseModel<PaginatorModel<INewsModel>>,
			INewsFilterModel
		>({
			query: (data) => ({
				url: 'news?' + querystring.stringify(data),
			}),
		}),
		getNewsDetails: build.query<
			IResponseModel<INewsModel>,
			Partial<{ id: number }>
		>({
			query: (data) => ({
				url: `news/${data.id}`,
			}),
		}),
	}),
});

export const { useGetNewsQuery } = newsApi;
