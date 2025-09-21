import React from 'react';

interface IProps {
	message: string;
}

const FieldMessage: React.FC<IProps> = (props) => {
	const { message } = props;
	return (
		<p className={'field-message field-error-message c_EB0000'}>
			{message}
		</p>
	);
};
export default FieldMessage;
