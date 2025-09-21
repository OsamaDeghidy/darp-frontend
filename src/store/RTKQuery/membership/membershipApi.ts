import { IResponseModel } from '@/src/models/response';
import { createApi } from '@reduxjs/toolkit/query/react';
import { getFetchBaseQuery } from '@/src/store/getFetchBaseQuery';
import { IMembershipModel, IMembershipPageModel } from '@/src/models/membership';
import { ReactNode } from 'react';

export const membershipApi = createApi({
	reducerPath: 'membershipApi',
	baseQuery: getFetchBaseQuery,
	endpoints: (build) => ({
		getMembershipPage: build.query<
			IResponseModel<IMembershipPageModel>,
			Partial<void>
		>({
			query: (data) => ({
				url: 'membership/page',
			}),
		}),

		getMemberships: build.query<
			IResponseModel<IMembershipModel[]>,
			Partial<void>
		>({
			query: (data) => ({
				url: 'membership',
			}),
		}),
		getMembershipById: build.query<
			IResponseModel<IMembershipModel[]>,
			Partial<{ id: number }>
		>({
			query: (data) => ({
				url: `membership/${data.id}`,
			}),
		}),
		createHonoraryMembership: build.mutation<
			IResponseModel<ReactNode>,
			void
		>({
			query: (data) => ({
				url: 'membership/create-honorary-membership',
				method: 'POST',
			}),
		}),
	}),
});

export const { useCreateHonoraryMembershipMutation } = membershipApi;
