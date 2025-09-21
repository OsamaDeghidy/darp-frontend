import { INewsModel } from '@/src/models/news';
import { IPageModel } from '@/src/models/page';
import { IResourceModel } from '@/src/models/resource';
import { ISeoModel } from './seo';

export interface IHomeModel extends IPageModel {
	homeMainSlider: IHomeMainSliderItemModel[];
	whyWalkingTrails: IWhyWalkingTrailsModel;
	beneficiaries: IBeneficiariesModel;
	downloadApp: IDownloadAppModel;
	kingdomTracks: IKingdomTracksModel;
	twitter: ITwitterModel;
	latestNews: INewsModel[];
	seo: ISeoModel;
}

export interface ITwitterModel {
	title: string;
	twitterList: ITwitterItemModel[];
}

export interface ITwitterItemModel {
	content: string;
	image: IResourceModel;
}

export interface IKingdomTracksModel {
	title: string;
	gpxFiles: string[];
}

export interface IHomeMainSliderItemModel {
	title: string;
	image: IResourceModel;
}

export interface IWhyWalkingTrailsModel {
	title: string;
	whyWalkingTrailsList: IWhyWalkingTrailsItemModel[];
}

export interface IWhyWalkingTrailsItemModel {
	title: string;
	description: string;
	image: IResourceModel;
}

export interface IBeneficiariesModel {
	title: string;
	youtubeVideoUrl: string;
	beneficiariesList: IBeneficiariesListItemModel[];
}

export interface IBeneficiariesListItemModel {
	title: string;
	count: number;
}

export interface IDownloadAppModel {
	title: string;
	description: string;
	image: IResourceModel;
	link: string;
	downloadButtonText: string;
	linkAppStore: string;
	downloadButtonTextAppStore: string;
}
