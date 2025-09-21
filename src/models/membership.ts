import { IResourceModel } from '@/src/models/resource';
import { IPageModel } from '@/src/models/page';
import { ISeoModel } from './seo';

export interface IMembershipPageModel extends IPageModel {
	id: number;
	mainTitle: string;
	mainImage: IResourceModel;
	title: string;
	description: string;
	data: IMembershipModel[];
	seo: ISeoModel;

}

export interface IMembershipModel {
	id: number;
	title: string;
	description: string;
	price: string;
	image: IResourceModel;
	features: [
		{
			title: string;
		},
	];
}
