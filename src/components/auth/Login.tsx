import { FC, useEffect } from 'react';
import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import { useI18n } from '@/src/locales';
import InputField from '@/src/components/ui/fields/InputField';
import PasswordField from '@/src/components/ui/fields/PasswordField';
import Link from 'next/link';
import { HRef } from '@/src/utilities/href';
import { CookieEnum, setCookie } from '@/src/utilities/cookie';
import { useRouter } from 'next/router';
import { LoginModel } from '@/src/models/auth';
import { useLoginMutation } from '@/src/store/RTKQuery/auth/authApi';
import CustomButton from '@/src/components/ui/buttons/CustomButton';
import LoginWithGoogleButton from '@/src/components/ui/buttons/LoginWithGoogleButton';
import LoginWithFacebookButton from '@/src/components/ui/buttons/LoginWithFacebookButton';
import LoginWithAppleButton from '@/src/components/ui/buttons/LoginWithAppleButton';

interface IProps {}

const Login: FC<IProps> = (props) => {
	const t = useI18n();
	const router = useRouter();
	const [login, { data, isLoading, isSuccess }] = useLoginMutation();
	const schema = () => {
		return yup.object().shape({
			email: yup
				.string()
				.email(t('invalidEmail'))
				.required(t('required')),
			password: yup.string().required(t('required')),
		});
	};
	useEffect(() => {
		if (isSuccess && data) {
			setCookie(CookieEnum.token, data.data.token);
			router.push(HRef.home);
		}
	}, [isSuccess]);
	return (
		<div>
			<Formik
				initialValues={new LoginModel()}
				validationSchema={schema()}
				onSubmit={(values) => {
					login(values);
				}}
			>
				{({}) => (
					<Form>
						<Field
							className={'mt-[40px] mb-[20px]'}
							label={t('email')}
							placeholder={t('pleaseEnterYour', {
								fieldName: t('email'),
							})}
							name={'email'}
							type={'email'}
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
						<div className="flex justify-end mt-[10px] mb-[30px]">
							<Link
								href={HRef.forgetPassword}
								className={'f-14-500 c_F47B3D h-c_F47B3D'}
							>
								{t('forgetPassword')}
							</Link>
						</div>
						<CustomButton
							text={t('login')}
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
			<LoginWithAppleButton />
			<p className={'f-16-500 c__737373 text-center'}>
				{t('youDontHaveAnAccount')}
				{'? '}
				<Link
					href={HRef.register}
					className={'f-16-600 c_F47B3D cursor-pointer'}
				>
					{t('subscribe')}
				</Link>
			</p>
		</div>
	);
};
export default Login;
