import { useI18n } from '@/src/locales';
import React, { FC } from 'react';
import ChangePassword from './ChangePassword';
import DeleteAccount from './DeleteAccount';

interface IProps {}

const Settingspage: FC<IProps> = () => {
	const t = useI18n();

	return (
		<>
			<div className="container">
				<div className="pt-[50px]">
					<h3 className={'f-32-700 c_004053 mb-[30px]'}>
						{t('settings')}
					</h3>
					<ChangePassword />
					<DeleteAccount />
				</div>
			</div>
		</>
	);
};

export default Settingspage;
