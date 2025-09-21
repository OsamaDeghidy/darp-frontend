import { FC } from 'react';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface IProps {
	pageName?: string;
	image: string | StaticImport;
}

const PageHeroSection: FC<IProps> = (props) => {
	const { pageName, image } = props;

	return (
		<section className={'page-hero-section relative'}>
			<Image
				className={'page-hero-image'}
				src={image}
				alt={pageName ? pageName : ''}
				fill={true}
				sizes="100vw"
			/>
			<div className="container relative z-3 h-full">
				{/*{pageName && (*/}
				{/*	<div className="page-hero-content">*/}
				{/*		<h2 className={'text-center'}>{pageName}</h2>*/}
				{/*	</div>*/}
				{/*)}*/}
			</div>
		</section>
	);
};
export default PageHeroSection;
