import React, { FC } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';

import { useI18n } from '@/src/locales';
import { SectionTitle } from '@/src/components/ui/typography/typography';
import { NextArrow, PrevArrow } from '@/src/components/ui/icons/SliderArrow';
import { ITwitterModel } from '@/src/models/home';
import { useDirection } from '@/src/hooks/useDirection';

interface IProps {
	data: ITwitterModel;
}

const Tweets: FC<IProps> = (props) => {
	const { data } = props;

	const t = useI18n();
	const direction = useDirection();
	const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoPlay: true,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		rtl: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
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
		<section className="section ">
			<div className="container">
				<SectionTitle
					text={data.title}
					className="text-center section-title"
				/>

				<Slider className="twitter-slider relative" {...settings}>
					{data.twitterList.map((slide, index) => (
						<article
							key={index}
							className="tweet-item relative w-full min-h-[200px] h-full"
						>
							<div className="tweet-content min-h-inherit h-full flex items-center justify-center">
								{/*<div className="icon-container mb-[20px]">*/}
								{/*	<Twitter2Icon className="m-auto" />*/}
								{/*</div>*/}
								{/*<BodyText14R*/}
								{/*	text={slide.content}*/}
								{/*	className="mb-[20px]"*/}
								{/*/>*/}
								<figure className="image mx-auto relative h-[150px] w-[250px]">
									<Image
										src={slide.image.url}
										fill
										alt="Darb Logo"
										className="object-contain"
									/>
									<figcaption className="sr-only">
										Darb
									</figcaption>
								</figure>
								{/*<div className="account-title">*/}
								{/*	جمعية مسارات المشي*/}
								{/*</div>*/}
							</div>
						</article>
					))}
				</Slider>
			</div>
		</section>
	);
};

export default Tweets;
