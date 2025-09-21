import React, { FC, useState } from 'react';
import { useI18n } from '@/src/locales';
import Login from '@/src/components/auth/Login';
import Register from '@/src/components/auth/Register';
import { Tabs, TabsProps } from 'antd/lib';
import AuthLayout from '@/src/components/ui/layouts/AuthLayout';
import { IPageModel } from '@/src/models/page';

interface IProps {
	tab?: 'login' | 'register';
	data: IPageModel;
}

const Auth: FC<IProps> = (props) => {
	const { tab = '1', data } = props;
	const t = useI18n();
	const [activeTab, setActiveTab] = useState<string>(tab);
	const items: TabsProps['items'] = [
		{
			key: 'login',
			label: t('login'),
			children: <Login />,
		},
		{
			key: 'register',
			label: t('createAccount'),
			children: <Register />,
		},
	];

	return (
		<AuthLayout width={'max-w-[630px]'} data={data}>
			<h2 className={'f-24-700 c_004053 mb-[30px]'}>
				{t('personalAccount')}
			</h2>
			<Tabs
				centered={false}
				className={'auth-tabs'}
				type={'line'}
				activeKey={activeTab}
				onChange={(key) => {
					setActiveTab(key);
				}}
				items={items}
			/>
		</AuthLayout>
	);
};
export default Auth;
