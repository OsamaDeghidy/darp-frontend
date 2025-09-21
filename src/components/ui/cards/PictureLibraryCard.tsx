import { FC } from 'react';
import CameraIcon from '@/src/components/ui/icons/CameraIcon';
import Image from 'next/image';
import { IPhotosLibraryItemModel } from '@/src/models/media-center';

interface IProps {
	handleClick?: () => void;
	data: IPhotosLibraryItemModel;
}

const PictureLibraryCard: FC<IProps> = (props) => {
	const { data, handleClick } = props;
	return (
		<div
			className="picture-library__card rounded-[10px] p-[25px] pt-[50px]"
			style={{
				boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.10)',
				cursor: 'pointer',
			}}
			onClick={handleClick}
		>
			<div className="images h-[206px] relative mb-[55px]">
				{/*{data.images.map((item, index) => (*/}
				{/*	<Image*/}
				{/*		key={index}*/}
				{/*		fill*/}
				{/*		className={*/}
				{/*			'h-full w-full object-cover rounded-[10px] image-1 z-3'*/}
				{/*		}*/}
				{/*		src={item.url}*/}
				{/*		alt={''}*/}
				{/*	/>*/}
				{/*))}*/}
				<Image
					fill
					className={
						'h-full w-full object-cover rounded-[10px] image-1 z-3'
					}
					src={data.images[0].url}
					alt={''}
				/>
				<Image
					fill
					className={
						'h-full w-full object-cover rounded-[10px] image-2 rotate-[-17.22deg] z-2 scale-x-[0.8] scale-y-[0.9]'
					}
					src={data.images[1].url}
					alt={''}
				/>
				<Image
					fill
					className={
						'h-full w-full object-cover rounded-[10px] image-3 rotate-[17.22deg] z-1 scale-x-[0.8] scale-y-[0.9]'
					}
					src={data.images[2].url}
					alt={''}
				/>
			</div>
			<div className="title flex items-center gap-[8px] justify-center">
				<CameraIcon width={20} height={18} className="fill-c_004053" />
				<h2 className="c_004053 f-18-600 ">{data.title}</h2>
			</div>
		</div>
	);
};

export default PictureLibraryCard;
