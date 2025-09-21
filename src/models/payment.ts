export interface IPaymentModel {
	amount: number;
	name: string;
	email: string;
	phoneNumber: string;
}

export interface IRecurringPaymentModel {
	amount: number;
}

export interface IPaymentResponse {
	url: string;
	id: number;
}

export interface IPaymentStatusModel {
	status: string;
	id: number;
}
