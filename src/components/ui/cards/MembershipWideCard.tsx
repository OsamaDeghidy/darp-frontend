import React, { FC } from 'react';
import Image from 'next/image';
import { INextImageType } from '@/src/models/image';
import { useI18n } from '@/src/locales';
import { getString } from '@/src/utilities/string';
import DeleteIcon from '@/src/components/ui/icons/DeleteIcon';

export interface IMembershipWideCardModel {
	image: INextImageType;
	name: string;
	description: string;
	price: string;
}

interface IProps extends IMembershipWideCardModel {
	className?: string;
}

const MembershipWideCard: FC<IProps> = (props) => {
	const { image, className, name, price, description } = props;
	const t = useI18n();
	return (
		<div className={getString(className)}>
			<div className={'membership-card border rounded-[10px] p-[20px] bg-c_white'}>
				<div className="flex items-center justify-between gap-[15px]">
					<div className={'flex items-center gap-[15px]'}>
						<div
							className={
								'flex items-center justify-center h-[8px] w-[80px] shrink-0'
							}
						>
							<div className="image w-[80px] h-[80px] relative">
								<Image
									fill
									className={'object-fill'}
									src={image}
									alt={''}
								/>
							</div>
						</div>
						<div>
							<h4 className={'f-18-700 c_004053 mb-[10px]'}>
								{name}
							</h4>
							<p className={'f-14-500 c_black'}>{description}</p>
						</div>
					</div>
					<div className={'flex flex-col items-end shrink-0'}>
						<p className={'f-16-700 c_black text-center mb-[20px]'}>
							{price + ' ' + t('SAR')}
						</p>
						<button className={'button button-text button-delete'}>
							{t('delete')}
							<DeleteIcon />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default MembershipWideCard;
