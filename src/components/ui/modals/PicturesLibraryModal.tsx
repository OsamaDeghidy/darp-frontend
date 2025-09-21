import React, { useEffect, useState } from 'react';
import CloseIcon from '@/src/components/ui/icons/CloseIcon';
import { IStatusChangeModel, StatusChangeModel } from '@/src/models/status-change';
import { Modal } from 'antd/lib';
import { useI18n } from '@/src/locales';
import Slider from 'react-slick';
import uuid4 from 'uuid4';
import { NextArrow, PrevArrow } from '@/src/components/ui/icons/ModalSliderArrow';
import { IPhotosLibraryItemModel } from '@/src/models/media-center';

interface IProps {
	openModal: IStatusChangeModel;
	data: IPhotosLibraryItemModel;
	onClose: () => void;
}

const PicturesLibraryModal: React.FC<IProps> = (props) => {
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

	const [slider1, setSlider1] = useState<Slider | undefined>();
	const [slider2, setSlider2] = useState<Slider | undefined>();

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoPlay: true,
		rtl: true,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		asNavFor: slider2,
	};
	const settings2 = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 6,
		slidesToScroll: 1,
		autoPlay: true,
		rtl: true,
		asNavFor: slider1,
		centerMode: true,
		focusOnSelect: true,
		draggable: false,
		arrows: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<Modal
			className={'custom-modal Pictures-library-modal'}
			open={isModalOpen}
			onCancel={handleCancel}
			footer={null}
			width={'75%'}
			closeIcon={<CloseIcon className={'fill-c_black900'} />}
			destroyOnClose={true}
		>
			<h2 className="text-center f-32-700 mb-[40px] c_white">
				{data.title}
			</h2>
			<div className={'Pictures-library-sliders'}>
				<div className="large-slider-wrapper">
					<Slider
						{...settings}
						ref={(slider: Slider) => setSlider1(slider)}
					>
						{data.images.map((item, index) => (
							<div
								key={uuid4()}
								className="large-slider h-[500px] rounded-[10px]"
							>
								<img
									className={
										'w-full object-cover rounded-[10px]'
									}
									style={{
										height: '100%',
										width: '100%',
									}}
									src={item.url}
									alt={''}
								/>
							</div>
						))}
					</Slider>
				</div>
				<div className="thumbnails">
					<Slider
						{...settings2}
						ref={(slider: Slider) => setSlider2(slider)}
					>
						{data.images.map((item, index) => (
							<div key={uuid4()} className="">
								<div className="slide h-[100px] mx-[12px] gap-[24px]">
									<img
										className={
											'h-full w-full object-cover rounded-[10px]'
										}
										src={item.url}
										alt={''}
									/>
								</div>
							</div>
						))}
					</Slider>
				</div>
			</div>
		</Modal>
	);
};
export default PicturesLibraryModal;
