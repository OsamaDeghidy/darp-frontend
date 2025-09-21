import { FC } from 'react';
import { useI18n } from '@/src/locales';
import ReportCard from '@/src/components/ui/cards/ReportCard';
import { IRegulationsAndPoliciesModel } from '@/src/models/about-us';
import { HRef } from '@/src/utilities/href';

interface IProps {
	data: IRegulationsAndPoliciesModel;
}

const RegulationsAndPolicies: FC<IProps> = (props) => {
	const { data } = props;
	const t = useI18n();
	return (
		<section>
			<h1 className={'mb-[20px] c_004053 f-32-700'}>{data.title}</h1>
			<div className="grid grid-cols-12 gap-[24px]">
				{data.regulationsAndPoliciesList.map((item, index) => (
					<ReportCard
						className={'xl:col-span-4 lg:col-span-6 col-span-12'}
						key={index}
						image={item.image.url}
						/*
												date={item.date}
						*/
						title={item.title}
						href={HRef.regulationsAndPolicies + '/' + item.id}
					/>
				))}
			</div>
		</section>
	);
};
export default RegulationsAndPolicies;
