import { FieldProps, getIn } from 'formik';
import React, { ReactNode, useEffect } from 'react';
import { Checkbox } from 'antd/lib';
import { getString } from '@/src/utilities/string';
import FieldMessage from '@/src/components/ui/fields/FieldMessage';

interface IProps extends FieldProps {
	className?: string;
	onChange?: (newValue: boolean) => void;
	children: ReactNode;
	label?: string;
}

const CheckboxField: React.FC<IProps> = (props) => {
	const {
		field,
		children,
		className,
		label,
		onChange,
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
	}, [isSubmitting]);

	return (
		<div className={'checkbox-field ' + getString(className)}>
			<Checkbox
				id={field.name}
				name={field.name}
				onChange={(e) => {
					setFieldTouched(field.name, true);
					setFieldValue(field.name, e.target.checked);
					onChange && onChange(e.target.checked);
				}}
				value={field.value}
				checked={field.value}
			>
				{children ? (
					children
				) : (
					<span className={'f-16-500 c_004053'}>{label}</span>
				)}
			</Checkbox>
			{errorMessage && touch && <FieldMessage message={errorMessage} />}
		</div>
	);
};
export default CheckboxField;
