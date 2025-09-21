import React, { FC } from 'react';
import { useI18n } from '@/src/locales';
import { getString } from '@/src/utilities/string';
import Location3Icon from '@/src/components/ui/icons/Location3Icon';
import EditIcon from '@/src/components/ui/icons/EditIcon';
import DeleteIcon from '@/src/components/ui/icons/DeleteIcon';

export interface IAddressCardModel {
	name: string;
	address: string;
}

interface IProps extends IAddressCardModel {
	className?: string;
	readOnly?: boolean;
}

const AddressCard: FC<IProps> = (props) => {
	const { className, name, address, readOnly = true } = props;
	const t = useI18n();
	return (
		<div className={getString(className)}>
			<div
				className={
					'address-card py-[20px] px-[15px] border rounded-[10px] b-c_EDF4F2'
				}
			>
				<div className="flex items-center justify-between gap-[20px] flex-wrap">
					<div className="flex items-center gap-[15px]">
						<Location3Icon />
						<span className={'f-16-700 c_black'}>{name}</span>
						<span className={'f-14-500 c_737373'}>{address}</span>
					</div>
					{!readOnly && (
						<div className="flex items-center gap-[15px]">
							<button className={'button button-text'}>
								{t('edit')}
								<EditIcon />
							</button>
							<button
								className={'button button-text button-delete'}
							>
								{t('delete')}
								<DeleteIcon />
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
export default AddressCard;
