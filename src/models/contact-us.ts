import { IPageModel } from '@/src/models/page';
import { IResourceModel } from '@/src/models/resource';
import { ISeoModel } from './seo';

export interface IContactusPageModel extends IPageModel {
	mainTitle: string;
	mainImage: IResourceModel;
	title: string;
	formTitle: string;
	mobile: string;
	email: string;
	address: string;
	mapTitle: string;
	mapLatitude: string;
	mapLongitude: string;
}

export interface IContactUsModel {
	firstName: string;
	lastName: string;
	email: string;
	mobile: string;
	content: string;
}

export class ContactUsModel implements IContactUsModel {
	firstName = '';
	lastName = '';
	email = '';
	mobile = '';
	content = '';
}

export interface ISurveyPageModel extends IPageModel {
	mainTitle: string;
	mainImage: IResourceModel;
	title: string;
	surveyItems: ISurveyItemModel[];
	seo: ISeoModel;

}

export interface ISurveyItemModel {
	title: string;
	surveyLink: string;
	image: IResourceModel;
}

export interface IComplaintsAndSuggestionsPageModel extends IPageModel {
	mainTitle: string;
	mainImage: IResourceModel;
	title: string;
	subtitle: string;
	description: string;
}

export interface IComplaintsAndSuggestionsModel {
	name: string;
	email: string;
	mobile: string;
	content: string;
}

export class ComplaintsAndSuggestionsModel
	implements IComplaintsAndSuggestionsModel {
	name = '';
	email = '';
	mobile = '';
	content = '';
}

export interface IVolunteeringPageModel extends IPageModel {
	mainTitle: string;
	mainImage: IResourceModel;
	title: string;
	description: string;
	mapLatitude: string;
	mapLongitude: string;
	formTitle: string;
	workVolunteering: string[];
	timeVolunteering: string[];
}

export interface IVolunteeringBaseModel {
	name: string;
	nationality: string;
	identificationNumber: string;
	dateOfBirth?: Date;
	city: string;
	region: string;
	email: string;
	mobile: string;
	associationMembershipNumber: string;
	regionVolunteer: string;
	cityVolunteer: string;
	workVolunteering: string;
	timeVolunteering: string;
}

export interface IVolunteeringFormModel extends IVolunteeringBaseModel {
	workVolunteeringDisplay: { name: string; value: boolean }[];
	timeVolunteeringDisplay: { name: string; value: boolean }[];
	other: boolean;
	workOther: string;
}

export class VolunteeringFormModel implements IVolunteeringFormModel {
	associationMembershipNumber = '';
	city = '';
	cityVolunteer = '';
	email = '';
	identificationNumber = '';
	mobile = '';
	name = '';
	nationality = '';
	region = '';
	regionVolunteer = '';
	timeVolunteeringDisplay = [];
	workVolunteeringDisplay = [];
	timeVolunteering = '';
	workVolunteering = '';
	other = false;
	workOther = '';
}

export interface IVolunteeringModel extends IVolunteeringBaseModel {
	workVolunteer: string;
	timeVolunteer: string;
}

export interface IJobsPageModel extends IPageModel {
	mainTitle: string;
	mainImage: IResourceModel;
	title: string;
	content: string;
}

export interface IContributePageModel extends IPageModel {
	mainTitle: string;
	mainImage: IResourceModel;
	title: string;
	description: string;
	formTitle: string;
}
