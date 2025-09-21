import { FC, SVGProps } from 'react';

interface IProps extends SVGProps<SVGSVGElement> {}

const PlayIcon: FC<IProps> = (props) => {
	return (
		<svg
			{...props}
			width="15"
			height="16"
			viewBox="0 0 15 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M9.65625 7.34375L11.5312 5.46875L2.75 0.40625L9.65625 7.34375ZM0.96875 0L8.96875 8L0.96875 16C0.5625 15.8125 0.28125 15.4062 0.28125 14.9062V1.125C0.28125 0.625 0.5625 0.21875 0.96875 0ZM14.25 7.0625C14.8438 7.5 14.8438 8.53125 14.2812 8.96875L12.4062 10.0312L10.3438 8L12.4062 6L14.25 7.0625ZM2.75 15.5938L9.65625 8.6875L11.5312 10.5625L2.75 15.5938Z"
				fill="white"
			/>
		</svg>
	);
};
export default PlayIcon;
