import React, { useEffect } from 'react';
import CloseIcon from '@/src/components/ui/icons/CloseIcon';
import { IStatusChangeModel, StatusChangeModel } from '@/src/models/status-change';
import { Modal } from 'antd/lib';
import { Field, Form, Formik } from 'formik';
import { useI18n } from '@/src/locales';
import * as yup from 'yup';
import PasswordField from '@/src/components/ui/fields/PasswordField';
import CustomButton from '@/src/components/ui/buttons/CustomButton';
import { useChangePasswordMutation } from '@/src/store/RTKQuery/auth/authApi';

interface IProps {
	openModal: IStatusChangeModel;
	isHasPassword?: boolean;
}

const ChangePasswordModal: React.FC<IProps> = (props) => {
	const { openModal = new StatusChangeModel(), isHasPassword } = props;
	const t = useI18n();
	const [isModalOpen, setIsModalOpen] = React.useState(false);
	const [changePassword, { isSuccess, isLoading }] =
		useChangePasswordMutation();
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
			newPassword: yup
				.string()
				.required(t('required'))
				.min(10, t('mustBeAtLeast10Characters')),
			newConfirmPassword: yup
				.string()
				.required(t('required'))
				.oneOf([yup.ref('newPassword')], t('passwordsMustMatch')),
		});
	};
	useEffect(() => {
		if (isSuccess) {
			setIsModalOpen(false);
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
					newPassword: '',
					newConfirmPassword: '',
				}}
				validationSchema={schema()}
				onSubmit={(values) => {
					if (isHasPassword) {
						changePassword(values);
					} else {
						changePassword({
							newPassword: values.newPassword,
							newConfirmPassword: values.newConfirmPassword,
						});
					}
				}}
			>
				{({ values }) => (
					<Form>
						<h3 className={'f-24-700 c_004053 mb-[20px]'}>
							{t('changePassword')}
						</h3>
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
							<Field
								className={'col-span-12'}
								label={t('newPassword')}
								placeholder={t('pleaseEnterYour', {
									fieldName: t('newPassword'),
								})}
								name={'newPassword'}
								component={PasswordField}
							/>
							<Field
								className={'col-span-12'}
								label={t('newPasswordConfirm')}
								placeholder={t('pleaseEnterYour', {
									fieldName: t('newPasswordConfirm'),
								})}
								name={'newConfirmPassword'}
								component={PasswordField}
							/>
						</div>
						<div className="flex items-center gap-[15px]">
							<CustomButton
								type={'submit'}
								className={'button-secondary w-full'}
								text={t('save')}
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
export default ChangePasswordModal;
