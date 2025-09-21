import { FC } from 'react';
import { useI18n } from '@/src/locales';
import { HRef } from '@/src/utilities/href';
import Link from 'next/link';
import { MenuProps } from 'antd';
import { getString } from '@/src/utilities/string';
import CustomMenuSidebar from '@/src/components/ui/CustomMenuSidebar';
import { IHeaderModel } from '@/src/models/page';

interface IProps {
	className?: string;
	data: IHeaderModel;
}

const WalkingTripsSidebar: FC<IProps> = (props) => {
	const { className, data } = props;
	const t = useI18n();

	const items: MenuProps['items'] = [
		{
			key: 'walking-trips',
			label: data.walkingTrips,
			children: [
				{
					key: HRef.chooseAPath,
					label: (
						<Link href={HRef.chooseAPath}>{data.chooseAPath}</Link>
					),
				},
				{
					key: HRef.preparingForTheTripAndWhatToDo,
					label: (
						<Link href={HRef.preparingForTheTripAndWhatToDo}>
							{data.preparingForTheTripAndWhatToDo}
						</Link>
					),
				},
				{
					key: HRef.tourOperators,
					label: (
						<Link href={HRef.tourOperators}>
							{data.tourOperators}
						</Link>
					),
				},
			],
		},
	];
	return (
		<aside
			className={
				'border rounded-[10px] p-[20px] bg-c_white' +
				getString(className)
			}
		>
			<h3 className={'f-24-700 c_004053 mb-[30px]'}>
				{t('walkingTrips')}
			</h3>
			<CustomMenuSidebar items={items} />
		</aside>
	);
};
export default WalkingTripsSidebar;
