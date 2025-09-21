import React, { FC } from 'react';
import { MenuProps } from 'antd';
import { useI18n } from '@/src/locales';
import DropdownBase from '@/src/components/ui/dropdowns/DropdownBase';
import { DropdownTriggerType } from '@/src/models/dropdown';
import Link from 'next/link';
import { HRef } from '@/src/utilities/href';
import { IHeaderModel } from '@/src/models/page';

interface IProps {
	trigger?: DropdownTriggerType;
	data: IHeaderModel;
}

const TracksDropdown: FC<IProps> = (props) => {
	const { trigger, data } = props;

	const t = useI18n();
	const items: MenuProps['items'] = [
		{
			key: '1',
			label: (
				<Link href={HRef.tracksDeveloped} aria-label='tracks Developed'>{data.tracksMainPage}</Link>
			),
		},
		{
			key: '2',
			label: (
				<Link href={HRef.importanceOfTracks} aria-label='importance Of Tracks'>
					{data.importanceOfTracks}
				</Link>
			),
		},
		{
			key: '3',
			label: <Link href={HRef.chooseAPath} aria-label='hiking'>{data.hiking}</Link>,
		},

		// {
		// 	key: '3',
		// 	label: (
		// 		<Link href={HRef.saudiTrackAccreditationStandards}>
		// 			{t('criteriaForSelectingPaths')}
		// 		</Link>
		// 	),
		// },
		// {
		// 	key: '4',
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
	return <DropdownBase trigger={trigger} title={data.tracks} items={items} />;
};
export default TracksDropdown;
