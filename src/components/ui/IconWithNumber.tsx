import { FC, ReactNode } from 'react';

interface IProps {
	icon: ReactNode;
	value: number;
}

const LanguageChanger: FC<IProps> = (props) => {
	const { value, icon } = props;
	return (
		<div className={'relative'}>
			<span
				className={
					'absolute top-[-5px] left-[-5px] flex items-center justify-center bg-c_F47B3D w-[15px] h-[15px] rounded-full c_white f-10-400'
				}
			>
				{value}
			</span>
			{icon}
		</div>
	);
};
export default LanguageChanger;
