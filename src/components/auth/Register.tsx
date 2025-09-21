import { FC, useEffect } from 'react';
import { Field, Form, Formik } from 'formik';
import InputField from '@/src/components/ui/fields/InputField';
import PasswordField from '@/src/components/ui/fields/PasswordField';
import * as yup from 'yup';
import { useI18n } from '@/src/locales';
import Link from 'next/link';
import { HRef } from '@/src/utilities/href';
import { RegisterModel } from '@/src/models/auth';
import CustomButton from '@/src/components/ui/buttons/CustomButton';
import { useRegisterMutation } from '@/src/store/RTKQuery/auth/authApi';
import { useRouter } from 'next/router';
import LoginWithGoogleButton from '@/src/components/ui/buttons/LoginWithGoogleButton';
import LoginWithFacebookButton from '@/src/components/ui/buttons/LoginWithFacebookButton';
import { CookieEnum, setCookie } from '@/src/utilities/cookie';
import { notification } from 'antd/lib';

interface IProps {}

const Register: FC<IProps> = (props) => {
	const t = useI18n();
	const [register, { data, isSuccess, isLoading }] = useRegisterMutation();
	const router = useRouter();

	const schema = () => {
		return yup.object().shape({
			fullName: yup.string().required(t('required')),
			email: yup
				.string()
				.email(t('invalidEmail'))
				.required(t('required')),
			phoneNumber: yup.string().required(t('required')),
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
	useEffect(() => {
		if (isSuccess && data) {
			setCookie(CookieEnum.token, data.data.token);
			router.push(HRef.home);
			notification.success({ message: t('createdSuccessfully') });
		}
	}, [isSuccess]);

	return (
		<div>
			<Formik
				initialValues={new RegisterModel()}
				validationSchema={schema()}
				onSubmit={(values) => {
					register(values);
				}}
			>
				{({}) => (
					<Form>
						<div className="flex flex-col gap-[20px] mb-[30px] mt-[40px]">
							<Field
								label={t('fullName')}
								placeholder={t('pleaseEnterYour', {
									fieldName: t('fullName'),
								})}
								name={'fullName'}
								component={InputField}
							/>
							<Field
								label={t('email')}
								placeholder={t('pleaseEnterYour', {
									fieldName: t('email'),
								})}
								name={'email'}
								type={'email'}
								component={InputField}
							/>
							<Field
								label={t('telephone')}
								placeholder={'(123) 456-7890'}
								name={'phoneNumber'}
								component={InputField}
							/>
							<Field
								label={t('password')}
								placeholder={t('pleaseEnterYour', {
									fieldName: t('password'),
								})}
								name={'password'}
								component={PasswordField}
							/>
							<Field
								label={t('passwordConfirm')}
								placeholder={t('pleaseEnterYour', {
									fieldName: t('passwordConfirm'),
								})}
								name={'confirmPassword'}
								component={PasswordField}
							/>
						</div>
						<CustomButton
							text={t('register')}
							type={'submit'}
							className={'button-secondary w-full'}
							isLoading={isLoading}
							disabled={isLoading}
						/>
					</Form>
				)}
			</Formik>
			<div className="separator-or mt-[40px] mb-[40px]">
				<span className={'f-14-600 c_9A9A9A'}>{t('or')}</span>
			</div>
			<LoginWithGoogleButton />
			<LoginWithFacebookButton />
			<p className={'f-16-500 c__737373 text-center'}>
				{t('IHaveAccount')}
				{'? '}
				<Link
					href={HRef.login}
					className={'f-16-600 c_F47B3D cursor-pointer'}
				>
					{t('login')}
				</Link>
			</p>
		</div>
	);
};
export default Register;
