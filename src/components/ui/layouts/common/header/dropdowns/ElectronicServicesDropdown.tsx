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

const ElectronicServicesDropdown: FC<IProps> = (props) => {
	const { trigger, data } = props;

	const t = useI18n();
	const items: MenuProps['items'] = [
		{
			key: '1',
			label: (
				<Link href={HRef.volunteering} aria-label="volunteering">
					{data.volunteering}
				</Link>
			),
		},
		{
			key: '2',
			label: <Link href={HRef.financialDonation}>{data.donation}</Link>,
		},

		{
			key: '3',
			label: (
				<Link href={HRef.jobs} aria-label="jobs">
					{data.theJobs}
				</Link>
			),
		},
	];
	return (
		<DropdownBase
			trigger={trigger}
			title={data.electronicServices}
			items={items}
		/>
	);
};
export default ElectronicServicesDropdown;
