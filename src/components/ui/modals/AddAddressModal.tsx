import React, { useEffect } from 'react';
import CloseIcon from '@/src/components/ui/icons/CloseIcon';
import { IStatusChangeModel, StatusChangeModel } from '@/src/models/status-change';
import { Modal } from 'antd/lib';
import { Field, Form, Formik } from 'formik';
import InputField from '@/src/components/ui/fields/InputField';
import { useI18n } from '@/src/locales';
import SelectField from '@/src/components/ui/fields/SelectField';

interface IProps {
	openModal: IStatusChangeModel;
}

const AddAddressModal: React.FC<IProps> = (props) => {
	const { openModal = new StatusChangeModel() } = props;
	const t = useI18n();
	const [isModalOpen, setIsModalOpen] = React.useState(false);
	useEffect(() => {
		setIsModalOpen(openModal.value);
	}, [openModal]);
	const handleCancel = () => {
		setIsModalOpen(false);
	};
	return (
		<Modal
			className={'custom-modal'}
			open={isModalOpen}
			onCancel={handleCancel}
			footer={null}
			width={600}
			closeIcon={<CloseIcon className={'fill-c_black900'} />}
			destroyOnClose={true}
		>
			<Formik initialValues={{}} onSubmit={(values) => {}}>
				{({ values }) => (
					<Form>
						<h3 className={'f-24-700 c_004053 mb-[20px]'}>
							{t('addANewAddress')}
						</h3>
						<div className="grid grid-cols-12 gap-[24px] mb-[30px]">
							<Field
								className={'col-span-12'}
								label={t('firstNameAndLastName')}
								placeholder={t('pleaseEnterYour', {
									fieldName: t('firstNameAndLastName'),
								})}
								name={'name'}
								component={InputField}
							/>
							<Field
								className={'col-span-12'}
								label={t('telephone')}
								placeholder={t('pleaseEnterYour', {
									fieldName: t('telephone'),
								})}
								name={'telephone'}
								type={'number'}
								component={InputField}
							/>
							<Field
								className={'col-span-12'}
								label={t('theProvince')}
								placeholder={t('pleaseEnterYour', {
									fieldName: t('theProvince'),
								})}
								name={'theProvince'}
								component={SelectField}
							/>
							<Field
								className={'col-span-12'}
								label={t('city')}
								placeholder={t('pleaseEnterYour', {
									fieldName: t('city'),
								})}
								name={'city'}
								component={SelectField}
							/>
							<Field
								className={'col-span-12'}
								label={t('country')}
								placeholder={t('pleaseEnterYour', {
									fieldName: t('country'),
								})}
								name={'country'}
								component={SelectField}
							/>
						</div>
						<div className="flex items-center gap-[15px]">
							<button
								type={'submit'}
								className={'button button-orange w-full'}
							>
								{t('save')}
							</button>
							<button
								className={'button button-outline w-full'}
								onClick={() => {
									setIsModalOpen(false);
								}}
							>
								{t('cancel')}
							</button>
						</div>
					</Form>
				)}
			</Formik>
		</Modal>
	);
};
export default AddAddressModal;
