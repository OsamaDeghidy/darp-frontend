export interface IAuthList {
	authList: IAuthListItem[];
}

export interface IAuthListItem {
	title: string;
	description: string;
	successTitle: string;
	successDescription: string;
	failedTitle: string;
	failedDescription: string;
	type: string;
}
