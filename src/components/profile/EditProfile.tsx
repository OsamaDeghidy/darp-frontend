import React, { FC, useEffect, useState } from 'react';
import { useI18n } from '@/src/locales';
import { Field, Form, Formik } from 'formik';
import InputField from '@/src/components/ui/fields/InputField';
import DatePickerField from '@/src/components/ui/fields/DatePickerField';
import * as yup from 'yup';
import Link from 'next/link';
import { HRef } from '@/src/utilities/href';
import {
	useGetMyProfileQuery,
	useUpdateMyProfileMutation,
} from '@/src/store/RTKQuery/profile/profileApi';
import Loader from '@/src/components/ui/Loader';
import CustomButton from '@/src/components/ui/buttons/CustomButton';
import { useRouter } from 'next/router';
import ChangePasswordModal from '@/src/components/ui/modals/ChangePasswordModal';
import {
	IStatusChangeModel,
	StatusChangeModel,
} from '@/src/models/status-change';

interface IProps {
	profileImage?: string;
	coverImage?: string;
}

const fieldCol2Class = 'md:col-span-6 col-span-12';
const EditProfile: FC<IProps> = (props) => {
	const { profileImage, coverImage } = props;
	const t = useI18n();
	const { data, isSuccess, isLoading } = useGetMyProfileQuery();
	const [
		updateMyProfile,
		{ isLoading: isUpdating, isSuccess: isUpdateSuccess },
	] = useUpdateMyProfileMutation();
	const router = useRouter();
	const [changePasswordModal, setChangePasswordModal] =
		useState<IStatusChangeModel>(new StatusChangeModel());
	const schema = () => {
		return yup.object().shape({
			name: yup.string().required(t('required')),
			birthDay: yup.string().required(t('required')),
			city: yup.string().required(t('required')),
			mobile: yup.string().required(t('required')),
			country: yup.string().required(t('required')),
		});
	};
	useEffect(() => {
		if (isUpdateSuccess) {
			router.push(HRef.profile);
		}
	}, [isUpdateSuccess]);
	return (
		<div className={'mb-[60px]'}>
			<h3 className={'mb-[30px] f-24-700 c_004053'}>
				{t('modifyPersonalInformation')}
			</h3>
			{isLoading ? (
				<Loader />
			) : (
				<>
					{data && (
						<>
							<Formik
								initialValues={{
									name: data.data.name,
									birthDay: data.data.birthDay,
									city: data.data.city,
									mobile: data.data.mobile,
									country: data.data.country,
									email: data.data.email,
								}}
								validationSchema={schema}
								onSubmit={(values) => {
									updateMyProfile({
										name: values.name,
										dateOfBirth: values.birthDay,
										city: values.city,
										email: data.data.email,
										mobile: values.mobile,
										country: values.country,
										profileImage: profileImage
											? profileImage
											: data.data.profileImage,
										coverImage: coverImage
											? coverImage
											: data.data.coverImage,
									});
								}}
							>
								{({ values }) => (
									<Form>
										<div
											className={
												'border rounded-[10px] p-[25px] b-c_F1F2EC'
											}
										>
											<div className="grid grid-cols-12 gap-[24px] mb-[30px]">
												<Field
													className={fieldCol2Class}
													label={t(
														'firstNameAndLastName',
													)}
													placeholder={t(
														'pleaseEnterYour',
														{
															fieldName: t(
																'firstNameAndLastName',
															),
														},
													)}
													name={'name'}
													component={InputField}
												/>
												<Field
													className={fieldCol2Class}
													label={t('dateOfBirth')}
													placeholder={t(
														'pleaseEnterYour',
														{
															fieldName:
																t(
																	'dateOfBirth',
																),
														},
													)}
													name={'birthDay'}
													component={DatePickerField}
												/>
												<Field
													className={fieldCol2Class}
													label={t('city')}
													placeholder={t(
														'pleaseEnterYour',
														{
															fieldName:
																t('city'),
														},
													)}
													name={'city'}
													component={InputField}
												/>
												<Field
													className={fieldCol2Class}
													label={t('email')}
													placeholder={t(
														'pleaseEnterYour',
														{
															fieldName:
																t('email'),
														},
													)}
													name={'email'}
													type={'email'}
													isDisabled={true}
													component={InputField}
												/>
												<Field
													className={fieldCol2Class}
													label={t('mobile')}
													placeholder={t(
														'pleaseEnterYour',
														{
															fieldName:
																t('mobile'),
														},
													)}
													name={'mobile'}
													component={InputField}
												/>
												<Field
													className={fieldCol2Class}
													label={t('country')}
													placeholder={t(
														'pleaseEnterYour',
														{
															fieldName:
																t(
																	'cityProvince',
																),
														},
													)}
													name={'country'}
													component={InputField}
												/>
												<CustomButton
													className={
														'button-outline ' +
														fieldCol2Class
													}
													type={'button'}
													text={t('changePassword')}
													onClick={() => {
														setChangePasswordModal({
															statusChange:
																!changePasswordModal.statusChange,
															value: true,
														});
													}}
												/>
											</div>
											<div className="flex items-center gap-[15px]">
												<CustomButton
													type={'submit'}
													className={
														'button-secondary'
													}
													text={t('savingChanges')}
													isLoading={isUpdating}
													disabled={isUpdating}
												/>

												<Link
													href={HRef.profile}
													className={
														'button button-outline'
													}
												>
													{t('cancel')}
												</Link>
											</div>
										</div>
									</Form>
								)}
							</Formik>
							<ChangePasswordModal
								isHasPassword={data.data.isHasPassword}
								openModal={changePasswordModal}
							/>
						</>
					)}
				</>
			)}
		</div>
	);
};
export default EditProfile;
