import React, { FC } from 'react';
import { useI18n } from '@/src/locales';
import Image from 'next/image';
import { INextImageType } from '@/src/models/image';
import { getString } from '@/src/utilities/string';
import Link from 'next/link';
import FavoriteIcon from '@/src/components/ui/icons/FavoriteIcon';
import CartIcon from '@/src/components/ui/icons/CartIcon';
import { HRef } from '@/src/utilities/href';

export interface IProductCardModel {
	image: INextImageType;
	title: string;
	description: string;
	price: string;
	discount?: string;
}

interface IProps extends IProductCardModel {
	className?: string;
}

const ProductCard: FC<IProps> = (props) => {
	const { image, className, description, title, discount, price } = props;
	const t = useI18n();
	return (
		<div className={getString(className)}>
			<div
				className={'product-card border rounded-[10px] overflow-hidden'}
			>
				<Link href={HRef.productDetails} className={'block relative'}>
					<Image
						className={'object-cover w-full h-[300px]'}
						src={image}
						alt={''}
					/>
				</Link>
				<div className={'p-[15px]'}>
					<div className={'flex'}>
						<Link href={HRef.productDetails}>
							<h4 className={'f-16-700 c_004053 mb-[10px]'}>
								{title}
							</h4>
						</Link>
					</div>
					<p className={'mb-[15px] f-14-500 c_black'}>
						{description}
					</p>
					<div className="flex items-center gap-[10px] flex-wrap mb-[25px]">
						<span className={'f-18-700 c_black'}>{price}</span>
						<span className={'f-14-400 c_737373 line-through'}>
							{discount}
						</span>
					</div>
					<div className="flex items-center gap-[15px]">
						<button className={'button button-orange w-full'}>
							<CartIcon className={'scale-x-[-1]'} />
							{t('addToCart')}
						</button>

						<button className={'button button-outline'}>
							<FavoriteIcon />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default ProductCard;
