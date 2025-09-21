import React, { FC, useState } from 'react';
import { useI18n } from '@/src/locales';
import AddIcon from '@/src/components/ui/icons/AddIcon';
import { range } from 'lodash';
import AddressCard from '@/src/components/ui/cards/AddressCard';
import AddAddressModal from '@/src/components/ui/modals/AddAddressModal';
import {
	IStatusChangeModel,
	StatusChangeModel,
} from '@/src/models/status-change';

interface IProps {}

const Addresses: FC<IProps> = (props) => {
	const t = useI18n();
	const [addAddressModal, setAddAddressModal] = useState<IStatusChangeModel>(
		new StatusChangeModel(),
	);
	return (
		<div>
			<div className="flex items-center gap-[20px] justify-between mb-[30px]">
				<h3 className={'mb-[30px] f-24-700 c_004053'}>
					{t('yourAddresses')}
				</h3>
				<button
					className={'button button-orange'}
					onClick={() => {
						setAddAddressModal({
							statusChange: !addAddressModal.statusChange,
							value: true,
						});
					}}
				>
					<AddIcon />
					{t('addANewAddress')}
				</button>
			</div>
			<div
				className={
					'p-[25px] border b-c_EDF4F2 rounded-[10px] mb-[60px]'
				}
			>
				<div className="flex flex-col gap-[20px]">
					{range(0, 2).map((orderItem, orderItemIndex) => (
						<AddressCard
							key={orderItemIndex}
							name={'ابراهيم محمد'}
							address={
								'2 شارع نجيب محفوظ متفرع من شارع الامل  - قصر النيل - القاهرة- مصر'
							}
							readOnly={false}
						/>
					))}
				</div>
			</div>
			<AddAddressModal openModal={addAddressModal} />
		</div>
	);
};
export default Addresses;
