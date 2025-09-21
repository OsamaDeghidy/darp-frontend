import React, { FC } from 'react';
import { useI18n } from '@/src/locales';
import CustomBreadcrumb from '@/src/components/ui/CustomBreadcrumb';
import Link from 'next/link';
import { HRef } from '@/src/utilities/href';
import OrderSummeryCard from '@/src/components/ui/cards/OrderSummeryCard';
import { range } from 'lodash';
import OrderItemCard from '@/src/components/ui/cards/OrderItemCard';
import orderImage from '@/public/images/order.png';
import ProductSlider from '@/src/components/store/ProductSlider';

interface IProps {}

const ProductCart: FC<IProps> = (props) => {
	const t = useI18n();
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
							title: (
								<Link href={HRef.productDetails}>
									{t('productDetails')}
								</Link>
							),
						},
						{
							title: t('cart'),
						},
					]}
				/>
				<div className="grid grid-cols-12 gap-[24px] mb-[60px]">
					<div className="lg:col-span-8 col-span-12">
						<div className="rounded-[10px] border p-[25px] mb-[30px]">
							<div className="flex items-center gap-[20px] justify-between flex-wrap mb-[20px]">
								<h2 className={'f-24-700 c_004053'}>
									{t('products')}
								</h2>
								<p className={'f-18-500 c_004053'}>
									{t('theCount')} (2)
								</p>
							</div>
							<div className="flex flex-col gap-[20px]">
								{range(0, 2).map(
									(orderItem, orderItemIndex) => (
										<OrderItemCard
											key={orderItemIndex}
											isEdit={true}
											showCounter={true}
											image={orderImage}
											title={
												'حقيبة ظهر ( ازرق ) من درب - Hiking 102  Backpack'
											}
											quantity={1}
											price={'250.00 ريال'}
										/>
									),
								)}
							</div>
						</div>
					</div>
					<div className="lg:col-span-4 col-span-12">
						<OrderSummeryCard
							total={'200 ريال'}
							delivery={'15 ريال'}
							finalTotal={'215 ريال'}
							link={{
								href: HRef.orderPay,
								text: t('continueToPay'),
							}}
						/>
					</div>
				</div>

				<h2 className={'f-32-700 c_004053 mb-[30px]'}>
					{t('youMayAlsoLike')}
				</h2>
				<ProductSlider className={'mb-[60px]'} />
			</div>
		</div>
	);
};
export default ProductCart;
