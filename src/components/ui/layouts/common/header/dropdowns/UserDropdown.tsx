import { FC } from 'react';
import { MenuProps } from 'antd';
import { useI18n } from '@/src/locales';
import DropdownBase from '@/src/components/ui/dropdowns/DropdownBase';
import Link from 'next/link';
import { HRef } from '@/src/utilities/href';
import { DropdownTriggerType } from '@/src/models/dropdown';
import { CookieEnum, deleteCookie } from '@/src/utilities/cookie';
import { useRouter } from 'next/router';
import User2Icon from '@/src/components/ui/icons/User2Icon';
import { signOut } from 'next-auth/react';

interface IProps {
	trigger?: DropdownTriggerType;
}

const UserDropdown: FC<IProps> = (props) => {
	const { trigger } = props;
	const t = useI18n();
	const router = useRouter();
	const items: MenuProps['items'] = [
		{
			key: '1',
			label: (
				<Link
					href={HRef.personalAccount}
					aria-label={t('personalAccount')}
				>
					{t('personalAccount')}
				</Link>
			),
		},
		// {
		// 	key: '2',
		// 	label: (
		// 		<Link href={HRef.yourPreviousOrders}>
		// 			{t('yourPreviousOrders')}
		// 		</Link>
		// 	),
		// },
		// {
		// 	key: '3',
		// 	label: <Link href={HRef.yourAddresses}>{t('yourAddresses')}</Link>,
		// },
		// {
		// 	key: '4',
		// 	label: <Link href={HRef.yourPayment}>{t('yourPayment')}</Link>,
		// },
		{
			key: '5',
			label: <Link href={HRef.settings}>{t('settings')}</Link>,
		},
		{
			key: '6',
			label: (
				<button
					type="button"
					onClick={async () => {
						await fetch('/api/logout', {
							method: 'POST',
						});
						deleteCookie(CookieEnum.token);
						signOut().then(() => {});
						router.push(HRef.login);
					}}
				>
					{t('logOut')}
				</button>
			),
		},
	];
	return (
		<DropdownBase
			trigger={trigger}
			title={
				<button
					type="button"
					aria-label="userMenu"
					aria-haspopup="menu"
					className="bg-transparent border-0 cursor-pointer"
				>
					<User2Icon aria-hidden="true" />
				</button>
			}
			showArrow={false}
			items={items}
		/>
	);
};
export default UserDropdown;
