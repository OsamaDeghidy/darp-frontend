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

const CallUsDropdown: FC<IProps> = (props) => {
	const { trigger, data } = props;

	const t = useI18n();
	const items: MenuProps['items'] = [
		{
			key: '1',
			label: <Link href={HRef.callUs} aria-label='call Us'>{data.contactUsForm}</Link>,
		},
		{
			key: '2',
			label: <Link href={HRef.survey} aria-label='survey'>{data.opinionPoll}</Link>,
		},
		{
			key: '3',
			label: (
				<Link href={HRef.complaintsAndSuggestions} aria-label='complaints And Suggestions'>
					{data.complaintsAndSuggestions}
				</Link>
			),
		},
	];
	return <DropdownBase trigger={trigger} title={data.callUs} items={items} />;
};
export default CallUsDropdown;
