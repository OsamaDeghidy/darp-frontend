import React, { FC, useEffect, useRef, useState } from 'react';
import { Field, Form, Formik } from 'formik';
import { useRouter } from 'next/navigation';
import * as yup from 'yup';
import CustomButton from '@/src/components/ui/buttons/CustomButton';
import { useI18n } from '@/src/locales';
import CodeInputField from '@/src/components/ui/fields/CodeInputField';
import { useConfirmEmailMutation, useResendEmailConfirmationMutation } from '@/src/store/RTKQuery/auth/authApi';
import Countdown from 'react-countdown';

const schema = (t: any) =>
	yup.object().shape({
		code: yup
			.string()
			.length(6, t('commonCode'))
			.required(t('commonRequired')),
	});

const ActivateAccountForm: FC = () => {
	const t = useI18n();
	const [time, setTime] = useState<number>(Date.now());
	const [canResend, setCanResend] = useState<boolean>(true);
	const countDownRef = useRef<Countdown>(null);
	const router = useRouter();
	useEffect(() => {
		if (countDownRef.current != null && !canResend) {
			if (countDownRef.current.api !== undefined) {
				countDownRef.current.api.start();
			}
		}
	}, [canResend]);
	const handleComplete = () => {
		setTime(Date.now());
		setCanResend(true);
	};

	const [resendVerifyEmail, resendResponse] =
		useResendEmailConfirmationMutation();

	const [
		confirmEmail,
		{ isSuccess: isSuccessConfirmEmail, isLoading: isConfirmLoading },
	] = useConfirmEmailMutation();

	useEffect(() => {
		if (isSuccessConfirmEmail) {
			router.push('/');
		}
	}, [isSuccessConfirmEmail, router]);
	useEffect(() => {
		if (resendResponse.isSuccess) {
			setCanResend(false);
			setTime(Date.now() + 29000);
		}
	}, [resendResponse.isSuccess]);
	return (
		<div>
			<Formik
				initialValues={{ code: '' }}
				validationSchema={schema(t)}
				onSubmit={(values) => {
					confirmEmail({ token: values.code });
				}}
			>
				{({}) => (
					<Form>
						<div className="flex flex-col items-center mb-[30px]">
							<Field
								name={'code'}
								count={6}
								component={CodeInputField}
							/>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-x-[15px]">
							<CustomButton
								type="submit"
								text={t('confirmEmail')}
								isLoading={isConfirmLoading}
								disabled={isConfirmLoading}
								className={'button-primary w-full'}
							/>

							<CustomButton
								text={
									<Countdown
										date={time}
										renderer={({ minutes, seconds }) =>
											canResend ? (
												t('resendEmailConfirmation')
											) : (
												<span className={'text-[15px]'}>
													{t(
														'youCanResendAfterSeconds',
														{ seconds },
													)}
												</span>
											)
										}
										onComplete={handleComplete}
										ref={countDownRef}
									/>
								}
								isLoading={resendResponse.isLoading}
								disabled={
									resendResponse.isLoading || !canResend
								}
								onClick={() => {
									resendVerifyEmail();
								}}
								className={'button-secondary w-full'}
							/>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default ActivateAccountForm;
