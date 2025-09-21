import { ISmallUserModel } from '@/src/models/user';

export interface ITracksCommentModel {
	id: number;
	comment: string;
	user: ISmallUserModel;
	createdAt: Date;
	childs: ITracksCommentModel[];
}
