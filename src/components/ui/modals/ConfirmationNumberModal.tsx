import React, { useEffect } from 'react';
import CloseIcon from '@/src/components/ui/icons/CloseIcon';
import { IStatusChangeModel, StatusChangeModel } from '@/src/models/status-change';
import { Modal } from 'antd/lib';
import { useI18n } from '@/src/locales';
import { Field, Form, Formik } from 'formik';
import CodeInputField from '@/src/components/ui/fields/CodeInputField';

interface IProps {
	openModal: IStatusChangeModel;
	onSubmit: () => void;
}

const ConfirmationNumberModal: React.FC<IProps> = (props) => {
	const { openModal = new StatusChangeModel(), onSubmit } = props;
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
			width={500}
			closeIcon={<CloseIcon className={'fill-c_black900'} />}
			destroyOnClose={true}
		>
			<div className={'flex flex-col items-center justify-center'}>
				<h6 className="f-24-700 c_004053 text-center mb-[15px]">
					{t('confirmationNumber')}
				</h6>
				<p className={'f-16-700 c_737373 text-center'}>
					{t('pleaseEnterTheIdNumberThatWasSentTo')}
				</p>
				<p className={'f-16-700 c_004053 mb-[20px] text-center'}>
					+025 3256 254
				</p>
				<Formik
					initialValues={{
						code: '',
					}}
					onSubmit={(values) => {}}
				>
					{({ values }) => (
						<Form>
							<div className="flex flex-col gap-[10px] mb-[20px]">
								<Field
									name={'code'}
									count={4}
									component={CodeInputField}
								/>
							</div>
							<button
								className={'button button-orange w-full'}
								onClick={() => {
									setIsModalOpen(false);
									onSubmit();
								}}
							>
								{t('confirm')}
							</button>
						</Form>
					)}
				</Formik>
			</div>
		</Modal>
	);
};
export default ConfirmationNumberModal;
