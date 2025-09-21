import React, { FC, useEffect } from 'react';
import { useI18n } from '@/src/locales';
import CustomGoogleMap from '@/src/components/ui/maps/CustomGoogleMap';
import { Field, FieldArray, Form, Formik } from 'formik';
import InputField from '@/src/components/ui/fields/InputField';
import * as yup from 'yup';
import DatePickerField from '@/src/components/ui/fields/DatePickerField';
import CheckboxField from '@/src/components/ui/fields/CheckboxField';
import {
	IVolunteeringModel,
	IVolunteeringPageModel,
	VolunteeringFormModel,
} from '@/src/models/contact-us';
import CustomButton from '@/src/components/ui/buttons/CustomButton';
import { notification } from 'antd/lib';
import { HRef } from '@/src/utilities/href';
import { useSendVolunteeringMutation } from '@/src/store/RTKQuery/contact-us/contactUsApi';
import { useRouter } from 'next/router';

interface IProps {
	data: IVolunteeringPageModel;
}

const fieldCol3Class = 'lg:col-span-4 md:col-span-6 col-span-12';
const fieldCol5Class =
	'xl:col-span-2 lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12';

const Volunteering: FC<IProps> = (props) => {
	const { data } = props;
	const t = useI18n();
	const router = useRouter();
	const [sendVolunteering, sendVolunteeringResponse] =
		useSendVolunteeringMutation();

	const schema = () => {
		return yup.object().shape({
			associationMembershipNumber: yup.string(),
			city: yup.string().required(t('required')),
			email: yup
				.string()
				.email(t('invalidEmail'))
				.required(t('required')),
			cityVolunteer: yup.string().required(t('required')),
			identificationNumber: yup.string().required(t('required')),
			mobile: yup.string().required(t('required')),
			name: yup.string().required(t('required')),
			nationality: yup.string().required(t('required')),
			region: yup.string().required(t('required')),
			regionVolunteer: yup.string().required(t('required')),
			dateOfBirth: yup.date().required(t('required')),
		});
	};
	useEffect(() => {
		if (sendVolunteeringResponse.isSuccess) {
			notification.success({
				message: t('thankYouForContactingUs'),
			});
			router.push(HRef.home);
		}
	}, [sendVolunteeringResponse.isSuccess]);

	return (
		<section>
			<h1 className={'mb-[20px] c_004053 f-32-700'}>{data.title}</h1>
			<p className={'f-16-700 c_2D2D2D mb-[20px]'}>{data.description}</p>
			<div className={'rounded-[10px] overflow-hidden mb-[20px]'}>
				<CustomGoogleMap
					lat={Number(data.mapLatitude)}
					lng={Number(data.mapLongitude)}
				/>
			</div>
			<h2 className={'f-24-700 c_004053 mb-[20px]'}>{data.formTitle}</h2>
			<Formik
				initialValues={{
					...new VolunteeringFormModel(),
					workVolunteeringDisplay: data.workVolunteering.map(
						(item) => {
							return { name: item, value: false };
						},
					),
					timeVolunteeringDisplay: data.timeVolunteering.map(
						(item) => {
							return { name: item, value: false };
						},
					),
				}}
				validationSchema={schema}
				onSubmit={(values) => {
					let data: IVolunteeringModel = {
						...values,
						workVolunteer: values.other
							? values.workOther
							: values.workVolunteeringDisplay
									.filter((item) => item.value)
									.map((item) => item.name)
									.join(' - '),
						timeVolunteer: values.timeVolunteeringDisplay
							.filter((item) => item.value)
							.map((item) => item.name)
							.join(' - '),
					};
					sendVolunteering(data);
				}}
			>
				{({ values, setFieldValue }) => (
					<Form>
						<div
							className={
								'border rounded-[10px] p-[25px] b-c_F1F2EC bg-c_white'
							}
						>
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
									component={InputField}
								/>
								<Field
									className={fieldCol3Class}
									label={t('idNumber')}
									placeholder={t('pleaseEnterYour', {
										fieldName: t('idNumber'),
									})}
									name={'identificationNumber'}
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
									component={InputField}
								/>
								<Field
									className={fieldCol3Class}
									label={t(
										'associationMembershipNumberIfAny',
									)}
									placeholder={t('pleaseEnterYour', {
										fieldName: t(
											'associationMembershipNumber',
										),
									})}
									name={'associationMembershipNumber'}
									component={InputField}
								/>
								<Field
									className={fieldCol3Class}
									label={t(
										'theAreaYouWouldLikeToVolunteerIn',
									)}
									placeholder={t('pleaseEnterYour', {
										fieldName: t('region'),
									})}
									name={'regionVolunteer'}
									component={InputField}
								/>
								<Field
									className={fieldCol3Class}
									label={t(
										'theCityCountyInWhichYouWouldLikeToVolunteer',
									)}
									placeholder={t('pleaseEnterYour', {
										fieldName: t('cityProvince'),
									})}
									name={'cityVolunteer'}
									component={InputField}
								/>

								<div className="col-span-12">
									<h3
										className={'f-16-600 c_black mb-[20px]'}
									>
										{t(
											'theWorkYouWouldLikeToVolunteerForYouCanChooseMoreThanOne',
										)}
									</h3>
									<div
										className={
											'grid xl:grid-cols-10 grid-cols-12 gap-[24px]'
										}
									>
										<FieldArray
											name="workVolunteeringDisplay"
											render={() => (
												<>
													{values.workVolunteeringDisplay &&
														values.workVolunteeringDisplay.map(
															(item, index) => (
																<Field
																	key={index}
																	className={
																		fieldCol5Class
																	}
																	label={
																		item.name
																	}
																	name={`workVolunteeringDisplay.${index}.value`}
																	component={
																		CheckboxField
																	}
																/>
															),
														)}
												</>
											)}
										/>

										<Field
											className={fieldCol5Class}
											label={t('other')}
											name={'other'}
											component={CheckboxField}
										/>
										{values.other == true && (
											<Field
												className={fieldCol3Class}
												placeholder={t(
													'pleaseEnterYour',
													{
														fieldName: t(
															'pleaseListTheJobsYouWouldLikeToVolunteerFor',
														),
													},
												)}
												name={'workOther'}
												component={InputField}
											/>
										)}
									</div>
								</div>
								<div className="col-span-12">
									<h3
										className={'f-16-600 c_black mb-[20px]'}
									>
										{t('timesYouCanVolunteer')}
									</h3>
									<div
										className={
											'grid xl:grid-cols-10 grid-cols-12 gap-[24px]'
										}
									>
										<FieldArray
											name="timeVolunteeringDisplay"
											render={() => (
												<>
													{values.timeVolunteeringDisplay &&
														values.timeVolunteeringDisplay.map(
															(item, index) => (
																<Field
																	key={index}
																	className={
																		fieldCol5Class
																	}
																	label={
																		item.name
																	}
																	name={`timeVolunteeringDisplay.${index}.value`}
																	component={
																		CheckboxField
																	}
																/>
															),
														)}
												</>
											)}
										/>
									</div>
								</div>
							</div>
							<CustomButton
								text={t('send')}
								type={'submit'}
								className={'button-secondary'}
								isLoading={sendVolunteeringResponse.isLoading}
								disabled={sendVolunteeringResponse.isLoading}
							/>
						</div>
					</Form>
				)}
			</Formik>
		</section>
	);
};
export default Volunteering;
