import { IResponseModel } from '@/src/models/response';
import { createApi } from '@reduxjs/toolkit/query/react';
import { getFetchBaseQuery } from '@/src/store/getFetchBaseQuery';
import { IPageModel } from '@/src/models/page';
import { IAuthList } from '@/src/models/IAuthList';
import { ILookupModel } from '@/src/models/lookups';
import { LookupTypeEnum } from '@/src/enums/lookup-type-enum';

export const commonApi = createApi({
	reducerPath: 'commonApi',
	baseQuery: getFetchBaseQuery,
	endpoints: (build) => ({
		getPage: build.query<IResponseModel<IPageModel>, Partial<void>>({
			query: (data) => ({
				url: 'common/get-page',
			}),
		}),
		getAuthModalsContent: build.query<IResponseModel<IAuthList>, void>({
			query: (data) => ({
				url: 'common/auth-list',
			}),
		}),
		getLookups: build.query<
			IResponseModel<ILookupModel[]>,
			{ type: LookupTypeEnum }
		>({
			query: (data) => ({
				url: 'common/lookup?type=' + data.type,
			}),
		}),
	}),
});

export const { 
	useGetPageQuery,
	useGetAuthModalsContentQuery, 
	useGetLookupsQuery 
} = commonApi;
