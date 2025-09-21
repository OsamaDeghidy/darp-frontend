import { FC, ReactNode } from 'react';
import Link from 'next/link';
import { ILinkModel } from '@/src/models/link';

interface IProps {
	title: string;
	description: string;
	link?: ILinkModel;
	button?: ReactNode;
}

const AuthAlertMessage: FC<IProps> = (props) => {
	const { title, link, description, button } = props;
	return (
		<div>
			<h2 className={'f-24-700 c_004053 mb-[15px]'}>{title}</h2>
			<p className={'f-14-500 c_black mb-[30px]'}>{description}</p>
			{link && (
				<Link
					href={link.href}
					className={'button button-secondary w-full'}
				>
					{link.text}
				</Link>
			)}
			{button}
		</div>
	);
};
export default AuthAlertMessage;
