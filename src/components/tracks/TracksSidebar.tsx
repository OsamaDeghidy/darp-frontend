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

const TracksSidebar: FC<IProps> = (props) => {
	const { className, data } = props;
	const t = useI18n();

	const items: MenuProps['items'] = [
		{
			key: HRef.tracksDeveloped,
			label: (
				<Link href={HRef.tracksDeveloped}>{data.tracksMainPage}</Link>
			),
		},
		{
			key: HRef.tracksDeveloped,
			label: (
				<Link href={HRef.tracksDeveloped}>
					{data.pathsImplementedByTheAssociation}
				</Link>
			),
		},
		{
			key: HRef.importanceOfTracks,
			label: (
				<Link href={HRef.importanceOfTracks}>
					{data.importanceOfTracks}
				</Link>
			),
		},
		// {
		// 	key: HRef.saudiTrackAccreditationStandards,
		// 	label: (
		// 		<Link href={HRef.saudiTrackAccreditationStandards}>
		// 			{t('criteriaForSelectingPaths')}
		// 		</Link>
		// 	),
		// },
		// {
		// 	key: HRef.technicalSpecificationsForDirectionalSigns,
		// 	label: (
		// 		<Link href={HRef.technicalSpecificationsForDirectionalSigns}>
		// 			{t('technicalSpecificationsOfTheTracks')}
		// 		</Link>
		// 	),
		// },
		// {
		// 	key: '5',
		// 	label: <Link href={'#'}>{t('tracksInTheKingdom')}</Link>,
		// },
		// {
		// 	key: '6',
		// 	label: <Link href={'#'}>{t('commentsAndSuggestions')}</Link>,
		// },
	];
	return (
		<aside
			className={
				'bg-c_white border rounded-[10px] p-[20px]' +
				getString(className)
			}
		>
			<h3 className={'f-24-700 c_004053 mb-[30px]'}>
				{t('tracksProjects')}
			</h3>
			<CustomMenuSidebar items={items} />
		</aside>
	);
};
export default TracksSidebar;
