import React, { useEffect } from 'react';
import CloseIcon from '@/src/components/ui/icons/CloseIcon';
import { IStatusChangeModel, StatusChangeModel } from '@/src/models/status-change';
import { Modal } from 'antd/lib';
import { Field, Form, Formik } from 'formik';
import InputField from '@/src/components/ui/fields/InputField';
import DatePickerField from '@/src/components/ui/fields/DatePickerField';
import { useI18n } from '@/src/locales';

interface IProps {
	openModal: IStatusChangeModel;
}

const AddCardModal: React.FC<IProps> = (props) => {
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
							{t('addANewCard')}
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
								label={t('cardNumber')}
								placeholder={t('pleaseEnterYour', {
									fieldName: t('cardNumber'),
								})}
								name={'cardNumber'}
								type={'number'}
								component={InputField}
							/>
							<Field
								className={'md:col-span-6 col-span-12'}
								label={t('expireDate')}
								placeholder={t('pleaseEnterYour', {
									fieldName: t('expireDate'),
								})}
								name={'expireDate'}
								component={DatePickerField}
							/>
							<Field
								className={'md:col-span-6 col-span-12'}
								label={t('cvc')}
								placeholder={t('pleaseEnterYour', {
									fieldName: t('cvc'),
								})}
								name={'cvc'}
								type={'number'}
								component={InputField}
							/>
						</div>
						<div className="flex items-center gap-[15px]">
							<button
								type={'submit'}
								className={'button button-orange w-full'}
							>
								{t('savingChanges')}
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
export default AddCardModal;
