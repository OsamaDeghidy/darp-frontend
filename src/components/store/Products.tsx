import React, { FC } from 'react';
import { useI18n } from '@/src/locales';
import productImage01 from '@/public/images/product-01.jpeg';
import productImage02 from '@/public/images/product-02.jpeg';
import Slider from 'react-slick';
import { range } from 'lodash';
import Image from 'next/image';
import membershipImage from '@/public/images/membership.jpeg';
import { useDirection } from '@/src/hooks/useDirection';
import Filter2Icon from '@/src/components/ui/icons/Filter2Icon';
import Sort2Icon from '@/src/components/ui/icons/Sort2Icon';
import Link from 'next/link';
import TabsFilter from '@/src/components/ui/TabsFilter';
import ProductCard from '@/src/components/ui/cards/ProductCard';

interface IProps {}

const Products: FC<IProps> = (props) => {
	const t = useI18n();
	const dir = useDirection();
	const productCards = [
		{
			image: productImage01,
			text: t('youCanNowGetHickingToolsFromOnePlace'),
		},
		{
			image: productImage02,
			text: t('enjoyYourTripWithDarbStoreWhichProvidesAllHikingClothes'),
		},
	];
	return (
		<div>
			<Slider
				className="custom-slider mb-[60px]"
				dots={true}
				infinite={true}
				speed={500}
				slidesToShow={1}
				slidesToScroll={1}
				rtl={dir == 'rtl'}
				arrows={false}
			>
				{range(0, 3).map((slide, index) => (
					<div key={index} className="slide-overlay">
						<Image
							alt={''}
							src={membershipImage}
							className={'w-full h-[600px] object-cover'}
						/>
						<p
							className={
								'absolute-center f-40-700 c_white text-center z-3'
							}
						>
							يمكنك الان الحصول علي ادوات الهيكنج من مكان واحد
						</p>
					</div>
				))}
			</Slider>
			<div className="container">
				<h2 className={'f-32-700 c_004053 mb-[30px]'}>
					{t('ourProducts')}
				</h2>
				<div className="flex items-center gap-[20px] justify-between flex-wrap mb-[30px]">
					<TabsFilter
						onChange={(value) => {}}
						data={[
							{
								label: t('allProducts'),
								value: undefined,
							},
							{
								label: t('shirts'),
								value: 1,
							},
							{
								label: t('bags'),
								value: 2,
							},
							{
								label: t('hats'),
								value: 3,
							},
							{
								label: t('shoes'),
								value: 4,
							},
							{
								label: t('climbingTools'),
								value: 5,
							},
						]}
					/>
					<div className="flex items-center gap-[10px]">
						<button
							className={'button button-outline button-small'}
						>
							<Filter2Icon />
						</button>
						<button
							className={'button button-outline button-small'}
						>
							<Sort2Icon />
						</button>
					</div>
				</div>
				<div className="grid grid-cols-12 gap-[24px] mb-[30px]">
					{range(0, 8).map((item, index) => (
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
					))}
				</div>
				<div className="flex justify-center mb-[60px]">
					<Link href={'#'} className={'button button-orange'}>
						{t('viewAll')}
					</Link>
				</div>
				<div className="grid grid-cols-12 gap-[24px] mb-[60px]">
					{productCards.map((item, index) => (
						<div
							key={index}
							className={'lg:col-span-6 col-span-12'}
						>
							<div className={'bg-after'}>
								<Image
									src={item.image}
									alt={''}
									className={'absolute w-full h-full z-0'}
								/>
								<div
									className={
										'flex flex-col items-center justify-center relative z-3 min-h-[370px]'
									}
								>
									<p
										className={
											'f-24-700 c_white text-center mb-[25px]'
										}
									>
										{item.text}
									</p>
									<Link
										href={'#'}
										className={'button button-orange'}
									>
										{t('findOutMore')}
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			{/*			<HomeNews />*/}
		</div>
	);
};
export default Products;
