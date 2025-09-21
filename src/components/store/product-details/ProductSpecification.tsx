import React, { FC } from 'react';
import { useI18n } from '@/src/locales';

interface IProps {}

const ProductSpecification: FC<IProps> = (props) => {
	const t = useI18n();
	const data = [
		{
			key: 'ماركة',
			value: 'درب',
		},
		{
			key: 'فئة',
			value: 'حقائب',
		},
		{
			key: 'اللون',
			value: 'ازرق',
		},
		{
			key: 'الخامة',
			value: 'قماش',
		},
		{
			key: 'الأبعاد',
			value: '10cm (W) x15cm (D) x 20cm (H)',
		},
		{
			key: 'العرض',
			value: '10',
		},
		{
			key: 'الأرتفاع',
			value: '10',
		},
		{
			key: 'الرمز',
			value: '2020202020',
		},
	];
	return (
		<div className={'product-specification'}>
			<div className="overflow-x-auto">
				<div className="pt-[5px] min-w-full inline-block align-middle">
					<div className="overflow-hidden">
						<table className="min-w-full">
							<thead></thead>
							<tbody className="divide-y">
								{data.map((item, index) => (
									<tr key={index}>
										<td className="whitespace-nowrap f-14-500 c_535353">
											{item.key}
										</td>
										<td className="whitespace-nowrap f-14-600 c_black">
											{item.value}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};
export default ProductSpecification;
