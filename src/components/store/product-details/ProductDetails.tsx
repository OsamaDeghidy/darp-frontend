import React, { FC } from 'react';
import { useI18n } from '@/src/locales';
import { useDirection } from '@/src/hooks/useDirection';
import Link from 'next/link';
import CustomBreadcrumb from '@/src/components/ui/CustomBreadcrumb';
import { HRef } from '@/src/utilities/href';
import ProductSlider from '@/src/components/store/ProductSlider';
import { Rate, Tabs, TabsProps } from 'antd/lib';
import ProductSpecification from '@/src/components/store/product-details/ProductSpecification';
import ProductDescription from '@/src/components/store/product-details/ProductDescription';
import CartIcon from '@/src/components/ui/icons/CartIcon';
import FavoriteIcon from '@/src/components/ui/icons/FavoriteIcon';
import ItemCounter from '@/src/components/ui/ItemCounter';
import Star3Icon from '@/src/components/ui/icons/Star3Icon';
import ColorSelector from '@/src/components/ui/ColorSelector';

interface IProps {}

interface ISlide {
	url: string;
	name: string;
}

const ProductDetails: FC<IProps> = (props) => {
	const t = useI18n();
	const dir = useDirection();

	const items: TabsProps['items'] = [
		{
			key: '1',
			label: t('productSpecification'),
			children: <ProductSpecification />,
		},
		{
			key: '2',
			label: t('productDescription'),
			children: <ProductDescription />,
		},
	];

	const slides: ISlide[] = [
		{
			url: '/images/home-slider.jpg',
			name: 'slider image example',
		},
		{
			url: '/images/trail-slide-01.jpg',
			name: 'slider image example',
		},
		{
			url: '/images/trail-slide-02.jpg',
			name: 'slider image example',
		},
		{
			url: '/images/trail-slide-03.jpg',
			name: 'slider image example',
		},
		{
			url: '/images/trail-slide-04.jpg',
			name: 'slider image example',
		},
		{
			url: '/images/trail-slide-05.jpg',
			name: 'slider image example',
		},
		{
			url: '/images/home-slider.jpg',
			name: 'slider image example',
		},
		{
			url: '/images/trail-slide-01.jpg',
			name: 'slider image example',
		},
		{
			url: '/images/trail-slide-02.jpg',
			name: 'slider image example',
		},
		{
			url: '/images/trail-slide-03.jpg',
			name: 'slider image example',
		},
		{
			url: '/images/trail-slide-04.jpg',
			name: 'slider image example',
		},
		{
			url: '/images/trail-slide-05.jpg',
			name: 'slider image example',
		},
	];

	const sliderSettings = {
		dots: true,
		dotsClass: 'slick-dots slick-thumb',
		// infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		rtl: true,
	};

	const thumbSetting = {
		dots: false,
		centerMode: true,
		centerPadding: '60px',
		swipeToSlide: true,
		focusOnSelect: true,
		slidesToShow: 5,
		slidesToScroll: 1,
	};

	return (
		<div>
			<div className="container">
				<CustomBreadcrumb
					className={'mb-[20px]'}
					data={[
						{
							title: <Link href={HRef.home}>{t('home')}</Link>,
						},
						{
							title: t('productDetails'),
						},
					]}
				/>
				<div className="grid grid-cols-12 gap-[24px]">
					<div className="lg:col-span-4 col-span-12">
						{/*<SliderWithThumb
							slides={slides}
							settings={sliderSettings}
							thumbSetting={thumbSetting}
						/>*/}
					</div>
					<div className="lg:col-span-8 col-span-12">
						<h3 className={'f-24-700 c_004053 mb-[15px]'}>
							حقيبة ظهر ( ازرق ) من درب - Hiking 102 Backpack
						</h3>
						<div className="flex items-center gap-[10px] mb-[15px]">
							<Rate
								className={'custom-rate'}
								character={<Star3Icon />}
								defaultValue={4}
							/>
							<p className={'f-14-500 c_black'}>
								15 {t('ratings')}
							</p>
						</div>
						<p className={'f-16-500 c_2D2D2D mb-[20px]'}>
							هناك حقيقة مثبتة منذ زمن محتوى اعلي المقروء لصفحة ما
							سلي التركيز على نحو الشكل الخارجي وكأنها نص مقروء.
							العديد من برامح النشر المكتبي الشكل الخارجي للنص
							هناك حقيقة مثبتة منذ زمن محتوى اعلي االمكتبي الشكل
							الخارجي للنص هناك حقيقة مثبتة منذ زمن محتوى اعلي
							المقروء لصفحة ما سلي التركيز على وكأنها نص مقروء.
							العديد من برامح النشر المكتبي الشكل الخارجي للنص
						</p>
						<div className="flex items-center gap-[10px] flex-wrap mb-[25px]">
							<span className={'f-24-700 c_black'}>
								250.00 ريال
							</span>
							<span className={'f-18-600 c_737373 line-through'}>
								400.00 ريال
							</span>
						</div>
						<p className={'f-18-600 c_black mb-[10px]'}>
							{t('color')}
						</p>
						<ColorSelector
							className={'mb-[20px]'}
							data={[
								{
									color: '#00A8DB',
									value: '#00A8DB',
								},
								{
									color: '#EF5308',
									value: '#EF5308',
								},
								{
									color: '#9FC8D9',
									value: '#9FC8D9',
								},
								{
									color: '#AF4424',
									value: '#AF4424',
								},
								{
									color: '#31AA52',
									value: '#31AA52',
								},
							]}
						/>
						<p className={'f-18-600 c_black mb-[10px]'}>
							{t('quantity')}
						</p>
						<ItemCounter className={'mb-[20px]'} />
						<div className="flex items-center gap-[15px]">
							<button className={'button button-orange'}>
								<CartIcon className={'scale-x-[-1]'} />
								{t('addToCart')}
							</button>

							<button className={'button button-outline'}>
								<FavoriteIcon />
							</button>
						</div>
					</div>
				</div>
				<div className="p-[25px] border b-c_EDF4F2 mb-[60px] rounded-[10px]">
					<Tabs
						centered={false}
						className={'product-details-tabs'}
						type={'line'}
						items={items}
					/>
				</div>
				<h2 className={'f-32-700 c_004053 mb-[30px]'}>
					{t('youMayAlsoLike')}
				</h2>
				<ProductSlider className={'mb-[60px]'} />
			</div>
		</div>
	);
};
export default ProductDetails;
