import { FC } from 'react';
import Image from 'next/image';
import PDFIcon from '@/public/images/icons/pdf-icon.svg';
import Link from 'next/link';

interface IProps {
	href: string;
	title: string;
}

const MediaPDFCard: FC<IProps> = (props) => {
	const { href, title } = props;
	return (
		<Link download href={href} target="_blank">
			<div className="media-pdf-card rounded-[10px] border b-c_F1F2EC p-[20px]">
				<div className="image h-[200px] flex items-center justify-center rounded-[5px] bg-c_E5252A0D">
					<Image
						width={100}
						height={100}
						className={'object-cover rounded-t-[10px]'}
						src={PDFIcon.src}
						alt={''}
					/>
				</div>
				<div className="title flex flex-col gap-[10px] p-[15px] pb-0">
					<h3 className="c_black f-18-700">{title}</h3>
					<span className="size f-16-600 c_C4C4C4">205.5 KP</span>
				</div>
			</div>
		</Link>
	);
};

export default MediaPDFCard;
