import { IResourceModel } from '@/src/models/resource';
import { ISeoModel } from './seo';

export interface IPhotosLibraryPageModel {
	mainTitle: string;
	mainImage: IResourceModel;
	title: string;
	seo: ISeoModel;
	photosLibraryItems: [
		{
			title: string;
			images: IResourceModel[];
		},
	];
}

export interface IPhotosLibraryItemModel {
	title: string;
	images: IResourceModel[];
}

export interface IVideosLibraryPageModel {
	mainTitle: string;
	mainImage: IResourceModel;
	title: string;
	videosLibraryItems: IVideosLibraryItemModel[];
}

export interface IVideosLibraryItemModel {
	title: string;
	description: string;
	videoYoutubeLink: string;
}

export interface IMediaMaterialPageModel {
	mainTitle: string;
	mainImage: IResourceModel;
	title: string;
	mediaMaterialsItems: IMediaMaterialItemModel[];
	seo: ISeoModel;

}

export interface IMediaMaterialItemModel {
	title: string;
	file?: IResourceModel;
	videoYoutubeLink?: string;
}
