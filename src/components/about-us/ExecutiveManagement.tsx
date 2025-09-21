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
						image={item.image.url}
						showMore={true}
						email={item.email}
						name={item.name}
						jobTitle={item.jobTitle}
					/>
				))}
			</div>
		</section>
	);
};
export default ExecutiveManagement;
