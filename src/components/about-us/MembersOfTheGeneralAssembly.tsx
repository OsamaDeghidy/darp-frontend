import { FC } from 'react';
import { useI18n } from '@/src/locales';
import MemberGeneralAssemblyCard from '@/src/components/ui/cards/MemberGeneralAssemblyCard';
import { IMembersOfTheGeneralAssemblyItemModel } from '@/src/models/about-us';

interface IProps {
	data: IMembersOfTheGeneralAssemblyItemModel[];
}

const MembersOfTheGeneralAssembly: FC<IProps> = (props) => {
	const { data } = props;
	const t = useI18n();
	return (
		<>
			{data.map((item, index) => (
				<section key={index} className={'mb-[30px]'}>
					<h2 className={'mb-[20px] c_004053 f-32-700'}>
						{item.title}
					</h2>
					<div className="grid grid-cols-12 gap-[24px]">
						{item.membersOfAssemblyItemListItemList.map(
							(subItem, subIndex) => (
								<MemberGeneralAssemblyCard
									className={
										'xl:col-span-4 lg:col-span-6 md:col-span-6 col-span-12'
									}
									key={subIndex}
									name={subItem.title}
									jobTitle={subItem.jobTitle}
									count={subItem.count}
								/>
							),
						)}
					</div>
				</section>
			))}
		</>
	);
};
export default MembersOfTheGeneralAssembly;
