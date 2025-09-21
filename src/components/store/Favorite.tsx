import React, { FC } from 'react';
import { useI18n } from '@/src/locales';
import productImage01 from '@/public/images/product-01.jpeg';
import { range } from 'lodash';
import ProductCard from '@/src/components/ui/cards/ProductCard';
import Link from 'next/link';
import { HRef } from '@/src/utilities/href';
import CustomBreadcrumb from '@/src/components/ui/CustomBreadcrumb';

interface IProps {}

const Favorite: FC<IProps> = (props) => {
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
							title: t('favoriteProducts'),
						},
					]}
				/>
				<div className="flex items-center gap-[20px] justify-between flex-wrap mb-[30px]">
					<h2 className={'f-32-700 c_004053'}>
						{t('favoriteProducts')}
					</h2>
					<p className={'f-20-500 c_004053'}>{t('theCount')} (10)</p>
				</div>
				<div className="grid grid-cols-12 gap-[24px] mb-[30px]">
					{range(0, 10).map((item, index) => (
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
			</div>
		</div>
	);
};
export default Favorite;
