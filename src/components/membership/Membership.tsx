import React, { FC } from 'react';
import { useI18n } from '@/src/locales';
import { useDirection } from '@/src/hooks/useDirection';
import MembershipCard from '@/src/components/ui/cards/MembershipCard';
import {
	IMembershipModel,
	IMembershipPageModel,
} from '@/src/models/membership';

interface IProps {
	data: IMembershipPageModel;
	membershipList: IMembershipModel[];
}

const Membership: FC<IProps> = (props) => {
	const { data, membershipList } = props;
	const t = useI18n();
	const direction = useDirection();

	return (
		<div>
			{/*<Slider
				className="custom-slider mb-[60px]"
				dots={true}
				infinite={true}
				speed={500}
				slidesToShow={1}
				slidesToScroll={1}
				rtl={direction == 'rtl'}
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
			</Slider>*/}

			<div className="container">
				<div className="flex items-center gap-[20px] justify-between flex-wrap mb-[30px] mt-[40px]">
					<h1 className={'f-32-700 c_004053'}>{data.title}</h1>
					<p className={'f-16-500 c_2D2D2D mb-[30px]'}>
						{data.description}
					</p>
					{/*					<div className="flex items-center gap-[10px]">
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
					</div>*/}
				</div>
				<div className="grid grid-cols-12 gap-[24px] mb-[30px]">
					{membershipList.map((item, index) => (
						<MembershipCard
							className={
								'lg:col-span-4 md:col-span-6 col-span-12'
							}
							key={index}
							data={item}
						/>
					))}
				</div>
				{/*<div className="flex justify-center mb-[60px]">
					<Link href={HRef.membership +'/' + ite} className={'button button-orange'}>
						{t('showMore')}
					</Link>
				</div>*/}
			</div>
		</div>
	);
};
export default Membership;
