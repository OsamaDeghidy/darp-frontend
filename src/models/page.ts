import { ISeoModel } from './seo';

export interface IPageModel {
	header: IHeaderModel;
	footer: IFooterModel;
	seo: ISeoModel;

}

export interface IHeaderModel {
	xTwitter: string;
	instagram: string;
	aboutTheAssociation: string;
	whoAreWe: string;
	associationLicenseCertificate: string;
	organizationalChart: string;
	strategicDirections: string;
	boardOfDirectors: string;
	membersOfTheBoardOfDirectors: string;
	standingCommittees: string;
	founders: string;
	executiveManagement: string;
	reports: string;
	minutesOfAssociationMeetings: string;
	regulationsAndPolicies: string;
	membership: string;
	joinTheAssociationMembership: string;
	associationMembers: string;
	tracks: string;
	tracksMainPage: string;
	importanceOfTracks: string;
	hiking: string;
	electronicServices: string;
	volunteering: string;
	donation: string;
	theJobs: string;
	mediaCenter: string;
	latestHomeNews: string;
	picturesLibrary: string;
	videoLibrary: string;
	mediaMaterials: string;
	callUs: string;
	contactUsForm: string;
	opinionPoll: string;
	complaintsAndSuggestions: string;
	pathsImplementedByTheAssociation: string;
	chooseAPath: string;
	preparingForTheTripAndWhatToDo: string;
	tourOperators: string;
	walkingTrips: string;
}

export interface IFooterModel {
	description: string;
	youtube: string;
	linkedin: string;
	xTwitter: string;
	instagram: string;
}
