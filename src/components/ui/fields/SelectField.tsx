import { FieldProps, getIn } from 'formik';
import React, { ReactNode, useEffect, useState } from 'react';
import { Select } from 'antd/lib';
import { isArray } from 'lodash';
import { ISelectItemModel } from '@/src/models/select-item';
import { getString } from '@/src/utilities/string';
import ArrowIcon from '@/src/components/ui/icons/ArrowIcon';
import FieldMessage from '@/src/components/ui/fields/FieldMessage';
import { toLookupsModel } from '@/src/utilities/transformers/select-item-transformer';

export interface ISelectFieldProps extends FieldProps {
	label?: string;
	placeholder?: string;
	onChange?: (newValue: ISelectItemModel | ISelectItemModel[]) => void;
	className?: string;
	options: ISelectItemModel[];
	isLoading?: boolean;
	isDisabled?: boolean;
	isFullValue?: boolean;
	onSearch?: (value: string) => void;
	mode?: 'multiple' | 'tags';
	notFoundContent?: ReactNode;
	filterOption?: boolean;
	labelInValue?: boolean;
}

const SelectField: React.FC<ISelectFieldProps> = (props) => {
	const {
		label,
		placeholder,
		field,
		className,
		onChange,
		isLoading = false,
		isDisabled = false,
		isFullValue = false,
		onSearch,
		notFoundContent,
		filterOption,
		labelInValue,
		mode,
		options,
		form: { setFieldValue, errors, isSubmitting, setFieldTouched, touched },
		...restProps
	} = props;

	const errorMessage = getIn(errors, field.name);
	const touch = getIn(touched, field.name);
	const [optionValue, setOptionValue] = useState<any>();
	useEffect(() => {
		if (field.value) {
			if (isArray(field.value)) {
				setOptionValue(field.value.map((item) => item));
			} else {
				setOptionValue(field.value.id ? field.value.id : field.value);
			}
		} else {
			setOptionValue(null);
		}
	}, [field.value]);
	useEffect(() => {
		if (isSubmitting) {
			setFieldTouched(field.name, true);
		}
	}, [isSubmitting, setFieldTouched, field.name]);
	return (
		<div
			className={
				'select-field ' +
				(field.value ? 'with-value ' : '') +
				getString(className)
			}
		>
			<label>
				{label && <span className={'block mb-[10px]'}>{label}</span>}
				<Select
					suffixIcon={<ArrowIcon className={'right-[20px]'} />}
					allowClear={true}
					showSearch={true}
					loading={isLoading}
					value={optionValue}
					disabled={isLoading || isDisabled}
					placeholder={placeholder}
					onSearch={onSearch}
					mode={mode}
					labelInValue={labelInValue}
					filterOption={filterOption}
					notFoundContent={notFoundContent}
					onChange={(value, option) => {
						if (value) {
							if (isFullValue) {
								if (!isArray(option) && option) {
									setFieldValue(
										field.name,
										toLookupsModel(option),
									);
								}
							} else {
								if (mode == 'multiple' && isArray(option)) {
									setFieldValue(
										field.name,
										option.map((item) => item.value),
									);
								} else {
									setFieldValue(field.name, value);
								}
							}
						} else {
							setFieldValue(field.name, '');
						}
						if (onChange) {
							onChange(option);
						}
					}}
					options={options}
				/>
			</label>
			{errorMessage && touch && <FieldMessage message={errorMessage} />}
		</div>
	);
};
export default SelectField;
