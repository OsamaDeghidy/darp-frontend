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

const ContributeSidebar: FC<IProps> = (props) => {
	const { className, data } = props;
	const t = useI18n();

	const items: MenuProps['items'] = [
		{
			key: HRef.volunteering,
			label: <Link href={HRef.volunteering}>{data.volunteering}</Link>,
		},
		{
			key: HRef.financialDonation,
			label: <Link href={HRef.financialDonation}>{data.donation}</Link>,
		},
		{
			key: '3',
			label: <Link href={HRef.jobs}>{data.theJobs}</Link>,
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
				{t('contributingToTheAssociation')}
			</h3>
			<CustomMenuSidebar items={items} />
		</aside>
	);
};
export default ContributeSidebar;
