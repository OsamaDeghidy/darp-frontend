import React, { FC } from 'react';
import ImageLibraryCard from '@/public/images/photo-library-1.jpg';
import VideoIcon from '@/src/components/ui/icons/VideoIcon';
import { IVideosLibraryItemModel } from '@/src/models/media-center';
import Image from 'next/image';

interface IProps {
	handleClick?: () => void;
	data: IVideosLibraryItemModel;
}

const VideoLibraryCard: FC<IProps> = (props) => {
	const { handleClick, data } = props;

	return (
		<div
			className="picture-library__card rounded-[10px]"
			style={{
				boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.10)',
				cursor: 'pointer',
			}}
			onClick={handleClick}
		>
			<div className="images h-[266px] relative rounded-[10px]">
				{/*<YoutubeVideo*/}
				{/*	stop={true}*/}
				{/*	className={'modal-video rounded-[10px]'}*/}
				{/*	image={ImageLibraryCard.src}*/}
				{/*	title={''}*/}
				{/*	url={data.videoYoutubeLink}*/}
				{/*/>*/}
				<Image src={ImageLibraryCard.src} alt={''} fill />
			</div>
			<div className="title flex items-center gap-[8px] justify-center pt-[15px] pb-[20px]">
				<VideoIcon width={20} height={15} className="fill-c_004053" />
				<h2 className="c_004053 f-18-600 ">{data.title}</h2>
			</div>
		</div>
	);
};

export default VideoLibraryCard;
