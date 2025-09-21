import React, { useEffect } from 'react';
import CloseIcon from '@/src/components/ui/icons/CloseIcon';
import {
	IStatusChangeModel,
	StatusChangeModel,
} from '@/src/models/status-change';
import { Modal } from 'antd/lib';
import { useI18n } from '@/src/locales';
import CustomButton from '@/src/components/ui/buttons/CustomButton';
import NotAuthIcon from '../icons/NotAuthIcon';
import Link from 'next/link';
import { HRef } from '@/src/utilities/href';

interface IProps {
	openModal: IStatusChangeModel;
}

const NotAuthModal: React.FC<IProps> = (props) => {
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
		<>
			<Modal
				className={'custom-modal'}
				open={isModalOpen}
				onCancel={handleCancel}
				footer={null}
				width={600}
				closeIcon={<CloseIcon className={'fill-c_black900'} />}
				destroyOnClose={true}
			>
				<div className="flex items-center justify-center flex-col">
					<div>
						<NotAuthIcon />
					</div>
					<h3 className={'f-24-700 c_004053 mb-[20px]'}>
						{t('mustLogIn')}
					</h3>
					<p className={'f-16-500 text-center mb-[20px] c_2D2D2D'}>
						{t('biomustLogIn')}
					</p>
					<div className="flex items-center justify-center  gap-[15px] w-full">
						<Link href={HRef.login} className="w-full">
							<CustomButton
								type={'submit'}
								className={'button-secondary w-full'}
								text={t('login')}
							/>
						</Link>
					</div>
				</div>
			</Modal>
		</>
	);
};
export default NotAuthModal;
