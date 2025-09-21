'use client';
import { getString } from '@/src/utilities/string';
import { FieldProps, getIn } from 'formik';
import React, { useRef } from 'react';
import PinField from 'react-pin-field';
import FieldMessage from './FieldMessage';

interface IProps extends FieldProps {
	count: number;
	className?: string;
	label?: string;
}

const CodeInputField: React.FC<IProps> = (props) => {
	const {
		count = 4,
		className,
		label,
		field,
		form: { handleBlur, setFieldValue, errors, touched },
		...restProps
	} = props;
	const errorMessage = getIn(errors, field.name);
	const touch = getIn(touched, field.name);
	const fieldRef = useRef<HTMLInputElement[]>(null);
	return (
		<div className={'code-input-field ' + getString(className)}>
			{label && <label className={'mb-[10px]'}>{label}</label>}
			<div className={'input-list'}>
				<PinField
					dir="ltr"
					name={field.name}
					length={count}
					ref={fieldRef}
					onChange={(code) => {
						setFieldValue(field.name, code);
					}}
				/>
			</div>
			{errorMessage && touch && <FieldMessage message={errorMessage} />}
		</div>
	);
};
export default CodeInputField;
