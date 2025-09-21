import { FC, useEffect, useState } from 'react';
import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import { useI18n } from '@/src/locales';
import InputField from '@/src/components/ui/fields/InputField';
import Link from 'next/link';
import { HRef } from '@/src/utilities/href';
import { useRouter } from 'next/router';
import { useForgetPasswordMutation } from '@/src/store/RTKQuery/auth/authApi';
import CustomButton from '@/src/components/ui/buttons/CustomButton';
import AuthAlertMessage from '@/src/components/auth/AuthAlertMessage';
import { useGetAuthModalsContentQuery } from '@/src/store/RTKQuery/common/commonApi';

interface IProps {}

const ForgetPassword: FC<IProps> = (props) => {
	const t = useI18n();
	const router = useRouter();
	const [showModal, setShowModal] = useState(false);
	const [forgetPassword, { isLoading, isSuccess }] =
		useForgetPasswordMutation();

	const { data } = useGetAuthModalsContentQuery();
	const cardContent = data?.data.authList.filter(
		(item) => item.type === 'Forget Password',
	);

	const schema = () => {
		return yup.object().shape({
			email: yup
				.string()
				.email(t('invalidEmail'))
				.required(t('required')),
		});
	};
	useEffect(() => {
		if (isSuccess) {
			setShowModal(true);
		}
	}, [isSuccess]);
	return (
		<>
			{isSuccess ? (
				<AuthAlertMessage
					title={cardContent ? cardContent[0].successTitle : ''}
					description={
						cardContent ? cardContent[0].successDescription : ''
					}
					link={{
						text: t('resend'),
						href: HRef.forgetPassword,
					}}
				/>
			) : (
				<div>
					<h2 className={'f-24-700 c_004053 mb-[15px]'}>
						{cardContent?.[0].title}
					</h2>
					<p className={'f-14-500 c_black mb-[30px]'}>
						{cardContent?.[0].description}
					</p>
					<Formik
						initialValues={{
							email: '',
						}}
						validationSchema={schema()}
						onSubmit={(values) => {
							forgetPassword({ email: values.email });
						}}
					>
						{({}) => (
							<Form>
								<Field
									className={'mb-[20px]'}
									label={t('email')}
									placeholder={t('pleaseEnterYour', {
										fieldName: t('email'),
									})}
									name={'email'}
									type={'email'}
									component={InputField}
								/>
								<CustomButton
									text={t('send')}
									type={'submit'}
									className={
										'button button-secondary w-full mb-[30px]'
									}
									isLoading={isLoading}
									disabled={isLoading}
								/>
							</Form>
						)}
					</Formik>
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
			)}
		</>
	);
};
export default ForgetPassword;
