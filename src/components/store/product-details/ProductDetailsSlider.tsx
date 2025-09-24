import React, { FC, useEffect, useRef, useState } from 'react';
import { useI18n } from '@/src/locales';
import { useDirection } from '@/src/hooks/useDirection';
import Slider from 'react-slick';
import Image from 'next/image';

const slides = [
	{
		img: '/images/home-slider.jpg',
		alt: 'slider image example',
	},
	{
		img: '/images/trail-slide-01.jpg',
		alt: 'slider image example',
	},
	{
		img: '/images/trail-slide-02.jpg',
		alt: 'slider image example',
	},
	{
		img: '/images/trail-slide-03.jpg',
		alt: 'slider image example',
	},
	{
		img: '/images/trail-slide-04.jpg',
		alt: 'slider image example',
	},
	{
		img: '/images/trail-slide-05.jpg',
		alt: 'slider image example',
	},
	{
		img: '/images/home-slider.jpg',
		alt: 'slider image example',
	},
	{
		img: '/images/trail-slide-01.jpg',
		alt: 'slider image example',
	},
	{
		img: '/images/trail-slide-02.jpg',
		alt: 'slider image example',
	},
	{
		img: '/images/trail-slide-03.jpg',
		alt: 'slider image example',
	},
	{
		img: '/images/trail-slide-04.jpg',
		alt: 'slider image example',
	},
	{
		img: '/images/trail-slide-05.jpg',
		alt: 'slider image example',
	},
];

interface IProps {}

const ProductDetailsSlider: FC<IProps> = (props) => {
	const t = useI18n();
	const dir = useDirection();
	const [nav1, setNav1] = useState();
	const [nav2, setNav2] = useState();
	const slider1 = useRef(null);
	const slider2 = useRef(null);

	useEffect(() => {
		if (!slider1.current || !slider2.current) return;
		setNav1(slider1.current);
		setNav2(slider2.current);
	}, []);
	return (
		<div className="sliderWithThumb">
			<Slider
				className="trail-slider overflow-hidden relative"
				asNavFor={nav2}
				ref={slider1}
				speed={500}
				slidesToShow={1}
				slidesToScroll={1}
				rtl={dir == 'rtl'}
			>
				{slides &&
					slides.map((slide, index) => (
						<div
							key={index}
							className="slider-item relative w-full"
						>
							<Image
								fill={true}
								alt={slide.alt}
								src={slide.img}
								sizes="100vw"
								style={{ objectFit: 'cover' }}
							/>
						</div>
					))}
			</Slider>
			<Slider
				className="trail-slider-thumb overflow-hidden relative"
				asNavFor={nav1}
				ref={slider2}
				dots={false}
				centerMode={true}
				swipeToSlide={true}
				focusOnSelect={true}
				slidesToShow={4}
				slidesToScroll={1}
			>
				{slides &&
					slides.map((slide, index) => (
						<div
							key={index}
							className="slider-thumb relative w-full"
						>
							<Image
								fill={true}
								alt={slide.alt}
								src={slide.img}
								sizes="100vw"
								style={{ objectFit: 'cover' }}
							/>
						</div>
					))}
			</Slider>
		</div>
	);
};
export default ProductDetailsSlider;
