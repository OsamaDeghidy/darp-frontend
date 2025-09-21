import { IPageModel } from '@/src/models/page';
import { IResourceModel } from '@/src/models/resource';
import { ISeoModel } from './seo';

export interface IAboutOrganizationModel extends IPageModel {
	mainTitle: string;
	mainImage: IResourceModel;
	title: string;
	subtitle: string;
	image: IResourceModel;
	content: string;
}

export interface IBoardOfDirectorsModel extends IPageModel {
	mainTitle: string;
	mainImage: IResourceModel;
	title: string;
	subtitle: string;
	boardOfDirectorsList: IBoardOfDirectorsItemModel[];
}

export interface IBoardOfDirectorsItemModel {
	name: string;
	jobTitle: string;
	description: string;
	image: IResourceModel;
	markAsTop: boolean;
}

export interface IStandingCommitteesModel extends IPageModel {
	mainTitle: string;
	mainImage: IResourceModel;
	standingCommittees: IStandingCommitteesItemModel[];
}

export interface IStandingCommitteesItemModel {
	title: string;
	standingCommitteesListItemList: IStandingCommitteesListItemModel[];
}

export interface IStandingCommitteesListItemModel {
	name: string;
	jobTitle: string;
	markAsTop: boolean;
}

export interface IFoundersModel extends IPageModel {
	mainTitle: string;
	mainImage: IResourceModel;
	title: string;
	foundersList: IFoundersItemModel[];
}

export interface IFoundersItemModel {
	name: string;
	jobTitle: string;
	description: string;
	image: IResourceModel;
}

export interface IExecutiveManagementModel extends IPageModel {
	mainTitle: string;
	mainImage: IResourceModel;
	title: string;
	executiveManagementList: IExecutiveManagementItemModel[];
}

export interface IExecutiveManagementItemModel {
	name: string;
	jobTitle: string;
	email: string;
	image: IResourceModel;
}

export interface IFinancialReportsModel extends IPageModel {
	mainTitle: string;
	mainImage: IResourceModel;
	title: string;
	financialReportsList: IFinancialReportsItemModel[];
}

export interface IFinancialReportsItemModel {
	id: number;
	title: string;
	date: Date;
	image: IResourceModel;
	type: string;
	seo: ISeoModel;

}

export interface IFinancialReportsDetailsModel extends IPageModel {
	details: IFinancialReportsItemModel;
}

export interface ICouncilMeetingsModel extends IPageModel {
	mainTitle: string;
	mainImage: IResourceModel;
	title: string;
	councilMeetingsList: ICouncilMeetingsItemModel[];
}

export interface ICouncilMeetingsDetailsModel extends IPageModel {
	details: ICouncilMeetingsItemModel;
}

export interface IRegulationsAndPoliciesDetailsModel extends IPageModel {
	details: IRegulationsAndPoliciesItemModel;

}

export interface ICouncilMeetingsItemModel {
	title: string;
	location: string;
	date: Date;
	image: IResourceModel;
	pdfFile: IResourceModel;
	id: number;
	seo: ISeoModel;

}

export interface IRegulationsAndPoliciesModel extends IPageModel {
	mainTitle: string;
	mainImage: IResourceModel;
	title: string;
	regulationsAndPoliciesList: IRegulationsAndPoliciesItemModel[];
}

export interface IRegulationsAndPoliciesItemModel {
	id: number;
	title: string;
	date: Date;
	image: IResourceModel;
	seo: ISeoModel;

}

export interface IStrategicDirectionsModel extends IPageModel {
	mainTitle: string;
	mainImage: IResourceModel;
	title: string;
	message: {
		title: string;
		description: string;
		image: IResourceModel;
	};
	vision: {
		title: string;
		description: string;
		image: IResourceModel;
	};
	mission: {
		title: string;
		subtitle: string;
		missionList: [
			{
				title: string;
				description: string;
			},
			{
				title: string;
				description: string;
			},
		];
	};
	associationValues: {
		title: string;
		subtitle: string;
		associationValuesList: [
			{
				title: string;
				description: string;
				image: IResourceModel;
			},
		];
	};
}

export interface IMembersOfTheGeneralAssemblyModel extends IPageModel {
	mainTitle: string;
	mainImage: IResourceModel;
	membersOfAssemblyItemList: IMembersOfTheGeneralAssemblyItemModel[];
}

export interface IMembersOfTheGeneralAssemblyItemModel {
	title: string;
	membersOfAssemblyItemListItemList: [
		{
			title: string;
			jobTitle: string;
			count: number;
		},
	];
}

export interface IAsssociationLicenseCertificateModel extends IPageModel {
	mainTitle: string;
	mainImage: IResourceModel;
	title: string;
	image: IResourceModel;
}

interface IOrganizationStructureItem {
	title: string;
	subtitle: string;
	level1: string[];
	level2: string[];
	level3: string[];
	level4: string[];
	level5: string[];
}

export interface IOrganizationStructureModel extends IPageModel {
	mainTitle: string;
	mainImage: IResourceModel;
	title: string;
	organizationStructureItems: IOrganizationStructureItem[];
}
