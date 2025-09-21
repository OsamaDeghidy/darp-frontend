import React, { FC, useState } from 'react';
import { useI18n } from '@/src/locales';
import CustomBreadcrumb from '@/src/components/ui/CustomBreadcrumb';
import Link from 'next/link';
import { HRef } from '@/src/utilities/href';
import OrderSummeryCard from '@/src/components/ui/cards/OrderSummeryCard';
import { Field, Form, Formik } from 'formik';
import RadioField from '@/src/components/ui/fields/RadioField';
import CreditDebitCardIcon from '@/src/components/ui/icons/CreditDebitCardIcon';
import ApplePayIcon from '@/src/components/ui/icons/ApplePayIcon';
import StcIcon from '@/src/components/ui/icons/StcIcon';
import MadaIcon from '@/src/components/ui/icons/MadaIcon';
import PaymentCard from '@/src/components/ui/cards/PaymentCard';
import VisaIcon from '@/src/components/ui/icons/VisaIcon';
import { range } from 'lodash';
import AddIcon from '@/src/components/ui/icons/AddIcon';
import AddCardModal from '@/src/components/ui/modals/AddCardModal';
import {
	IStatusChangeModel,
	StatusChangeModel,
} from '@/src/models/status-change';
import PasswordField from '@/src/components/ui/fields/PasswordField';
import InputField from '@/src/components/ui/fields/InputField';
import AddAddressModal from '@/src/components/ui/modals/AddAddressModal';
import AddressCard from '@/src/components/ui/cards/AddressCard';

interface IProps {}

const fieldCol3Class = 'lg:col-span-4 md:col-span-6 col-span-12';

const OrderPay: FC<IProps> = (props) => {
	const t = useI18n();
	const [addCardModal, setAddCardModal] = useState<IStatusChangeModel>(
		new StatusChangeModel(),
	);
	const [addAddressModal, setAddAddressModal] = useState<IStatusChangeModel>(
		new StatusChangeModel(),
	);
	return (
		<div>
			<div className="container">
				<CustomBreadcrumb
					className={'mb-[20px]'}
					data={[
						{
							title: <Link href={HRef.home}>{t('home')}</Link>,
						},
						{
							title: (
								<Link href={HRef.productDetails}>
									{t('productDetails')}
								</Link>
							),
						},
						{
							title: (
								<Link href={HRef.productCart}>{t('cart')}</Link>
							),
						},
						{
							title: t('payment'),
						},
					]}
				/>
				<Formik
					initialValues={{
						payMethod: 'creditDebitCard',
					}}
					onSubmit={(values) => {}}
				>
					{({ values, submitForm }) => (
						<Form>
							<div className="grid grid-cols-12 gap-[24px] mb-[60px]">
								<div className="lg:col-span-8 col-span-12">
									<div className="rounded-[10px] border p-[25px] mb-[30px]">
										<h3
											className={
												'f-24-700 c_004053 mb-[15px]'
											}
										>
											{t('deliveryAddresses')}
										</h3>
										<div className="flex flex-col gap-[20px]">
											{range(0, 2).map(
												(orderItem, orderItemIndex) => (
													<Field
														key={orderItemIndex}
														className={
															fieldCol3Class
														}
														name={'addressCard'}
														value={
															'addressCard' +
															orderItemIndex
														}
														component={RadioField}
													>
														<AddressCard
															key={orderItemIndex}
															name={
																'ابراهيم محمد'
															}
															address={
																'2 شارع نجيب محفوظ متفرع من شارع الامل  - قصر النيل - القاهرة- مصر'
															}
														/>
													</Field>
												),
											)}
											<div className="flex justify-end w-full">
												<button
													type={'button'}
													onClick={() => {
														setAddAddressModal({
															statusChange:
																!addAddressModal.statusChange,
															value: true,
														});
													}}
													className={
														'button button-orange-text'
													}
												>
													<AddIcon />
													{t('addANewAddress')}
												</button>
											</div>
										</div>
									</div>
									<div className="rounded-[10px] border p-[25px]">
										<h3
											className={
												'f-24-700 c_004053 mb-[15px]'
											}
										>
											{t('paymentMethods')}
										</h3>

										<div className="grid grid-cols-12 gap-[24px] mb-[20px]">
											<Field
												className={fieldCol3Class}
												name={'payMethod'}
												value={'creditDebitCard'}
												component={RadioField}
											>
												<div className="w-full flex items-center gap-[10px] p-[15px] border rounded-[10px] b-c_EDF4F2">
													<CreditDebitCardIcon />
													<p
														className={
															'f-14-600 c_black'
														}
													>
														{t('creditDebitCard')}
													</p>
												</div>
											</Field>
											<Field
												className={fieldCol3Class}
												value={'applePay'}
												name={'payMethod'}
												component={RadioField}
											>
												<div className="w-full flex items-center gap-[10px] p-[15px] border rounded-[10px] b-c_EDF4F2">
													<ApplePayIcon />
													<p
														className={
															'f-14-600 c_black'
														}
													>
														{t('applePay')}
													</p>
												</div>
											</Field>
											<Field
												className={fieldCol3Class}
												value={'stc'}
												name={'payMethod'}
												component={RadioField}
											>
												<div className="w-full flex items-center gap-[10px] p-[15px] border rounded-[10px] b-c_EDF4F2">
													<StcIcon />
													<p
														className={
															'f-14-600 c_black'
														}
													>
														{t('stc')}
													</p>
												</div>
											</Field>
											<Field
												className={fieldCol3Class}
												value={'mada'}
												name={'payMethod'}
												component={RadioField}
											>
												<div className="w-full flex items-center gap-[10px] p-[15px] border rounded-[10px] b-c_EDF4F2">
													<MadaIcon />
													<p
														className={
															'f-14-600 c_black'
														}
													>
														{t('mada')}
													</p>
												</div>
											</Field>
										</div>
										<hr
											className={'mb-[20px] b-c_F1F2EC'}
										/>
										{(values.payMethod ==
											'creditDebitCard' ||
											values.payMethod == 'mada') && (
											<div className="flex flex-col gap-[15px]">
												{range(1, 3).map(
													(item, index) => (
														<Field
															key={index}
															className={
																fieldCol3Class
															}
															value={
																'paymentCard' +
																item
															}
															name={'paymentCard'}
															component={
																RadioField
															}
														>
															<PaymentCard
																name={
																	'ابراهيم محمد'
																}
																icon={
																	<VisaIcon />
																}
																mainIcon={
																	<CreditDebitCardIcon />
																}
																number={
																	'****11111'
																}
																type={
																	'بطاقة ائتمان'
																}
																date={'11/11'}
															/>
														</Field>
													),
												)}
												<div className="flex justify-end w-full">
													<button
														type={'button'}
														onClick={() => {
															setAddCardModal({
																statusChange:
																	!addCardModal.statusChange,
																value: true,
															});
														}}
														className={
															'button button-orange-text'
														}
													>
														<AddIcon />
														{t('addACard')}
													</button>
												</div>
											</div>
										)}
										{values.payMethod == 'applePay' && (
											<div
												className={
													'bg-c_F8F8F8 rounded-[10px] border p-[30px] flex flex-col items-center justify-center'
												}
											>
												<p
													className={
														'f-20-700 c_004053 mb-[20px] max-w-[400px]'
													}
												>
													{t(
														'pleaseEnterYourPassNumber',
													)}
												</p>
												<Field
													className={
														'w-full max-w-[400px]'
													}
													label={t('passNumber')}
													placeholder={t(
														'pleaseEnterYour',
														{
															fieldName:
																t('passNumber'),
														},
													)}
													showIcon={false}
													name={'password'}
													component={PasswordField}
												/>
											</div>
										)}
										{values.payMethod == 'stc' && (
											<div
												className={
													'bg-c_F8F8F8 rounded-[10px] border p-[30px] flex flex-col items-center justify-center'
												}
											>
												<p
													className={
														'f-20-700 c_004053 mb-[10px] max-w-[500px]'
													}
												>
													{t(
														'pleaseEnterThePhoneNumberForYourStcAccount',
													)}
												</p>
												<p
													className={
														'f-16-500 c_737373 mb-[20px] max-w-[500px]'
													}
												>
													{t(
														'a_4DigitIdentificationNumberWillBeSentToYourPhoneNumber',
													)}
												</p>
												<Field
													className={
														'w-full max-w-[400px]'
													}
													label={t('phoneNumber')}
													placeholder={t(
														'pleaseEnterYour',
														{
															fieldName:
																t(
																	'phoneNumber',
																),
														},
													)}
													showIcon={false}
													name={'phoneNumber'}
													type={'number'}
													component={InputField}
												/>
											</div>
										)}
									</div>
								</div>

								<div className="lg:col-span-4 col-span-12">
									<OrderSummeryCard
										total={'200 ريال'}
										delivery={'15 ريال'}
										finalTotal={'215 ريال'}
										link={{
											href: HRef.orderSummery,
											text: t('continueToPay'),
										}}
									/>
								</div>
							</div>
						</Form>
					)}
				</Formik>
			</div>
			<AddCardModal openModal={addCardModal} />
			<AddAddressModal openModal={addAddressModal} />
		</div>
	);
};
export default OrderPay;
