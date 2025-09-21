import { ITrackModel } from '@/src/models/track';

export interface IAuthUserModel {
	id: number;
	name: string;
	email: string;
	emailConfirmed: boolean;
}

export interface IProfileModel {
	userId: number;
	name: string;
	profileImage: string;
	coverImage: string;
	mobile: string;
	email: string;
	birthDay: Date;
	city: string;
	country: string;
	donations: IProfileDonationsModel[];
	subscription: {
		contentId: number;
		supscriptionId: number;
		nextSubscriptionDate: Date;
		isActive: boolean;
		title: string;
		logo: string;
	};
	likedTracks: ITrackModel[];
	isHasPassword: boolean;
	honoraryMembership: {
		isActive: boolean;
		logo: string;
		title: string;
	};
	followers: number;
	following: number;
	companions: number;
	isFollowing: boolean;
}

export interface IProfileDonationsModel {
	amount: number;
	id: number;
	isActive: boolean;
	nextDonationDate: Date;
}

export interface IProfileFormModel {
	name: string;
	dateOfBirth: Date;
	city: string;
	mobile: string;
	country: string;
	email: string;
	profileImage: string;
	coverImage: string;
}
export interface ISmallUserModel {
	userId: number;
	name: string;
	profileImage: string;
}
