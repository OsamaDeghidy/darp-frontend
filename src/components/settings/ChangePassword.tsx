import React, { FC, useState } from 'react';
import LockIcon from '../ui/icons/LockIcon';
import ArrowRigth from '../ui/icons/ArrowRigth';
import { useI18n } from '@/src/locales';
import ChangePasswordModal from '../ui/modals/ChangePasswordModal';
import {
	IStatusChangeModel,
	StatusChangeModel,
} from '@/src/models/status-change';
import { useGetMyProfileQuery } from '@/src/store/RTKQuery/profile/profileApi';

interface IProps {}

const ChangePassword: FC<IProps> = () => {
	const [changePasswordModal, setChangePasswordModal] =
		useState<IStatusChangeModel>(new StatusChangeModel());
	const { data, isSuccess, isLoading } = useGetMyProfileQuery();
	const t = useI18n();
	return (
		<>
			<div
				className={
					'flex justify-between items-center bg-c_white border-[1px] border-[solid] border-[#F1F2EC] rounded-[10px] py-[10px] px-[20px] mb-[20px]'
				}
			>
				<button
					onClick={() => {
						setChangePasswordModal({
							statusChange: !changePasswordModal.statusChange,
							value: true,
						});
					}}
					className="flex justify-between items-center w-full"
				>
					<div className="flex items-center gap-x-[10px]">
						<LockIcon />
						<h4 className="f-18-500 c_004053 ">
							{t('changePassword')}
						</h4>
					</div>
					<ArrowRigth />
				</button>
			</div>
			<ChangePasswordModal
				isHasPassword={data?.data?.isHasPassword}
				openModal={changePasswordModal}
			/>
		</>
	);
};

export default ChangePassword;
