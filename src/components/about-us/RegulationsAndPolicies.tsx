import { FC } from 'react';
import { useI18n } from '@/src/locales';
import ReportCard from '@/src/components/ui/cards/ReportCard';
import { IRegulationsAndPoliciesModel } from '@/src/models/about-us';
import { HRef } from '@/src/utilities/href';

interface IProps {
	data: IRegulationsAndPoliciesModel | null;
}

const RegulationsAndPolicies: FC<IProps> = (props) => {
	const { data } = props;
	const t = useI18n();
	
	// Add null check for data and regulationsAndPoliciesList
	if (!data || !data.regulationsAndPoliciesList) {
		return (
			<section>
				<h1 className={'mb-[20px] c_004053 f-32-700'}>
					{t('regulationsAndPolicies')}
				</h1>
				<div className="text-center py-8">
					<div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
						<p className="text-yellow-800 font-medium mb-2">⚠️ البيانات غير متاحة حالياً</p>
						<p className="text-yellow-700 text-sm">
							يبدو أن هناك مشكلة في الخادم. يرجى المحاولة مرة أخرى لاحقاً أو التواصل مع فريق الدعم الفني.
						</p>
					</div>
				</div>
			</section>
		);
	}
	
	return (
		<section>
			<h1 className={'mb-[20px] c_004053 f-32-700'}>{data.title || t('regulationsAndPolicies')}</h1>
			<div className="grid grid-cols-12 gap-[24px]">
				{data.regulationsAndPoliciesList.map((item, index) => (
					<ReportCard
						className={'xl:col-span-4 lg:col-span-6 col-span-12'}
						key={index}
						image={item.image?.url || ''}
						/*
												date={item.date}
						*/
						title={item.title || ''}
						href={HRef.regulationsAndPolicies + '/' + item.id}
					/>
				))}
			</div>
		</section>
	);
};
export default RegulationsAndPolicies;
