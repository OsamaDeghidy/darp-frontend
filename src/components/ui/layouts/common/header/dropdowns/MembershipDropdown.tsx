import { FC } from 'react';
import { MenuProps } from 'antd';
import { useI18n } from '@/src/locales';
import DropdownBase from '@/src/components/ui/dropdowns/DropdownBase';
import { DropdownChildrenType, DropdownTriggerType } from '@/src/models/dropdown';
import Link from 'next/link';
import { HRef } from '@/src/utilities/href';
import { IHeaderModel } from '@/src/models/page';

interface IProps {
	trigger?: DropdownTriggerType;
	childrenType?: DropdownChildrenType;
	data: IHeaderModel;
}

const MembershipDropdown: FC<IProps> = (props) => {
	const { trigger, childrenType, data } = props;

	const t = useI18n();
	const items: MenuProps['items'] = [
		{
			key: '1',
			label: (
				<Link href={HRef.membership} aria-label="join The Association Membership">
					{data.joinTheAssociationMembership}
				</Link>
			),
		},
		{
			key: '2',
			label: (
				<Link href={HRef.membersOfTheGeneralAssembly} aria-label="association Members">
					{data.associationMembers}
				</Link>
			),
		},
	];
	return (
		<DropdownBase trigger={trigger} title={data.membership} items={items} />
	);
};
export default MembershipDropdown;
