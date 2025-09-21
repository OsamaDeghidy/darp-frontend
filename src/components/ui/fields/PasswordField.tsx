import { FieldProps } from 'formik';
import React, { HTMLInputTypeAttribute, useState } from 'react';
import InputField from '@/src/components/ui/fields/InputField';
import EyeIcon from '@/src/components/ui/icons/EyeIcon';
import { getString } from '@/src/utilities/string';

interface IProps extends FieldProps {
	label?: string;
	isDisabled?: boolean;
	className?: string;
	showIcon?: boolean;
}

const PasswordField: React.FC<IProps> = (props) => {
	const { className, label, showIcon = true } = props;
	const [type, setType] = useState<HTMLInputTypeAttribute>('password');
	return (
		<InputField
			{...props}
			type={type}
			className={`${getString(className)} ${
				showIcon && ' with-icon '
			} relative ${label && ' with-label '}`}
		>
			<div
				className={'icon absolute cursor-pointer]'}
				onClick={() => {
					if (type == 'password') {
						setType('text');
					} else {
						setType('password');
					}
				}}
			>
				{showIcon && <EyeIcon />}
			</div>
		</InputField>
	);
};
export default PasswordField;
