import React, { FC } from 'react';
import productImage01 from '@/public/images/product-01.jpeg';
import Slider from 'react-slick';
import { range } from 'lodash';
import { useDirection } from '@/src/hooks/useDirection';
import ProductCard from '@/src/components/ui/cards/ProductCard';
import { getString } from '@/src/utilities/string';
import ArrowIcon from '@/src/components/ui/icons/ArrowIcon';

interface IProps {
	className?: string;
}

const ProductSlider: FC<IProps> = (props) => {
	const { className } = props;
	const dir = useDirection();
	return (
		<div className={getString(className)}>
			<Slider
				className="custom-slider product-slider"
				dots={false}
				infinite={true}
				speed={500}
				slidesToShow={4}
				slidesToScroll={1}
				rtl={dir == 'rtl'}
				arrows={true}
				nextArrow={
					<button>
						<ArrowIcon className={'rotate-90'} />
					</button>
				}
				prevArrow={
					<button>
						<ArrowIcon className={'-rotate-90'} />
					</button>
				}
				responsive={[
					{
						breakpoint: 1280,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 3,
						},
					},
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2,
							initialSlide: 2,
						},
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						},
					},
				]}
			>
				{range(0, 10).map((slide, index) => (
					<div key={index}>
						<ProductCard
							key={index}
							className={
								'xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12'
							}
							image={productImage01}
							title={'حقيبة ظهر ( ازرق )'}
							description={
								'حقيبة ظهر من درب تسع حتي 40 لتر - مقاومة ضد الماء والحرارة'
							}
							price={'250 ريال'}
							discount={'300.00 ريال'}
						/>
					</div>
				))}
			</Slider>
		</div>
	);
};
export default ProductSlider;
