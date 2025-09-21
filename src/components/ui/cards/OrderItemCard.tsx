import React, { FC } from 'react';
import { useI18n } from '@/src/locales';
import Image from 'next/image';
import { INextImageType } from '@/src/models/image';
import { getString } from '@/src/utilities/string';
import DeleteIcon from '@/src/components/ui/icons/DeleteIcon';
import FavoriteIcon from '@/src/components/ui/icons/FavoriteIcon';
import ItemCounter from '@/src/components/ui/ItemCounter';

export interface IOrderItemCCardModel {
	image: INextImageType;
	title: string;
	quantity: number;
	price: string;
	isEdit?: boolean;
	showCounter?: boolean;
}

interface IProps extends IOrderItemCCardModel {
	className?: string;
}

const OrderItemCard: FC<IProps> = (props) => {
	const {
		image,
		className,
		title,
		showCounter = false,
		isEdit = false,
		price,
		quantity,
	} = props;
	const t = useI18n();
	return (
		<div className={getString(className)}>
			<div
				className={
					'order-card py-[20px] px-[15px] border rounded-[10px] b-c_EDF4F2 flex items-start justify-between gap-[10px]'
				}
			>
				<div className="flex items-center gap-[15px]">
					<Image
						className={'object-cover h-full w-[120px]'}
						src={image}
						alt={''}
					/>
					<div>
						<h4 className={'f-18-700 c_004053 mb-[10px]'}>
							{title}
						</h4>
						{!isEdit && (
							<div className="flex mb-[10px]">
								<div className="flex items-center gap-[5px] p-[10px] rounded-[10px] border b-c_EDF4F2">
									<span className={'f-14-700 c_737373'}>
										{t('quantity')}
									</span>
									<span className={'f-14-700 c_004053'}>
										{quantity}
									</span>
								</div>
							</div>
						)}
						<p className={'f-18-700 c_black'}>{price}</p>
						{isEdit && (
							<div
								className={
									'flex items-center gap-[15px] mt-[20px]'
								}
							>
								<button
									className={
										'button button-text button-secondary'
									}
								>
									<FavoriteIcon />
									{t('favorite')}
								</button>
								<button
									className={
										'button button-text button-delete'
									}
								>
									<DeleteIcon />
									{t('delete')}
								</button>
							</div>
						)}
					</div>
				</div>
				{showCounter && <ItemCounter />}
			</div>
		</div>
	);
};
export default OrderItemCard;
