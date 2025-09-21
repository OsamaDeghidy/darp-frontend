import React, { FC, useEffect } from 'react';
import { useI18n } from '@/src/locales';
import { Field, Form, Formik } from 'formik';
import InputField from '@/src/components/ui/fields/InputField';
import * as yup from 'yup';
import TextAreaField from '@/src/components/ui/fields/TextAreaField';
import {
	ComplaintsAndSuggestionsModel,
	IComplaintsAndSuggestionsPageModel,
} from '@/src/models/contact-us';
import { useSendComplaintsAndSuggestionsMutation } from '@/src/store/RTKQuery/contact-us/contactUsApi';
import CustomButton from '@/src/components/ui/buttons/CustomButton';
import { notification } from 'antd/lib';
import { HRef } from '@/src/utilities/href';
import { useRouter } from 'next/router';

interface IProps {
	data: IComplaintsAndSuggestionsPageModel;
}

const ComplaintsAndSuggestions: FC<IProps> = (props) => {
	const { data } = props;
	const t = useI18n();
	const router = useRouter();

	const schema = () => {
		return yup.object().shape({
			name: yup.string().required(t('required')),
			email: yup
				.string()
				.email(t('invalidEmail'))
				.required(t('required')),
			mobile: yup.string().required(t('required')),
			content: yup.string().required(t('required')),
		});
	};
	const [sendComplaintsAndSuggestions, sendComplaintsAndSuggestionsResponse] =
		useSendComplaintsAndSuggestionsMutation();
	useEffect(() => {
		if (sendComplaintsAndSuggestionsResponse.isSuccess) {
			notification.success({
				message: t('thankYouForContactingUs'),
			});
			router.push(HRef.home);
		}
	}, [sendComplaintsAndSuggestionsResponse.isSuccess]);
	return (
		<div className="container">
			<h1 className={'mb-[20px] c_004053 f-32-700'}>
				{t('complaintsAndSuggestions')}
			</h1>
			<div className="p-[25px] border b-c_EDF4F2  mb-[60px] rounded-[10px] bg-c_white">
				<h2 className={'f-24-700 c_004053 mb-[10px]'}>
					{data.subtitle}
				</h2>
				<p className={'f-18-700 c_004053 mb-[40px]'}>
					{data.description}
				</p>
				<Formik
					initialValues={new ComplaintsAndSuggestionsModel()}
					validationSchema={schema()}
					onSubmit={(values) => {
						sendComplaintsAndSuggestions(values);
					}}
				>
					{({}) => (
						<Form>
							<div className="grid grid-cols-12 gap-[24px] mb-[30px]">
								<Field
									className={'md:col-span-6 col-span-12'}
									label={t('firstNameAndLastName')}
									placeholder={t('pleaseEnterYour', {
										fieldName: t('firstNameAndLastName'),
									})}
									name={'name'}
									component={InputField}
								/>
								<Field
									className={'md:col-span-6 col-span-12'}
									label={t('email')}
									placeholder={t('pleaseEnterYour', {
										fieldName: t('email'),
									})}
									name={'email'}
									type={'email'}
									component={InputField}
								/>
								<Field
									className={'md:col-span-6 col-span-12'}
									label={t('mobile')}
									placeholder={t('pleaseEnterYour', {
										fieldName: t('mobile'),
									})}
									name={'mobile'}
									component={InputField}
								/>
								<Field
									className={'col-span-12'}
									label={t(
										'contentOfComplaintsAndSuggestions',
									)}
									placeholder={t('pleaseWriteYour', {
										fieldName: t(
											'contentOfComplaintsAndSuggestions',
										),
									})}
									name={'content'}
									component={TextAreaField}
								/>
							</div>
							<div className="flex justify-end">
								<CustomButton
									text={t('send')}
									type={'submit'}
									className={'button-secondary'}
									isLoading={
										sendComplaintsAndSuggestionsResponse.isLoading
									}
									disabled={
										sendComplaintsAndSuggestionsResponse.isLoading
									}
								/>
							</div>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
};
export default ComplaintsAndSuggestions;
