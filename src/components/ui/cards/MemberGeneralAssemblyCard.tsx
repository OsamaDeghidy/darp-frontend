import React, { FC } from 'react';
import { getString } from '@/src/utilities/string';

export interface IMemberGeneralAssemblyCardModel {
	name: string;
	jobTitle: string;
	count: number;
}

interface IProps extends IMemberGeneralAssemblyCardModel {
	className?: string;
}

const MemberGeneralAssemblyCard: FC<IProps> = (props) => {
	const { className, name, jobTitle, count } = props;
	return (
		<div className={getString(className)}>
			<div
				className={
					'py-[25px] px-[20px] border rounded-[10px] b-c_EDF4F2 flex items-center justify-center flex-col bg-c_white'
				}
			>
				<div className="mb-[5px] h-[30px] w-[30px] flex items-center justify-center rounded-full bg-c_F47B3D">
					<span className={'f-14-700 c_004053'}>{count}</span>
				</div>
				<h4 className={'f-18-700 c_black mb-[5px]'}>{name}</h4>
				<p className="f-16-600 c_737373">{jobTitle}</p>
			</div>
		</div>
	);
};
export default MemberGeneralAssemblyCard;
