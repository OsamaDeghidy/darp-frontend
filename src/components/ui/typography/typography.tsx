import React from 'react';

interface TextProp {
	text: string;
	className?: string;
}

export const SectionTitle: React.FC<TextProp> = ({ text, className }) => {
	return (
		<h2
			className={`${className} text-[32px] font-bold leading-40px mb-[30px]`}
		>
			{text}
		</h2>
	);
};

export const DetailsTitle: React.FC<TextProp> = ({ text, className }) => {
	return (
		<h2
			className={`${className} text-[24px] font-bold leading-[32px] mb-[20px]`}
		>
			{text}
		</h2>
	);
};

export const BodyText18B: React.FC<TextProp> = ({ text, className }) => {
	return (
		<p className={`${className} text-[18px] font-bold leading-[24px]`}>
			{text}
		</p>
	);
};

export const BodyText20SB: React.FC<TextProp> = ({ text, className }) => {
	return (
		<p className={`${className} text-[20px] font-semibold leading-[26px]`}>
			{text}
		</p>
	);
};

export const BodyText16R: React.FC<TextProp> = ({ text, className }) => {
	return (
		<p className={`${className} text-[16px] font-normal leading-[22px]`}>
			{text}
		</p>
	);
};

export const BodyText14R: React.FC<TextProp> = ({ text, className }) => {
	return (
		<p className={`${className} text-[14px] font-normal leading-[18px]`}>
			{text}
		</p>
	);
};
