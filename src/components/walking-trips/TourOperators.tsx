import React, { FC } from 'react';
import { useI18n } from '@/src/locales';
import MemberCard from '@/src/components/ui/cards/MemberCard';
import { ITourOperatorsModel } from '@/src/models/track';

interface IProps {
	data: ITourOperatorsModel;
}

const TourOperators: FC<IProps> = (props) => {
	const t = useI18n();
	const { data } = props;
	return (
		<section
			className={
				'border rounded-[10px] p-[25px] b-c_F1F2EC mb-[15px] bg-c_white'
			}
		>
			<h2 className={'mb-[20px] c_004053 f-32-700'}>{data.title}</h2>
			<p className={'mb-[20px] f-16-700 c_2D2D2D'}>{data.description}</p>
			<div className="grid grid-cols-12 gap-[24px]">
				{data.tourOperatorsItems.map((item, index) => (
					<MemberCard
						className={'xl:col-span-4 lg:col-span-6 col-span-12'}
						key={index}
						image={item.image?.url}
						name={item.title}
						jobTitle={item.jobTitle}
						link={{
							text: t('visitTheCompanySWebsite'),
							href: item.companyLink,
						}}
					/>
				))}
			</div>
		</section>
	);
};
export default TourOperators;
