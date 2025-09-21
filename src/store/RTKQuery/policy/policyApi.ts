import { IResponseModel } from '@/src/models/response';
import { createApi } from '@reduxjs/toolkit/query/react';
import { getFetchBaseQuery } from '@/src/store/getFetchBaseQuery';
import { IPolicyModel } from '@/src/models/policy';

export const policyApi = createApi({
	reducerPath: 'policyApi',
	baseQuery: getFetchBaseQuery,
	endpoints: (build) => ({
		getPolicyPage: build.query<IResponseModel<IPolicyModel>, Partial<void>>(
			{
				query: (data) => ({
					url: 'policy',
				}),
			},
		),
	}),
});

export const {} = policyApi;
