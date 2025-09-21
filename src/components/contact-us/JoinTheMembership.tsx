import React, { FC } from 'react';
import { useI18n } from '@/src/locales';
import { Field, Form, Formik } from 'formik';
import InputField from '@/src/components/ui/fields/InputField';
import SelectField from '@/src/components/ui/fields/SelectField';
import DatePickerField from '@/src/components/ui/fields/DatePickerField';
import * as yup from 'yup';
import TextAreaField from '@/src/components/ui/fields/TextAreaField';
import UploadFileField from '@/src/components/ui/fields/UploadFileField';

interface IProps {}

const fieldCol3Class = 'lg:col-span-4 md:col-span-6 col-span-12';
const col3Class = 'xl:col-span-4 lg:col-span-6 col-span-12';
const CallUs: FC<IProps> = (props) => {
	const t = useI18n();
	const schema = () => {
		return yup.object().shape({});
	};
	return (
		<section>
			<h2 className={'mb-[20px] c_004053 f-32-700'}>
				{t('joinTheMembership')}
			</h2>
			<p className={'f-20-600 c_2D2D2D mb-[20px]'}>
				{t('joinTheMembershipDescription')}
			</p>
			<div
				className={
					'border rounded-[10px] py-[20px] px-[30px] b-c_F1F2EC mb-[15px]'
				}
			>
				<div className="grid grid-cols-12 gap-[24px]">
					<div className={col3Class}>
						<div className="flex items-center gap-[5px]">
							<h6 className={'f-18-700 c_black'}>
								{t('theBank')}:
							</h6>
							<p className={'f-18-600 c_black'}>
								البنك الاهلي السعودي
							</p>
						</div>
					</div>
					<div className={col3Class}>
						<div className="flex items-center gap-[5px]">
							<h6 className={'f-18-700 c_black'}>
								{t('theAccount')}:
							</h6>
							<p className={'f-18-600 c_black'}>70500000098403</p>
						</div>
					</div>
					<div className={col3Class}>
						<div className="flex items-center gap-[5px]">
							<h6 className={'f-18-700 c_black'}>{t('iban')}:</h6>
							<p className={'f-18-600 c_black'}>
								SA6410000070500000098403{' '}
							</p>
						</div>
					</div>
				</div>
			</div>
			<p className={'f-18-600 c_2D2D2D mb-[20px]'}>
				{t(
					'ifYourMembershipIsAcceptedYouWillBeNotifiedByTheAssociationAndIfYouAreNotApprovedTheAmountWillBeReturnedToYou',
				)}
			</p>
			<Formik
				initialValues={{
					other: false,
				}}
				validationSchema={schema}
				onSubmit={(values) => {}}
			>
				{({ values }) => (
					<Form>
						<div
							className={
								'border rounded-[10px] p-[25px] b-c_F1F2EC bg-c_white'
							}
						>
							<h3 className={'f-24-700 c_004053 mb-[20px]'}>
								{t('volunteeringFillForm')}
							</h3>
							<div className="grid grid-cols-12 gap-[24px] mb-[30px]">
								<Field
									className={fieldCol3Class}
									label={t('firstNameAndLastName')}
									placeholder={t('pleaseEnterYour', {
										fieldName: t('firstNameAndLastName'),
									})}
									name={'name'}
									component={InputField}
								/>
								<Field
									className={fieldCol3Class}
									label={t('nationality')}
									placeholder={t('pleaseEnterYour', {
										fieldName: t('nationality'),
									})}
									name={'nationality'}
									component={SelectField}
								/>
								<Field
									className={fieldCol3Class}
									label={t('idNumber')}
									placeholder={t('pleaseEnterYour', {
										fieldName: t('idNumber'),
									})}
									name={'idNumber'}
									type={'number'}
									component={InputField}
								/>
								<Field
									className={fieldCol3Class}
									label={t('dateOfBirth')}
									placeholder={t('pleaseEnterYour', {
										fieldName: t('dateOfBirth'),
									})}
									name={'dateOfBirth'}
									component={DatePickerField}
								/>
								<Field
									className={fieldCol3Class}
									label={t('city')}
									placeholder={t('pleaseEnterYour', {
										fieldName: t('city'),
									})}
									name={'city'}
									component={InputField}
								/>
								<Field
									className={fieldCol3Class}
									label={t('region')}
									placeholder={t('pleaseEnterYour', {
										fieldName: t('region'),
									})}
									name={'region'}
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
									name={'mobile'}
									type={'number'}
									component={InputField}
								/>
								<Field
									className={fieldCol3Class}
									label={t('theTypeOfMembershipYouWant')}
									placeholder={t('pleaseEnterYour', {
										fieldName: t(
											'theTypeOfMembershipYouWant',
										),
									})}
									name={'theTypeOfMembershipYouWant'}
									component={SelectField}
								/>
								<Field
									className={'col-span-12'}
									label={t(
										'theReasonsForYourDesireToJoinTheAssociation',
									)}
									placeholder={t('pleaseWriteYour', {
										fieldName: t(
											'theReasonsForYourDesireToJoinTheAssociation',
										),
									})}
									name={
										'theReasonsForYourDesireToJoinTheAssociation'
									}
									component={TextAreaField}
								/>
								<Field
									className={'col-span-12'}
									label={t(
										'aBriefStatementOfYourWalkingAndHikingActivity',
									)}
									placeholder={t('pleaseWriteYour', {
										fieldName: t(
											'aBriefStatementOfYourWalkingAndHikingActivity',
										),
									})}
									name={
										'aBriefStatementOfYourWalkingAndHikingActivity'
									}
									component={TextAreaField}
								/>
								<Field
									className={'col-span-12'}
									label={t(
										'wouldYouLikeToParticipateInWorkInTheAssociationPleaseMentionIt',
									)}
									placeholder={t('pleaseWriteYour', {
										fieldName: t(
											'wouldYouLikeToParticipateInWorkInTheAssociationPleaseMentionIt',
										),
									})}
									name={
										'wouldYouLikeToParticipateInWorkInTheAssociationPleaseMentionIt'
									}
									component={TextAreaField}
								/>
								<Field
									className={'col-span-12'}
									name={'file'}
									multiple={true}
									label={t(
										'downloadTheMembershipFeePaymentForm',
									)}
									component={UploadFileField}
								/>
							</div>
							<button
								type={'submit'}
								className={'button button-orange'}
							>
								{t('send')}
							</button>
						</div>
					</Form>
				)}
			</Formik>
		</section>
	);
};
export default CallUs;
