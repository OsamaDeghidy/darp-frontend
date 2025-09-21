import { FieldProps, getIn } from 'formik';
import React, { useEffect, useState } from 'react';
import { DatePicker } from 'antd/lib';
import { getString } from '@/src/utilities/string';
import FieldMessage from '@/src/components/ui/fields/FieldMessage';
import dayjs, { Dayjs } from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

interface IProps extends FieldProps {
    label?: string;
    placeholder?: string;
    className?: string;
}

const DatePickerField: React.FC<IProps> = (props) => {
    const {
        label,
        field,
        className,
        placeholder,
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
    const [date, setDate] = useState<Dayjs | null>();
    useEffect(() => {
        if (field.value) {
            setDate(dayjs.utc(field.value));
        }
    }, []);
    useEffect(() => {
        setFieldValue(field.name, dayjs.utc(date));
    }, [date]);
    useEffect(() => {
        if (isSubmitting) {
            setFieldTouched(field.name, true);
        }
    }, [isSubmitting]);
    return (
        <div
            className={
                'input-field date-picker-field ' +
                (field.value ? 'with-value ' : '') +
                getString(className)
            }
        >
            <label>
                {label && <span className={'block'}>{label}</span>}
                <DatePicker
                    className={'w-full'}
                    placeholder={placeholder}
                    value={date}
                    onChange={(value) => {
                        setDate(value);
                    }}
                />
            </label>
            {errorMessage && touch && <FieldMessage message={errorMessage} />}
        </div>
    );
};
export default DatePickerField;