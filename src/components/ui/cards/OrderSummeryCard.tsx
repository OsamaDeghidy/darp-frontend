import React, { FC } from 'react';
import { useI18n } from '@/src/locales';
import { getString } from '@/src/utilities/string';
import Link from 'next/link';
import { ILinkModel } from '@/src/models/link';
import { IButtonModel } from '@/src/models/button';

export interface IOrderSummeryCardModel {
	total: string;
	finalTotal: string;
	duration?: string;
	delivery?: string;
	link?: ILinkModel;
	button?: IButtonModel;
	membershipId?: number;
}

interface IProps extends IOrderSummeryCardModel {
	className?: string;
}

const OrderSummeryCard: FC<IProps> = (props) => {
	const {
		membershipId,
		className,
		delivery,
		total,
		link,
		button,
		duration,
		finalTotal,
	} = props;
	const t = useI18n();

	return (
		<div className={getString(className) + 'bg-c_white'}>
			<div className={'border rounded-[10px] py-[20px] px-[15px]'}>
				<h4 className={'f-16-700 c_004053 mb-[10px]'}>
					{t('orderSummary')}
				</h4>
				<hr className={'mb-[15px] b-c_F1F2EC'} />
				<div className="flex items-center justify-between gap-[10px] flex-wrap mb-[10px]">
					<span className={'f-16-500 c_black'}>{t('total')}</span>
					<span className={'f-16-500 c_black'}>{total}</span>
				</div>
				{duration && (
					<div className="flex items-center justify-between gap-[10px] flex-wrap mt-[10px]">
						<span className={'f-16-500 c_black'}>
							{t('duration')}
						</span>
						<span className={'f-16-500 c_black'}>{duration}</span>
					</div>
				)}
				{delivery && (
					<div className="flex items-center justify-between gap-[10px] flex-wrap mt-[10px]">
						<span className={'f-16-500 c_black'}>
							{t('delivery')}
						</span>
						<span className={'f-16-500 c_black'}>{delivery}</span>
					</div>
				)}
				<hr className={'mb-[15px] mt-[10px] b-c_F1F2EC'} />
				<div className="flex items-center justify-between gap-[10px] flex-wrap mb-[30px]">
					<span className={'f-16-700 c_004053'}>{t('total')}</span>
					<span className={'f-16-700 c_004053'}>{finalTotal}</span>
				</div>
				{button && (
					<button
						type={'button'}
						className={'button button-secondary w-full'}
						onClick={() => {
							button.onClick();
						}}
					>
						{button.text}
					</button>
				)}
				{link && (
					<Link
						aria-label={link.text}
						href={link.href + '?id=' + membershipId}
						className={'button button-secondary w-full'}
					>
						{link.text}
					</Link>
				)}
			</div>
		</div>
	);
};
export default OrderSummeryCard;
