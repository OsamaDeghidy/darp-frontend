import React, { ReactNode } from 'react';

interface IProps {
	icon?: ReactNode;
	text?: string;
	body?: string;
}

const NoData: React.FC<IProps> = (props) => {
	const { icon, text, body } = props;
	return (
		<div className="space-y-[10px] flex flex-col justify-center items-center text-center py-[60px] bg-white h-full w-full ">
			{icon && icon}
			<span className="font-[400] text-[14px] leading-[22px] text-black/85">
				{text}
			</span>
			<p className="font-[400] text-[13px] leading-[17.03px] text-[#888888] max-w-[90%] md:max-w-[400px]">
				{body}
			</p>
		</div>
	);
};

export default NoData;
