import React from 'react';
import Check2Icon from '@/src/components/ui/icons/Check2Icon';
import {
	BodyText14R,
	BodyText16R,
	DetailsTitle,
} from '@/src/components/ui/typography/typography';
import { useI18n } from '@/src/locales';
import OrderItemCard from '@/src/components/ui/cards/OrderItemCard';
import orderImage from '@/public/images/order.png';
import { range } from 'lodash';
import { HRef } from '@/src/utilities/href';
import Link from 'next/link';

const TrackOrder = () => {
	const t = useI18n();

	return (
		<section className="section">
			<div className="container">
				<div className="order-progress flex justify-center items-center relative md:mx-[90px]">
					<div className="progress-item flex flex-col active first pt-[5px]">
						<div className="icon-container flex justify-center items-center relative mx-[5px]">
							<Check2Icon />
						</div>
						<div className="progress-content mt-[15px]">
							<BodyText16R text={t('orderPlaced')} />
							<BodyText14R text="15/2" className="mt-[5px]" />
						</div>
					</div>
					<div className="progress-item flex flex-col active pt-[5px]">
						<div className="icon-container flex justify-center items-center relative mx-[5px]">
							<Check2Icon />
						</div>
						<div className="progress-content mt-[15px]">
							<BodyText16R text={t('orderConfirmed')} />
							<BodyText14R text="20/2" className="mt-[5px]" />
						</div>
					</div>
					<div className="progress-item flex flex-col active last pt-[5px]">
						<div className="icon-container flex justify-center items-center relative mx-[5px]">
							<Check2Icon />
						</div>
						<div className="progress-content mt-[15px]">
							<BodyText16R text={t('orderDelivery')} />
							<BodyText14R text="22/2" className="mt-[5px]" />
						</div>
					</div>
					<div className="progress-item flex flex-col items-end pt-[5px] z">
						<div className="icon-container flex justify-center items-center relative mx-[5px]">
							<Check2Icon />
						</div>
						<div className="progress-content mt-[15px]">
							<BodyText16R text={t('orderDelivered')} />
							<BodyText14R text="24/2" className="mt-[5px]" />
						</div>
					</div>
				</div>
				<div className="shipping-details border rounded-[10px] p-[20px] mt-[40px]">
					<DetailsTitle text={t('moreDetails')} />
					<div className="details-container">
						<div className="detail-item flex justify-center items-center py-[10px]">
							<div className="detail-date w-full">
								<BodyText16R text={'15/2/2022'} />
								<BodyText16R text={'10.30PM'} />
							</div>
							<div className="detail-location w-full">
								<BodyText16R
									text={'المملكة العربية السعودية'}
								/>
								<BodyText16R text={'الرياض'} />
							</div>
							<div className="detail-status w-full text-left">
								<BodyText16R
									text={t('orderPlaced')}
									className="!font-bold"
								/>
								<BodyText16R
									text={t('trackingNumber') + ': M20212030'}
								/>
							</div>
						</div>
						<div className="detail-item flex justify-center items-center py-[10px]">
							<div className="detail-date w-full">
								<BodyText16R text={'15/2/2022'} />
								<BodyText16R text={'10.30PM'} />
							</div>
							<div className="detail-location w-full">
								<BodyText16R
									text={'المملكة العربية السعودية'}
								/>
								<BodyText16R text={'الرياض'} />
							</div>
							<div className="detail-status w-full text-left">
								<BodyText16R
									text={t('orderConfirmed')}
									className="!font-bold"
								/>
								<BodyText16R
									text={t('trackingNumber') + ': M20212030'}
								/>
							</div>
						</div>
						<div className="detail-item flex justify-center items-center py-[10px]">
							<div className="detail-date w-full">
								<BodyText16R text={'15/2/2022'} />
								<BodyText16R text={'10.30PM'} />
							</div>
							<div className="detail-location w-full">
								<BodyText16R
									text={'المملكة العربية السعودية'}
								/>
								<BodyText16R text={'الرياض'} />
							</div>
							<div className="detail-status w-full text-left">
								<BodyText16R
									text={t('orderDelivery')}
									className="!font-bold"
								/>
								<BodyText16R
									text={t('trackingNumber') + ': M20212030'}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="order-details border rounded-[10px] p-[20px] mt-[30px]">
					<DetailsTitle text={t('yourOrder')} />
					{range(0, 2).map((orderItem, orderItemIndex) => (
						<OrderItemCard
							key={orderItemIndex}
							image={orderImage}
							title={
								'حقيبة ظهر ( ازرق ) من درب - Hiking 102  Backpack'
							}
							quantity={1}
							price={'250.00 ريال'}
						/>
					))}
				</div>
				<div className="mt-[30px]">
					<Link
						href={HRef.home}
						className={'button button-orange !inline-block'}
					>
						{t('backToHome')}
					</Link>
					<Link
						href={HRef.productCart}
						className={'button button-outline !inline-block mr-5'}
					>
						{t('buyAgain')}
					</Link>
				</div>
			</div>
		</section>
	);
};

export default TrackOrder;
