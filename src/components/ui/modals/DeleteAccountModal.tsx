import React, { useEffect } from 'react';
import CloseIcon from '@/src/components/ui/icons/CloseIcon';
import { IStatusChangeModel, StatusChangeModel } from '@/src/models/status-change';
import { Modal, notification } from 'antd/lib';
import { Field, Form, Formik } from 'formik';
import { useI18n } from '@/src/locales';
import * as yup from 'yup';
import PasswordField from '@/src/components/ui/fields/PasswordField';
import CustomButton from '@/src/components/ui/buttons/CustomButton';
import { useDeleteAccountMutation } from '@/src/store/RTKQuery/auth/authApi';
import { CookieEnum, deleteCookie } from '@/src/utilities/cookie';
import { useRouter } from 'next/router';

interface IProps {
	openModal: IStatusChangeModel;
	isHasPassword?: boolean;
}

const DeleteAccountModal: React.FC<IProps> = (props) => {
	const { openModal = new StatusChangeModel(), isHasPassword } = props;
	const t = useI18n();
	const router = useRouter();

	const [isModalOpen, setIsModalOpen] = React.useState(false);
	const [deleteAccount, { isSuccess, isLoading }] =
		useDeleteAccountMutation();
	useEffect(() => {
		setIsModalOpen(openModal.value);
	}, [openModal]);
	const handleCancel = () => {
		setIsModalOpen(false);
	};
	const schema = () => {
		return yup.object().shape({
			password: isHasPassword
				? yup.string().required(t('required'))
				: yup.string(),
		});
	};
	useEffect(() => {
		if (isSuccess) {
			deleteCookie(CookieEnum.token);
			setIsModalOpen(false);
			router.push('/auth/login');
			notification.success({ message: t('deletedSuccessfully') });
		}
	}, [isSuccess]);
	return (
		<Modal
			className={'custom-modal'}
			open={isModalOpen}
			onCancel={handleCancel}
			footer={null}
			width={600}
			closeIcon={<CloseIcon className={'fill-c_black900'} />}
			destroyOnClose={true}
		>
			<Formik
				initialValues={{
					password: '',
				}}
				validationSchema={schema()}
				onSubmit={(values) => {
					deleteAccount(values);
				}}
			>
				{({ values }) => (
					<Form>
						<h3 className={'f-24-700 c_004053 mb-[20px]'}>
							{t('deleteYourAccountMessage')}
						</h3>
						<p className={'f-16-500 mb-[20px] c_2D2D2D'}>
							{t('bioAccountMessage')}
						</p>
						<div className="grid grid-cols-12 gap-[24px] mb-[30px]">
							{isHasPassword && (
								<Field
									className={'col-span-12'}
									label={t('password')}
									placeholder={t('pleaseEnterYour', {
										fieldName: t('password'),
									})}
									name={'password'}
									component={PasswordField}
								/>
							)}
						</div>
						<div className="flex items-center gap-[15px]">
							<CustomButton
								type={'submit'}
								className={'button-danger w-full'}
								text={t('delete')}
								isLoading={isLoading}
								disabled={isLoading}
							/>
							<button
								className={'button button-outline w-full'}
								onClick={() => {
									setIsModalOpen(false);
								}}
							>
								{t('cancel')}
							</button>
						</div>
					</Form>
				)}
			</Formik>
		</Modal>
	);
};
export default DeleteAccountModal;
