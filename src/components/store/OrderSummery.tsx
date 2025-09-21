import React, { FC } from 'react';
import { useI18n } from '@/src/locales';
import CustomBreadcrumb from '@/src/components/ui/CustomBreadcrumb';
import Link from 'next/link';
import { HRef } from '@/src/utilities/href';
import OrderSummeryCard from '@/src/components/ui/cards/OrderSummeryCard';
import CreditDebitCardIcon from '@/src/components/ui/icons/CreditDebitCardIcon';
import PaymentCard from '@/src/components/ui/cards/PaymentCard';
import VisaIcon from '@/src/components/ui/icons/VisaIcon';
import { range } from 'lodash';
import AddressCard from '@/src/components/ui/cards/AddressCard';
import OrderItemCard from '@/src/components/ui/cards/OrderItemCard';
import orderImage from '@/public/images/order.png';

interface IProps {}

const OrderSummery: FC<IProps> = (props) => {
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
							title: (
								<Link href={HRef.productCart}>{t('cart')}</Link>
							),
						},
						{
							title: (
								<Link href={HRef.orderPay}>{t('payment')}</Link>
							),
						},
						{
							title: t('confirmPayment'),
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
						<div className="rounded-[10px] border p-[25px] mb-[30px]">
							<h3 className={'f-24-700 c_004053 mb-[15px]'}>
								{t('deliveryAddress')}
							</h3>

							<AddressCard
								name={'ابراهيم محمد'}
								address={
									'2 شارع نجيب محفوظ متفرع من شارع الامل  - قصر النيل - القاهرة- مصر'
								}
							/>
						</div>
						<div className="rounded-[10px] border p-[25px]">
							<h3 className={'f-24-700 c_004053 mb-[15px]'}>
								{t('paymentMethod')}
							</h3>
							<PaymentCard
								name={'ابراهيم محمد'}
								icon={<VisaIcon />}
								mainIcon={<CreditDebitCardIcon />}
								number={'****11111'}
								type={'بطاقة ائتمان'}
								date={'11/11'}
							/>
						</div>
					</div>
					<div className="lg:col-span-4 col-span-12">
						<OrderSummeryCard
							total={'200 ريال'}
							delivery={'15 ريال'}
							finalTotal={'215 ريال'}
							link={{
								href: HRef.trackOrder,
								text: t('confirmPayment'),
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
export default OrderSummery;
