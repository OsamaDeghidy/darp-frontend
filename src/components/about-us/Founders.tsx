import React, { FC } from 'react';
import { useI18n } from '@/src/locales';
import { IFoundersModel } from '@/src/models/about-us';
import CommitteCard from '@/src/components/ui/cards/CommitteCard';

interface IProps {
	data: IFoundersModel;
}

const Founders: FC<IProps> = (props) => {
	const { data } = props;
	const t = useI18n();
	return (
		<section>
			<h1 className={'mb-[20px] c_004053 f-32-700'}>{data.title}</h1>
			<div className="grid grid-cols-12 gap-[24px]">
				{data.foundersList.map((item, index) => (
					// <MemberCard
					// 	className={'xl:col-span-4 lg:col-span-6 col-span-12'}
					// 	key={index}
					// 	image={item.image.url}
					// 	name={item.name}
					// 	jobTitle={item.jobTitle}
					// 	description={item.description}
					// />
					<div
						key={index}
						className="card col-span-12 md:col-span-6 xl:col-span-4"
					>
						<CommitteCard name={item.name} title={item.jobTitle} />
					</div>
				))}
			</div>
		</section>
	);
};
export default Founders;
