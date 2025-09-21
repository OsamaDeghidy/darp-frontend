import React, { FC } from 'react';
import { useI18n } from '@/src/locales';
import { Field, Form, Formik } from 'formik';
import InputField from '@/src/components/ui/fields/InputField';
import TextAreaField from '@/src/components/ui/fields/TextAreaField';
import * as yup from 'yup';
import SelectField from '@/src/components/ui/fields/SelectField';
import UploadFileField from '@/src/components/ui/fields/UploadFileField';

interface IProps {}

const fieldCol3Class = 'lg:col-span-4 md:col-span-6 col-span-12';

const NominateAPath: FC<IProps> = (props) => {
	const t = useI18n();
	const schema = () => {
		return yup.object().shape({});
	};
	return (
		<section
			className={'border rounded-[10px] p-[25px] b-c_F1F2EC mb-[15px]'}
		>
			<h2 className={'mb-[20px] c_004053 f-32-700'}>
				{t('nominateAPath')}
			</h2>
			<p className={'mb-[20px] f-20-700 c_004053'}>
				{t('nominateAPathDescription')}
			</p>
			<Formik
				initialValues={{}}
				validationSchema={schema}
				onSubmit={(values) => {}}
			>
				{({ values }) => (
					<Form>
						<div className="grid grid-cols-12 gap-[24px] mb-[20px]">
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
								label={t('trackLocation')}
								placeholder={t('pleaseEnterYour', {
									fieldName: t('trackLocation'),
								})}
								name={'trackLocation'}
								component={InputField}
							/>

							<Field
								className={fieldCol3Class}
								label={t('trackArea')}
								placeholder={t('pleaseEnterYour', {
									fieldName: t('trackArea'),
								})}
								name={'trackArea'}
								component={SelectField}
							/>
							<Field
								className={'col-span-12'}
								multiple={true}
								styleType={'dnd'}
								name={'file'}
								label={t('attachPhotosOfTheTrack')}
								component={UploadFileField}
							/>
							<Field
								className={'lg:col-span-6 col-span-12'}
								label={t('reasonsForNominatingThePath')}
								placeholder={t('pleaseWriteYour', {
									fieldName: t('reasonsForNominatingThePath'),
								})}
								name={'reasonsForNominatingThePath'}
								component={TextAreaField}
							/>
							<Field
								className={'lg:col-span-6 col-span-12'}
								label={t('trackInformation')}
								placeholder={t('pleaseWriteYour', {
									fieldName: t('trackInformation'),
								})}
								name={'trackInformation'}
								component={TextAreaField}
							/>
						</div>
						<button
							type={'submit'}
							className={'button button-orange'}
						>
							{t('send')}
						</button>
					</Form>
				)}
			</Formik>
		</section>
	);
};
export default NominateAPath;
