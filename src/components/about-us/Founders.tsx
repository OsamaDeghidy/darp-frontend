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
	
	// Safe data access with fallback
	const safeData = data || {};
	
	return (
		<section>
			<h1 className={'mb-[20px] c_004053 f-32-700'}>
				{safeData.title || t('founders')}
			</h1>
			{safeData.foundersList && (
				<div className="grid grid-cols-12 gap-[24px]">
					{safeData.foundersList.map((item, index) => (
						<div
							key={index}
							className="card col-span-12 md:col-span-6 xl:col-span-4"
						>
							<CommitteCard 
								name={item.name || ''} 
								title={item.jobTitle || ''} 
							/>
						</div>
					))}
				</div>
			)}
		</section>
	);
};
export default Founders;
