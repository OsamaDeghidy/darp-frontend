import React, { FC, useEffect } from 'react';
import { useI18n } from '@/src/locales';
import CustomGoogleMap from '@/src/components/ui/maps/CustomGoogleMap';
import { Field, Form, Formik } from 'formik';
import InputField from '@/src/components/ui/fields/InputField';
import TextAreaField from '@/src/components/ui/fields/TextAreaField';
import * as yup from 'yup';
import PhoneIcon from '@/src/components/ui/icons/PhoneIcon';
import MailIcon from '@/src/components/ui/icons/MailIcon';
import LocationIcon from '@/src/components/ui/icons/LocationIcon';
import { ContactUsModel, IContactusPageModel } from '@/src/models/contact-us';
import { useSendContactUsMutation } from '@/src/store/RTKQuery/contact-us/contactUsApi';
import CustomButton from '@/src/components/ui/buttons/CustomButton';
import { notification } from 'antd/lib';
import { useRouter } from 'next/router';
import { HRef } from '@/src/utilities/href';

interface IProps {
	data: IContactusPageModel;
}

const fieldCol2Class = 'md:col-span-6 col-span-12';
const CallUs: FC<IProps> = (props) => {
	const { data } = props;
	const t = useI18n();
	const [sendContactUs, sendContactUsResponse] = useSendContactUsMutation();
	const router = useRouter();
	const schema = () => {
		return yup.object().shape({
			firstName: yup.string().required(t('required')),
			lastName: yup.string().required(t('required')),
			email: yup
				.string()
				.email(t('invalidEmail'))
				.required(t('required')),
			mobile: yup.string().required(t('required')),
			content: yup.string().required(t('required')),
		});
	};
	const callUsWays = [
		{
			icon: <PhoneIcon />,
			text: t('thePhone'),
			value: data.mobile,
		},
		{
			icon: <MailIcon />,
			text: t('email'),
			value: data.email,
		},
		{
			icon: <LocationIcon className={'fill-c_004053'} />,
			text: t('theAddress'),
			value: data.address,
		},
	];
	useEffect(() => {
		if (sendContactUsResponse.isSuccess) {
			notification.success({
				message: t('thankYouForContactingUs'),
			});
			router.push(HRef.home);
		}
	}, [sendContactUsResponse.isSuccess]);
	return (
		<section>
			<h1 className={'mb-[20px] c_004053 f-32-700'}>{data.title}</h1>
			<div className="grid grid-cols-12 gap-[24px] mb-[20px]">
				{callUsWays.map((item, index) => (
					<div
						key={index}
						className={'lg:col-span-4 md:col-span-6 col-span-12'}
					>
						<div
							className={
								'h-full flex items-center justify-center flex-col p-[15px] border b-c_F1F2EC rounded-[10px] gap-[10px] bg-c_white'
							}
						>
							{item.icon}
							<h2 className={'f-18-700 c_004053 text-center'}>
								{item.text}
							</h2>
							<p
								className={
									'f-16-600 c_black text-center break-all'
								}
							>
								{item.value}
							</p>
						</div>
					</div>
				))}
			</div>

			<div
				className={
					'border rounded-[10px] p-[25px] b-c_F1F2EC mb-[60px]  bg-c_white'
				}
			>
				<h3 className={'f-24-700 c_004053 mb-[20px]'}>
					{data.formTitle}
				</h3>
				<Formik
					initialValues={new ContactUsModel()}
					validationSchema={schema}
					onSubmit={(values) => {
						sendContactUs(values);
					}}
				>
					{({ values }) => (
						<Form>
							<div className="grid grid-cols-12 gap-[24px] mb-[20px]">
								<Field
									className={fieldCol2Class}
									label={t('firstName')}
									placeholder={t('pleaseEnterYour', {
										fieldName: t('firstName'),
									})}
									name={'firstName'}
									component={InputField}
								/>
								<Field
									className={fieldCol2Class}
									label={t('lastName')}
									placeholder={t('pleaseEnterYour', {
										fieldName: t('lastName'),
									})}
									name={'lastName'}
									component={InputField}
								/>

								<Field
									className={fieldCol2Class}
									label={t('mobile')}
									placeholder={t('pleaseEnterYour', {
										fieldName: t('mobile'),
									})}
									name={'mobile'}
									component={InputField}
								/>
								<Field
									className={fieldCol2Class}
									label={t('email')}
									placeholder={t('pleaseEnterYour', {
										fieldName: t('email'),
									})}
									name={'email'}
									type={'email'}
									component={InputField}
								/>
								<Field
									className={'col-span-12'}
									label={t('message')}
									placeholder={t('pleaseWriteYour', {
										fieldName: t('message'),
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
									isLoading={sendContactUsResponse.isLoading}
									disabled={sendContactUsResponse.isLoading}
								/>
							</div>
						</Form>
					)}
				</Formik>
			</div>
			<h3 className={'f-24-700 c_004053 mb-[20px]'}>{data.mapTitle}</h3>
			<div className={'rounded-[10px] overflow-hidden mb-[60px]'}>
				<CustomGoogleMap
					lat={Number(data.mapLatitude)}
					lng={Number(data.mapLongitude)}
				/>
			</div>
		</section>
	);
};
export default CallUs;
