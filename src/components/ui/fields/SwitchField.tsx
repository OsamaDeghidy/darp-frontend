import { FieldProps, getIn } from 'formik';
import React, { ReactNode, useEffect } from 'react';
import { Switch } from 'antd/lib';
import { getString } from '@/src/utilities/string';
import FieldMessage from '@/src/components/ui/fields/FieldMessage';

interface IProps extends FieldProps {
	className?: string;
	onChange?: (newValue: boolean) => void;
	children: ReactNode;
	label?: string;
}

const SwitchField: React.FC<IProps> = (props) => {
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
	}, [isSubmitting, field.name, setFieldTouched]);
	return (
		<div className={'switch-field ' + getString(className)}>
			<div className="switch-field-wrapper">
				<Switch
					onChange={(checked, event) => {
						setFieldTouched(field.name, true);
						setFieldValue(field.name, checked);
					}}
				/>
				{children ? (
					children
				) : (
					<span className={'f-18-500 c_737373'}>{label}</span>
				)}
			</div>
			{errorMessage && touch && <FieldMessage message={errorMessage} />}
		</div>
	);
};
export default SwitchField;
