import React, { useEffect } from 'react';
import CloseIcon from '@/src/components/ui/icons/CloseIcon';
import { IStatusChangeModel, StatusChangeModel } from '@/src/models/status-change';
import { Modal } from 'antd/lib';
import { useI18n } from '@/src/locales';
import ImageLibraryCard from '@/public/images/photo-library-slider-1.jpg';

import YoutubeVideo from '@/src/components/ui/YoutubeVideo';
import { IVideosLibraryItemModel } from '@/src/models/media-center';

interface IProps {
	openModal: IStatusChangeModel;
	data: IVideosLibraryItemModel;
	onClose: () => void;
}

const VideosLibraryModal: React.FC<IProps> = (props) => {
	const { openModal = new StatusChangeModel(), data, onClose } = props;
	const t = useI18n();
	const [isModalOpen, setIsModalOpen] = React.useState(false);
	useEffect(() => {
		setIsModalOpen(openModal.value);
	}, [openModal]);
	const handleCancel = () => {
		onClose();
		setIsModalOpen(false);
	};

	return (
		<Modal
			className={'custom-modal video-library-modal'}
			open={isModalOpen}
			onCancel={handleCancel}
			footer={null}
			width={'75%'}
			closeIcon={<CloseIcon className={'fill-c_black900'} />}
			destroyOnClose={true}
		>
			<h2 className="text-center f-32-700 mb-[20px] c_white">
				{data?.title || ''}
			</h2>
			<span
				className={
					'f-16-500 c_white text-center block w-[90%] mb-[30px]'
				}
			>
				{data?.description || ''}
			</span>
			{data?.videoYoutubeLink && (
				<div className={'Video-wrapper rounded-[10px]'}>
					<YoutubeVideo
						className={'modal-video rounded-[10px]'}
						image={ImageLibraryCard.src}
						title={''}
						url={data?.videoYoutubeLink || ''}
					/>
				</div>
			)}
		</Modal>
	);
};
export default VideosLibraryModal;
