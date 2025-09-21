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

const ContactUsSidebar: FC<IProps> = (props) => {
	const { className, data } = props;
	const t = useI18n();

	const items: MenuProps['items'] = [
		{
			key: HRef.callUs,
			label: <Link href={HRef.callUs}>{data.callUs}</Link>,
		},
		{
			key: HRef.survey,
			label: <Link href={HRef.survey}>{data.opinionPoll}</Link>,
		},
		{
			key: HRef.complaintsAndSuggestions,
			label: (
				<Link href={HRef.complaintsAndSuggestions}>
					{data.complaintsAndSuggestions}
				</Link>
			),
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
				{t('connectWithUs')}
			</h3>
			<CustomMenuSidebar items={items} />
		</aside>
	);
};
export default ContactUsSidebar;
