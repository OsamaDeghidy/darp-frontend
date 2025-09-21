import React, { useEffect } from 'react';
import CloseIcon from '@/src/components/ui/icons/CloseIcon';
import { IStatusChangeModel, StatusChangeModel } from '@/src/models/status-change';
import { Modal } from 'antd/lib';
import { useI18n } from '@/src/locales';
import Close2Icon from '@/src/components/ui/icons/Close2Icon';

interface IProps {
	openModal: IStatusChangeModel;
}

const WrongPassNumberModal: React.FC<IProps> = (props) => {
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
				<Close2Icon className={'mb-[20px]'} />

				<p className="f-24-700 c_EB0000 text-center mb-[10px]">
					{t('wrongPassNumber')}
				</p>
				<p className={'f-18-600 c_737373 mb-[30px] text-center'}>
					{t('pleaseCheckThePasswordYouEntered')}
				</p>
				<button className={'button button-orange'}>
					{t('tryAgain')}
				</button>
			</div>
		</Modal>
	);
};
export default WrongPassNumberModal;
