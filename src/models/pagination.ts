export interface IPaginationModel<T> {
	items: T[];
	pageNumber: number;
	totalCount: number;
	pageSize: number;
	totalPages: number;
}
