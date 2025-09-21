import { Field } from 'formik';
import { FC, useEffect, useState } from 'react';
import { isEmpty } from 'lodash';
import { toSelectItems } from '@/src/utilities/transformers/select-item-transformer';
import SelectField from '@/src/components/ui/fields/SelectField';
import { ISelectItemModel } from '@/src/models/select-item';

import { LookupTypeEnum } from '@/src/enums/lookup-type-enum';
import { useGetLookupsQuery } from '@/src/store/RTKQuery/common/commonApi';

interface IProps {
	name: string;
	label?: string;
	className?: string;
	placeholder?: string;
	isDisabled?: boolean;
	isFullValue?: boolean;
	type: LookupTypeEnum;
}

export const GeneralLookup: FC<IProps> = (props) => {
	const {
		label,
		isFullValue,
		className,
		name,
		placeholder,
		isDisabled,
		type,
	} = props;
	const [options, setOptions] = useState<ISelectItemModel[]>([]);
	const { data, error, isLoading, isError, isSuccess } = useGetLookupsQuery({
		type,
	});
	useEffect(() => {
		if (!isEmpty(data) && data != undefined) {
			const optionsData = toSelectItems(data.data);
			setOptions(optionsData);
		}
	}, [data]);
	return (
		<Field
			options={options}
			isLoading={isLoading}
			name={name}
			label={label}
			placeholder={placeholder}
			isDisabled={isDisabled}
			className={className}
			isFullValue={isFullValue}
			component={SelectField}
		/>
	);
};
