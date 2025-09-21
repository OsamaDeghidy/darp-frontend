import React, { FC } from 'react';
import { MainSlider } from '@/src/components/ui/Slider';
import MainSearch from '@/src/components/home/slider/MainSearch';
import { IHomeMainSliderItemModel } from '@/src/models/home';
import { useDirection } from '@/src/hooks/useDirection';

interface IProps {
	data: IHomeMainSliderItemModel[];
}

export const SliderWrapper: FC<IProps> = (props) => {
	const { data } = props;
	const direction = useDirection();
	const sliderSettings = {
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		speed: 500,
		autoplaySpeed: 3000,
		cssEase: 'linear',
		rtl: direction == 'rtl',
	};

	return (
		<section className="relative">
			<MainSearch title={data?.[0]?.title || ''} />
			<MainSlider slides={data} settings={sliderSettings} />
		</section>
	);
};
export default SliderWrapper;
