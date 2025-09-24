import { FC } from 'react';
import { useI18n } from '@/src/locales';
import ReportCard from '@/src/components/ui/cards/ReportCard';
import { IFinancialReportsModel } from '@/src/models/about-us';
import { HRef } from '@/src/utilities/href';

interface IProps {
	data: IFinancialReportsModel | null;
}

const FinancialReports: FC<IProps> = (props) => {
	const { data } = props;
	const t = useI18n();

	// Add null check for data and financialReportsList
	if (!data || !data.financialReportsList) {
		return (
			<section>
				<h1 className={'mb-[20px] c_004053 f-32-700'}>
					{t('financialReports')}
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

	const financialReports = data.financialReportsList.filter(
		(item) => item.type === 'Financial Reports',
	);

	const annualReports = data.financialReportsList.filter(
		(item) => item.type === 'Annual Reports',
	);
	const operationalPlans = data.financialReportsList.filter(
		(item) => item.type === 'Operational Plans',
	);

	return (
		<section>
			<h1 className={'mb-[20px] c_004053 f-32-700'}>
				{t('financialReports')}
			</h1>
			<div className="grid grid-cols-12 gap-[24px] mb-[30px]">
				{financialReports.map((item, index) => (
					<ReportCard
						className={'xl:col-span-4 lg:col-span-6 col-span-12'}
						key={index}
						image={item.image?.url || ''}
						/*
												date={item.date}
						*/
						title={item.title || ''}
						href={HRef.financialReports + '/' + item.id}
					/>
				))}
			</div>
			<h2 className={'mb-[20px] c_004053 f-32-700'}>
				{t('annualReports')}
			</h2>
			<div className="grid grid-cols-12 gap-[24px] mb-[30px]">
				{annualReports.map((item, index) => (
					<ReportCard
						className={'xl:col-span-4 lg:col-span-6 col-span-12'}
						key={index}
						image={item.image?.url || ''}
						/*
												date={item.date}
						*/
						title={item.title || ''}
						href={HRef.financialReports + '/' + item.id}
					/>
				))}
			</div>
			<h2 className={'mb-[20px] c_004053 f-32-700'}>
				{t('operationalPlans')}
			</h2>
			<div className="grid grid-cols-12 gap-[24px]">
				{operationalPlans.map((item, index) => (
					<ReportCard
						className={'xl:col-span-4 lg:col-span-6 col-span-12'}
						key={index}
						image={item.image?.url || ''}
						/*
												date={item.date}
						*/
						title={item.title || ''}
						href={HRef.financialReports + '/' + item.id}
					/>
				))}
			</div>
		</section>
	);
};
export default FinancialReports;
