import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { getString } from '@/src/utilities/string';
import Loader from '@/src/components/ui/Loader';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	isLoading?: boolean;
	text?: ReactNode;
	icon?: ReactNode;
}

const CustomButton: React.FC<IProps> = (props) => {
	const { isLoading = false, text, icon, className, ...restProps } = props;
	return (
		<button {...restProps} className={`${getString(className)} button`}>
			{icon && icon}
			{isLoading && <Loader />}
			<span>{text}</span>
		</button>
	);
};
export default CustomButton;
