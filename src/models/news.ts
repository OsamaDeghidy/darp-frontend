import { IPageModel } from '@/src/models/page';
import { IResourceModel } from '@/src/models/resource';

export interface INewsModel {
	id: number;
	title: string;
	image: IResourceModel;
	imageDescription: string;
	content: string;
	type: string;
	createdAt: Date;
}

export interface INewsPageModel extends IPageModel {
	mainTitle: string;
	mainImage: IResourceModel;
	mainNews: INewsModel[];
	latestNews: INewsModel[];
}

export interface INewsFilterModel {
	pageNumber: number;
	pageSize: number;
	type: string;
}

export class NewsFilterModel implements INewsFilterModel {
	pageNumber = 1;
	pageSize = 5;
	type = '';
}
