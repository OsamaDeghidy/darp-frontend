import React, { useEffect } from 'react';
import CloseIcon from '@/src/components/ui/icons/CloseIcon';
import { IStatusChangeModel, StatusChangeModel } from '@/src/models/status-change';
import { Modal } from 'antd/lib';
import SuccessIcon from '@/src/components/ui/icons/SuccessIcon';
import { useI18n } from '@/src/locales';
import Link from 'next/link';
import { HRef } from '@/src/utilities/href';

interface IProps {
	openModal: IStatusChangeModel;
}

const PaymentSuccessModal: React.FC<IProps> = (props) => {
	const { openModal = new StatusChangeModel() } = props;
	const t = useI18n();
	const [isModalOpen, setIsModalOpen] = React.useState(false);
	useEffect(() => {
		setIsModalOpen(openModal.value);
	}, [openModal]);
	const handleCancel = () => {
		setIsModalOpen(false);
	};
	return (
		<Modal
			className={'custom-modal'}
			open={isModalOpen}
			onCancel={handleCancel}
			footer={null}
			width={400}
			closeIcon={<CloseIcon className={'fill-c_black900'} />}
			destroyOnClose={true}
		>
			<div className={'flex flex-col items-center justify-center'}>
				<SuccessIcon className={'mb-[20px]'} />

				<p className="f-24-700 c_004053 text-center mb-[30px]">
					{t('paymentHasBeenCompletedSuccessfully')}
				</p>
				<Link href={HRef.home} className={'button button-orange'}>
					{t('goToTheHomePage')}
				</Link>
			</div>
		</Modal>
	);
};
export default PaymentSuccessModal;
