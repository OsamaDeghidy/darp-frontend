import { IResponseModel } from '@/src/models/response';
import { paymentApi } from '@/src/store/RTKQuery/payment/paymentApi';
import { IPaymentStatusModel } from '@/src/models/payment';

export const paymentStatusApi = paymentApi.injectEndpoints({
	endpoints: (builder) => ({
		getPaymentStatus: builder.mutation<
			IResponseModel<IPaymentStatusModel>,
			Partial<{ payment_id: number | null }>
		>({
			query: (data) => ({
				url: `/payment/get-payment-status/${data.payment_id}`,
				headers: {
					'accept-language': `ar`,
				},
			}),
		}),
	}),
});

export const { useGetPaymentStatusMutation } = paymentStatusApi;
