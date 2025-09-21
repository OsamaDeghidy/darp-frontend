import React, { FC, ReactNode } from 'react';
import { useI18n } from '@/src/locales';
import { getString } from '@/src/utilities/string';
import DeleteIcon from '@/src/components/ui/icons/DeleteIcon';

export interface IPaymentCardModel {
	name: string;
	mainIcon: ReactNode;
	icon: ReactNode;
	type: string;
	number: string;
	date: string;
	showDelete?: boolean;
}

interface IProps extends IPaymentCardModel {
	className?: string;
}

const PaymentCard: FC<IProps> = (props) => {
	const {
		className,
		name,
		icon,
		mainIcon,
		type,
		date,
		number,
		showDelete = false,
	} = props;
	const t = useI18n();
	return (
		<div className={getString(className)}>
			<div
				className={
					'payment-card py-[20px] px-[15px] border rounded-[10px] b-c_EDF4F2'
				}
			>
				<div className="flex items-center justify-between gap-[20px] flex-wrap">
					<div className="flex items-center gap-[15px]">
						{mainIcon}
						<div className={'flex flex-col gap-[2px]'}>
							<span className={'f-16-500 c_black'}>{type}</span>
							<span className={'f-16-500 c_535353'}>{name}</span>
						</div>
					</div>
					<span className={'f-16-500 c_black'}>{number}</span>
					<span className={'f-16-500 c_black'}>{date}</span>
					{icon}
					{showDelete && (
						<button className={'button button-text button-delete'}>
							{t('delete')}
							<DeleteIcon />
						</button>
					)}
				</div>
			</div>
		</div>
	);
};
export default PaymentCard;
