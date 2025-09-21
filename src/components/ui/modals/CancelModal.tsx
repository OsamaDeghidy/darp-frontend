import React, { useEffect } from 'react';
import CloseIcon from '@/src/components/ui/icons/CloseIcon';
import { IStatusChangeModel, StatusChangeModel } from '@/src/models/status-change';
import { Modal, notification } from 'antd/lib';
import { useI18n } from '@/src/locales';
import { useCancelDonationMutation, useCancelSubscriptionMutation } from '@/src/store/RTKQuery/profile/profileApi';
import Close2Icon from '@/src/components/ui/icons/Close2Icon';

interface IProps {
	openModal: IStatusChangeModel;
	title: string;
	memberShip: boolean;
	id?: number;
}

const CancelModal: React.FC<IProps> = (props) => {
	const {
		openModal = new StatusChangeModel(),
		title,
		memberShip,
		id,
	} = props;
	const t = useI18n();
	const [isModalOpen, setIsModalOpen] = React.useState(false);
	const [cancelSubscription, cancelSubscriptionResult] =
		useCancelSubscriptionMutation();
	const [cancelDonation, cancelDonationResult] = useCancelDonationMutation();

	useEffect(() => {
		setIsModalOpen(openModal.value);
	}, [openModal]);
	const handleCancel = () => {
		setIsModalOpen(false);
	};

	useEffect(() => {
		if (cancelSubscriptionResult.isSuccess) {
			notification.success({
				message: cancelSubscriptionResult.data.message,
			});
			handleCancel();
		}
	}, [cancelSubscriptionResult.isSuccess]);

	useEffect(() => {
		if (cancelDonationResult.isSuccess) {
			notification.success({
				message: cancelDonationResult.data.message,
			});
			handleCancel();
		}
	}, [cancelDonationResult.isSuccess]);

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
				<Close2Icon className={'mb-[20px]'} />

				<p className="f-24-700 c_004053 text-center mb-[30px]">
					{t('sureToCancel')} {title} {t('questionMark')}
				</p>

				<div className="flex items-center gap-[15px] w-full">
					<button
						className={'button button-warning w-full'}
						onClick={() => {
							if (memberShip) {
								cancelSubscription();
							} else {
								if (id) {
									cancelDonation({ id: id });
								}
							}
						}}
					>
						{t('yes')}
					</button>
					<button
						className={'button button-outline w-full'}
						onClick={handleCancel}
					>
						{t('no')}
					</button>
				</div>
			</div>
		</Modal>
	);
};
export default CancelModal;
