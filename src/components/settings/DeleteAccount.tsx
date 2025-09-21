import React, { FC, useState } from 'react';
import ArrowRigth from '../ui/icons/ArrowRigth';
import { useI18n } from '@/src/locales';
import DeleteAccountIcon from '../ui/icons/DeleteAccountIcon';
import DeleteAccountModal from '../ui/modals/DeleteAccountModal';
import { useGetMyProfileQuery } from '@/src/store/RTKQuery/profile/profileApi';
import {
	IStatusChangeModel,
	StatusChangeModel,
} from '@/src/models/status-change';

interface IProps {}

const DeleteAccount: FC<IProps> = () => {
	const t = useI18n();
	const [changePasswordModal, setChangePasswordModal] =
		useState<IStatusChangeModel>(new StatusChangeModel());
	const { data, isSuccess, isLoading } = useGetMyProfileQuery();

	return (
		<>
			<div
				className={
					'flex justify-between items-center bg-c_white border-[1px] border-[solid] border-[#F1F2EC] rounded-[10px] py-[10px] px-[20px] mb-[20px]'
				}
			>
				<button
					className="flex justify-between items-center w-full"
					onClick={() => {
						setChangePasswordModal({
							statusChange: !changePasswordModal.statusChange,
							value: true,
						});
					}}
				>
					<div className="flex items-center gap-x-[10px]">
						<DeleteAccountIcon />
						<h4 className="f-18-500 c_004053 ">
							{t('deleteyouraccount')}
						</h4>
					</div>
					<ArrowRigth />
				</button>
			</div>
			<DeleteAccountModal
				isHasPassword={data?.data?.isHasPassword}
				openModal={changePasswordModal}
			/>
		</>
	);
};

export default DeleteAccount;
