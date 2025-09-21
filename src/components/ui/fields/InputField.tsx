import { FieldProps, getIn } from 'formik';
import React, { HTMLInputTypeAttribute, ReactNode } from 'react';
import { getString } from '@/src/utilities/string';
import FieldMessage from '@/src/components/ui/fields/FieldMessage';
import { useDirection } from '@/src/hooks/useDirection';

interface IProps extends FieldProps {
	type?: HTMLInputTypeAttribute;
	label?: string;
	placeholder?: string;
	isDisabled?: boolean;
	className?: string;
	children?: ReactNode;
}

const InputField: React.FC<IProps> = (props) => {
	const {
		children,
		type = 'text',
		label,
		placeholder,
		field,
		isDisabled = false,
		className,
		form: {
			handleBlur,
			initialValues,
			values,
			setFieldValue,
			errors,
			touched,
		},
		...restProps
	} = props;
	const errorMessage = getIn(errors, field.name);
	const touch = getIn(touched, field.name);
	const locale = useDirection();
	return (
		<div className={`input-field ${locale}` + getString(className)}>
			<label>
				{label && <span className={'block mb-[10px]'}>{label}</span>}
				<input
					{...field}
					{...restProps}
					name={field.name}
					type={type}
					placeholder={placeholder}
					disabled={isDisabled}
					className={'outline-none'}
				/>
				{children}
			</label>

			{errorMessage && touch && <FieldMessage message={errorMessage} />}
		</div>
	);
};
export default InputField;
