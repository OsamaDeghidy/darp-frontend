import React, { useEffect } from 'react';
import CloseIcon from '@/src/components/ui/icons/CloseIcon';
import { IStatusChangeModel, StatusChangeModel } from '@/src/models/status-change';
import { Modal } from 'antd/lib';
import { IMemberCardModel } from '@/src/components/ui/cards/MemberCard';
import Image from 'next/image';

interface IProps {
	openModal: IStatusChangeModel;
	data: IMemberCardModel;
}

const MemberDetailsModal: React.FC<IProps> = (props) => {
	const { openModal = new StatusChangeModel(), data } = props;
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
			width={600}
			closeIcon={<CloseIcon className={'fill-c_black900'} />}
			destroyOnClose={true}
		>
			<div className={'flex items-start gap-[15px]'}>
				<div className="image-container min-h-[230px] flex-[0_0_210px] max-w-[210px] h-full relative">
					<Image
						className={
							' object-cover bg-c_9AD6CC rounded-[10px]'
						}
						sizes={'100vw'}
						fill={true}
						src={data.image}
						alt={data.name}
					/>
				</div>
				
				<div className={''}>
					<h2 className={'f-24-700 c_004053 mb-[10px]'}>
						{data.name}
					</h2>
					<p className="f-18-700 c_737373 mb-[10px]">
						{data.jobTitle}
					</p>
					<p className="f-14-500 c_black">{data.description}</p>
				</div>
			</div>
		</Modal>
	);
};
export default MemberDetailsModal;
