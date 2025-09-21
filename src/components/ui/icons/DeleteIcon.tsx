import { FC, SVGProps } from 'react';

interface IProps extends SVGProps<SVGSVGElement> {}

const DeleteIcon: FC<IProps> = (props) => {
	return (
		<svg
			width="14"
			height="16"
			viewBox="0 0 14 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M13.25 2.5H10.9062L9.84375 0.75C9.5625 0.28125 9.09375 0 8.5625 0H5.40625C4.875 0 4.40625 0.28125 4.125 0.75L3.0625 2.5H0.75C0.3125 2.5 0 2.84375 0 3.25C0 3.6875 0.3125 4 0.75 4H1L1.65625 14.5938C1.6875 15.4062 2.34375 16 3.15625 16H10.8125C11.625 16 12.2812 15.4062 12.3125 14.5938L13 4H13.25C13.6562 4 14 3.6875 14 3.25C14 2.84375 13.6562 2.5 13.25 2.5ZM5.40625 1.5H8.5625L9.15625 2.5H4.8125L5.40625 1.5ZM10.8125 14.5H3.15625L2.5 4H11.4688L10.8125 14.5Z"
				fill="#F60505"
			/>
		</svg>
	);
};
export default DeleteIcon;
