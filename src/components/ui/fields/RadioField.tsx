import { FieldProps, getIn } from 'formik';
import React, { ReactNode, useEffect } from 'react';
import { getString } from '@/src/utilities/string';
import FieldMessage from '@/src/components/ui/fields/FieldMessage';
import { Radio } from 'antd/lib';

interface IProps extends FieldProps {
	className?: string;
	onChange?: (newValue: boolean) => void;
	children: ReactNode;
	label?: string;
	type?: string;
	value: any;
}

const RadioField: React.FC<IProps> = (props) => {
	const {
		field,
		children,
		className,
		label,
		type = 'radio',
		onChange,
		value,
		form: {
			setFieldValue,
			errors,
			isSubmitting,
			setFieldTouched,
			touched,
			handleChange,
		},
		...restProps
	} = props;
	const errorMessage = getIn(errors, field.name);
	const touch = getIn(touched, field.name);
	useEffect(() => {
		if (isSubmitting) {
			setFieldTouched(field.name, true);
		}
	}, [isSubmitting, setFieldTouched, field.name]);
	return (
		<div
			className={'radio-field ' + ('type-' + type) + getString(className)}
		>
			<Radio
				id={field.name}
				name={field.name}
				onChange={(e) => {
					setFieldTouched(field.name, true);
					handleChange(e);
					setFieldValue(field.name, e.target.value);
				}}
				value={value}
				checked={field.value === value}
			>
				{children ? (
					children
				) : (
					<span className={'label f-16-500 c_004053'}>{label}</span>
				)}
			</Radio>
			{errorMessage && touch && <FieldMessage message={errorMessage} />}
		</div>
	);
};
export default RadioField;
