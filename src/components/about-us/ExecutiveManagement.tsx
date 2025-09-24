import { useI18n } from '@/src/locales';
import MemberCard from '@/src/components/ui/cards/MemberCard';
import { IExecutiveManagementModel } from '@/src/models/about-us';
import { FC } from 'react';

interface IProps {
	data: IExecutiveManagementModel;
}

const ExecutiveManagement: FC<IProps> = (props) => {
	const { data } = props;
	const t = useI18n();
	
	// Add null check for data and executiveManagementList
	if (!data || !data.executiveManagementList) {
		return (
			<section>
				<h1 className={'mb-[20px] c_004053 f-32-700'}>
					{t('executiveManagement')}
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
			<h1 className={'mb-[20px] c_004053 f-32-700'}>
				{t('executiveManagement')}
			</h1>
			<div className="grid grid-cols-12 gap-[24px]">
				{data.executiveManagementList.map((item, index) => (
					<MemberCard
						key={index}
						className={'xl:col-span-4 lg:col-span-6 col-span-12'}
						image={item.image?.url || ''}
						showMore={true}
						email={item.email || ''}
						name={item.name || ''}
						jobTitle={item.jobTitle || ''}
					/>
				))}
			</div>
		</section>
	);
};
export default ExecutiveManagement;
