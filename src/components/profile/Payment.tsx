import React, { FC, useState } from 'react';
import { useI18n } from '@/src/locales';
import AddIcon from '@/src/components/ui/icons/AddIcon';
import { range } from 'lodash';
import PaymentCard from '@/src/components/ui/cards/PaymentCard';
import VisaIcon from '@/src/components/ui/icons/VisaIcon';
import CreditDebitCardIcon from '@/src/components/ui/icons/CreditDebitCardIcon';
import AddCardModal from '@/src/components/ui/modals/AddCardModal';
import {
	IStatusChangeModel,
	StatusChangeModel,
} from '@/src/models/status-change';

interface IProps {}

const Payment: FC<IProps> = (props) => {
	const t = useI18n();
	const [addCardModal, setAddCardModal] = useState<IStatusChangeModel>(
		new StatusChangeModel(),
	);
	return (
		<div>
			<div className="flex items-center gap-[20px] justify-between mb-[30px]">
				<h3 className={'mb-[30px] f-24-700 c_004053'}>
					{t('yourPayment')}
				</h3>
				<button
					className={'button button-orange'}
					onClick={() => {
						setAddCardModal({
							statusChange: !addCardModal.statusChange,
							value: true,
						});
					}}
				>
					<AddIcon />
					{t('addANewCard')}
				</button>
			</div>
			<div
				className={
					'p-[25px] border b-c_EDF4F2 rounded-[10px] mb-[60px]'
				}
			>
				<div className="flex flex-col gap-[20px]">
					{range(0, 2).map((orderItem, orderItemIndex) => (
						<PaymentCard
							key={orderItemIndex}
							name={'ابراهيم محمد'}
							icon={<VisaIcon />}
							mainIcon={<CreditDebitCardIcon />}
							number={'****11111'}
							type={'بطاقة ائتمان'}
							date={'11/11'}
							showDelete={true}
						/>
					))}
				</div>
			</div>
			<AddCardModal openModal={addCardModal} />
		</div>
	);
};
export default Payment;
