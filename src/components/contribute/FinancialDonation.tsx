import React, { FC, useEffect, useState } from 'react';
import { useI18n } from '@/src/locales';
import { Field, Form, Formik } from 'formik';
import InputField from '@/src/components/ui/fields/InputField';
import * as yup from 'yup';
import RadioField from '@/src/components/ui/fields/RadioField';
import SwitchField from '@/src/components/ui/fields/SwitchField';
import {
	usePaymentMutation,
	useRecurringPaymentMutation,
} from '@/src/store/RTKQuery/payment/paymentApi';
import { useGetPaymentStatusMutation } from '@/src/store/RTKQuery/payment/paymentStatus';
import CustomButton from '@/src/components/ui/buttons/CustomButton';
import Link from 'next/link';
import { HRef } from '@/src/utilities/href';
import SuccessIcon from '@/src/components/ui/icons/SuccessIcon';
import Close2Icon from '@/src/components/ui/icons/Close2Icon';
import { IContributePageModel } from '@/src/models/contact-us';
import { useSelector } from 'react-redux';
import { selectAuthUserSlice } from '@/src/store/reducers/authUserSlice';
import { PaymentStatusEnum } from '@/src/enums/payment-status-enum';

interface IProps {
	data: IContributePageModel;
}

const fieldCol3Class = 'lg:col-span-4 md:col-span-6 col-span-12';
const FinancialDonation: FC<IProps> = (props) => {
	const { data } = props;
	const t = useI18n();
	const [payment, paymentResult] = usePaymentMutation();
	const [recurringPayment, recurringPaymentResult] =
		useRecurringPaymentMutation();
	const [paymentStatus, paymentStatusResult] = useGetPaymentStatusMutation();
	const [paymentUrl, setPaymentUrl] = useState<string>();
	const [paymentId, setPaymentId] = useState<number>();
	const [status, setStatus] = useState('');
	const { user } = useSelector(selectAuthUserSlice);

	const schema = () => {
		return yup.object().shape({
			name: yup.string(),
			email: yup.string().email(),
			phoneNumber: yup.number(),
			amount: yup.number(),
		});
	};

	useEffect(() => {
		if (
			paymentResult.data?.isSuccess &&
			paymentResult.data.data.url &&
			paymentResult.data.data.id
		) {
			setPaymentUrl(paymentResult.data.data.url);
			setPaymentId(paymentResult.data.data.id);
		}
	}, [paymentResult.data]);
	useEffect(() => {
		if (
			recurringPaymentResult.data?.isSuccess &&
			recurringPaymentResult.data.data.url &&
			recurringPaymentResult.data.data.id
		) {
			setPaymentUrl(recurringPaymentResult.data.data.url);
			setPaymentId(recurringPaymentResult.data.data.id);
		}
	}, [recurringPaymentResult.data]);
	useEffect(() => {
		if (paymentStatusResult.data?.isSuccess) {
			setStatus(paymentStatusResult.data.data.status);
		}
	}, [paymentStatusResult.data]);

	const getTransactionStatus = async () => {
		paymentStatus({ payment_id: paymentId });
	};

	const onload = () => {
		setTimeout(() => {
			getTransactionStatus();
		}, 2000);
	};

	return (
		<section>
			<h2 className={'mb-[20px] c_004053 f-32-700'}>{data.title}</h2>
			<p className={'f-16-700 c_2D2D2D mb-[20px]'}>{data.description}</p>
			<h3 className={'f-24-700 c_004053 mb-[20px]'}>{data.formTitle}</h3>
			{!paymentUrl && (
				<Formik
					initialValues={{
						amount: undefined,
						name: '',
						email: '',
						phoneNumber: '',
						monthly: false,
					}}
					validationSchema={schema}
					onSubmit={(values) => {
						if (values.monthly) {
							recurringPayment({
								amount: values.amount,
							});
						} else {
							payment({
								amount: values.amount,
								name: values.name,
								email: values.email,
								phoneNumber: values.phoneNumber,
							});
						}
					}}
				>
					{({ values, isValid, dirty }) => (
						<Form>
							<div
								className={
									'border rounded-[10px] p-[25px] b-c_F1F2EC bg-c_white'
								}
							>
								<div className="grid grid-cols-12 gap-[24px] mb-[20px]">
									<Field
										className={fieldCol3Class}
										label={t('firstNameAndLastName')}
										placeholder={t('pleaseEnterYour', {
											fieldName: t(
												'firstNameAndLastName',
											),
										})}
										name={'name'}
										component={InputField}
									/>
									<Field
										className={fieldCol3Class}
										label={t('email')}
										placeholder={t('pleaseEnterYour', {
											fieldName: t('email'),
										})}
										name={'email'}
										type={'email'}
										component={InputField}
									/>
									<Field
										className={fieldCol3Class}
										label={t('mobile')}
										placeholder={t('pleaseEnterYour', {
											fieldName: t('mobile'),
										})}
										name={'phoneNumber'}
										type={'text'}
										component={InputField}
									/>
								</div>
								<hr className={'mb-[20px]'} />

								<div className={'mb-[20px]'}>
									<h5
										className={
											'f-18-500 c_737373 mb-[20px]'
										}
									>
										{t('chooseTheAmountYouWantToPay')}
									</h5>
									<div className="grid grid-cols-12 gap-[24px]">
										<div className="lg:col-span-6 col-span-12">
											<div className="flex items-center gap-[10px] flex-wrap">
												<Field
													className={'flex-1'}
													value={5}
													label={t('sarWithNumber', {
														number: 5,
													})}
													type={'button'}
													name={'amount'}
													component={RadioField}
												/>
												<Field
													className={'flex-1'}
													value={10}
													label={t('sarWithNumber', {
														number: 10,
													})}
													type={'button'}
													name={'amount'}
													component={RadioField}
												/>
												<Field
													className={'flex-1'}
													value={15}
													label={t('sarWithNumber', {
														number: 15,
													})}
													type={'button'}
													name={'amount'}
													component={RadioField}
												/>
											</div>
										</div>
										<div className="lg:col-span-6 col-span-12">
											<div className="flex items-center gap-[24px]">
												<Field
													className={
														fieldCol3Class +
														' flex-1'
													}
													placeholder={t(
														'pleaseEnterYour',
														{
															fieldName: t(
																'theAmountYouWantToPay',
															),
														},
													)}
													name={'amount'}
													type={'number'}
													component={InputField}
												/>
												{user && (
													<Field
														className={
															fieldCol3Class
														}
														label={t('monthly')}
														name={'monthly'}
														component={SwitchField}
													/>
												)}
											</div>
										</div>
									</div>
								</div>

								<CustomButton
									isLoading={
										paymentResult.isLoading ||
										recurringPaymentResult.isLoading
									}
									disabled={
										!isValid || paymentResult.isLoading
									}
									text={t('send')}
									type={'submit'}
									className={'button button-secondary'}
								/>
							</div>
						</Form>
					)}
				</Formik>
			)}

			{paymentUrl &&
				status != PaymentStatusEnum.Captured &&
				status != PaymentStatusEnum.Failed && (
					<>
						<iframe
							className={'rounded-[10px] mt-[40px]'}
							id="paymentIframe"
							width="100%"
							height="600px"
							src={paymentUrl}
							onLoad={(e) => onload()}
							allow="payment"
						/>
					</>
				)}
			{/*{status === 'INITIATED' && (*/}
			{/*	<div*/}
			{/*		className={*/}
			{/*			'p-[60px] h-[600px] flex flex-col items-center justify-center border b-c_F1F2EC rounded-[10px] mt-[40px]'*/}
			{/*		}*/}
			{/*	>*/}
			{/*		<div>*/}
			{/*			<Spinner />*/}
			{/*		</div>*/}
			{/*	</div>*/}
			{/*)}*/}

			{status === PaymentStatusEnum.Captured && (
				<div
					className={
						'flex flex-col items-center justify-center  p-[40px] border rounded-[10px] gap-[30px] mt-[30px] bg-c_white box-shadow'
					}
				>
					<SuccessIcon className={'mb-[20px]'} />

					<p className="f-24-700 c_004053 text-center mb-[30px]">
						{t('paymentHasBeenCompletedSuccessfully')}
					</p>
					<Link href={HRef.home} className={'button button-orange'}>
						{t('goToTheHomePage')}
					</Link>
				</div>
			)}
			{status === PaymentStatusEnum.Failed && (
				<div
					className={
						'h-full flex flex-col items-center justify-center p-[40px] border rounded-[10px] gap-[30px] mt-[30px] bg-c_white'
					}
				>
					<Close2Icon className={'mb-[20px]'} />

					<p className="f-24-700 c_EB0000 text-center mb-[10px]">
						{t('paymentFailed')}
					</p>

					<Link href={HRef.financialDonation}>
						<button
							className={'button button-orange'}
							onClick={() => {
								setStatus('');
								// window.location.reload();
								setPaymentUrl('');
							}}
						>
							{t('tryAgain')}
						</button>
					</Link>
				</div>
			)}
		</section>
	);
};
export default FinancialDonation;
