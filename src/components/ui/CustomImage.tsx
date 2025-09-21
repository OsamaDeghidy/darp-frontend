import { FC } from 'react';
import Image, { StaticImageData } from 'next/image';
import { getString } from '@/src/utilities/string';

interface IProps {
	src: string | StaticImageData;
	alt?: string;
	className?: string;
	imageClassName?: string;
}

const CustomImage: FC<IProps> = (props) => {
	const { src, className, imageClassName, alt = '' } = props;
	return (
		<div className={'relative ' + getString(className)}>
			<Image
				fill
				src={src}
				alt={alt}
				className={getString(imageClassName)}
				loading='lazy'
				loader={({ src }) => src}
			/>
		</div>
	);
};
export default CustomImage;
