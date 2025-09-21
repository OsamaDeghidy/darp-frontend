import React, { FC } from 'react';
import { useI18n } from '@/src/locales';
import { range } from 'lodash';
import OrderItemCard from '@/src/components/ui/cards/OrderItemCard';
import orderImage from '@/public/images/order.png';

interface IProps {}

const PreviousOrders: FC<IProps> = (props) => {
	const t = useI18n();
	return (
		<div>
			<h3 className={'mb-[30px] f-24-700 c_004053'}>
				{t('previousOrders')}
			</h3>
			<div className="flex flex-col gap-[30px] mb-[60px]">
				{range(0, 2).map((item, index) => (
					<div
						key={index}
						className={'p-[25px] border b-c_EDF4F2 rounded-[10px]'}
					>
						<div className="flex items-center gap-[20px] justify-between">
							<div>
								<h4 className={'f-20-700 c_004053'}>
									{t('order')}
								</h4>
								<p className={'f-20-700 c_004053 mb-[20px]'}>
									#20206131
								</p>
							</div>
							<button className={'button button-outline'}>
								{t('orderTracking')}
							</button>
						</div>
						<div className="flex flex-col gap-[20px]">
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
					</div>
				))}
			</div>
		</div>
	);
};
export default PreviousOrders;
