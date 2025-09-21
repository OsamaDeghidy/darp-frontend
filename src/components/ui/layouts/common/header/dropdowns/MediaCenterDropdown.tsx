import { FC } from 'react';
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

const MediaCenterDropdown: FC<IProps> = (props) => {
	const { trigger, data } = props;

	const t = useI18n();
	const items: MenuProps['items'] = [
		{
			key: '1',
			label: <Link href={HRef.news} aria-label='news'>{data.latestHomeNews}</Link>,
		},
		{
			key: '2',
			label: (
				<Link href={HRef.picturesLibrary} aria-label='pictures Library'>{data.picturesLibrary}</Link>
			),
		},
		{
			key: '3',
			label: <Link href={HRef.videosLibrary} aria-label='videos Library'>{data.videoLibrary}</Link>,
		},
		{
			key: '4',
			label: (
				<Link href={HRef.mediaMaterials} aria-label='media Materials'>{data.mediaMaterials}</Link>
			),
		},
	];
	return (
		<DropdownBase
			trigger={trigger}
			title={data.mediaCenter}
			items={items}
		/>
	);
};
export default MediaCenterDropdown;
