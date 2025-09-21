import React, { FC } from 'react';
import { useI18n } from '@/src/locales';
import SurveyCard from '@/src/components/ui/cards/SurveyCard';
import { ISurveyItemModel } from '@/src/models/contact-us';

interface IProps {
	data: ISurveyItemModel[];
}

const Survey: FC<IProps> = (props) => {
	const { data } = props;
	const t = useI18n();

	return (
		<div>
			<section>
				<div className="container">
					<div className="grid grid-cols-12 gap-[24px] my-[60px]">
						{data.map((item, index) => (
							<SurveyCard
								key={index}
								className={
									'xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12 min-h-[320px]'
								}
								image={item.image.url}
								title={item.title}
								link={item.surveyLink}
								linkName={t('clickHere')}
							/>
						))}
					</div>
				</div>
			</section>
		</div>
	);
};
export default Survey;
