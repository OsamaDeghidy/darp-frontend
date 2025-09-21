import { FC } from 'react';
import Image from 'next/image';
import ImageLibraryCard from '@/public/images/photo-library-1.jpg';
import DarbIcon from '@/public/images/icons/media-darb-icon.svg';

interface IProps {
	handleClick?: () => void;
	title: string;
	href: string;
}

const MediaVideoCard: FC<IProps> = (props) => {
	const { handleClick, title, href } = props;
	return (
		<div
			className="media-video-card rounded-[10px] border b-c_F1F2EC"
			onClick={handleClick}
		>
			<div className="image h-[220px]">
				<Image
					fill
					className={'h-full w-full object-cover rounded-t-[10px]'}
					src={ImageLibraryCard.src}
					alt={''}
				/>
			</div>
			<div className="title flex items-center gap-[5px] p-[15px]">
				<Image src={DarbIcon.src} width={30} height={30} alt={''} />
				<h3 className="c_black f-18-700 ">{title}</h3>
			</div>
		</div>
	);
};

export default MediaVideoCard;
