import { FieldProps, getIn } from 'formik';
import React, { useEffect } from 'react';
import { getString } from '@/src/utilities/string';
import FieldMessage from '@/src/components/ui/fields/FieldMessage';
import { useDirection } from '@/src/hooks/useDirection';
import TextArea from 'antd/lib/input/TextArea';
import { IStatusChangeModel } from '@/src/models/status-change';

interface IProps extends FieldProps {
	label?: string;
	placeholder?: string;
	isDisabled?: boolean;
	className?: string;
	removeValueNow?: IStatusChangeModel;
}

const TextAreaField: React.FC<IProps> = (props) => {
	const {
		label,
		placeholder,
		field,
		isDisabled = false,
		className,
		removeValueNow,
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
	useEffect(() => {
		if (removeValueNow?.value) {
			setFieldValue(field.name, '');
		}
	}, [removeValueNow?.statusChange]);
	return (
		<div className={`input-field ${locale}` + getString(className)}>
			<label>
				{label && <span className={'block mb-[10px]'}>{label}</span>}
				<TextArea
					{...field}
					{...restProps}
					rows={4}
					name={field.name}
					placeholder={placeholder}
					disabled={isDisabled}
					className={'outline-none'}
				/>
			</label>
			{errorMessage && touch && <FieldMessage message={errorMessage} />}
		</div>
	);
};
export default TextAreaField;
