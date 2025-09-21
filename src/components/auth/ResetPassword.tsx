import { FC, useEffect } from 'react';
import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import { useI18n } from '@/src/locales';
import PasswordField from '@/src/components/ui/fields/PasswordField';
import AuthAlertMessage from '@/src/components/auth/AuthAlertMessage';
import { HRef } from '@/src/utilities/href';
import { useSearchParams } from 'next/navigation';
import { useCanResetPasswordMutation, useResetPasswordMutation } from '@/src/store/RTKQuery/auth/authApi';
import Loader from '@/src/components/ui/Loader';
import { useGetAuthModalsContentQuery } from '@/src/store/RTKQuery/common/commonApi';

interface IProps {
	onSuccess?: () => void;
}

const ResetPassword: FC<IProps> = (props) => {
	const { onSuccess } = props;
	const t = useI18n();
	const searchParams = useSearchParams();
	const code = searchParams.get('code');
	const email = searchParams.get('email');
	const [canResetPassword, canResetPasswordResponse] =
		useCanResetPasswordMutation();
	const [resetPassword, resetPasswordResponse] = useResetPasswordMutation();

	const { data } = useGetAuthModalsContentQuery();
	const cardContent = data?.data.authList.filter(
		(item) => item.type === 'Reset Password',
	);
	useEffect(() => {
		if (code && email) {
			canResetPassword({ token: code, email: email });
		}
	}, []);
	const schema = () => {
		return yup.object().shape({
			password: yup
				.string()
				.required(t('required'))
				.min(10, t('mustBeAtLeast10Characters')),
			confirmPassword: yup
				.string()
				.required(t('required'))
				.oneOf([yup.ref('password')], t('passwordsMustMatch')),
		});
	};
	return (
		<div>
			{canResetPasswordResponse.isLoading ||
			resetPasswordResponse.isLoading ? (
				<Loader />
			) : (
				<>
					{canResetPasswordResponse.isSuccess ? (
						<>
							{resetPasswordResponse.isSuccess ? (
								<AuthAlertMessage
									title={
										cardContent
											? cardContent[0].successTitle
											: ''
									}
									description={
										cardContent
											? cardContent[0].successDescription
											: ''
									}
									link={{
										text: t('continue'),
										href: HRef.login,
									}}
								/>
							) : (
								<>
									<h2
										className={
											'f-24-700 c_004053 mb-[15px]'
										}
									>
										{cardContent
											? cardContent[0].successTitle
											: ''}
									</h2>
									<p className={'f-14-500 c_black mb-[30px]'}>
										{cardContent
											? cardContent[0].successDescription
											: ''}
									</p>
									<Formik
										initialValues={{
											password: '',
											confirmPassword: '',
										}}
										validationSchema={schema()}
										onSubmit={(values) => {
											if (email && code) {
												resetPassword({
													email: email,
													token: code,
													password: values.password,
													confirmPassword:
														values.confirmPassword,
												});
											}
										}}
									>
										{({}) => (
											<Form>
												<Field
													className={'mb-[20px]'}
													label={t('newPassword')}
													placeholder={t(
														'pleaseEnterYour',
														{
															fieldName:
																t('password'),
														},
													)}
													name={'password'}
													component={PasswordField}
												/>
												<Field
													className={'mb-[30px]'}
													label={t(
														'newPasswordConfirm',
													)}
													placeholder={t(
														'pleaseEnterYour',
														{
															fieldName:
																t(
																	'passwordConfirm',
																),
														},
													)}
													name={'confirmPassword'}
													component={PasswordField}
												/>
												<button
													type={'submit'}
													className={
														'button button-secondary w-full'
													}
												>
													{t('save')}
												</button>
											</Form>
										)}
									</Formik>
								</>
							)}
						</>
					) : (
						<AuthAlertMessage
							//title={t('theNewPasswordHasBeenConfirmed')}
							title={
								cardContent ? cardContent[0].failedTitle : ''
							}
							description={
								cardContent
									? cardContent[0].failedDescription
									: ''
							}
							link={{
								text: t('continue'),
								href: HRef.forgetPassword,
							}}
						/>
					)}
				</>
			)}
		</div>
	);
};
export default ResetPassword;
