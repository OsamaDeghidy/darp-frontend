import React, { FC } from 'react';
import { useI18n } from '@/src/locales';
import { Field, Form, Formik } from 'formik';
import InputField from '@/src/components/ui/fields/InputField';
import * as yup from 'yup';
import TextAreaField from '@/src/components/ui/fields/TextAreaField';

interface IProps {}

const fieldCol3Class = 'lg:col-span-4 md:col-span-6 col-span-12';

const InKindDonation: FC<IProps> = (props) => {
	const t = useI18n();
	const schema = () => {
		return yup.object().shape({});
	};
	return (
		<section>
			<h2 className={'mb-[20px] c_004053 f-32-700'}>
				{t('inKindDonation')}
			</h2>
			<div
				className={
					'border rounded-[10px] p-[25px] b-c_F1F2EC mb-[60px]'
				}
			>
				<p className={'f-16-700 c_2D2D2D mb-[10px]'}>
					{t('pleaseSendToEmail')}{' '}
					<span className={'c_F47B3D'}>info@darb.org</span>
				</p>
				<p className={'f-16-700 c_2D2D2D mb-[20px]'}>
					{t('inKindDonationDescription')}
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
									className={'col-span-12'}
									label={t('theTopic')}
									placeholder={t('pleaseWriteYour', {
										fieldName: t('theDetails'),
									})}
									name={'details'}
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
			</div>
		</section>
	);
};
export default InKindDonation;
