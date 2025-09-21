import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import { IHomeMainSliderItemModel } from '@/src/models/home';

interface ISliderSettings {
	dots?: boolean;
	infinite?: boolean;
	speed?: number;
	slidesToShow: number;
	slidesToScroll: number;
	rtl?: boolean;
	asNavFor?: any;
	focusOnSelect?: boolean;
}

interface ISlider {
	slides: IHomeMainSliderItemModel[];
	settings: ISliderSettings;
	thumbSetting?: ISliderSettings;
}

export const MainSlider: React.FC<ISlider> = (props) => {
	const { slides, settings } = props;
	return (
		<Slider className="main-slider relative overflow-hidden" {...settings}>
			{slides.map((slide, index) => (
				<div key={index} className="slider-item relative w-full">
					<figure>
						<Image
							fill={true}
							alt={slide.title}
							src={slide.image.url}
							sizes="100vw"
							objectFit="cover"
						/>
						<figcaption className="sr-only">
							{slide.title}
						</figcaption>
					</figure>
				</div>
			))}
		</Slider>
	);
};

export const SliderWithThumb: React.FC<ISlider> = ({
	settings,
	thumbSetting,
	slides,
}) => {
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
				className="trail-slider relative overflow-hidden"
				{...settings}
				asNavFor={nav2}
				ref={slider1}
			>
				{slides &&
					slides.map((slide, index) => (
						<div
							key={index}
							className="slider-item relative w-full"
						>
							<Image
								fill={true}
								alt={slide.title}
								src={slide.image.url}
								sizes="100vw"
								objectFit="cover"
							/>
						</div>
					))}
			</Slider>
			<Slider
				className="trail-slider-thumb overflow-hidden relative"
				{...thumbSetting}
				asNavFor={nav1}
				ref={slider2}
			>
				{slides &&
					slides.map((slide, index) => (
						<div
							key={index}
							className="slider-thumb relative w-full"
						>
							<Image
								fill={true}
								alt={slide.title}
								src={slide.image.url}
								sizes="100vw"
								objectFit="cover"
							/>
						</div>
					))}
			</Slider>
		</div>
	);
};
