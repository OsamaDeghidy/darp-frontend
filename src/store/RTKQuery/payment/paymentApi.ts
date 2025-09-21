import { createApi } from '@reduxjs/toolkit/query/react';
import { IPaymentModel, IPaymentResponse, IRecurringPaymentModel } from '@/src/models/payment';
import { getFetchBaseQuery } from '@/src/store/getFetchBaseQuery';
import { IResponseModel } from '@/src/models/response';

export const paymentApi = createApi({
	reducerPath: 'paymentApi',
	baseQuery: getFetchBaseQuery,
	endpoints: (builder) => ({
		payment: builder.mutation<
			IResponseModel<IPaymentResponse>,
			Partial<IPaymentModel>
		>({
			query: (data) => ({
				url: `/payment/create-single-donation`,
				method: 'POST',
				body: JSON.parse(JSON.stringify(data)),
				headers: {
					'accept-language': `ar`,
				},
			}),
		}),
		recurringPayment: builder.mutation<
			IResponseModel<IPaymentResponse>,
			Partial<IRecurringPaymentModel>
		>({
			query: (data) => ({
				url: `/payment/create-recurring-donation`,
				method: 'POST',
				body: JSON.parse(JSON.stringify(data)),
				headers: {
					'accept-language': `ar`,
				},
			}),
		}),
		subscription: builder.mutation<
			IResponseModel<IPaymentResponse>,
			Partial<{ contentID: number }>
		>({
			query: (data) => ({
				url: `/payment/create-subscription`,
				method: 'POST',
				body: JSON.parse(JSON.stringify(data)),
				headers: {
					'accept-language': `ar`,
				},
			}),
		}),
	}),
});

export const {
	usePaymentMutation,
	useRecurringPaymentMutation,
	useSubscriptionMutation,
} = paymentApi;
