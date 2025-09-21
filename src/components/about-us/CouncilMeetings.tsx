import { FC } from 'react';
import { useI18n } from '@/src/locales';
import ReportCard from '@/src/components/ui/cards/ReportCard';
import { ICouncilMeetingsModel } from '@/src/models/about-us';
import { HRef } from '@/src/utilities/href';

interface IProps {
	data: ICouncilMeetingsModel;
}

const CouncilMeetings: FC<IProps> = (props) => {
	const { data } = props;
	const t = useI18n();
	return (
		<section>
			<h1 className={'mb-[20px] c_004053 f-32-700'}>{data.title}</h1>
			<div className="grid grid-cols-12 gap-[24px]">
				{data.councilMeetingsList.map((item, index) => (
					<ReportCard
						utc={true}
						className={'xl:col-span-4 lg:col-span-6 col-span-12'}
						key={index}
						image={item.image.url}
						date={item.date}
						place={item.location}
						title={item.title}
						href={HRef.councilMeetings + '/' + item.id}
					/>
				))}
			</div>
		</section>
	);
};
export default CouncilMeetings;
