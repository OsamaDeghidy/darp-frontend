export interface IResponseModel<T> {
	statusCode: number;
	isSuccess: boolean;
	data: T;
	message: string;
}

export interface PaginatorModel<T> {
	items: T[];
	pageNumber: number;
	totalCount: number;
	pageSize: number;
	totalPages: number;
}
