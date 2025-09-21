import { IResourceModel } from '@/src/models/resource';
import { TrackTypeEnum } from '@/src/enums/track-type-enum';
import { ILookupModel } from '@/src/models/lookups';
import { ISmallUserModel } from '@/src/models/user';
import { IMapLocation } from '@/src/components/ui/maps/TrackMap';

export interface IHomeMapTrackModel {
	trackName: string;
	trackType: TrackTypeEnum;
	firstPoint: ITrackPointModel;
	middlePoint: ITrackPointModel;
	lastPoint: ITrackPointModel;
	documentId: 1280;
}

export interface IMapTrackDetailsModel {
	TrackName: string;
	TrackId: string;
	TrackPoints: ITrackPointModel[];
}

export interface ITrackPointModel {
	Latitude: string;
	Longitude: string;
	lat: string;
	lng: string;
	Elevation: string;
	Time: Date;
}

export interface ITrackModel {
	id: number;
	title: string;
	images: IResourceModel[];
	locationDescription: string;
	region: ILookupModel;
	city: ILookupModel;
	length: string;
	difficulty: ILookupModel;
	duration: string;
	heightGainedOrLost: string;
	highestElevationAboveSeaLevel: string;
	minimumHeightAboveSeaLevel: string;
	description: string;
	youtubeVideoUrl: string;
	isLiked: boolean;
	trackType: TrackTypeEnum;
	userId?: number | null;
	createdBy: ISmallUserModel;
	qrCodeUrl: string;
	firstPoint: IMapLocation;
}
export interface ITrackModelData {
	items: ITrackModel[];
}

export interface ITrackLikeMyProfile {
	data: ITrackModelData;
}
export interface ITrackMyProfile {
	data: ITrackModelData;
}
export interface IParamModel {
	pageNumber: number;
	pageSize: number;
	Id?: number;
	Type?: number;
}
export interface ITrackByIdParamModel {
	Id: number;
	Type: number;
}

export interface ITrackParamModel extends IParamModel {
	orderBy?: string;
	difficulty?: string;
	region?: string;
	title?: string;
}

export interface ITrackImportanceModel {
	mainTitle: string;
	mainImage: string;
	commentsAndSuggestions: ITrackCommentsAndSuggestionsModel;
	technicalSpecificationsForDirectionalSigns: ITrackTechnicalSpecificationForDirectionalSignsModel;
	criteriaForSelectingTracks: ITrackCriteriaForSelectingTracksModel;
	importanceOfTracksSection: IImportanceOfTracksSectionModel;
}

export interface ITrackCommentsAndSuggestionsModel {
	title: string;
	description: string;
}

export interface ITrackTechnicalSpecificationForDirectionalSignsModel {
	title: string;
	content: string;
	image: IResourceModel;
}

export interface ITrackCriteriaForSelectingTracksModel {
	title: string;
	criteriaForSelectingTracksList: ICriteriaForSelectingTracksList[];
}

export interface ICriteriaForSelectingTracksList {
	title: string;
	description: string;
	image: IResourceModel;
}

export interface IImportanceOfTracksSectionModel {
	title: string;
	importanceOfTracksSectionList: IImportanceOfTracksSectionList[];
}

export interface IImportanceOfTracksSectionList {
	title: string;
	description: string;
}

export interface ITourOperatorsModel {
	mainTitle: string;
	mainImage: string;
	title: string;
	description: string;
	tourOperatorsItems: ITourOperatorsItemModel[];
}

export interface ITourOperatorsItemModel {
	title: string;
	image: IResourceModel;
	jobTitle: string;
	companyLink: string;
}

export interface IPreparingForHikingModel {
	preparingForHikingTripsItems: [
		{
			title: string;
			image: IResourceModel;
			content: string;
		},
	];
}

export interface ITrackCommentParamModel extends IParamModel {
	trackId: number;
	trackType: TrackTypeEnum;
}
